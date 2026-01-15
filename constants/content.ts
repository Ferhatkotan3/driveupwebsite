import { ContentType } from '../types';
import {
  Wrench,
  Cog,
  Zap,
  Users,
  Shield,
  Globe,
  Store,
  ShoppingCart,
  Code
} from 'lucide-react';
import { allProducts } from './products';

export const content: ContentType = {
  tr: {
    nav: {
      services: 'Hizmetler',
      whatWeDo: 'Neler Yapıyoruz?',
      howWeDo: 'Nasıl Yapıyoruz?',
      products: 'Ürünler',
      technology: 'Teknoloji',
      about: 'Hakkımızda',
      contact: 'İletişim',
      blog: 'Blog',
      getStarted: 'Başlayın',
      serviceItems: [
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
      ]
    },
    hero: {
      title: 'Araç Kiralama Ekosisteminin',
      titleGradient: 'Geleceği',
      subtitle: 'Bireysel kullanıcılardan kurumsal filolara, marketplace\'ten operasyon yönetimine kadar araç kiralama sektörünün tüm ihtiyaçlarını karşılayan entegre platform ailesi.',
      explorePlatform: 'Platformu Keşfedin',
      businessPartnership: 'İş Ortağı',
      mainTitle: 'Otomotiv Ekosisteminin',
      mainTitleGradient: 'Dijital İşletim Sistemi',
      mainSubtitle: 'Filo yönetiminden bireysel kiralamaya, araç görselleştirmeden veri güvenliğine kadar tüm çözümlerimizle operasyonlarınızı tek bir merkezden dijitalleştiriyoruz.',
      contactButton: 'Bize Ulaşın',
      trustIndicators: {
        endToEnd: 'Uçtan Uca Yönetim',
        global: 'Global Standartlar',
        ai: 'Yapay Zekâ Altyapısı'
      },
      productBadges: {
        studio: { name: 'Studio', desc: 'AI Görselleme' },
        manager: { name: 'Manager', desc: 'Entegre Yönetim' },
        fixer: { name: 'Fixer', desc: 'Bakım & Servis' },
        redact: { name: 'Redact', desc: 'Veri Güvenliği' },
        pro: { name: 'Pro', desc: 'İleri Analiz' },
        desk: { name: 'Desk', desc: 'Destek & Hub' }
      },
      features: {
        integration: { label: 'Entegrasyon', value: 'Full API Stack' },
        security: { label: 'Güvenlik', value: 'Enterprise Grade' },
        analytics: { label: 'Analitik', value: 'Real-time Data' },
        infrastructure: { label: 'Altyapı', value: 'Cloud Optimized' }
      }
    },
    platforms: [
      allProducts.driveUpFixer.tr,
      allProducts.driveUpStudio.tr,
      allProducts.driveUpPro.tr,
      allProducts.driveUpManager.tr,
      allProducts.driveUpDesk.tr,
      allProducts.driveUpRedact.tr
    ],
    sections: {
      platformOverview: {
        title: 'Ürün Ailesi',
        description: 'Araç kiralama sektörünün her segmentine özel geliştirilmiş entegre çözümlerimiz, marketplace\'ten operasyon yönetimine kadar tüm ihtiyaçları karşılıyor.'
      },
      sectoralSolutions: {
        title: 'Sektörel Çözümlerle',
        titleBreak: 'Tam Entegrasyon',
        description: 'DriveUp, sadece bir yazılım değil; filo sahiplerinden sigorta şirketlerine, kurumsal alım-satım platformlarından bayilere kadar tüm otomotiv ekosistemini birbirine bağlayan merkezi bir işletim sistemidir.',
        fleetManagement: {
          title: 'Filo Yönetimi',
          description: 'Operasyonel maliyetlerde %25\'e varan tasarruf ve anlık yakıt/kilometre takibi.',
          metric: 'VERİMLİLİK',
          value: '%92'
        },
        insurance: {
          title: 'Sigorta & Hasar',
          description: 'Hasar süreçlerinde şeffaf veri ve hızlı onarım yönetimi ile süreç optimizasyonu.',
          metric: 'SÜREÇ HIZI',
          value: '%85'
        },
        dealer: {
          title: 'Bayi & Galeri',
          description: 'Studio ve Redact ile ilan hazırlama süresini dakikalara indirerek hızlı satış döngüsü.',
          metric: 'İLAN HIZI',
          value: 'x5'
        },
        corporate: {
          title: 'Kurumsal Platform',
          description: 'Toplu araç alım-satım ve değerleme yapan dev platformlar için veri analitiği.',
          metric: 'VERİ ANALİZİ',
          value: 'REAL-TIME'
        }
      },
      whatWeDo: {
        title: 'Neler Yapıyoruz?',
        subtitle: 'Araç kiralama, filo yönetimi ve otomotiv ekosisteminin en kritik operasyonlarını yapay zekâ destekli dijital çözümlerle yeniden tanımlıyoruz.',
        description: 'DriveUp olarak; kurumsal filoların, günlük kiralama firmalarının, galerilerin ve sigorta paydaşlarının manuel, dağınık ve kontrolü zor süreçlerini tek bir dijital yapı altında sadeleştiriyoruz.',
        goal: 'Amacımız; operasyonları uçtan uca dijitalleştirmek, veriye dayalı karar almayı standart hale getirmek ve sektöre ölçülebilir, sürdürülebilir bir dijital çalışma modeli kazandırmaktır.',
        digitalize: {
          title: 'Operasyonları Dijitalleştiriyoruz',
          description: 'Araç envanteri, rezervasyon, bakım & onarım, hasar, sigorta ve müşteri süreçlerini tek merkezden yönetilebilir hale getiriyoruz.',
          items: [
            'Uçtan uca dijital iş akışları',
            'Otomasyon ile hızlanan operasyonlar',
            'Manuel hata ve operasyonel kayıpların azaltılması',
            'Tek ekran üzerinden tam süreç görünürlüğü'
          ]
        },
        aiEfficiency: {
          title: 'AI ile Verimlilik ve Maliyet Kontrolü Sağlıyoruz',
          description: 'Gelişmiş veri analizi ve yapay zekâ algoritmaları ile araçların performansını, maliyetlerini ve risklerini görünür kılıyoruz.',
          items: [
            'Bakım ve hasar maliyeti analizi',
            'Yapay zekâ destekli araç değerleme',
            'Veriye dayalı kârlılık ve fiyatlama kararları',
            'Yöneticiler için net ve ölçülebilir KPI raporları'
          ]
        },
        studio: {
          title: 'Görsel ve İlan Süreçlerini Dönüştürüyoruz',
          description: 'Araç görsellerini ve dijital ilan hazırlık süreçlerini yapay zekâ ile standartlaştırarak satış hızını ve ilan kalitesini artırıyoruz.',
          items: [
            'AI destekli showroom ve arka plan düzenleme',
            'Standart ve güvenilir ilan formatları',
            'Müşteriye özel araç değerlendirme deneyimi',
            'Dijital araç alım ve talep toplama süreçleri'
          ]
        },
        redact: {
          title: 'Gizlilik ve Görsel Güvenliği Sağlıyoruz',
          description: 'Araç görselleri üzerinde gizlilik, içerik doğrulama ve mevzuat uyumunu sağlayan yapay zekâ tabanlı güvenlik katmanları sunuyoruz.',
          items: [
            'Otomatik plaka ve yüz gizleme',
            'Yapay zekâ ile üretilmiş içerik tespiti',
            'Deepfake ve görsel manipülasyon analizi',
            'Hukuki ve operasyonel risklerin azaltılması'
          ]
        },
        ecosystem: {
          title: 'Süreçleri Birbirine Bağlıyoruz',
          description: 'Farklı paydaşlar arasında kopuk ilerleyen süreçleri, modüler ama birlikte çalışan bir dijital altyapı ile entegre hale getiriyoruz.',
          items: [
            'Paylaşılabilir değerlendirme ve işlem linkleri',
            'API tabanlı servis ve veri entegrasyonları',
            'Sigorta, banka ve telematik sistemleriyle uyum',
            'Fiyatlama, analiz ve karar destek bileşenleri'
          ]
        },
        experience: {
          title: 'Kullanıcı Deneyimini Güçlendiriyoruz',
          description: 'Tüm çözümlerimizi, sahada çalışan operasyon ekipleri ve son kullanıcı deneyimi odağında tasarlıyoruz.',
          items: [
            'Dijital rezervasyon ve ödeme süreçleri',
            'Tek ekrandan operasyon ve süreç yönetimi',
            'Kullanıcı dostu ve sade arayüzler',
            'Ölçülebilir ve izlenebilir müşteri memnuniyeti'
          ]
        },
        future: {
          title: 'Sektörün Geleceğini Şekillendiriyoruz',
          description: 'DriveUp, sadece bugünün ihtiyaçlarını değil, sektörün yarınını da inşa eder. Türkiye\'den başlayarak global ölçekte çözümler geliştiriyoruz.',
          items: [
            'Veri odaklı karar alma kültürü',
            'IoT ve akıllı filo altyapıları',
            'Yapay zekâ ile sektörel dönüşüm',
            'Küresel ölçeklenebilir çözümler'
          ]
        }
      },
      howWeDo: {
        title: 'Nasıl Yapıyoruz?',
        subtitle: 'Filo yönetimi ve araç kiralama sektöründeki operasyonel bilgi birikimimizi; güçlü yazılım mimarisi, yapay zekâ teknolojileri ve gerçek saha verileri ile birleştirerek ölçeklenebilir çözümler geliştiriyoruz.',
        description: 'Her ürünü; sahadaki gerçek problemleri merkeze alan, ölçülebilir ve sürdürülebilir bir yaklaşımla hayata geçiriyoruz.',
        fieldExperience: {
          title: 'Saha Deneyimi ile Başlıyoruz',
          description: 'Çözümlerimizi masa başında değil, operasyonun içinden doğan ihtiyaçlara göre tasarlıyoruz.',
          items: [
            'Kiralama ve sigorta süreç analizi',
            'Manuel iş yükü tespiti',
            'Gerçek kullanıcı senaryoları',
            'Sahada karşılığı olan çözümler'
          ]
        },
        modular: {
          title: 'Modüler Yazılım Mimarisi',
          description: 'Tüm DriveUp ürünleri; modüler, API-first ve büyümeye açık bir mimari ile geliştirilir.',
          items: [
            'Bağımsız ve entegre modüller',
            'İhtiyaca göre genişletilebilir yapı',
            'Bulut tabanlı yüksek performans',
            'Ölçeklenebilir teknoloji yığını'
          ]
        },
        aiData: {
          title: 'Yapay Zekâyı Verilerle Besliyoruz',
          description: 'Yapay zekâyı teorik değil, gerçek piyasa ve operasyon verileri ile çalıştırıyoruz.',
          items: [
            'Piyasa verisiyle eğitilen modeller',
            'Optimize edilmiş görsel analiz',
            'Denetlenebilir AI çıktıları',
            'Karar destekleyici sistemler'
          ]
        },
        security: {
          title: 'Güvenlik ve Gizlilik',
          description: 'Fotoğraf, müşteri ve araç verilerinde gizliliği temel prensip olarak ele alıyoruz.',
          items: [
            'Otomatik görsel gizlilik',
            'Hassas veri koruma katmanları',
            'Kurumsal veri işleme standartları',
            'Güvenlik odaklı sistem çekirdeği'
          ]
        },
        ux: {
          title: 'Kullanıcı Deneyimi Odaklı',
          description: 'Gelişmiş teknolojiyi, sahadaki ekiplerin kolayca kullanabileceği arayüzlerle sunuyoruz.',
          items: [
            'Sadeleştirilmiş karmaşık süreçler',
            'Minimum eğitim ihtiyacı',
            'Hızlanan saha operasyonları',
            'Kullanıcıyı yormayan teknoloji'
          ]
        },
        continuous: {
          title: 'Sürekli Geliştirme ve Ölçüm',
          description: 'DriveUp çözümleri statik değil, verilerle yaşayan ve sürekli büyüyen sistemlerdir.',
          items: [
            'Düzenli geri bildirim analizi',
            'Yaşayan ve güncellenen ürünler',
            'Müşteriyle birlikte gelişim',
            'Uzun vadeli dijital iş ortaklığı'
          ]
        }
      },
      technology: {
        title: 'Teknoloji Altyapısı',
        description: 'Kurumsal ölçekte güvenilirlik, güvenlik ve performans sağlayan modern, ölçeklenebilir mimari üzerine inşa edilmiştir.',
        features: [
          {
            title: 'Bulut Tabanlı',
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
      partners: {
        title: 'İş Ortaklıkları',
        description: 'Platformumuz, otomotiv ve mobilite sektöründe tüm paydaşların birlikte değer üretebildiği, ölçeklenebilir ve sürdürülebilir bir iş birliği modeli sunar. Filo yönetiminden sigorta ve servis ağlarına, galerilerden araç alım–satım profesyonellerine kadar uzanan geniş bir ortaklık yapısı ile dijital dönüşümü birlikte inşa ediyoruz.',
        subtitle: 'Hedeflediğimiz İş Ortağı Kategorileri',
        categories: [
          {
            title: 'Otomotiv Parça ve Ekipman Tedarikçileri',
            description: 'Bakım ve onarım süreçlerinde ihtiyaç duyulan yedek parça, ekipman ve teknolojik çözümleri sağlayan firmalar.',
            icon: Cog,
            color: 'text-blue-600',
            benefits: ['Türkiye genelinde geniş müşteri ve servis ağına erişim', 'Dijital sipariş, takip ve talep yönetimi altyapısı', 'Kurumsal filo ve servis taleplerine doğrudan entegrasyon']
          },
          {
            title: 'Mobilite ve Kısa Dönem Kiralama Operatörleri',
            description: 'Araç paylaşımı, kısa dönem kiralama ve yenilikçi mobilite çözümleri sunan işletmeler.',
            icon: Zap,
            color: 'text-purple-600',
            benefits: ['Dijital platformlar üzerinden görünürlük artışı', 'Filo doluluk oranlarını artırmaya yönelik veri desteği', 'Operasyonel süreçlerin tek merkezden dijital yönetimi']
          },
          {
            title: 'Filo Yönetimi ve Aracılık Hizmetleri (Filo Brokerleri)',
            description: 'Filo operasyonlarını optimize eden, kiralama ve satın alma süreçlerinde aracılık yapan profesyonel şirketler.',
            icon: Users,
            color: 'text-green-600',
            benefits: ['Geniş B2B müşteri ağına erişim', 'Gelişmiş raporlama ve analitik araçlar', 'Müşteri ve operasyon süreçlerini tek platformdan yönetme imkânı']
          },
          {
            title: 'Özmal Filo Yönetim Firmaları',
            description: 'Kendi araç filosunu veya müşteri filolarını uçtan uca yöneten işletmeler.',
            icon: Shield,
            color: 'text-orange-600',
            benefits: ['Dijital filo takip ve operasyon yönetimi', 'Bakım, hasar ve kullanım süreçlerinde verimlilik artışı', 'Maliyet optimizasyonu ve süreç şeffaflığı']
          },
          {
            title: 'Oto Galeriler ve Yetkili / Yetkisiz Satıcılar',
            description: 'Araç alım, satış ve stok yönetimi yapan galeriler ve profesyonel satıcılar.',
            icon: Store,
            color: 'text-pink-600',
            benefits: ['Yapay zekâ destekli araç değerleme altyapısı', 'Standartlaştırılmış ilan ve görsel kalitesi', 'Satış hızı, fiyatlama ve stok risk analizi', 'Dijital araç alım talebi ve teklif toplama']
          },
          {
            title: 'Araç Alım Toplayıcıları ve Ticari Alım Profesyonelleri',
            description: 'Galeriler, platformlar ve kurumsal alıcılar adına yüksek hacimli araç alımı yapan profesyonel alım organizasyonları.',
            icon: ShoppingCart,
            color: 'text-cyan-600',
            benefits: ['Tek link üzerinden hızlı araç değerlendirme', 'Toplu alım senaryoları için fiyat ve risk analizi', 'Karar süresini kısaltan veri ve görsel standartlar', 'Ölçeklenebilir ve tekrarlanabilir alım süreçleri']
          },
          {
            title: 'Hasar, Onarım ve Bakım Çözümleri',
            description: 'Araçların bakım, onarım ve hasar süreçlerini profesyonel şekilde yürüten teknik servisler ve merkezler.',
            icon: Wrench,
            color: 'text-red-600',
            benefits: ['Dijital iş akışı ve servis talep yönetimi', 'Kurumsal müşteri ve hasar dosyalarına erişim', 'Bölgesel ve ulusal ölçekte görünürlük artışı']
          },
          {
            title: 'Servis Ağı Operatörleri ve Zincirleri',
            description: 'Türkiye genelinde yaygın hizmet ağına sahip servis işletmeleri ve zincir yapılar.',
            icon: Globe,
            color: 'text-indigo-600',
            benefits: ['Servis ağının dijital olarak büyütülmesi', 'Kalite ve hizmet standartlarının güçlendirilmesi', 'Süreç entegrasyonu ve operasyonel verimlilik']
          },
          {
            title: 'Teknoloji, Veri ve Entegrasyon İş Ortakları',
            description: 'Otomotiv, finans ve mobilite alanında teknoloji, veri ve altyapı çözümleri sunan firmalar.',
            icon: Code,
            color: 'text-teal-600',
            benefits: ['API tabanlı entegrasyon ve ortak ürün geliştirme', 'Kurumsal müşterilere birlikte erişim', 'Uzun vadeli teknoloji ve gelir iş birlikleri']
          }
        ]
      },
      gdpr: {
        title: 'GDPR - Veri Koruma Politikası',
        subtitle: 'DriveUp olarak kişisel verilerinizin korunması bizim için önceliklidir.',
        sections: {
          dataController: {
            title: 'Veri Sorumlusu',
            content: 'Kişisel verilerinizin işlenmesinden sorumlu olan veri sorumlusu:',
            companyName: 'DriveUp Technologies OÜ',
            address: 'DriveUp OÜ Viru väljak 2, 3. korrus, Kesklinna linnaosa, Harju maakond, Tallinn 10111, Estonia',
            email: 'info@driveuptr.com'
          },
          dataTypes: {
            title: 'Toplanan Kişisel Veri Türleri',
            content: 'Platformumuz aracılığıyla aşağıdaki kişisel verileri topluyoruz:',
            items: [
              'İletişim bilgileri (ad, soyad, e-posta, telefon)',
              'Araç görselleri ve ilgili veriler',
              'Platform kullanım verileri',
              'Teknik veriler (IP adresi, tarayıcı bilgileri)'
            ]
          },
          processing: {
            title: 'Veri İşleme Amaçları',
            content: 'Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:',
            items: [
              'Platform hizmetlerinin sunulması',
              'Müşteri desteği ve iletişim',
              'Yasal yükümlülüklerin yerine getirilmesi',
              'Güvenlik ve dolandırıcılık önleme',
              'KVKK ve GDPR uyumluluğunun sağlanması'
            ]
          },
          userRights: {
            title: 'Veri Sahibi Haklarınız',
            content: 'GDPR kapsamında aşağıdaki haklara sahipsiniz:',
            items: [
              'Bilgi alma ve erişim hakkı',
              'Düzeltme hakkı',
              'Silme hakkı',
              'İtiraz hakkı',
              'Veri taşınabilirliği hakkı'
            ],
            contactTitle: 'Haklarınızı Kullanma',
            contactInfo: 'Yukarıdaki haklarınızı kullanmak için info@driveuptr.com adresine e-posta gönderebilirsiniz.'
          },
          dataSecurity: {
            title: 'Veri Güvenliği',
            content: 'Kişisel verilerinizin güvenliği için SSL/TLS şifreleme, erişim kontrolü, düzenli güvenlik denetimleri ve GDPR uyumlu veri işleme süreçleri uygulamaktayız. Araç görsellerinde otomatik plaka ve yüz gizleme teknolojileri kullanılmaktadır.'
          },
          contact: {
            title: 'İletişim',
            content: 'GDPR kapsamındaki haklarınız veya veri işleme uygulamalarımız hakkında sorularınız için:',
            emailLabel: 'E-posta',
            email: 'info@driveuptr.com',
            addressLabel: 'Adres',
            address: 'DriveUp OÜ Viru väljak 2, 3. korrus, Kesklinna linnaosa, Harju maakond, Tallinn 10111, Estonia'
          }
        }
      },
      faq: {
        title: 'Sıkça Sorulan Sorular',
        questions: [
          {
            question: 'DriveUp tam olarak ne yapar?',
            answer: 'DriveUp, araç kiralama, filo yönetimi, sigorta, servis, galeri ve kurumsal alım-satım süreçlerini tek bir dijital altyapı altında toplayan, yapay zekâ destekli bir otomotiv operasyon platformudur. Dağınık ilerleyen manuel süreçleri dijitalleştirir, standartlaştırır ve ölçülebilir hale getirir.'
          },
          {
            question: 'DriveUp kimler için tasarlanmıştır?',
            answer: 'DriveUp; kurumsal filolar, günlük ve kısa dönem kiralama firmaları, oto galeriler, araç alım profesyonelleri, sigorta paydaşları ve servis ağları için uygundur. Küçük ölçekli operasyonlardan yüksek hacimli kurumsal yapılara kadar ölçeklenebilir şekilde çalışır.'
          },
          {
            question: 'DriveUp\'ın en temel problemi çözdüğü alan nedir?',
            answer: 'Otomotiv operasyonlarında en büyük problem; süreçlerin parçalı, manuel ve kontrolü zor olmasıdır. DriveUp, bu süreçleri tek merkezde toplayarak görünürlük, hız ve veri temelli karar alma imkânı sağlar.'
          },
          {
            question: 'DriveUp\'ı benzer yazılımlardan ayıran nedir?',
            answer: 'DriveUp, tek bir probleme odaklanan bir araç değil; operasyon, veri, görsel, güvenlik ve değerleme katmanlarını birlikte ele alan bütüncül bir platformdur. Yapay zekâ destekli karar mekanizmaları ve gerçek saha verisiyle çalışması en önemli farkıdır.'
          },
          {
            question: 'Yapay zekâ DriveUp içinde nasıl kullanılıyor?',
            answer: 'Yapay zekâ; araç değerleme, maliyet analizi, satış hızı tahmini, görsel düzenleme, plaka ve yüz gizleme, görsel manipülasyon tespiti ve risk analizi gibi birçok kritik noktada aktif olarak kullanılır.'
          },
          {
            question: 'Araç değerleme süreci nasıl çalışır?',
            answer: 'Araç değerleme; piyasa verileri, araç özellikleri, kullanım geçmişi, görsel analiz ve risk parametreleri birlikte değerlendirilerek yapılır. Amaç, tek bir fiyat göstermek değil; güvenilir, şeffaf ve karar destekli bir değerleme sunmaktır.'
          },
          {
            question: 'Galeriler ve araç alım profesyonelleri DriveUp\'tan nasıl faydalanır?',
            answer: 'Galeriler ve alım profesyonelleri, tek link üzerinden araç değerlendirme alabilir, satış hızı ve fiyat risklerini görebilir, görselleri standartlaştırarak daha hızlı ve güvenilir alım-satım yapabilir.'
          },
          {
            question: 'Sigorta ve KVKK uyumu nasıl sağlanıyor?',
            answer: 'Araç görselleri otomatik olarak analiz edilir; plaka ve yüz gizleme uygulanır, görseller şifrelenir ve yapay zekâ ile üretilmiş veya manipüle edilmiş içerikler tespit edilir. Bu sayede hukuki ve operasyonel riskler minimize edilir.'
          },
          {
            question: 'DriveUp büyük ölçekli operasyonlar için uygun mu?',
            answer: 'Evet. DriveUp, API tabanlı mimarisi ve modüler yapısı sayesinde yüksek hacimli filo, servis ve alım-satım operasyonlarını destekleyecek şekilde tasarlanmıştır.'
          },
          {
            question: 'Platform farklı sistemlerle entegre çalışabilir mi?',
            answer: 'DriveUp; sigorta, banka, telematik, ödeme ve üçüncü parti yazılımlarla entegre çalışabilecek şekilde API-first bir mimari sunar. Mevcut sistemlerinizi değiştirmeden birlikte çalışabilir.'
          },
          {
            question: 'DriveUp nasıl ölçeklenir?',
            answer: 'Platform; müşteri sayısı, araç sayısı veya işlem hacmi arttıkça performans kaybı yaşamadan büyüyebilecek şekilde tasarlanmıştır. Modüler yapı sayesinde yalnızca ihtiyaç duyulan fonksiyonlar devreye alınabilir.'
          },
          {
            question: 'DriveUp hangi pazarlara odaklanıyor?',
            answer: 'DriveUp, Türkiye otomotiv pazarındaki gerçek operasyonel ihtiyaçlardan doğmuştur ve Avrupa Birliği yazılım, veri güvenliği ve uyum standartları temel alınarak geliştirilmiştir. Hem yerel hem uluslararası pazarlara uygundur.'
          },
          {
            question: 'DriveUp ile çalışmaya başlamak ne kadar sürer?',
            answer: 'İhtiyaç analizine göre DriveUp çözümleri hızlıca devreye alınabilir. Bulut tabanlı altyapı sayesinde kurulum süreçleri minimumda tutulur ve ekipler kısa sürede platformu kullanmaya başlayabilir.'
          }
        ]
      },
      contact: {
        title: 'Araç Kiralama Geleceğini Şekillendirmeye Hazır mısınız?',
        description: 'İster tek ürün çözümü arayan bir işletme olun, ister tam ekosistem entegrasyonu isteyen büyük bir şirket olun, size özel çözümler geliştiriyoruz.',
        partners: 'İş Ortağımız Olun',
        page: {
          heroTitle: 'İletişime Geçin',
          heroSubtitle: 'Filo yönetimi yazılımlarımız hakkında bilgi almak, demo talep etmek veya teknik destek almak için bizimle iletişime geçin.',
          formTitle: 'Bize Ulaşın',
          formSubtitle: 'Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz. En kısa sürede size dönüş yapacağız.',
          formSubmitted: 'Mesajınız Gönderildi!',
          formSubmittedMessage: 'En kısa sürede size dönüş yapacağız.',
          labels: {
            name: 'Ad Soyad',
            email: 'E-posta',
            company: 'Şirket',
            phone: 'Telefon',
            service: 'İlgilendiğiniz Hizmet',
            message: 'Mesaj',
            required: '*',
            selectService: 'Hizmet seçiniz',
            namePlaceholder: 'Adınız ve soyadınız',
            emailPlaceholder: 'ornek@email.com',
            companyPlaceholder: 'Şirket adınız',
            phonePlaceholder: '0552 415 0255',
            messagePlaceholder: 'Mesajınızı buraya yazın...',
            submit: 'Mesaj Gönder'
          },
          contactInfoTitle: 'İletişim Bilgileri',
          phone: {
            title: 'Telefon',
            number: '0552 415 0255',
            hours: 'Pazartesi - Cuma: 09:00 - 18:00'
          },
          email: {
            title: 'E-posta ile ulaşın',
            address: 'info@driveuptr.com',
            support: '7/24 e-posta desteği'
          },
          address: {
            title: 'Genel Merkez',
            line1: 'DriveUp OÜ Viru väljak 2, 3. korrus',
            line2: 'Kesklinna linnaosa, Harju maakond',
            line3: 'Tallinn 10111, Estonia'
          },
          services: [
            'DriveUpFixer - Bakım & Onarım',
            'DriveUpPro - Filo Yönetimi',
            'DriveUpManager - Operasyon Yönetimi',
            'DriveUpStudio - AI Görselleştirme',
            'DriveUpRedact - Veri Güvenliği',
            'DriveUpDesk - Destek Merkezi',
            'Genel Danışmanlık',
            'Teknik Destek',
            'Diğer'
          ],
          cta: {
            title: 'Hemen Başlayın',
            subtitle: 'Filo yönetimi yazılımlarımız hakkında daha fazla bilgi almak veya demo talep etmek için bizimle iletişime geçin.',
            callButton: 'Hemen Ara',
            emailButton: 'E-posta Gönder'
          }
        }
      },
      blog: {
        title: 'Blog',
        subtitle: 'Araç kiralama ve filo yönetimi sektöründeki en son gelişmeler, trendler ve uzman görüşleri.',
        featured: {
          category: 'Öne Çıkan',
          date: '2025-12-20',
          readTime: '9 dk',
          title: 'Yapay Zeka Destekli Araç Değerlendirme: Eğitilmiş Modeller ile Doğru Fiyatlama',
          excerpt: 'DriveUp\'ın yapay zeka destekli araç değerlendirme sistemi, milyonlarca araç verisi üzerinde eğitilmiş derin öğrenme modelleri kullanarak, araçların gerçek piyasa değerini objektif şekilde hesaplıyor.'
        },
        recentPosts: 'Son Yazılar',
        readMore: 'Devamını Oku',
        categories: {
          title: 'Kategoriler',
          subtitle: 'İlgi alanınıza göre yazıları filtreleyin',
          technology: 'Teknoloji',
          fleet: 'Filo Yönetimi',
          analytics: 'Analitik',
          sustainability: 'Sürdürülebilirlik'
        },
        newsletter: {
          title: 'Bültenimize Abone Olun',
          subtitle: 'En son yazılarımızı ve sektör haberlerini e-posta ile alın.',
          placeholder: 'E-posta adresiniz',
          button: 'Abone Ol'
        },
        post1: {
          title: 'Araç Kiralama Sektöründe Dijital Dönüşüm',
          excerpt: 'Araç kiralama sektöründe dijital dönüşümün önemi ve faydaları hakkında detaylı bilgiler. Modern teknoloji çözümleri ile operasyonel verimliliği nasıl artırabilirsiniz?',
          category: 'Teknoloji'
        },
        post2: {
          title: 'Filo Yönetiminde Yapay Zeka',
          excerpt: 'Yapay zeka teknolojilerinin filo yönetiminde nasıl kullanıldığı ve avantajları. AI destekli çözümler ile maliyet optimizasyonu ve operasyonel verimlilik.',
          category: 'AI'
        },
        post3: {
          title: 'Müşteri Deneyimi Optimizasyonu',
          excerpt: 'Araç kiralama sürecinde müşteri deneyimini nasıl optimize edebilirsiniz? Dijital çözümler ile müşteri memnuniyetini artırma stratejileri.',
          category: 'UX'
        },
        post4: {
          title: 'Sürdürülebilir Filo Yönetimi',
          excerpt: 'Çevre dostu araçlar ve sürdürülebilir filo yönetimi stratejileri. Yeşil teknolojiler ile hem çevreyi koruyun hem de maliyetleri düşürün.',
          category: 'Sürdürülebilirlik'
        }
      },
      footer: {
        tagline: 'Teknoloji ile araç kiralama sektörünü dönüştürüyoruz',
        copyright: '© 2025 DriveUP Teknolojileri. Tüm hakları saklıdır.',
        description: 'Filo yönetimi yazılımları ile araç, bakım, onarım ve kiralama süreçlerinizi tek platformda yönetin. Modern teknoloji ile operasyonlarınızı optimize edin.',
        quickLinks: 'Hızlı Linkler',
        products: 'Ürünlerimiz',
        services: 'Hizmetlerimiz',
        newsletter: {
          title: 'Güncel Kalın',
          subtitle: 'Filo yönetimi yazılımlarımız hakkında güncel bilgiler ve sektör haberleri için e-posta listemize katılın.',
          placeholder: 'E-posta adresiniz',
          button: 'Abone Ol'
        },
        legal: {
          privacy: 'Gizlilik Politikası',
          terms: 'Kullanım Şartları',
          cookies: 'Çerez Politikası',
          kvkk: 'KVKK',
          gdpr: 'GDPR'
        },
        quickLinksItems: [
          { name: 'Ana Sayfa', page: 'home' },
          { name: 'Hakkımızda', page: 'about' },
          { name: 'Ürünler', page: 'products' },
          { name: 'Hizmetler', page: 'services' },
          { name: 'Ne Yapıyoruz', page: 'what-we-do' },
          { name: 'Teknoloji', page: 'technology' },
          { name: 'İş Ortaklıkları', page: 'partners' },
          { name: 'SSS', page: 'faq' },
          { name: 'Blog', page: 'blog' },
          { name: 'İletişim', page: 'contact' }
        ],
        productsItems: [
          { name: 'DriveUpFixer', description: 'Bakım & Onarım' },
          { name: 'DriveUpPro', description: 'Filo Yönetimi' },
          { name: 'DriveUpManager', description: 'Operasyon Yönetimi' },
          { name: 'DriveUpStudio', description: 'AI Görselleştirme' },
          { name: 'DriveUpRedact', description: 'Veri Güvenliği' },
          { name: 'DriveUpDesk', description: 'Destek Merkezi' }
        ],
        servicesItems: [
          'Filo Yönetimi',
          'Araç Takibi',
          'Bakım Yönetimi',
          'Operasyon Yönetimi',
          'Raporlama',
          'Teknik Destek'
        ]
      },
      about: {
        title: 'Hakkımızda',
        content: {
          p1: 'DriveUp, 2024 yılında Estonya\'da kurulmuş, Avrupa Birliği yazılım ve veri güvenliği standartlarını temel alan; Türkiye otomotiv pazarının gerçek saha deneyimi üzerine inşa edilmiş uçtan uca bir otomotiv teknoloji platformudur. Amacımız, otomotiv sektöründe dağınık ve manuel yürütülen operasyonları tek bir dijital omurga altında birleştirerek, firmaların daha verimli, şeffaf ve ölçeklenebilir şekilde çalışmasını sağlamaktır.',
          p2: 'Otomotiv ekosistemi; araç kiralama, filo yönetimi, bakım-onarım, satış, görselleştirme, veri güvenliği ve müşteri yönetimi gibi birbirine bağlı birçok operasyonel süreci aynı anda barındırır. DriveUp, bu süreçleri birbirinden kopuk yazılımlar yerine entegre, modüler ve birlikte çalışabilir bir yapı altında sunar. Yerel operasyon bilgisini, global teknoloji ve yönetişim standartlarıyla birleştirerek hem Türkiye pazarı hem de uluslararası ölçek için sürdürülebilir çözümler geliştirir.',
          p3: 'DriveUp ekosistemi; farklı iş modellerine ve ihtiyaçlara göre şekillenen ürünlerden oluşur. DriveUp Manager, kısa ve günlük araç kiralama firmalarının operasyon, rezervasyon ve sözleşme süreçlerini merkezi bir sistem üzerinden yönetmesini sağlar. DriveUp Pro, özmal araç sahibi kurumsal şirketler için filo takibi, zimmet yönetimi ve personel kullanım analizlerini sunar. DriveUp Fixer, bakım, hasar, onarım ve servis sağlayıcı süreçlerini uçtan uca dijitalleştirerek operasyonel kontrol ve maliyet şeffaflığı sağlar.',
          p4: 'Görsel ve veri güvenliği katmanında konumlanan DriveUp Studio, araç fotoğraflarını yapay zekâ destekli araçlarla profesyonel showroom kalitesine dönüştürürken; DriveUp Redact, plaka gizleme, yüz bulanıklaştırma ve içerik doğrulama çözümleriyle KVKK ve GDPR uyumlu görsel veri güvenliği sağlar. DriveUp Desk ise tüm DriveUp ürünleriyle entegre çalışan destek merkezi, çağrı yönetimi ve müşteri talep takibi altyapısını sunar.',
          p5: 'DriveUp platformu, yapay zekâ destekli araç değerlendirme ve fiyatlama sistemleriyle, araçların gerçek piyasa değerlerinin objektif ve veriye dayalı şekilde hesaplanmasını mümkün kılar. Değerlendirme Linki gibi çözümler sayesinde galeriler ve araç alım şirketleri, müşterileriyle doğrudan etkileşime geçebilir; değerlendirme süreçlerini otomatikleştirerek alım ve satış operasyonlarını hızlandırabilir.',
          p6: 'Tüm DriveUp ürünleri API-first, bulut tabanlı ve ölçeklenebilir bir mimariyle geliştirilmiştir. Bu yaklaşım, DriveUp\'ı yalnızca bugünün ihtiyaçlarına cevap veren bir yazılım değil; otomotiv sektörünün geleceğine uyum sağlayabilen, sürekli gelişen bir dijital platform haline getirir. DriveUp, parçalı çözümler yerine bütüncül bir bakış açısıyla, otomotiv ekosisteminin tüm paydaşlarını aynı veri altyapısında buluşturur.'
        },
        servicesTitle: 'Hizmet Detayları',
        services: [
          {
            name: 'Filo Yönetimi',
            desc: 'Kurumsal araç filolarının tüm yaşam döngüsünü tek merkezden yönetmenizi sağlar. Araç envanteri, kullanım durumu, kilometre, yakıt ve maliyet verileri gerçek zamanlı olarak izlenir. Operasyonel performans analizleri ve raporlamalar sayesinde filo verimliliği artırılır, kontrol kayıpları önlenir.',
            kimler: 'Kurumsal filolar, operasyonel araç kullanan şirketler',
            kazanim: 'Şeffaflık, maliyet kontrolü, veriye dayalı karar alma'
          },
          {
            name: 'Özmal Araç Yönetimi',
            desc: 'Şirket bünyesinde sahip olunan araçların personele zimmetlenmesi, kullanım takibi ve bakım süreçlerinin düzenli şekilde yönetilmesini sağlar. Personel bazlı kullanım analizleri ile operasyonel riskler ve gereksiz maliyetler azaltılır.',
            kimler: 'Özmal araç filosu olan şirketler',
            kazanim: 'Zimmet kontrolü, sorumluluk netliği, operasyonel disiplin'
          },
          {
            name: 'Araç Takip Sistemleri',
            desc: 'GPS entegrasyonu ile araçların konum, hız ve rota bilgileri gerçek zamanlı olarak takip edilir. Geçmiş sürüş verileri analiz edilerek operasyonel optimizasyon ve güvenli sürüş politikaları desteklenir.',
            kimler: 'Aktif sahada araç kullanan firmalar',
            kazanim: 'Operasyonel kontrol, rota optimizasyonu, güvenlik'
          },
          {
            name: 'Bakım ve Onarım Çözümleri',
            desc: 'Araçların periyodik bakım, hasar ve onarım süreçlerini dijital olarak planlar ve takip eder. Servis sağlayıcı entegrasyonları sayesinde bakım talepleri, onay süreçleri ve maliyetler uçtan uca kontrol altına alınır.',
            kimler: 'Kiralama firmaları, filo sahipleri',
            kazanim: 'Maliyet düşüşü, bakım sürekliliği, servis koordinasyonu'
          },
          {
            name: 'Günlük Araç Kiralama',
            desc: 'Kısa süreli ve günlük araç kiralama operasyonları için rezervasyon, müsaitlik ve sözleşme süreçlerini merkezi bir yapı altında toplar. Operasyonel hataları azaltarak daha hızlı ve verimli kiralama süreçleri sunar.',
            kimler: 'Günlük ve kısa dönem kiralama firmaları',
            kazanim: 'Operasyon hızı, müşteri memnuniyeti, gelir optimizasyonu'
          },
          {
            name: 'Kiralama Şirketlerine Özel Çözümler',
            desc: 'Filo kiralama firmalarına özel olarak geliştirilmiş operasyon, faturalama ve müşteri yönetimi altyapısı sunar. Şirketlerin kendi iş modellerine uygun esnek yapılandırmalarla çalışmasını mümkün kılar.',
            kimler: 'Kurumsal filo kiralama şirketleri',
            kazanim: 'Operasyonel esneklik, finansal kontrol, ölçeklenebilirlik'
          },
          {
            name: 'Çağrı Merkezi ve Destek Uygulamaları',
            desc: 'Tüm müşteri taleplerinin tek merkezden yönetilmesini sağlayan entegre bir destek altyapısı sunar. Çağrı, talep ve destek süreçleri kayıt altına alınır, performans ve çözüm süreleri ölçümlenir.',
            kimler: 'Çok kanallı müşteri iletişimi yöneten firmalar',
            kazanim: 'Hizmet kalitesi, ölçülebilir destek performansı'
          },
          {
            name: 'Araç Görselleştirme',
            desc: 'Yapay zekâ destekli görsel işleme teknolojileri ile araç fotoğraflarını profesyonel showroom kalitesine dönüştürür. Toplu görsel düzenleme ve standart ilan formatlarıyla satış ve pazarlama süreçlerini hızlandırır.',
            kimler: 'Galeriler, bayiler, filo şirketleri',
            kazanim: 'Daha hızlı ilan yayını, daha yüksek dönüşüm'
          },
          {
            name: 'Görüntü Güvenliği ve Gizlilik',
            desc: 'Araç görselleri üzerinde plaka ve yüz gizleme gibi KVKK ve GDPR uyumlu gizlilik işlemleri uygular. Görsel verilerin güvenli şekilde işlenmesini ve saklanmasını sağlar.',
            kimler: 'Galeriler, sigorta ve kurumsal firmalar',
            kazanim: 'Hukuki risklerin azaltılması, veri güvenliği'
          },
          {
            name: 'Araç Değerlendirme',
            desc: 'Yapay zekâ algoritmaları ve piyasa verileri kullanılarak araçların güncel ve objektif piyasa değerini hesaplar. Emsal analizleri ve fiyat aralıkları ile alım-satım kararlarını destekler.',
            kimler: 'Galeriler, araç alım şirketleri, filolar',
            kazanim: 'Doğru fiyatlama, hızlı karar alma'
          }
        ],
        labels: {
          kimler: 'Kimler için:',
          kazanim: 'Kazanım:'
        }
      },
      services: {
        fleetManagement: {
          title: 'Filo Yönetimi',
          subtitle: 'Araç filonuzu verimli bir şekilde yönetin ve operasyonel süreçlerinizi optimize edin.',
          whatIs: {
            title: 'Filo Yönetim Yazılımı Nedir?',
            description: 'Filo yönetim yazılımı, araç filonuzun tüm operasyonel süreçlerini dijital ortamda yönetmenizi sağlayan kapsamlı bir çözümdür. Araç takibi, bakım planlaması, yakıt yönetimi, sürücü performansı ve maliyet analizi gibi tüm süreçleri tek bir platformda toplar.',
            realTime: {
              title: 'Gerçek Zamanlı Takip',
              description: 'Araçlarınızın konumunu, hızını ve durumunu anlık olarak takip edin.'
            },
            maintenance: {
              title: 'Bakım Planlaması',
              description: 'Otomatik bakım hatırlatmaları ve servis planlaması yapın.'
            }
          },
          benefits: {
            title: 'Operasyonel Faydalar',
            efficiency: {
              title: '%25 Verimlilik Artışı',
              description: 'Operasyonel süreçlerinizi optimize ederek verimliliğinizi artırın.'
            },
            cost: {
              title: '%30 Maliyet Azaltma',
              description: 'Yakıt ve bakım maliyetlerinizi önemli ölçüde azaltın.'
            },
            security: {
              title: '%40 Güvenlik Artışı',
              description: 'Sürücü davranışlarını izleyerek güvenliği artırın.'
            }
          },
          efficiency: {
            title: 'Verimlilik Artışı',
            items: [
              {
                title: 'Otomatik Rota Optimizasyonu',
                description: 'Yapay zeka destekli rota planlaması ile mesafe ve süreyi minimize edin.'
              },
              {
                title: 'Akıllı Bakım Yönetimi',
                description: 'Öngörülü bakım ile arıza sürelerini azaltın ve araç kullanılabilirliğini artırın.'
              },
              {
                title: 'Gerçek Zamanlı Analitik',
                description: 'Detaylı raporlar ve analitiklerle karar verme süreçlerinizi hızlandırın.'
              }
            ]
          }
        }
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
      services: 'Services',
      whatWeDo: 'What We Do?',
      howWeDo: 'How We Do It?',
      products: 'Products',
      technology: 'Technology',
      about: 'About Us',
      contact: 'Contact',
      blog: 'Blog',
      getStarted: 'Get Started',
      serviceItems: [
        { id: 'filo-yonetimi', label: 'Fleet Management' },
        { id: 'ozmal-arac', label: 'Owned Vehicle Management' },
        { id: 'arac-takip', label: 'Vehicle Tracking Systems' },
        { id: 'bakim-onarim', label: 'Maintenance and Repair Solutions' },
        { id: 'gunluk-kiralama', label: 'Daily Vehicle Rental' },
        { id: 'kiralama-sirketleri', label: 'Solutions for Rental Companies' },
        { id: 'cagri-merkezi', label: 'Call Center Applications' },
        { id: 'arac-gorsellestirme', label: 'Vehicle Visualization' },
        { id: 'goruntu-guvenligi', label: 'Image Security and Privacy' },
        { id: 'arac-degerlendirme', label: 'Vehicle Evaluation' }
      ]
    },
    hero: {
      title: 'The Future of',
      titleGradient: 'Car Rental Ecosystem',
      subtitle: 'Comprehensive platform suite covering all car rental industry needs, from individual marketplace to enterprise fleet management, with integrated solutions for every segment.',
      explorePlatform: 'Explore Platform',
      businessPartnership: 'Partnership',
      mainTitle: 'Digital Operating System',
      mainTitleGradient: 'for Automotive Ecosystem',
      mainSubtitle: 'We digitalize your operations from a single center with all our solutions, from fleet management to individual rental, from vehicle visualization to data security.',
      contactButton: 'Contact Us',
      trustIndicators: {
        endToEnd: 'End-to-End Management',
        global: 'Global Standards',
        ai: 'AI Infrastructure'
      },
      productBadges: {
        studio: { name: 'Studio', desc: 'AI Visualization' },
        manager: { name: 'Manager', desc: 'Integrated Management' },
        fixer: { name: 'Fixer', desc: 'Maintenance & Service' },
        redact: { name: 'Redact', desc: 'Data Security' },
        pro: { name: 'Pro', desc: 'Advanced Analytics' },
        desk: { name: 'Desk', desc: 'Support & Hub' }
      },
      features: {
        integration: { label: 'Integration', value: 'Full API Stack' },
        security: { label: 'Security', value: 'Enterprise Grade' },
        analytics: { label: 'Analytics', value: 'Real-time Data' },
        infrastructure: { label: 'Infrastructure', value: 'Cloud Optimized' }
      }
    },
    platforms: [
      allProducts.driveUpFixer.en,
      allProducts.driveUpStudio.en,
      allProducts.driveUpPro.en,
      allProducts.driveUpManager.en,
      allProducts.driveUpDesk.en,
      allProducts.driveUpRedact.en
    ],
    sections: {
      platformOverview: {
        title: 'Product Suite',
        description: 'Our integrated solutions specially developed for every segment of the car rental industry, covering all needs from marketplace to operations management.'
      },
      sectoralSolutions: {
        title: 'Full Integration with',
        titleBreak: 'Sectoral Solutions',
        description: 'DriveUp is not just software; it is a central operating system that connects the entire automotive ecosystem from fleet owners to insurance companies, from corporate trading platforms to dealers.',
        fleetManagement: {
          title: 'Fleet Management',
          description: 'Up to 25% savings on operational costs and real-time fuel/mileage tracking.',
          metric: 'EFFICIENCY',
          value: '92%'
        },
        insurance: {
          title: 'Insurance & Damage',
          description: 'Process optimization with transparent data and fast repair management in damage processes.',
          metric: 'PROCESS SPEED',
          value: '85%'
        },
        dealer: {
          title: 'Dealer & Gallery',
          description: 'Fast sales cycle by reducing listing preparation time to minutes with Studio and Redact.',
          metric: 'LISTING SPEED',
          value: 'x5'
        },
        corporate: {
          title: 'Corporate Platform',
          description: 'Data analytics for large platforms that perform bulk vehicle trading and valuation.',
          metric: 'DATA ANALYSIS',
          value: 'REAL-TIME'
        }
      },
      whatWeDo: {
        title: 'What We Do?',
        subtitle: 'We are redefining the most critical operations of car rental, fleet management and automotive ecosystem with AI-powered digital solutions.',
        description: 'As DriveUp, we simplify the manual, scattered and hard-to-control processes of corporate fleets, daily rental companies, galleries and insurance stakeholders under a single digital structure.',
        goal: 'Our goal is to digitalize operations end-to-end, make data-driven decision making standard, and bring a measurable, sustainable digital working model to the sector.',
        digitalize: {
          title: 'We Digitalize Operations',
          description: 'We make vehicle inventory, reservation, maintenance & repair, damage, insurance and customer processes manageable from a single center.',
          items: [
            'End-to-end digital workflows',
            'Operations accelerated with automation',
            'Reduction of manual errors and operational losses',
            'Full process visibility from a single screen'
          ]
        },
        aiEfficiency: {
          title: 'We Provide Efficiency and Cost Control with AI',
          description: 'We make vehicles\' performance, costs and risks visible with advanced data analysis and AI algorithms.',
          items: [
            'Maintenance and damage cost analysis',
            'AI-powered vehicle valuation',
            'Data-driven profitability and pricing decisions',
            'Clear and measurable KPI reports for managers'
          ]
        },
        studio: {
          title: 'We Transform Visual and Listing Processes',
          description: 'We increase sales speed and listing quality by standardizing vehicle images and digital listing preparation processes with AI.',
          items: [
            'AI-powered showroom and background editing',
            'Standard and reliable listing formats',
            'Customer-specific vehicle evaluation experience',
            'Digital vehicle purchase and request collection processes'
          ]
        },
        redact: {
          title: 'We Provide Privacy and Visual Security',
          description: 'We offer AI-based security layers that ensure privacy, content verification and regulatory compliance on vehicle images.',
          items: [
            'Automatic license plate and face hiding',
            'Detection of AI-generated content',
            'Deepfake and visual manipulation analysis',
            'Reduction of legal and operational risks'
          ]
        },
        ecosystem: {
          title: 'We Connect Processes Together',
          description: 'We integrate processes that progress disconnectedly between different stakeholders with a modular but interoperable digital infrastructure.',
          items: [
            'Shareable evaluation and transaction links',
            'API-based service and data integrations',
            'Compatibility with insurance, banking and telematics systems',
            'Pricing, analysis and decision support components'
          ]
        },
        experience: {
          title: 'We Strengthen User Experience',
          description: 'We design all our solutions with a focus on operational teams working in the field and end-user experience.',
          items: [
            'Digital reservation and payment processes',
            'Operation and process management from a single screen',
            'User-friendly and simple interfaces',
            'Measurable and trackable customer satisfaction'
          ]
        },
        future: {
          title: 'We Shape the Future of the Sector',
          description: 'DriveUp builds not only today\'s needs but also tomorrow\'s sector. We develop solutions on a global scale starting from Turkey.',
          items: [
            'Data-driven decision-making culture',
            'IoT and smart fleet infrastructures',
            'Sectoral transformation with AI',
            'Globally scalable solutions'
          ]
        }
      },
      howWeDo: {
        title: 'How We Do It?',
        subtitle: 'We develop scalable solutions by combining our operational knowledge in fleet management and car rental sector with strong software architecture, AI technologies and real field data.',
        description: 'We bring each product to life with a measurable and sustainable approach that centers on real problems in the field.',
        fieldExperience: {
          title: 'We Start with Field Experience',
          description: 'We design our solutions not at the desk, but according to needs arising from within operations.',
          items: [
            'Rental and insurance process analysis',
            'Manual workload detection',
            'Real user scenarios',
            'Solutions with field relevance'
          ]
        },
        modular: {
          title: 'Modular Software Architecture',
          description: 'All DriveUp products are developed with a modular, API-first and growth-oriented architecture.',
          items: [
            'Independent and integrated modules',
            'Expandable structure according to need',
            'Cloud-based high performance',
            'Scalable technology stack'
          ]
        },
        aiData: {
          title: 'We Feed AI with Data',
          description: 'We run AI not theoretically, but with real market and operational data.',
          items: [
            'Models trained with market data',
            'Optimized visual analysis',
            'Auditable AI outputs',
            'Decision support systems'
          ]
        },
        security: {
          title: 'Security and Privacy',
          description: 'We treat privacy in photo, customer and vehicle data as a fundamental principle.',
          items: [
            'Automatic visual privacy',
            'Sensitive data protection layers',
            'Corporate data processing standards',
            'Security-focused system core'
          ]
        },
        ux: {
          title: 'User Experience Focused',
          description: 'We offer advanced technology with interfaces that teams in the field can easily use.',
          items: [
            'Simplified complex processes',
            'Minimum training need',
            'Accelerated field operations',
            'Technology that doesn\'t tire users'
          ]
        },
        continuous: {
          title: 'Continuous Development and Measurement',
          description: 'DriveUp solutions are not static, they are systems that live with data and continuously grow.',
          items: [
            'Regular feedback analysis',
            'Living and updating products',
            'Development with customers',
            'Long-term digital business partnership'
          ]
        }
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
      partners: {
        title: 'Business Partnerships',
        description: 'Our platform offers a scalable and sustainable collaboration model where all stakeholders in the automotive and mobility sector can create value together. We build digital transformation together through a broad partnership structure extending from fleet management to insurance and service networks, from galleries to vehicle buying and selling professionals.',
        subtitle: 'Target Business Partner Categories',
        categories: [
          {
            title: 'Automotive Parts and Equipment Suppliers',
            description: 'Companies providing spare parts, equipment, and technological solutions needed in maintenance and repair processes.',
            icon: Cog,
            color: 'text-blue-600',
            benefits: ['Access to a wide customer and service network across Turkey', 'Digital ordering, tracking, and demand management infrastructure', 'Direct integration with corporate fleet and service demands']
          },
          {
            title: 'Mobility and Short-Term Rental Operators',
            description: 'Businesses offering car sharing, short-term rental, and innovative mobility solutions.',
            icon: Zap,
            color: 'text-purple-600',
            benefits: ['Increased visibility through digital platforms', 'Data support to increase fleet occupancy rates', 'Centralized digital management of operational processes']
          },
          {
            title: 'Fleet Management and Brokerage Services (Fleet Brokers)',
            description: 'Professional companies that optimize fleet operations and mediate in rental and purchasing processes.',
            icon: Users,
            color: 'text-green-600',
            benefits: ['Access to a wide B2B customer network', 'Advanced reporting and analytics tools', 'Ability to manage customer and operational processes from a single platform']
          },
          {
            title: 'Corporate Fleet Management Companies',
            description: 'Businesses that manage their own vehicle fleet or customer fleets end-to-end.',
            icon: Shield,
            color: 'text-orange-600',
            benefits: ['Digital fleet tracking and operations management', 'Increased efficiency in maintenance, damage, and usage processes', 'Cost optimization and process transparency']
          },
          {
            title: 'Auto Galleries and Authorized / Unauthorized Sellers',
            description: 'Galleries and professional sellers engaged in vehicle buying, selling, and inventory management.',
            icon: Store,
            color: 'text-pink-600',
            benefits: ['AI-powered vehicle valuation infrastructure', 'Standardized listing and visual quality', 'Sales speed, pricing, and inventory risk analysis', 'Digital vehicle purchase requests and offer collection']
          },
          {
            title: 'Vehicle Purchase Collectors and Commercial Purchase Professionals',
            description: 'Professional purchase organizations that conduct high-volume vehicle purchases on behalf of galleries, platforms, and corporate buyers.',
            icon: ShoppingCart,
            color: 'text-cyan-600',
            benefits: ['Fast vehicle valuation through a single link', 'Price and risk analysis for bulk purchase scenarios', 'Data and visual standards that shorten decision time', 'Scalable and repeatable purchase processes']
          },
          {
            title: 'Damage, Repair and Maintenance Solutions',
            description: 'Technical services and centers that professionally handle vehicle maintenance, repair, and damage processes.',
            icon: Wrench,
            color: 'text-red-600',
            benefits: ['Digital workflow and service demand management', 'Access to corporate customers and damage files', 'Increased visibility at regional and national scale']
          },
          {
            title: 'Service Network Operators and Chains',
            description: 'Service businesses and chain structures with widespread service networks across Turkey.',
            icon: Globe,
            color: 'text-indigo-600',
            benefits: ['Digital growth of the service network', 'Strengthening quality and service standards', 'Process integration and operational efficiency']
          },
          {
            title: 'Technology, Data and Integration Business Partners',
            description: 'Companies providing technology, data, and infrastructure solutions in the automotive, finance, and mobility sectors.',
            icon: Code,
            color: 'text-teal-600',
            benefits: ['API-based integration and joint product development', 'Joint access to corporate customers', 'Long-term technology and revenue partnerships']
          }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        questions: [
          {
            question: 'What exactly does DriveUp do?',
            answer: 'DriveUp is an AI-powered automotive operations platform that brings together vehicle rental, fleet management, insurance, service, gallery, and corporate buying-selling processes under a single digital infrastructure. It digitizes, standardizes, and makes measurable the fragmented manual processes.'
          },
          {
            question: 'Who is DriveUp designed for?',
            answer: 'DriveUp is suitable for corporate fleets, daily and short-term rental companies, auto galleries, vehicle purchase professionals, insurance stakeholders, and service networks. It works scalably from small-scale operations to high-volume corporate structures.'
          },
          {
            question: 'What is the core problem area that DriveUp solves?',
            answer: 'The biggest problem in automotive operations is that processes are fragmented, manual, and difficult to control. DriveUp brings these processes together in a single center, providing visibility, speed, and data-driven decision-making capabilities.'
          },
          {
            question: 'What distinguishes DriveUp from similar software?',
            answer: 'DriveUp is not a tool focused on a single problem; it is a holistic platform that addresses operation, data, visual, security, and valuation layers together. Its most important difference is working with AI-powered decision mechanisms and real field data.'
          },
          {
            question: 'How is artificial intelligence used within DriveUp?',
            answer: 'Artificial intelligence is actively used in many critical points such as vehicle valuation, cost analysis, sales speed prediction, image editing, license plate and face masking, visual manipulation detection, and risk analysis.'
          },
          {
            question: 'How does the vehicle valuation process work?',
            answer: 'Vehicle valuation is done by evaluating market data, vehicle features, usage history, visual analysis, and risk parameters together. The goal is not to show a single price; it is to provide a reliable, transparent, and decision-supportive valuation.'
          },
          {
            question: 'How do galleries and vehicle purchase professionals benefit from DriveUp?',
            answer: 'Galleries and purchase professionals can receive vehicle valuations through a single link, see sales speed and price risks, and conduct faster and more reliable buying-selling by standardizing visuals.'
          },
          {
            question: 'How is insurance and KVKK compliance ensured?',
            answer: 'Vehicle images are automatically analyzed; license plate and face masking are applied, images are encrypted, and AI-generated or manipulated content is detected. This minimizes legal and operational risks.'
          },
          {
            question: 'Is DriveUp suitable for large-scale operations?',
            answer: 'Yes. DriveUp is designed to support high-volume fleet, service, and buying-selling operations thanks to its API-based architecture and modular structure.'
          },
          {
            question: 'Can the platform work integrated with different systems?',
            answer: 'DriveUp offers an API-first architecture that can work integrated with insurance, banking, telematics, payment, and third-party software. It can work together without changing your existing systems.'
          },
          {
            question: 'How does DriveUp scale?',
            answer: 'The platform is designed to grow without performance loss as the number of customers, vehicles, or transaction volume increases. Thanks to the modular structure, only the required functions can be activated.'
          },
          {
            question: 'Which markets does DriveUp focus on?',
            answer: 'DriveUp was born from real operational needs in the Turkish automotive market and has been developed based on European Union software, data security, and compliance standards. It is suitable for both local and international markets.'
          },
          {
            question: 'How long does it take to start working with DriveUp?',
            answer: 'DriveUp solutions can be quickly deployed according to needs analysis. Thanks to the cloud-based infrastructure, installation processes are kept to a minimum, and teams can start using the platform in a short time.'
          }
        ]
      },
      contact: {
        title: 'Ready to Shape the Future of Car Rental?',
        description: 'Whether you are a business looking for a single product solution or a large company wanting full ecosystem integration, we develop customized solutions for you.',
        partners: 'Partner With Us',
        page: {
          heroTitle: 'Contact Us',
          heroSubtitle: 'Contact us to learn more about our fleet management software, request a demo, or get technical support.',
          formTitle: 'Get in Touch',
          formSubtitle: 'You can contact us by filling out the form below. We will get back to you as soon as possible.',
          formSubmitted: 'Your Message Has Been Sent!',
          formSubmittedMessage: 'We will get back to you as soon as possible.',
          labels: {
            name: 'Full Name',
            email: 'Email',
            company: 'Company',
            phone: 'Phone',
            service: 'Service of Interest',
            message: 'Message',
            required: '*',
            selectService: 'Select a service',
            namePlaceholder: 'Your first and last name',
            emailPlaceholder: 'example@email.com',
            companyPlaceholder: 'Your company name',
            phonePlaceholder: '+1 (555) 123-4567',
            messagePlaceholder: 'Write your message here...',
            submit: 'Send Message'
          },
          contactInfoTitle: 'Contact Information',
          phone: {
            title: 'Phone',
            number: '+905524150255',
            hours: 'Monday - Friday: 09:00 - 18:00'
          },
          email: {
            title: 'Contact via Email',
            address: 'info@driveuptr.com',
            support: '24/7 email support'
          },
          address: {
            title: 'Headquarters',
            line1: 'DriveUp OÜ Viru väljak 2, 3. korrus',
            line2: 'Kesklinna linnaosa, Harju maakond',
            line3: 'Tallinn 10111, Estonia'
          },
          services: [
            'DriveUpFixer - Maintenance & Repair',
            'DriveUpPro - Fleet Management',
            'DriveUpManager - Operations Management',
            'DriveUpStudio - AI Visualization',
            'DriveUpRedact - Data Security',
            'DriveUpDesk - Support Center',
            'General Consulting',
            'Technical Support',
            'Other'
          ],
          cta: {
            title: 'Get Started Now',
            subtitle: 'Contact us to learn more about our fleet management software or request a demo.',
            callButton: 'Call Now',
            emailButton: 'Send Email'
          }
        }
      },
      blog: {
        title: 'Blog',
        subtitle: 'Latest developments, trends and expert opinions in the car rental and fleet management sector.',
        featured: {
          category: 'Featured',
          date: '2025-12-20',
          readTime: '9 min',
          title: 'AI-Powered Vehicle Evaluation: Accurate Pricing with Trained Models',
          excerpt: 'DriveUp\'s AI-powered vehicle evaluation system calculates vehicles\' real market value objectively using deep learning models trained on millions of vehicle data.'
        },
        recentPosts: 'Recent Posts',
        readMore: 'Read More',
        categories: {
          title: 'Categories',
          subtitle: 'Filter articles by your interests',
          technology: 'Technology',
          fleet: 'Fleet Management',
          analytics: 'Analytics',
          sustainability: 'Sustainability'
        },
        newsletter: {
          title: 'Subscribe to Our Newsletter',
          subtitle: 'Get our latest articles and industry news via email.',
          placeholder: 'Your email address',
          button: 'Subscribe'
        },
        post1: {
          title: 'Digital Transformation in Car Rental Sector',
          excerpt: 'Detailed information about the importance and benefits of digital transformation in the car rental sector. How can you increase operational efficiency with modern technology solutions?',
          category: 'Technology'
        },
        post2: {
          title: 'Artificial Intelligence in Fleet Management',
          excerpt: 'How AI technologies are used in fleet management and their advantages. Cost optimization and operational efficiency with AI-powered solutions.',
          category: 'AI'
        },
        post3: {
          title: 'Customer Experience Optimization',
          excerpt: 'How can you optimize customer experience in the car rental process? Strategies to increase customer satisfaction with digital solutions.',
          category: 'UX'
        },
        post4: {
          title: 'Sustainable Fleet Management',
          excerpt: 'Environmentally friendly vehicles and sustainable fleet management strategies. Protect the environment and reduce costs with green technologies.',
          category: 'Sustainability'
        }
      },
      footer: {
        tagline: 'Transforming the car rental industry with technology',
        copyright: '© 2025 DriveUP Technologies. All rights reserved.',
        description: 'Manage your vehicle, maintenance, repair, and rental processes on a single platform with fleet management software. Optimize your operations with modern technology.',
        quickLinks: 'Quick Links',
        products: 'Our Products',
        services: 'Our Services',
        newsletter: {
          title: 'Stay Updated',
          subtitle: 'Join our email list for the latest information about our fleet management software and industry news.',
          placeholder: 'Your email address',
          button: 'Subscribe'
        },
        legal: {
          privacy: 'Privacy Policy',
          terms: 'Terms of Use',
          cookies: 'Cookie Policy',
          kvkk: 'KVKK',
          gdpr: 'GDPR'
        },
        quickLinksItems: [
          { name: 'Home', page: 'home' },
          { name: 'About Us', page: 'about' },
          { name: 'Products', page: 'products' },
          { name: 'Services', page: 'services' },
          { name: 'What We Do', page: 'what-we-do' },
          { name: 'Technology', page: 'technology' },
          { name: 'Partnerships', page: 'partners' },
          { name: 'FAQ', page: 'faq' },
          { name: 'Blog', page: 'blog' },
          { name: 'Contact', page: 'contact' }
        ],
        productsItems: [
          { name: 'DriveUpFixer', description: 'Maintenance & Repair' },
          { name: 'DriveUpPro', description: 'Fleet Management' },
          { name: 'DriveUpManager', description: 'Operations Management' },
          { name: 'DriveUpStudio', description: 'AI Visualization' },
          { name: 'DriveUpRedact', description: 'Data Security' },
          { name: 'DriveUpDesk', description: 'Support Center' }
        ],
        servicesItems: [
          'Fleet Management',
          'Vehicle Tracking',
          'Maintenance Management',
          'Operations Management',
          'Reporting',
          'Technical Support'
        ]
      },
      gdpr: {
        title: 'GDPR - Data Protection Policy',
        subtitle: 'As DriveUp, the protection of your personal data is our priority.',
        sections: {
          dataController: {
            title: 'Data Controller',
            content: 'The data controller responsible for processing your personal data:',
            companyName: 'DriveUp Technologies OÜ',
            address: 'DriveUp OÜ Viru väljak 2, 3. korrus, Kesklinna linnaosa, Harju maakond, Tallinn 10111, Estonia',
            email: 'info@driveuptr.com'
          },
          dataTypes: {
            title: 'Types of Personal Data Collected',
            content: 'Through our platform, we collect the following personal data:',
            items: [
              'Contact information (name, surname, email, phone)',
              'Vehicle images and related data',
              'Platform usage data',
              'Technical data (IP address, browser information)'
            ]
          },
          processing: {
            title: 'Data Processing Purposes',
            content: 'Your personal data is processed for the following purposes:',
            items: [
              'Provision of platform services',
              'Customer support and communication',
              'Fulfillment of legal obligations',
              'Security and fraud prevention',
              'Ensuring KVKK and GDPR compliance'
            ]
          },
          userRights: {
            title: 'Your Rights as Data Subject',
            content: 'Under GDPR, you have the following rights:',
            items: [
              'Right to information and access',
              'Right to rectification',
              'Right to erasure',
              'Right to object',
              'Right to data portability'
            ],
            contactTitle: 'Exercising Your Rights',
            contactInfo: 'To exercise your rights above, you can send an email to info@driveuptr.com.'
          },
          dataSecurity: {
            title: 'Data Security',
            content: 'For the security of your personal data, we implement SSL/TLS encryption, access control, regular security audits, and GDPR-compliant data processing procedures. Automatic license plate and face masking technologies are used in vehicle images.'
          },
          contact: {
            title: 'Contact',
            content: 'For questions about your rights under GDPR or our data processing practices:',
            emailLabel: 'Email',
            email: 'info@driveuptr.com',
            addressLabel: 'Address',
            address: 'DriveUp OÜ Viru väljak 2, 3. korrus, Kesklinna linnaosa, Harju maakond, Tallinn 10111, Estonia'
          }
        }
      },
      about: {
        title: 'About Us',
        content: {
          p1: 'DriveUp, established in Estonia in 2024, is an end-to-end automotive technology platform built on European Union software and data security standards, based on real field experience in the Turkish automotive market. Our goal is to unite scattered and manually executed operations in the automotive sector under a single digital backbone, enabling companies to work more efficiently, transparently, and scalably.',
          p2: 'The automotive ecosystem hosts many interconnected operational processes simultaneously, such as vehicle rental, fleet management, maintenance-repair, sales, visualization, data security, and customer management. DriveUp offers these processes under an integrated, modular, and interoperable structure instead of disconnected software. By combining local operational knowledge with global technology and governance standards, we develop sustainable solutions for both the Turkish market and international scale.',
          p3: 'The DriveUp ecosystem consists of products shaped according to different business models and needs. DriveUp Manager enables short-term and daily car rental companies to manage operations, reservations, and contract processes through a centralized system. DriveUp Pro offers fleet tracking, asset management, and staff usage analytics for corporate companies with owned vehicles. DriveUp Fixer digitizes maintenance, damage, repair, and service provider processes end-to-end, providing operational control and cost transparency.',
          p4: 'DriveUp Studio, positioned at the visual and data security layer, transforms vehicle photos into professional showroom quality with AI-powered tools; while DriveUp Redact provides KVKK and GDPR-compliant visual data security with license plate hiding, face blurring, and content verification solutions. DriveUp Desk provides support center, call management, and customer request tracking infrastructure that works integrated with all DriveUp products.',
          p5: 'The DriveUp platform enables objective and data-driven calculation of vehicles\' real market values through AI-powered vehicle evaluation and pricing systems. Thanks to solutions like Evaluation Link, galleries and vehicle purchase companies can interact directly with their customers; they can accelerate purchase and sales operations by automating evaluation processes.',
          p6: 'All DriveUp products are developed with an API-first, cloud-based, and scalable architecture. This approach makes DriveUp not just software that meets today\'s needs; it becomes a continuously evolving digital platform that can adapt to the future of the automotive sector. DriveUp brings together all stakeholders of the automotive ecosystem on the same data infrastructure with a holistic perspective instead of fragmented solutions.'
        },
        servicesTitle: 'Service Details',
        services: [
          {
            name: 'Fleet Management',
            desc: 'Enables you to manage the entire lifecycle of corporate vehicle fleets from a single center. Vehicle inventory, usage status, mileage, fuel, and cost data are tracked in real-time. Fleet efficiency is increased and control losses are prevented through operational performance analyses and reporting.',
            kimler: 'Corporate fleets, companies using operational vehicles',
            kazanim: 'Transparency, cost control, data-driven decision making'
          },
          {
            name: 'Owned Vehicle Management',
            desc: 'Enables regular management of assigning company-owned vehicles to personnel, usage tracking, and maintenance processes. Operational risks and unnecessary costs are reduced through personnel-based usage analyses.',
            kimler: 'Companies with owned vehicle fleets',
            kazanim: 'Asset control, responsibility clarity, operational discipline'
          },
          {
            name: 'Vehicle Tracking Systems',
            desc: 'Vehicle location, speed, and route information are tracked in real-time through GPS integration. Operational optimization and safe driving policies are supported by analyzing historical driving data.',
            kimler: 'Companies using vehicles in active field operations',
            kazanim: 'Operational control, route optimization, security'
          },
          {
            name: 'Maintenance and Repair Solutions',
            desc: 'Digitally plans and tracks vehicles\' periodic maintenance, damage, and repair processes. Maintenance requests, approval processes, and costs are controlled end-to-end through service provider integrations.',
            kimler: 'Rental companies, fleet owners',
            kazanim: 'Cost reduction, maintenance continuity, service coordination'
          },
          {
            name: 'Daily Vehicle Rental',
            desc: 'Brings together reservation, availability, and contract processes under a centralized structure for short-term and daily vehicle rental operations. Offers faster and more efficient rental processes by reducing operational errors.',
            kimler: 'Daily and short-term rental companies',
            kazanim: 'Operation speed, customer satisfaction, revenue optimization'
          },
          {
            name: 'Solutions for Rental Companies',
            desc: 'Provides operation, billing, and customer management infrastructure specially developed for fleet rental companies. Enables companies to work with flexible configurations suitable for their own business models.',
            kimler: 'Corporate fleet rental companies',
            kazanim: 'Operational flexibility, financial control, scalability'
          },
          {
            name: 'Call Center and Support Applications',
            desc: 'Provides an integrated support infrastructure that enables management of all customer requests from a single center. Calls, requests, and support processes are recorded, and performance and resolution times are measured.',
            kimler: 'Companies managing multi-channel customer communication',
            kazanim: 'Service quality, measurable support performance'
          },
          {
            name: 'Vehicle Visualization',
            desc: 'Transforms vehicle photos into professional showroom quality with AI-powered visual processing technologies. Accelerates sales and marketing processes with bulk visual editing and standard listing formats.',
            kimler: 'Galleries, dealers, fleet companies',
            kazanim: 'Faster listing publication, higher conversion'
          },
          {
            name: 'Image Security and Privacy',
            desc: 'Applies KVKK and GDPR-compliant privacy operations such as license plate and face hiding on vehicle images. Ensures secure processing and storage of visual data.',
            kimler: 'Galleries, insurance and corporate companies',
            kazanim: 'Reduction of legal risks, data security'
          },
          {
            name: 'Vehicle Evaluation',
            desc: 'Calculates vehicles\' current and objective market value using AI algorithms and market data. Supports purchase-sale decisions with comparable analyses and price ranges.',
            kimler: 'Galleries, vehicle purchase companies, fleets',
            kazanim: 'Accurate pricing, fast decision making'
          }
        ],
        labels: {
          kimler: 'For:',
          kazanim: 'Benefits:'
        }
      },
      services: {
        fleetManagement: {
          title: 'Fleet Management',
          subtitle: 'Manage your vehicle fleet efficiently and optimize your operational processes.',
          whatIs: {
            title: 'What is Fleet Management Software?',
            description: 'Fleet management software is a comprehensive solution that enables you to manage all operational processes of your vehicle fleet digitally. It brings together all processes such as vehicle tracking, maintenance planning, fuel management, driver performance and cost analysis on a single platform.',
            realTime: {
              title: 'Real-Time Tracking',
              description: 'Track your vehicles\' location, speed and status instantly.'
            },
            maintenance: {
              title: 'Maintenance Planning',
              description: 'Make automatic maintenance reminders and service planning.'
            }
          },
          benefits: {
            title: 'Operational Benefits',
            efficiency: {
              title: '25% Efficiency Increase',
              description: 'Increase your efficiency by optimizing your operational processes.'
            },
            cost: {
              title: '30% Cost Reduction',
              description: 'Significantly reduce your fuel and maintenance costs.'
            },
            security: {
              title: '40% Security Increase',
              description: 'Increase security by monitoring driver behaviors.'
            }
          },
          efficiency: {
            title: 'Efficiency Increase',
            items: [
              {
                title: 'Automatic Route Optimization',
                description: 'Minimize distance and time with AI-powered route planning.'
              },
              {
                title: 'Smart Maintenance Management',
                description: 'Reduce downtime and increase vehicle availability with predictive maintenance.'
              },
              {
                title: 'Real-Time Analytics',
                description: 'Accelerate your decision-making processes with detailed reports and analytics.'
              }
            ]
          }
        }
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