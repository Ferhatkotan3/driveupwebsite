import { useState, useEffect, useRef } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HomePage } from '../components/HomePage';
import { ProductDetailPage } from '../components/ProductDetailPage';
import ServiceDetailPage from '../components/ServiceDetailPage';
import { PartnerApplicationForm } from '../components/forms/PartnerApplicationForm';
import { content } from '../constants/content';
import { Language } from '../types';
import { ThemeProvider } from '../components/ui/theme-provider';
import { AboutPage, TechnologyPage, BlogPage, ContactPage } from '../components/pages';
import { ServicesPage } from '../components/pages/ServicesPage';
import { FiloYonetimiPage } from '../components/pages/services/FiloYonetimiPage';
import { OzmalAracPage } from '../components/pages/services/OzmalAracPage';
import { AracTakipPage } from '../components/pages/services/AracTakipPage';
import { BakimOnarimPage } from '../components/pages/services/BakimOnarimPage';
import { GunlukKiralamaPage } from '../components/pages/services/GunlukKiralamaPage';
import { KiralamaSirketleriPage } from '../components/pages/services/KiralamaSirketleriPage';
import { CagriMerkeziPage } from '../components/pages/services/CagriMerkeziPage';
import { AracGorsellestirmePage } from '../components/pages/services/AracGorsellestirmePage';
import { GoruntuGuvenligiPage } from '../components/pages/services/GoruntuGuvenligiPage';
import { AracDegerlendirmePage } from '../components/pages/services/AracDegerlendirmePage';
import { BlogArticlePage } from '../components/pages/articles/BlogArticlePage';
import { GDPRPage, PrivacyPolicyPage, TermsOfUsePage, CookiePolicyPage, KVKKPage } from '../components/pages';
import { NotFoundPage } from '../components/pages/NotFoundPage';

type Page = 'home' | 'services' | 'what-we-do' | 'products' | 'technology' | 'about' | 'contact' | 'blog' | 'blog-article' | 'product-detail' | 'service-detail' | 'filo-yonetimi' | 'ozmal-arac' | 'arac-takip' | 'bakim-onarim' | 'gunluk-kiralama' | 'kiralama-sirketleri' | 'cagri-merkezi' | 'arac-gorsellestirme' | 'goruntu-guvenligi' | 'arac-degerlendirme' | 'gdpr' | 'privacy-policy' | 'terms-of-use' | 'cookie-policy' | 'kvkk';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('tr');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);

  const t = content[language];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load language from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('lang') as Language;
      if (savedLanguage && (savedLanguage === 'tr' || savedLanguage === 'en')) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  // Product ID to hash mapping
  const productIdToHash = (productId: string): string => {
    const mapping: { [key: string]: string } = {
      'driveupfixer': 'product-fixer',
      'driveuppro': 'product-pro',
      'driveupdesk': 'product-desk',
      'driveupmanager': 'product-manager',
      'driveupstudio': 'product-studio',
      'driveupredact': 'product-redact'
    };
    return mapping[productId] || '';
  };

  // Hash to product ID mapping
  const hashToProductId = (hash: string): string => {
    const mapping: { [key: string]: string } = {
      'product-fixer': 'driveupfixer',
      'product-pro': 'driveuppro',
      'product-desk': 'driveupdesk',
      'product-manager': 'driveupmanager',
      'product-studio': 'driveupstudio',
      'product-redact': 'driveupredact'
    };
    return mapping[hash] || '';
  };

  // Handle hash-based routing for service pages and products
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);

      // Check if it's a product hash
      if (hash.startsWith('product-')) {
        const productId = hashToProductId(hash);
        if (productId && t.platforms) {
          const product = t.platforms.find((p: any) => p.id === productId);
          if (product) {
            setSelectedProduct(product);
            setCurrentPage('product-detail');
            return;
          }
        }
        // If product not found, clear invalid hash
        if (!productId || !t.platforms?.find((p: any) => p.id === productId)) {
          window.location.hash = '';
          setCurrentPage('home');
          setSelectedProduct(null);
          return;
        }
      }

      // Check if it's a standard page (contact, about, blog, etc.)
      if (hash && ['contact', 'about', 'blog', 'services', 'gdpr', 'privacy-policy', 'terms-of-use', 'cookie-policy', 'kvkk'].includes(hash)) {
        setCurrentPage(hash as Page);
        setSelectedProduct(null);
        setSelectedArticle(null);
        setSelectedService(null);
        return;
      }

      // Check if it's a service page
      if (hash && ['filo-yonetimi', 'ozmal-arac', 'arac-takip', 'bakim-onarim', 'gunluk-kiralama', 'kiralama-sirketleri', 'cagri-merkezi', 'arac-gorsellestirme', 'goruntu-guvenligi', 'arac-degerlendirme'].includes(hash)) {
        setCurrentPage(hash as Page);
        setSelectedProduct(null);
        setSelectedArticle(null);
        return;
      }

      // Check if it's blog article
      if (hash.startsWith('blog-article-')) {
        const articleId = hash.replace('blog-article-', '');
        setSelectedArticle(articleId);
        setCurrentPage('blog-article');
        setSelectedProduct(null);
        return;
      }

      // If no hash, go to home
      if (!hash) {
        setCurrentPage('home');
        setSelectedProduct(null);
        setSelectedArticle(null);
        return;
      }

      // If unrecognized hash, clear it and go to home
      if (hash && !hash.startsWith('product-') && !hash.startsWith('blog-article-') && !['contact', 'about', 'blog', 'services', 'gdpr', 'privacy-policy', 'terms-of-use', 'cookie-policy', 'kvkk', 'filo-yonetimi', 'ozmal-arac', 'arac-takip', 'bakim-onarim', 'gunluk-kiralama', 'kiralama-sirketleri', 'cagri-merkezi', 'arac-gorsellestirme', 'goruntu-guvenligi', 'arac-degerlendirme'].includes(hash)) {
        window.location.hash = '';
        setCurrentPage('home');
        setSelectedProduct(null);
        setSelectedArticle(null);
      }
    };

    // Check initial hash only if platforms are loaded
    if (t.platforms && t.platforms.length > 0) {
      handleHashChange();
    } else {
      // If platforms not loaded yet, go to home
      setCurrentPage('home');
      setSelectedProduct(null);
      setSelectedArticle(null);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [language, t.platforms]);

  const handleNavigation = (page: string, serviceId?: string) => {
    // Handle special pages that scroll to sections on homepage
    if (page === 'what-we-do' || page === 'products' || page === 'technology' || page === 'partners' || page === 'faq') {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setSelectedProduct(null);
        setSelectedService(null);
        setSelectedArticle(null);
        setExpandedFAQ(null);
        window.location.hash = '';
        // Wait for page to render, then scroll to section
        setTimeout(() => {
          const sectionIdMap: { [key: string]: string } = {
            'what-we-do': 'what-we-do',
            'products': 'products',
            'technology': 'technology',
            'partners': 'partners',
            'faq': 'faq'
          };
          const sectionId = sectionIdMap[page] || page;
          const element = document.getElementById(sectionId);
          if (element) {
            const offsetTop = element.offsetTop - 100;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            // Also try instant scroll as backup
            setTimeout(() => {
              window.scrollTo({ top: offsetTop, behavior: 'instant' });
            }, 100);
          }
        }, 200);
      } else {
        // Already on home, just scroll to section
        const sectionIdMap: { [key: string]: string } = {
          'what-we-do': 'what-we-do',
          'products': 'products',
          'technology': 'technology',
          'partners': 'partners',
          'faq': 'faq'
        };
        const sectionId = sectionIdMap[page] || page;
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          // Also try instant scroll as backup
          setTimeout(() => {
            window.scrollTo({ top: offsetTop, behavior: 'instant' });
          }, 100);
        }
      }
      return;
    }

    setCurrentPage(page as Page);
    setSelectedProduct(null);
    setSelectedService(serviceId || null);
    setSelectedArticle(null);
    setExpandedFAQ(null);
    // Force scroll to top immediately for page navigation
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Additional scroll after a small delay
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
    // Clear hash when navigating to non-hash pages
    if (page === 'home' || page === 'about' || page === 'contact' || page === 'blog' || page === 'services') {
      window.location.hash = '';
    }
  };

  const navigateToProduct = (product: any) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    // Update hash for browser history
    const hash = productIdToHash(product.id);
    if (hash) {
      window.location.hash = hash;
    }
  };

  const navigateToService = (serviceId: string) => {
    setSelectedService(serviceId);
    setCurrentPage('service-detail');
  };

  const handleContact = () => {
    setCurrentPage('contact');
    window.location.hash = 'contact'; // Set hash for contact page
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Additional scroll after a small delay
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    const slidesPerView = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;
    const maxSlides = Math.max(0, t.platforms.length - slidesPerView);
    setCurrentSlide(prev => Math.min(prev + 1, maxSlides));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const openPartnerForm = () => {
    setShowPartnerForm(true);
  };


  const closeForms = () => {
    setShowPartnerForm(false);
  };

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', newLanguage);
    }
  };

  // Scroll to top when navigating to any page (except home with section scrolls)
  useEffect(() => {
    // Skip scroll for what-we-do and products if already on home (they scroll to sections)
    if (currentPage === 'home') {
      return;
    }

    // Force scroll to top immediately for all page changes
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Also try with instant behavior
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Additional scroll after a small delay to ensure it works
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
  }, [currentPage]);

  const renderPage = () => {
    if (selectedProduct && currentPage === 'product-detail') {
      return (
        <ProductDetailPage
          product={selectedProduct}
          language={language}
          onContact={handleContact}
        />
      );
    }

    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            t={t}
            navigateToProduct={navigateToProduct}
            scrollToSection={scrollToSection}
            expandedFAQ={expandedFAQ}
            setExpandedFAQ={setExpandedFAQ}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            carouselRef={carouselRef}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            language={language}
            openPartnerForm={openPartnerForm}
            windowWidth={windowWidth}
            onContact={handleContact}
          />
        );
      case 'services':
        return <ServicesPage t={t} onContactClick={handleContact} />;
      case 'service-detail':
        return selectedService ? (
          <ServiceDetailPage
            serviceId={selectedService}
            onBack={() => setCurrentPage('home')}
          />
        ) : (
          <ServicesPage t={t} onContactClick={handleContact} />
        );
      case 'about':
        return <AboutPage t={t} onContactClick={handleContact} language={language} />;
      case 'technology':
        return <TechnologyPage t={t} onContactClick={handleContact} />;
      case 'blog':
        return <BlogPage t={t} onContactClick={handleContact} onNavigateToArticle={(articleId) => {
          setSelectedArticle(articleId);
          setCurrentPage('blog-article');
        }} />;
      case 'blog-article':
        return selectedArticle ? (
          <BlogArticlePage
            articleId={selectedArticle}
            onBack={() => {
              setCurrentPage('blog');
              setSelectedArticle(null);
            }}
            onContactClick={handleContact}
            onNavigateToArticle={(articleId) => {
              setSelectedArticle(articleId);
              setCurrentPage('blog-article');
            }}
          />
        ) : (
          <BlogPage t={t} onContactClick={handleContact} />
        );
      case 'contact':
        return <ContactPage t={t} onContactClick={handleContact} language={language} />;
      case 'filo-yonetimi':
        return <FiloYonetimiPage language={language} t={t} />;
      case 'ozmal-arac':
        return <OzmalAracPage language={language} t={t} />;
      case 'arac-takip':
        return <AracTakipPage language={language} t={t} />;
      case 'bakim-onarim':
        return <BakimOnarimPage language={language} t={t} />;
      case 'gunluk-kiralama':
        return <GunlukKiralamaPage language={language} t={t} />;
      case 'kiralama-sirketleri':
        return <KiralamaSirketleriPage language={language} t={t} />;
      case 'cagri-merkezi':
        return <CagriMerkeziPage language={language} t={t} />;
      case 'arac-gorsellestirme':
        return <AracGorsellestirmePage language={language} t={t} />;
      case 'goruntu-guvenligi':
        return <GoruntuGuvenligiPage language={language} t={t} />;
      case 'arac-degerlendirme':
        return <AracDegerlendirmePage language={language} t={t} />;
      case 'gdpr':
        return <GDPRPage language={language} onBack={() => setCurrentPage('home')} t={t} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage language={language} onBack={() => setCurrentPage('home')} t={t} />;
      case 'terms-of-use':
        return <TermsOfUsePage language={language} onBack={() => setCurrentPage('home')} t={t} />;
      case 'cookie-policy':
        return <CookiePolicyPage language={language} onBack={() => setCurrentPage('home')} t={t} />;
      case 'kvkk':
        return <KVKKPage language={language} onBack={() => setCurrentPage('home')} t={t} />;
      default:
        // Check if it's an unknown hash/page
        if (window.location.hash && window.location.hash !== '') {
          return <NotFoundPage language={language} onNavigateHome={() => setCurrentPage('home')} />;
        }
        return (
          <HomePage
            t={t}
            navigateToProduct={navigateToProduct}
            scrollToSection={scrollToSection}
            expandedFAQ={expandedFAQ}
            setExpandedFAQ={setExpandedFAQ}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            carouselRef={carouselRef}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            language={language}
            openPartnerForm={openPartnerForm}
            windowWidth={windowWidth}
            onContact={handleContact}
          />
        );
    }
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="driveup-ui-theme-fixed">
      <div className="min-h-screen bg-background">

        <Header
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          language={language}
          changeLanguage={changeLanguage}
          scrollToSection={scrollToSection}
          t={t}
          currentPage={currentPage}
          navigateToHome={() => setCurrentPage('home')}
          onContactClick={handleContact}
          onNavigateService={navigateToService}
          onNavigatePage={handleNavigation}
          onNavigateProduct={navigateToProduct}
        />

        <main className="pt-16">
          {renderPage()}
        </main>

        <Footer
          onNavigate={handleNavigation}
          onContact={handleContact}
          onNavigateProduct={navigateToProduct}
          t={t}
          language={language}
        />

        {/* Forms */}
        {showPartnerForm && (
          <PartnerApplicationForm
            isOpen={showPartnerForm}
            onClose={closeForms}
            language={language}
          />
        )}

      </div>
    </ThemeProvider>
  );
}