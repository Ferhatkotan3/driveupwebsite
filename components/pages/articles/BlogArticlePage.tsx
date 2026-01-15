import React, { useEffect } from 'react';
import { Button } from '../../ui/button';
import { ArrowLeft, Calendar, Clock, User, ChevronRight, Home } from 'lucide-react';

interface BlogArticlePageProps {
  articleId: string;
  onBack: () => void;
  onContactClick?: () => void;
  onNavigateToArticle?: (articleId: string) => void;
}

const blogArticles: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: string[];
}> = {
  '2025-arac-kiralama-sektorunun-gelecegi': {
    title: '2025 Yılında Araç Kiralama Sektörünün Geleceği',
    category: 'Öne Çıkan',
    date: '2025-12-15',
    readTime: '8 dk',
    author: 'DriveUp Ekibi',
    content: [
      'Araç kiralama sektörü, 2025 yılında önemli dönüşümler yaşamaya devam ediyor. Dijitalleşme, yapay zeka entegrasyonları ve sürdürülebilir mobilite çözümleri, sektörün geleceğini şekillendiren temel faktörler olarak öne çıkıyor.',
      'Teknolojik gelişmeler, müşteri deneyimini optimize etmek ve operasyonel verimliliği artırmak için kullanılıyor. Yapay zeka destekli fiyatlama sistemleri, otomatik rezervasyon süreçleri ve gerçek zamanlı araç takibi gibi çözümler, sektörün dijital dönüşümünü hızlandırıyor.',
      'Sürdürülebilirlik odaklı yaklaşımlar, elektrikli ve hibrit araçların filolara entegrasyonunu artırıyor. Müşteriler, çevre dostu seçenekleri tercih ederken, kiralama şirketleri de karbon ayak izlerini azaltmak için stratejik adımlar atıyor.',
      'Mobilite-as-a-Service (MaaS) modelleri, geleneksel kiralama yaklaşımlarını dönüştürüyor. Entegre platformlar, araç kiralama, toplu taşıma ve paylaşımlı mobilite çözümlerini tek bir arayüzde birleştiriyor.',
      '2025 yılında, sektörün başarılı olması için teknoloji yatırımları, müşteri odaklı yaklaşımlar ve sürdürülebilir operasyonlar kritik öneme sahip. DriveUp, bu dönüşümde lider bir rol oynamaya devam ediyor.'
    ]
  },
  'arac-kiralama-sektorunde-dijital-donusum': {
    title: 'Araç Kiralama Sektöründe Dijital Dönüşüm',
    category: 'Teknoloji',
    date: '2025-12-10',
    readTime: '5 dk',
    author: 'DriveUp Ekibi',
    content: [
      'Araç kiralama sektöründe dijital dönüşüm, operasyonel verimliliği artırmak ve müşteri deneyimini iyileştirmek için kritik bir öneme sahip. Modern teknoloji çözümleri, manuel süreçleri otomatikleştirerek işletmelerin rekabet gücünü artırıyor.',
      'Bulut tabanlı yönetim sistemleri, araç envanteri, rezervasyon ve faturalama süreçlerini tek bir platformda birleştiriyor. Bu entegrasyon, operasyonel hataları azaltırken, veri analitiği ile karar verme süreçlerini destekliyor.',
      'Mobil uygulamalar, müşterilerin araç rezervasyonu yapmasını, sözleşme imzalamasını ve araç teslim almasını kolaylaştırıyor. Self-service çözümler, müşteri memnuniyetini artırırken, operasyonel maliyetleri düşürüyor.',
      'Yapay zeka ve makine öğrenmesi algoritmaları, dinamik fiyatlama, talep tahmini ve rota optimizasyonu gibi alanlarda kullanılıyor. Bu teknolojiler, işletmelerin daha akıllı kararlar almasını sağlıyor.',
      'Dijital dönüşüm, sadece teknoloji entegrasyonu değil, aynı zamanda iş süreçlerinin yeniden tasarlanması anlamına geliyor. Başarılı bir dönüşüm için, teknoloji yatırımlarının yanı sıra, çalışan eğitimi ve organizasyonel değişim de gereklidir.'
    ]
  },
  'filo-yonetiminde-yapay-zeka': {
    title: 'Filo Yönetiminde Yapay Zeka',
    category: 'AI',
    date: '2025-12-05',
    readTime: '7 dk',
    author: 'DriveUp Ekibi',
    content: [
      'Yapay zeka teknolojileri, filo yönetiminde devrim yaratıyor. AI destekli çözümler, araç bakım planlaması, yakıt optimizasyonu ve sürücü davranış analizi gibi alanlarda önemli faydalar sağlıyor.',
      'Öngörülü bakım sistemleri, AI algoritmaları kullanarak araç arızalarını önceden tespit ediyor. Bu sayede, beklenmedik arızaların neden olduğu maliyetler ve operasyonel kesintiler azaltılıyor.',
      'Yakıt optimizasyonu için AI, rota analizi, sürüş davranışı ve trafik verilerini birleştirerek en verimli rotaları öneriyor. Bu optimizasyon, yakıt maliyetlerini önemli ölçüde düşürüyor.',
      'Sürücü davranış analizi, güvenlik skorları ve performans metrikleri üretiyor. Bu veriler, eğitim programları ve güvenlik politikalarının geliştirilmesinde kullanılıyor.',
      'AI destekli filo yönetimi, sadece maliyet tasarrufu sağlamakla kalmıyor, aynı zamanda operasyonel verimliliği artırarak müşteri memnuniyetini de yükseltiyor. Gelecekte, AI\'nın filo yönetimindeki rolü daha da artacak.'
    ]
  },
  'musteri-deneyimi-optimizasyonu': {
    title: 'Müşteri Deneyimi Optimizasyonu',
    category: 'UX',
    date: '2025-12-01',
    readTime: '4 dk',
    author: 'DriveUp Ekibi',
    content: [
      'Araç kiralama sürecinde müşteri deneyimi, işletmelerin başarısında kritik bir rol oynuyor. Dijital çözümler, müşteri deneyimini optimize etmek için güçlü araçlar sunuyor.',
      'Kişiselleştirilmiş öneriler, müşteri geçmiş verilerini analiz ederek en uygun araç ve fiyat seçeneklerini sunuyor. Bu yaklaşım, müşteri memnuniyetini artırırken, dönüşüm oranlarını da yükseltiyor.',
      'Hızlı ve kolay rezervasyon süreçleri, müşterilerin zamanını değerli kılıyor. Mobil uygulamalar ve web platformları, birkaç tıklama ile rezervasyon yapılmasını mümkün kılıyor.',
      'Şeffaf fiyatlandırma ve anında onay süreçleri, müşteri güvenini artırıyor. Gerçek zamanlı araç durumu bilgisi ve esnek iptal politikaları, müşteri deneyimini olumlu yönde etkiliyor.',
      'Müşteri geri bildirimleri ve şikayet yönetimi sistemleri, sürekli iyileştirme için değerli veriler sağlıyor. Bu veriler, hizmet kalitesinin artırılması ve müşteri beklentilerinin karşılanması için kullanılıyor.'
    ]
  },
  'surdurulebilir-filo-yonetimi': {
    title: 'Sürdürülebilir Filo Yönetimi',
    category: 'Sürdürülebilirlik',
    date: '2025-11-28',
    readTime: '6 dk',
    author: 'DriveUp Ekibi',
    content: [
      'Sürdürülebilir filo yönetimi, çevresel etkileri azaltırken operasyonel verimliliği artıran bir yaklaşımdır. Yeşil teknolojiler ve çevre dostu uygulamalar, modern filo yönetiminin ayrılmaz bir parçası haline geliyor.',
      'Elektrikli ve hibrit araçların filolara entegrasyonu, karbon ayak izini önemli ölçüde azaltıyor. Şarj altyapısı yatırımları ve akıllı şarj yönetimi sistemleri, bu geçişi kolaylaştırıyor.',
      'Yakıt verimliliği optimizasyonu, hem çevresel hem de ekonomik faydalar sağlıyor. Rota optimizasyonu, sürüş davranışı eğitimleri ve araç bakım programları, yakıt tüketimini düşürüyor.',
      'Karbon ayak izi takibi ve raporlama, sürdürülebilirlik hedeflerinin izlenmesini sağlıyor. Bu veriler, çevresel etkilerin azaltılması için stratejik kararlar alınmasında kullanılıyor.',
      'Sürdürülebilir filo yönetimi, sadece çevresel sorumluluk değil, aynı zamanda uzun vadeli ekonomik faydalar da sağlıyor. Müşteriler, çevre dostu seçenekleri tercih ederken, işletmeler de rekabet avantajı kazanıyor.'
    ]
  },
  'ai-destekli-arac-degerlendirme': {
    title: 'Yapay Zeka Destekli Araç Değerlendirme: Eğitilmiş Modeller ile Doğru Fiyatlama',
    category: 'AI',
    date: '2025-12-20',
    readTime: '9 dk',
    author: 'DriveUp AI Ekibi',
    content: [
      'DriveUp\'ın yapay zeka destekli araç değerlendirme sistemi, milyonlarca araç verisi üzerinde eğitilmiş derin öğrenme modelleri kullanarak, araçların gerçek piyasa değerini objektif ve veriye dayalı şekilde hesaplıyor. Bu sistem, geleneksel değerlendirme yöntemlerinin ötesine geçerek, dinamik piyasa koşullarını ve gerçek zamanlı trendleri analiz ediyor.',
      'Eğitilmiş modellerimiz, araç markası, model, yaş, kilometre, hasar geçmişi, bakım kayıtları ve piyasa dinamikleri gibi yüzlerce faktörü aynı anda değerlendiriyor. Bu kapsamlı analiz, sadece araç özelliklerini değil, aynı zamanda bölgesel pazar farklılıklarını, mevsimsel trendleri ve ekonomik göstergeleri de hesaba katıyor.',
      'Makine öğrenmesi algoritmalarımız, sürekli olarak yeni verilerle beslenerek kendini geliştiriyor. Her değerlendirme, modelin doğruluğunu artıran bir öğrenme fırsatı sunuyor. Bu sayede, sistem zaman içinde daha da hassas ve güvenilir hale geliyor.',
      'Değerlendirme Linki özelliği, galeriler ve araç alım şirketleri için özel olarak tasarlandı. Müşteriler, araç bilgilerini girerek anında profesyonel bir değerlendirme raporu alabiliyor. Bu rapor, sadece fiyat tahmini değil, aynı zamanda detaylı analiz, emsal karşılaştırmaları ve piyasa öngörüleri de içeriyor.',
      'Yapay zeka destekli değerlendirme sistemi, insan hatalarını ve önyargılarını ortadan kaldırarak, daha adil ve şeffaf bir fiyatlama süreci sağlıyor. Bu teknoloji, hem alıcılar hem de satıcılar için güvenilir bir referans noktası oluşturuyor.'
    ]
  },
  'degerlendirme-linki-olusturma': {
    title: 'Değerlendirme Linki Oluşturma: Müşterilerinizle Doğrudan Etkileşim Kurun',
    category: 'Teknoloji',
    date: '2025-12-18',
    readTime: '6 dk',
    author: 'DriveUp Ekibi',
    content: [
      'DriveUp Değerlendirme Linki, galeriler ve araç alım şirketlerinin müşterileriyle doğrudan etkileşime geçmesini sağlayan yenilikçi bir çözümdür. Bu özellik, araç değerlendirme süreçlerini tamamen dijitalleştirerek, hem zaman tasarrufu hem de müşteri memnuniyeti sağlıyor.',
      'Değerlendirme linki oluşturma işlemi oldukça basittir. Galeri veya alım şirketi, DriveUp platformu üzerinden özel bir değerlendirme linki oluşturur. Bu link, müşteriye e-posta, SMS veya WhatsApp üzerinden gönderilir. Müşteri, linke tıklayarak araç bilgilerini girer ve anında profesyonel bir değerlendirme raporu alır.',
      'Sistem, yapay zeka destekli algoritmalar kullanarak, girilen bilgilere göre araç değerini hesaplar. Değerlendirme raporu, sadece fiyat tahmini değil, aynı zamanda detaylı analiz, piyasa karşılaştırmaları ve öneriler de içerir. Bu kapsamlı rapor, müşterilerin karar verme sürecini hızlandırır.',
      'Değerlendirme linkleri, markalı ve özelleştirilebilir bir şekilde tasarlanmıştır. Her galeri veya şirket, kendi logosu, renkleri ve iletişim bilgileri ile linki kişiselleştirebilir. Bu sayede, müşteri deneyimi marka kimliği ile uyumlu hale gelir.',
      'Link takip sistemi, hangi müşterilerin değerlendirme yaptığını, ne zaman yaptığını ve sonuçlarını takip etmenizi sağlar. Bu veriler, satış süreçlerini optimize etmek ve müşteri ilişkilerini güçlendirmek için kullanılabilir. Ayrıca, otomatik takip e-postaları ve hatırlatmalar ile dönüşüm oranları artırılabilir.'
    ]
  },
  'egitilmis-ai-modelleri-ve-oneriler': {
    title: 'Eğitilmiş AI Modelleri ve Akıllı Öneriler: DriveUp\'ın Yapay Zeka Altyapısı',
    category: 'AI',
    date: '2025-12-22',
    readTime: '10 dk',
    author: 'DriveUp AI Ekibi',
    content: [
      'DriveUp\'ın yapay zeka altyapısı, Türkiye otomotiv pazarının gerçek verileri üzerinde eğitilmiş özel modellerden oluşuyor. Bu modeller, sadece genel algoritmalar değil, sektöre özgü öğrenme deneyimine sahip, sürekli gelişen sistemlerdir.',
      'Eğitim sürecimiz, milyonlarca araç satış verisi, piyasa hareketleri, ekonomik göstergeler ve sektörel trendler üzerinde gerçekleştiriliyor. Bu kapsamlı veri seti, modellerimizin Türkiye pazarının dinamiklerini derinlemesine anlamasını sağlıyor. Transfer learning ve fine-tuning teknikleri kullanılarak, global AI modelleri yerel pazar koşullarına adapte ediliyor.',
      'Araç değerlendirme modellerimiz, sadece fiyat tahmini yapmakla kalmıyor, aynı zamanda alım-satım önerileri de sunuyor. Sistem, piyasa koşullarını analiz ederek, "şu anda satmak için ideal zaman" veya "beklemeniz önerilir" gibi stratejik öneriler üretiyor. Bu öneriler, hem bireysel müşteriler hem de kurumsal filo yöneticileri için değerli rehberlik sağlıyor.',
      'Rota optimizasyonu modellerimiz, trafik verileri, yakıt fiyatları, hava durumu ve tarihsel verileri birleştirerek en verimli rotaları öneriyor. Bu sistem, sadece mesafe değil, aynı zamanda zaman, maliyet ve çevresel etki faktörlerini de hesaba katıyor. Eğitilmiş modeller, gerçek zamanlı verilerle sürekli güncellenerek, önerilerin doğruluğunu artırıyor.',
      'Bakım öngörü modelleri, araç sensör verileri, kullanım geçmişi ve arıza kayıtlarını analiz ederek, olası arızaları önceden tespit ediyor. Bu öngörülü bakım yaklaşımı, beklenmedik arızaların neden olduğu maliyetleri ve operasyonel kesintileri önemli ölçüde azaltıyor. Sistem, her araç için özelleştirilmiş bakım önerileri sunuyor.',
      'DriveUp\'ın AI modelleri, sürekli öğrenme (continuous learning) prensibi ile çalışıyor. Her yeni veri, modelin performansını artıran bir öğrenme fırsatı sunuyor. A/B testleri ve performans metrikleri ile modeller düzenli olarak değerlendiriliyor ve iyileştiriliyor. Bu yaklaşım, sistemin zaman içinde daha da akıllı ve güvenilir hale gelmesini sağlıyor.'
    ]
  },
  'arac-degerlendirme-linki-nasil-olusturulur': {
    title: 'Araç Değerlendirme Linki Nasıl Oluşturulur? Adım Adım Rehber',
    category: 'Rehber',
    date: '2025-12-25',
    readTime: '5 dk',
    author: 'DriveUp Ekibi',
    content: [
      'DriveUp Değerlendirme Linki oluşturma işlemi, galeriler ve araç alım şirketleri için oldukça basit ve hızlı bir süreçtir. Bu rehber, adım adım link oluşturma ve yönetim sürecini açıklıyor.',
      'İlk adım olarak, DriveUp platformuna giriş yapın ve "Değerlendirme Linki" bölümüne gidin. Burada, yeni bir link oluştur butonuna tıklayarak başlayabilirsiniz. Sistem, size özel bir URL oluşturacaktır.',
      'Link oluştururken, değerlendirme kapsamını belirleyebilirsiniz. Hangi araç kategorileri için değerlendirme yapılacağını, minimum ve maksimum fiyat aralıklarını ve değerlendirme kriterlerini seçebilirsiniz. Bu özelleştirmeler, müşterilerinize daha hedefli hizmet sunmanızı sağlar.',
      'Link tasarımını özelleştirebilirsiniz. Şirket logonuzu, renklerinizi ve iletişim bilgilerinizi ekleyerek, linki marka kimliğinizle uyumlu hale getirebilirsiniz. Bu kişiselleştirme, müşteri güvenini artırır ve marka farkındalığını güçlendirir.',
      'Oluşturduğunuz linki, müşterilerinize e-posta, SMS, WhatsApp veya sosyal medya üzerinden paylaşabilirsiniz. Link, mobil uyumlu olduğu için her cihazdan erişilebilir. Müşteriler, linke tıklayarak araç bilgilerini girer ve anında değerlendirme raporu alır.',
      'Link performansını takip edebilirsiniz. Kaç müşterinin linke tıkladığını, kaç değerlendirme yapıldığını ve sonuçları analiz edebilirsiniz. Bu veriler, satış süreçlerinizi optimize etmek ve müşteri ilişkilerini güçlendirmek için kullanılabilir. Ayrıca, otomatik takip e-postaları ile müşterilerinizi yönlendirebilirsiniz.'
    ]
  }
};

export const BlogArticlePage: React.FC<BlogArticlePageProps> = ({ articleId, onBack, onContactClick, onNavigateToArticle }) => {
  const article = blogArticles[articleId];

  // SEO: Comprehensive meta tags and structured data
  useEffect(() => {
    if (article) {
      const baseUrl = 'https://driveuptr.com';
      const articleUrl = `${baseUrl}/blog/${articleId}`;
      const description = article.content[0]?.substring(0, 160) || article.title;
      
      // Update document title
      document.title = `${article.title} | DriveUp Blog - Araç Değerlendirme ve Filo Yönetimi`;
      
      // Keywords based on article content
      const getKeywords = () => {
        if (articleId.includes('degerlendirme')) {
          return 'araç değerlendirme, yapay zeka araç değerlendirme, AI araç fiyatlandırma, araç değerleme, otomatik araç değerlendirme, DriveUp değerlendirme';
        } else if (articleId.includes('link')) {
          return 'değerlendirme linki, araç değerlendirme linki oluşturma, galeri değerlendirme linki, araç alım linki, DriveUp link';
        } else if (articleId.includes('ai') || articleId.includes('egitilmis')) {
          return 'yapay zeka filo yönetimi, AI modelleri, makine öğrenmesi, derin öğrenme, eğitilmiş modeller, DriveUp AI';
        }
        return 'filo yönetimi, araç kiralama, DriveUp, otomotiv teknolojisi';
      };

      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);

      // Update or create keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', getKeywords());

      // Canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', articleUrl);

      // Open Graph tags
      const updateOrCreateOG = (property: string, content: string) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('property', property);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      };

      updateOrCreateOG('og:type', 'article');
      updateOrCreateOG('og:url', articleUrl);
      updateOrCreateOG('og:title', article.title);
      updateOrCreateOG('og:description', description);
      updateOrCreateOG('og:image', `${baseUrl}/og-blog-${articleId}.jpg`);
      updateOrCreateOG('og:site_name', 'DriveUp');
      updateOrCreateOG('og:locale', 'tr_TR');
      updateOrCreateOG('article:published_time', article.date);
      updateOrCreateOG('article:author', article.author);
      updateOrCreateOG('article:section', article.category);

      // Twitter Card tags
      const updateOrCreateTwitter = (name: string, content: string) => {
        let tag = document.querySelector(`meta[name="${name}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('name', name);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      };

      updateOrCreateTwitter('twitter:card', 'summary_large_image');
      updateOrCreateTwitter('twitter:url', articleUrl);
      updateOrCreateTwitter('twitter:title', article.title);
      updateOrCreateTwitter('twitter:description', description);
      updateOrCreateTwitter('twitter:image', `${baseUrl}/twitter-blog-${articleId}.jpg`);

      // Robots meta
      let robots = document.querySelector('meta[name="robots"]');
      if (!robots) {
        robots = document.createElement('meta');
        robots.setAttribute('name', 'robots');
        document.head.appendChild(robots);
      }
      robots.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

      // Article structured data with FAQ
      const faqItems: any[] = [];
      if (articleId.includes('degerlendirme-linki-nasil')) {
        faqItems.push(
          {
            "@type": "Question",
            "name": "Değerlendirme linki nasıl oluşturulur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DriveUp platformuna giriş yapın, 'Değerlendirme Linki' bölümüne gidin ve yeni link oluştur butonuna tıklayın. Sistem size özel bir URL oluşturacaktır."
            }
          },
          {
            "@type": "Question",
            "name": "Değerlendirme linki ücretsiz mi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DriveUp Değerlendirme Linki özelliği, DriveUp platformu kullanıcıları için mevcuttur. Detaylı bilgi için bizimle iletişime geçin."
            }
          }
        );
      }

      const structuredData: any = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "description": description,
        "image": `${baseUrl}/og-blog-${articleId}.jpg`,
        "author": {
          "@type": "Organization",
          "name": article.author,
          "url": baseUrl
        },
        "publisher": {
          "@type": "Organization",
          "name": "DriveUp Technologies",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`
          }
        },
        "datePublished": article.date,
        "dateModified": article.date,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": articleUrl
        },
        "articleSection": article.category,
        "keywords": getKeywords(),
        "wordCount": article.content.join(' ').split(' ').length,
        "timeRequired": article.readTime
      };

      if (faqItems.length > 0) {
        structuredData.mainEntity = {
          "@type": "FAQPage",
          "mainEntity": faqItems
        };
      }

      // Remove existing structured data script if any
      const existingScript = document.getElementById('blog-structured-data');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement('script');
      script.id = 'blog-structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);

      // Breadcrumbs structured data
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": baseUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": `${baseUrl}/blog`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.title,
            "item": articleUrl
          }
        ]
      };

      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = 'breadcrumb-structured-data';
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
      document.head.appendChild(breadcrumbScript);

      return () => {
        const scriptToRemove = document.getElementById('blog-structured-data');
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
        const breadcrumbToRemove = document.getElementById('breadcrumb-structured-data');
        if (breadcrumbToRemove) {
          breadcrumbToRemove.remove();
        }
      };
    }
  }, [article, articleId]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Makale Bulunamadı</h1>
          <Button onClick={onBack}>Geri Dön</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient pt-24 pb-8">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs for SEO */}
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <a href="/" className="hover:text-[#5A00FF] transition-colors flex items-center">
                    <Home className="h-4 w-4 mr-1" />
                    Ana Sayfa
                  </a>
                </li>
                <li>
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li>
                  <button
                    onClick={onBack}
                    className="hover:text-[#5A00FF] transition-colors"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li className="text-gray-900 dark:text-gray-100 font-medium" aria-current="page">
                  {article.title.length > 40 ? article.title.substring(0, 40) + '...' : article.title}
                </li>
              </ol>
            </nav>

            <Button
              onClick={onBack}
              variant="ghost"
              className="mb-6 text-gray-600 dark:text-gray-400 hover:text-[#5A00FF]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Blog'a Dön
            </Button>
            
            <div className="flex items-center flex-wrap gap-4 mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-[#5A00FF] to-[#9A17E3] text-white rounded-full text-sm font-semibold">
                {article.category}
              </span>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {article.content.map((paragraph, index) => {
                  // Check if paragraph should be a heading (starts with specific keywords)
                  const isHeading = paragraph.length < 100 && (
                    paragraph.includes('Eğitilmiş Modeller') ||
                    paragraph.includes('Değerlendirme Linki') ||
                    paragraph.includes('Yapay Zeka') ||
                    paragraph.includes('AI Modelleri') ||
                    paragraph.includes('Adım Adım') ||
                    paragraph.includes('İlk adım') ||
                    paragraph.includes('Sistem,')
                  );
                  
                  if (isHeading && index > 0) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-8 first:mt-0">
                        {paragraph}
                      </h2>
                    );
                  }
                  
                  // Add internal links for SEO
                  let processedParagraph = paragraph;
                  if (paragraph.includes('DriveUp')) {
                    processedParagraph = processedParagraph.replace(
                      /DriveUp/g,
                      '<a href="https://driveuptr.com" class="text-[#5A00FF] hover:underline font-semibold">DriveUp</a>'
                    );
                  }
                  if (paragraph.includes('Değerlendirme Linki')) {
                    processedParagraph = processedParagraph.replace(
                      /Değerlendirme Linki/g,
                      '<a href="https://driveuptr.com/blog/degerlendirme-linki-olusturma" class="text-[#5A00FF] hover:underline font-semibold">Değerlendirme Linki</a>'
                    );
                  }
                  if (paragraph.includes('yapay zeka') || paragraph.includes('Yapay zeka')) {
                    processedParagraph = processedParagraph.replace(
                      /([Yy]apay zeka)/g,
                      '<a href="https://driveuptr.com/blog/egitilmis-ai-modelleri-ve-oneriler" class="text-[#5A00FF] hover:underline font-semibold">$1</a>'
                    );
                  }
                  
                  return (
                    <p 
                      key={index} 
                      className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: processedParagraph }}
                    />
                  );
                })}
              </div>

              {/* FAQ Section for SEO */}
              {(articleId.includes('degerlendirme-linki-nasil') || articleId.includes('ai-destekli-arac-degerlendirme')) && (
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    Sıkça Sorulan Sorular
                  </h2>
                  <div className="space-y-4">
                    {articleId.includes('degerlendirme-linki-nasil') && (
                      <>
                        <details className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                          <summary className="font-semibold text-lg cursor-pointer text-gray-900 dark:text-gray-100">
                            Değerlendirme linki oluşturma ücretsiz mi?
                          </summary>
                          <p className="mt-3 text-gray-700 dark:text-gray-300">
                            DriveUp Değerlendirme Linki özelliği, DriveUp platformu kullanıcıları için mevcuttur. Detaylı fiyatlandırma ve özellikler hakkında bilgi almak için bizimle iletişime geçebilirsiniz.
                          </p>
                        </details>
                        <details className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                          <summary className="font-semibold text-lg cursor-pointer text-gray-900 dark:text-gray-100">
                            Link oluşturma işlemi ne kadar sürer?
                          </summary>
                          <p className="mt-3 text-gray-700 dark:text-gray-300">
                            Değerlendirme linki oluşturma işlemi sadece birkaç dakika sürer. DriveUp platformuna giriş yaptıktan sonra, birkaç tıklama ile özel linkinizi oluşturabilirsiniz.
                          </p>
                        </details>
                        <details className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                          <summary className="font-semibold text-lg cursor-pointer text-gray-900 dark:text-gray-100">
                            Link performansını nasıl takip edebilirim?
                          </summary>
                          <p className="mt-3 text-gray-700 dark:text-gray-300">
                            DriveUp platformu üzerinden, link tıklama sayıları, değerlendirme yapılan araç sayısı ve sonuçları detaylı olarak takip edebilirsiniz. Ayrıca otomatik raporlama özellikleri de mevcuttur.
                          </p>
                        </details>
                      </>
                    )}
                    {articleId.includes('ai-destekli-arac-degerlendirme') && (
                      <>
                        <details className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                          <summary className="font-semibold text-lg cursor-pointer text-gray-900 dark:text-gray-100">
                            AI destekli değerlendirme sistemi ne kadar doğru?
                          </summary>
                          <p className="mt-3 text-gray-700 dark:text-gray-300">
                            DriveUp'ın yapay zeka destekli değerlendirme sistemi, milyonlarca araç verisi üzerinde eğitilmiş modeller kullanır. Sistem sürekli öğrenerek kendini geliştirir ve %95+ doğruluk oranına sahiptir.
                          </p>
                        </details>
                        <details className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                          <summary className="font-semibold text-lg cursor-pointer text-gray-900 dark:text-gray-100">
                            Hangi faktörler değerlendirmeye dahil edilir?
                          </summary>
                          <p className="mt-3 text-gray-700 dark:text-gray-300">
                            Sistem, araç markası, model, yaş, kilometre, hasar geçmişi, bakım kayıtları, piyasa dinamikleri, bölgesel farklılıklar ve ekonomik göstergeler gibi yüzlerce faktörü analiz eder.
                          </p>
                        </details>
                        <details className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                          <summary className="font-semibold text-lg cursor-pointer text-gray-900 dark:text-gray-100">
                            Değerlendirme sonuçları ne kadar sürede alınır?
                          </summary>
                          <p className="mt-3 text-gray-700 dark:text-gray-300">
                            AI destekli değerlendirme sistemi, araç bilgileri girildikten sonra anında sonuç üretir. Detaylı rapor ve analizler birkaç saniye içinde hazır olur.
                          </p>
                        </details>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Key Features Section for AI articles */}
              {(articleId.includes('ai') || articleId.includes('degerlendirme') || articleId.includes('link')) && (
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    Öne Çıkan Özellikler
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {articleId.includes('ai-destekli-arac-degerlendirme') && (
                      <>
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
                          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">🤖 Eğitilmiş Derin Öğrenme Modelleri</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Milyonlarca araç verisi üzerinde eğitilmiş, sürekli öğrenen AI modelleri</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6">
                          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">📊 Objektif Fiyatlama</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Veriye dayalı, önyargısız ve şeffaf değerlendirme sistemi</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">⚡ Anında Sonuç</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Gerçek zamanlı analiz ile hızlı değerlendirme raporları</p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6">
                          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">📈 Piyasa Analizi</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Emsal karşılaştırmaları ve piyasa trendleri ile kapsamlı analiz</p>
                        </div>
                      </>
                    )}
                    {articleId.includes('degerlendirme-linki') && (
                      <>
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
                          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">🔗 Özel Değerlendirme Linki</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Markanıza özel, özelleştirilebilir değerlendirme linkleri</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6">
                          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">📱 Mobil Uyumlu</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Her cihazdan erişilebilir, kullanıcı dostu arayüz</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">📊 Performans Takibi</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Detaylı analitik ve raporlama ile link performansını izleyin</p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6">
                          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">⚡ Otomatik Takip</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Otomatik e-posta ve hatırlatmalar ile dönüşüm oranlarını artırın</p>
                        </div>
                      </>
                    )}
                    {articleId.includes('egitilmis-ai-modelleri') && (
                      <>
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
                          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">🧠 Sürekli Öğrenen Modeller</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Her yeni veri ile kendini geliştiren, adaptif AI sistemleri</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6">
                          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">🎯 Akıllı Öneriler</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Stratejik alım-satım önerileri ve piyasa tahminleri</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">🔮 Öngörülü Bakım</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Arıza öncesi tespit ve bakım planlaması</p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6">
                          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">📈 Rota Optimizasyonu</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">AI destekli en verimli rota önerileri</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Related Articles Section for SEO */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  İlgili Makaleler
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {articleId.includes('degerlendirme') && (
                    <>
                      <a
                        href="/blog/ai-destekli-arac-degerlendirme"
                        onClick={(e) => {
                          e.preventDefault();
                          if (onNavigateToArticle) {
                            onNavigateToArticle('ai-destekli-arac-degerlendirme');
                          }
                        }}
                        className="block bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 hover:shadow-lg transition-all"
                      >
                        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                          Yapay Zeka Destekli Araç Değerlendirme
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Eğitilmiş modeller ile doğru fiyatlama nasıl yapılır?
                        </p>
                      </a>
                      <a
                        href="/blog/degerlendirme-linki-olusturma"
                        onClick={(e) => {
                          e.preventDefault();
                          if (onNavigateToArticle) {
                            onNavigateToArticle('degerlendirme-linki-olusturma');
                          }
                        }}
                        className="block bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 hover:shadow-lg transition-all"
                      >
                        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                          Değerlendirme Linki Oluşturma
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Müşterilerinizle doğrudan etkileşim kurun
                        </p>
                      </a>
                    </>
                  )}
                  {articleId.includes('link') && (
                    <>
                      <a
                        href="/blog/ai-destekli-arac-degerlendirme"
                        onClick={(e) => {
                          e.preventDefault();
                          if (onNavigateToArticle) {
                            onNavigateToArticle('ai-destekli-arac-degerlendirme');
                          }
                        }}
                        className="block bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 hover:shadow-lg transition-all"
                      >
                        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                          AI Destekli Araç Değerlendirme
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Eğitilmiş modeller ile objektif fiyatlama
                        </p>
                      </a>
                      <a
                        href="/blog/egitilmis-ai-modelleri-ve-oneriler"
                        onClick={(e) => {
                          e.preventDefault();
                          if (onNavigateToArticle) {
                            onNavigateToArticle('egitilmis-ai-modelleri-ve-oneriler');
                          }
                        }}
                        className="block bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 hover:shadow-lg transition-all"
                      >
                        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                          Eğitilmiş AI Modelleri
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          DriveUp'ın yapay zeka altyapısı
                        </p>
                      </a>
                    </>
                  )}
                  {articleId.includes('egitilmis-ai') && (
                    <>
                      <a
                        href="/blog/ai-destekli-arac-degerlendirme"
                        onClick={(e) => {
                          e.preventDefault();
                          if (onNavigateToArticle) {
                            onNavigateToArticle('ai-destekli-arac-degerlendirme');
                          }
                        }}
                        className="block bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 hover:shadow-lg transition-all"
                      >
                        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                          AI Destekli Araç Değerlendirme
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Eğitilmiş modeller ile doğru fiyatlama
                        </p>
                      </a>
                      <a
                        href="/blog/degerlendirme-linki-olusturma"
                        onClick={(e) => {
                          e.preventDefault();
                          if (onNavigateToArticle) {
                            onNavigateToArticle('degerlendirme-linki-olusturma');
                          }
                        }}
                        className="block bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 hover:shadow-lg transition-all"
                      >
                        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                          Değerlendirme Linki Oluşturma
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Müşterilerinizle doğrudan etkileşim
                        </p>
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="bg-gradient-to-r from-[#5A00FF]/10 to-[#9A17E3]/10 rounded-xl p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                    Daha Fazla Bilgi İster misiniz?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {articleId.includes('degerlendirme') || articleId.includes('link') 
                      ? 'Araç değerlendirme ve link oluşturma çözümlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.'
                      : 'Filo yönetimi çözümlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.'}
                  </p>
                  {onContactClick && (
                    <Button 
                      onClick={onContactClick}
                      className="bg-gradient-to-r from-[#5A00FF] to-[#9A17E3] text-white hover:from-[#4A00E6] hover:to-[#8A15D3]"
                    >
                      İletişime Geç
                    </Button>
                  )}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

