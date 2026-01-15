import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Language } from '../../types';

interface PrivacyPolicyPageProps {
  language: Language;
  onBack: () => void;
  t: any;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ language, onBack, t }) => {
  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Also try with instant behavior
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const content = t?.privacyPolicy || {
    title: 'Gizlilik Politikası',
    subtitle: 'Kişisel verilerinizin korunması bizim için önceliklidir.',
    sections: {
      introduction: {
        title: 'Giriş',
        content: 'DriveUp olarak, kullanıcılarımızın gizliliğini korumak ve kişisel verilerini güvenli bir şekilde işlemek bizim için en önemli önceliklerimizden biridir. Bu Gizlilik Politikası, platformumuzu kullanırken topladığımız bilgileri, bu bilgileri nasıl kullandığımızı ve koruduğumuzu açıklamaktadır.'
      },
      dataCollection: {
        title: 'Toplanan Veriler',
        content: 'Platformumuzu kullanırken aşağıdaki bilgileri toplayabiliriz:',
        items: [
          'İletişim bilgileri (ad, soyad, e-posta, telefon numarası)',
          'Kurumsal bilgiler (şirket adı, pozisyon, departman)',
          'Platform kullanım verileri (giriş zamanları, kullanılan özellikler)',
          'Teknik veriler (IP adresi, tarayıcı türü, cihaz bilgileri)',
          'Araç ve filo verileri (araç bilgileri, görseller, operasyonel veriler)'
        ]
      },
      dataUsage: {
        title: 'Verilerin Kullanımı',
        content: 'Toplanan veriler aşağıdaki amaçlarla kullanılmaktadır:',
        items: [
          'Platform hizmetlerinin sunulması ve iyileştirilmesi',
          'Müşteri desteği ve iletişim',
          'Yasal yükümlülüklerin yerine getirilmesi',
          'Güvenlik ve dolandırıcılık önleme',
          'Hizmet kalitesinin artırılması ve analiz'
        ]
      },
      dataSharing: {
        title: 'Veri Paylaşımı',
        content: 'Kişisel verileriniz aşağıdaki durumlar dışında üçüncü taraflarla paylaşılmaz:',
        items: [
          'Yasal yükümlülükler gereği',
          'Hizmet sağlayıcılarımızla (bulut hizmetleri, ödeme işlemcileri)',
          'İş ortaklarımızla (sadece gerekli olduğunda ve gizlilik anlaşması ile)',
          'Kullanıcının açık onayı ile'
        ]
      },
      dataSecurity: {
        title: 'Veri Güvenliği',
        content: 'Verilerinizin güvenliği için SSL/TLS şifreleme, erişim kontrolü, düzenli güvenlik denetimleri ve KVKK/GDPR uyumlu veri işleme süreçleri uygulamaktayız. Araç görsellerinde otomatik plaka ve yüz gizleme teknolojileri kullanılmaktadır.'
      },
      userRights: {
        title: 'Kullanıcı Hakları',
        content: 'KVKK ve GDPR kapsamında aşağıdaki haklara sahipsiniz:',
        items: [
          'Kişisel verilerinizin işlenip işlenmediğini öğrenme',
          'İşlenen kişisel verileriniz hakkında bilgi talep etme',
          'Kişisel verilerinizin düzeltilmesini isteme',
          'Kişisel verilerinizin silinmesini isteme',
          'Kişisel verilerinizin işlenmesine itiraz etme',
          'Kişisel verilerinizin başka bir hizmet sağlayıcıya aktarılmasını isteme'
        ]
      },
      cookies: {
        title: 'Çerezler',
        content: 'Platformumuz, kullanıcı deneyimini iyileştirmek ve analiz yapmak için çerezler kullanmaktadır. Çerez kullanımı hakkında detaylı bilgi için Çerez Politikamızı inceleyebilirsiniz.'
      },
      changes: {
        title: 'Politika Değişiklikleri',
        content: 'Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikler kullanıcılara bildirilecektir. Güncel politika her zaman web sitemizde yayınlanmaktadır.'
      },
      contact: {
        title: 'İletişim',
        content: 'Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:',
        email: 'info@driveuptr.com',
        address: 'DriveUp OÜ Viru väljak 2, 3. korrus, Kesklinna linnaosa, Harju maakond, Tallinn 10111, Estonia'
      }
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container-custom">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {language === 'tr' ? 'Geri' : 'Back'}
        </Button>

        <div className="max-w-4xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-6">
            <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {content.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {Object.entries(content.sections).map(([key, section]: [string, any]) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{section.content}</p>
                {section.items && (
                  <ul className="space-y-2 list-disc list-inside text-sm">
                    {section.items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                {key === 'contact' && (
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <span className="font-semibold">E-posta:</span>{' '}
                      <a href={`mailto:${section.email}`} className="text-primary hover:underline">
                        {section.email}
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">Adres:</span> {section.address}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

