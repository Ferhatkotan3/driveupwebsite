import { ContentType } from '../types';
import { 
  ShoppingCart, 
  Settings, 
  Wrench, 
  Car, 
  Headphones,
  Cog,
  Zap,
  Users,
  Shield,
  Globe
} from 'lucide-react';

export const content: ContentType = {
  tr: {
    nav: {
      platform: 'Platform',
      products: 'Ürünler',
      technology: 'Teknoloji',
      roadmap: 'Yol Haritası',
      investment: 'Yatırım',
      partners: 'İş Ortağı',
      getStarted: 'Başlayın'
    },
    hero: {
      title: 'Araç Kiralama Ekosisteminin',
      titleGradient: 'Geleceği',
      subtitle: 'Bireysel kullanıcılardan kurumsal filolara, marketplace\'ten operasyon yönetimine kadar araç kiralama sektörünün tüm ihtiyaçlarını karşılayan entegre platform ailesi.',
      explorePlatform: 'Platformu Keşfedin',
      investmentOpportunity: 'Yatırım Fırsatı',
      businessPartnership: 'İş Ortağı'
    },
    businessMetrics: [
      { label: 'Toplam Adreslenebilir Pazar', value: '₺19.6B', description: 'Kısa + uzun dönem toplam ciro' },
      { label: 'Aktif Büyüklük', value: '₺478B', description: 'Sektör toplam aktif değeri' },
      { label: 'Hedef Pazar Payı', value: '%8', description: '3 yıl içinde komisyon bazlı' },
      { label: 'Gelir Projeksiyonu', value: '₺420M', description: '3. yıl toplam gelir hedefi' }
    ],
    platforms: [
      {
        id: 'driveupgo',
        title: 'DriveUpGo',
        subtitle: 'B2C Marketplace uygulaması',
        description: 'Bireysel kullanıcıların birden çok araç kiralama firmasının fiyatlarını karşılaştırarak kendileri için en uygun aracı bulabilecekleri pazar yeri uygulaması.',
        features: [
          'Çoklu kiralama şirketi fiyat karşılaştırması',
          'Gerçek zamanlı müsaitlik kontrolü',
          'Filtreleme ve arama özellikleri',
          'Güvenli ödeme sistemi entegrasyonu',
          'Kullanıcı değerlendirme sistemi',
          'Mobil ve web uygulaması'
        ],
        metrics: {
          partners: '50+ Ortak',
          bookings: '10K+ Rezervasyon',
          rating: '4.8/5 Puan'
        },
        icon: ShoppingCart,
        color: 'text-blue-600'
      },
      {
        id: 'driveupmanager',
        title: 'DriveUpManager',
        subtitle: 'B2B Operasyon yönetim platformu',
        description: 'Günlük ve kısa dönem araç kiralama operasyonları yürüten şirketler için ofis yönetimi, araç durumu, müsaitlik takvimi ve sözleşme yönetimi platformu.',
        features: [
          'Araç envanteri ve müsaitlik yönetimi',
          'Rezervasyon ve sözleşme sistemi',
          'Finansal raporlama ve analitik',
          'Müşteri ilişkileri yönetimi (CRM)',
          'Otomatik faturalandırma',
          'Çok şubeli operasyon desteği'
        ],
        metrics: {
          efficiency: '%40 Verimlilik',
          automation: '%80 Otomasyon',
          revenue: '%25 Gelir Artışı'
        },
        icon: Settings,
        color: 'text-purple-600'
      },
      {
        id: 'driveupfixer',
        title: 'DriveUpFixer',
        subtitle: 'B2B Bakım ve onarım marketplace\'i',
        description: 'Kısa ve uzun dönem araç kiralama firmaları ile filo sahibi şirketlerin hasar, bakım, onarım ve arıza süreçlerini verimli şekilde yönetmeleri için platform.',
        features: [
          'Periyodik bakım takvimleri',
          'Hasar kaydı ve takibi',
          'Servis sağlayıcı ağı yönetimi',
          'Maliyet analizi ve raporlama',
          'Araç geçmiş kayıtları',
          'Mobil hasar bildirimi'
        ],
        metrics: {
          downtime: '%30 Azalma',
          cost: '%20 Tasarruf',
          response: '2 Saat Yanıt'
        },
        icon: Wrench,
        color: 'text-orange-600'
      },
      {
        id: 'driveuppro',
        title: 'DriveUpPro',
        subtitle: 'B2B Kurumsal filo yönetimi',
        description: 'Özmal araç sahibi olan ve bu araçları personellerine zimmetleyen şirketler için araç takibi, yönetimi ve personel kullanımının organize edilmesi platformu.',
        features: [
          'Filo araç envanteri yönetimi',
          'Personel zimmet sistemi',
          'GPS takip ve güzergah analizi',
          'Yakıt tüketimi izleme',
          'Kullanım raporları',
          'Politika ve kural yönetimi'
        ],
        metrics: {
          tracking: '%100 İzleme',
          compliance: '%95 Uyum',
          savings: '%25 Maliyet Azalma'
        },
        icon: Car,
        color: 'text-green-600'
      },
      {
        id: 'driveupdesk',
        title: 'DriveUpDesk',
        subtitle: 'B2B Merkezi çağrı merkezi',
        description: 'Tüm DriveUp ürünleriyle entegre çalışabilen, müşteri taleplerini ve destek süreçlerini yönetmek için merkezi çağrı merkezi uygulaması.',
        features: [
          'Omnichannel müşteri desteği',
          'Ticket yönetim sistemi',
          'Tüm ürünlerle entegrasyon',
          'Performans dashboard\'ı',
          'Otomatik çağrı dağıtımı',
          'Müşteri memnuniyet ölçümü'
        ],
        metrics: {
          resolution: '%90 Çözüm',
          satisfaction: '4.7/5 Memnuniyet',
          response: '30sn Yanıt'
        },
        icon: Headphones,
        color: 'text-indigo-600'
      }
    ],
    sections: {
      platformOverview: {
        title: 'Ürün Ailesi',
        description: 'Araç kiralama sektörünün her segmentine özel geliştirilmiş entegre çözümlerimiz, marketplace\'ten operasyon yönetimine kadar tüm ihtiyaçları karşılıyor.'
      },
      technology: {
        title: 'Teknoloji Altyapısı',
        description: 'Kurumsal ölçekte güvenilirlik, güvenlik ve performans sağlayan modern, ölçeklenebilir mimari üzerine inşa edilmiştir.',
        features: [
          {
            title: 'Bulut-Natif',
            description: 'AWS üzerinde otomatik ölçeklendirme, yük dengeleme ve küresel CDN dağıtımı ile mikroservis mimarisi.'
          },
          {
            title: 'Kurumsal Güvenlik',
            description: 'SOC 2 Type II uyumluluğu, uçtan uca şifreleme ve gelişmiş tehdit koruması.'
          },
          {
            title: 'Gerçek Zamanlı Veri',
            description: 'Gerçek zamanlı analitik, ML hattları ve akıllı otomasyon ile olay odaklı mimari.'
          }
        ]
      },
      roadmap: {
        title: 'Ürün Yol Haritası',
        description: 'Pazar genişletme, teknoloji gelişimi ve sürdürülebilir büyümeye odaklanan stratejik geliştirme aşamaları.',
        phases: [
          {
            phase: '2Ç 2025',
            title: 'Platform Lansmanı',
            description: 'DriveUpGo marketplace ve DriveUpManager operasyon platformunun beta lansmanı.',
            status: 'in-progress',
            milestones: ['MVP dağıtımı', '10 ortak entegrasyonu', 'iOS/Android uygulamaları lansmanı']
          },
          {
            phase: '4Ç 2025',
            title: 'Ürün Genişletmesi',
            description: 'DriveUpFixer ve DriveUpPro lansmanı, ekosistem entegrasyonu.',
            status: 'planned',
            milestones: ['Bakım marketplace', 'Filo yönetimi', 'Servis ağı partnerlikleri']
          },
          {
            phase: '2Ç 2026',
            title: 'Tam Entegrasyon',
            description: 'DriveUpDesk ve tüm ürünlerin tam entegrasyonu, pazar genişletmesi.',
            status: 'planned',
            milestones: ['Call center lansmanı', 'API marketplace', 'Uluslararası genişleme']
          },
          {
            phase: '4Ç 2026',
            title: 'Platform Evrimi',
            description: 'Yapay zeka, IoT entegrasyonu ve yeni nesil mobilite hizmetleri.',
            status: 'future',
            milestones: ['AI optimizasyon', 'IoT sensörler', 'Sürdürülebilirlik']
          }
        ]
      },
      investment: {
        title: 'Yatırım Fırsatı',
        description: 'Teknoloji inovasyonu ve stratejik ortaklıklar aracılığıyla ₺19.6B Türk araç kiralama pazarını dönüştürmede bize katılın.',
        highlights: [
          {
            title: 'Kanıtlanmış Pazar Büyüklüğü',
            description: '₺478B aktif büyüklük, 400K araç ve 798K kontrat ile güçlü sektör temelleri'
          },
          {
            title: 'Çoklu Gelir Akışları',
            description: '5 farklı gelir modeli: komisyon, abonelik, seat lisansı ile çeşitlendirilmiş portföy'
          },
          {
            title: 'Yüksek Marjin Potansiyeli',
            description: 'Düşük operasyonel maliyet, yüksek ölçeklenebilirlik ve tekrarlayan gelir modeli'
          },
          {
            title: 'Deneyimli Ekip',
            description: 'Fintech, mobilite ve kurumsal yazılımda kanıtlanmış başarı geçmişi'
          }
        ],
        businessModel: {
          title: 'İş Modeli ve Finansal Projeksiyonlar'
        }
      },
      partners: {
        title: 'İş Ortaklıkları',
        description: 'Platformumuz, otomotiv ve mobilite sektöründe değer yaratacak güçlü bir ekosistem kuruyor. Yedek parça tedarikçilerinden filo yönetim firmalarına, kısa dönem kiralama operatörlerinden servis ağlarına kadar uzanan geniş bir iş birliği modeli tasarlıyoruz.',
        subtitle: 'Hedeflediğimiz İş Ortağı Kategorileri',
        categories: [
          {
            title: 'Otomotiv Parça ve Ekipman Tedarikçileri',
            description: 'Bakım ve onarım süreçlerinde ihtiyaç duyulan yedek parça, ekipman ve teknolojik çözümleri sağlayan firmalar.',
            icon: Cog,
            color: 'text-blue-600',
            benefits: ['Türkiye genelinde geniş pazar erişimi', 'Dijital sipariş ve takip altyapısı', 'Yeni müşteri ve servis ağına doğrudan erişim']
          },
          {
            title: 'Mobilite ve Kısa Dönem Kiralama Operatörleri',
            description: 'Araç paylaşımı, kısa dönem kiralama ve yenilikçi mobilite çözümleri sunan işletmeler.',
            icon: Zap,
            color: 'text-purple-600',
            benefits: ['Marketplace entegrasyonu ile görünürlük artışı', 'Filo doluluk oranını artırma fırsatı', 'Operasyonel süreçlerin dijital platform üzerinden yönetimi']
          },
          {
            title: 'Filo Yönetimi ve Aracılık Hizmetleri (Filo Brokerleri)',
            description: 'Filo operasyonlarını optimize eden, kiralama ve satın alma süreçlerinde aracılık yapan profesyonel şirketler.',
            icon: Users,
            color: 'text-green-600',
            benefits: ['B2B iş ağına doğrudan erişim', 'Gelişmiş raporlama ve analitik araçlar', 'Müşteri ilişkilerini tek platformdan yönetme kolaylığı']
          },
          {
            title: 'Özmal Filo Yönetim Firmaları',
            description: 'Kendi araç filosunu veya müşteri filolarını uçtan uca yöneten işletmeler.',
            icon: Shield,
            color: 'text-orange-600',
            benefits: ['DriveUpPro ve filo takip sistemleri ile entegre çalışma', 'Araç yönetiminde operasyonel verimlilik', 'Maliyet optimizasyonu ve süreç iyileştirme']
          },
          {
            title: 'Hasar, Onarım ve Bakım Çözümleri',
            description: 'Araçların bakım, onarım ve hasar süreçlerini profesyonel şekilde yürüten teknik merkezler.',
            icon: Wrench,
            color: 'text-red-600',
            benefits: ['Dijital iş akışı otomasyonu', 'Servis talebi ve müşteri havuzuna erişim', 'Bölgesel ve ulusal düzeyde görünürlük artışı']
          },
          {
            title: 'Servis Ağı Operatörleri ve Zincirleri',
            description: 'Türkiye genelinde geniş erişime sahip, kaliteli hizmet anlayışıyla faaliyet gösteren servis işletmeleri.',
            icon: Globe,
            color: 'text-indigo-600',
            benefits: ['Ağın büyümesi ve yeni lokasyonlara erişim', 'Kalite standartlarının güçlendirilmesi', 'Dijital dönüşüm ve süreç entegrasyonu desteği']
          }
        ]
      },
      faq: {
        title: 'Sıkça Sorulan Sorular',
        questions: [
          {
            question: 'Gelir modeliniz nasıl çalışıyor ve sürdürülebilir mi?',
            answer: 'DriveUp ekosistemi, her ürün için farklı ama birbiriyle uyumlu gelir modelleri kullanmayı planlıyor.\n\nDriveUpGo: Kısa dönem araç kiralama platformu olarak işletmelerin araçlarını son kullanıcılara sunmalarını sağlamayı ve her rezervasyondan komisyon modeli ile gelir elde etmeyi hedefliyoruz.\n\nDriveUpManager & DriveUpPro: Filo yönetim çözümlerimizi aylık veya yıllık abonelik modeliyle lisanslamayı planlıyoruz.\n\nDriveUpFixer: Araç bakım ve onarım süreçlerinde servis sağlayıcılarla iş birliği yaparak hem hizmet hem de yedek parça tedarikinden gelir sağlamayı hedefliyoruz.\n\nDriveUpDesk: Operasyon ve çağrı merkezi yönetimi için kullanıcı başına lisans modeli uygulamayı planlıyoruz.\n\nAmacımız, çoklu gelir akışları ile farklı müşteri segmentlerinden düzenli gelir sağlamak ve pazar dalgalanmalarına karşı dayanıklı bir yapı kurmak.'
          },
          {
            question: 'DriveUpFixer\'ın bakım pazarındaki potansiyeli nedir?',
            answer: 'DriveUpFixer ile filo şirketleri ve kurumsal araç sahiplerinin bakım, onarım ve yedek parça süreçlerini dijital ortamda yönetebilecekleri bir yapı kurmayı hedefliyoruz. Servis sağlayıcılar, parçacılar ve filo yöneticilerini tek bir platformda buluşturarak süreçleri hızlandırmayı, maliyetleri optimize etmeyi ve operasyonel verimlilik sağlamayı planlıyoruz.\nBakım-onarım pazarının yıl boyu tekrarlayan talep yapısı sayesinde istikrarlı ve ölçeklenebilir bir gelir potansiyeli oluşturmayı amaçlıyoruz.'
          },
          {
            question: 'TAM (Toplam Adreslenebilir Pazar) hesaplamanız gerçekçi mi?',
            answer: 'Pazar tahminlerimizi, TOKKDER, SOBİDER ve sektör araştırma raporları gibi güvenilir kaynaklardan alınan güncel verilere dayandırmayı hedefliyoruz. Filo büyüklükleri, kiralama adetleri ve bakım-onarım harcamaları gibi metrikleri resmi istatistikler ve sektörün saha verileriyle doğrulamayı planlıyoruz. Böylece yatırımcılar ve iş ortakları için abartısız, gerçekçi bir pazar değerlendirmesi sunmayı amaçlıyoruz.'
          },
          {
            question: 'Hangi büyüklükteki şirketler için uygun ve penetrasyon stratejiniz nedir?',
            answer: 'DriveUp çözümlerimizi, tek araç sahibi işletmelerden binlerce araçlık filolara kadar tüm segmentlere uyumlu şekilde konumlandırmayı hedefliyoruz.\nPenetrasyon planımız:\n\nBüyük filo operatörleri ile pilot projeler başlatarak referans kazanmak.\n\nKOBİ ve orta ölçekli filolara açılarak yayılımı artırmak.\n\nBireysel araç sahipleri ve küçük işletmelere ulaşarak pazarın tamamını kapsamak.'
          },
          {
            question: 'Rekabet avantajlarınız ve pazar pozisyonunuz nedir?',
            answer: 'Entegre ekosistem olma hedefi: Araç kiralama, filo yönetimi, bakım-onarım ve operasyon yönetimini tek çatı altında sunmayı planlıyoruz.\n\nTam sektör kapsama hedefi: Beş farklı ürün ile pazarın tüm ihtiyaç noktalarına hizmet vermeyi amaçlıyoruz.\n\nÇoklu gelir akışları: Tek bir gelir modeline bağlı kalmadan farklı segmentlerden düzenli gelir elde etmeyi hedefliyoruz.\n\nTeknoloji altyapısı: Bulut tabanlı, entegre ve ölçeklenebilir bir platform geliştirmeyi planlıyoruz.\n\nDeneyimli ekip hedefi: Filo yönetimi, yazılım geliştirme ve operasyon alanında uzman kişilerden oluşan bir ekibi bir araya getirmeyi amaçlıyoruz.\n\nBu planlarla pazara erken giren oyuncu ("first-mover") avantajını yakalamayı hedefliyoruz.'
          },
          {
            question: 'Müşteri elde tutma ve büyüme stratejiniz nedir?',
            answer: 'Müşteri memnuniyetini ve uzun vadeli iş birliklerini önceliklendiren bir strateji planlıyoruz.\n\nEkosistem bağı: Ürünlerimizin birbirine entegre çalışması sayesinde müşterilerin tüm operasyonlarını tek platformda yönetmelerini sağlamayı hedefliyoruz.\n\nSürekli geliştirme: Müşteri geri bildirimlerine dayalı olarak düzenli güncellemeler ve yeni özellikler eklemeyi planlıyoruz.\n\nDestek hizmetleri: Proaktif müşteri desteği, eğitim programları ve hızlı çözüm merkezleri oluşturmayı amaçlıyoruz.\n\nVeri odaklı optimizasyon: Kullanıcı davranışlarını analiz ederek operasyonel verimliliği artıracak çözümler geliştirmeyi hedefliyoruz.\n\nUzun vadeli sözleşmeler: Kurumsal müşterilerle çok yıllı anlaşmalar yaparak gelir istikrarı sağlamayı planlıyoruz.'
          }
        ]
      },
      contact: {
        title: 'Araç Kiralama Geleceğini Şekillendirmeye Hazır mısınız?',
        description: 'İster tek ürün çözümü arayan bir işletme olun, ister tam ekosistem entegrasyonu isteyen büyük bir şirket olun, size özel çözümler geliştiriyoruz.',
        partners: 'İş Ortağımız Olun',
        investment: 'Yatırımcı Olun',
        sections: {
          partners: {
            title: 'İşletmeler İçin',
            description: 'Operasyonlarınızı dijitalleştirin, verimliliğinizi artırın'
          },
          investors: {
            title: 'Yatırımcılar İçin',
            description: 'Büyüme fırsatımız ve finansal projeksiyonlarımız hakkında bilgi edinin'
          }
        }
      },
      footer: {
        tagline: 'Teknoloji ile araç kiralama sektörünü dönüştürüyoruz',
        copyright: '© 2025 DriveUP Teknolojileri. Tüm hakları saklıdır.'
      },
      seo: {
        title: 'DriveUp ile Filo Yönetimi, Araç Kiralama ve Bakımda Yeni Dönem',
        metaDescription: 'DriveUp, filo araç kiralama, araç pazar yeri, bakım-onarım ve yedek parça yönetimini tek ekosistemde birleştiriyor. İşletmenize özel çözümleri keşfedin.',
        sections: [
          {
            title: 'Giriş',
            content: 'Türkiye\'de filo yönetimi ve araç kiralama sektörü hızla dijitalleşiyor. İşletmeler, operasyonel maliyetlerini düşürmek, araç kullanım verimliliğini artırmak ve bakım süreçlerini kolaylaştırmak için entegre çözümler arıyor.\n\nİşte tam bu noktada DriveUp, filo kiralama, araç satışı, bakım-onarım ve yedek parça tedarikini tek platformda sunarak sektöre yeni bir standart getiriyor.'
          },
          {
            title: 'Filo Araç Kiralamada Akıllı Çözümler',
            content: 'Filo kiralama sürecinizi dijitalleştirerek tekliften teslimata kadar tüm adımları tek panelden yönetebilirsiniz.\n\nKısa dönem, uzun dönem ve günlük araç kiralama seçeneklerini tek ekosistemde sunuyoruz.\n\nYerel SEO uyumlu bir yapı sayesinde "İstanbul araç kiralama" veya "Ankara filo kiralama" gibi aramalarla müşterilere kolayca ulaşabilirsiniz.'
          },
          {
            title: 'Araç Pazar Yeri ile Satış ve Satın Alma Kolaylığı',
            content: 'DriveUp\'un araç pazar yeri modülü, filo yenileme veya büyütme süreçlerinde hem alıcılar hem satıcılar için avantaj sağlar:\n\n• Filo araç satışı ve filo araç alımı için güvenilir bir platform\n• Bölgesel filtreler ile şehir bazlı satış ilanları (örnek: "İzmir filo araç satışı")\n• Şeffaf fiyatlandırma ve ihale sistemi'
          },
          {
            title: 'Bakım-Onarım ve Servis Yönetimi',
            content: 'Bakım ve onarım süreçleri, filo işletmelerinde ciddi zaman ve maliyet kayıplarına yol açabilir. DriveUpFixer ile:\n\n• Tüm bakım taleplerinizi dijital ortamda yönetebilirsiniz.\n• Yetkili servis ağı ile uygun fiyat ve hızlı hizmet alırsınız.\n• Otomobil yedek parça ve araba yedek parça tedariki doğrudan sistem üzerinden yapılır.'
          },
          {
            title: 'Yedek Parça Tedarikinde Güven ve Hız',
            content: '• Orijinal ve onaylı yedek parça tedarik zinciri\n• Fiyat karşılaştırma modülü\n• Şehir bazlı arama (örneğin "İstanbul yedek parça") ile hızlı erişim'
          },
          {
            title: 'Neden DriveUp?',
            content: '• İlk entegre ekosistem olma avantajı\n• Çoklu gelir modelleriyle sürdürülebilir iş yapısı\n• Filo yönetiminden yedek parçaya kadar tüm süreçlerin tek panelden kontrolü\n• Hem büyük filo sahipleri hem de KOBİ\'ler için esnek kullanım'
          },
          {
            title: 'Sonuç',
            content: 'Filo yönetimi, araç kiralama, satış, bakım ve yedek parça süreçlerini tek çatı altında toplamak, zamandan ve maliyetten tasarruf sağlamak anlamına geliyor.\n\nDriveUp, sektördeki dijital dönüşümün öncüsü olarak işletmenize hız, güven ve verimlilik kazandırıyor.\n\nSiz de DriveUp ekosistemine katılın, operasyonlarınızı bir üst seviyeye taşıyın.'
          }
        ]
      }
    },
    techStack: [
      { name: 'React Native', category: 'Mobil', icon: '📱' },
      { name: 'Node.js', category: 'Backend', icon: '⚡' },
      { name: 'TypeScript', category: 'Dil', icon: '🔷' },
      { name: 'PostgreSQL', category: 'Veritabanı', icon: '🗄️' },
      { name: 'Redis', category: 'Önbellek', icon: '⚡' },
      { name: 'AWS', category: 'Bulut', icon: '☁️' },
      { name: 'Docker', category: 'DevOps', icon: '🐳' },
      { name: 'GraphQL', category: 'API', icon: '🔗' },
      { name: 'Kubernetes', category: 'Orkestrasyon', icon: '🎯' },
      { name: 'Stripe', category: 'Ödemeler', icon: '💳' }
    ]
  },
  en: {
    nav: {
      platform: 'Platform',
      products: 'Products',
      technology: 'Technology',
      roadmap: 'Roadmap',
      investment: 'Investment',
      partners: 'Partners',
      getStarted: 'Get Started'
    },
    hero: {
      title: 'The Future of',
      titleGradient: 'Car Rental Ecosystem',
      subtitle: 'Comprehensive platform suite covering all car rental industry needs, from individual marketplace to enterprise fleet management, with integrated solutions for every segment.',
      explorePlatform: 'Explore Platform',
      investmentOpportunity: 'Investment Opportunity',
      businessPartnership: 'Partnership'
    },
    businessMetrics: [
      { label: 'Total Addressable Market', value: '$2.5B', description: 'Short + long term total revenue' },
      { label: 'Asset Size', value: '$60.8B', description: 'Total sector asset value' },
      { label: 'Target Market Share', value: '8%', description: 'Within 3 years commission-based' },
      { label: 'Revenue Projection', value: '$53.5M', description: 'Year 3 total revenue target' }
    ],
    platforms: [
      {
        id: 'driveupgo',
        title: 'DriveUpGo',
        subtitle: 'B2C Marketplace application',
        description: 'Marketplace application where individual users can compare prices from multiple car rental companies and find the most suitable vehicle for themselves.',
        features: [
          'Multi-company price comparison',
          'Real-time availability checking',
          'Advanced filtering and search',
          'Secure payment integration',
          'User rating system',
          'Mobile and web application'
        ],
        metrics: {
          partners: '50+ Partners',
          bookings: '10K+ Bookings',
          rating: '4.8/5 Rating'
        },
        icon: ShoppingCart,
        color: 'text-blue-600'
      },
      {
        id: 'driveupmanager',
        title: 'DriveUpManager',
        subtitle: 'B2B Operations management platform',
        description: 'Platform designed for companies operating daily and short-term car rental operations, managing office operations, vehicle status, availability calendar, and contract management.',
        features: [
          'Vehicle inventory and availability management',
          'Reservation and contract system',
          'Financial reporting and analytics',
          'Customer relationship management (CRM)',
          'Automated billing',
          'Multi-branch operation support'
        ],
        metrics: {
          efficiency: '40% Efficiency',
          automation: '80% Automation',
          revenue: '25% Revenue Increase'
        },
        icon: Settings,
        color: 'text-purple-600'
      },
      {
        id: 'driveupfixer',
        title: 'DriveUpFixer',
        subtitle: 'B2B Maintenance & repair marketplace',
        description: 'Platform for short and long-term car rental companies and fleet-owning companies to efficiently manage damage, maintenance, repair, and breakdown processes.',
        features: [
          'Periodic maintenance schedules',
          'Damage recording and tracking',
          'Service provider network management',
          'Cost analysis and reporting',
          'Vehicle history records',
          'Mobile damage reporting'
        ],
        metrics: {
          downtime: '30% Reduction',
          cost: '20% Savings',
          response: '2 Hour Response'
        },
        icon: Wrench,
        color: 'text-orange-600'
      },
      {
        id: 'driveuppro',
        title: 'DriveUpPro',
        subtitle: 'B2B Corporate fleet management',
        description: 'Platform developed for companies that own vehicles and assign them to their personnel, facilitating vehicle tracking, management, and organization of personnel usage.',
        features: [
          'Fleet vehicle inventory management',
          'Personnel assignment system',
          'GPS tracking and route analysis',
          'Fuel consumption monitoring',
          'Usage reports',
          'Policy and rule management'
        ],
        metrics: {
          tracking: '100% Tracking',
          compliance: '95% Compliance',
          savings: '25% Cost Reduction'
        },
        icon: Car,
        color: 'text-green-600'
      },
      {
        id: 'driveupdesk',
        title: 'DriveUpDesk',
        subtitle: 'B2B Central call center',
        description: 'Central call center application that can work integrated with all DriveUp products, used to manage customer requests and support processes.',
        features: [
          'Omnichannel customer support',
          'Ticket management system',
          'Integration with all products',
          'Performance dashboard',
          'Automatic call distribution',
          'Customer satisfaction measurement'
        ],
        metrics: {
          resolution: '90% Resolution',
          satisfaction: '4.7/5 Satisfaction',
          response: '30s Response'
        },
        icon: Headphones,
        color: 'text-indigo-600'
      }
    ],
    sections: {
      platformOverview: {
        title: 'Product Suite',
        description: 'Our integrated solutions specially developed for every segment of the car rental industry, covering all needs from marketplace to operations management.'
      },
      technology: {
        title: 'Technology Infrastructure',
        description: 'Built on modern, scalable architecture ensuring reliability, security, and performance at enterprise scale.',
        features: [
          {
            title: 'Cloud-Native',
            description: 'Microservices architecture on AWS with auto-scaling, load balancing, and global CDN distribution.'
          },
          {
            title: 'Enterprise Security',
            description: 'SOC 2 Type II compliance, end-to-end encryption, and advanced threat protection.'
          },
          {
            title: 'Real-Time Data',
            description: 'Event-driven architecture with real-time analytics, ML pipelines, and intelligent automation.'
          }
        ]
      },
      roadmap: {
        title: 'Product Roadmap',
        description: 'Strategic development phases focused on market expansion, technology advancement, and sustainable growth.',
        phases: [
          {
            phase: 'Q2 2025',
            title: 'Platform Launch',
            description: 'Beta launch of DriveUpGo marketplace and DriveUpManager operations platform.',
            status: 'in-progress',
            milestones: ['MVP deployment', '10 partner integrations', 'iOS/Android apps launch']
          },
          {
            phase: 'Q4 2025',
            title: 'Product Expansion',
            description: 'Launch of DriveUpFixer and DriveUpPro, ecosystem integration.',
            status: 'planned',
            milestones: ['Maintenance marketplace', 'Fleet management', 'Service network partnerships']
          },
          {
            phase: 'Q2 2026',
            title: 'Full Integration',
            description: 'DriveUpDesk launch and full integration of all products, market expansion.',
            status: 'planned',
            milestones: ['Call center launch', 'API marketplace', 'International expansion']
          },
          {
            phase: 'Q4 2026',
            title: 'Platform Evolution',
            description: 'AI, IoT integration and next-generation mobility services.',
            status: 'future',
            milestones: ['AI optimization', 'IoT sensors', 'Sustainability']
          }
        ]
      },
      investment: {
        title: 'Investment Opportunity',
        description: 'Join us in transforming the $2.5B Turkish car rental market through technology innovation and strategic partnerships.',
        highlights: [
          {
            title: 'Proven Market Size',
            description: '$60.8B asset size, 400K vehicles and 798K contracts with strong sector fundamentals'
          },
          {
            title: 'Multiple Revenue Streams',
            description: '5 different revenue models: commission, subscription, seat licensing with diversified portfolio'
          },
          {
            title: 'High Margin Potential',
            description: 'Low operational cost, high scalability and recurring revenue model'
          },
          {
            title: 'Experienced Team',
            description: 'Proven track record in fintech, mobility and enterprise software'
          }
        ],
        businessModel: {
          title: 'Business Model and Financial Projections'
        }
      },
      partners: {
        title: 'Business Partnerships',
        description: 'Our platform creates a powerful ecosystem that will generate value in the automotive and mobility sector. We design an extensive collaboration model ranging from spare parts suppliers to fleet management companies, from short-term rental operators to service networks.',
        subtitle: 'Target Business Partner Categories',
        categories: [
          {
            title: 'Automotive Parts and Equipment Suppliers',
            description: 'Companies providing spare parts, equipment, and technological solutions needed in maintenance and repair processes.',
            icon: Cog,
            color: 'text-blue-600',
            benefits: ['Wide market access across Turkey', 'Digital ordering and tracking infrastructure', 'Direct access to new customers and service network']
          },
          {
            title: 'Mobility and Short-Term Rental Operators',
            description: 'Businesses offering car sharing, short-term rental, and innovative mobility solutions.',
            icon: Zap,
            color: 'text-purple-600',
            benefits: ['Increased visibility through marketplace integration', 'Opportunity to increase fleet occupancy rates', 'Management of operational processes via digital platform']
          },
          {
            title: 'Fleet Management and Brokerage Services (Fleet Brokers)',
            description: 'Professional companies that optimize fleet operations and mediate in rental and purchasing processes.',
            icon: Users,
            color: 'text-green-600',
            benefits: ['Direct access to B2B business network', 'Advanced reporting and analytics tools', 'Ease of managing customer relationships from single platform']
          },
          {
            title: 'Corporate Fleet Management Companies',
            description: 'Businesses that manage their own vehicle fleet or customer fleets end-to-end.',
            icon: Shield,
            color: 'text-orange-600',
            benefits: ['Integrated operation with DriveUpPro and fleet tracking systems', 'Operational efficiency in vehicle management', 'Cost optimization and process improvement']
          },
          {
            title: 'Damage, Repair and Maintenance Solutions',
            description: 'Technical centers that professionally handle vehicle maintenance, repair, and damage processes.',
            icon: Wrench,
            color: 'text-red-600',
            benefits: ['Digital workflow automation', 'Access to service requests and customer pool', 'Increased visibility at regional and national levels']
          },
          {
            title: 'Service Network Operators and Chains',
            description: 'Service businesses operating with wide access across Turkey and quality service approach.',
            icon: Globe,
            color: 'text-indigo-600',
            benefits: ['Network growth and access to new locations', 'Strengthening quality standards', 'Digital transformation and process integration support']
          }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        questions: [
          {
            question: 'How does your revenue model work and is it sustainable?',
            answer: 'The DriveUp ecosystem plans to use different but compatible revenue models for each product.\n\nDriveUpGo: As a short-term car rental platform, we aim to enable businesses to offer their vehicles to end users and generate revenue through a commission model from each reservation.\n\nDriveUpManager & DriveUpPro: We plan to license our fleet management solutions with monthly or annual subscription models.\n\nDriveUpFixer: We aim to generate revenue from both service and spare parts supply by collaborating with service providers in vehicle maintenance and repair processes.\n\nDriveUpDesk: We plan to apply a per-user license model for operations and call center management.\n\nOur goal is to provide regular income from different customer segments with multiple revenue streams and build a structure resistant to market fluctuations.'
          },
          {
            question: 'What is the potential of DriveUpFixer in the maintenance market?',
            answer: 'With DriveUpFixer, we aim to create a structure where fleet companies and corporate vehicle owners can manage maintenance, repair and spare parts processes digitally. We plan to bring together service providers, parts suppliers and fleet managers on a single platform to accelerate processes, optimize costs and provide operational efficiency.\nWe aim to create a stable and scalable revenue potential thanks to the year-round recurring demand structure of the maintenance-repair market.'
          },
          {
            question: 'Is your TAM (Total Addressable Market) calculation realistic?',
            answer: 'We aim to base our market estimates on current data from reliable sources such as TOKKDER, SOBİDER and industry research reports. We plan to verify metrics such as fleet sizes, rental numbers and maintenance-repair expenditures with official statistics and field data from the sector. Thus, we aim to present an unexaggerated, realistic market assessment for investors and business partners.'
          },
          {
            question: 'Which size companies is it suitable for and what is your penetration strategy?',
            answer: 'We aim to position our DriveUp solutions compatible with all segments from single vehicle businesses to fleets of thousands of vehicles.\nOur penetration plan:\n\nStart pilot projects with large fleet operators to gain references.\n\nExpand to SMEs and medium-sized fleets to increase spread.\n\nReach individual vehicle owners and small businesses to cover the entire market.'
          },
          {
            question: 'What are your competitive advantages and market position?',
            answer: 'Integrated ecosystem goal: We plan to offer car rental, fleet management, maintenance-repair and operations management under one roof.\n\nFull sector coverage goal: We aim to serve all need points of the market with five different products.\n\nMultiple revenue streams: We aim to obtain regular income from different segments without being tied to a single revenue model.\n\nTechnology infrastructure: We plan to develop a cloud-based, integrated and scalable platform.\n\nExperienced team goal: We aim to bring together a team of experts in fleet management, software development and operations.\n\nWith these plans, we aim to capture the "first-mover" advantage in the market.'
          },
          {
            question: 'What is your customer retention and growth strategy?',
            answer: 'We plan a strategy that prioritizes customer satisfaction and long-term collaborations.\n\nEcosystem connection: We aim to enable customers to manage all their operations on a single platform thanks to the integrated operation of our products.\n\nContinuous development: We plan to add regular updates and new features based on customer feedback.\n\nSupport services: We aim to create proactive customer support, training programs and quick solution centers.\n\nData-driven optimization: We aim to develop solutions that will increase operational efficiency by analyzing user behaviors.\n\nLong-term contracts: We plan to ensure revenue stability by making multi-year agreements with corporate customers.'
          }
        ]
      },
      contact: {
        title: 'Ready to Shape the Future of Car Rental?',
        description: 'Whether you are a business looking for a single product solution or a large company wanting full ecosystem integration, we develop customized solutions for you.',
        partners: 'Partner With Us',
        investment: 'Become an Investor',
        sections: {
          partners: {
            title: 'For Businesses',
            description: 'Digitalize your operations, increase your efficiency'
          },
          investors: {
            title: 'For Investors',
            description: 'Learn about our growth opportunity and financial projections'
          }
        }
      },
      footer: {
        tagline: 'Transforming the car rental industry with technology',
        copyright: '© 2025 DriveUP Technologies. All rights reserved.'
      },
      seo: {
        title: 'DriveUp: New Era in Fleet Management, Car Rental and Maintenance',
        metaDescription: 'DriveUp combines fleet car rental, vehicle marketplace, maintenance-repair and spare parts management in a single ecosystem. Discover customized solutions for your business.',
        sections: [
          {
            title: 'Introduction',
            content: 'The fleet management and car rental sector in Turkey is rapidly digitalizing. Businesses are looking for integrated solutions to reduce operational costs, increase vehicle usage efficiency and facilitate maintenance processes.\n\nAt this point, DriveUp brings a new standard to the sector by offering fleet rental, vehicle sales, maintenance-repair and spare parts supply on a single platform.'
          },
          {
            title: 'Smart Solutions in Fleet Car Rental',
            content: 'You can manage all steps from offer to delivery on a single panel by digitalizing your fleet rental process.\n\nWe offer short-term, long-term and daily car rental options in a single ecosystem.\n\nThanks to a local SEO compatible structure, you can easily reach customers with searches like "Istanbul car rental" or "Ankara fleet rental".'
          },
          {
            title: 'Vehicle Marketplace for Easy Sales and Purchasing',
            content: 'DriveUp\'s vehicle marketplace module provides advantages for both buyers and sellers in fleet renewal or expansion processes:\n\n• Reliable platform for fleet vehicle sales and fleet vehicle purchases\n• City-based sales listings with regional filters (example: "Izmir fleet vehicle sales")\n• Transparent pricing and auction system'
          },
          {
            title: 'Maintenance-Repair and Service Management',
            content: 'Maintenance and repair processes can cause serious time and cost losses in fleet businesses. With DriveUpFixer:\n\n• You can manage all your maintenance requests digitally.\n• You get affordable prices and fast service with the authorized service network.\n• Automobile spare parts and car spare parts supply is done directly through the system.'
          },
          {
            title: 'Trust and Speed in Spare Parts Supply',
            content: '• Original and approved spare parts supply chain\n• Price comparison module\n• Fast access with city-based search (for example "Istanbul spare parts")'
          },
          {
            title: 'Why DriveUp?',
            content: '• First integrated ecosystem advantage\n• Sustainable business structure with multiple revenue models\n• Control of all processes from fleet management to spare parts from a single panel\n• Flexible use for both large fleet owners and SMEs'
          },
          {
            title: 'Conclusion',
            content: 'Bringing together fleet management, car rental, sales, maintenance and spare parts processes under one roof means saving time and cost.\n\nDriveUp, as the pioneer of digital transformation in the sector, brings speed, trust and efficiency to your business.\n\nJoin the DriveUp ecosystem and take your operations to the next level.'
          }
        ]
      }
    },
    techStack: [
      { name: 'React Native', category: 'Mobile', icon: '📱' },
      { name: 'Node.js', category: 'Backend', icon: '⚡' },
      { name: 'TypeScript', category: 'Language', icon: '🔷' },
      { name: 'PostgreSQL', category: 'Database', icon: '🗄️' },
      { name: 'Redis', category: 'Cache', icon: '⚡' },
      { name: 'AWS', category: 'Cloud', icon: '☁️' },
      { name: 'Docker', category: 'DevOps', icon: '🐳' },
      { name: 'GraphQL', category: 'API', icon: '🔗' },
      { name: 'Kubernetes', category: 'Orchestration', icon: '🎯' },
      { name: 'Stripe', category: 'Payments', icon: '💳' }
    ]
  }
};