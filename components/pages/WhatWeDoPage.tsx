import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { 
  Car, 
  Wrench, 
  ShoppingCart, 
  BarChart3, 
  Settings,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Target,
  Database,
  Smartphone,
  Globe
} from 'lucide-react';

interface WhatWeDoPageProps {
  onContact: () => void;
}

export const WhatWeDoPage: React.FC<WhatWeDoPageProps> = ({ onContact }) => {
  const services = [
    {
      title: 'Araç Ekleme ve Takip',
      description: 'Filonuza yeni araçlar ekleyin, detaylı bilgilerini kaydedin ve gerçek zamanlı takip yapın.',
      icon: Car,
      features: [
        'Araç envanteri yönetimi',
        'Detaylı araç bilgileri',
        'GPS konum takibi',
        'Yakıt tüketim izleme',
        'Kilometre takibi',
        'Araç durumu güncellemeleri'
      ],
      benefits: [
        'Tam filo görünürlüğü',
        'Gerçek zamanlı konum bilgisi',
        'Otomatik kilometre kayıtları',
        'Yakıt tüketim analizi'
      ]
    },
    {
      title: 'Muayene Yönetimi',
      description: 'Araç muayene süreçlerini dijitalleştirin, hatırlatmalar alın ve uyumluluk sağlayın.',
      icon: Shield,
      features: [
        'Muayene takvimleri',
        'Otomatik hatırlatmalar',
        'Belge yönetimi',
        'Uyumluluk raporları',
        'Muayene geçmişi',
        'Maliyet takibi'
      ],
      benefits: [
        'Muayene kaçırma riski yok',
        'Otomatik belge takibi',
        'Uyumluluk garantisi',
        'Maliyet optimizasyonu'
      ]
    },
    {
      title: 'Arıza ve Bakım Yönetimi',
      description: 'Araç arızalarını kaydedin, bakım planları oluşturun ve servis süreçlerini yönetin.',
      icon: Wrench,
      features: [
        'Arıza kayıt sistemi',
        'Bakım planları',
        'Servis entegrasyonu',
        'Yedek parça takibi',
        'Maliyet analizi',
        'Performans raporları'
      ],
      benefits: [
        'Proaktif bakım',
        'Arıza önleme',
        'Servis optimizasyonu',
        'Maliyet kontrolü'
      ]
    },
    {
      title: 'Yedek Parça ve İhale Yönetimi',
      description: 'Yedek parça ihtiyaçlarını yönetin, ihale süreçlerini dijitalleştirin ve tedarikçilerle entegre olun.',
      icon: ShoppingCart,
      features: [
        'Yedek parça envanteri',
        'Dijital ihale sistemi',
        'Tedarikçi yönetimi',
        'Fiyat karşılaştırması',
        'Sipariş takibi',
        'Kalite kontrolü'
      ],
      benefits: [
        'Maliyet optimizasyonu',
        'Hızlı tedarik',
        'Kalite garantisi',
        'Şeffaf süreçler'
      ]
    },
    {
      title: 'Kiralama ve Operasyon Yönetimi',
      description: 'Araç kiralama süreçlerini yönetin, rezervasyonları takip edin ve operasyonel verimliliği artırın.',
      icon: Settings,
      features: [
        'Rezervasyon yönetimi',
        'Sözleşme takibi',
        'Müşteri yönetimi',
        'Fiyatlandırma',
        'Ödeme takibi',
        'Operasyon raporları'
      ],
      benefits: [
        'Operasyonel verimlilik',
        'Müşteri memnuniyeti',
        'Gelir optimizasyonu',
        'Süreç otomasyonu'
      ]
    },
    {
      title: 'Yakıt ve Maliyet Takibi',
      description: 'Yakıt tüketimini izleyin, maliyetleri analiz edin ve tasarruf fırsatlarını belirleyin.',
      icon: TrendingUp,
      features: [
        'Yakıt tüketim takibi',
        'Maliyet analizi',
        'Bütçe yönetimi',
        'Tasarruf raporları',
        'Trend analizi',
        'Karşılaştırmalı analiz'
      ],
      benefits: [
        'Maliyet kontrolü',
        'Tasarruf fırsatları',
        'Bütçe optimizasyonu',
        'Veri odaklı kararlar'
      ]
    },
    {
      title: 'Operasyonel Raporlama',
      description: 'Detaylı raporlar oluşturun, performansı analiz edin ve stratejik kararlar alın.',
      icon: BarChart3,
      features: [
        'Performans dashboard\'ları',
        'Özelleştirilebilir raporlar',
        'Trend analizi',
        'Karşılaştırmalı analiz',
        'Otomatik raporlama',
        'Veri görselleştirme'
      ],
      benefits: [
        'Veri odaklı kararlar',
        'Performans izleme',
        'Stratejik planlama',
        'Sürekli iyileştirme'
      ]
    }
  ];

  const technologies = [
    {
      name: 'Cloud Computing',
      description: 'AWS üzerinde güvenli ve ölçeklenebilir altyapı',
      icon: Globe
    },
    {
      name: 'Real-time Tracking',
      description: 'GPS ve IoT sensörlerle gerçek zamanlı takip',
      icon: Target
    },
    {
      name: 'Mobile First',
      description: 'Mobil öncelikli tasarım ve uygulamalar',
      icon: Smartphone
    },
    {
      name: 'Big Data Analytics',
      description: 'Büyük veri analizi ve makine öğrenmesi',
      icon: Database
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient section-padding pt-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Filo Yönetimi Çözümlerimiz</h1>
            <p className="text-large mb-8 max-w-3xl mx-auto">
              Araç ekleme ve takipten operasyonel raporlamaya kadar filo yönetiminin tüm süreçlerini 
              dijitalleştiren kapsamlı yazılım çözümleri sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-primary px-8 py-3 text-lg"
                onClick={onContact}
              >
                Çözümlerimizi Keşfedin
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Filo Yönetimi Süreçlerimiz</h2>
            <p className="text-large">
              Modern teknoloji ile filo yönetiminin her aşamasını optimize ediyoruz. 
              Araç takibinden bakım yönetimine, operasyonel süreçlerden raporlamaya kadar 
              tüm süreçleri tek platformda birleştiriyoruz.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-large mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Özellikler:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Avantajlar:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Zap className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="card-elevated">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 mb-6">
                          <service.icon className="h-10 w-10 text-primary" />
                        </div>
                        <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
                        <p className="text-muted-foreground mb-6">
                          {service.description}
                        </p>
                        <div className="space-y-3">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-accent" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Teknoloji Altyapımız</h2>
            <p className="text-large">
              Modern teknolojiler kullanarak güvenilir, ölçeklenebilir ve performanslı 
              yazılım çözümleri geliştiriyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="card-minimal text-center hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                    <tech.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Filo Yönetimi Süreç Akışı</h2>
            <p className="text-large">
              Araç eklemeden raporlamaya kadar tüm süreçlerin nasıl entegre çalıştığını keşfedin.
            </p>
          </div>

          <div className="relative">
            {/* Process Flow Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Araç Ekleme', description: 'Filo envanterine araç ekleme ve bilgi girişi' },
                { step: '2', title: 'Takip & İzleme', description: 'GPS takibi ve gerçek zamanlı konum bilgisi' },
                { step: '3', title: 'Bakım & Onarım', description: 'Otomatik bakım planları ve arıza yönetimi' },
                { step: '4', title: 'Raporlama', description: 'Performans analizi ve stratejik raporlar' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Connecting Lines */}
            <div className="hidden lg:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-primary/20 -z-10"></div>
            <div className="hidden lg:block absolute top-8 left-1/2 right-1/4 h-0.5 bg-primary/20 -z-10"></div>
            <div className="hidden lg:block absolute top-8 left-3/4 right-1/4 h-0.5 bg-primary/20 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Filo Yönetimi Çözümlerimizin Faydaları</h2>
            <p className="text-large">
              Modern filo yönetimi yazılımları ile operasyonlarınızı optimize edin, 
              maliyetlerinizi azaltın ve verimliliğinizi artırın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Verimlilik Artışı',
                description: 'Operasyonel süreçleri otomatikleştirerek %40 verimlilik artışı sağlayın.',
                metric: '%40'
              },
              {
                icon: Clock,
                title: 'Zaman Tasarrufu',
                description: 'Manuel süreçleri dijitalleştirerek günlük 2-3 saat zaman tasarrufu elde edin.',
                metric: '2-3 Saat'
              },
              {
                icon: Shield,
                title: 'Risk Azaltma',
                description: 'Proaktif bakım ve takip ile arıza riskini %60 azaltın.',
                metric: '%60'
              },
              {
                icon: Users,
                title: 'Müşteri Memnuniyeti',
                description: 'Hızlı yanıt ve kaliteli hizmet ile müşteri memnuniyetini artırın.',
                metric: '%95'
              },
              {
                icon: Target,
                title: 'Maliyet Optimizasyonu',
                description: 'Akıllı analizler ile operasyonel maliyetleri %25 azaltın.',
                metric: '%25'
              },
              {
                icon: BarChart3,
                title: 'Veri Odaklı Kararlar',
                description: 'Detaylı raporlar ile stratejik kararlar alın ve rekabet avantajı elde edin.',
                metric: '7/24'
              }
            ].map((benefit, index) => (
              <Card key={index} className="card-minimal text-center hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{benefit.metric}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">Filonuzu Dijitalleştirmeye Başlayın</h2>
            <p className="text-large mb-8">
              Modern filo yönetimi çözümlerimiz ile operasyonlarınızı optimize edin, 
              maliyetlerinizi azaltın ve verimliliğinizi artırın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-primary px-8 py-3 text-lg"
                onClick={onContact}
              >
                Ücretsiz Demo Talep Et
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="btn-secondary px-8 py-3 text-lg"
                onClick={onContact}
              >
                Danışmanlık Al
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
