import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  CheckIcon,
  CloudIcon,
  ShieldCheckIcon,
  CircleStackIcon,
  CpuChipIcon,
  SparklesIcon,
  PhotoIcon,
  EyeSlashIcon,
  ShareIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  BeakerIcon,
  SquaresPlusIcon,
  ChartBarIcon,
  LockClosedIcon,
  ComputerDesktopIcon,
  ArrowPathIcon,
  TruckIcon,
  Square3Stack3DIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
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
  windowWidth: number;
  onContact: () => void;
}

const ParticleBackground = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, radius: 200 };

    class Particle {
      x: number;
      y: number;
      originX: number;
      originY: number;
      color: string;
      size: number;
      baseX: number;
      baseY: number;
      density: number;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originY = y;
        this.baseX = x;
        this.baseY = y;
        this.color = color;
        this.size = 1.8; // Increased for visibility
        this.density = (Math.random() * 50) + 10;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update(time: number) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        // Wave effect
        const wave = Math.sin(time * 0.002 + distance * 0.02) * 2;

        if (distance < mouse.radius) {
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;

          this.x -= directionX + (forceDirectionX * wave);
          this.y -= directionY + (forceDirectionY * wave);
          this.size = 2.5; // Pulse when active
        } else {
          this.size = 1.8;
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 15;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 15;
          }
        }
      }
    }

    const init = () => {
      particles = [];
      const density = 25; // Base spacing
      const colors = [
        'rgba(90, 0, 255, 0.4)',  // Purple
        'rgba(59, 130, 246, 0.4)', // Blue
        'rgba(239, 68, 68, 0.35)'  // Red
      ];

      for (let y = 0; y < canvas.height; y += density) {
        for (let x = 0; x < canvas.width; x += density) {
          // Dynamic density: More likely to spawn points on the left
          // Normalize x (0 to 1)
          const normalizedX = x / canvas.width;
          // Probability decreases as x increases
          const spawnProbability = 1 - (normalizedX * 0.85); // 100% at left, 15% at right

          if (Math.random() < spawnProbability) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            particles.push(new Particle(x, y, color));
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = performance.now();
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update(time);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Only track if mouse is within hero bounds (roughly)
      if (x >= -100 && x <= canvas.width + 100 && y >= -100 && y <= canvas.height + 100) {
        mouse.x = x;
        mouse.y = y;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60 dark:opacity-80"
      style={{ zIndex: 0 }}
    />
  );
};

export const HomePage = React.memo(({
  t,
  navigateToProduct,
  scrollToSection: _scrollToSection,
  expandedFAQ,
  setExpandedFAQ,
  currentSlide,
  setCurrentSlide,
  carouselRef,
  nextSlide,
  prevSlide,
  language,
  openPartnerForm: _openPartnerForm,
  windowWidth,
  onContact
}: HomePageProps) => {
  const slidesPerView = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;
  const maxSlides = Math.max(0, t.platforms.length - slidesPerView);
  const isMobile = windowWidth < 768;


  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float-1 {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) translateX(10px) rotate(-1deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-25px) translateX(-5px) rotate(0.5deg); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-12px) translateX(-12px) rotate(-0.5deg); }
        }
        .animate-float-1 { animation: float-1 7s ease-in-out infinite; will-change: transform; }
        .animate-float-2 { animation: float-2 5s ease-in-out infinite; will-change: transform; }
        .animate-float-3 { animation: float-3 8s ease-in-out infinite; will-change: transform; }
        .animate-float-4 { animation: float-4 6s ease-in-out infinite; will-change: transform; }
      `}} />
      {/* Hero Section: Gelişmiş Premium Tasarım (Wow Factor) */}
      <section className="relative min-h-[70vh] lg:min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white dark:bg-gray-950">
        <ParticleBackground />
        {/* Arka Plan Efektleri */}
        <div className="absolute inset-0 -z-10 bg-grid-mesh opacity-[0.03] dark:opacity-[0.05]"></div>
        <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[#5A00FF]/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4 animate-pulse-soft"></div>
        <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-blue-600/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4 [animation-delay:-2s] animate-pulse-soft"></div>

        <div className="container-custom relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Sol: Metin İçeriği */}
            <div className="flex-1 text-center lg:text-left space-y-8 max-w-3xl">

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-[1.1] animate-fade-in-up">
                {t?.hero?.mainTitle || 'Otomotiv Ekosisteminin'} <br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#5A00FF] via-[#7C3AED] to-blue-600">
                  {t?.hero?.mainTitleGradient || 'Dijital İşletim Sistemi'}
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#5A00FF] to-blue-600 opacity-30 blur-sm"></span>
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-up-delay-1">
                {t?.hero?.mainSubtitle || 'Filo yönetiminden bireysel kiralamaya, araç görselleştirmeden veri güvenliğine kadar tüm çözümlerimizle operasyonlarınızı tek bir merkezden dijitalleştiriyoruz.'}
              </p>

              <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start animate-fade-in-up-delay-2">
                <Button
                  onClick={onContact}
                  className="h-14 px-8 bg-[#5A00FF] hover:bg-[#4a00cc] text-white rounded-2xl font-bold text-base transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/25"
                >
                  {t?.hero?.contactButton || 'Bize Ulaşın'}
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-4 pt-10 opacity-70 animate-fade-in-up-delay-3">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">{t?.hero?.trustIndicators?.endToEnd || 'Uçtan Uca Yönetim'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">{t?.hero?.trustIndicators?.global || 'Global Standartlar'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">{t?.hero?.trustIndicators?.ai || 'Yapay Zekâ Altyapısı'}</span>
                </div>
              </div>
            </div>

            {/* Sağ: Dinamik Görselleştirme (Scattered Badges) - Desktop Only */}
            <div className="hidden lg:flex flex-1 relative w-full h-[600px] animate-fade-in-right">
              <div className="relative w-full h-full">
                {/* 1. Studio Badge */}
                <div className="absolute top-[10%] left-[10%] glass-minimal p-3 rounded-xl shadow-lg animate-float-1 [animation-delay:-1.2s] border-white/40 dark:border-white/10 z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                      <PhotoIcon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#9A17E3] uppercase tracking-tighter">{t?.hero?.productBadges?.studio?.name || 'Studio'}</div>
                      <div className="text-xs font-bold text-blue-600 dark:text-blue-400">{t?.hero?.productBadges?.studio?.desc || 'AI Görselleme'}</div>
                    </div>
                  </div>
                </div>

                {/* 2. Manager Badge */}
                <div className="absolute top-[40%] left-[45%] glass-minimal p-3 rounded-xl shadow-lg animate-float-2 [animation-delay:-3.5s] border-white/40 dark:border-white/10 z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#5A00FF]/10 flex items-center justify-center">
                      <SquaresPlusIcon className="w-5 h-5 text-[#5A00FF]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#9A17E3] uppercase tracking-tighter">{t?.hero?.productBadges?.manager?.name || 'Manager'}</div>
                      <div className="text-xs font-bold text-blue-600 dark:text-blue-400">{t?.hero?.productBadges?.manager?.desc || 'Entegre Yönetim'}</div>
                    </div>
                  </div>
                </div>

                {/* 3. Fixer Badge */}
                <div className="absolute top-[15%] right-[5%] glass-minimal p-3 rounded-xl shadow-lg animate-float-3 [animation-delay:-0.5s] border-white/40 dark:border-white/10 z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <ArrowPathIcon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#9A17E3] uppercase tracking-tighter">{t?.hero?.productBadges?.fixer?.name || 'Fixer'}</div>
                      <div className="text-xs font-bold text-blue-600 dark:text-blue-400">{t?.hero?.productBadges?.fixer?.desc || 'Bakım & Servis'}</div>
                    </div>
                  </div>
                </div>

                {/* 4. Redact Badge */}
                <div className="absolute bottom-[20%] left-[5%] glass-minimal p-3 rounded-xl shadow-lg animate-float-4 [animation-delay:-4.2s] border-white/40 dark:border-white/10 z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <EyeSlashIcon className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#9A17E3] uppercase tracking-tighter">{t?.hero?.productBadges?.redact?.name || 'Redact'}</div>
                      <div className="text-xs font-bold text-blue-600 dark:text-blue-400">{t?.hero?.productBadges?.redact?.desc || 'Veri Güvenliği'}</div>
                    </div>
                  </div>
                </div>

                {/* 5. Pro Badge */}
                <div className="absolute top-[60%] right-[8%] glass-minimal p-3 rounded-xl shadow-lg animate-float-1 [animation-delay:-5.5s] border-white/40 dark:border-white/10 z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <RocketLaunchIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#9A17E3] uppercase tracking-tighter">{t?.hero?.productBadges?.pro?.name || 'Pro'}</div>
                      <div className="text-xs font-bold text-blue-600 dark:text-blue-400">{t?.hero?.productBadges?.pro?.desc || 'İleri Analiz'}</div>
                    </div>
                  </div>
                </div>

                {/* 6. Desk Badge */}
                <div className="absolute bottom-[5%] right-[35%] glass-minimal p-3 rounded-xl shadow-lg animate-float-2 [animation-delay:-2s] border-white/40 dark:border-white/10 z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <ChatBubbleLeftRightIcon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#9A17E3] uppercase tracking-tighter">{t?.hero?.productBadges?.desk?.name || 'Desk'}</div>
                      <div className="text-xs font-bold text-blue-600 dark:text-blue-400">{t?.hero?.productBadges?.desk?.desc || 'Destek & Hub'}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbital Glows */}
              <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-600/10 blur-[60px] rounded-full"></div>
            </div>

            {/* Mobile: Simplified Product Grid */}
            <div className="lg:hidden w-full mt-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { id: 'fixer', icon: ArrowPathIcon, color: 'emerald', name: t?.hero?.productBadges?.fixer?.name || 'Fixer', desc: t?.hero?.productBadges?.fixer?.desc || 'Bakım & Servis' },
                  { id: 'studio', icon: PhotoIcon, color: 'indigo', name: t?.hero?.productBadges?.studio?.name || 'Studio', desc: t?.hero?.productBadges?.studio?.desc || 'AI Görselleme' },
                  { id: 'pro', icon: RocketLaunchIcon, color: 'blue', name: t?.hero?.productBadges?.pro?.name || 'Pro', desc: t?.hero?.productBadges?.pro?.desc || 'İleri Analiz' },
                  { id: 'manager', icon: SquaresPlusIcon, color: 'purple', name: t?.hero?.productBadges?.manager?.name || 'Manager', desc: t?.hero?.productBadges?.manager?.desc || 'Entegre Yönetim' },
                  { id: 'desk', icon: ChatBubbleLeftRightIcon, color: 'amber', name: t?.hero?.productBadges?.desk?.name || 'Desk', desc: t?.hero?.productBadges?.desk?.desc || 'Destek & Hub' },
                  { id: 'redact', icon: EyeSlashIcon, color: 'red', name: t?.hero?.productBadges?.redact?.name || 'Redact', desc: t?.hero?.productBadges?.redact?.desc || 'Veri Güvenliği' }
                ].map((product) => {
                  const IconComponent = product.icon;
                  const colorClasses: { [key: string]: string } = {
                    indigo: 'bg-indigo-500/10 text-indigo-600',
                    purple: 'bg-[#5A00FF]/10 text-[#5A00FF]',
                    emerald: 'bg-emerald-500/10 text-emerald-600',
                    red: 'bg-red-500/10 text-red-600',
                    blue: 'bg-blue-500/10 text-blue-600',
                    amber: 'bg-amber-500/10 text-amber-600'
                  };
                  return (
                    <div
                      key={product.id}
                      className="glass-minimal p-3 rounded-xl shadow-sm border border-white/40 dark:border-white/10"
                    >
                      <div className="flex flex-col items-center gap-2 text-center">
                        <div className={`w-10 h-10 rounded-lg ${colorClasses[product.color]} flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-[#9A17E3] uppercase tracking-tighter">{product.name}</div>
                          <div className="text-[10px] font-medium text-blue-600 dark:text-blue-400 mt-0.5">{product.desc}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Final Feature Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 lg:mt-32 border-t border-gray-100 dark:border-gray-800 pt-12 animate-fade-in-up-delay-3 px-4 sm:px-0">
            {[
              t?.hero?.features?.integration || { label: 'Entegrasyon', icon: '🔗', value: 'Full API Stack' },
              t?.hero?.features?.security || { label: 'Güvenlik', icon: '🛡️', value: 'Enterprise Grade' },
              t?.hero?.features?.analytics || { label: 'Analitik', icon: '📉', value: 'Real-time Data' },
              t?.hero?.features?.infrastructure || { label: 'Altyapı', icon: '☁️', value: 'Cloud Optimized' }
            ].map((s: any, i: number) => (
              <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                <span className="text-xl mb-2">{s.icon || '🔗'}</span>
                <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">{s.label}</span>
                <span className="text-lg font-bold text-yellow-300 dark:text-yellow-400">{s.value || s.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Sektörel Çözümler & Verimlilik Bölümü (Statik & Profesyonel) */}
      <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800">
        <div className="container-custom">
          <div className="max-w-3xl mb-16 px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">{t?.sections?.sectoralSolutions?.title || 'Sektörel Çözümlerle'} <br />{t?.sections?.sectoralSolutions?.titleBreak || 'Tam Entegrasyon'}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {t?.sections?.sectoralSolutions?.description || 'DriveUp, sadece bir yazılım değil; filo sahiplerinden sigorta şirketlerine, kurumsal alım-satım platformlarından bayilere kadar tüm otomotiv ekosistemini birbirine bağlayan merkezi bir işletim sistemidir.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
            {/* Filo Yönetimi */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6">
                <TruckIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t?.sections?.sectoralSolutions?.fleetManagement?.title || 'Filo Yönetimi'}</h3>
              <p className="text-sm text-gray-500 mb-6 font-medium">{t?.sections?.sectoralSolutions?.fleetManagement?.description || 'Operasyonel maliyetlerde %25\'e varan tasarruf ve anlık yakıt/kilometre takibi.'}</p>
              <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-gray-400">{t?.sections?.sectoralSolutions?.fleetManagement?.metric || 'VERİMLİLİK'}</span>
                  <span className="text-sm font-bold text-blue-600">{t?.sections?.sectoralSolutions?.fleetManagement?.value || '%92'}</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>

            {/* Sigorta & Ekspertiz */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheckIcon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t?.sections?.sectoralSolutions?.insurance?.title || 'Sigorta & Hasar'}</h3>
              <p className="text-sm text-gray-500 mb-6 font-medium">{t?.sections?.sectoralSolutions?.insurance?.description || 'Hasar süreçlerinde şeffaf veri ve hızlı onarım yönetimi ile süreç optimizasyonu.'}</p>
              <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-gray-400">{t?.sections?.sectoralSolutions?.insurance?.metric || 'SÜREÇ HIZI'}</span>
                  <span className="text-sm font-bold text-indigo-600">{t?.sections?.sectoralSolutions?.insurance?.value || '%85'}</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>

            {/* Bayi & Galeriler */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-6">
                <ComputerDesktopIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                {t?.sections?.sectoralSolutions?.dealer?.title || (language === 'en' ? 'Dealer & Gallery' : 'Bayi & Galeri')}
              </h3>
              <p className="text-sm text-gray-500 mb-6 font-medium">
                {t?.sections?.sectoralSolutions?.dealer?.description || (language === 'en' ? 'Fast sales cycle by reducing listing preparation time to minutes with Studio and Redact.' : 'Studio ve Redact ile ilan hazırlama süresini dakikalara indirerek hızlı satış döngüsü.')}
              </p>
              <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-gray-400">
                    {t?.sections?.sectoralSolutions?.dealer?.metric || (language === 'en' ? 'LISTING SPEED' : 'İLAN HIZI')}
                  </span>
                  <span className="text-sm font-bold text-purple-600">
                    {t?.sections?.sectoralSolutions?.dealer?.value || 'x5'}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>

            {/* Kurumsal Alım-Satım Platformları */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center mb-6">
                <Square3Stack3DIcon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                {t?.sections?.sectoralSolutions?.corporate?.title || (language === 'en' ? 'Corporate Platform' : 'Kurumsal Platform')}
              </h3>
              <p className="text-sm text-gray-500 mb-6 font-medium">
                {t?.sections?.sectoralSolutions?.corporate?.description || (language === 'en' ? 'Data analytics for large platforms that perform bulk vehicle trading and valuation.' : 'Toplu araç alım-satım ve değerleme yapan dev platformlar için veri analitiği.')}
              </p>
              <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-gray-400">
                    {t?.sections?.sectoralSolutions?.corporate?.metric || (language === 'en' ? 'DATA ANALYSIS' : 'VERİ ANALİZİ')}
                  </span>
                  <span className="text-sm font-bold text-emerald-600">
                    {t?.sections?.sectoralSolutions?.corporate?.value || 'REAL-TIME'}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* What We Do Section */}
      <section id="what-we-do" className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl mb-4 sm:mb-6">
              <SparklesIcon className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 px-2 sm:px-0">
              {t?.sections?.whatWeDo?.title || 'Neler Yapıyoruz?'}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {t?.sections?.whatWeDo?.subtitle || 'Araç kiralama, filo yönetimi ve otomotiv ekosisteminin en kritik operasyonlarını yapay zekâ destekli dijital çözümlerle dönüştürüyoruz.'}
            </p>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              <p>
                {t?.sections?.whatWeDo?.description || 'DriveUp olarak; kurumsal filolar, günlük kiralama firmaları, galeriler ve sigorta paydaşlarının manuel, dağınık ve kontrolü zor iş süreçlerini tek bir entegre platform altında topluyoruz.'}
              </p>
              <p>
                {t?.sections?.whatWeDo?.goal || 'Amacımız; operasyonları sadeleştirmek, veriye dayalı karar almayı mümkün kılmak ve sektöre ölçülebilir bir dijital standart kazandırmaktır.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-0">
            {/* 1. Operasyonları Dijitalleştiriyoruz */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <CpuChipIcon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {t?.sections?.whatWeDo?.digitalize?.title || 'Operasyonları Dijitalleştiriyoruz'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {t?.sections?.whatWeDo?.digitalize?.description || 'Araç envanteri, rezervasyon, bakım & onarım, hasar, sigorta ve müşteri süreçlerini tek merkezden yönetilebilir hale getiriyoruz.'}
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {(t?.sections?.whatWeDo?.digitalize?.items || [
                    "Uçtan uca dijital iş akışları",
                    "Otomasyon ile hızlanan süreçler",
                    "İnsan hatasını minimize etme",
                    "Tek ekran üzerinden tam izlenebilirlik"
                  ]).map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 2. Yapay Zekâ ile Verimlilik */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <SparklesIcon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {t?.sections?.whatWeDo?.aiEfficiency?.title || 'AI ile Verimlilik ve Maliyet Kontrolü'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {t?.sections?.whatWeDo?.aiEfficiency?.description || 'Gelişmiş veri analizi ve makine öğrenmesi algoritmaları ile araçların gerçek performansını ve maliyetlerini görünür kılıyoruz.'}
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {(t?.sections?.whatWeDo?.aiEfficiency?.items || [
                    "Bakım ve hasar maliyeti analizi",
                    "AI destekli araç değerleme",
                    "Veriye dayalı kârlılık kararları",
                    "Yöneticiler için net KPI raporları"
                  ]).map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 3. DriveUp Studio */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <PhotoIcon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {t?.sections?.whatWeDo?.studio?.title || 'DriveUp Studio: Görsel Dönüşüm'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {t?.sections?.whatWeDo?.studio?.description || 'Araç görsellerini ve dijital ilan süreçlerini yapay zekâ ile profesyonel seviyeye taşıyarak satış hızını artırıyoruz.'}
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {(t?.sections?.whatWeDo?.studio?.items || [
                    "AI Showroom & arka plan düzenleme",
                    "Standart ilan formatları",
                    "Müşteriye özel araç değerlendirme",
                    "Dijital araç alım talebi toplama"
                  ]).map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 4. DriveUp Redact */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <EyeSlashIcon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {t?.sections?.whatWeDo?.redact?.title || 'DriveUp Redact: Gizlilik ve Güvenlik'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {t?.sections?.whatWeDo?.redact?.description || 'Araç görselleri üzerinde gizlilik ve içerik doğrulama ihtiyaçlarını karşılayan AI tabanlı bir güvenlik katmanıdır.'}
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {(t?.sections?.whatWeDo?.redact?.items || [
                    "Otomatik plaka ve yüz gizleme",
                    "AI içerik üretimi tespiti",
                    "Deepfake ve manipülasyon analizi",
                    "Hukuki ve operasyonel risk kontrolü"
                  ]).map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 5. Entegre Bir Ekosistem */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <ShareIcon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {t?.sections?.whatWeDo?.ecosystem?.title || 'Entegre Bir Ekosistem Kuruyoruz'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {t?.sections?.whatWeDo?.ecosystem?.description || 'Modüler ama bütünleşik bir altyapı sunarak firmaların büyüyebilen bir ekosistem kullanmasını sağlıyoruz.'}
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {(t?.sections?.whatWeDo?.ecosystem?.items || [
                    "Merkezi yönetim (DriveUp Desk)",
                    "API tabanlı servis entegrasyonu",
                    "Sigorta, banka ve telematik uyumu",
                    "Bütünleşik marketplace modülleri"
                  ]).map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 6. Müşteri Deneyimi */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <UserGroupIcon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {t?.sections?.whatWeDo?.experience?.title || 'Deneyimi Güçlendiriyoruz'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {t?.sections?.whatWeDo?.experience?.description || 'Tüm çözümlerimizi operasyonel sahada çalışan ekipler ve son kullanıcılar düşünülerek tasarlıyoruz.'}
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {(t?.sections?.whatWeDo?.experience?.items || [
                    "Dijital rezervasyon ve ödeme",
                    "Tek ekrandan operasyon yönetimi",
                    "Kullanıcı dostu arayüzler",
                    "Ölçülebilir müşteri memnuniyeti"
                  ]).map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 7. Sektörün Geleceği - Full Width on Large */}
            <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 lg:col-span-3 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 sm:p-8">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4 group-hover:rotate-12 transition-transform">
                    <RocketLaunchIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t?.sections?.whatWeDo?.future?.title || 'Sektörün Geleceğini Şekillendiriyoruz'}</h3>
                  <p className="text-blue-50/80 mb-6 leading-relaxed">
                    {t?.sections?.whatWeDo?.future?.description || 'DriveUp, sadece bugünün ihtiyaçlarını değil, sektörün yarınını da inşa eder. Türkiye\'den başlayarak global ölçekte çözümler geliştiriyoruz.'}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(t?.sections?.whatWeDo?.future?.items || [
                    "Veri odaklı karar alma kültürü",
                    "IoT ve akıllı filo altyapıları",
                    "Yapay zekâ ile sektörel dönüşüm",
                    "Küresel ölçeklenebilir çözümler"
                  ]).map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                      <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Do Section */}
      <section id="how-we-do" className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl mb-4 sm:mb-6">
              <BeakerIcon className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 px-2 sm:px-0">
              {t?.sections?.howWeDo?.title || 'Nasıl Yapıyoruz?'}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {t?.sections?.howWeDo?.subtitle || 'Filo yönetimi ve araç kiralama sektöründeki operasyonel bilgi birikimimizi; güçlü yazılım mimarisi, yapay zekâ teknolojileri ve gerçek saha verileri ile birleştirerek ölçeklenebilir çözümler geliştiriyoruz.'}
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium">
              {t?.sections?.howWeDo?.description || 'Her ürünü; sahadaki gerçek problemleri merkeze alan, ölçülebilir ve sürdürülebilir bir yaklaşımla hayata geçiriyoruz.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-0">
            {/* 1. Saha Deneyimi ile Başlıyoruz */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <UserGroupIcon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {t?.sections?.howWeDo?.fieldExperience?.title || 'Saha Deneyimi ile Başlıyoruz'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {t?.sections?.howWeDo?.fieldExperience?.description || 'Çözümlerimizi masa başında değil, operasyonun içinden doğan ihtiyaçlara göre tasarlıyoruz.'}
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {(t?.sections?.howWeDo?.fieldExperience?.items || [
                    "Kiralama ve sigorta süreç analizi",
                    "Manuel iş yükü tespiti",
                    "Gerçek kullanıcı senaryoları",
                    "Sahada karşılığı olan çözümler"
                  ]).map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckIcon className="w-4 h-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 2. Modüler Yazılım Mimarisi */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <SquaresPlusIcon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {t?.sections?.howWeDo?.modular?.title || 'Modüler Yazılım Mimarisi'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {t?.sections?.howWeDo?.modular?.description || 'Tüm DriveUp ürünleri; modüler, API-first ve büyümeye açık bir mimari ile geliştirilir.'}
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {(t?.sections?.howWeDo?.modular?.items || [
                    "Bağımsız ve entegre modüller",
                    "İhtiyaca göre genişletilebilir yapı",
                    "Bulut tabanlı yüksek performans",
                    "Ölçeklenebilir teknoloji yığını"
                  ]).map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckIcon className="w-4 h-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 3. Yapay Zekâyı Verilerle Besliyoruz */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <ChartBarIcon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {t?.sections?.howWeDo?.aiData?.title || 'Yapay Zekâyı Verilerle Besliyoruz'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {t?.sections?.howWeDo?.aiData?.description || 'Yapay zekâyı teorik değil, gerçek piyasa ve operasyon verileri ile çalıştırıyoruz.'}
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {(t?.sections?.howWeDo?.aiData?.items || [
                    "Piyasa verisiyle eğitilen modeller",
                    "Optimize edilmiş görsel analiz",
                    "Denetlenebilir AI çıktıları",
                    "Karar destekleyici sistemler"
                  ]).map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckIcon className="w-4 h-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 4. Güvenlik ve Gizlilik */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <LockClosedIcon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {t?.sections?.howWeDo?.security?.title || 'Güvenlik ve Gizlilik'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {t?.sections?.howWeDo?.security?.description || 'Fotoğraf, müşteri ve araç verilerinde gizliliği temel prensip olarak ele alıyoruz.'}
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {(t?.sections?.howWeDo?.security?.items || [
                    "Otomatik görsel gizlilik",
                    "Hassas veri koruma katmanları",
                    "Kurumsal veri işleme standartları",
                    "Güvenlik odaklı sistem çekirdeği"
                  ]).map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckIcon className="w-4 h-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 5. Kullanıcı Deneyimi Odaklı */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <ComputerDesktopIcon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {t?.sections?.howWeDo?.ux?.title || 'Kullanıcı Deneyimi Odaklı'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {t?.sections?.howWeDo?.ux?.description || 'Gelişmiş teknolojiyi, sahadaki ekiplerin kolayca kullanabileceği arayüzlerle sunuyoruz.'}
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {(t?.sections?.howWeDo?.ux?.items || [
                    "Sadeleştirilmiş karmaşık süreçler",
                    "Minimum eğitim ihtiyacı",
                    "Hızlanan saha operasyonları",
                    "Kullanıcıyı yormayan teknoloji"
                  ]).map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckIcon className="w-4 h-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 6. Sürekli Geliştirme ve Ölçüm */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <ArrowPathIcon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {t?.sections?.howWeDo?.continuous?.title || 'Sürekli Geliştirme ve Ölçüm'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {t?.sections?.howWeDo?.continuous?.description || 'DriveUp çözümleri statik değil, verilerle yaşayan ve sürekli büyüyen sistemlerdir.'}
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {(t?.sections?.howWeDo?.continuous?.items || [
                    "Düzenli geri bildirim analizi",
                    "Yaşayan ve güncellenen ürünler",
                    "Müşteriyle birlikte gelişim",
                    "Uzun vadeli dijital iş ortaklığı"
                  ]).map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckIcon className="w-4 h-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Overview - Carousel */}
      <section id="products" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
            <h2 className="text-lg sm:text-lg md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 px-2 sm:px-0">{t.sections.platformOverview.title}</h2>
            <p className="text-base sm:text-lg md:text-lg text-gray-600 dark:text-gray-300">
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
                    <ChevronLeftIcon className="h-6 w-6" />
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
                    <ChevronRightIcon className="h-6 w-6" />
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
                            <span className="text-foreground font-semibold">Drive</span><span style={{ color: '#4a00ff' }} className="font-semibold">UP</span>
                            <span className="text-[#9A17E3] font-semibold">
                              {platform.id === 'driveupmanager' ? 'Manager' :
                                platform.id === 'driveupfixer' ? 'Fixer' :
                                  platform.id === 'driveuppro' ? 'Pro' :
                                    platform.id === 'driveupdesk' ? 'Desk' :
                                      platform.id === 'driveupstudio' ? 'Studio' :
                                        platform.id === 'driveupredact' ? 'Redact' :
                                          platform.title.replace('DriveUp', '')}
                            </span>
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
                              <CheckIcon className="h-3 w-3 sm:h-4 sm:w-4 text-accent mt-1 flex-shrink-0" />
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
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-primary w-6' : 'bg-muted-foreground/30'
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
                  <ChevronLeftIcon className="h-4 w-4 mr-1" />
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
                  <ChevronRightIcon className="h-4 w-4 ml-1" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="technology" className="section-padding bg-background-secondary dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-lg sm:text-lg md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 px-2 sm:px-0">{t.sections.technology.title}</h2>
            <p className="text-base sm:text-lg md:text-lg text-gray-600 dark:text-gray-300">
              {t.sections.technology.description}
            </p>
          </div>

          {/* Architecture Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
            {t.sections.technology.features.map((feature: any, index: number) => (
              <div key={index} className="card-minimal text-center p-4 sm:p-6">
                {index === 0 && <CloudIcon className="h-8 w-8 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />}
                {index === 1 && <ShieldCheckIcon className="h-8 w-8 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />}
                {index === 2 && <CircleStackIcon className="h-8 w-8 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />}
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
                <div className="text-lg sm:text-2xl mb-1 sm:mb-2">{tech.icon}</div>
                <div className="font-medium text-xs sm:text-sm">{tech.name}</div>
                <div className="text-xs text-muted-foreground">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Business Partners */}
      <section id="partners" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-lg sm:text-lg md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 px-2 sm:px-0">{t.sections.partners.title}</h2>
            <p className="text-base sm:text-lg md:text-lg mb-6 sm:mb-8 text-gray-600 dark:text-gray-300">
              {t.sections.partners.description}
            </p>
            <h3 className="mb-6 sm:mb-8 text-lg sm:text-lg text-gray-900 dark:text-gray-100">{t.sections.partners.subtitle}</h3>
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
                        <CheckIcon className="h-3 w-3 sm:h-4 sm:w-4 text-accent mt-1 flex-shrink-0" />
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
              className="bg-gradient-to-r from-[#5A00FF] to-[#7C3AED] hover:from-[#4A00E6] hover:to-[#6D28D9] text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-medium rounded-2xl transition-all duration-200 hover:scale-101 hover:shadow-lg border-0 w-full sm:w-auto min-h-[48px]"
              onClick={onContact}
            >
              {language === 'tr' ? 'İş Ortağımız Olun' : 'Partner With Us'}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-background-secondary dark:bg-gray-800">
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
                  <ChevronDownIcon className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform flex-shrink-0 ${expandedFAQ === index ? 'rotate-180' : ''
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

    </>
  );
});
