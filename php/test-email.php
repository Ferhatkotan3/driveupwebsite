<?php
/**
 * Test Email Script for DriveUp Mail System
 * Usage: php test-email.php
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer autoloader
require_once __DIR__ . '/vendor/autoload.php';

// Load configuration
require_once __DIR__ . '/config.php';

// Set headers for web access
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Get SMTP configuration
$smtpConfig = getSmtpConfig('default');

try {
    // Create PHPMailer instance
    $mail = new PHPMailer(true);
    
    // Server settings
    $mail->isSMTP();
    $mail->Host = $smtpConfig['host'];
    $mail->SMTPAuth = true;
    $mail->Username = $smtpConfig['auth']['username'];
    $mail->Password = $smtpConfig['auth']['password'];
    $mail->SMTPSecure = $smtpConfig['secure'] ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $smtpConfig['port'];
    $mail->CharSet = 'UTF-8';
    
    // Enable debug output (comment out in production)
    $mail->SMTPDebug = SMTP::DEBUG_OFF;
    
    // Recipients
    $mail->setFrom($smtpConfig['from']['email'], $smtpConfig['from']['name']);
    $mail->addAddress($smtpConfig['admin_email'], 'Admin User');
    $mail->addReplyTo($smtpConfig['reply_to'], 'DriveUp Info');
    
    // Content
    $mail->isHTML(true);
    $mail->Subject = 'DriveUp Test Email - ' . date('Y-m-d H:i:s');
    
    // HTML Content
    $htmlContent = '
    <!DOCTYPE html>
    <html lang="tr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DriveUp Test Email</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
            .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 14px; }
            .success { color: #059669; font-weight: bold; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🚗 DriveUp Technologies</h1>
                <p>Test Email Başarıyla Gönderildi!</p>
            </div>
            <div class="content">
                <h2>Merhaba!</h2>
                <p>Bu bir test emailidir. DriveUp mail sistemi başarıyla çalışıyor.</p>
                
                <h3>📧 Email Detayları:</h3>
                <ul>
                    <li><strong>Gönderen:</strong> ' . $smtpConfig['from']['email'] . '</li>
                    <li><strong>SMTP Sunucu:</strong> ' . $smtpConfig['host'] . ':' . $smtpConfig['port'] . '</li>
                    <li><strong>Gönderim Zamanı:</strong> ' . date('Y-m-d H:i:s') . '</li>
                    <li><strong>Durum:</strong> <span class="success">✅ Başarılı</span></li>
                </ul>
                
                <p>Form gönderimleri artık aktif ve çalışır durumda.</p>
            </div>
            <div class="footer">
                <p>Bu email DriveUp Technologies tarafından otomatik olarak gönderilmiştir.</p>
                <p>© ' . date('Y') . ' DriveUp Technologies. Tüm hakları saklıdır.</p>
            </div>
        </div>
    </body>
    </html>';
    
    // Plain text content
    $textContent = "
    DriveUp Technologies - Test Email
    
    Merhaba!
    
    Bu bir test emailidir. DriveUp mail sistemi başarıyla çalışıyor.
    
    Email Detayları:
    - Gönderen: {$smtpConfig['from']['email']}
    - SMTP Sunucu: {$smtpConfig['host']}:{$smtpConfig['port']}
    - Gönderim Zamanı: " . date('Y-m-d H:i:s') . "
    - Durum: Başarılı
    
    Form gönderimleri artık aktif ve çalışır durumda.
    
    Bu email DriveUp Technologies tarafından otomatik olarak gönderilmiştir.
    © " . date('Y') . " DriveUp Technologies. Tüm hakları saklıdır.";
    
    $mail->Body = $htmlContent;
    $mail->AltBody = $textContent;
    
    // Send email
    $mail->send();
    
    // Success response
    $response = [
        'success' => true,
        'message' => 'Test email başarıyla gönderildi!',
        'timestamp' => date('Y-m-d H:i:s'),
        'recipient' => $smtpConfig['admin_email'],
        'smtp_host' => $smtpConfig['host'],
        'smtp_port' => $smtpConfig['port']
    ];
    
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    // Error response
    $response = [
        'success' => false,
        'message' => 'Email gönderilemedi: ' . $mail->ErrorInfo,
        'timestamp' => date('Y-m-d H:i:s'),
        'error_details' => $e->getMessage()
    ];
    
    http_response_code(500);
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
}
?>
