import React, { useEffect } from 'react';

interface CagriMerkeziPageProps {
  language?: 'tr' | 'en';
  t?: any;
}

export const CagriMerkeziPage: React.FC<CagriMerkeziPageProps> = ({ language = 'tr', t }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const serviceData = t?.services?.callCenter || {};

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.title || (language === 'en' ? 'Call Center Applications' : 'Çağrı Merkezi Uygulamaları')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {serviceData?.subtitle || (language === 'en' ? 'Optimize your call center operations and improve customer services.' : 'Çağrı merkezi operasyonlarınızı optimize edin ve müşteri hizmetlerini geliştirin.')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.whatIs?.title || (language === 'en' ? 'What are Call Center Applications?' : 'Çağrı Merkezi Uygulamaları Nedir?')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {serviceData?.whatIs?.description || (language === 'en'
                ? 'Call center applications are a comprehensive solution designed to optimize customer service operations. It integrates all processes such as call management, customer information system, and performance analysis.'
                : 'Çağrı merkezi uygulamaları, müşteri hizmetleri operasyonlarını optimize etmek için tasarlanmış kapsamlı bir çözümdür. Çağrı yönetimi, müşteri bilgi sistemi ve performans analizi gibi tüm süreçleri entegre eder.')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  {serviceData?.whatIs?.callManagement?.title || (language === 'en' ? 'Call Management' : 'Çağrı Yönetimi')}
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  {serviceData?.whatIs?.callManagement?.description || (language === 'en' ? 'Manage incoming and outgoing calls professionally.' : 'Gelen ve giden çağrıları profesyonel bir şekilde yönetin.')}
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  {serviceData?.whatIs?.customerInfo?.title || (language === 'en' ? 'Customer Information System' : 'Müşteri Bilgi Sistemi')}
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  {serviceData?.whatIs?.customerInfo?.description || (language === 'en' ? 'Manage and track customer information centrally.' : 'Müşteri bilgilerini merkezi olarak yönetin ve takip edin.')}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.features?.callTracking?.title || (language === 'en' ? 'Call Tracking' : 'Çağrı Takibi')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.features?.callTracking?.description || (language === 'en' ? 'Track and analyze all calls in detail.' : 'Tüm çağrıları detaylı olarak takip edin ve analiz edin.')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.features?.agentManagement?.title || (language === 'en' ? 'Agent Management' : 'Agent Yönetimi')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.features?.agentManagement?.description || (language === 'en' ? 'Effectively manage call center agents.' : 'Çağrı merkezi agentlerini etkili bir şekilde yönetin.')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.features?.performance?.title || (language === 'en' ? 'Performance Analysis' : 'Performans Analizi')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.features?.performance?.description || (language === 'en' ? 'Detailed performance reports and analysis features.' : 'Detaylı performans raporları ve analiz özellikleri.')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.benefits?.title || (language === 'en' ? 'Benefits' : 'Faydalar')}
            </h2>
            <div className="space-y-6">
              {(serviceData?.benefits?.items || (language === 'en' ? [
                { title: 'Customer Satisfaction', description: 'Increase satisfaction with fast and effective customer services.' },
                { title: 'Operational Efficiency', description: 'Optimize call center operations and increase efficiency.' },
                { title: 'Data Analysis', description: 'Enable continuous improvement with detailed data analysis.' }
              ] : [
                { title: 'Müşteri Memnuniyeti', description: 'Hızlı ve etkili müşteri hizmetleri ile memnuniyeti artırın.' },
                { title: 'Operasyonel Verimlilik', description: 'Çağrı merkezi operasyonlarını optimize edin ve verimliliği artırın.' },
                { title: 'Veri Analizi', description: 'Detaylı veri analizi ile sürekli iyileştirme sağlayın.' }
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
