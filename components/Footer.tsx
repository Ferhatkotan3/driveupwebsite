import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onContact: () => void;
  onNavigateProduct?: (product: any) => void;
  t?: any;
  language?: 'tr' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onNavigateProduct, t, language = 'tr' }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = t?.footer?.quickLinksItems || (language === 'en' ? [
    { name: 'Home', page: 'home' },
    { name: 'Products', page: 'products' },
    { name: 'What We Do', page: 'what-we-do' },
    { name: 'Contact', page: 'contact' }
  ] : [
    { name: 'Ana Sayfa', page: 'home' },
    { name: 'Ürünler', page: 'products' },
    { name: 'Ne Yapıyoruz', page: 'what-we-do' },
    { name: 'İletişim', page: 'contact' }
  ]);

  const products = t?.footer?.productsItems || (language === 'en' ? [
    { name: 'DriveUpFixer', description: 'Maintenance & Repair' },
    { name: 'DriveUpPro', description: 'Fleet Management' },
    { name: 'DriveUpManager', description: 'Operations Management' },
    { name: 'DriveUpStudio', description: 'AI Visualization' },
    { name: 'DriveUpRedact', description: 'Data Security' },
    { name: 'DriveUpDesk', description: 'Support Center' }
  ] : [
    { name: 'DriveUpFixer', description: 'Bakım & Onarım' },
    { name: 'DriveUpPro', description: 'Filo Yönetimi' },
    { name: 'DriveUpManager', description: 'Operasyon Yönetimi' },
    { name: 'DriveUpStudio', description: 'AI Görselleştirme' },
    { name: 'DriveUpRedact', description: 'Veri Güvenliği' },
    { name: 'DriveUpDesk', description: 'Destek Merkezi' }
  ]);

  const services = t?.nav?.serviceItems || [
    { id: 'filo-yonetimi', label: 'Filo Yönetimi' },
    { id: 'ozmal-arac', label: 'Özmal Araç Yönetimi' },
    { id: 'arac-takip', label: 'Araç Takip Sistemleri' },
    { id: 'bakim-onarim', label: 'Bakım ve Onarım Çözümleri' },
    { id: 'gunluk-kiralama', label: 'Günlük Araç Kiralama' },
    { id: 'kiralama-sirketleri', label: 'Kiralama Şirketlerine Özel' },
    { id: 'cagri-merkezi', label: 'Çağrı Merkezi Uygulamaları' },
    { id: 'arac-gorsellestirme', label: 'Araç Görselleştirme' },
    { id: 'goruntu-guvenligi', label: 'Görüntü Güvenliği ve Gizlilik' },
    { id: 'arac-degerlendirme', label: 'Araç Değerlendirme' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/driveuptr/' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-bold flex items-baseline" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <span className="text-white" style={{ fontWeight: 700 }}>Drive</span>
                  <span className="text-[#1F5ED9]" style={{ fontWeight: 700 }}>UP</span>
                  <span className="text-[10px] text-[#1F5ED9] ml-0.5 self-start mt-0.5">®</span>
                </span>
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {t?.footer?.description || (language === 'en'
                  ? 'Manage your vehicle, maintenance, repair, and rental processes on a single platform with fleet management software. Optimize your operations with modern technology.'
                  : 'Filo yönetimi yazılımları ile araç, bakım, onarım ve kiralama süreçlerinizi tek platformda yönetin. Modern teknoloji ile operasyonlarınızı optimize edin.')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-[#5A00FF] transition-colors">
                    <Mail className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">info@driveuptr.com</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-[#5A00FF] transition-colors">
                    <Phone className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">+90 552 415 0255</span>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-[#5A00FF] transition-colors mt-1">
                    <MapPin className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-semibold">
                      {t?.contact?.page?.address?.title || (language === 'en' ? 'Headquarters' : 'Genel Merkez')}
                    </span>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">DriveUp OÜ Viru väljak 2, 3. korrus</span>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Kesklinna linnaosa, Harju maakond</span>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Tallinn 10111, Estonia</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">{t?.footer?.quickLinks || (language === 'en' ? 'Quick Links' : 'Hızlı Linkler')}</h3>
              <ul className="space-y-3">
                {quickLinks.map((link: { name: string; page: string }) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        onNavigate(link.page);
                        // Scroll to top when navigating
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: 'instant' });
                        }, 100);
                      }}
                      className="text-gray-300 hover:text-[#5A00FF] transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">{t?.footer?.products || (language === 'en' ? 'Our Products' : 'Ürünlerimiz')}</h3>
              <ul className="space-y-3">
                {products.map((product: { name: string; description: string }) => {
                  // Ürün ismini product ID'sine çevir
                  const productNameToId: { [key: string]: string } = {
                    'DriveUpFixer': 'driveupfixer',
                    'DriveUpPro': 'driveuppro',
                    'DriveUpManager': 'driveupmanager',
                    'DriveUpStudio': 'driveupstudio',
                    'DriveUpRedact': 'driveupredact',
                    'DriveUpDesk': 'driveupdesk'
                  };

                  const productId = productNameToId[product.name];

                  const handleProductClick = () => {
                    if (productId && t?.platforms && onNavigateProduct) {
                      const foundProduct = t.platforms.find((p: any) => p.id === productId);
                      if (foundProduct) {
                        onNavigateProduct(foundProduct);
                      }
                    }
                  };

                  return (
                    <li key={product.name}>
                      <button
                        onClick={handleProductClick}
                        className="text-gray-300 hover:text-[#5A00FF] transition-colors text-sm flex items-center gap-2 group"
                      >
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        {product.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">{t?.footer?.services || 'Hizmetlerimiz'}</h3>
              <ul className="space-y-3">
                {services.map((service: any) => (
                  <li key={service.id || service}>
                    <button
                      onClick={() => onNavigate(service.id || service)}
                      className="text-gray-300 hover:text-[#5A00FF] transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      {service.label || service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-700/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">{t?.footer?.newsletter?.title || (language === 'en' ? 'Stay Updated' : 'Güncel Kalın')}</h3>
              <p className="text-gray-300 text-sm">
                {t?.footer?.newsletter?.subtitle || (language === 'en'
                  ? 'Join our email list for the latest information about our fleet management software and industry news.'
                  : 'Filo yönetimi yazılımlarımız hakkında güncel bilgiler ve sektör haberleri için e-posta listemize katılın.')}
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t?.footer?.newsletter?.placeholder || (language === 'en' ? 'Your email address' : 'E-posta adresiniz')}
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#5A00FF] focus:ring-2 focus:ring-[#5A00FF]/20 transition-all"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#5A00FF] to-[#9A17E3] text-white rounded-lg hover:from-[#4A00E6] hover:to-[#8A15D3] transition-all shadow-lg hover:shadow-[#5A00FF]/50 font-medium">
                {t?.footer?.newsletter?.button || (language === 'en' ? 'Subscribe' : 'Abone Ol')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              {t?.footer?.copyright || (language === 'en'
                ? `© ${currentYear} DriveUP® Technologies. All rights reserved.`
                : `© ${currentYear} DriveUP® Teknolojileri. Tüm hakları saklıdır.`)}
            </div>

            <div className="flex items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#5A00FF] transition-all"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="py-4 border-t border-gray-700/50">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-400">
            <button onClick={() => onNavigate('privacy-policy')} className="hover:text-[#5A00FF] transition-colors">{t?.footer?.legal?.privacy || (language === 'en' ? 'Privacy Policy' : 'Gizlilik Politikası')}</button>
            <button onClick={() => onNavigate('terms-of-use')} className="hover:text-[#5A00FF] transition-colors">{t?.footer?.legal?.terms || (language === 'en' ? 'Terms of Use' : 'Kullanım Şartları')}</button>
            <button onClick={() => onNavigate('cookie-policy')} className="hover:text-[#5A00FF] transition-colors">{t?.footer?.legal?.cookies || (language === 'en' ? 'Cookie Policy' : 'Çerez Politikası')}</button>
            <button onClick={() => onNavigate('kvkk')} className="hover:text-[#5A00FF] transition-colors">{t?.footer?.legal?.kvkk || 'KVKK'}</button>
            <button onClick={() => onNavigate('gdpr')} className="hover:text-[#5A00FF] transition-colors">{t?.footer?.legal?.gdpr || 'GDPR'}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
