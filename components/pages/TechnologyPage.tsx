import React from 'react';
import { Button } from '../ui/button';

interface TechnologyPageProps {
  t: any;
  onContactClick: () => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ t, onContactClick }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-gradient mb-6">
              {t.technology?.title || 'Teknoloji'}
            </h1>
            <p className="text-large mb-8">
              {t.technology?.subtitle || 'En son teknolojileri kullanarak araç kiralama ve filo yönetimi çözümleri geliştiriyoruz.'}
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="mb-6">
              {t.technology?.stack?.title || 'Teknoloji Yığınımız'}
            </h2>
            <p className="text-large">
              {t.technology?.stack?.subtitle || 'Modern ve güvenilir teknolojiler kullanıyoruz'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-minimal text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 text-2xl">⚛️</span>
              </div>
              <h3 className="mb-3">
                {t.technology?.stack?.frontend?.title || 'Frontend'}
              </h3>
              <p className="text-small mb-4">
                {t.technology?.stack?.frontend?.description || 'React, TypeScript, Tailwind CSS'}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">React</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">Tailwind</span>
              </div>
            </div>
            
            <div className="card-minimal text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 text-2xl">🚀</span>
              </div>
              <h3 className="mb-3">
                {t.technology?.stack?.backend?.title || 'Backend'}
              </h3>
              <p className="text-small mb-4">
                {t.technology?.stack?.backend?.description || 'Node.js, Express, MongoDB'}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">Node.js</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">Express</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">MongoDB</span>
              </div>
            </div>
            
            <div className="card-minimal text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-600 dark:text-purple-400 text-2xl">☁️</span>
              </div>
              <h3 className="mb-3">
                {t.technology?.stack?.cloud?.title || 'Cloud'}
              </h3>
              <p className="text-small mb-4">
                {t.technology?.stack?.cloud?.description || 'AWS, Docker, Kubernetes'}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs">AWS</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs">Docker</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs">K8s</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="mb-6">
              {t.technology?.features?.title || 'Teknoloji Özellikleri'}
            </h2>
            <p className="text-large">
              {t.technology?.features?.subtitle || 'Sistemimizin güçlü yanları'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-minimal">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#5A00FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🔒</span>
                </div>
                <div>
                  <h3 className="mb-2">
                    {t.technology?.features?.security?.title || 'Güvenlik'}
                  </h3>
                  <p className="text-small">
                    {t.technology?.features?.security?.description || 'End-to-end şifreleme ve güvenlik protokolleri ile verilerinizi koruyoruz.'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card-minimal">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#5A00FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="mb-2">
                    {t.technology?.features?.performance?.title || 'Performans'}
                  </h3>
                  <p className="text-small">
                    {t.technology?.features?.performance?.description || 'Yüksek performanslı sistemler ile hızlı ve verimli çalışma sağlıyoruz.'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card-minimal">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#5A00FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📱</span>
                </div>
                <div>
                  <h3 className="mb-2">
                    {t.technology?.features?.mobile?.title || 'Mobil Uyumluluk'}
                  </h3>
                  <p className="text-small">
                    {t.technology?.features?.mobile?.description || 'Responsive tasarım ile tüm cihazlarda mükemmel deneyim sunuyoruz.'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card-minimal">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#5A00FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🔄</span>
                </div>
                <div>
                  <h3 className="mb-2">
                    {t.technology?.features?.integration?.title || 'Entegrasyon'}
                  </h3>
                  <p className="text-small">
                    {t.technology?.features?.integration?.description || 'Mevcut sistemlerinizle kolayca entegre olabilen API\'ler sunuyoruz.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">
                  {t.technology?.innovation?.title || 'İnovasyon'}
                </h2>
                <p className="text-large mb-6">
                  {t.technology?.innovation?.description || 'Sürekli gelişen teknoloji ile sektörde öncü olmaya devam ediyoruz. Yapay zeka ve makine öğrenmesi gibi en son teknolojileri kullanarak çözümlerimizi geliştiriyoruz.'}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#5A00FF] rounded-full"></div>
                    <span className="text-small">
                      {t.technology?.innovation?.point1 || 'Yapay Zeka destekli analitik'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#5A00FF] rounded-full"></div>
                    <span className="text-small">
                      {t.technology?.innovation?.point2 || 'Gerçek zamanlı veri işleme'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#5A00FF] rounded-full"></div>
                    <span className="text-small">
                      {t.technology?.innovation?.point3 || 'Otomatik raporlama sistemleri'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#5A00FF] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-3xl">🤖</span>
                  </div>
                  <h3 className="mb-2">
                    {t.technology?.innovation?.subtitle || 'AI & ML'}
                  </h3>
                  <p className="text-small">
                    {t.technology?.innovation?.detail || 'Yapay zeka ve makine öğrenmesi teknolojileri ile akıllı çözümler.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#5A00FF] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">
              {t.technology?.cta?.title || 'Teknoloji Çözümlerimizi Keşfedin'}
            </h2>
            <p className="text-large mb-8 opacity-90">
              {t.technology?.cta?.subtitle || 'Size özel teknoloji çözümleri geliştirmek için bizimle iletişime geçin.'}
            </p>
            <Button onClick={onContactClick} className="bg-white text-[#5A00FF] hover:bg-gray-100">
              {t.nav?.getStarted || 'İletişime Geç'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
