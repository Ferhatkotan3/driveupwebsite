import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Check, Car, MapPin, Fuel, Users, Calendar } from 'lucide-react';
import { driveUpProContent } from '../../constants/products';
import { Language } from '../../types';

interface DriveUpProPageProps {
  language: Language;
  onBack: () => void;
  onContact: () => void;
}

export const DriveUpProPage: React.FC<DriveUpProPageProps> = ({ 
  language, 
  onBack, 
  onContact 
}) => {
  const content = driveUpProContent[language];

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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="text-foreground">Drive</span>
                  <span style={{color: '#4a00ff'}}>UP</span>
                  <span className="text-foreground">Pro</span>
                </h1>
                <Badge variant="outline" className="mt-2">{content.subtitle}</Badge>
                <Badge variant="secondary" className="mt-2 ml-2">
                  {language === 'tr' ? 'Geliştirme Aşamasında' : 'In Development'}
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
                {language === 'tr' ? 'Erken Erişim Talep Edin' : 'Request Early Access'}
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
              {language === 'tr' ? 'Filo Yönetim Özellikleri' : 'Fleet Management Features'}
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
                  <Car className="h-5 w-5 text-primary" />
                  {language === 'tr' ? 'Filo Özellikleri' : 'Fleet Features'}
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
                  <MapPin className="h-5 w-5 text-primary" />
                  {language === 'tr' ? 'Operasyonel Avantajlar' : 'Operational Benefits'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {content.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
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
              {language === 'tr' ? 'Hedef Şirketler' : 'Target Companies'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'tr' 
                ? 'DriveUpPro hangi şirketler için uygun?'
                : 'Which companies is DriveUpPro suitable for?'
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Per Vehicle */}
            <Card className="card-elevated text-center">
              <CardHeader>
                <CardTitle className="text-xl">{content.pricing.perVehicle}</CardTitle>
                <div className="text-3xl font-bold text-primary">₺15</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'tr' ? 'araç başına aylık' : 'per vehicle monthly'}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <Car className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      {language === 'tr' ? 'Araç Takibi' : 'Vehicle Tracking'}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      {language === 'tr' ? 'GPS Konum' : 'GPS Location'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Subscription */}
            <Card className="card-elevated text-center border-primary">
              <CardHeader>
                <CardTitle className="text-xl">{content.pricing.subscription}</CardTitle>
                <div className="text-3xl font-bold text-primary">₺499</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'tr' ? 'aylık abonelik' : 'monthly subscription'}
                </div>
                <Badge className="w-fit mx-auto">Önerilen</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <Fuel className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      {language === 'tr' ? 'Yakıt Takibi' : 'Fuel Tracking'}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      {language === 'tr' ? 'Bakım Planı' : 'Maintenance Plan'}
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
                ? 'Filonuzu Akıllı Yönetin'
                : 'Manage Your Fleet Intelligently'
              }
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'tr'
                ? 'DriveUpPro ile filo verimliliğinizi artırın ve maliyetlerinizi optimize edin.'
                : 'Increase your fleet efficiency and optimize your costs with DriveUpPro.'
              }
            </p>
            <Button 
              className="btn-primary px-8 py-3 text-lg"
              onClick={onContact}
            >
              {language === 'tr' ? 'Erken Erişim Talep Edin' : 'Request Early Access'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
