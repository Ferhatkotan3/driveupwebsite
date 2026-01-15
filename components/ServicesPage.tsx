import React, { useState, useEffect } from 'react';
import { 
  TruckIcon, 
  MapPinIcon, 
  WrenchScrewdriverIcon, 
  ClockIcon, 
  PhoneIcon 
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'filo-yonetimi',
        'ozmal-arac',
        'arac-takip',
        'bakim-onarim',
        'gunluk-kiralama',
        'kiralama-ozel',
        'cagri-merkezi'
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        {/* Subtle Background Animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#5A00FF]/10 to-[#8B5CF6]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#3B82F6]/8 to-[#60A5FA]/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Hizmetler
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up-delay-1">
              Araç kiralama ve filo yönetimi için sunduğumuz yazılım çözümleri
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Anchors */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 py-4">
            {[
              { id: 'filo-yonetimi', label: 'Filo Yönetimi', icon: TruckIcon },
              { id: 'ozmal-arac', label: 'Özmal Araç', icon: TruckIcon },
              { id: 'arac-takip', label: 'Araç Takip', icon: MapPinIcon },
              { id: 'bakim-onarim', label: 'Bakım & Onarım', icon: WrenchScrewdriverIcon },
              { id: 'gunluk-kiralama', label: 'Günlük Kiralama', icon: ClockIcon },
              { id: 'kiralama-ozel', label: 'Kiralama Şirketlerine Özel', icon: TruckIcon },
              { id: 'cagri-merkezi', label: 'Çağrı Merkezi', icon: PhoneIcon }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === id
                    ? 'bg-[#5A00FF] text-white shadow-lg'
                    : 'text-gray-600 hover:text-[#5A00FF] hover:bg-gray-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Filo Yönetimi */}
        <section id="filo-yonetimi" className="mb-20 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#5A00FF] to-[#8B5CF6] rounded-2xl mb-6">
                <TruckIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Filo Yönetimi
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Şirketinizin tüm araçlarının operasyonel süreçlerini tek platformda yönetin
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Filo Yönetim Yazılımı Nedir?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Filo yönetim yazılımı, bir şirketin sahip olduğu veya kiraladığı tüm araçların operasyonel süreçlerini tek platformda toplar. Araç envanteri, bakım, hasar, yakıt, sigorta ve kiralama gibi süreçlerin dijital olarak yönetilmesini sağlar. Böylece manuel takip ortadan kalkar, karar alma süreçleri hızlanır.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Operasyonel Faydalar
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Operasyon ekibinin iş yükünü azaltır, hataları en aza indirir, süreçleri standartlaştırır. Günlük işler otomatikleştiği için zaman tasarrufu sağlar, müşteri memnuniyetini artırır.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Verimlilik Artışı
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Araç kullanım oranlarını optimize eder, gereksiz maliyetleri düşürür, yakıt ve bakım giderlerini kontrol altında tutar. Filo genelinde şeffaflık ve ölçülebilirlik sağlar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Özmal Araç Yönetimi */}
        <section id="ozmal-arac" className="mb-20 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-2xl mb-6">
                <TruckIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Özmal Araç Yönetimi
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Şirketinizin özkaynaklı araçlarının tüm süreçlerini dijitalleştirin
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Özmal Araç Takibi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Şirketin özkaynaklı araçlarının km, sigorta, vergi ve kullanım geçmişi tek ekrandan izlenir.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Bakım & Onarım Yönetimi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Düzenli bakım planlaması, servis kayıtları, arıza geçmişi dijitalleşir.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Sigorta & Hasar Süreçleri
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Poliçe yenileme, hasar kaydı, eksper ve tazminat süreçleri kolaylaşır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Araç Takip Sistemleri */}
        <section id="arac-takip" className="mb-20 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-2xl mb-6">
                <MapPinIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Araç Takip Sistemleri
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Araçlarınızı gerçek zamanlı olarak takip edin ve analiz edin
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  GPS / IoT Entegrasyonu
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Araçlardan canlı veri akışı sağlanır.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Canlı Konum Takibi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Harita üzerinden anlık araç hareketleri izlenir.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Raporlama & Analitik
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Kullanım raporları, sürüş davranışları ve maliyet analizleri çıkarılır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bakım ve Onarım Çözümleri */}
        <section id="bakim-onarim" className="mb-20 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] rounded-2xl mb-6">
                <WrenchScrewdriverIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Bakım ve Onarım Çözümleri
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Araçlarınızın bakım süreçlerini otomatikleştirin ve optimize edin
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Bakım Paketleri
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Kilometre ve yıllık bakımlar otomatik planlanır.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Servis Entegrasyonu
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yetkili ve özel servislerle entegre iş akışları kurulur.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Yedek Parça Yönetimi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Orijinal parça takibi ve maliyet kontrolü yapılır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Günlük Araç Kiralama Operasyonları */}
        <section id="gunluk-kiralama" className="mb-20 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#EC4899] to-[#F472B6] rounded-2xl mb-6">
                <ClockIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Günlük Araç Kiralama Operasyonları
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Kiralama süreçlerinizi dijitalleştirin ve müşteri deneyimini geliştirin
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Sözleşme Yönetimi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dijital kiralama sözleşmeleri hazırlanır ve saklanır.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Rezervasyon & Teslim Alma
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Rezervasyon süreci ve araç teslim-tesellüm takip edilir.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Faturalama & Ödeme
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Kiralama ücreti, indirim ve ek hizmetler otomatik faturalandırılır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kiralama Şirketlerine Özel Uygulamalar */}
        <section id="kiralama-ozel" className="mb-20 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] rounded-2xl mb-6">
                <TruckIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Kiralama Şirketlerine Özel Uygulamalar
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Kiralama sektörüne özel geliştirilmiş yazılım çözümleri
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Kiralama Yönetim Sistemi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Kiralama şirketlerinin operasyonel süreçlerini dijitalleştiren entegre yönetim sistemi.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Müşteri Portali
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Müşterilerin rezervasyon yapabileceği, araç durumunu takip edebileceği online platform.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Fiyatlandırma Motoru
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dinamik fiyatlandırma algoritmaları ile rekabetçi kiralama fiyatları oluşturma.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Çağrı Merkezi Uygulamaları */}
        <section id="cagri-merkezi" className="mb-20 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#06B6D4] to-[#22D3EE] rounded-2xl mb-6">
                <PhoneIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Çağrı Merkezi Uygulamaları
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Müşteri hizmetlerinizi dijital platformlarla güçlendirin
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Müşteri Çağrı Yönetimi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Gelen çağrılar tek ekrandan yönetilir, müşteri talepleri kayıt altına alınır.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Talep ve Şikayet Takibi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Açılan talepler ve şikayetler ilgili departmanlara otomatik yönlendirilir.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Operasyon Entegrasyonu
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Çağrı merkezi süreçleri filo yönetim sistemiyle entegre çalışır.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;