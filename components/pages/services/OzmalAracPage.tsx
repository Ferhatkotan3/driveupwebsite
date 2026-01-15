import React, { useEffect } from 'react';

interface OzmalAracPageProps {
  language?: 'tr' | 'en';
  t?: any;
}

export const OzmalAracPage: React.FC<OzmalAracPageProps> = ({ language = 'tr', t }) => {
  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const serviceData = t?.services?.ownedVehicleManagement || {};

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.title || (language === 'en' ? 'Owned Vehicle Management' : 'Özmal Araç Yönetimi')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {serviceData?.subtitle || (language === 'en' ? 'Manage your owned vehicles professionally and increase your operational efficiency.' : 'Özel araçlarınızı profesyonel bir şekilde yönetin ve operasyonel verimliliğinizi artırın.')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.whatIs?.title || (language === 'en' ? 'What is Owned Vehicle Management?' : 'Özmal Araç Yönetimi Nedir?')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {serviceData?.whatIs?.description || (language === 'en'
                ? 'Owned vehicle management is a comprehensive solution that enables companies to efficiently manage their own vehicle fleets. It is designed for vehicle usage tracking, maintenance tracking, fuel management, and optimization of operational processes.'
                : 'Özmal araç yönetimi, şirketlerin kendi araç filolarını verimli bir şekilde yönetmelerini sağlayan kapsamlı bir çözümdür. Araç kullanımı, bakım takibi, yakıt yönetimi ve operasyonel süreçlerin optimizasyonu için tasarlanmıştır.')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  {serviceData?.whatIs?.usageTracking?.title || (language === 'en' ? 'Vehicle Usage Tracking' : 'Araç Kullanım Takibi')}
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  {serviceData?.whatIs?.usageTracking?.description || (language === 'en' ? 'Track your vehicles\' usage status and performance in detail.' : 'Araçlarınızın kullanım durumunu ve performansını detaylı olarak takip edin.')}
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  {serviceData?.whatIs?.maintenance?.title || (language === 'en' ? 'Maintenance Management' : 'Bakım Yönetimi')}
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  {serviceData?.whatIs?.maintenance?.description || (language === 'en' ? 'Make automatic maintenance reminders and service planning.' : 'Otomatik bakım hatırlatmaları ve servis planlaması yapın.')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.features?.title || (language === 'en' ? 'Key Features' : 'Temel Özellikler')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.features?.reporting?.title || (language === 'en' ? 'Detailed Reporting' : 'Detaylı Raporlama')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.features?.reporting?.description || (language === 'en' ? 'Get detailed reports on vehicle usage and costs.' : 'Araç kullanımı ve maliyetler hakkında detaylı raporlar alın.')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.features?.costOptimization?.title || (language === 'en' ? 'Cost Optimization' : 'Maliyet Optimizasyonu')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.features?.costOptimization?.description || (language === 'en' ? 'Optimize your vehicle costs and save money.' : 'Araç maliyetlerinizi optimize edin ve tasarruf sağlayın.')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.features?.automation?.title || (language === 'en' ? 'Automated Processes' : 'Otomatik Süreçler')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.features?.automation?.description || (language === 'en' ? 'Automate routine tasks and save time.' : 'Rutin işlemleri otomatikleştirin ve zaman kazanın.')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.benefits?.title || (language === 'en' ? 'Benefits' : 'Avantajlar')}
            </h2>
            <div className="space-y-6">
              {(serviceData?.benefits?.items || (language === 'en' ? [
                { title: 'Centralized Management', description: 'Manage and control all your vehicles from a single platform.' },
                { title: 'Performance Monitoring', description: 'Monitor vehicle performance and identify improvement opportunities.' },
                { title: 'Integrated Solutions', description: 'Solutions that easily integrate with your existing systems.' }
              ] : [
                { title: 'Merkezi Yönetim', description: 'Tüm araçlarınızı tek bir platformdan yönetin ve kontrol edin.' },
                { title: 'Performans İzleme', description: 'Araç performansını izleyin ve iyileştirme fırsatlarını belirleyin.' },
                { title: 'Entegre Çözümler', description: 'Mevcut sistemlerinizle kolayca entegre olan çözümler.' }
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
