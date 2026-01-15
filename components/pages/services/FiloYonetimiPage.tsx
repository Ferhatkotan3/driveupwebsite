import React, { useEffect } from 'react';

interface FiloYonetimiPageProps {
  language?: 'tr' | 'en';
  t?: any;
}

export const FiloYonetimiPage: React.FC<FiloYonetimiPageProps> = ({ language = 'tr', t }) => {
  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const serviceData = t?.services?.fleetManagement || {};
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.title || (language === 'en' ? 'Fleet Management' : 'Filo Yönetimi')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {serviceData?.subtitle || (language === 'en' ? 'Manage your vehicle fleet efficiently and optimize your operational processes.' : 'Araç filonuzu verimli bir şekilde yönetin ve operasyonel süreçlerinizi optimize edin.')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">{serviceData?.whatIs?.title || (language === 'en' ? 'What is Fleet Management Software?' : 'Filo Yönetim Yazılımı Nedir?')}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {serviceData?.whatIs?.description || (language === 'en' 
                ? 'Fleet management software is a comprehensive solution that enables you to manage all operational processes of your vehicle fleet digitally. It brings together all processes such as vehicle tracking, maintenance planning, fuel management, driver performance and cost analysis on a single platform.'
                : 'Filo yönetim yazılımı, araç filonuzun tüm operasyonel süreçlerini dijital ortamda yönetmenizi sağlayan kapsamlı bir çözümdür. Araç takibi, bakım planlaması, yakıt yönetimi, sürücü performansı ve maliyet analizi gibi tüm süreçleri tek bir platformda toplar.')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">{serviceData?.whatIs?.realTime?.title || (language === 'en' ? 'Real-Time Tracking' : 'Gerçek Zamanlı Takip')}</h3>
                <p className="text-blue-700 dark:text-blue-300">{serviceData?.whatIs?.realTime?.description || (language === 'en' ? 'Track your vehicles\' location, speed and status instantly.' : 'Araçlarınızın konumunu, hızını ve durumunu anlık olarak takip edin.')}</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">{serviceData?.whatIs?.maintenance?.title || (language === 'en' ? 'Maintenance Planning' : 'Bakım Planlaması')}</h3>
                <p className="text-green-700 dark:text-green-300">{serviceData?.whatIs?.maintenance?.description || (language === 'en' ? 'Make automatic maintenance reminders and service planning.' : 'Otomatik bakım hatırlatmaları ve servis planlaması yapın.')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">{serviceData?.benefits?.title || (language === 'en' ? 'Operational Benefits' : 'Operasyonel Faydalar')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{serviceData?.benefits?.efficiency?.title || (language === 'en' ? '25% Efficiency Increase' : '%25 Verimlilik Artışı')}</h3>
                <p className="text-gray-600 dark:text-gray-400">{serviceData?.benefits?.efficiency?.description || (language === 'en' ? 'Increase your efficiency by optimizing your operational processes.' : 'Operasyonel süreçlerinizi optimize ederek verimliliğinizi artırın.')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{serviceData?.benefits?.cost?.title || (language === 'en' ? '30% Cost Reduction' : '%30 Maliyet Azaltma')}</h3>
                <p className="text-gray-600 dark:text-gray-400">{serviceData?.benefits?.cost?.description || (language === 'en' ? 'Significantly reduce your fuel and maintenance costs.' : 'Yakıt ve bakım maliyetlerinizi önemli ölçüde azaltın.')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{serviceData?.benefits?.security?.title || (language === 'en' ? '40% Security Increase' : '%40 Güvenlik Artışı')}</h3>
                <p className="text-gray-600 dark:text-gray-400">{serviceData?.benefits?.security?.description || (language === 'en' ? 'Increase security by monitoring driver behaviors.' : 'Sürücü davranışlarını izleyerek güvenliği artırın.')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">{serviceData?.efficiency?.title || (language === 'en' ? 'Efficiency Increase' : 'Verimlilik Artışı')}</h2>
            <div className="space-y-6">
              {(serviceData?.efficiency?.items || (language === 'en' ? [
                { title: 'Automatic Route Optimization', description: 'Minimize distance and time with AI-powered route planning.' },
                { title: 'Smart Maintenance Management', description: 'Reduce downtime and increase vehicle availability with predictive maintenance.' },
                { title: 'Real-Time Analytics', description: 'Accelerate your decision-making processes with detailed reports and analytics.' }
              ] : [
                { title: 'Otomatik Rota Optimizasyonu', description: 'Yapay zeka destekli rota planlaması ile mesafe ve süreyi minimize edin.' },
                { title: 'Akıllı Bakım Yönetimi', description: 'Öngörülü bakım ile arıza sürelerini azaltın ve araç kullanılabilirliğini artırın.' },
                { title: 'Gerçek Zamanlı Analitik', description: 'Detaylı raporlar ve analitiklerle karar verme süreçlerinizi hızlandırın.' }
              ])).map((item: any, index: number) => {
                const colors = ['blue', 'green', 'purple'];
                const color = colors[index % colors.length];
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 bg-${color}-100 dark:bg-${color}-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                      <span className={`text-${color}-600 dark:text-${color}-400 font-bold`}>{index + 1}</span>
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
        </div>
      </div>
    </div>
  );
};
