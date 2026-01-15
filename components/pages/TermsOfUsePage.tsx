import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Language } from '../../types';

interface TermsOfUsePageProps {
  language: Language;
  onBack: () => void;
  t: any;
}

export const TermsOfUsePage: React.FC<TermsOfUsePageProps> = ({ language, onBack, t }) => {
  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Also try with instant behavior
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const content = t?.termsOfUse || {
    title: 'Kullanım Şartları',
    subtitle: 'DriveUp platformunu kullanmadan önce lütfen bu şartları okuyun.',
    sections: {
      acceptance: {
        title: 'Kabul ve Onay',
        content: 'DriveUp platformunu kullanarak, bu Kullanım Şartlarını kabul etmiş sayılırsınız. Eğer bu şartları kabul etmiyorsanız, lütfen platformu kullanmayın.'
      },
      serviceDescription: {
        title: 'Hizmet Açıklaması',
        content: 'DriveUp, filo yönetimi, araç kiralama, bakım-onarım ve ilgili operasyonel süreçler için dijital platform hizmetleri sunmaktadır. Hizmetlerimiz sürekli geliştirilmekte ve güncellenmektedir.'
      },
      userAccount: {
        title: 'Kullanıcı Hesabı',
        content: 'Platformu kullanmak için bir hesap oluşturmanız gerekebilir. Hesap bilgilerinizin güvenliğinden siz sorumlusunuz. Şifrenizi kimseyle paylaşmayın ve şüpheli aktivite fark ederseniz derhal bizimle iletişime geçin.',
        items: [
          'Hesap bilgileriniz doğru ve güncel olmalıdır',
          'Hesabınızı başkalarıyla paylaşmamalısınız',
          'Yetkisiz erişim girişimlerini derhal bildirmelisiniz'
        ]
      },
      acceptableUse: {
        title: 'Kabul Edilebilir Kullanım',
        content: 'Platformu aşağıdaki amaçlarla kullanabilirsiniz:',
        items: [
          'Yasal ve meşru iş amaçları için',
          'Filo yönetimi ve operasyonel süreçler için',
          'Araç kiralama ve yönetim işlemleri için',
          'Bakım ve onarım süreçlerini yönetmek için'
        ],
        prohibited: {
          title: 'Yasak Kullanımlar',
          items: [
            'Yasadışı faaliyetler için platformu kullanmak',
            'Başkalarının haklarını ihlal etmek',
            'Zararlı yazılım yüklemek veya yaymak',
            'Platformun güvenliğini tehdit etmek',
            'Sahte bilgi girmek veya kimlik hırsızlığı yapmak'
          ]
        }
      },
      intellectualProperty: {
        title: 'Fikri Mülkiyet',
        content: 'DriveUp platformu ve içeriği, DriveUp\'a ait fikri mülkiyet hakları ile korunmaktadır. Platform içeriğini izinsiz kopyalayamaz, dağıtamaz veya ticari amaçlarla kullanamazsınız.'
      },
      dataAndPrivacy: {
        title: 'Veri ve Gizlilik',
        content: 'Kişisel verilerinizin işlenmesi Gizlilik Politikamız kapsamındadır. Platformu kullanarak, verilerinizin bu politika uyarınca işlenmesini kabul edersiniz.'
      },
      serviceAvailability: {
        title: 'Hizmet Kullanılabilirliği',
        content: 'DriveUp, hizmetlerin kesintisiz sunulması için çaba gösterse de, teknik bakım, güncellemeler veya beklenmeyen durumlar nedeniyle geçici kesintiler olabilir. Bu durumlardan sorumlu tutulamayız.'
      },
      liability: {
        title: 'Sorumluluk Sınırlaması',
        content: 'DriveUp, platform kullanımından kaynaklanan dolaylı, özel veya sonuç zararlarından sorumlu tutulamaz. Hizmetlerimiz "olduğu gibi" sunulmaktadır.'
      },
      termination: {
        title: 'Hesap Sonlandırma',
        content: 'DriveUp, Kullanım Şartlarını ihlal eden hesapları uyarı vermeksizin sonlandırma hakkını saklı tutar. Ayrıca, hesabınızı istediğiniz zaman kapatabilirsiniz.'
      },
      changes: {
        title: 'Şart Değişiklikleri',
        content: 'Bu Kullanım Şartları zaman zaman güncellenebilir. Önemli değişiklikler kullanıcılara bildirilecektir. Güncel şartlar her zaman web sitemizde yayınlanmaktadır.'
      },
      contact: {
        title: 'İletişim',
        content: 'Kullanım Şartları hakkında sorularınız için:',
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl mb-6">
            <FileText className="h-8 w-8 text-purple-600 dark:text-purple-400" />
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
                {section.prohibited && (
                  <div className="mt-4">
                    <p className="font-semibold mb-2">{section.prohibited.title}</p>
                    <ul className="space-y-2 list-disc list-inside text-sm text-red-600 dark:text-red-400">
                      {section.prohibited.items.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
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

