<?php
/**
 * SMTP Configuration for DriveUp Mail System
 */

// SMTP Configuration
$smtpConfig = [
    'host' => 'zimbra.emresarioglu.com.tr',
    'port' => 587,
    'secure' => false, // false for TLS, true for SSL
    'auth' => [
        'username' => 'noreply@driveuptr.com',
        'password' => '123Noreply*'
    ],
    'from' => [
        'email' => 'noreply@driveuptr.com',
        'name' => 'DriveUp Technologies'
    ],
    'reply_to' => 'info@driveuptr.com',
    'admin_email' => 'emresarioglu89@gmail.com'
];

// Alternative SMTP configurations
$smtpConfigs = [
    'gmail' => [
        'host' => 'smtp.gmail.com',
        'port' => 587,
        'secure' => false,
        'auth' => [
            'username' => $_ENV['GMAIL_USER'] ?? 'your-email@gmail.com',
            'password' => $_ENV['GMAIL_APP_PASSWORD'] ?? 'your-app-password'
        ]
    ],
    'outlook' => [
        'host' => 'smtp-mail.outlook.com',
        'port' => 587,
        'secure' => false,
        'auth' => [
            'username' => $_ENV['OUTLOOK_USER'] ?? 'your-email@outlook.com',
            'password' => $_ENV['OUTLOOK_PASSWORD'] ?? 'your-password'
        ]
    ],
    'yandex' => [
        'host' => 'smtp.yandex.com',
        'port' => 465,
        'secure' => true,
        'auth' => [
            'username' => $_ENV['YANDEX_USER'] ?? 'your-email@yandex.com',
            'password' => $_ENV['YANDEX_PASSWORD'] ?? 'your-password'
        ]
    ]
];

// Helper function to get SMTP config
function getSmtpConfig($provider = 'default') {
    global $smtpConfig, $smtpConfigs;
    
    if ($provider === 'default') {
        return $smtpConfig;
    }
    
    return $smtpConfigs[$provider] ?? $smtpConfig;
}

// Helper function to validate email
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

// Helper function to sanitize input
function sanitizeInput($input) {
    if (is_array($input)) {
        return array_map('sanitizeInput', $input);
    }
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}
?>
