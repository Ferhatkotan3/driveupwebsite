import React, { useEffect } from 'react';

interface AracGorsellestirmePageProps {
  language?: 'tr' | 'en';
  t?: any;
}

export const AracGorsellestirmePage: React.FC<AracGorsellestirmePageProps> = ({ language = 'tr', t }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const serviceData = t?.services?.vehicleVisualization || {};

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.title || (language === 'en' ? 'Vehicle Visualization' : 'Araç Görselleştirme')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {serviceData?.subtitle || (language === 'en' ? 'Transform vehicle photos into professional showroom quality with AI-powered visual processing technologies.' : 'Yapay zekâ destekli görsel işleme teknolojileri ile araç fotoğraflarını profesyonel showroom kalitesine dönüştürün.')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.whatIs?.title || (language === 'en' ? 'What is Vehicle Visualization?' : 'Araç Görselleştirme Nedir?')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {serviceData?.whatIs?.description || (language === 'en'
                ? 'Vehicle visualization is a solution that transforms vehicle photos into professional showroom quality using AI-powered visual processing technologies. It accelerates sales and marketing processes with bulk visual editing and standard listing formats.'
                : 'Araç görselleştirme, yapay zekâ destekli görsel işleme teknolojileri ile araç fotoğraflarını profesyonel showroom kalitesine dönüştüren bir çözümdür. Toplu görsel düzenleme ve standart ilan formatlarıyla satış ve pazarlama süreçlerini hızlandırır.')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  {serviceData?.whatIs?.aiProcessing?.title || (language === 'en' ? 'AI-Powered Processing' : 'AI Destekli İşleme')}
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  {serviceData?.whatIs?.aiProcessing?.description || (language === 'en' ? 'Automatic visual enhancement and editing with AI algorithms.' : 'Yapay zekâ algoritmaları ile otomatik görsel iyileştirme ve düzenleme.')}
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  {serviceData?.whatIs?.bulkProcessing?.title || (language === 'en' ? 'Bulk Processing' : 'Toplu İşleme')}
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  {serviceData?.whatIs?.bulkProcessing?.description || (language === 'en' ? 'Transform hundreds of photos to professional quality at once.' : 'Yüzlerce fotoğrafı aynı anda profesyonel kaliteye dönüştürün.')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.forWhom?.title || (language === 'en' ? 'Who is it for?' : 'Kimler İçin?')}
            </h2>
            <div className="space-y-4">
              {(serviceData?.forWhom?.items || (language === 'en' ? [
                { title: 'Galleries', description: 'Support your vehicle sales listings with professional images.' },
                { title: 'Dealers', description: 'Enrich your vehicle catalogs with visual quality.' },
                { title: 'Fleet Companies', description: 'Use professional images in your rental and sales processes.' }
              ] : [
                { title: 'Galeriler', description: 'Araç satış ilanlarınızı profesyonel görsellerle destekleyin.' },
                { title: 'Bayiler', description: 'Araç kataloglarınızı görsel kalite ile zenginleştirin.' },
                { title: 'Filo Şirketleri', description: 'Kiralama ve satış süreçlerinizde profesyonel görseller kullanın.' }
              ])).map((item: any, index: number) => {
                const colors = ['blue', 'green', 'purple'];
                const color = colors[index % colors.length];
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 bg-${color}-100 dark:bg-${color}-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                      <span className={`text-${color}-600 dark:text-${color}-400 font-bold`}>✓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.benefits?.title || (language === 'en' ? 'Benefits' : 'Kazanımlar')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.benefits?.fasterListing?.title || (language === 'en' ? 'Faster Listing Publication' : 'Daha Hızlı İlan Yayını')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.benefits?.fasterListing?.description || (language === 'en' ? 'Reduce listing preparation time by 80% with automatic visual processing.' : 'Otomatik görsel işleme ile ilan hazırlama süresini %80 azaltın.')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.benefits?.higherConversion?.title || (language === 'en' ? 'Higher Conversion' : 'Daha Yüksek Dönüşüm')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.benefits?.higherConversion?.description || (language === 'en' ? 'Increase customer interest by 60% with professional images.' : 'Profesyonel görseller ile müşteri ilgisini %60 artırın.')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.benefits?.standardFormat?.title || (language === 'en' ? 'Standard Format' : 'Standart Format')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.benefits?.standardFormat?.description || (language === 'en' ? 'Publish all your listings at the same professional standard.' : 'Tüm ilanlarınızı aynı profesyonel standartta yayınlayın.')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
