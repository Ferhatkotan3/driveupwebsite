import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Check, Headphones, MessageSquare, Clock, Users, Calendar } from 'lucide-react';
import { driveUpDeskContent } from '../../constants/products';
import { Language } from '../../types';

interface DriveUpDeskPageProps {
  language: Language;
  onBack: () => void;
  onContact: () => void;
}

export const DriveUpDeskPage: React.FC<DriveUpDeskPageProps> = ({
  language,
  onBack,
  onContact
}) => {
  const content = driveUpDeskContent[language];

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
                  <span className="text-[#111111] dark:text-white ml-2">Desk</span>
                </h1>
                <Badge variant="outline" className="mt-2">{content.subtitle}</Badge>
                <Badge variant="secondary" className="mt-2 ml-2">
                  {language === 'tr' ? 'Planlanan' : 'Planned'}
                </Badge>
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
                {language === 'tr' ? 'Bilgi Alın' : 'Get Information'}
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
              {language === 'tr' ? 'Destek Merkezi Özellikleri' : 'Support Center Features'}
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
                  <Headphones className="h-5 w-5 text-primary" />
                  {language === 'tr' ? 'Destek Özellikleri' : 'Support Features'}
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
                  <MessageSquare className="h-5 w-5 text-primary" />
                  {language === 'tr' ? 'Müşteri Deneyimi' : 'Customer Experience'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {content.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <MessageSquare className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
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
              {language === 'tr' ? 'Hedef Kullanıcılar' : 'Target Users'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'tr'
                ? 'DriveUpDesk kimler için tasarlandı?'
                : 'Who is DriveUpDesk designed for?'
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
              {language === 'tr' ? 'Fiyatlandırma Modeli' : 'Pricing Model'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {content.pricing.description}
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="card-elevated text-center">
              <CardHeader>
                <CardTitle className="text-2xl">{content.pricing.perUser}</CardTitle>
                <Badge variant="outline" className="w-fit mx-auto">
                  {content.pricing.subscription}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm">
                      {language === 'tr' ? 'Hızlı Yanıt' : 'Fast Response'}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-sm">
                      {language === 'tr' ? '7/24 Destek' : '24/7 Support'}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span className="text-sm">
                      {language === 'tr' ? 'Çoklu Kanal' : 'Multi-Channel'}
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
                ? 'Müşteri Deneyimini Dönüştürün'
                : 'Transform Customer Experience'
              }
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'tr'
                ? 'DriveUpDesk ile müşteri desteğinizi profesyonelleştirin ve memnuniyeti artırın.'
                : 'Professionalize your customer support and increase satisfaction with DriveUpDesk.'
              }
            </p>
            <Button
              className="btn-primary px-8 py-3 text-lg"
              onClick={onContact}
            >
              {language === 'tr' ? 'Bilgi Alın' : 'Get Information'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
