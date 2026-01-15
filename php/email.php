<?php
/**
 * General Email Handler for DriveUp Forms
 * Handles form submissions and sends notifications
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
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Check if it's a POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Use POST.'
    ], JSON_UNESCAPED_UNICODE);
    exit();
}

// Get input data
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid input data'
    ], JSON_UNESCAPED_UNICODE);
    exit();
}

// Extract form data
$formType = sanitizeInput($input['formType'] ?? 'general');
$formData = sanitizeInput($input['formData'] ?? []);
$language = sanitizeInput($input['language'] ?? 'tr');
$smtpProvider = sanitizeInput($input['smtpProvider'] ?? 'default');

// Validate required fields
if (empty($formData) || !is_array($formData)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Form data is required'
    ], JSON_UNESCAPED_UNICODE);
    exit();
}

// Get SMTP configuration
$smtpConfig = getSmtpConfig($smtpProvider);

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
    $mail->addReplyTo($smtpConfig['reply_to'], 'DriveUp Info');
    
    // Content
    $mail->isHTML(true);
    
    // Generate email content based on form type
    $emailContent = generateEmailContent($formType, $formData, $language);
    
    $mail->Subject = $emailContent['subject'];
    $mail->Body = $emailContent['html'];
    $mail->AltBody = $emailContent['text'];
    
    // Send admin notification
    $mail->clearAddresses();
    $mail->addAddress($smtpConfig['admin_email'], 'DriveUp Admin');
    $mail->Subject = '[DriveUp] ' . $emailContent['subject'];
    
    $adminHtml = generateAdminEmailContent($formType, $formData, $language);
    $mail->Body = $adminHtml['html'];
    $mail->AltBody = $adminHtml['text'];
    
    $mail->send();
    
    // Send user confirmation if email is provided
    if (!empty($formData['email']) && isValidEmail($formData['email'])) {
        $mail->clearAddresses();
        $mail->addAddress($formData['email'], $formData['fullName'] ?? 'User');
        $mail->Subject = $emailContent['subject'];
        $mail->Body = $emailContent['html'];
        $mail->AltBody = $emailContent['text'];
        
        $mail->send();
    }
    
    // Success response
    $response = [
        'success' => true,
        'message' => $language === 'tr' ? 'Form başarıyla gönderildi!' : 'Form submitted successfully!',
        'timestamp' => date('Y-m-d H:i:s'),
        'form_type' => $formType,
        'recipients' => [
            'admin' => $smtpConfig['admin_email'],
            'user' => $formData['email'] ?? null
        ]
    ];
    
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    // Error response
    $response = [
        'success' => false,
        'message' => $language === 'tr' ? 'Email gönderilemedi: ' . $mail->ErrorInfo : 'Email could not be sent: ' . $mail->ErrorInfo,
        'timestamp' => date('Y-m-d H:i:s'),
        'error_details' => $e->getMessage()
    ];
    
    http_response_code(500);
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
}

/**
 * Generate email content based on form type
 */
function generateEmailContent($formType, $formData, $language) {
    $t = getFormText($formType, $language);
    
    $subject = $t['subject'];
    
    // HTML Content
    $html = '
    <!DOCTYPE html>
    <html lang="' . $language . '">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>' . $t['title'] . '</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
            .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 14px; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: bold; color: #374151; }
            .field-value { color: #1f2937; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🚗 DriveUp Technologies</h1>
                <p>' . $t['title'] . '</p>
            </div>
            <div class="content">
                <h2>' . $t['greeting'] . '</h2>
                <p>' . $t['message'] . '</p>
                
                <h3>' . $t['form_details'] . '</h3>';
    
    // Add form fields
    foreach ($formData as $key => $value) {
        if (is_bool($value)) {
            $value = $value ? ($language === 'tr' ? 'Evet' : 'Yes') : ($language === 'tr' ? 'Hayır' : 'No');
        }
        $html .= '
                <div class="field">
                    <div class="field-label">' . ucfirst($key) . ':</div>
                    <div class="field-value">' . $value . '</div>
                </div>';
    }
    
    $html .= '
            </div>
            <div class="footer">
                <p>' . $t['footer_message'] . '</p>
                <p>© ' . date('Y') . ' DriveUp Technologies. ' . $t['rights_reserved'] . '</p>
            </div>
        </div>
    </body>
    </html>';
    
    // Plain text content
    $text = $t['title'] . "\n\n";
    $text .= $t['greeting'] . "\n";
    $text .= $t['message'] . "\n\n";
    $text .= $t['form_details'] . "\n";
    
    foreach ($formData as $key => $value) {
        if (is_bool($value)) {
            $value = $value ? ($language === 'tr' ? 'Evet' : 'Yes') : ($language === 'tr' ? 'Hayır' : 'No');
        }
        $text .= ucfirst($key) . ": " . $value . "\n";
    }
    
    $text .= "\n" . $t['footer_message'] . "\n";
    $text .= "© " . date('Y') . " DriveUp Technologies. " . $t['rights_reserved'];
    
    return [
        'subject' => $subject,
        'html' => $html,
        'text' => $text
    ];
}

/**
 * Generate admin email content
 */
function generateAdminEmailContent($formType, $formData, $language) {
    $t = getFormText($formType, $language);
    
    $subject = '[ADMIN] ' . $t['subject'];
    
    // HTML Content
    $html = '
    <!DOCTYPE html>
    <html lang="' . $language . '">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Admin: ' . $t['title'] . '</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #dc2626; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #fef2f2; padding: 20px; border-radius: 0 0 8px 8px; }
            .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 14px; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: bold; color: #374151; }
            .field-value { color: #1f2937; }
            .admin-note { background: #fbbf24; padding: 10px; border-radius: 5px; margin: 15px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🔔 Admin Notification</h1>
                <p>New ' . $t['title'] . ' Submission</p>
            </div>
            <div class="content">
                <div class="admin-note">
                    <strong>⚠️ Admin Bilgilendirme:</strong> Bu email admin olarak gönderilmiştir.
                </div>
                
                <h2>New Form Submission</h2>
                <p>A new ' . strtolower($t['title']) . ' has been submitted.</p>
                
                <h3>Form Details:</h3>';
    
    // Add form fields
    foreach ($formData as $key => $value) {
        if (is_bool($value)) {
            $value = $value ? 'Yes' : 'No';
        }
        $html .= '
                <div class="field">
                    <div class="field-label">' . ucfirst($key) . ':</div>
                    <div class="field-value">' . $value . '</div>
                </div>';
    }
    
    $html .= '
                
                <h3>Submission Info:</h3>
                <div class="field">
                    <div class="field-label">Form Type:</div>
                    <div class="field-value">' . $formType . '</div>
                </div>
                <div class="field">
                    <div class="field-label">Language:</div>
                    <div class="field-value">' . $language . '</div>
                </div>
                <div class="field">
                    <div class="field-label">Timestamp:</div>
                    <div class="field-value">' . date('Y-m-d H:i:s') . '</div>
                </div>
            </div>
            <div class="footer">
                <p>This is an automated notification from DriveUp Technologies.</p>
                <p>© ' . date('Y') . ' DriveUp Technologies. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>';
    
    // Plain text content
    $text = "Admin Notification\n\n";
    $text .= "New " . $t['title'] . " Submission\n\n";
    $text .= "A new " . strtolower($t['title']) . " has been submitted.\n\n";
    $text .= "Form Details:\n";
    
    foreach ($formData as $key => $value) {
        if (is_bool($value)) {
            $value = $value ? 'Yes' : 'No';
        }
        $text .= ucfirst($key) . ": " . $value . "\n";
    }
    
    $text .= "\nSubmission Info:\n";
    $text .= "Form Type: " . $formType . "\n";
    $text .= "Language: " . $language . "\n";
    $text .= "Timestamp: " . date('Y-m-d H:i:s') . "\n\n";
    $text .= "This is an automated notification from DriveUp Technologies.\n";
    $text .= "© " . date('Y') . " DriveUp Technologies. All rights reserved.";
    
    return [
        'subject' => $subject,
        'html' => $html,
        'text' => $text
    ];
}

/**
 * Get form text based on type and language
 */
function getFormText($formType, $language) {
    $texts = [
        'partner' => [
            'tr' => [
                'title' => 'İş Ortağı Başvurusu',
                'subject' => 'DriveUp İş Ortağı Başvurusu',
                'greeting' => 'Merhaba!',
                'message' => 'İş ortağı başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.',
                'form_details' => 'Başvuru Detayları',
                'footer_message' => 'Bu email DriveUp Technologies tarafından otomatik olarak gönderilmiştir.',
                'rights_reserved' => 'Tüm hakları saklıdır.'
            ],
            'en' => [
                'title' => 'Partnership Application',
                'subject' => 'DriveUp Partnership Application',
                'greeting' => 'Hello!',
                'message' => 'Your partnership application has been received successfully. We will contact you soon.',
                'form_details' => 'Application Details',
                'footer_message' => 'This email was sent automatically by DriveUp Technologies.',
                'rights_reserved' => 'All rights reserved.'
            ]
        ],
        'investor' => [
            'tr' => [
                'title' => 'Yatırımcı Başvurusu',
                'subject' => 'DriveUp Yatırımcı Başvurusu',
                'greeting' => 'Merhaba!',
                'message' => 'Yatırımcı başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.',
                'form_details' => 'Başvuru Detayları',
                'footer_message' => 'Bu email DriveUp Technologies tarafından otomatik olarak gönderilmiştir.',
                'rights_reserved' => 'Tüm hakları saklıdır.'
            ],
            'en' => [
                'title' => 'Investor Application',
                'subject' => 'DriveUp Investor Application',
                'greeting' => 'Hello!',
                'message' => 'Your investor application has been received successfully. We will contact you soon.',
                'form_details' => 'Application Details',
                'footer_message' => 'This email was sent automatically by DriveUp Technologies.',
                'rights_reserved' => 'All rights reserved.'
            ]
        ],
        'general' => [
            'tr' => [
                'title' => 'Genel Başvuru',
                'subject' => 'DriveUp Genel Başvuru',
                'greeting' => 'Merhaba!',
                'message' => 'Başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.',
                'form_details' => 'Başvuru Detayları',
                'footer_message' => 'Bu email DriveUp Technologies tarafından otomatik olarak gönderilmiştir.',
                'rights_reserved' => 'Tüm hakları saklıdır.'
            ],
            'en' => [
                'title' => 'General Application',
                'subject' => 'DriveUp General Application',
                'greeting' => 'Hello!',
                'message' => 'Your application has been received successfully. We will contact you soon.',
                'form_details' => 'Application Details',
                'footer_message' => 'This email was sent automatically by DriveUp Technologies.',
                'rights_reserved' => 'All rights reserved.'
            ]
        ]
    ];
    
    return $texts[$formType][$language] ?? $texts['general'][$language] ?? $texts['general']['en'];
}
?>
