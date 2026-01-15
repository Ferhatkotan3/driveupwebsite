import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Car, 
  Wrench, 
  ShoppingCart, 
  Settings,
  Headphones,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Clock,
  Shield
} from 'lucide-react';

interface ProductsPageProps {
  onProductClick: (productId: string) => void;
  onContact: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ 
  onProductClick, 
  onContact 
}) => {
  const products = [
    {
      id: 'driveupfixer',
      title: 'DriveUpFixer',
      subtitle: 'Bakım & Onarım Yönetimi',
      description: 'Araç bakım ve onarım süreçlerini dijitalleştiren kapsamlı platform. Periyodik bakım planları, hasar takibi ve servis entegrasyonu.',
      icon: Wrench,
      color: 'text-orange-600',
      status: 'active',
      features: [
        'Periyodik bakım takvimleri',
        'Hasar kaydı ve takibi',
        'Servis sağlayıcı ağı yönetimi',
        'Maliyet analizi ve raporlama',
        'Mobil hasar bildirimi',
        'Yedek parça tedarik sistemi'
      ],
      metrics: {
        downtime: '%30 Azalma',
        cost: '%20 Tasarruf',
        response: '2 Saat Yanıt'
      }
    },
    {
      id: 'driveupgo',
      title: 'DriveUpGo',
      subtitle: 'Bireysel ve Kurumsal Kiralama Platformu',
      description: 'Bireysel kullanıcılar ve kurumsal müşteriler için araç kiralama marketplace\'i. Fiyat karşılaştırması ve güvenli rezervasyon.',
      icon: ShoppingCart,
      color: 'text-blue-600',
      status: 'active',
      features: [
        'Çoklu kiralama şirketi fiyat karşılaştırması',
        'Gerçek zamanlı müsaitlik kontrolü',
        'Güvenli ödeme sistemi',
        'Kullanıcı değerlendirme sistemi',
        'Mobil ve web uygulaması',
        'GPS entegrasyonu'
      ],
      metrics: {
        partners: '50+ Ortak',
        bookings: '10K+ Rezervasyon',
        rating: '4.8/5 Puan'
      }
    },
    {
      id: 'driveuppro',
      title: 'DriveUpPro',
      subtitle: 'Filo Yönetimi Çözümü',
      description: 'Özmal araç sahibi şirketler için gelişmiş filo yönetimi. Araç takibi, personel zimmeti ve operasyonel optimizasyon.',
      icon: Car,
      color: 'text-green-600',
      status: 'development',
      features: [
        'Filo araç envanteri yönetimi',
        'Personel zimmet sistemi',
        'GPS takip ve güzergah analizi',
        'Yakıt tüketimi izleme',
        'Kullanım raporları',
        'Politika ve kural yönetimi'
      ],
      metrics: {
        tracking: '%100 İzleme',
        compliance: '%95 Uyum',
        savings: '%25 Maliyet Azalma'
      }
    },
    {
      id: 'driveupmanager',
      title: 'DriveUpManager',
      subtitle: 'Operasyon Yönetim Platformu',
      description: 'Kısa dönem araç kiralama operasyonları için operasyonel süreç yönetimi. Rezervasyon, sözleşme ve müşteri yönetimi.',
      icon: Settings,
      color: 'text-purple-600',
      status: 'active',
      features: [
        'Araç envanteri ve müsaitlik yönetimi',
        'Rezervasyon ve sözleşme sistemi',
        'Finansal raporlama ve analitik',
        'CRM entegrasyonu',
        'Otomatik faturalandırma',
        'Çok şubeli operasyon desteği'
      ],
      metrics: {
        efficiency: '%40 Verimlilik',
        automation: '%80 Otomasyon',
        revenue: '%25 Gelir Artışı'
      }
    },
    {
      id: 'driveupdesk',
      title: 'DriveUpDesk',
      subtitle: 'Destek ve Servis Yönetimi',
      description: 'Tüm DriveUp ürünleriyle entegre çalışan merkezi çağrı merkezi. Müşteri desteği ve servis yönetimi.',
      icon: Headphones,
      color: 'text-indigo-600',
      status: 'planned',
      features: [
        'Omnichannel müşteri desteği',
        'Ticket yönetim sistemi',
        'Tüm ürünlerle entegrasyon',
        'Performans dashboard\'ı',
        'Otomatik çağrı dağıtımı',
        'Müşteri memnuniyet ölçümü'
      ],
      metrics: {
        resolution: '%90 Çözüm',
        satisfaction: '4.7/5 Memnuniyet',
        response: '30sn Yanıt'
      }
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Aktif</Badge>;
      case 'development':
        return <Badge className="bg-yellow-100 text-yellow-800">Geliştirme</Badge>;
      case 'planned':
        return <Badge className="bg-blue-100 text-blue-800">Planlanan</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient section-padding pt-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Filo Yönetimi Yazılım Ürünleri</h1>
            <p className="text-large mb-8 max-w-3xl mx-auto">
              Araç yönetiminden bakım süreçlerine, operasyonel yönetimden müşteri desteğine kadar 
              filo yönetiminin tüm ihtiyaçlarını karşılayan entegre yazılım çözümleri.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className="card-minimal hover:scale-105 transition-all duration-300 cursor-pointer h-full"
                onClick={() => onProductClick(product.id)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                      <product.icon className={`h-6 w-6 ${product.color}`} />
                    </div>
                    {getStatusBadge(product.status)}
                  </div>
                  <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                  <Badge variant="outline" className="w-fit">{product.subtitle}</Badge>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {product.description}
                  </p>
                  
                  {/* Key Features */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-sm">Temel Özellikler:</h4>
                    {product.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="space-y-2 mb-6">
                    {Object.entries(product.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-2 bg-background-secondary rounded-lg">
                        <span className="text-xs text-muted-foreground capitalize">{key}</span>
                        <span className="font-semibold text-primary text-sm">{value as string}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="btn-primary w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      onProductClick(product.id);
                    }}
                  >
                    Detaylı İncele
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Ürün Kategorileri</h2>
            <p className="text-large">
              Her kategori, filo yönetiminin farklı bir alanına odaklanır ve 
              birbirleriyle entegre çalışarak tam bir ekosistem oluşturur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-minimal text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 mb-4">
                  <Wrench className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Bakım & Onarım</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Araç bakım süreçlerini otomatikleştirin, hasar takibi yapın ve servis entegrasyonu sağlayın.
                </p>
              </CardContent>
            </Card>

            <Card className="card-minimal text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 mb-4">
                  <ShoppingCart className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Kiralama & Marketplace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Bireysel ve kurumsal müşteriler için araç kiralama platformu ve marketplace çözümleri.
                </p>
              </CardContent>
            </Card>

            <Card className="card-minimal text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100 mb-4">
                  <Car className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Filo Yönetimi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Araç takibi, personel zimmeti ve operasyonel optimizasyon için gelişmiş filo yönetimi.
                </p>
              </CardContent>
            </Card>

            <Card className="card-minimal text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 mb-4">
                  <Settings className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Operasyon Yönetimi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Rezervasyon, sözleşme ve müşteri yönetimi için operasyonel süreç yönetimi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Neden DriveUp Ürünlerini Seçmelisiniz?</h2>
            <p className="text-large">
              Modern teknoloji, kullanıcı dostu arayüz ve güçlü entegrasyonlar ile 
              filo yönetiminizi bir üst seviyeye taşıyın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-minimal text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Kanıtlanmış Başarı</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  500+ aktif müşteri, 10K+ yönetilen araç ve %40 verimlilik artışı ile kanıtlanmış başarı.
                </p>
              </CardContent>
            </Card>

            <Card className="card-minimal text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Güvenlik & Güvenilirlik</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Kurumsal güvenlik standartları, veri koruması ve 7/24 teknik destek.
                </p>
              </CardContent>
            </Card>

            <Card className="card-minimal text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Sürekli İnovasyon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Düzenli güncellemeler, yeni özellikler ve teknoloji trendlerine uyum.
                </p>
              </CardContent>
            </Card>

            <Card className="card-minimal text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Kullanıcı Dostu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sezgisel arayüz, kolay öğrenme eğrisi ve kapsamlı eğitim desteği.
                </p>
              </CardContent>
            </Card>

            <Card className="card-minimal text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Hızlı Kurulum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Hızlı kurulum, kolay entegrasyon ve minimum eğitim süresi.
                </p>
              </CardContent>
            </Card>

            <Card className="card-minimal text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Esnek Yapılandırma</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  İşletmenizin ihtiyaçlarına göre özelleştirilebilir modüller ve ayarlar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">Doğru Ürünü Bulun</h2>
            <p className="text-large mb-8">
              İşletmenizin ihtiyaçlarına en uygun DriveUp ürününü keşfedin ve 
              filo yönetiminizi dijitalleştirin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-primary px-8 py-3 text-lg"
                onClick={onContact}
              >
                Demo Talep Et
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="btn-secondary px-8 py-3 text-lg"
                onClick={onContact}
              >
                Ücretsiz Danışmanlık
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
