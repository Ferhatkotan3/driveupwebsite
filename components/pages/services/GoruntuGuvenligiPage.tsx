import React, { useEffect } from 'react';

interface GoruntuGuvenligiPageProps {
  language?: 'tr' | 'en';
  t?: any;
}

export const GoruntuGuvenligiPage: React.FC<GoruntuGuvenligiPageProps> = ({ language = 'tr', t }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const serviceData = t?.services?.imageSecurity || {};

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.title || (language === 'en' ? 'Image Security and Privacy' : 'Görüntü Güvenliği ve Gizlilik')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {serviceData?.subtitle || (language === 'en' ? 'Apply KVKK and GDPR-compliant privacy processes such as license plate and face hiding on vehicle images.' : 'Araç görselleri üzerinde plaka ve yüz gizleme gibi KVKK ve GDPR uyumlu gizlilik işlemleri uygulayın.')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {serviceData?.whatIs?.title || (language === 'en' ? 'What is Image Security?' : 'Görüntü Güvenliği Nedir?')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {serviceData?.whatIs?.description || (language === 'en'
                ? 'Image security and privacy is a solution that applies KVKK and GDPR-compliant privacy processes such as license plate and face hiding on vehicle images. It ensures secure processing and storage of visual data.'
                : 'Görüntü güvenliği ve gizlilik, araç görselleri üzerinde plaka ve yüz gizleme gibi KVKK ve GDPR uyumlu gizlilik işlemleri uygulayan bir çözümdür. Görsel verilerin güvenli şekilde işlenmesini ve saklanmasını sağlar.')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-3">
                  {serviceData?.whatIs?.kvkk?.title || (language === 'en' ? 'KVKK Compliant' : 'KVKK Uyumlu')}
                </h3>
                <p className="text-red-700 dark:text-red-300">
                  {serviceData?.whatIs?.kvkk?.description || (language === 'en' ? 'Fully compliant processes with Turkey\'s Personal Data Protection Law.' : 'Türkiye Kişisel Verilerin Korunması Kanunu\'na tam uyumlu işlemler.')}
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  {serviceData?.whatIs?.gdpr?.title || (language === 'en' ? 'GDPR Compliant' : 'GDPR Uyumlu')}
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  {serviceData?.whatIs?.gdpr?.description || (language === 'en' ? 'Systems compliant with the European Union General Data Protection Regulation.' : 'Avrupa Birliği Genel Veri Koruma Tüzüğü\'ne uyumlu sistemler.')}
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
                { icon: '🔒', title: 'License Plate Hiding', description: 'Ensure data security with automatic license plate detection and hiding processes.' },
                { icon: '👤', title: 'Face Blurring', description: 'Automatically detect and blur faces in images.' },
                { icon: '✓', title: 'Content Verification', description: 'Check the accuracy and appropriateness of visual content.' }
              ] : [
                { icon: '🔒', title: 'Plaka Gizleme', description: 'Otomatik plaka tespiti ve gizleme işlemleri ile veri güvenliği sağlayın.' },
                { icon: '👤', title: 'Yüz Bulanıklaştırma', description: 'Görsellerdeki yüzleri otomatik tespit edip bulanıklaştırın.' },
                { icon: '✓', title: 'İçerik Doğrulama', description: 'Görsel içeriğin doğruluğunu ve uygunluğunu kontrol edin.' }
              ])).map((item: any, index: number) => {
                const colors = ['red', 'blue', 'green'];
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
                { title: 'Galleries', description: 'Publish your vehicle images in compliance with legal requirements.' },
                { title: 'Insurance Companies', description: 'Process and store damage images securely.' },
                { title: 'Corporate Companies', description: 'Manage your fleet images with legal compliance.' }
              ] : [
                { title: 'Galeriler', description: 'Araç görsellerinizi yasal gerekliliklere uygun şekilde yayınlayın.' },
                { title: 'Sigorta Şirketleri', description: 'Hasar görsellerini güvenli şekilde işleyin ve saklayın.' },
                { title: 'Kurumsal Firmalar', description: 'Filo görsellerinizi yasal uyumluluk ile yönetin.' }
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
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.benefits?.legalRisk?.title || (language === 'en' ? 'Reduction of Legal Risks' : 'Hukuki Risklerin Azaltılması')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.benefits?.legalRisk?.description || (language === 'en' ? 'Minimize legal risks with KVKK and GDPR compliance.' : 'KVKK ve GDPR uyumluluğu ile yasal riskleri minimize edin.')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {serviceData?.benefits?.dataSecurity?.title || (language === 'en' ? 'Data Security' : 'Veri Güvenliği')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {serviceData?.benefits?.dataSecurity?.description || (language === 'en' ? 'Secure processing and storage of visual data.' : 'Görsel verilerin güvenli işlenmesi ve saklanması.')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
