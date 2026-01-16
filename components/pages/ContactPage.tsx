import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin,
  Send,
  CheckCircle,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { sendContactEmail } from '../../utils/emailService';

interface ContactPageProps {
  t: any;
  onContactClick: () => void;
  language?: 'tr' | 'en';
}

export const ContactPage: React.FC<ContactPageProps> = ({ t, onContactClick, language = 'tr' }) => {
  // Scroll to top when page loads
  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Additional scroll after a small delay
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await sendContactEmail(
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        },
        language
      );

      if (result.success) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            message: '',
            service: ''
          });
        }, 3000);
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError(
        language === 'en' 
          ? 'An error occurred. Please try again.' 
          : 'Bir hata oluştu. Lütfen tekrar deneyin.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const services = t?.contact?.page?.services || (language === 'en' ? [
    'DriveUpFixer - Maintenance & Repair',
    'DriveUpPro - Fleet Management',
    'DriveUpManager - Operations Management',
    'DriveUpStudio - AI Visualization',
    'DriveUpRedact - Data Security',
    'DriveUpDesk - Support Center',
    'General Consulting',
    'Technical Support',
    'Other'
  ] : [
    'DriveUpFixer - Bakım & Onarım',
    'DriveUpPro - Filo Yönetimi',
    'DriveUpManager - Operasyon Yönetimi',
    'DriveUpStudio - AI Görselleştirme',
    'DriveUpRedact - Veri Güvenliği',
    'DriveUpDesk - Destek Merkezi',
    'Genel Danışmanlık',
    'Teknik Destek',
    'Diğer'
  ]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient pt-24 pb-6">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-3">{t?.contact?.page?.heroTitle || (language === 'en' ? 'Contact Us' : 'İletişime Geçin')}</h1>
            <p className="text-large mb-4 max-w-3xl mx-auto">
              {t?.contact?.page?.heroSubtitle || (language === 'en'
                ? 'Contact us to learn more about our fleet management software, request a demo, or get technical support.'
                : 'Filo yönetimi yazılımlarımız hakkında bilgi almak, demo talep etmek veya teknik destek almak için bizimle iletişime geçin.')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{t?.contact?.page?.formTitle || (language === 'en' ? 'Get in Touch' : 'Bize Ulaşın')}</CardTitle>
                  <p className="text-muted-foreground">
                    {t?.contact?.page?.formSubtitle || (language === 'en'
                      ? 'You can contact us by filling out the form below. We will get back to you as soon as possible.'
                      : 'Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz. En kısa sürede size dönüş yapacağız.')}
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{t?.contact?.page?.formSubmitted || (language === 'en' ? 'Your Message Has Been Sent!' : 'Mesajınız Gönderildi!')}</h3>
                      <p className="text-muted-foreground">
                        {t?.contact?.page?.formSubmittedMessage || (language === 'en' ? 'We will get back to you as soon as possible.' : 'En kısa sürede size dönüş yapacağız.')}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {error && (
                        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            {t?.contact?.page?.labels?.name || (language === 'en' ? 'Full Name' : 'Ad Soyad')} {t?.contact?.page?.labels?.required || '*'}
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={t?.contact?.page?.labels?.namePlaceholder || (language === 'en' ? 'Your first and last name' : 'Adınız ve soyadınız')}
                            disabled={isLoading}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            {t?.contact?.page?.labels?.email || (language === 'en' ? 'Email' : 'E-posta')} {t?.contact?.page?.labels?.required || '*'}
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder={t?.contact?.page?.labels?.emailPlaceholder || (language === 'en' ? 'example@email.com' : 'ornek@email.com')}
                            disabled={isLoading}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-2">
                            {t?.contact?.page?.labels?.company || (language === 'en' ? 'Company' : 'Şirket')}
                          </label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder={t?.contact?.page?.labels?.companyPlaceholder || (language === 'en' ? 'Your company name' : 'Şirket adınız')}
                            disabled={isLoading}
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            {t?.contact?.page?.labels?.phone || (language === 'en' ? 'Phone' : 'Telefon')}
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder={t?.contact?.page?.labels?.phonePlaceholder || (language === 'en' ? '+1 (555) 123-4567' : '0552 415 0255')}
                            disabled={isLoading}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          {t?.contact?.page?.labels?.service || (language === 'en' ? 'Service of Interest' : 'İlgilendiğiniz Hizmet')}
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={isLoading}
                        >
                          <option value="">{t?.contact?.page?.labels?.selectService || (language === 'en' ? 'Select a service' : 'Hizmet seçiniz')}</option>
                          {services.map((service: string, index: number) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          {t?.contact?.page?.labels?.message || (language === 'en' ? 'Message' : 'Mesaj')} {t?.contact?.page?.labels?.required || '*'}
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder={t?.contact?.page?.labels?.messagePlaceholder || (language === 'en' ? 'Write your message here...' : 'Mesajınızı buraya yazın...')}
                          disabled={isLoading}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="btn-primary w-full"
                        disabled={isLoading || isSubmitted}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            {language === 'en' ? 'Sending...' : 'Gönderiliyor...'}
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            {t?.contact?.page?.labels?.submit || (language === 'en' ? 'Send Message' : 'Mesaj Gönder')}
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-6">{t?.contact?.page?.contactInfoTitle || (language === 'en' ? 'Contact Information' : 'İletişim Bilgileri')}</h2>
                
                {/* Telefon */}
                <Card className="card-minimal mb-4">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#5A00FF]/10 flex-shrink-0">
                        <Phone className="h-6 w-6 text-[#5A00FF]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2 text-lg">{t?.contact?.page?.phone?.title || (language === 'en' ? 'Phone' : 'Telefon')}</h3>
                        <a 
                          href={`tel:${t?.contact?.page?.phone?.number?.replace(/\s/g, '') || '+905524150255'}`}
                          className="text-[#5A00FF] hover:text-[#4A00E6] transition-colors font-medium text-lg block mb-1"
                        >
                          {t?.contact?.page?.phone?.number || '0552 415 0255'}
                        </a>
                        <p className="text-sm text-muted-foreground">
                          {t?.contact?.page?.phone?.hours || (language === 'en' ? 'Monday - Friday: 09:00 - 18:00' : 'Pazartesi - Cuma: 09:00 - 18:00')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* E-posta */}
                <Card className="card-minimal mb-4">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#5A00FF]/10 flex-shrink-0">
                        <Mail className="h-6 w-6 text-[#5A00FF]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2 text-lg">{t?.contact?.page?.email?.title || (language === 'en' ? 'Contact via Email' : 'E-posta ile ulaşın')}</h3>
                        <a 
                          href={`mailto:${t?.contact?.page?.email?.address || 'info@driveuptr.com'}`}
                          className="text-[#5A00FF] hover:text-[#4A00E6] transition-colors font-medium text-lg block mb-1"
                        >
                          {t?.contact?.page?.email?.address || 'info@driveuptr.com'}
                        </a>
                        <p className="text-sm text-muted-foreground">
                          {t?.contact?.page?.email?.support || (language === 'en' ? '24/7 email support' : '7/24 e-posta desteği')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Adres */}
                <Card className="card-minimal">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#5A00FF]/10 flex-shrink-0">
                        <MapPin className="h-6 w-6 text-[#5A00FF]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2 text-lg">{t?.contact?.page?.address?.title || (language === 'en' ? 'Headquarters' : 'Genel Merkez')}</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p className="text-sm">{t?.contact?.page?.address?.line1 || 'DriveUp OÜ Viru väljak 2, 3. korrus'}</p>
                          <p className="text-sm">{t?.contact?.page?.address?.line2 || 'Kesklinna linnaosa, Harju maakond'}</p>
                          <p className="text-sm">{t?.contact?.page?.address?.line3 || 'Tallinn 10111, Estonia'}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">{t?.contact?.page?.cta?.title || (language === 'en' ? 'Get Started Now' : 'Hemen Başlayın')}</h2>
            <p className="text-large mb-8">
              {t?.contact?.page?.cta?.subtitle || (language === 'en'
                ? 'Contact us to learn more about our fleet management software or request a demo.'
                : 'Filo yönetimi yazılımlarımız hakkında daha fazla bilgi almak veya demo talep etmek için bizimle iletişime geçin.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={onContactClick}
                className="btn-primary px-8 py-3 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                {t?.contact?.page?.cta?.callButton || (language === 'en' ? 'Call Now' : 'Hemen Ara')}
              </Button>
              <a href={`mailto:${t?.contact?.page?.email?.address || 'info@driveuptr.com'}`}>
                <Button variant="outline" className="btn-secondary px-8 py-3 text-lg">
                  <Mail className="mr-2 h-5 w-5" />
                  {t?.contact?.page?.cta?.emailButton || (language === 'en' ? 'Send Email' : 'E-posta Gönder')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
