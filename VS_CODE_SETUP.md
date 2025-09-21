# 🚀 VS Code'da DriveUp Uygulamasını Çalıştırma - Hızlı Başlangıç

## ⚡ 1 Dakikada Çalıştırma

### 1️⃣ Terminal Açın (VS Code içinde)
**Kısayol:** `Ctrl + `` (backtick tuşu)

### 2️⃣ Dependencies Yükleyin
```bash
npm install
```

### 3️⃣ Development Server Başlatın
```bash
npm run dev
```

### 4️⃣ Tarayıcıda Açın
🌐 **http://localhost:5173**

---

## 🛠️ VS Code Ayarları

### Gerekli Eklentiler (VS Code Extensions)
1. **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`)
2. **TypeScript Importer** (`pmneo.tsimporter`)
3. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
4. **Auto Rename Tag** (`formulahendry.auto-rename-tag`)
5. **Prettier - Code formatter** (`esbenp.prettier-vscode`)

### Hızlı Eklenti Kurulumu
VS Code'da `Ctrl+Shift+P` → `Extensions: Install Extensions` → Aşağıdaki ID'leri arayın:
```
dsznajder.es7-react-js-snippets
pmneo.tsimporter
bradlc.vscode-tailwindcss
formulahendry.auto-rename-tag
esbenp.prettier-vscode
```

---

## 🔧 Sorun Giderme

### ❌ "npm: command not found"
**Node.js yüklü değil:**
1. [nodejs.org](https://nodejs.org/) → LTS versiyonu indirin
2. Yükleyin ve VS Code'u yeniden başlatın

### ❌ "Port 5173 is already in use"
**Port meşgul:**
```bash
npm run dev -- --port 3000
```

### ❌ Modül bulunamıyor
**Node modules'ı temizle:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### ❌ TypeScript hataları
**Cache'i temizle:**
```bash
npm run type-check
```

---

## 🎯 VS Code Klavye Kısayolları

| Kısayol | Açıklama |
|---------|----------|
| `Ctrl + `` | Terminal aç/kapa |
| `Ctrl + P` | Dosya ara |
| `Ctrl + Shift + P` | Komut paleti |
| `Ctrl + /` | Yorum satırı |
| `Shift + Alt + F` | Kodu formatla |
| `F5` | Debug başlat |
| `Ctrl + F5` | Debug olmadan çalıştır |

---

## 📁 Proje Yapısı Hızlı Referans

```
📁 driveup-project/
├── 📁 src/
│   ├── 📄 App.tsx          ← Ana component
│   └── 📄 main.tsx         ← Entry point
├── 📁 components/          ← React components
├── 📁 constants/           ← Veriler ve içerik
├── 📁 styles/
│   └── 📄 globals.css      ← Tailwind CSS
├── 📄 package.json         ← Dependencies
└── 📄 vite.config.ts       ← Vite config
```

---

## 🚀 Development Workflow

### 1. Yeni Özellik Geliştirme
```bash
# 1. Component oluştur
# components/ klasöründe yeni .tsx dosyası

# 2. App.tsx'e import et
# 3. Hot reload otomatik çalışır
```

### 2. CSS Değişiklikleri
```bash
# styles/globals.css dosyasını düzenle
# Değişiklikler otomatik olarak uygulanır
```

### 3. Production Build
```bash
npm run build        # Build oluştur
npm run preview      # Preview göster
```

---

## 📱 Mobil Test

### Local Network'te Erişim
1. Terminal'de gösterilen **Network URL**'i kullanın
2. Örnek: `http://192.168.1.100:5173`
3. Telefonunuzun tarayıcısında açın

### DevTools Mobile Simulation
1. Tarayıcıda `F12`
2. Device Toolbar (`Ctrl+Shift+M`)
3. Mobil cihaz seçin

---

## 💡 Pro İpuçları

### 1. Component Snippets
- `rfce` yazın → React Functional Component Export
- `useState` yazın → useState hook
- `useEffect` yazın → useEffect hook

### 2. Auto Import
TypeScript dosyalarında component ismi yazın, VS Code otomatik import önerisi verecek.

### 3. Tailwind IntelliSense
`className=""` içinde Tailwind class'ları yazarken otomatik tamamlama çalışır.

### 4. Multi-Cursor
`Ctrl+D` ile aynı kelimeyi seçin, birden fazla yerde aynı anda düzenleyin.

---

## 🆘 Acil Durum Komutları

### Tamamen Sıfırla
```bash
# Her şeyi temizle ve baştan başla
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm run dev
```

### Build Problemleri
```bash
# Build klasörünü temizle
npm run clean
npm run build
```

### VS Code Reset
1. `Ctrl+Shift+P`
2. "Developer: Reload Window"

---

## ✅ Başarıyla Çalıştığını Anlama

### ✅ Terminal çıktısı:
```
Local:   http://localhost:5173/
Network: http://192.168.1.100:5173/
press h + enter to show help
```

### ✅ Tarayıcıda:
- DriveUp logosu görünüyor
- Navigation menüsü çalışıyor
- Responsive tasarım mobilde de çalışıyor

### ✅ Console'da hata yok:
`F12` → Console → Kırmızı hata mesajı yok

---

**🎉 Başarıyla çalışıyorsa artık geliştirmeye başlayabilirsiniz!**

Sorularınız için: [GitHub Issues](https://github.com/driveup/website/issues)