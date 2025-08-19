import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Check, ArrowLeft } from 'lucide-react';
import { ProductNavigation } from './ProductNavigation';
import { ScreenshotDisplay, ScreenshotNavigation } from './ScreenshotComponents';
import { Language, ScreenshotData } from '../types';
import { toast } from "sonner";
import { Dialog, DialogContent } from "./ui/dialog";

// Import all product screenshot constants
import { staticScreenshotData } from '../constants/screenshots';
import { driveupManagerScreenshotData } from '../constants/driveupManagerScreenshots';
import { driveupDeskScreenshotData } from '../constants/driveupDeskScreenshots';
import { driveUpProScreenshotData } from '../constants/driveUpProScreenshots';
import { driveUpGoScreenshotData } from '../constants/driveUpGoScreenshots';

interface ProductDetailPageProps {
  product: any;
  screenshots: ScreenshotData[];
  language: Language;
  allProducts: any[];
  onProductChange: (product: any) => void;
  navigateToHome: () => void;
  openPartnerForm: () => void;
}

export const ProductDetailPage = React.memo(({ 
  product, 
  screenshots, 
  language,
  allProducts,
  onProductChange,
  navigateToHome,
  openPartnerForm
}: ProductDetailPageProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Get product-specific screenshots based on product ID
  const getProductScreenshots = useCallback(() => {
    switch (product.id) {
      case 'driveupfixer':
        return staticScreenshotData;
      case 'driveupmanager':
        return driveupManagerScreenshotData;
      case 'driveupdesk':
        return driveupDeskScreenshotData;
      case 'driveuppro':
        return driveUpProScreenshotData;
      case 'driveupgo':
        return driveUpGoScreenshotData;
      default:
        return staticScreenshotData; // fallback to main screenshots
    }
  }, [product.id]);

  // Get current product screenshots
  const currentProductScreenshots = getProductScreenshots();

  // Thumbnail referansları: aktif olanı otomatik ortalamak için
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const openLightbox = useCallback(() => setIsLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setIsLightboxOpen(false), []);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev >= currentProductScreenshots.length - 1 ? 0 : prev + 1));
  }, [currentProductScreenshots.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev <= 0 ? currentProductScreenshots.length - 1 : prev - 1));
  }, [currentProductScreenshots.length]);

  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Reset slide and scroll to product content when product changes
  useEffect(() => {
    setCurrentSlide(0);
    const contentTop = document.getElementById('product-top');
    if (contentTop) {
      contentTop.scrollIntoView({ behavior: 'auto', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [product.id, currentProductScreenshots.length]);
  // Lightbox açıkken klavye kısayolları
  useEffect(() => {
    if (!isLightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isLightboxOpen, nextSlide, prevSlide, closeLightbox]);

  // Update currentSlide when product changes to prevent out-of-bounds errors
  useEffect(() => {
    if (currentSlide >= currentProductScreenshots.length) {
      setCurrentSlide(0);
    }
  }, [currentProductScreenshots.length, currentSlide]);

  // Lightbox açıkken body scroll kilidi
  useEffect(() => {
    if (isLightboxOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [isLightboxOpen]);

  // Dokunmatik kaydırma
  const touchRef = useRef<{ x: number | null }>({ x: null });
  const onTouchStart = (e: React.TouchEvent) => {
    touchRef.current.x = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchRef.current.x == null) return;
    const dx = e.changedTouches[0].clientX - touchRef.current.x;
    if (Math.abs(dx) > 40) {
      dx < 0 ? nextSlide() : prevSlide();
    }
    touchRef.current.x = null;
  };

  // Kaynak ve alt metin yardımcıları (tip güvenli)
  const getShotSrc = useCallback((shot: ScreenshotData) => {
    return (shot as any)?.src
      ?? (shot as any)?.url
      ?? (shot as any)?.image
      ?? '';
  }, []);

  const getShotAlt = useCallback((shot: ScreenshotData, idx: number) => {
    const raw =
      (shot as any)?.alt ??
      (shot as any)?.title ??
      (shot as any)?.caption ??
      "";
    return raw || `Screenshot ${idx + 1}`;
  }, []);

  // Lightbox açıldığında veya currentSlide değiştiğinde aktif thumbnail'i ortala
  useEffect(() => {
    if (isLightboxOpen && thumbRefs.current[currentSlide]) {
      thumbRefs.current[currentSlide]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [isLightboxOpen, currentSlide, currentProductScreenshots.length]);

  // Teknik doküman isteği
  const handleTechnicalDocsRequest = useCallback(() => {
    const message = language === 'tr' 
      ? 'Teknik dokümanlar için info@driveuptr.com adresinden talep ediniz.'
      : 'For technical documentation, please contact info@driveuptr.com';
    
    toast.info(message, {
      duration: 5000,
      action: {
        label: language === 'tr' ? 'Kopyala' : 'Copy',
        onClick: () => {
          navigator.clipboard.writeText('info@driveuptr.com');
          toast.success(language === 'tr' ? 'E-posta adresi kopyalandı!' : 'Email address copied!');
        }
      }
    });
  }, [language]);

  return (
    <div className="min-h-screen bg-background pt-14 sm:pt-16">
      {/* Back Button - Fixed Position for mobile */}
      <div className="fixed top-16 sm:top-18 left-4 z-40 lg:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={navigateToHome}
          className="bg-background/80 backdrop-blur-sm border border-border shadow-lg"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {language === 'tr' ? 'Ana Sayfa' : 'Home'}
        </Button>
      </div>

      {/* Product Navigation Bar */}
      <ProductNavigation 
        products={allProducts}
        selectedProduct={product}
        onProductChange={onProductChange}
        language={language}
      />

      {/* Main Content */}
      <section id="product-top" className="pt-8 sm:pt-14" style={{ scrollMarginTop: '112px' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Screenshots */}
            <div className="xl:col-span-2">
              <div className="space-y-6 sm:space-y-8">
                {/* Product Title and Counter */}
                <div className="flex items-center justify-between px-4 sm:px-0">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-muted">
                      <product.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${product.color}`} />
                    </div>
                    <div>
                      <h1 className="text-xl sm:text-2xl font-bold">
                        <span className="text-foreground font-bold">Drive</span>
                        <span style={{color: '#4a00ff'}} className="font-bold">UP</span>
                        {product.title.replace('DriveUp', '')}
                      </h1>
                      <p className="text-muted-foreground text-sm">{product.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {currentSlide + 1} / {currentProductScreenshots.length}
                  </div>
                </div>

                {/* Screenshot Display, tıklanınca lightbox açılır */}
                <div onClick={openLightbox} className="cursor-zoom-in">
                  <ScreenshotDisplay
                    currentSlide={currentSlide}
                    screenshots={currentProductScreenshots}
                    onPrevious={(e?: any) => {
                      if (e?.stopPropagation) e.stopPropagation();
                      prevSlide();
                    }}
                    onNext={(e?: any) => {
                      if (e?.stopPropagation) e.stopPropagation();
                      nextSlide();
                    }}
                  />
                </div>

                <ScreenshotNavigation
                  currentSlide={currentSlide}
                  totalSlides={currentProductScreenshots.length}
                  onSlideChange={handleSlideChange}
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="xl:col-span-1">
              <div className="space-y-6 sm:space-y-8 xl:sticky xl:top-24 px-4 sm:px-0">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                    {language === 'tr' ? 'Açıklama' : 'Description'}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {product.description}
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                    {language === 'tr' ? 'Temel Özellikler' : 'Key Features'}
                  </h3>
                  <div className="space-y-3">
                    {product.features?.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                    {language === 'tr' ? 'Performans Metrikleri' : 'Performance Metrics'}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(product.metrics || {}).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
                        <span className="text-sm text-muted-foreground capitalize">{key}</span>
                        <span className="font-semibold text-primary text-sm">{value as string}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                    {language === 'tr' ? 'Daha Fazla Bilgi' : 'Learn More'}
                  </h3>
                  <div className="space-y-3">
                    <Button className="w-full btn-primary" onClick={openPartnerForm}>
                      {language === 'tr' ? 'Demo Talep Et' : 'Request Demo'}
                    </Button>
                    <Button variant="outline" className="w-full" onClick={handleTechnicalDocsRequest}>
                      {language === 'tr' ? 'Teknik Dokümanlar' : 'Technical Documentation'}
                    </Button>
                  </div>
                </div>

                <div className="xl:hidden pt-4">
                  <Button variant="ghost" className="w-full" onClick={navigateToHome}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {language === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Dialog - Responsive + auto-scroll thumbnails */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent
          className="
            bg-black border-0 shadow-2xl p-0
            w-[98vw] max-w-[98vw] sm:w-[92vw] sm:max-w-6xl
          "
          onClick={closeLightbox}
        >
          <div
            className="relative w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Kapat */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 sm:top-3 right-2 sm:right-3 z-50 rounded-full bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 text-sm"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Oklar */}
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 hover:bg-white/20 text-white p-3 sm:p-2"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 hover:bg-white/20 text-white p-3 sm:p-2"
              aria-label="Next"
            >
              ›
            </button>

            {/* Büyük görsel */}
            <div
              className="flex items-center justify-center min-h-[55vh] sm:min-h-[70vh] px-2 sm:px-4 py-6 sm:py-8"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <img
                src={getShotSrc(currentProductScreenshots[currentSlide])}
                alt={getShotAlt(currentProductScreenshots[currentSlide], currentSlide)}
                className="max-h-[72vh] sm:max-h-[82vh] max-w-full object-contain rounded-md sm:rounded-lg"
                draggable={false}
              />
            </div>

            {/* Sayaç */}
            <div className="px-3 sm:px-4 pb-2 sm:pb-3 text-center text-white/80 text-xs sm:text-sm">
              {currentSlide + 1} / {currentProductScreenshots.length}
            </div>

            {/* Thumbnails: mobilde yatay scroll, sm ve üstünde grid.
                Aktif slayta otomatik scroll için ref atanır. */}
            <div className="px-2 sm:px-4 pb-3 sm:pb-4">
              <div className="
                flex gap-2 overflow-x-auto no-scrollbar
                sm:grid sm:grid-cols-8 sm:gap-2 sm:overflow-x-visible
              ">
                {currentProductScreenshots.map((shot, idx) => {
                  const src = getShotSrc(shot);
                  const alt = getShotAlt(shot, idx);
                  return (
                    <button
                      ref={(el) => (thumbRefs.current[idx] = el)}
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`
                        flex-shrink-0 rounded-md overflow-hidden border
                        ${idx === currentSlide ? "border-white" : "border-white/20"}
                        focus:outline-none focus:ring-2 focus:ring-white/40
                      `}
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      <img
                        src={src}
                        alt={alt}
                        className="h-14 w-20 sm:h-16 sm:w-full object-cover"
                        draggable={false}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
});
