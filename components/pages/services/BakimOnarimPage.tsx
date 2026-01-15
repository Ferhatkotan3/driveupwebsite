import React, { useEffect } from 'react';

interface BakimOnarimPageProps {
  language?: 'tr' | 'en';
  t?: any;
}

export const BakimOnarimPage: React.FC<BakimOnarimPageProps> = ({ language = 'tr', t }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const serviceData = t?.services?.maintenanceRepair || {};

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.title || (language === 'en' ? 'Maintenance and Repair Solutions' : 'Bakım ve Onarım Çözümleri')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {serviceData?.subtitle || (language === 'en' ? 'Manage your vehicles\' maintenance and repair processes professionally.' : 'Araçlarınızın bakım ve onarım süreçlerini profesyonel bir şekilde yönetin.')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.whatIs?.title || (language === 'en' ? 'What are Maintenance and Repair Solutions?' : 'Bakım ve Onarım Çözümleri Nedir?')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {serviceData?.whatIs?.description || (language === 'en'
                ? 'Maintenance and repair solutions are a comprehensive system that enables you to optimize the maintenance processes of your vehicle fleet. With predictive maintenance, automatic reminders, and service planning, it ensures your vehicles are always in the best condition.'
                : 'Bakım ve onarım çözümleri, araç filonuzun bakım süreçlerini optimize etmenizi sağlayan kapsamlı bir sistemdir. Öngörülü bakım, otomatik hatırlatmalar ve servis planlaması ile araçlarınızın her zaman en iyi durumda kalmasını sağlar.')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  {serviceData?.whatIs?.predictive?.title || (language === 'en' ? 'Predictive Maintenance' : 'Öngörülü Bakım')}
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  {serviceData?.whatIs?.predictive?.description || (language === 'en' ? 'Identify and plan maintenance needs before breakdowns occur.' : 'Arıza oluşmadan önce bakım ihtiyaçlarını belirleyin ve planlayın.')}
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  {serviceData?.whatIs?.reminders?.title || (language === 'en' ? 'Automatic Reminders' : 'Otomatik Hatırlatmalar')}
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  {serviceData?.whatIs?.reminders?.description || (language === 'en' ? 'Automatically track maintenance times and receive reminders.' : 'Bakım zamanlarını otomatik olarak takip edin ve hatırlatmalar alın.')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.features?.title || (language === 'en' ? 'System Features' : 'Sistem Özellikleri')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.features?.planning?.title || (language === 'en' ? 'Maintenance Planning' : 'Bakım Planlaması')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.features?.planning?.description || (language === 'en' ? 'Create detailed maintenance plans and schedules.' : 'Detaylı bakım planları ve programları oluşturun.')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.features?.timeTracking?.title || (language === 'en' ? 'Time Tracking' : 'Zaman Takibi')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.features?.timeTracking?.description || (language === 'en' ? 'Track and optimize maintenance times.' : 'Bakım sürelerini takip edin ve optimize edin.')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.features?.costAnalysis?.title || (language === 'en' ? 'Cost Analysis' : 'Maliyet Analizi')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.features?.costAnalysis?.description || (language === 'en' ? 'Analyze and optimize maintenance costs.' : 'Bakım maliyetlerini analiz edin ve optimize edin.')}
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
                { title: 'Breakdown Prevention', description: 'Minimize downtime with predictive maintenance.' },
                { title: 'Cost Savings', description: 'Prevent unexpected costs with planned maintenance.' },
                { title: 'Vehicle Availability', description: 'Increase the availability rate of your vehicles.' }
              ] : [
                { title: 'Arıza Önleme', description: 'Öngörülü bakım ile arıza sürelerini minimize edin.' },
                { title: 'Maliyet Tasarrufu', description: 'Planlı bakım ile beklenmedik maliyetleri önleyin.' },
                { title: 'Araç Kullanılabilirliği', description: 'Araçlarınızın kullanılabilirlik oranını artırın.' }
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
