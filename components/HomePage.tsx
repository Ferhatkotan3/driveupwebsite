import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  ChevronDown, 
  ChevronRight,
  ChevronLeft,
  Check,
  Cloud,
  Shield,
  Database,
  BarChart3,
  Target,
  TrendingUp,
  Award
} from 'lucide-react';
import { Language } from '../types';

interface HomePageProps {
  t: any;
  navigateToProduct: (product: any) => void;
  scrollToSection: (sectionId: string) => void;
  expandedFAQ: number | null;
  setExpandedFAQ: (value: number | null) => void;
  currentSlide: number;
  setCurrentSlide: (value: number) => void;
  carouselRef: React.RefObject<HTMLDivElement>;
  nextSlide: () => void;
  prevSlide: () => void;
  language: Language;
  openPartnerForm: () => void;
  openInvestorForm: () => void;
  windowWidth: number;
}

export const HomePage = React.memo(({ 
  t, 
  navigateToProduct, 
  scrollToSection, 
  expandedFAQ, 
  setExpandedFAQ,
  currentSlide,
  setCurrentSlide,
  carouselRef,
  nextSlide,
  prevSlide,
  language,
  openPartnerForm,
  openInvestorForm,
  windowWidth
}: HomePageProps) => {
  const slidesPerView = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;
  const maxSlides = Math.max(0, t.platforms.length - slidesPerView);
  const isMobile = windowWidth < 768;

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient section-padding pt-[112px] pr-[0px] pb-[50px] pl-[0px]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {t.hero.title}
              <br />
              <span className="text-gradient">{t.hero.titleGradient}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto px-4 sm:px-0">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
              <Button 
                className="btn-primary px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
                onClick={() => scrollToSection('products')}
              >
                {t.hero.explorePlatform}
              </Button>
              <Button 
                className="btn-secondary px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
                onClick={() => scrollToSection('investment')}
              >
                {t.hero.investmentOpportunity}
              </Button>
              <Button 
                className="btn-secondary px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
                onClick={() => scrollToSection('partners')}
              >
                {t.hero.businessPartnership}
              </Button>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16 px-4 sm:px-0">
              {t.businessMetrics.map((metric: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-1 sm:mb-2">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview - Carousel */}
      <section id="products" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 px-4 sm:px-0">
            <h2 className="mb-4 sm:mb-6">{t.sections.platformOverview.title}</h2>
            <p className="text-base sm:text-lg md:text-xl">
              {t.sections.platformOverview.description}
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative px-4 sm:px-0">
            {/* Navigation Buttons - Hidden on mobile */}
            {!isMobile && (
              <>
                <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevSlide}
                    className="h-12 w-12 rounded-full bg-background border border-border shadow-lg hover:shadow-xl transition-all"
                    disabled={currentSlide === 0}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                </div>
                
                <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextSlide}
                    className="h-12 w-12 rounded-full bg-background border border-border shadow-lg hover:shadow-xl transition-all"
                    disabled={currentSlide === maxSlides}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </>
            )}

            {/* Carousel Content */}
            <div className="overflow-hidden">
              <div 
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`
                }}
              >
                {t.platforms.map((platform: any) => (
                  <div 
                    key={platform.id} 
                    className="flex-shrink-0 px-2 sm:px-4"
                    style={{ width: `${100 / slidesPerView}%` }}
                  >
                    <Card 
                      className="card-minimal h-full transition-all duration-300 hover:scale-[1.02] cursor-pointer p-4 sm:p-6 lg:p-8"
                      onClick={() => navigateToProduct(platform)}
                    >
                      <CardHeader className="text-center pb-4 sm:pb-6">
                        <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-muted mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                          <platform.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${platform.color}`} />
                        </div>
                        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <CardTitle className="text-base sm:text-lg">
                            <span className="text-foreground font-semibold">Drive</span><span style={{color: '#4a00ff'}} className="font-semibold">UP</span>{platform.title.replace('DriveUp', '')}
                          </CardTitle>
                          <Badge variant="outline" className="text-xs">{platform.subtitle.split(' ')[0]}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-col h-full">
                        <p className="text-muted-foreground mb-4 sm:mb-6 text-center flex-grow text-xs sm:text-sm leading-relaxed">
                          {platform.description}
                        </p>
                        
                        <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                          {platform.features.slice(0, 4).map((feature: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-2 sm:gap-3">
                              <Check className="h-3 w-3 sm:h-4 sm:w-4 text-accent mt-1 flex-shrink-0" />
                              <span className="text-xs sm:text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-auto space-y-2 sm:space-y-3">
                          {Object.entries(platform.metrics).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center p-2 sm:p-3 bg-background-secondary rounded-lg">
                              <span className="text-xs sm:text-sm text-muted-foreground capitalize">{key}</span>
                              <span className="font-semibold text-primary text-xs sm:text-sm">{value as string}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {Array.from({ length: maxSlides + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            {/* Mobile Navigation Buttons */}
            {isMobile && (
              <div className="flex justify-center gap-4 mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="px-4 py-2"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  {language === 'tr' ? 'Önceki' : 'Previous'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  disabled={currentSlide === maxSlides}
                  className="px-4 py-2"
                >
                  {language === 'tr' ? 'Sonraki' : 'Next'}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="technology" className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="mb-4 sm:mb-6">{t.sections.technology.title}</h2>
            <p className="text-base sm:text-lg md:text-xl">
              {t.sections.technology.description}
            </p>
          </div>

          {/* Architecture Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
            {t.sections.technology.features.map((feature: any, index: number) => (
              <div key={index} className="card-minimal text-center p-4 sm:p-6">
                {index === 0 && <Cloud className="h-8 w-8 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />}
                {index === 1 && <Shield className="h-8 w-8 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />}
                {index === 2 && <Database className="h-8 w-8 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />}
                <h4 className="mb-2 sm:mb-3 text-base sm:text-lg">{feature.title}</h4>
                <p className="text-xs sm:text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 px-4 sm:px-0">
            {t.techStack.map((tech: any, index: number) => (
              <div key={index} className="card-minimal text-center p-3 sm:p-4 hover:scale-105 transition-transform">
                <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{tech.icon}</div>
                <div className="font-medium text-xs sm:text-sm">{tech.name}</div>
                <div className="text-xs text-muted-foreground">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="mb-4 sm:mb-6">{t.sections.roadmap.title}</h2>
            <p className="text-base sm:text-lg md:text-xl">
              {t.sections.roadmap.description}
            </p>
          </div>

          <div className="relative px-4 sm:px-0">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
            
            <div className="space-y-8 sm:space-y-12">
              {t.sections.roadmap.phases.map((phase: any, index: number) => (
                <div key={index} className="relative flex flex-col md:flex-row items-start gap-4 sm:gap-8">
                  {/* Timeline dot */}
                  <div className={`flex md:flex w-12 h-12 sm:w-16 sm:h-16 rounded-full items-center justify-center text-xs sm:text-sm font-semibold relative z-10 ${
                    phase.status === 'in-progress' ? 'bg-primary text-white' :
                    phase.status === 'planned' ? 'bg-accent text-white' :
                    'bg-muted text-muted-foreground'
                  } mx-auto md:mx-0 mb-4 md:mb-0`}>
                    {phase.phase.split(' ')[0]}
                  </div>
                  
                  <div className="flex-1 card-minimal p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3">
                      <h4 className="text-base sm:text-lg">{phase.title}</h4>
                      <Badge variant={phase.status === 'in-progress' ? 'default' : 'secondary'} className="text-xs">
                        {phase.status === 'in-progress' ? (t.nav.platform === 'Platform' ? 'Devam Ediyor' : 'In Progress') : 
                         phase.status === 'planned' ? (t.nav.platform === 'Platform' ? 'Planlandı' : 'Planned') : 
                         (t.nav.platform === 'Platform' ? 'Gelecek' : 'Future')}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">{phase.description}</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {phase.milestones.map((milestone: string, idx: number) => (
                        <span key={idx} className="text-xs bg-muted px-2 sm:px-3 py-1 rounded-full">
                          {milestone}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section id="investment" className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="mb-4 sm:mb-6">{t.sections.investment.title}</h2>
            <p className="text-base sm:text-lg md:text-xl">
              {t.sections.investment.description}
            </p>
          </div>

          {/* Investment Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
            {t.sections.investment.highlights.map((highlight: any, index: number) => (
              <div key={index} className="card-elevated p-4 sm:p-6">
                {index === 0 && <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />}
                {index === 1 && <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />}
                {index === 2 && <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />}
                {index === 3 && <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />}
                <h4 className="mb-2 sm:mb-3 text-base sm:text-lg">{highlight.title}</h4>
                <p className="text-muted-foreground text-sm sm:text-base">{highlight.description}</p>
              </div>
            ))}
          </div>

          {/* Business Model */}
          <div className="card-elevated p-4 sm:p-6 mx-4 sm:mx-0">
            <h3 className="mb-4 sm:mb-6 text-center text-lg sm:text-xl">{t.sections.investment.businessModel.title}</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {t.businessMetrics.map((metric: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mb-1 sm:mb-2">{metric.value}</div>
                  <div className="font-medium mb-1 text-sm sm:text-base">{metric.label}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Partners */}
      <section id="partners" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="mb-4 sm:mb-6">{t.sections.partners.title}</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
              {t.sections.partners.description}
            </p>
            <h3 className="mb-6 sm:mb-8 text-lg sm:text-xl">{t.sections.partners.subtitle}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
            {t.sections.partners.categories.map((category: any, index: number) => (
              <Card key={index} className="card-minimal hover:scale-[1.02] transition-all duration-300 h-full p-4 sm:p-6">
                <CardHeader className="pb-4 sm:pb-6">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-muted`}>
                      <category.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-base sm:text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold text-primary mb-2 sm:mb-3 text-sm sm:text-base">
                      {t.nav.platform === 'Platform' ? 'Ortaklık Avantajları:' : 'Partnership Benefits:'}
                    </h5>
                    {category.benefits.map((benefit: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2 sm:gap-3">
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
            <Button 
              className="btn-primary px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
              onClick={() => scrollToSection('contact')}
            >
              {t.nav.platform === 'Platform' ? 'İş Ortağı Başvurusu' : 'Apply for Partnership'}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="mb-4 sm:mb-6">{t.sections.faq.title}</h2>
          </div>

          <div className="space-y-3 sm:space-y-4 px-4 sm:px-0">
            {t.sections.faq.questions.map((faq: any, index: number) => (
              <div key={index} className="card-minimal p-4 sm:p-6">
                <button
                  className="w-full text-left flex items-center justify-between"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <h4 className="pr-4 text-sm sm:text-base">{faq.question}</h4>
                  <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform flex-shrink-0 ${
                    expandedFAQ === index ? 'rotate-180' : ''
                  }`} />
                </button>
                {expandedFAQ === index && (
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border">
                    <p className="text-muted-foreground text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center px-4 sm:px-0">
            <h2 className="mb-4 sm:mb-6">{t.sections.contact.title}</h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12">
              {t.sections.contact.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
              <Button 
                className="btn-primary px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
                onClick={openPartnerForm}
              >
                {language === 'tr' ? 'İş Ortağımız Olun' : 'Partner With Us'}
              </Button>
              <Button 
                className="btn-secondary px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
                onClick={openInvestorForm}
              >
                {language === 'tr' ? 'Yatırımcı Olun' : 'Become an Investor'}
              </Button>
            </div>

            {/* Updated layout for 2 sections instead of 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-center max-w-2xl mx-auto">
              <div>
                <h4 className="mb-2 text-base sm:text-lg">{t.sections.contact.sections.partners.title}</h4>
                <p className="text-muted-foreground text-sm sm:text-base">{t.sections.contact.sections.partners.description}</p>
              </div>
              <div>
                <h4 className="mb-2 text-base sm:text-lg">{t.sections.contact.sections.investors.title}</h4>
                <p className="text-muted-foreground text-sm sm:text-base">{t.sections.contact.sections.investors.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <article className="prose prose-lg mx-auto px-4 sm:px-0">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                {language === 'tr' 
                  ? 'DriveUp: Türkiye\'de Araç Kiralama ve Filo Yönetiminin Geleceği'
                  : 'DriveUp: The Future of Car Rental and Fleet Management in Turkey'
                }
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                {language === 'tr'
                  ? 'DriveUp, bireysel kullanıcılar ve kurumsal filolar için araç kiralama, filo yönetimi, bakım-onarım ve yedek parça çözümlerini tek platformda sunuyor. Türkiye araç kiralama sektöründe operasyonlarınızı dijitalleştirin ve verimliliğinizi artırın.'
                  : 'DriveUp offers car rental, fleet management, maintenance-repair, and spare parts solutions for individual users and corporate fleets on a single platform. Digitalize your operations and increase your efficiency in Turkey\'s car rental sector.'
                }
              </p>
            </div>

            <div className="space-y-8 sm:space-y-12 text-left">
              {/* Introduction */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl">
                  {language === 'tr' ? 'Giriş' : 'Introduction'}
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <p>
                    {language === 'tr'
                      ? 'Türkiye\'de araç kiralama sektörü hızla büyüyor. Büyük şehirlerde ve turistik bölgelerde günlük araç kiralama talebi artarken, kurumsal filolar da operasyonlarını optimize etmek ve maliyetlerini düşürmek için dijital çözümler arıyor.'
                      : 'The car rental sector in Turkey is growing rapidly. While demand for daily car rentals is increasing in major cities and tourist areas, corporate fleets are also seeking digital solutions to optimize their operations and reduce costs.'
                    }
                  </p>
                  <p>
                    {language === 'tr'
                      ? 'DriveUp, bireysel kullanıcılardan büyük filo sahiplerine kadar tüm segmentlere hitap eden entegre bir araç kiralama ekosistemidir. Marketplace\'ten operasyon yönetimine, bakım ve yedek parça süreçlerinden filo takibine kadar sektörün tüm ihtiyaçlarını tek bir çatı altında topluyor.'
                      : 'DriveUp is an integrated car rental ecosystem that serves all segments from individual users to large fleet owners. It brings together all the needs of the sector under one roof, from marketplace to operations management, from maintenance and spare parts processes to fleet tracking.'
                    }
                  </p>
                </div>
              </div>

              {/* DriveUpGo */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl">
                  {language === 'tr' 
                    ? 'DriveUpGo ile Bireysel Araç Kiralama Kolaylığı'
                    : 'Individual Car Rental Convenience with DriveUpGo'
                  }
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <p>
                    {language === 'tr'
                      ? 'DriveUpGo, bireysel kullanıcıların birden fazla araç kiralama firmasının fiyatlarını karşılaştırarak kendileri için en uygun aracı bulmalarını sağlayan pazar yeri uygulamasıdır.'
                      : 'DriveUpGo is a marketplace application that allows individual users to compare prices from multiple car rental companies and find the most suitable vehicle for themselves.'
                    }
                  </p>
                  <ul className="space-y-1 sm:space-y-2 ml-4 sm:ml-6">
                    <li>• {language === 'tr' ? 'Çoklu kiralama şirketi fiyat karşılaştırması' : 'Multi-rental company price comparison'}</li>
                    <li>• {language === 'tr' ? 'Gerçek zamanlı müsaitlik kontrolü' : 'Real-time availability checking'}</li>
                    <li>• {language === 'tr' ? 'Gelişmiş filtreleme ve arama özellikleri' : 'Advanced filtering and search features'}</li>
                    <li>• {language === 'tr' ? 'Güvenli ödeme sistemi entegrasyonu' : 'Secure payment system integration'}</li>
                  </ul>
                  <p>
                    {language === 'tr'
                      ? 'Bu sayede kullanıcılar İstanbul araç kiralama, Antalya kiralık araç gibi şehir bazlı aramalarla en uygun seçeneğe kolayca ulaşabilir.'
                      : 'This way, users can easily reach the most suitable option with city-based searches such as Istanbul car rental or Antalya rental car.'
                    }
                  </p>
                </div>
              </div>

              {/* DriveUpManager */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl">
                  {language === 'tr' 
                    ? 'DriveUpManager ile Operasyonel Verimlilik'
                    : 'Operational Efficiency with DriveUpManager'
                  }
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <p>
                    {language === 'tr'
                      ? 'Kısa dönem ve günlük araç kiralama operasyonları yürüten işletmeler için DriveUpManager, araç envanteri, rezervasyon ve sözleşme yönetimini tek bir platformda toplar.'
                      : 'For businesses conducting short-term and daily car rental operations, DriveUpManager brings together vehicle inventory, reservation, and contract management on a single platform.'
                    }
                  </p>
                  <ul className="space-y-1 sm:space-y-2 ml-4 sm:ml-6">
                    <li>• {language === 'tr' ? 'Araç müsaitlik takvimi' : 'Vehicle availability calendar'}</li>
                    <li>• {language === 'tr' ? 'Finansal raporlama ve analitik' : 'Financial reporting and analytics'}</li>
                    <li>• {language === 'tr' ? 'CRM ile müşteri ilişkileri yönetimi' : 'Customer relationship management with CRM'}</li>
                  </ul>
                  <p>
                    {language === 'tr'
                      ? 'Kurumsal firmalar, operasyon süreçlerini dijitalleştirerek verimliliği artırabilir, süreç otomasyonuyla zaman tasarrufu sağlar.'
                      : 'Corporate companies can increase efficiency by digitalizing their operational processes and save time through process automation.'
                    }
                  </p>
                </div>
              </div>

              {/* DriveUpFixer */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl">
                  {language === 'tr'
                    ? 'DriveUpFixer ile Bakım ve Onarım Yönetimi'
                    : 'Maintenance and Repair Management with DriveUpFixer'
                  }
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <p>
                    {language === 'tr'
                      ? 'Filo sahibi şirketler ve araç kiralama firmaları, bakım-onarım süreçlerinde zaman ve maliyet kaybı yaşayabilir. DriveUpFixer, bu süreci dijitalleştirir:'
                      : 'Fleet-owning companies and car rental firms can experience time and cost losses in maintenance-repair processes. DriveUpFixer digitalizes this process:'
                    }
                  </p>
                  <ul className="space-y-1 sm:space-y-2 ml-4 sm:ml-6">
                    <li>• {language === 'tr' ? 'Periyodik bakım takvimi' : 'Periodic maintenance calendar'}</li>
                    <li>• {language === 'tr' ? 'Hasar kaydı ve takibi' : 'Damage recording and tracking'}</li>
                    <li>• {language === 'tr' ? 'Servis sağlayıcı ağı yönetimi' : 'Service provider network management'}</li>
                    <li>• {language === 'tr' ? 'Maliyet analizi ve raporlama' : 'Cost analysis and reporting'}</li>
                  </ul>
                  <p>
                    {language === 'tr'
                      ? 'Bu modül, yedek parça tedarik süreçlerini de entegre ederek, Türkiye\'deki araç bakım pazarında hızlı ve güvenilir hizmet sunar.'
                      : 'This module also integrates spare parts supply processes, providing fast and reliable service in Turkey\'s vehicle maintenance market.'
                    }
                  </p>
                </div>
              </div>

              {/* DriveUpPro */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl">
                  {language === 'tr'
                    ? 'DriveUpPro ile Özmal Filo Yönetimi'
                    : 'Own Fleet Management with DriveUpPro'
                  }
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <p>
                    {language === 'tr'
                      ? 'Özmal araç sahibi şirketler için DriveUpPro, araç takibi ve personel kullanımını yönetir:'
                      : 'For companies with their own vehicles, DriveUpPro manages vehicle tracking and personnel usage:'
                    }
                  </p>
                  <ul className="space-y-1 sm:space-y-2 ml-4 sm:ml-6">
                    <li>• {language === 'tr' ? 'Filo araç envanteri yönetimi' : 'Fleet vehicle inventory management'}</li>
                    <li>• {language === 'tr' ? 'Personel zimmet sistemi' : 'Personnel custody system'}</li>
                    <li>• {language === 'tr' ? 'GPS takip ve güzergah analizi' : 'GPS tracking and route analysis'}</li>
                    <li>• {language === 'tr' ? 'Yakıt tüketimi izleme' : 'Fuel consumption monitoring'}</li>
                  </ul>
                  <p>
                    {language === 'tr'
                      ? 'Bu sayede filo sahipleri operasyonel verimliliği artırabilir, maliyetleri optimize edebilir ve araçlarını gerçek zamanlı takip edebilir.'
                      : 'This way, fleet owners can increase operational efficiency, optimize costs, and track their vehicles in real-time.'
                    }
                  </p>
                </div>
              </div>

              {/* DriveUpDesk */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl">
                  {language === 'tr'
                    ? 'DriveUpDesk ile Merkezi Destek'
                    : 'Centralized Support with DriveUpDesk'
                  }
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <p>
                    {language === 'tr'
                      ? 'Tüm DriveUp ürünleri ile entegre çalışan DriveUpDesk, müşteri taleplerini ve destek süreçlerini yönetir:'
                      : 'DriveUpDesk, which works integrated with all DriveUp products, manages customer requests and support processes:'
                    }
                  </p>
                  <ul className="space-y-1 sm:space-y-2 ml-4 sm:ml-6">
                    <li>• {language === 'tr' ? 'Omnichannel müşteri desteği' : 'Omnichannel customer support'}</li>
                    <li>• {language === 'tr' ? 'Ticket yönetim sistemi' : 'Ticket management system'}</li>
                    <li>• {language === 'tr' ? 'Tüm ürünlerle entegrasyon' : 'Integration with all products'}</li>
                    <li>• {language === 'tr' ? 'Performans dashboard\'ı' : 'Performance dashboard'}</li>
                  </ul>
                  <p>
                    {language === 'tr'
                      ? 'İşletmeler, müşteri memnuniyetini artırırken çözüm sürelerini kısaltabilir.'
                      : 'Businesses can increase customer satisfaction while shortening solution times.'
                    }
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl">
                  {language === 'tr'
                    ? 'DriveUp ile Araç Kiralama Sektöründe Dijital Dönüşüm'
                    : 'Digital Transformation in the Car Rental Sector with DriveUp'
                  }
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <p>
                    {language === 'tr'
                      ? 'DriveUp, Türkiye araç kiralama sektöründe operasyonel verimlilik, maliyet tasarrufu ve kullanıcı memnuniyeti sağlamak için tasarlanmış bir ekosistemdir.'
                      : 'DriveUp is an ecosystem designed to provide operational efficiency, cost savings, and user satisfaction in Turkey\'s car rental sector.'
                    }
                  </p>
                  <p>
                    {language === 'tr'
                      ? 'Bireysel kullanıcılar için hızlı ve güvenli araç kiralama, kurumsal filolar için entegre yönetim, bakım ve yedek parça yönetimi sağlayan platform, sektörün geleceğini şekillendiriyor.'
                      : 'The platform, which provides fast and secure car rental for individual users, integrated management for corporate fleets, maintenance and spare parts management, is shaping the future of the sector.'
                    }
                  </p>
                  <div className="p-4 sm:p-6 bg-primary/5 border border-primary/10 rounded-lg mt-6 sm:mt-8">
                    <p className="text-foreground font-medium text-sm sm:text-base">
                      {language === 'tr'
                        ? '📌 Siz de DriveUp ekosistemine katılarak filo yönetiminizi dijitalleştirebilir ve operasyonlarınızı bir üst seviyeye taşıyabilirsiniz.'
                        : '📌 You can also join the DriveUp ecosystem to digitalize your fleet management and take your operations to the next level.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
});