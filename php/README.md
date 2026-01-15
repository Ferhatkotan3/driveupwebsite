# DriveUp PHP Mail System

Bu klasör, DriveUp web sitesi için PHP tabanlı mail gönderim sistemini içerir.

## 🚀 Kurulum

### 1. Composer Dependencies
```bash
cd php
composer install
```

### 2. SMTP Konfigürasyonu
`config.php` dosyasında SMTP ayarlarını güncelleyin:

```php
$smtpConfig = [
    'host' => 'your-smtp-host.com',
    'port' => 587,
    'secure' => false, // false for TLS, true for SSL
    'auth' => [
        'username' => 'your-email@domain.com',
        'password' => 'your-password'
    ],
    'from' => [
        'email' => 'noreply@domain.com',
        'name' => 'DriveUp Technologies'
    ],
    'reply_to' => 'info@domain.com',
    'admin_email' => 'admin@domain.com'
];
```

## 📧 Kullanım

### Test Email Gönderimi
```bash
# Terminal'den test
php test-email.php

# Web'den test
curl -X POST http://localhost:8000/test-email.php
```

### Form Gönderimi
```bash
# Web'den form gönderimi
curl -X POST http://localhost:8000/email.php \
  -H "Content-Type: application/json" \
  -d '{
    "formType": "partner",
    "formData": {
      "fullName": "Test User",
      "email": "test@example.com"
    },
    "language": "tr"
  }'
```

## 🔧 Geliştirme

### PHP Built-in Server Başlatma
```bash
cd php
php -S localhost:8000
```

### Production Deployment
Build sonrası `dist/php/` klasöründe PHP dosyaları bulunur.

## 📁 Dosya Yapısı

```
php/
├── composer.json          # Composer dependencies
├── config.php            # SMTP konfigürasyonu
├── test-email.php        # Test email script
├── email.php             # Form email handler
├── vendor/               # Composer packages
└── README.md             # Bu dosya
```

## 🌐 API Endpoints

### POST /test-email.php
Test email gönderimi

**Request:**
```json
{
  "language": "tr",
  "smtpProvider": "default"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Test email başarıyla gönderildi!",
  "timestamp": "2024-01-01 12:00:00",
  "recipient": "admin@domain.com"
}
```

### POST /email.php
Form gönderimi

**Request:**
```json
{
  "formType": "partner|investor|general",
  "formData": {
    "fullName": "User Name",
    "email": "user@example.com"
  },
  "language": "tr|en",
  "smtpProvider": "default|gmail|outlook|yandex"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Form başarıyla gönderildi!",
  "timestamp": "2024-01-01 12:00:00",
  "form_type": "partner",
  "recipients": {
    "admin": "admin@domain.com",
    "user": "user@example.com"
  }
}
```

## 🔒 Güvenlik

- CORS headers eklendi
- Input sanitization yapıldı
- Email validation eklendi
- Error handling geliştirildi

## 📝 Notlar

- Production'da `SMTPDebug` kapatılmalı
- Environment variables kullanılabilir
- Logging eklenebilir
- Rate limiting eklenebilir
