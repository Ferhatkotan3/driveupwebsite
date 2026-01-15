import React, { useEffect } from 'react';

interface KiralamaSirketleriPageProps {
  language?: 'tr' | 'en';
  t?: any;
}

export const KiralamaSirketleriPage: React.FC<KiralamaSirketleriPageProps> = ({ language = 'tr', t }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const serviceData = t?.services?.rentalCompanies || {};

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.title || (language === 'en' ? 'Special Applications for Rental Companies' : 'Kiralama Şirketlerine Özel Uygulamalar')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {serviceData?.subtitle || (language === 'en' ? 'Comprehensive solutions specially designed for the needs of rental companies.' : 'Kiralama şirketlerinin ihtiyaçlarına özel olarak tasarlanmış kapsamlı çözümler.')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.whatIs?.title || (language === 'en' ? 'Special Solutions for Rental Companies' : 'Kiralama Şirketleri İçin Özel Çözümler')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {serviceData?.whatIs?.description || (language === 'en'
                ? 'Applications specially developed for the operational needs of rental companies optimize vehicle rental processes and improve customer experience. It integrates all processes such as reservation management, vehicle tracking, and customer services.'
                : 'Kiralama şirketlerinin operasyonel ihtiyaçlarına özel olarak geliştirilmiş uygulamalar, araç kiralama süreçlerini optimize eder ve müşteri deneyimini geliştirir. Rezervasyon yönetimi, araç takibi ve müşteri hizmetleri gibi tüm süreçleri entegre eder.')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  {serviceData?.whatIs?.integrated?.title || (language === 'en' ? 'Integrated System' : 'Entegre Sistem')}
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  {serviceData?.whatIs?.integrated?.description || (language === 'en' ? 'Manage all rental processes on a single platform.' : 'Tüm kiralama süreçlerini tek bir platformda yönetin.')}
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  {serviceData?.whatIs?.portal?.title || (language === 'en' ? 'Customer Portal' : 'Müşteri Portalı')}
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  {serviceData?.whatIs?.portal?.description || (language === 'en' ? 'Portal where customers can manage their own rental transactions.' : 'Müşterilerin kendi kiralama işlemlerini yönetebileceği portal.')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.features?.title || (language === 'en' ? 'Special Features' : 'Özel Özellikler')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.features?.reservation?.title || (language === 'en' ? 'Reservation System' : 'Rezervasyon Sistemi')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.features?.reservation?.description || (language === 'en' ? 'Advanced reservation management and tracking system.' : 'Gelişmiş rezervasyon yönetimi ve takip sistemi.')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.features?.tracking?.title || (language === 'en' ? 'Vehicle Tracking' : 'Araç Takibi')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.features?.tracking?.description || (language === 'en' ? 'Real-time vehicle location and status tracking.' : 'Gerçek zamanlı araç konum ve durum takibi.')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.features?.billing?.title || (language === 'en' ? 'Billing Management' : 'Fatura Yönetimi')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.features?.billing?.description || (language === 'en' ? 'Automatic invoice generation and payment tracking.' : 'Otomatik fatura oluşturma ve ödeme takibi.')}
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
                { title: 'Operational Efficiency', description: 'Increase operational efficiency by optimizing all processes.' },
                { title: 'Customer Experience', description: 'Easy and fast processes that increase customer satisfaction.' },
                { title: 'Scalability', description: 'Scalable solutions suitable for your growing business.' }
              ] : [
                { title: 'Operasyonel Verimlilik', description: 'Tüm süreçleri optimize ederek operasyonel verimliliği artırın.' },
                { title: 'Müşteri Deneyimi', description: 'Müşteri memnuniyetini artıran kolay ve hızlı süreçler.' },
                { title: 'Ölçeklenebilirlik', description: 'Büyüyen işletmenize uygun ölçeklenebilir çözümler.' }
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
