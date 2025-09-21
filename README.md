# DriveUp Website

> Araç Kiralama Ekosisteminin Geleceği

Modern, responsive ve performanslı DriveUp kurumsal web sitesi. React, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## 🚀 Canlıya Alma (Deployment)

### Hızlı Başlangıç

```bash
# Bağımlılıkları yükle
npm install

# Production build oluştur
npm run build

# Build'i test et (opsiyonel)
npm run preview
```

### Hosting Seçenekleri

#### 1. **Vercel (Önerilen)**
```bash
# Vercel CLI yükle
npm install -g vercel

# Deploy et
vercel --prod
```

#### 2. **Netlify**
```bash
# Netlify CLI yükle
npm install -g netlify-cli

# Build ve deploy
npm run build
netlify deploy --prod --dir=dist
```

#### 3. **GitHub Pages**
```bash
# Build oluştur
npm run build

# dist/ klasörünü GitHub Pages branch'ine push et
```

#### 4. **Geleneksel Hosting (cPanel/Plesk)**
```bash
# Build oluştur
npm run build

# dist/ klasörünün içeriğini FTP ile public_html'e yükle
```

## 🛠️ Geliştirme

### Yerel Geliştirme
```bash
npm run dev
```
Site `http://localhost:3000` adresinde çalışacaktır.

### Build Test
```bash
npm run build
npm run preview
```

## 📁 Proje Yapısı

```
driveup-website/
├── components/          # React bileşenleri
│   ├── ui/             # UI bileşenleri (ShadCN)
│   ├── forms/          # Form bileşenleri
│   └── ...
├── constants/          # Sabit veriler (content, screenshots)
├── styles/            # CSS dosyaları
├── types/             # TypeScript tip tanımları
├── public/            # Statik dosyalar
└── dist/              # Production build (oluşturulur)
```

## ⚡ Performans Optimizasyonları

- **Code Splitting**: Otomatik chunk'lara bölünmüş JavaScript
- **Asset Optimization**: Resim ve font optimizasyonu
- **CSS Minification**: Küçültülmüş CSS
- **Tree Shaking**: Kullanılmayan kod eliminasyonu
- **Modern Bundle**: ES2015+ hedef
- **Lazy Loading**: Bileşen bazlı lazy loading

## 🌐 SEO & Meta Tags

- ✅ Open Graph meta tags
- ✅ Twitter Card tags
- ✅ Structured Data (JSON-LD)
- ✅ Sitemap support
- ✅ Robots.txt friendly

## 📱 Responsive Design

- ✅ Mobile-first yaklaşım
- ✅ Touch-friendly interfeys
- ✅ Apple-style design system
- ✅ Tüm cihazlarda optimize

## 🔧 Teknolojiler

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: ShadCN/UI
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Notifications**: Sonner

## 📦 Production Hazırlık

Bu proje production-ready durumda:

- ✅ Figma bağımlılıkları kaldırıldı
- ✅ External API dependencies temizlendi
- ✅ Asset'ler optimize edildi
- ✅ Build pipeline hazır
- ✅ Meta tags ve SEO yapılandırıldı
- ✅ Error handling eklendi
- ✅ Performance optimizasyonları yapıldı

## 🚀 Deployment Checklist

- [ ] `npm run build` başarılı
- [ ] `npm run preview` ile test edildi
- [ ] Domain DNS ayarları yapıldı
- [ ] SSL sertifikası yapılandırıldı
- [ ] Analytics kodu eklendi (gerekirse)
- [ ] Contact form backend bağlandı (gerekirse)

## 📞 İletişim

- **Email**: info@driveuptr.com
- **Website**: https://driveuptr.com

---

© 2025 DriveUp Technologies. Tüm hakları saklıdır.