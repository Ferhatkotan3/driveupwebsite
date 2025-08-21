# DriveUp API Deployment Guide

Bu dosya, DriveUp API'sini `api.driveuptr.com` domain'inde deploy etmek için rehber içerir.

## 🚀 Deployment Seçenekleri

### 1. Netlify Functions (Önerilen)
- Serverless PHP desteği
- Otomatik HTTPS
- Global CDN
- Kolay deployment

### 2. Vercel
- PHP runtime desteği
- Otomatik HTTPS
- Edge functions
- Hızlı deployment

### 3. Railway
- PHP container desteği
- Database entegrasyonu
- Otomatik scaling
- Kolay yönetim

### 4. DigitalOcean App Platform
- PHP app desteği
- Managed database
- Load balancing
- Monitoring

## 🔧 Netlify Functions ile Deployment

### 1. Netlify CLI Kurulumu
```bash
npm install -g netlify-cli
```

### 2. Netlify Functions Yapısı
```
netlify/
└── functions/
    ├── email.php
    └── test-email.php
```

### 3. PHP Runtime Kurulumu
```bash
# Netlify Functions için PHP runtime
npm install @netlify/functions-php
```

### 4. Netlify.toml Konfigürasyonu
```toml
[build]
  functions = "netlify/functions"

[functions]
  directory = "netlify/functions"
  node_bundler = "esbuild"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

## 🌐 Domain Konfigürasyonu

### 1. DNS Ayarları
```
Type: CNAME
Name: api
Value: your-netlify-app.netlify.app
TTL: 3600
```

### 2. Netlify Domain Ayarları
- Netlify dashboard'da domain ekle
- SSL sertifikası otomatik oluşturulur
- Custom domain ayarla

## 📧 SMTP Konfigürasyonu

### 1. Environment Variables
```bash
# Netlify dashboard'da ekle
SMTP_HOST=zimbra.emresarioglu.com.tr
SMTP_PORT=587
SMTP_USER=noreply@driveuptr.com
SMTP_PASS=123Noreply*
SMTP_FROM=noreply@driveuptr.com
ADMIN_EMAIL=emresarioglu89@gmail.com
```

### 2. PHP Config Güncelleme
```php
// Environment variables kullan
$smtpConfig = [
    'host' => $_ENV['SMTP_HOST'] ?? 'zimbra.emresarioglu.com.tr',
    'port' => (int)($_ENV['SMTP_PORT'] ?? 587),
    'auth' => [
        'username' => $_ENV['SMTP_USER'] ?? 'noreply@driveuptr.com',
        'password' => $_ENV['SMTP_PASS'] ?? '123Noreply*'
    ],
    'from' => [
        'email' => $_ENV['SMTP_FROM'] ?? 'noreply@driveuptr.com',
        'name' => 'DriveUp Technologies'
    ],
    'admin_email' => $_ENV['ADMIN_EMAIL'] ?? 'emresarioglu89@gmail.com'
];
```

## 🔒 Güvenlik

### 1. CORS Ayarları
```php
// Sadece driveuptr.com'dan gelen isteklere izin ver
header('Access-Control-Allow-Origin: https://driveuptr.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
```

### 2. Rate Limiting
```php
// IP bazlı rate limiting ekle
// Redis veya database kullan
```

### 3. API Key Authentication
```php
// API key kontrolü ekle
$apiKey = $_SERVER['HTTP_X_API_KEY'] ?? '';
if ($apiKey !== $_ENV['API_KEY']) {
    http_response_code(401);
    exit('Unauthorized');
}
```

## 📊 Monitoring

### 1. Netlify Analytics
- Request sayısı
- Response time
- Error rate
- Geographic distribution

### 2. Custom Logging
```php
// Structured logging ekle
error_log(json_encode([
    'timestamp' => date('c'),
    'endpoint' => $_SERVER['REQUEST_URI'],
    'method' => $_SERVER['REQUEST_METHOD'],
    'ip' => $_SERVER['REMOTE_ADDR'],
    'user_agent' => $_SERVER['HTTP_USER_AGENT']
]));
```

## 🚀 Deployment Komutları

### 1. Netlify Deploy
```bash
# Build ve deploy
netlify deploy --prod

# Sadece functions deploy
netlify deploy --prod --functions
```

### 2. Environment Variables
```bash
# Environment variables ekle
netlify env:set SMTP_HOST zimbra.emresarioglu.com.tr
netlify env:set SMTP_USER noreply@driveuptr.com
netlify env:set SMTP_PASS 123Noreply*
```

## 🔍 Test

### 1. Local Test
```bash
# Netlify Dev ile local test
netlify dev

# Test endpoint
curl -X POST http://localhost:8888/.netlify/functions/email
```

### 2. Production Test
```bash
# Production API test
curl -X POST https://api.driveuptr.com/.netlify/functions/email \
  -H "Content-Type: application/json" \
  -d '{"formType": "test", "formData": {"test": true}}'
```

## 📝 Notlar

- PHP runtime Netlify'da sınırlı olabilir
- Alternative: Node.js wrapper ile PHP çağır
- Composer dependencies Netlify'da kurulabilir
- Environment variables güvenli şekilde sakla
