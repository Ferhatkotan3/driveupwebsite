import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Language } from '../../types';

interface GDPRPageProps {
  language: Language;
  onBack: () => void;
  t: any;
}

export const GDPRPage: React.FC<GDPRPageProps> = ({ language, onBack, t }) => {
  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Also try with instant behavior
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const content = t?.gdpr || {
    title: 'GDPR - Veri Koruma Politikası',
    subtitle: 'DriveUp olarak kişisel verilerinizin korunması bizim için önceliklidir.',
    sections: {
      dataController: {
        title: 'Veri Sorumlusu',
        content: 'Kişisel verilerinizin işlenmesinden sorumlu olan veri sorumlusu:',
        companyName: 'DriveUp Technologies OÜ',
        address: 'DriveUp OÜ Viru väljak 2, 3. korrus, Kesklinna linnaosa, Harju maakond, Tallinn 10111, Estonia',
        email: 'info@driveuptr.com'
      },
      dataTypes: {
        title: 'Toplanan Kişisel Veri Türleri',
        content: 'Platformumuz aracılığıyla aşağıdaki kişisel verileri topluyoruz:',
        items: [
          'İletişim bilgileri (ad, soyad, e-posta, telefon)',
          'Araç görselleri ve ilgili veriler',
          'Platform kullanım verileri',
          'Teknik veriler (IP adresi, tarayıcı bilgileri)'
        ]
      },
      processing: {
        title: 'Veri İşleme Amaçları',
        content: 'Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:',
        items: [
          'Platform hizmetlerinin sunulması',
          'Müşteri desteği ve iletişim',
          'Yasal yükümlülüklerin yerine getirilmesi',
          'Güvenlik ve dolandırıcılık önleme',
          'KVKK ve GDPR uyumluluğunun sağlanması'
        ]
      },
      userRights: {
        title: 'Veri Sahibi Haklarınız',
        content: 'GDPR kapsamında aşağıdaki haklara sahipsiniz:',
        items: [
          'Bilgi alma ve erişim hakkı',
          'Düzeltme hakkı',
          'Silme hakkı',
          'İtiraz hakkı',
          'Veri taşınabilirliği hakkı'
        ],
        contactTitle: 'Haklarınızı Kullanma',
        contactInfo: 'Yukarıdaki haklarınızı kullanmak için info@driveuptr.com adresine e-posta gönderebilirsiniz.'
      },
      dataSecurity: {
        title: 'Veri Güvenliği',
        content: 'Kişisel verilerinizin güvenliği için SSL/TLS şifreleme, erişim kontrolü, düzenli güvenlik denetimleri ve GDPR uyumlu veri işleme süreçleri uygulamaktayız. Araç görsellerinde otomatik plaka ve yüz gizleme teknolojileri kullanılmaktadır.'
      },
      contact: {
        title: 'İletişim',
        content: 'GDPR kapsamındaki haklarınız veya veri işleme uygulamalarımız hakkında sorularınız için:',
        emailLabel: 'E-posta',
        email: 'info@driveuptr.com',
        addressLabel: 'Adres',
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
                {key === 'dataController' && (
                  <div className="mt-4 bg-muted p-4 rounded-lg">
                    <p className="font-semibold mb-2">{section.companyName}</p>
                    <p className="text-sm">{section.address}</p>
                    <p className="text-sm">{section.email}</p>
                  </div>
                )}
                {key === 'userRights' && section.contactTitle && (
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm font-semibold mb-2">{section.contactTitle}</p>
                    <p className="text-sm">{section.contactInfo}</p>
                  </div>
                )}
                {key === 'contact' && (
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <span className="font-semibold">{section.emailLabel}:</span>{' '}
                      <a href={`mailto:${section.email}`} className="text-primary hover:underline">
                        {section.email}
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">{section.addressLabel}:</span> {section.address}
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

