import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Check, TrendingUp, Settings, BarChart3, Users, Calendar } from 'lucide-react';
import { driveUpManagerContent } from '../../constants/products';
import { Language } from '../../types';

interface DriveUpManagerPageProps {
  language: Language;
  onBack: () => void;
  onContact: () => void;
}

export const DriveUpManagerPage: React.FC<DriveUpManagerPageProps> = ({
  language,
  onBack,
  onContact
}) => {
  const content = driveUpManagerContent[language];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient section-padding pt-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted">
                <content.icon className={`h-8 w-8 ${content.color}`} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <span className="text-[#111111] dark:text-white" style={{ fontWeight: 700 }}>Drive</span>
                  <span style={{ color: '#1F5ED9', fontWeight: 700 }}>UP</span>
                  <span style={{ color: '#1F5ED9', fontSize: '0.5em', verticalAlign: 'top', marginLeft: '2px', alignSelf: 'start', marginTop: '10px' }}>®</span>
                  <span className="text-[#111111] dark:text-white ml-2">Manager</span>
                </h1>
                <Badge variant="outline" className="mt-2">{content.subtitle}</Badge>
              </div>
            </div>

            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              {content.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                className="btn-primary px-8 py-3 text-lg"
                onClick={onContact}
              >
                {language === 'tr' ? 'Demo Talep Edin' : 'Request Demo'}
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 text-lg"
                onClick={onBack}
              >
                {language === 'tr' ? 'Geri Dön' : 'Go Back'}
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {Object.entries(content.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-primary mb-2">
                    {value as string}
                  </div>
                  <div className="text-sm text-muted-foreground capitalize">
                    {key}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">
              {language === 'tr' ? 'Operasyonel Özellikler' : 'Operational Features'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {content.longDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Features */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  {language === 'tr' ? 'Yönetim Özellikleri' : 'Management Features'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {content.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  {language === 'tr' ? 'İş Avantajları' : 'Business Benefits'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {content.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <TrendingUp className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">
              {language === 'tr' ? 'Hedef Müşteriler' : 'Target Customers'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'tr'
                ? 'DriveUpManager hangi işletmeler için uygun?'
                : 'Which businesses is DriveUpManager suitable for?'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.targetAudience.map((audience, index) => (
              <Card key={index} className="card-minimal hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">{audience}</h4>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">
              {language === 'tr' ? 'Fiyatlandırma Paketleri' : 'Pricing Packages'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {content.pricing.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Basic Package */}
            <Card className="card-elevated text-center">
              <CardHeader>
                <CardTitle className="text-xl">
                  {language === 'tr' ? 'Temel' : 'Basic'}
                </CardTitle>
                <div className="text-3xl font-bold text-primary">₺299</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'tr' ? 'aylık' : 'monthly'}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      {language === 'tr' ? '5 Kullanıcı' : '5 Users'}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      {language === 'tr' ? 'Temel Raporlar' : 'Basic Reports'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Package */}
            <Card className="card-elevated text-center border-primary">
              <CardHeader>
                <CardTitle className="text-xl">
                  {language === 'tr' ? 'Profesyonel' : 'Professional'}
                </CardTitle>
                <div className="text-3xl font-bold text-primary">₺599</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'tr' ? 'aylık' : 'monthly'}
                </div>
                <Badge className="w-fit mx-auto">Popüler</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      {language === 'tr' ? '15 Kullanıcı' : '15 Users'}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      {language === 'tr' ? 'Gelişmiş Raporlar' : 'Advanced Reports'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="card-elevated text-center">
              <CardHeader>
                <CardTitle className="text-xl">
                  {language === 'tr' ? 'Kurumsal' : 'Enterprise'}
                </CardTitle>
                <div className="text-3xl font-bold text-primary">₺999</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'tr' ? 'aylık' : 'monthly'}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      {language === 'tr' ? 'Sınırsız Kullanıcı' : 'Unlimited Users'}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      {language === 'tr' ? 'Özel Raporlar' : 'Custom Reports'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">
              {language === 'tr'
                ? 'Operasyonlarınızı Dijitalleştirin'
                : 'Digitalize Your Operations'
              }
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'tr'
                ? 'DriveUpManager ile araç kiralama işletmenizi bir üst seviyeye taşıyın.'
                : 'Take your car rental business to the next level with DriveUpManager.'
              }
            </p>
            <Button
              className="btn-primary px-8 py-3 text-lg"
              onClick={onContact}
            >
              {language === 'tr' ? 'Demo Talep Edin' : 'Request Demo'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
