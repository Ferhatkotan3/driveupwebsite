import React, { useEffect } from 'react';

interface AracTakipPageProps {
  language?: 'tr' | 'en';
  t?: any;
}

export const AracTakipPage: React.FC<AracTakipPageProps> = ({ language = 'tr', t }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const serviceData = t?.services?.vehicleTracking || {};

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.title || (language === 'en' ? 'Vehicle Tracking Systems' : 'Araç Takip Sistemleri')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {serviceData?.subtitle || (language === 'en' ? 'Track your vehicles in real-time and increase your security.' : 'Araçlarınızı gerçek zamanlı olarak takip edin ve güvenliğinizi artırın.')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.whatIs?.title || (language === 'en' ? 'What is Vehicle Tracking System?' : 'Araç Takip Sistemi Nedir?')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {serviceData?.whatIs?.description || (language === 'en'
                ? 'Vehicle tracking system is a technological solution that enables you to monitor the location, speed, and status of your vehicles in real-time. Using GPS technology, you know where your vehicles are at all times and increase your security.'
                : 'Araç takip sistemi, araçlarınızın konumunu, hızını ve durumunu gerçek zamanlı olarak izlemenizi sağlayan teknolojik bir çözümdür. GPS teknolojisi kullanarak araçlarınızın her an nerede olduğunu bilir ve güvenliğinizi artırırsınız.')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  {serviceData?.whatIs?.realTime?.title || (language === 'en' ? 'Real-Time Tracking' : 'Gerçek Zamanlı Takip')}
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  {serviceData?.whatIs?.realTime?.description || (language === 'en' ? 'Track your vehicles\' location instantly and increase your security.' : 'Araçlarınızın konumunu anlık olarak takip edin ve güvenliğinizi artırın.')}
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  {serviceData?.whatIs?.behavior?.title || (language === 'en' ? 'Speed and Behavior Monitoring' : 'Hız ve Davranış İzleme')}
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  {serviceData?.whatIs?.behavior?.description || (language === 'en' ? 'Monitor driver behaviors and encourage safe driving.' : 'Sürücü davranışlarını izleyin ve güvenli sürüşü teşvik edin.')}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.features?.gps?.title || (language === 'en' ? 'GPS Positioning' : 'GPS Konumlandırma')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.features?.gps?.description || (language === 'en' ? 'Location tracking with high-precision GPS.' : 'Yüksek hassasiyetli GPS ile konum takibi.')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.features?.notifications?.title || (language === 'en' ? 'Instant Notifications' : 'Anlık Bildirimler')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.features?.notifications?.description || (language === 'en' ? 'Instant notification system for important events.' : 'Önemli olaylar için anında bildirim sistemi.')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.features?.reports?.title || (language === 'en' ? 'Detailed Reports' : 'Detaylı Raporlar')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.features?.reports?.description || (language === 'en' ? 'Comprehensive reporting and analysis features.' : 'Kapsamlı raporlama ve analiz özellikleri.')}
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
                { title: 'Security Increase', description: 'Increase your vehicles\' security and minimize theft risk.' },
                { title: 'Operational Efficiency', description: 'Optimize vehicle usage and increase operational efficiency.' },
                { title: 'Cost Control', description: 'Reduce costs by controlling fuel consumption and vehicle usage.' }
              ] : [
                { title: 'Güvenlik Artışı', description: 'Araçlarınızın güvenliğini artırın ve hırsızlık riskini minimize edin.' },
                { title: 'Operasyonel Verimlilik', description: 'Araç kullanımını optimize edin ve operasyonel verimliliği artırın.' },
                { title: 'Maliyet Kontrolü', description: 'Yakıt tüketimi ve araç kullanımını kontrol ederek maliyetleri düşürün.' }
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
