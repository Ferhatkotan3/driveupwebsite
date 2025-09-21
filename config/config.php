<?php
// DriveUp PHP Configuration
declare(strict_types=1);

// Environment Configuration
define('APP_ENV', $_ENV['APP_ENV'] ?? 'production');
define('APP_DEBUG', APP_ENV === 'development');
define('APP_URL', $_ENV['APP_URL'] ?? 'https://driveuptr.com');

// Database Configuration
define('DB_HOST', $_ENV['DB_HOST'] ?? 'localhost');
define('DB_NAME', $_ENV['DB_NAME'] ?? 'driveup_db');
define('DB_USER', $_ENV['DB_USER'] ?? 'root');
define('DB_PASS', $_ENV['DB_PASS'] ?? '');
define('DB_CHARSET', 'utf8mb4');

// Security Configuration
define('SECRET_KEY', $_ENV['SECRET_KEY'] ?? 'your-secret-key-here-change-in-production');
define('SESSION_LIFETIME', 86400); // 24 hours
define('CSRF_TOKEN_LIFETIME', 3600); // 1 hour

// Email Configuration
define('SMTP_HOST', $_ENV['SMTP_HOST'] ?? 'smtp.gmail.com');
define('SMTP_PORT', $_ENV['SMTP_PORT'] ?? 587);
define('SMTP_USER', $_ENV['SMTP_USER'] ?? 'info@driveuptr.com');
define('SMTP_PASS', $_ENV['SMTP_PASS'] ?? '');
define('ADMIN_EMAIL', 'admin@driveuptr.com');

// Site Configuration
define('SITE_NAME', 'DriveUp');
define('DEFAULT_LANGUAGE', 'tr');
define('SUPPORTED_LANGUAGES', ['tr', 'en']);
define('UPLOADS_DIR', __DIR__ . '/../uploads');
define('LOGS_DIR', __DIR__ . '/../logs');

// Security Headers
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');
header('Referrer-Policy: strict-origin-when-cross-origin');

// Error Reporting
if (APP_DEBUG) {
    error_reporting(E_ALL);
    ini_set('display_errors', '1');
} else {
    error_reporting(0);
    ini_set('display_errors', '0');
    ini_set('log_errors', '1');
    ini_set('error_log', LOGS_DIR . '/php_errors.log');
}

// Session Configuration
ini_set('session.cookie_httponly', '1');
ini_set('session.cookie_secure', '1');
ini_set('session.cookie_samesite', 'Strict');
ini_set('session.gc_maxlifetime', (string)SESSION_LIFETIME);

// Timezone
date_default_timezone_set('Europe/Istanbul');

// Auto-create required directories
$dirs = [UPLOADS_DIR, LOGS_DIR];
foreach ($dirs as $dir) {
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }
}
?>