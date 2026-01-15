import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Language } from '../../types';

interface CookiePolicyPageProps {
  language: Language;
  onBack: () => void;
  t: any;
}

export const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ language, onBack, t }) => {
  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Also try with instant behavior
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const content = t?.cookiePolicy || {
    title: 'Çerez Politikası',
    subtitle: 'Platformumuzda çerez kullanımı hakkında bilgi.',
    sections: {
      whatAreCookies: {
        title: 'Çerezler Nedir?',
        content: 'Çerezler, web sitelerini ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, web sitesinin düzgün çalışmasını sağlar ve kullanıcı deneyimini iyileştirir.'
      },
      howWeUseCookies: {
        title: 'Çerezleri Nasıl Kullanıyoruz?',
        content: 'DriveUp platformunda çerezleri aşağıdaki amaçlarla kullanıyoruz:',
        items: [
          'Platformun temel işlevlerini sağlamak',
          'Kullanıcı tercihlerini hatırlamak',
          'Kullanıcı deneyimini iyileştirmek',
          'Platform kullanımını analiz etmek',
          'Güvenlik ve dolandırıcılık önleme'
        ]
      },
      cookieTypes: {
        title: 'Çerez Türleri',
        essential: {
          title: 'Zorunlu Çerezler',
          content: 'Bu çerezler platformun çalışması için gereklidir ve devre dışı bırakılamaz.',
          items: [
            'Oturum yönetimi çerezleri',
            'Güvenlik çerezleri',
            'Kullanıcı kimlik doğrulama çerezleri'
          ]
        },
        functional: {
          title: 'İşlevsel Çerezler',
          content: 'Bu çerezler platformun gelişmiş özelliklerini sağlar.',
          items: [
            'Dil tercihi çerezleri',
            'Tema tercihi çerezleri',
            'Kullanıcı ayarları çerezleri'
          ]
        },
        analytics: {
          title: 'Analitik Çerezler',
          content: 'Bu çerezler platform kullanımını analiz etmemize yardımcı olur.',
          items: [
            'Google Analytics çerezleri',
            'Kullanım istatistikleri çerezleri',
            'Performans ölçüm çerezleri'
          ]
        }
      },
      thirdPartyCookies: {
        title: 'Üçüncü Taraf Çerezler',
        content: 'Platformumuzda aşağıdaki üçüncü taraf hizmetlerin çerezleri kullanılabilir:',
        items: [
          'Google Analytics (kullanım analizi)',
          'Ödeme işlemcileri (güvenli ödeme)',
          'Sosyal medya entegrasyonları (paylaşım özellikleri)'
        ]
      },
      cookieManagement: {
        title: 'Çerez Yönetimi',
        content: 'Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz. Ancak, bazı çerezleri devre dışı bırakmak platformun bazı özelliklerinin çalışmamasına neden olabilir.',
        instructions: {
          title: 'Tarayıcı Ayarları',
          items: [
            'Chrome: Ayarlar > Gizlilik ve güvenlik > Çerezler',
            'Firefox: Seçenekler > Gizlilik ve Güvenlik > Çerezler',
            'Safari: Tercihler > Gizlilik > Çerezler',
            'Edge: Ayarlar > Gizlilik > Çerezler'
          ]
        }
      },
      updates: {
        title: 'Politika Güncellemeleri',
        content: 'Bu Çerez Politikası zaman zaman güncellenebilir. Önemli değişiklikler kullanıcılara bildirilecektir.'
      },
      contact: {
        title: 'İletişim',
        content: 'Çerez politikamız hakkında sorularınız için:',
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl mb-6">
            <Cookie className="h-8 w-8 text-orange-600 dark:text-orange-400" />
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
                {section.essential && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="font-semibold mb-2">{section.essential.title}</p>
                      <p className="text-sm mb-2">{section.essential.content}</p>
                      <ul className="space-y-1 list-disc list-inside text-sm ml-4">
                        {section.essential.items.map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    {section.functional && (
                      <div>
                        <p className="font-semibold mb-2">{section.functional.title}</p>
                        <p className="text-sm mb-2">{section.functional.content}</p>
                        <ul className="space-y-1 list-disc list-inside text-sm ml-4">
                          {section.functional.items.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {section.analytics && (
                      <div>
                        <p className="font-semibold mb-2">{section.analytics.title}</p>
                        <p className="text-sm mb-2">{section.analytics.content}</p>
                        <ul className="space-y-1 list-disc list-inside text-sm ml-4">
                          {section.analytics.items.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
                {section.instructions && (
                  <div className="mt-4">
                    <p className="font-semibold mb-2">{section.instructions.title}</p>
                    <ul className="space-y-2 list-disc list-inside text-sm">
                      {section.instructions.items.map((item: string, index: number) => (
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

