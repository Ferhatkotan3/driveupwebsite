import React, { useEffect } from 'react';

interface AracDegerlendirmePageProps {
  language?: 'tr' | 'en';
  t?: any;
}

export const AracDegerlendirmePage: React.FC<AracDegerlendirmePageProps> = ({ language = 'tr', t }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const serviceData = t?.services?.vehicleEvaluation || {};

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.title || (language === 'en' ? 'Vehicle Evaluation' : 'Araç Değerlendirme')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {serviceData?.subtitle || (language === 'en' ? 'Calculate the current and objective market value of vehicles using AI algorithms and market data.' : 'Yapay zekâ algoritmaları ve piyasa verileri kullanılarak araçların güncel ve objektif piyasa değerini hesaplayın.')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.whatIs?.title || (language === 'en' ? 'What is Vehicle Evaluation?' : 'Araç Değerlendirme Nedir?')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {serviceData?.whatIs?.description || (language === 'en'
                ? 'Vehicle evaluation is a system that calculates the current and objective market value of vehicles using AI algorithms and market data. It supports purchase-sale decisions with comparable analyses and price ranges.'
                : 'Araç değerlendirme, yapay zekâ algoritmaları ve piyasa verileri kullanılarak araçların güncel ve objektif piyasa değerini hesaplayan bir sistemdir. Emsal analizleri ve fiyat aralıkları ile alım-satım kararlarını destekler.')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  {serviceData?.whatIs?.aiCalculation?.title || (language === 'en' ? 'AI-Powered Calculation' : 'AI Destekli Hesaplama')}
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  {serviceData?.whatIs?.aiCalculation?.description || (language === 'en' ? 'Objective and data-driven value calculation with AI algorithms.' : 'Yapay zekâ algoritmaları ile objektif ve veriye dayalı değer hesaplama.')}
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  {serviceData?.whatIs?.marketData?.title || (language === 'en' ? 'Market Data' : 'Piyasa Verileri')}
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  {serviceData?.whatIs?.marketData?.description || (language === 'en' ? 'Real-time price analysis with current market data.' : 'Güncel piyasa verileri ile gerçek zamanlı fiyat analizi.')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.features?.title || (language === 'en' ? 'Features' : 'Özellikler')}
            </h2>
            <div className="space-y-4">
              {(serviceData?.features?.items || (language === 'en' ? [
                { icon: '📊', title: 'Comparable Analysis', description: 'Make objective evaluation by comparing market values of similar vehicles.' },
                { icon: '💰', title: 'Price Ranges', description: 'View minimum, maximum, and average price ranges.' },
                { icon: '⚡', title: 'Fast Evaluation', description: 'Get instant evaluation results by entering vehicle information.' }
              ] : [
                { icon: '📊', title: 'Emsal Analizi', description: 'Benzer araçların piyasa değerlerini karşılaştırarak objektif değerlendirme yapın.' },
                { icon: '💰', title: 'Fiyat Aralıkları', description: 'Minimum, maksimum ve ortalama fiyat aralıklarını görüntüleyin.' },
                { icon: '⚡', title: 'Hızlı Değerlendirme', description: 'Araç bilgilerini girerek anında değerlendirme sonucu alın.' }
              ])).map((item: any, index: number) => {
                const colors = ['blue', 'green', 'purple'];
                const color = colors[index % colors.length];
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 bg-${color}-100 dark:bg-${color}-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                      <span className={`text-${color}-600 dark:text-${color}-400 font-bold`}>{item.icon}</span>
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
              {serviceData?.forWhom?.title || (language === 'en' ? 'Who is it for?' : 'Kimler İçin?')}
            </h2>
            <div className="space-y-4">
              {(serviceData?.forWhom?.items || (language === 'en' ? [
                { title: 'Galleries', description: 'Determine purchase and sale prices with objective data.' },
                { title: 'Vehicle Purchase Companies', description: 'Evaluate customer vehicles at fair prices.' },
                { title: 'Fleet Companies', description: 'Make data-driven decisions for fleet renewal and sales.' }
              ] : [
                { title: 'Galeriler', description: 'Alım ve satış fiyatlarını objektif verilerle belirleyin.' },
                { title: 'Araç Alım Şirketleri', description: 'Müşteri araçlarını adil fiyatlarla değerlendirin.' },
                { title: 'Filo Şirketleri', description: 'Filo yenileme ve satış kararlarını veriye dayalı alın.' }
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
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.benefits?.accuratePricing?.title || (language === 'en' ? 'Accurate Pricing' : 'Doğru Fiyatlama')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.benefits?.accuratePricing?.description || (language === 'en' ? 'Accurate price determination and bargaining power with objective data.' : 'Objektif verilerle doğru fiyat belirleme ve pazarlık gücü.')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.benefits?.fastDecision?.title || (language === 'en' ? 'Fast Decision Making' : 'Hızlı Karar Alma')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.benefits?.fastDecision?.description || (language === 'en' ? 'Fast purchase-sale decisions with instant evaluation.' : 'Anında değerlendirme ile hızlı alım-satım kararları.')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
