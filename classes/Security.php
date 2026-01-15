<?php
declare(strict_types=1);

class Security {
    public static function generateCSRFToken(): string {
        if (!isset($_SESSION['csrf_token']) || 
            !isset($_SESSION['csrf_token_time']) || 
            (time() - $_SESSION['csrf_token_time']) > CSRF_TOKEN_LIFETIME) {
            
            $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
            $_SESSION['csrf_token_time'] = time();
        }
        return $_SESSION['csrf_token'];
    }

    public static function validateCSRFToken(string $token): bool {
        if (!isset($_SESSION['csrf_token']) || !isset($_SESSION['csrf_token_time'])) {
            return false;
        }

        if ((time() - $_SESSION['csrf_token_time']) > CSRF_TOKEN_LIFETIME) {
            unset($_SESSION['csrf_token'], $_SESSION['csrf_token_time']);
            return false;
        }

        return hash_equals($_SESSION['csrf_token'], $token);
    }

    public static function sanitizeInput(string $input): string {
        return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
    }

    public static function validateEmail(string $email): bool {
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }

    public static function validatePhone(string $phone): bool {
        return preg_match('/^[\d\s\+\-\(\)]+$/', $phone) === 1;
    }

    public static function rateLimitCheck(string $identifier, int $maxAttempts = 5, int $timeWindow = 3600): bool {
        if (!isset($_SESSION['rate_limit'])) {
            $_SESSION['rate_limit'] = [];
        }

        $now = time();
        $key = md5($identifier);

        if (!isset($_SESSION['rate_limit'][$key])) {
            $_SESSION['rate_limit'][$key] = ['count' => 1, 'first_attempt' => $now];
            return true;
        }

        $data = $_SESSION['rate_limit'][$key];

        // Reset if time window passed
        if (($now - $data['first_attempt']) > $timeWindow) {
            $_SESSION['rate_limit'][$key] = ['count' => 1, 'first_attempt' => $now];
            return true;
        }

        // Check if limit exceeded
        if ($data['count'] >= $maxAttempts) {
            return false;
        }

        // Increment counter
        $_SESSION['rate_limit'][$key]['count']++;
        return true;
    }

    public static function logSecurityEvent(string $event, array $data = []): void {
        $logData = [
            'timestamp' => date('Y-m-d H:i:s'),
            'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
            'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown',
            'event' => $event,
            'data' => $data
        ];

        error_log(json_encode($logData), 3, LOGS_DIR . '/security.log');
    }
}
?>