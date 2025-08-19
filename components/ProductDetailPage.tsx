import React, { useState, useEffect, useCallback } from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Check, ArrowLeft } from 'lucide-react';
import { ProductNavigation } from './ProductNavigation';
import { ScreenshotDisplay, ScreenshotNavigation } from './ScreenshotComponents';
import { Language, ScreenshotData } from '../types';
import { toast } from "sonner";

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

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev >= screenshots.length - 1 ? 0 : prev + 1));
  }, [screenshots.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev <= 0 ? screenshots.length - 1 : prev - 1));
  }, [screenshots.length]);

  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Reset slide when product changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [product.id]);

  // Handle technical documentation request
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
    <div className="min-h-screen bg-background">
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
      <section className="section-padding pt-6 sm:pt-8 md:pt-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
            {/* Screenshots - Full width on mobile/tablet, 2/3 on desktop */}
            <div className="xl:col-span-2">
              <div className="space-y-6 sm:space-y-8">
                {/* Product Title and Counter */}
                <div className="flex items-center justify-between px-4 sm:px-0">
                  <div className="flex items-center gap-3">
                    <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-muted`}>
                      <product.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${product.color}`} />
                    </div>
                    <div>
                      <h1 className="text-xl sm:text-2xl font-bold">
                        <span className="text-foreground font-bold">Drive</span><span style={{color: '#4a00ff'}} className="font-bold">UP</span>{product.title.replace('DriveUp', '')}
                      </h1>
                      <p className="text-muted-foreground text-sm">{product.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentSlide + 1} / {screenshots.length}
                  </div>
                </div>

                {/* Screenshot Display */}
                <ScreenshotDisplay
                  currentSlide={currentSlide}
                  screenshots={screenshots}
                  onPrevious={prevSlide}
                  onNext={nextSlide}
                />

                <ScreenshotNavigation
                  currentSlide={currentSlide}
                  totalSlides={screenshots.length}
                  onSlideChange={handleSlideChange}
                />
              </div>
            </div>

            {/* Product Info - Full width on mobile/tablet, 1/3 on desktop */}
            <div className="xl:col-span-1">
              <div className="space-y-6 sm:space-y-8 xl:sticky xl:top-24 px-4 sm:px-0">
                {/* Product Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                    {language === 'tr' ? 'Açıklama' : 'Description'}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {product.description}
                  </p>
                </div>

                <Separator />

                {/* Product Features */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                    {language === 'tr' ? 'Temel Özellikler' : 'Key Features'}
                  </h3>
                  <div className="space-y-3">
                    {product.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Performance Metrics */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                    {language === 'tr' ? 'Performans Metrikleri' : 'Performance Metrics'}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(product.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-3 bg-background-secondary rounded-lg">
                        <span className="text-sm text-muted-foreground capitalize">{key}</span>
                        <span className="font-semibold text-primary text-sm">{value as string}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* CTA Section */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                    {language === 'tr' ? 'Daha Fazla Bilgi' : 'Learn More'}
                  </h3>
                  <div className="space-y-3">
                    <Button 
                      className="w-full btn-primary"
                      onClick={openPartnerForm}
                    >
                      {language === 'tr' ? 'Demo Talep Et' : 'Request Demo'}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleTechnicalDocsRequest}
                    >
                      {language === 'tr' ? 'Teknik Dokümanlar' : 'Technical Documentation'}
                    </Button>
                  </div>
                </div>

                {/* Mobile Back to Home Button */}
                <div className="xl:hidden pt-4">
                  <Button 
                    variant="ghost"
                    className="w-full"
                    onClick={navigateToHome}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {language === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});