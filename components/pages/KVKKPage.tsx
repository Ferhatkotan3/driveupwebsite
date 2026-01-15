import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Language } from '../../types';

interface KVKKPageProps {
  language: Language;
  onBack: () => void;
  t: any;
}

export const KVKKPage: React.FC<KVKKPageProps> = ({ language, onBack, t }) => {
  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Also try with instant behavior
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const content = t?.kvkk || {
    title: 'KVKK Aydınlatma Metni',
    subtitle: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme.',
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
          'Kimlik bilgileri (ad, soyad, T.C. kimlik no)',
          'İletişim bilgileri (e-posta, telefon, adres)',
          'Kurumsal bilgiler (şirket adı, vergi no, unvan)',
          'Mali bilgiler (fatura bilgileri, ödeme bilgileri)',
          'Araç ve filo verileri (araç bilgileri, görseller, operasyonel veriler)',
          'Platform kullanım verileri (giriş kayıtları, işlem geçmişi)',
          'Teknik veriler (IP adresi, tarayıcı bilgileri, cihaz bilgileri)'
        ]
      },
      processingPurpose: {
        title: 'Veri İşleme Amaçları',
        content: 'Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:',
        items: [
          'Platform hizmetlerinin sunulması ve yürütülmesi',
          'Müşteri ilişkileri yönetimi ve iletişim',
          'Faturalama ve ödeme işlemlerinin gerçekleştirilmesi',
          'Yasal yükümlülüklerin yerine getirilmesi',
          'Güvenlik ve dolandırıcılık önleme',
          'Hizmet kalitesinin artırılması ve analiz',
          'Pazarlama ve tanıtım faaliyetleri (açık rıza ile)'
        ]
      },
      legalBasis: {
        title: 'Hukuki Sebep',
        content: 'Kişisel verileriniz aşağıdaki hukuki sebeplerle işlenmektedir:',
        items: [
          'Sözleşmenin kurulması ve ifası',
          'Yasal yükümlülüklerin yerine getirilmesi',
          'Meşru menfaatlerimiz',
          'Açık rızanız (pazarlama faaliyetleri için)'
        ]
      },
      dataSharing: {
        title: 'Veri Paylaşımı',
        content: 'Kişisel verileriniz aşağıdaki durumlarda paylaşılabilir:',
        items: [
          'Yasal yükümlülükler gereği kamu kurum ve kuruluşlarına',
          'Hizmet sağlayıcılarımıza (bulut hizmetleri, ödeme işlemcileri)',
          'İş ortaklarımıza (sadece gerekli olduğunda ve gizlilik anlaşması ile)',
          'Açık rızanız ile üçüncü taraflara'
        ]
      },
      dataRetention: {
        title: 'Veri Saklama Süresi',
        content: 'Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve yasal saklama yükümlülüklerimiz çerçevesinde saklanmaktadır. Amacın sona ermesi veya yasal saklama süresinin dolması halinde verileriniz silinir, yok edilir veya anonim hale getirilir.'
      },
      userRights: {
        title: 'Veri Sahibi Hakları',
        content: 'KVKK\'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:',
        items: [
          'Kişisel verilerinizin işlenip işlenmediğini öğrenme',
          'İşlenen kişisel verileriniz hakkında bilgi talep etme',
          'İşleme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme',
          'Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme',
          'Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme',
          'Kişisel verilerinizin silinmesini veya yok edilmesini isteme',
          'Düzeltme, silme ve yok etme işlemlerinin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme',
          'İşlenen verilerin münhasıran otomatik sistemler ile analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme',
          'Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması halinde zararın giderilmesini talep etme'
        ]
      },
      dataSecurity: {
        title: 'Veri Güvenliği',
        content: 'Kişisel verilerinizin güvenliği için teknik ve idari tedbirler alınmaktadır:',
        items: [
          'SSL/TLS şifreleme protokolleri',
          'Erişim kontrolü ve yetkilendirme sistemleri',
          'Düzenli güvenlik denetimleri ve testleri',
          'Yedekleme ve felaket kurtarma planları',
          'Personel eğitimleri ve bilinçlendirme çalışmaları',
          'Araç görsellerinde otomatik plaka ve yüz gizleme teknolojileri'
        ]
      },
      application: {
        title: 'Başvuru Hakkı',
        content: 'KVKK kapsamındaki haklarınızı kullanmak için yazılı olarak başvurabilirsiniz. Başvurularınız, kimlik tespiti yapıldıktan sonra en geç 30 gün içinde sonuçlandırılacaktır.',
        applicationMethod: 'Başvurularınızı aşağıdaki yöntemlerle yapabilirsiniz:',
        methods: [
          'E-posta: info@driveuptr.com',
          'Posta: DriveUp OÜ Viru väljak 2, 3. korrus, Kesklinna linnaosa, Harju maakond, Tallinn 10111, Estonia',
          'KVKK Başvuru Formu: Web sitemizdeki iletişim formu'
        ]
      },
      contact: {
        title: 'İletişim',
        content: 'KVKK kapsamındaki haklarınız veya veri işleme uygulamalarımız hakkında sorularınız için:',
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl mb-6">
            <ShieldCheck className="h-8 w-8 text-green-600 dark:text-green-400" />
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
                {section.applicationMethod && (
                  <div className="mt-4">
                    <p className="font-semibold mb-2">{section.applicationMethod}</p>
                    <ul className="space-y-2 list-disc list-inside text-sm">
                      {section.methods.map((method: string, index: number) => (
                        <li key={index}>{method}</li>
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

