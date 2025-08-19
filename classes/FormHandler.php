<?php
declare(strict_types=1);

class FormHandler {
    private PDO $pdo;

    public function __construct() {
        $this->pdo = Database::getInstance();
    }

    public function handlePartnerApplication(): array {
        try {
            // Rate limiting
            if (!Security::rateLimitCheck('partner_form_' . $_SERVER['REMOTE_ADDR'])) {
                return ['success' => false, 'message' => 'Too many requests. Please try again later.'];
            }

            // CSRF validation
            if (!Security::validateCSRFToken($_POST['csrf_token'] ?? '')) {
                Security::logSecurityEvent('Invalid CSRF token', ['form' => 'partner']);
                return ['success' => false, 'message' => 'Security validation failed.'];
            }

            // Sanitize and validate input
            $data = $this->validatePartnerInput($_POST);
            if (!$data['valid']) {
                return ['success' => false, 'message' => $data['message'], 'errors' => $data['errors']];
            }

            // Check for duplicate email
            $stmt = $this->pdo->prepare("SELECT id FROM partner_applications WHERE email = ? AND created_at > DATE_SUB(NOW(), INTERVAL 24 HOUR)");
            $stmt->execute([$data['email']]);
            if ($stmt->fetch()) {
                return ['success' => false, 'message' => 'You have already submitted an application in the last 24 hours.'];
            }

            // Insert into database
            $stmt = $this->pdo->prepare("
                INSERT INTO partner_applications 
                (full_name, company_name, email, phone, company_type, location, additional_info, language) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ");

            $result = $stmt->execute([
                $data['full_name'],
                $data['company_name'],
                $data['email'],
                $data['phone'],
                $data['company_type'],
                $data['location'],
                $data['additional_info'],
                $data['language']
            ]);

            if ($result) {
                // Send notification email
                $this->sendPartnerNotificationEmail($data);
                
                return ['success' => true, 'message' => 'Application submitted successfully!'];
            } else {
                return ['success' => false, 'message' => 'Failed to submit application. Please try again.'];
            }

        } catch (Exception $e) {
            error_log("Partner application error: " . $e->getMessage());
            return ['success' => false, 'message' => 'An error occurred. Please try again later.'];
        }
    }

    public function handleInvestorApplication(): array {
        try {
            // Rate limiting
            if (!Security::rateLimitCheck('investor_form_' . $_SERVER['REMOTE_ADDR'])) {
                return ['success' => false, 'message' => 'Too many requests. Please try again later.'];
            }

            // CSRF validation
            if (!Security::validateCSRFToken($_POST['csrf_token'] ?? '')) {
                Security::logSecurityEvent('Invalid CSRF token', ['form' => 'investor']);
                return ['success' => false, 'message' => 'Security validation failed.'];
            }

            // Sanitize and validate input
            $data = $this->validateInvestorInput($_POST);
            if (!$data['valid']) {
                return ['success' => false, 'message' => $data['message'], 'errors' => $data['errors']];
            }

            // Check for duplicate email
            $stmt = $this->pdo->prepare("SELECT id FROM investor_applications WHERE email = ? AND created_at > DATE_SUB(NOW(), INTERVAL 24 HOUR)");
            $stmt->execute([$data['email']]);
            if ($stmt->fetch()) {
                return ['success' => false, 'message' => 'You have already submitted an application in the last 24 hours.'];
            }

            // Insert into database
            $stmt = $this->pdo->prepare("
                INSERT INTO investor_applications 
                (full_name, company_name, email, phone, investment_amount, investment_stage, additional_info, language) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ");

            $result = $stmt->execute([
                $data['full_name'],
                $data['company_name'],
                $data['email'],
                $data['phone'],
                $data['investment_amount'],
                $data['investment_stage'],
                $data['additional_info'],
                $data['language']
            ]);

            if ($result) {
                // Send notification email
                $this->sendInvestorNotificationEmail($data);
                
                return ['success' => true, 'message' => 'Application submitted successfully!'];
            } else {
                return ['success' => false, 'message' => 'Failed to submit application. Please try again.'];
            }

        } catch (Exception $e) {
            error_log("Investor application error: " . $e->getMessage());
            return ['success' => false, 'message' => 'An error occurred. Please try again later.'];
        }
    }

    private function validatePartnerInput(array $input): array {
        $errors = [];
        $language = Session::getLanguage();

        // Required fields
        $fullName = Security::sanitizeInput($input['full_name'] ?? '');
        if (empty($fullName)) {
            $errors['full_name'] = $language === 'tr' ? 'Ad Soyad zorunludur' : 'Full name is required';
        }

        $companyName = Security::sanitizeInput($input['company_name'] ?? '');
        if (empty($companyName)) {
            $errors['company_name'] = $language === 'tr' ? 'Şirket adı zorunludur' : 'Company name is required';
        }

        $email = Security::sanitizeInput($input['email'] ?? '');
        if (empty($email)) {
            $errors['email'] = $language === 'tr' ? 'E-posta zorunludur' : 'Email is required';
        } elseif (!Security::validateEmail($email)) {
            $errors['email'] = $language === 'tr' ? 'Geçerli bir e-posta adresi girin' : 'Please enter a valid email address';
        }

        $phone = Security::sanitizeInput($input['phone'] ?? '');
        if (empty($phone)) {
            $errors['phone'] = $language === 'tr' ? 'Telefon zorunludur' : 'Phone is required';
        } elseif (!Security::validatePhone($phone)) {
            $errors['phone'] = $language === 'tr' ? 'Geçerli bir telefon numarası girin' : 'Please enter a valid phone number';
        }

        $companyType = Security::sanitizeInput($input['company_type'] ?? '');
        if (empty($companyType)) {
            $errors['company_type'] = $language === 'tr' ? 'Firma tipi zorunludur' : 'Company type is required';
        }

        $location = Security::sanitizeInput($input['location'] ?? '');
        if (empty($location)) {
            $errors['location'] = $language === 'tr' ? 'Konum zorunludur' : 'Location is required';
        }

        $additionalInfo = Security::sanitizeInput($input['additional_info'] ?? '');

        if (!empty($errors)) {
            return [
                'valid' => false,
                'message' => $language === 'tr' ? 'Lütfen tüm zorunlu alanları doldurun' : 'Please fill all required fields',
                'errors' => $errors
            ];
        }

        return [
            'valid' => true,
            'full_name' => $fullName,
            'company_name' => $companyName,
            'email' => $email,
            'phone' => $phone,
            'company_type' => $companyType,
            'location' => $location,
            'additional_info' => $additionalInfo,
            'language' => $language
        ];
    }

    private function validateInvestorInput(array $input): array {
        $errors = [];
        $language = Session::getLanguage();

        // Required fields
        $fullName = Security::sanitizeInput($input['full_name'] ?? '');
        if (empty($fullName)) {
            $errors['full_name'] = $language === 'tr' ? 'Ad Soyad zorunludur' : 'Full name is required';
        }

        $email = Security::sanitizeInput($input['email'] ?? '');
        if (empty($email)) {
            $errors['email'] = $language === 'tr' ? 'E-posta zorunludur' : 'Email is required';
        } elseif (!Security::validateEmail($email)) {
            $errors['email'] = $language === 'tr' ? 'Geçerli bir e-posta adresi girin' : 'Please enter a valid email address';
        }

        $phone = Security::sanitizeInput($input['phone'] ?? '');
        if (empty($phone)) {
            $errors['phone'] = $language === 'tr' ? 'Telefon zorunludur' : 'Phone is required';
        } elseif (!Security::validatePhone($phone)) {
            $errors['phone'] = $language === 'tr' ? 'Geçerli bir telefon numarası girin' : 'Please enter a valid phone number';
        }

        $investmentStage = Security::sanitizeInput($input['investment_stage'] ?? '');
        if (empty($investmentStage)) {
            $errors['investment_stage'] = $language === 'tr' ? 'Yatırım aşaması zorunludur' : 'Investment stage is required';
        }

        // Optional fields
        $companyName = Security::sanitizeInput($input['company_name'] ?? '');
        $investmentAmount = !empty($input['investment_amount']) ? floatval($input['investment_amount']) : null;
        $additionalInfo = Security::sanitizeInput($input['additional_info'] ?? '');

        if (!empty($errors)) {
            return [
                'valid' => false,
                'message' => $language === 'tr' ? 'Lütfen tüm zorunlu alanları doldurun' : 'Please fill all required fields',
                'errors' => $errors
            ];
        }

        return [
            'valid' => true,
            'full_name' => $fullName,
            'company_name' => $companyName,
            'email' => $email,
            'phone' => $phone,
            'investment_amount' => $investmentAmount,
            'investment_stage' => $investmentStage,
            'additional_info' => $additionalInfo,
            'language' => $language
        ];
    }

    private function sendPartnerNotificationEmail(array $data): void {
        // Implementation for sending email notification
        // You can integrate with PHPMailer or similar library
        error_log("Partner application received: " . json_encode($data));
    }

    private function sendInvestorNotificationEmail(array $data): void {
        // Implementation for sending email notification
        error_log("Investor application received: " . json_encode($data));
    }
}
?>