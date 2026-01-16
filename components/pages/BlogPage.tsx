import React, { useEffect } from 'react';
import { Button } from '../ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPageProps {
  t: any;
  onContactClick: () => void;
  onNavigateToArticle?: (articleId: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ t, onContactClick: _onContactClick, onNavigateToArticle }) => {
  // Scroll to top when page loads
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

  // SEO: Update meta tags for blog page
  useEffect(() => {
    document.title = 'Blog | DriveUp - Araç Değerlendirme, Filo Yönetimi ve Yapay Zeka';
    
    const description = 'DriveUp blog: Araç değerlendirme, yapay zeka destekli filo yönetimi, değerlendirme linki oluşturma ve otomotiv teknolojisi hakkında güncel yazılar.';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'araç değerlendirme blog, filo yönetimi blog, yapay zeka araç değerlendirme, AI filo yönetimi, değerlendirme linki, DriveUp blog');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://driveuptr.com/blog');

    // Open Graph
    const updateOG = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOG('og:type', 'website');
    updateOG('og:url', 'https://driveuptr.com/blog');
    updateOG('og:title', 'DriveUp Blog - Araç Değerlendirme ve Filo Yönetimi');
    updateOG('og:description', description);
    updateOG('og:image', 'https://driveuptr.com/og-blog.jpg');

    // Blog structured data
    const blogStructuredData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "DriveUp Blog",
      "description": description,
      "url": "https://driveuptr.com/blog",
      "publisher": {
        "@type": "Organization",
        "name": "DriveUp Technologies",
        "logo": {
          "@type": "ImageObject",
          "url": "https://driveuptr.com/logo.png"
        }
      }
    };

    let existingBlogScript = document.getElementById('blog-page-structured-data');
    if (existingBlogScript) {
      existingBlogScript.remove();
    }

    const blogScript = document.createElement('script');
    blogScript.id = 'blog-page-structured-data';
    blogScript.type = 'application/ld+json';
    blogScript.textContent = JSON.stringify(blogStructuredData);
    document.head.appendChild(blogScript);

    return () => {
      const scriptToRemove = document.getElementById('blog-page-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      articleId: 'arac-kiralama-sektorunde-dijital-donusum',
      title: t.blog?.post1?.title || 'Araç Kiralama Sektöründe Dijital Dönüşüm',
      excerpt: t.blog?.post1?.excerpt || 'Araç kiralama sektöründe dijital dönüşümün önemi ve faydaları hakkında detaylı bilgiler. Modern teknoloji çözümleri ile operasyonel verimliliği nasıl artırabilirsiniz?',
      date: '2025-12-10',
      category: t.blog?.post1?.category || 'Teknoloji',
      readTime: '5 dk'
    },
    {
      id: 2,
      articleId: 'filo-yonetiminde-yapay-zeka',
      title: t.blog?.post2?.title || 'Filo Yönetiminde Yapay Zeka',
      excerpt: t.blog?.post2?.excerpt || 'Yapay zeka teknolojilerinin filo yönetiminde nasıl kullanıldığı ve avantajları. AI destekli çözümler ile maliyet optimizasyonu ve operasyonel verimlilik.',
      date: '2025-12-05',
      category: t.blog?.post2?.category || 'AI',
      readTime: '7 dk'
    },
    {
      id: 3,
      articleId: 'musteri-deneyimi-optimizasyonu',
      title: t.blog?.post3?.title || 'Müşteri Deneyimi Optimizasyonu',
      excerpt: t.blog?.post3?.excerpt || 'Araç kiralama sürecinde müşteri deneyimini nasıl optimize edebilirsiniz? Dijital çözümler ile müşteri memnuniyetini artırma stratejileri.',
      date: '2025-12-01',
      category: t.blog?.post3?.category || 'UX',
      readTime: '4 dk'
    },
    {
      id: 4,
      articleId: 'surdurulebilir-filo-yonetimi',
      title: t.blog?.post4?.title || 'Sürdürülebilir Filo Yönetimi',
      excerpt: t.blog?.post4?.excerpt || 'Çevre dostu araçlar ve sürdürülebilir filo yönetimi stratejileri. Yeşil teknolojiler ile hem çevreyi koruyun hem de maliyetleri düşürün.',
      date: '2025-11-28',
      category: t.blog?.post4?.category || 'Sürdürülebilirlik',
      readTime: '6 dk'
    },
    {
      id: 5,
      articleId: 'ai-destekli-arac-degerlendirme',
      title: 'Yapay Zeka Destekli Araç Değerlendirme: Eğitilmiş Modeller ile Doğru Fiyatlama',
      excerpt: 'DriveUp\'ın yapay zeka destekli araç değerlendirme sistemi, milyonlarca araç verisi üzerinde eğitilmiş derin öğrenme modelleri kullanarak, araçların gerçek piyasa değerini objektif şekilde hesaplıyor.',
      date: '2025-12-20',
      category: 'AI',
      readTime: '9 dk'
    },
    {
      id: 6,
      articleId: 'degerlendirme-linki-olusturma',
      title: 'Değerlendirme Linki Oluşturma: Müşterilerinizle Doğrudan Etkileşim Kurun',
      excerpt: 'DriveUp Değerlendirme Linki, galeriler ve araç alım şirketlerinin müşterileriyle doğrudan etkileşime geçmesini sağlayan yenilikçi bir çözüm. Araç değerlendirme süreçlerini tamamen dijitalleştiriyor.',
      date: '2025-12-18',
      category: 'Teknoloji',
      readTime: '6 dk'
    },
    {
      id: 7,
      articleId: 'egitilmis-ai-modelleri-ve-oneriler',
      title: 'Eğitilmiş AI Modelleri ve Akıllı Öneriler: DriveUp\'ın Yapay Zeka Altyapısı',
      excerpt: 'DriveUp\'ın yapay zeka altyapısı, Türkiye otomotiv pazarının gerçek verileri üzerinde eğitilmiş özel modellerden oluşuyor. Sürekli öğrenen ve gelişen sistemler.',
      date: '2025-12-22',
      category: 'AI',
      readTime: '10 dk'
    },
    {
      id: 8,
      articleId: 'arac-degerlendirme-linki-nasil-olusturulur',
      title: 'Araç Değerlendirme Linki Nasıl Oluşturulur? Adım Adım Rehber',
      excerpt: 'DriveUp Değerlendirme Linki oluşturma işlemi, galeriler ve araç alım şirketleri için basit ve hızlı bir süreç. Bu rehber, adım adım link oluşturma ve yönetim sürecini açıklıyor.',
      date: '2025-12-25',
      category: 'Rehber',
      readTime: '5 dk'
    }
  ];

  const handleReadMore = (articleId: string) => {
    if (onNavigateToArticle) {
      onNavigateToArticle(articleId);
    }
  };

  return (
    <div className="min-h-screen blog-page" style={{ overflow: 'visible', background: 'transparent', position: 'relative' }}>
      {/* Hero Section - Completely transparent, no background */}
      <section className="pt-24 pb-20" style={{ 
        overflow: 'visible', 
        position: 'relative', 
        marginTop: 0, 
        background: 'transparent !important',
        backgroundColor: 'transparent',
        zIndex: 1000
      }}>
        <style dangerouslySetInnerHTML={{
          __html: `
            .blog-page section:first-of-type {
              background: transparent !important;
            }
            .blog-page section:first-of-type::before,
            .blog-page section:first-of-type::after {
              display: none !important;
              content: none !important;
            }
          `
        }} />
        <div className="container-custom" style={{ overflow: 'visible', position: 'relative', zIndex: 1001 }}>
          <div className="max-w-4xl mx-auto text-center" style={{ overflow: 'visible', position: 'relative', zIndex: 1002 }}>
            <h1 className="mb-6 text-4xl md:text-5xl font-bold" style={{ 
              position: 'relative', 
              zIndex: 10000, 
              overflow: 'visible', 
              backgroundColor: 'transparent',
              background: 'transparent',
              display: 'block',
              visibility: 'visible',
              color: '#5A00FF'
            }}>
              {t.blog?.title || 'Blog'}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-0 mt-16" style={{ 
              position: 'relative', 
              zIndex: 9999, 
              overflow: 'visible', 
              backgroundColor: 'transparent',
              background: 'transparent',
              display: 'block',
              visibility: 'visible'
            }}>
              {t.blog?.subtitle || 'Araç kiralama ve filo yönetimi sektöründeki en son gelişmeler, trendler ve uzman görüşleri.'}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 relative z-10 -mt-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-gray-700 mb-12">
              <div className="flex items-center flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-[#5A00FF] to-[#9A17E3] text-white rounded-full text-sm font-semibold">
                  {t.blog?.featured?.category || 'Öne Çıkan'}
                </span>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>2025-12-20</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{t.blog?.featured?.readTime || '9 dk'}</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                {t.blog?.featured?.title || 'Yapay Zeka Destekli Araç Değerlendirme: Eğitilmiş Modeller ile Doğru Fiyatlama'}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {t.blog?.featured?.excerpt || 'DriveUp\'ın yapay zeka destekli araç değerlendirme sistemi, milyonlarca araç verisi üzerinde eğitilmiş derin öğrenme modelleri kullanarak, araçların gerçek piyasa değerini objektif ve veriye dayalı şekilde hesaplıyor.'}
              </p>
              <Button 
                onClick={() => handleReadMore('ai-destekli-arac-degerlendirme')}
                className="bg-gradient-to-r from-[#5A00FF] to-[#9A17E3] text-white hover:from-[#4A00E6] hover:to-[#8A15D3] px-6 py-3"
              >
                {t.blog?.readMore || 'Devamını Oku'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900 relative z-10">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
              {t.blog?.recentPosts || 'Son Yazılar'}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center flex-wrap gap-3 mb-5">
                    <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-xs">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-xs">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button 
                    onClick={() => handleReadMore(post.articleId)}
                    variant="outline" 
                    className="text-[#5A00FF] border-[#5A00FF] hover:bg-[#5A00FF] hover:text-white transition-colors"
                  >
                    {t.blog?.readMore || 'Devamını Oku'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {t.blog?.categories?.title || 'Kategoriler'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t.blog?.categories?.subtitle || 'İlgi alanınıza göre yazıları filtreleyin'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 text-3xl">💻</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {t.blog?.categories?.technology || 'Teknoloji'}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                12 yazı
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 text-3xl">🚗</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {t.blog?.categories?.fleet || 'Filo Yönetimi'}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                8 yazı
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-600 dark:text-purple-400 text-3xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {t.blog?.categories?.analytics || 'Analitik'}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                6 yazı
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-orange-600 dark:text-orange-400 text-3xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {t.blog?.categories?.sustainability || 'Sürdürülebilirlik'}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                4 yazı
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-[#5A00FF] to-[#9A17E3] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              {t.blog?.newsletter?.title || 'Bültenimize Abone Olun'}
            </h2>
            <p className="text-lg mb-8 opacity-90">
              {t.blog?.newsletter?.subtitle || 'En son yazılarımızı ve sektör haberlerini e-posta ile alın.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.blog?.newsletter?.placeholder || 'E-posta adresiniz'}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-[#5A00FF] hover:bg-gray-100 px-6 py-3 font-semibold">
                {t.blog?.newsletter?.button || 'Abone Ol'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
