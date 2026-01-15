import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '../components/ui/button';
import { Header } from '../components/Header';
import { PartnerApplicationForm } from '../components/forms/PartnerApplicationForm';
import { InvestorForm } from '../components/forms/InvestorForm';
import { HomePage } from '../components/HomePage';
import { ProductDetailPage } from '../components/ProductDetailPage';
import { content } from '../constants/content';
import { staticScreenshotData } from '../constants/screenshots';
import { Language, Page } from '../types';
import { Toaster } from "../components/ui/sonner";
import { toast } from "sonner";
import { ContactBanner } from "../components/ContactBanner";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [language, setLanguage] = useState<Language>('tr');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [partnerFormOpen, setPartnerFormOpen] = useState(false);
  const [investorFormOpen, setInvestorFormOpen] = useState(false);
  const [contactBannerOpen, setContactBannerOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Window resize handler for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Load language preference
  useEffect(() => {
    const savedLang = localStorage.getItem('driveup-language') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  // Save language preference
  const changeLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('driveup-language', lang);
  }, []);

  // Navigation handlers
  const navigateToProduct = useCallback((product: any) => {
    setSelectedProduct(product);
    setCurrentPage('product');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToHome = useCallback(() => {
    setCurrentPage('home');
    setSelectedProduct(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Form handlers
  const openPartnerForm = useCallback(() => {
    setPartnerFormOpen(true);
    setMobileMenuOpen(false);
  }, []);

  const closePartnerForm = useCallback(() => {
    setPartnerFormOpen(false);
  }, []);

  const openInvestorForm = useCallback(() => {
    setInvestorFormOpen(true);
    setMobileMenuOpen(false);
  }, []);

  const closeInvestorForm = useCallback(() => {
    setInvestorFormOpen(false);
  }, []);

  // Contact handler
  const handleContactClick = useCallback(() => {
    setContactBannerOpen(true);
    setMobileMenuOpen(false);
  }, []);

  const closeContactBanner = useCallback(() => {
    setContactBannerOpen(false);
  }, []);

  const copyEmailAddress = useCallback(() => {
    navigator.clipboard.writeText('info@driveuptr.com');
    toast.success(language === 'tr' ? 'E-posta adresi kopyalandı!' : 'Email address copied!');
  }, [language]);

  const t = content[language];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // Responsive carousel functions
  const slidesPerView = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;
  const maxSlides = Math.max(0, t.platforms.length - slidesPerView);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev <= 0 ? maxSlides : prev - 1));
  };

  // Reset carousel on window resize
  useEffect(() => {
    setCurrentSlide(0);
  }, [windowWidth]);

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / slidesPerView;
      carouselRef.current.scrollTo({
        left: currentSlide * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentSlide, slidesPerView]);

  return (
    <div className="page-wrapper">
      {/* Header */}
      <Header 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        language={language}
        changeLanguage={changeLanguage}
        scrollToSection={scrollToSection}
        t={t}
        currentPage={currentPage}
        navigateToHome={navigateToHome}
        onContactClick={handleContactClick}
      />

      {/* Form Modals */}
      <PartnerApplicationForm
        isOpen={partnerFormOpen}
        onClose={closePartnerForm}
        language={language}
      />

      <InvestorForm
        isOpen={investorFormOpen}
        onClose={closeInvestorForm}
        language={language}
      />

      {/* Contact Banner */}
      {contactBannerOpen && (
        <ContactBanner
          language={language}
          onClose={closeContactBanner}
          onCopyEmail={copyEmailAddress}
        />
      )}

      {/* Toast Notifications */}
      <Toaster richColors position={windowWidth < 768 ? "top-center" : "bottom-right"} />

      {/* Page Content */}
      <div className={`page-content transition-all duration-300 pt-4 sm:pt-6 lg:pt-0 ${contactBannerOpen ? 'pt-6 sm:pt-8 lg:pt-16' : ''} ${mobileMenuOpen ? 'overflow-hidden' : ''}`}>
        {currentPage === 'home' ? (
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
            openInvestorForm={openInvestorForm}
            windowWidth={windowWidth}
          />
        ) : (
          <ProductDetailPage 
            product={selectedProduct}
            screenshots={staticScreenshotData}
            language={language}
            allProducts={t.platforms}
            onProductChange={navigateToProduct}
            navigateToHome={navigateToHome}
            openPartnerForm={openPartnerForm}
          />
        )}
      </div>
    </div>
  );
}