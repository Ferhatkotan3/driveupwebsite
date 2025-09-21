<?php
declare(strict_types=1);

class Session {
    private static bool $started = false;

    public static function start(): void {
        if (!self::$started) {
            if (session_status() === PHP_SESSION_NONE) {
                session_start();
            }
            self::$started = true;
            self::initializeSession();
        }
    }

    private static function initializeSession(): void {
        if (!isset($_SESSION['initialized'])) {
            $_SESSION['initialized'] = true;
            $_SESSION['created_at'] = time();
            $_SESSION['language'] = self::detectLanguage();
            $_SESSION['dark_mode'] = false;
            $_SESSION['session_id'] = session_id();
            
            // Save to database
            self::saveToDatabase();
        }
        
        // Update last activity
        $_SESSION['last_activity'] = time();
        self::updateDatabase();
    }

    public static function setLanguage(string $language): void {
        if (in_array($language, SUPPORTED_LANGUAGES, true)) {
            $_SESSION['language'] = $language;
            self::updateDatabase();
        }
    }

    public static function getLanguage(): string {
        return $_SESSION['language'] ?? DEFAULT_LANGUAGE;
    }

    public static function setDarkMode(bool $darkMode): void {
        $_SESSION['dark_mode'] = $darkMode;
        self::updateDatabase();
    }

    public static function getDarkMode(): bool {
        return $_SESSION['dark_mode'] ?? false;
    }

    public static function get(string $key, $default = null) {
        return $_SESSION[$key] ?? $default;
    }

    public static function set(string $key, $value): void {
        $_SESSION[$key] = $value;
    }

    public static function destroy(): void {
        if (self::$started) {
            // Remove from database
            try {
                $pdo = Database::getInstance();
                $stmt = $pdo->prepare("DELETE FROM user_sessions WHERE id = ?");
                $stmt->execute([session_id()]);
            } catch (Exception $e) {
                error_log("Session cleanup failed: " . $e->getMessage());
            }

            session_destroy();
            self::$started = false;
        }
    }

    private static function detectLanguage(): string {
        // Check URL parameter first
        if (isset($_GET['lang']) && in_array($_GET['lang'], SUPPORTED_LANGUAGES, true)) {
            return $_GET['lang'];
        }

        // Check browser language
        $acceptLanguage = $_SERVER['HTTP_ACCEPT_LANGUAGE'] ?? '';
        if (strpos($acceptLanguage, 'tr') !== false) {
            return 'tr';
        }
        if (strpos($acceptLanguage, 'en') !== false) {
            return 'en';
        }

        return DEFAULT_LANGUAGE;
    }

    private static function saveToDatabase(): void {
        try {
            $pdo = Database::getInstance();
            $stmt = $pdo->prepare("
                INSERT INTO user_sessions (id, language, dark_mode) 
                VALUES (?, ?, ?) 
                ON DUPLICATE KEY UPDATE 
                language = VALUES(language), 
                dark_mode = VALUES(dark_mode),
                last_activity = CURRENT_TIMESTAMP
            ");
            $stmt->execute([
                session_id(),
                self::getLanguage(),
                self::getDarkMode()
            ]);
        } catch (Exception $e) {
            error_log("Session save failed: " . $e->getMessage());
        }
    }

    private static function updateDatabase(): void {
        try {
            $pdo = Database::getInstance();
            $stmt = $pdo->prepare("
                UPDATE user_sessions 
                SET language = ?, dark_mode = ?, last_activity = CURRENT_TIMESTAMP 
                WHERE id = ?
            ");
            $stmt->execute([
                self::getLanguage(),
                self::getDarkMode(),
                session_id()
            ]);
        } catch (Exception $e) {
            error_log("Session update failed: " . $e->getMessage());
        }
    }

    public static function cleanupOldSessions(): void {
        try {
            $pdo = Database::getInstance();
            $stmt = $pdo->prepare("
                DELETE FROM user_sessions 
                WHERE last_activity < DATE_SUB(NOW(), INTERVAL ? SECOND)
            ");
            $stmt->execute([SESSION_LIFETIME]);
        } catch (Exception $e) {
            error_log("Session cleanup failed: " . $e->getMessage());
        }
    }
}
?>