import React, { useState, useEffect } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { Button } from './ui/button';
import { Language, Page } from '../types';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  language: Language;
  changeLanguage: (lang: Language) => void;
  scrollToSection: (sectionId: string) => void;
  t: any;
  currentPage: Page;
  navigateToHome: () => void;
  onContactClick: () => void;
  onNavigateService?: (serviceId: string) => void;
  onNavigatePage?: (page: string) => void;
  onNavigateProduct?: (product: any) => void;
}

export const Header = React.memo(({
  mobileMenuOpen,
  setMobileMenuOpen,
  language,
  changeLanguage,
  scrollToSection,
  t,
  currentPage,
  navigateToHome,
  onContactClick,
  onNavigateService: _onNavigateService,
  onNavigatePage,
  onNavigateProduct
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      // Only handle desktop dropdowns, not mobile menu
      if (!target.closest('.dropdown') && !target.closest('.mobile-menu')) {
        setServicesOpen(false);
        setProductsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Reset mobile dropdowns when mobile menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileServicesOpen(false);
      setMobileProductsOpen(false);
    }
  }, [mobileMenuOpen]);

  const handleLanguageToggle = () => {
    changeLanguage(language === 'tr' ? 'en' : 'tr');
  };

  const handleNavigation = (sectionId: string) => {
    // Sayfa navigasyonu gereken sayfalar
    const pageRoutes = ['about', 'contact', 'blog', 'services', 'products'];

    if (pageRoutes.includes(sectionId)) {
      // Sayfa değiştir
      if (onNavigatePage) {
        onNavigatePage(sectionId);
      } else {
        // Fallback: home'a git ve section'a scroll et
        if (currentPage !== 'home') {
          navigateToHome();
          setTimeout(() => scrollToSection(sectionId), 100);
        } else {
          scrollToSection(sectionId);
        }
      }
    } else {
      // Section scroll (home sayfası içinde)
      if (currentPage !== 'home') {
        navigateToHome();
        setTimeout(() => scrollToSection(sectionId), 100);
      } else {
        scrollToSection(sectionId);
      }
    }
    setMobileMenuOpen(false);
  };

  const handleServiceClick = (serviceId: string) => {
    // Hizmet sayfalarını aç
    if (onNavigatePage) {
      onNavigatePage(serviceId);
    } else {
      // Fallback: hash routing kullan
      const currentUrl = window.location.origin + window.location.pathname;
      const url = `${currentUrl}#${serviceId}`;
      window.location.href = url;
    }

    setServicesOpen(false);
    setMobileMenuOpen(false);
  };

  const handleProductClick = (productHeaderId: string) => {
    // Header'daki ürün ID'sini product ID'sine çevir
    const productIdMapping: { [key: string]: string } = {
      'driveup-pro': 'driveuppro',
      'driveup-studio': 'driveupstudio',
      'driveup-redact': 'driveupredact',
      'driveup-fixer': 'driveupfixer',
      'driveup-manager': 'driveupmanager',
      'driveup-desk': 'driveupdesk'
    };

    const productId = productIdMapping[productHeaderId];
    if (productId && t.platforms) {
      const product = t.platforms.find((p: any) => p.id === productId);
      if (product && onNavigateProduct) {
        onNavigateProduct(product);
      } else {
        // Fallback: hash routing kullan
        const hashMapping: { [key: string]: string } = {
          'driveup-pro': 'product-pro',
          'driveup-studio': 'product-studio',
          'driveup-redact': 'product-redact',
          'driveup-fixer': 'product-fixer',
          'driveup-manager': 'product-manager',
          'driveup-desk': 'product-desk'
        };
        const hash = hashMapping[productHeaderId] || `product-${productId.replace('driveup', '').toLowerCase()}`;
        window.location.hash = hash;
      }
    }

    setProductsOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes border-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes neon-sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        .animate-border-spin::before, .animate-border-spin-products::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          animation: border-spin 3s linear infinite;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .animate-border-spin:hover::before, .animate-border-spin-products:hover::before {
          opacity: 1;
        }
        .animate-border-spin::before {
          background: conic-gradient(from 0deg, #fbbf24, #ef4444, #fbbf24);
        }
        .animate-border-spin-products::before {
          background: conic-gradient(from 0deg, #9333ea, #3b82f6, #fbbf24, #9333ea);
        }
        .animate-border-spin::after, .animate-border-spin-products::after {
          content: "";
          position: absolute;
          inset: 1px;
          background: inherit;
          border-radius: inherit;
          z-index: 0;
        }
        .animate-border-spin > *, .animate-border-spin-products > * {
          position: relative;
          z-index: 1;
        }
      `}} />
      {/* Backdrop */}
      {(servicesOpen || productsOpen) && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] top-[80px] lg:top-[96px]" />
      )}

      <header className={`fixed top-0 w-full z-[9999] transition-all duration-300 ${isScrolled
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-800'
        : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm'
        }`}>
        {/* Neon Scan Line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 h-full w-[30%] bg-gradient-to-r from-transparent via-[#ef4444] via-[#fbbf24] via-[#3b82f6] to-transparent opacity-60"
            style={{ animation: 'neon-sweep 2s linear infinite' }}
          />
        </div>

        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* Logo */}
            <button
              onClick={navigateToHome}
              className="flex items-start text-2xl lg:text-3xl font-bold"
            >
              <div className="flex items-baseline">
                <span className="text-[#111111] dark:text-[#FFFFFF]">Drive</span>
                <span className="text-[#1F5ED9]">UP</span>
                <span className="text-[10px] lg:text-xs text-[#1F5ED9] font-bold ml-0.5 self-start mt-1">®</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10 h-full">

              {/* Services */}
              <div className="h-full flex items-center relative dropdown">
                <button
                  className="flex items-center text-gray-500 dark:text-gray-400 hover:text-[#5A00FF] transition-colors font-bold text-lg h-full"
                  onClick={() => {
                    setServicesOpen(!servicesOpen);
                    setProductsOpen(false);
                  }}
                >
                  {t.nav.services}
                  <ChevronDownIcon className={`ml-1 h-5 w-5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-[420px] bg-white dark:bg-gray-950 rounded-b-2xl shadow-2xl border border-t-0 border-gray-200 dark:border-gray-800 py-4 z-[9999] transition-all duration-300 origin-top ${servicesOpen
                    ? 'opacity-100 scale-100 translate-y-0 visible'
                    : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
                    }`}
                >
                  {(t?.nav?.serviceItems || [
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
                  ]).map((service: any) => (
                    <div key={service.id} className="px-4 py-1.5">
                      <button
                        onClick={() => handleServiceClick(service.id)}
                        className="group relative flex items-center w-full text-left px-5 py-4 bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 hover:text-[#5A00FF] dark:hover:text-white transition-all duration-300 rounded-xl font-bold animate-border-spin overflow-hidden"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#5A00FF] mr-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                        <span className="flex-1 group-hover:translate-x-1 transition-transform duration-300 text-base">{service.label}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNavigation('what-we-do')}
                className="text-gray-500 dark:text-gray-400 hover:text-[#5A00FF] transition-colors font-bold text-lg"
              >
                {t.nav.whatWeDo}
              </button>

              <button
                onClick={() => handleNavigation('how-we-do')}
                className="text-gray-500 dark:text-gray-400 hover:text-[#5A00FF] transition-colors font-bold text-lg"
              >
                {t.nav.howWeDo}
              </button>

              {/* Products */}
              <div className="h-full flex items-center relative dropdown">
                <button
                  className="flex items-center text-gray-500 dark:text-gray-400 hover:text-[#5A00FF] transition-colors font-bold text-lg h-full"
                  onClick={() => {
                    setProductsOpen(!productsOpen);
                    setServicesOpen(false);
                  }}
                >
                  {t.nav.products}
                  <ChevronDownIcon className={`ml-1 h-5 w-5 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
                </button>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-[420px] bg-white dark:bg-gray-950 rounded-b-2xl shadow-2xl border border-t-0 border-gray-200 dark:border-gray-800 py-4 z-[9999] transition-all duration-300 origin-top ${productsOpen
                    ? 'opacity-100 scale-100 translate-y-0 visible'
                    : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
                    }`}
                >
                  {[
                    { id: 'driveup-fixer', name: 'Fixer' },
                    { id: 'driveup-studio', name: 'Studio' },
                    { id: 'driveup-pro', name: 'Pro' },
                    { id: 'driveup-manager', name: 'Manager' },
                    { id: 'driveup-desk', name: 'Desk' },
                    { id: 'driveup-redact', name: 'Redact' }
                  ].map((product) => (
                    <div key={product.id} className="px-4 py-1.5">
                      <button
                        onClick={() => handleProductClick(product.id)}
                        className="group relative flex items-center w-full text-left px-5 py-4 bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 hover:text-[#5A00FF] dark:hover:text-white transition-all duration-300 rounded-xl font-bold animate-border-spin-products overflow-hidden"
                      >
                        <span className="flex items-center flex-1 transition-transform duration-300 group-hover:translate-x-1">
                          <span className="text-[#111111] dark:text-[#FFFFFF]">Drive</span>
                          <span className="text-[#1F5ED9]">Up</span>
                          <span className="text-[#9A17E3] ml-1">{product.name}</span>
                        </span>
                        <span className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 text-[#9A17E3]">
                          →
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNavigation('about')}
                className="text-gray-500 hover:text-[#5A00FF] transition-colors font-bold text-lg"
              >
                {t.nav.about}
              </button>

              <button
                onClick={() => handleNavigation('contact')}
                className="text-gray-500 hover:text-[#5A00FF] transition-colors font-bold text-lg"
              >
                {t.nav.contact}
              </button>

              <button
                onClick={() => handleNavigation('blog')}
                className="text-gray-500 hover:text-[#5A00FF] transition-colors font-bold text-lg"
              >
                {t.nav.blog}
              </button>

            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <button
                  onClick={handleLanguageToggle}
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${language === 'tr'
                    ? 'bg-white dark:bg-gray-700 text-[#5A00FF] shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-[#5A00FF]'
                    }`}
                >
                  TR
                </button>
                <button
                  onClick={handleLanguageToggle}
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${language === 'en'
                    ? 'bg-white dark:bg-gray-700 text-[#5A00FF] shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-[#5A00FF]'
                    }`}
                >
                  EN
                </button>
              </div>

              <Button
                onClick={onContactClick}
                className="hidden lg:inline-flex bg-[#5A00FF] hover:bg-[#4A00E6] text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-sm sm:text-base"
              >
                {t.nav.getStarted}
              </Button>



              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-[#5A00FF] transition-colors"
              >
                {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mobile-menu border-t border-gray-100 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md relative z-[10000] max-h-[calc(100vh-64px)] overflow-y-auto">
              <div className="px-4 py-6 space-y-2">
                {/* Mobile Services Dropdown */}
                <div className="relative">
                  <button
                    className="flex items-center justify-between w-full text-left text-gray-700 dark:text-gray-300 hover:text-[#5A00FF] transition-colors font-bold min-h-[44px] text-base px-3 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileServicesOpen(!mobileServicesOpen);
                      setMobileProductsOpen(false);
                    }}
                  >
                    {t.nav.services}
                    <ChevronDownIcon className={`ml-2 h-5 w-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 border-l-2 border-[#5A00FF]/20 dark:border-[#5A00FF]/30 mt-2 space-y-1">
                      {(t?.nav?.serviceItems || [
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
                      ]).map((service: any) => (
                        <button
                          key={service.id}
                          onClick={() => handleServiceClick(service.id)}
                          className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-[#5A00FF] transition-colors font-medium min-h-[40px] text-sm px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          {service.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleNavigation('what-we-do')}
                  className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-[#5A00FF] transition-colors font-bold min-h-[44px] text-base px-3 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {t.nav.whatWeDo}
                </button>

                <button
                  onClick={() => handleNavigation('how-we-do')}
                  className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-[#5A00FF] transition-colors font-bold min-h-[44px] text-base px-3 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {t.nav.howWeDo}
                </button>

                {/* Mobile Products Dropdown */}
                <div className="relative">
                  <button
                    className="flex items-center justify-between w-full text-left text-gray-700 dark:text-gray-300 hover:text-[#5A00FF] transition-colors font-bold min-h-[44px] text-base px-3 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileProductsOpen(!mobileProductsOpen);
                      setMobileServicesOpen(false);
                    }}
                  >
                    {t.nav.products}
                    <ChevronDownIcon className={`ml-2 h-5 w-5 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileProductsOpen && (
                    <div className="pl-4 border-l-2 border-[#5A00FF]/20 dark:border-[#5A00FF]/30 mt-2 space-y-1">
                      {[
                        { id: 'driveup-fixer', name: 'Fixer' },
                        { id: 'driveup-studio', name: 'Studio' },
                        { id: 'driveup-pro', name: 'Pro' },
                        { id: 'driveup-manager', name: 'Manager' },
                        { id: 'driveup-desk', name: 'Desk' },
                        { id: 'driveup-redact', name: 'Redact' }
                      ].map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleProductClick(product.id)}
                          className="block w-full text-left font-medium min-h-[40px] text-sm px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <span className="text-[#000000] dark:text-[#FFFFFF]">Drive</span>
                          <span className="text-[#0003bd]">up</span>
                          <span className="text-[#9A17E3] ml-1">{product.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleNavigation('about')}
                  className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-[#5A00FF] transition-colors font-bold min-h-[44px] text-base px-3 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {t.nav.about}
                </button>

                <button
                  onClick={() => handleNavigation('contact')}
                  className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-[#5A00FF] transition-colors font-bold min-h-[44px] text-base px-3 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {t.nav.contact}
                </button>

                <button
                  onClick={() => handleNavigation('blog')}
                  className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-[#5A00FF] transition-colors font-bold min-h-[44px] text-base px-3 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {t.nav.blog}
                </button>

                <div className="pt-4 flex flex-col gap-4">
                  <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1 w-full">
                    <button
                      onClick={handleLanguageToggle}
                      className={`flex-1 px-3 py-2 text-sm font-bold rounded-md transition-all ${language === 'tr'
                        ? 'bg-white dark:bg-gray-700 text-[#5A00FF] shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:text-[#5A00FF]'
                        }`}
                    >
                      TR
                    </button>
                    <button
                      onClick={handleLanguageToggle}
                      className={`flex-1 px-3 py-2 text-sm font-bold rounded-md transition-all ${language === 'en'
                        ? 'bg-white dark:bg-gray-700 text-[#5A00FF] shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:text-[#5A00FF]'
                        }`}
                    >
                      EN
                    </button>
                  </div>
                  <Button
                    onClick={() => {
                      onContactClick();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-[#5A00FF] hover:bg-[#4A00E6] text-white py-3 rounded-lg font-medium"
                  >
                    {t.nav.getStarted}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
});