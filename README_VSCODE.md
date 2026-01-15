# VS Code'da DriveUp Uygulamasını Çalıştırma Rehberi

## 🚀 React Versiyonu (Önerilen)

### 1. Gereksinimler
- **Node.js** (v18 veya üzeri) - [nodejs.org](https://nodejs.org/)
- **npm** veya **yarn** package manager
- **VS Code** - [code.visualstudio.com](https://code.visualstudio.com/)

### 2. VS Code Eklentileri (Önerilen)
Aşağıdaki eklentileri VS Code'a yükleyin:
- **ES7+ React/Redux/React-Native snippets**
- **TypeScript Importer**
- **Tailwind CSS IntelliSense**
- **Auto Rename Tag**
- **Prettier - Code formatter**
- **ESLint**

### 3. Projeyi Kurma

#### Adım 1: Repository'yi clone edin
```bash
git clone <your-repo-url>
cd driveup-project
```

#### Adım 2: VS Code'da projeyi açın
```bash
code .
```

#### Adım 3: Dependencies yükleyin
VS Code Terminal'de (Ctrl+`):
```bash
npm install
```

#### Adım 4: Environment dosyasını oluşturun
```bash
cp .env.example .env
```

### 4. Development Server'ı Başlatma

#### Terminal'de:
```bash
npm run dev
```

#### Alternatif: VS Code Tasks
1. `Ctrl+Shift+P` → "Tasks: Run Task"
2. "npm: dev" seçin

### 5. Uygulamaya Erişim
- 🌐 **Local:** http://localhost:5173
- 📱 **Network:** http://192.168.x.x:5173 (mobil test için)

### 6. VS Code Klavye Kısayolları
- **Development server başlat:** `Ctrl+Shift+P` → "npm: dev"
- **Terminal aç:** `Ctrl+`` (backtick)
- **Dosya ara:** `Ctrl+P`
- **Komut ara:** `Ctrl+Shift+P`
- **Format kodu:** `Shift+Alt+F`

---

## 🐘 PHP Versiyonu

### 1. Gereksinimler
- **PHP 8.0+** - [php.net](https://www.php.net/)
- **MySQL/MariaDB**
- **Apache/Nginx** veya **PHP Built-in Server**

### 2. VS Code Eklentileri
- **PHP Intelephense**
- **PHP Debug**
- **MySQL/MariaDB**

### 3. Setup

#### Adım 1: Veritabanını oluşturun
```sql
CREATE DATABASE driveup_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

#### Adım 2: Environment dosyasını düzenleyin
`.env` dosyasında veritabanı bilgilerinizi güncelleyin.

#### Adım 3: PHP Server başlatın
```bash
# Basit PHP server (development için)
php -S localhost:8000 -t . index.php

# Veya XAMPP/WAMP kullanın
```

### 4. Erişim
- 🌐 **Local:** http://localhost:8000

---

## 🛠️ VS Code Konfigürasyonu

### Launch.json (Debug için)
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch Chrome",
            "request": "launch",
            "type": "chrome",
            "url": "http://localhost:5173",
            "webRoot": "${workspaceFolder}/src"
        }
    ]
}
```

### Settings.json (Workspace)
```json
{
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
        "typescript": "typescriptreact"
    },
    "typescript.preferences.importModuleSpecifier": "relative",
    "tailwindCSS.experimental.classRegex": [
        ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
        ["className\\s*=\\s*[\"'`]([^\"'`]*)[\"'`]", "([a-zA-Z0-9\\-:]+)"]
    ]
}
```

---

## 🔧 Troubleshooting

### React Versiyonu Sorunları

#### ❌ "Module not found" hatası
```bash
# Node modules'ı temizle ve yeniden yükle
rm -rf node_modules package-lock.json
npm install
```

#### ❌ TypeScript hatası
```bash
# TypeScript cache'i temizle
npx tsc --noEmit --skipLibCheck
```

#### ❌ Port zaten kullanımda
```bash
# Farklı port kullan
npm run dev -- --port 3000
```

#### ❌ Tailwind stilleri görünmüyor
1. `tailwind.config.js` dosyasını kontrol edin
2. `globals.css` import'unu kontrol edin
3. Development server'ı yeniden başlatın

### PHP Versiyonu Sorunları

#### ❌ Database connection error
1. MySQL/MariaDB servisinin çalıştığından emin olun
2. `.env` dosyasındaki veritabanı bilgilerini kontrol edin
3. Veritabanının oluşturulduğundan emin olun

#### ❌ Permission errors
```bash
# Linux/Mac için
sudo chown -R www-data:www-data /path/to/project
sudo chmod -R 755 /path/to/project
```

---

## 📝 Geliştirme İpuçları

### 1. Hot Reload
React versiyonunda değişiklikler otomatik olarak tarayıcıda güncellenir.

### 2. TypeScript IntelliSense
VS Code otomatik olarak tip önerilerini gösterir.

### 3. Tailwind IntelliSense
Class isimleri yazarken otomatik tamamlama özelliği.

### 4. Component Snippets
- `rfce` → React Functional Component Export
- `useState` → useState hook
- `useEffect` → useEffect hook

### 5. Debug
F5 tuşuna basarak Chrome'da debug modunu başlatabilirsiniz.

---

## 🚀 Production Build

### React için:
```bash
npm run build
npm run preview
```

### PHP için:
Dosyaları web sunucunuza upload edin ve environment variables'ları production değerleriyle güncelleyin.

---

## 📞 Yardım

Sorun yaşıyorsanız:
1. Terminal'deki hata mesajlarını kontrol edin
2. Browser console'unu kontrol edin (F12)
3. Dependencies'lerin güncel olduğundan emin olun
4. GitHub Issues sayfasından yardım alın