import React, { useEffect } from 'react';

interface GunlukKiralamaPageProps {
  language?: 'tr' | 'en';
  t?: any;
}

export const GunlukKiralamaPage: React.FC<GunlukKiralamaPageProps> = ({ language = 'tr', t }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const serviceData = t?.services?.dailyRental || {};

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.title || (language === 'en' ? 'Daily Vehicle Rental Operations' : 'Günlük Araç Kiralama Operasyonları')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {serviceData?.subtitle || (language === 'en' ? 'Manage your daily vehicle rental operations efficiently and increase customer satisfaction.' : 'Günlük araç kiralama operasyonlarınızı verimli bir şekilde yönetin ve müşteri memnuniyetini artırın.')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.whatIs?.title || (language === 'en' ? 'What are Daily Rental Operations?' : 'Günlük Kiralama Operasyonları Nedir?')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {serviceData?.whatIs?.description || (language === 'en'
                ? 'Daily vehicle rental operations are a comprehensive solution that enables rental companies to manage their daily vehicle rental processes. It optimizes all processes such as reservation management, vehicle availability, and customer services.'
                : 'Günlük araç kiralama operasyonları, kiralama şirketlerinin günlük araç kiralama süreçlerini yönetmelerini sağlayan kapsamlı bir çözümdür. Rezervasyon yönetimi, araç kullanılabilirliği ve müşteri hizmetleri gibi tüm süreçleri optimize eder.')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  {serviceData?.whatIs?.reservation?.title || (language === 'en' ? 'Reservation Management' : 'Rezervasyon Yönetimi')}
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  {serviceData?.whatIs?.reservation?.description || (language === 'en' ? 'Easily manage and track customer reservations.' : 'Müşteri rezervasyonlarını kolayca yönetin ve takip edin.')}
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  {serviceData?.whatIs?.availability?.title || (language === 'en' ? 'Vehicle Availability' : 'Araç Kullanılabilirliği')}
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  {serviceData?.whatIs?.availability?.description || (language === 'en' ? 'Track vehicle availability status in real-time.' : 'Araçların kullanılabilirlik durumunu gerçek zamanlı olarak takip edin.')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.features?.title || (language === 'en' ? 'Operational Features' : 'Operasyonel Özellikler')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.features?.calendar?.title || (language === 'en' ? 'Calendar Management' : 'Takvim Yönetimi')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.features?.calendar?.description || (language === 'en' ? 'Easily manage vehicle rental calendar.' : 'Araç kiralama takvimini kolayca yönetin.')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.features?.customer?.title || (language === 'en' ? 'Customer Management' : 'Müşteri Yönetimi')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.features?.customer?.description || (language === 'en' ? 'Track customer information and history.' : 'Müşteri bilgilerini ve geçmişi takip edin.')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.features?.pricing?.title || (language === 'en' ? 'Pricing' : 'Fiyatlandırma')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.features?.pricing?.description || (language === 'en' ? 'Dynamic pricing and package management.' : 'Dinamik fiyatlandırma ve paket yönetimi.')}
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
                { title: 'Operational Efficiency', description: 'Optimize rental processes and increase efficiency.' },
                { title: 'Customer Satisfaction', description: 'Increase customer satisfaction with fast and easy rental process.' },
                { title: 'Revenue Optimization', description: 'Increase your revenue by optimizing vehicle usage.' }
              ] : [
                { title: 'Operasyonel Verimlilik', description: 'Kiralama süreçlerini optimize edin ve verimliliği artırın.' },
                { title: 'Müşteri Memnuniyeti', description: 'Hızlı ve kolay kiralama süreci ile müşteri memnuniyetini artırın.' },
                { title: 'Gelir Optimizasyonu', description: 'Araç kullanımını optimize ederek gelirinizi artırın.' }
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
