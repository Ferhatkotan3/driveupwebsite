import React, { useEffect } from 'react';

interface AboutPageProps {
  t: any;
  onContactClick: () => void;
  language?: 'tr' | 'en';
}

export const AboutPage: React.FC<AboutPageProps> = ({ 
  t, 
  onContactClick: _onContactClick,
  language = 'tr'
}) => {
  useEffect(() => {
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
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-[70px]">
        {/* Hero with Large Logo */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div
              className="text-center mb-16 animate-fadeInUp"
            >
              {/* LOGO */}
              <div style={{ fontSize: '80px', fontWeight: 'bold', letterSpacing: '-0.02em', lineHeight: 1 }} className="mb-4">
                <span style={{ color: '#000000' }}>Drive</span>
                <span style={{ color: '#0003bd' }}>UP</span>
                <span style={{ color: '#0003bd', fontSize: '28px', verticalAlign: 'super', marginLeft: '4px' }}>®</span>
              </div>

              <div className="w-24 h-1 bg-gradient-to-r from-[#0003bd] to-[#9A17E3] mx-auto rounded-full mb-10"></div>

              <h2 className="text-2xl font-semibold text-black mb-8">{t?.about?.title || (language === 'en' ? 'About Us' : 'Hakkımızda')}</h2>
            </div>

            {/* Content */}
            <div
              className="animate-fadeInUp"
              style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
            >
              <div className="text-gray-700 text-[15px] leading-8 space-y-6 text-left max-w-4xl mx-auto">
                {t?.about?.content ? (
                  <>
                    <p>{t.about.content.p1}</p>
                    <p>{t.about.content.p2}</p>
                    <p dangerouslySetInnerHTML={{ __html: t.about.content.p3.replace(/DriveUp Manager/g, '<strong class="text-black">DriveUp Manager</strong>').replace(/DriveUp Pro/g, '<strong class="text-black">DriveUp Pro</strong>').replace(/DriveUp Fixer/g, '<strong class="text-black">DriveUp Fixer</strong>') }} />
                    <p dangerouslySetInnerHTML={{ __html: t.about.content.p4.replace(/DriveUp Studio/g, '<strong class="text-black">DriveUp Studio</strong>').replace(/DriveUp Redact/g, '<strong class="text-black">DriveUp Redact</strong>').replace(/DriveUp Desk/g, '<strong class="text-black">DriveUp Desk</strong>') }} />
                    <p dangerouslySetInnerHTML={{ __html: t.about.content.p5.replace(/Değerlendirme Linki/g, '<strong class="text-black">Değerlendirme Linki</strong>').replace(/Evaluation Link/g, '<strong class="text-black">Evaluation Link</strong>') }} />
                    <p>{t.about.content.p6}</p>
                  </>
                ) : (
                  <>
                    {language === 'en' ? (
                      <>
                        <p>DriveUp, established in Estonia in 2024, is an end-to-end automotive technology platform built on European Union software and data security standards, based on real field experience in the Turkish automotive market. Our goal is to unite scattered and manually executed operations in the automotive sector under a single digital backbone, enabling companies to work more efficiently, transparently, and scalably.</p>
                        <p>The automotive ecosystem hosts many interconnected operational processes simultaneously, such as vehicle rental, fleet management, maintenance-repair, sales, visualization, data security, and customer management. DriveUp offers these processes under an integrated, modular, and interoperable structure instead of disconnected software.</p>
                        <p>The DriveUp ecosystem consists of products shaped according to different business models and needs. <strong className="text-black">DriveUp Manager</strong> enables short-term and daily car rental companies to manage operations, reservations, and contract processes through a centralized system. <strong className="text-black">DriveUp Pro</strong> offers fleet tracking, asset management, and staff usage analytics for corporate companies with owned vehicles. <strong className="text-black">DriveUp Fixer</strong> digitizes maintenance, damage, repair, and service provider processes end-to-end, providing operational control and cost transparency.</p>
                        <p><strong className="text-black">DriveUp Studio</strong>, positioned at the visual and data security layer, transforms vehicle photos into professional showroom quality with AI-powered tools; while <strong className="text-black">DriveUp Redact</strong> provides KVKK and GDPR-compliant visual data security with license plate hiding, face blurring, and content verification solutions. <strong className="text-black">DriveUp Desk</strong> provides support center, call management, and customer request tracking infrastructure that works integrated with all DriveUp products.</p>
                        <p>The DriveUp platform enables objective and data-driven calculation of vehicles' real market values through AI-powered vehicle evaluation and pricing systems. Thanks to solutions like <strong className="text-black">Evaluation Link</strong>, galleries and vehicle purchase companies can interact directly with their customers; they can accelerate purchase and sales operations by automating evaluation processes.</p>
                        <p>All DriveUp products are developed with an API-first, cloud-based, and scalable architecture. This approach makes DriveUp not just software that meets today's needs; it becomes a continuously evolving digital platform that can adapt to the future of the automotive sector.</p>
                      </>
                    ) : (
                      <>
                        <p>DriveUp, 2024 yılında Estonya'da kurulmuş, Avrupa Birliği yazılım ve veri güvenliği standartlarını temel alan; Türkiye otomotiv pazarının gerçek saha deneyimi üzerine inşa edilmiş uçtan uca bir otomotiv teknoloji platformudur. Amacımız, otomotiv sektöründe dağınık ve manuel yürütülen operasyonları tek bir dijital omurga altında birleştirerek, firmaların daha verimli, şeffaf ve ölçeklenebilir şekilde çalışmasını sağlamaktır.</p>
                        <p>Otomotiv ekosistemi; araç kiralama, filo yönetimi, bakım-onarım, satış, görselleştirme, veri güvenliği ve müşteri yönetimi gibi birbirine bağlı birçok operasyonel süreci aynı anda barındırır. DriveUp, bu süreçleri birbirinden kopuk yazılımlar yerine entegre, modüler ve birlikte çalışabilir bir yapı altında sunar.</p>
                        <p>DriveUp ekosistemi; farklı iş modellerine ve ihtiyaçlara göre şekillenen ürünlerden oluşur. <strong className="text-black">DriveUp Manager</strong>, kısa ve günlük araç kiralama firmalarının operasyon, rezervasyon ve sözleşme süreçlerini merkezi bir sistem üzerinden yönetmesini sağlar. <strong className="text-black">DriveUp Pro</strong>, özmal araç sahibi kurumsal şirketler için filo takibi, zimmet yönetimi ve personel kullanım analizlerini sunar. <strong className="text-black">DriveUp Fixer</strong>, bakım, hasar, onarım ve servis sağlayıcı süreçlerini uçtan uca dijitalleştirerek operasyonel kontrol ve maliyet şeffaflığı sağlar.</p>
                        <p>Görsel ve veri güvenliği katmanında konumlanan <strong className="text-black">DriveUp Studio</strong>, araç fotoğraflarını yapay zekâ destekli araçlarla profesyonel showroom kalitesine dönüştürürken; <strong className="text-black">DriveUp Redact</strong>, plaka gizleme, yüz bulanıklaştırma ve içerik doğrulama çözümleriyle KVKK ve GDPR uyumlu görsel veri güvenliği sağlar. <strong className="text-black">DriveUp Desk</strong> ise tüm DriveUp ürünleriyle entegre çalışan destek merkezi, çağrı yönetimi ve müşteri talep takibi altyapısını sunar.</p>
                        <p>DriveUp platformu, yapay zekâ destekli araç değerlendirme ve fiyatlama sistemleriyle, araçların gerçek piyasa değerlerinin objektif ve veriye dayalı şekilde hesaplanmasını mümkün kılar. <strong className="text-black">Değerlendirme Linki</strong> gibi çözümler sayesinde galeriler ve araç alım şirketleri, müşterileriyle doğrudan etkileşime geçebilir; değerlendirme süreçlerini otomatikleştirerek alım ve satış operasyonlarını hızlandırabilir.</p>
                        <p>Tüm DriveUp ürünleri API-first, bulut tabanlı ve ölçeklenebilir bir mimariyle geliştirilmiştir. Bu yaklaşım, DriveUp'ı yalnızca bugünün ihtiyaçlarına cevap veren bir yazılım değil; otomotiv sektörünün geleceğine uyum sağlayabilen, sürekli gelişen bir dijital platform haline getirir.</p>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Hizmet Detayları */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-black mb-8 text-center">{t?.about?.servicesTitle || (language === 'en' ? 'Service Details' : 'Hizmet Detayları')}</h2>

            <div className="bg-white rounded-[20px] border border-black/5 shadow-sm overflow-hidden">
              {((t?.about?.services && t.about.services.length > 0) ? t.about.services : (language === 'en' ? [
                { name: 'Fleet Management', desc: 'Enables you to manage the entire lifecycle of corporate vehicle fleets from a single center. Vehicle inventory, usage status, mileage, fuel, and cost data are tracked in real-time.', kimler: 'Corporate fleets, companies using operational vehicles', kazanim: 'Transparency, cost control, data-driven decision making' },
                { name: 'Owned Vehicle Management', desc: 'Enables regular management of assigning company-owned vehicles to personnel, usage tracking, and maintenance processes.', kimler: 'Companies with owned vehicle fleets', kazanim: 'Asset control, responsibility clarity, operational discipline' },
                { name: 'Vehicle Tracking Systems', desc: 'Vehicle location, speed, and route information are tracked in real-time through GPS integration.', kimler: 'Companies using vehicles in active field operations', kazanim: 'Operational control, route optimization, security' },
                { name: 'Maintenance and Repair Solutions', desc: 'Digitally plans and tracks vehicles\' periodic maintenance, damage, and repair processes.', kimler: 'Rental companies, fleet owners', kazanim: 'Cost reduction, maintenance continuity, service coordination' },
                { name: 'Daily Vehicle Rental', desc: 'Brings together reservation, availability, and contract processes under a centralized structure for short-term and daily vehicle rental operations.', kimler: 'Daily and short-term rental companies', kazanim: 'Operation speed, customer satisfaction, revenue optimization' },
                { name: 'Solutions for Rental Companies', desc: 'Provides operation, billing, and customer management infrastructure specially developed for fleet rental companies.', kimler: 'Corporate fleet rental companies', kazanim: 'Operational flexibility, financial control, scalability' },
                { name: 'Call Center and Support Applications', desc: 'Provides an integrated support infrastructure that enables management of all customer requests from a single center.', kimler: 'Companies managing multi-channel customer communication', kazanim: 'Service quality, measurable support performance' },
                { name: 'Vehicle Visualization', desc: 'Transforms vehicle photos into professional showroom quality with AI-powered visual processing technologies.', kimler: 'Galleries, dealers, fleet companies', kazanim: 'Faster listing publication, higher conversion' },
                { name: 'Image Security and Privacy', desc: 'Applies KVKK and GDPR-compliant privacy processes such as license plate and face hiding on vehicle images.', kimler: 'Galleries, insurance and corporate companies', kazanim: 'Reduction of legal risks, data security' },
                { name: 'Vehicle Evaluation', desc: 'Calculates the current and objective market value of vehicles using AI algorithms and market data.', kimler: 'Galleries, vehicle purchase companies, fleets', kazanim: 'Accurate pricing, fast decision making' }
              ] : [
                { name: 'Filo Yönetimi', desc: 'Kurumsal araç filolarının tüm yaşam döngüsünü tek merkezden yönetmenizi sağlar. Araç envanteri, kullanım durumu, kilometre, yakıt ve maliyet verileri gerçek zamanlı olarak izlenir.', kimler: 'Kurumsal filolar, operasyonel araç kullanan şirketler', kazanim: 'Şeffaflık, maliyet kontrolü, veriye dayalı karar alma' },
                { name: 'Özmal Araç Yönetimi', desc: 'Şirket bünyesinde sahip olunan araçların personele zimmetlenmesi, kullanım takibi ve bakım süreçlerinin düzenli şekilde yönetilmesini sağlar.', kimler: 'Özmal araç filosu olan şirketler', kazanim: 'Zimmet kontrolü, sorumluluk netliği, operasyonel disiplin' },
                { name: 'Araç Takip Sistemleri', desc: 'GPS entegrasyonu ile araçların konum, hız ve rota bilgileri gerçek zamanlı olarak takip edilir.', kimler: 'Aktif sahada araç kullanan firmalar', kazanim: 'Operasyonel kontrol, rota optimizasyonu, güvenlik' },
                { name: 'Bakım ve Onarım Çözümleri', desc: 'Araçların periyodik bakım, hasar ve onarım süreçlerini dijital olarak planlar ve takip eder.', kimler: 'Kiralama firmaları, filo sahipleri', kazanim: 'Maliyet düşüşü, bakım sürekliliği, servis koordinasyonu' },
                { name: 'Günlük Araç Kiralama', desc: 'Kısa süreli ve günlük araç kiralama operasyonları için rezervasyon, müsaitlik ve sözleşme süreçlerini merkezi bir yapı altında toplar.', kimler: 'Günlük ve kısa dönem kiralama firmaları', kazanim: 'Operasyon hızı, müşteri memnuniyeti, gelir optimizasyonu' },
                { name: 'Kiralama Şirketlerine Özel Çözümler', desc: 'Filo kiralama firmalarına özel olarak geliştirilmiş operasyon, faturalama ve müşteri yönetimi altyapısı sunar.', kimler: 'Kurumsal filo kiralama şirketleri', kazanim: 'Operasyonel esneklik, finansal kontrol, ölçeklenebilirlik' },
                { name: 'Çağrı Merkezi ve Destek Uygulamaları', desc: 'Tüm müşteri taleplerinin tek merkezden yönetilmesini sağlayan entegre bir destek altyapısı sunar.', kimler: 'Çok kanallı müşteri iletişimi yöneten firmalar', kazanim: 'Hizmet kalitesi, ölçülebilir destek performansı' },
                { name: 'Araç Görselleştirme', desc: 'Yapay zekâ destekli görsel işleme teknolojileri ile araç fotoğraflarını profesyonel showroom kalitesine dönüştürür.', kimler: 'Galeriler, bayiler, filo şirketleri', kazanim: 'Daha hızlı ilan yayını, daha yüksek dönüşüm' },
                { name: 'Görüntü Güvenliği ve Gizlilik', desc: 'Araç görselleri üzerinde plaka ve yüz gizleme gibi KVKK ve GDPR uyumlu gizlilik işlemleri uygular.', kimler: 'Galeriler, sigorta ve kurumsal firmalar', kazanim: 'Hukuki risklerin azaltılması, veri güvenliği' },
                { name: 'Araç Değerlendirme', desc: 'Yapay zekâ algoritmaları ve piyasa verileri kullanılarak araçların güncel ve objektif piyasa değerini hesaplar.', kimler: 'Galeriler, araç alım şirketleri, filolar', kazanim: 'Doğru fiyatlama, hızlı karar alma' }
              ])).map((item: any, idx: number) => (
                <details key={idx} className="group border-b border-black/5 last:border-0">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none hover:bg-[#FAFAFA] transition-colors">
                    <span className="text-black font-semibold text-[16px]">{item.name}</span>
                    <span className="text-[#0003bd] text-[14px] font-medium group-open:hidden">+</span>
                    <span className="text-gray-400 text-[14px] font-medium hidden group-open:inline">−</span>
                  </summary>
                  <div className="px-6 pb-6 bg-[#FAFAFA]">
                    <p className="text-gray-700 text-[15px] leading-relaxed mb-4">{item.desc}</p>
                    <div className="text-[13px] space-y-2">
                      <div><span className="text-gray-400 font-medium">{t?.about?.labels?.kimler || (language === 'en' ? 'For: ' : 'Kimler için: ')}</span><span className="text-gray-600">{item.kimler}</span></div>
                      <div><span className="text-gray-400 font-medium">{t?.about?.labels?.kazanim || (language === 'en' ? 'Benefit: ' : 'Kazanım: ')}</span><span className="text-[#0003bd] font-semibold">{item.kazanim}</span></div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
