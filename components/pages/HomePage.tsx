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
  Star,
  Users,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

interface HomePageProps {
  onNavigateToProducts: () => void;
  onContact: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onNavigateToProducts, 
  onContact 
}) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient section-padding pt-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">
              Filo Yönetimi Yazılımları – Araç, Bakım, Onarım ve Kiralama İçin Tek Platform
            </h1>
            <p className="text-large mb-8 max-w-3xl mx-auto">
              Bakım, onarım, operasyon ve kiralama süreçlerinizi tek bir yazılım çözümüyle yönetin. 
              Modern teknoloji ile filo verimliliğinizi artırın ve maliyetlerinizi optimize edin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                className="btn-primary px-8 py-3 text-lg"
                onClick={onNavigateToProducts}
              >
                Ürünleri Keşfet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="btn-secondary px-8 py-3 text-lg"
                onClick={onContact}
              >
                İletişime Geç
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-semibold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Aktif Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-semibold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Yönetilen Araç</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-semibold text-primary mb-2">%40</div>
                <div className="text-sm text-muted-foreground">Verimlilik Artışı</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-semibold text-primary mb-2">%25</div>
                <div className="text-sm text-muted-foreground">Maliyet Tasarrufu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ne Yapıyoruz Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Ne Yapıyoruz</h2>
            <p className="text-large">
              Filo yönetimi süreçlerinizi dijitalleştiren kapsamlı yazılım çözümleri sunuyoruz. 
              Araç takibinden bakım yönetimine, operasyonel süreçlerden raporlamaya kadar her şey tek platformda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Araç Yönetimi */}
            <Card className="card-minimal text-center hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <Car className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Araç Yönetimi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Araç envanteri, GPS takibi, yakıt tüketimi ve kullanım raporları ile 
                  filonuzu tam kontrol altında tutun.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Gerçek zamanlı konum takibi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Yakıt tüketim analizi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Kullanım raporları
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Bakım & Onarım Yönetimi */}
            <Card className="card-minimal text-center hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Bakım & Onarım Yönetimi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Periyodik bakım planları, hasar takibi ve servis entegrasyonu ile 
                  araçlarınızın bakım süreçlerini optimize edin.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Otomatik bakım hatırlatmaları
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Hasar kayıt sistemi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Servis sağlayıcı entegrasyonu
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Yedek Parça & İhale Yönetimi */}
            <Card className="card-minimal text-center hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Yedek Parça & İhale Yönetimi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Yedek parça tedarik süreçlerini dijitalleştirin, ihale süreçlerini yönetin 
                  ve maliyetleri optimize edin.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Dijital ihale sistemi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Tedarikçi yönetimi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Maliyet analizi
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Kiralama & Operasyon Yönetimi */}
            <Card className="card-minimal text-center hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Kiralama & Operasyon Yönetimi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Araç kiralama süreçlerini yönetin, rezervasyonları takip edin ve 
                  operasyonel verimliliği artırın.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Rezervasyon yönetimi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Sözleşme takibi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Müşteri ilişkileri
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Raporlama & Analiz */}
            <Card className="card-minimal text-center hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Raporlama & Analiz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Detaylı raporlar ve analitik araçlarla filo performansınızı ölçün, 
                  trendleri analiz edin ve stratejik kararlar alın.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Performans dashboard'ları
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Maliyet analizi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Trend raporları
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Güvenlik & Uyumluluk */}
            <Card className="card-minimal text-center hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Güvenlik & Uyumluluk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Kurumsal güvenlik standartlarına uygun, veri koruması ve 
                  uyumluluk gereksinimlerini karşılayan çözümler.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Veri şifreleme
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Erişim kontrolü
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Uyumluluk raporları
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Müşteri Referansları */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Müşterilerimiz Ne Diyor</h2>
            <p className="text-large">
              Türkiye'nin önde gelen filo yönetim şirketleri DriveUp çözümlerini tercih ediyor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "DriveUp ile filo yönetimimizi tamamen dijitalleştirdik. Operasyonel verimliliğimiz %40 arttı."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Ahmet Yılmaz</div>
                    <div className="text-sm text-muted-foreground">Filo Müdürü, ABC Lojistik</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Bakım süreçlerimiz artık tamamen otomatik. Maliyetlerimiz %25 azaldı."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Fatma Demir</div>
                    <div className="text-sm text-muted-foreground">Operasyon Müdürü, XYZ Kargo</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Raporlama süreçlerimiz çok kolaylaştı. Karar verme süreçlerimiz hızlandı."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Mehmet Kaya</div>
                    <div className="text-sm text-muted-foreground">Genel Müdür, DEF Nakliyat</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teknoloji Stack */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Modern Teknoloji Altyapısı</h2>
            <p className="text-large">
              Güvenilir, ölçeklenebilir ve performanslı yazılım çözümleri için 
              en güncel teknolojileri kullanıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: '⚛️', category: 'Frontend' },
              { name: 'Node.js', icon: '⚡', category: 'Backend' },
              { name: 'TypeScript', icon: '🔷', category: 'Language' },
              { name: 'PostgreSQL', icon: '🗄️', category: 'Database' },
              { name: 'AWS', icon: '☁️', category: 'Cloud' },
              { name: 'Docker', icon: '🐳', category: 'DevOps' },
              { name: 'GraphQL', icon: '🔗', category: 'API' },
              { name: 'Redis', icon: '⚡', category: 'Cache' },
              { name: 'Kubernetes', icon: '🎯', category: 'Orchestration' },
              { name: 'Stripe', icon: '💳', category: 'Payments' },
              { name: 'Elasticsearch', icon: '🔍', category: 'Search' },
              { name: 'Prometheus', icon: '📊', category: 'Monitoring' }
            ].map((tech, index) => (
              <div key={index} className="card-minimal text-center hover:scale-105 transition-all duration-300">
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="font-medium text-sm">{tech.name}</div>
                <div className="text-xs text-muted-foreground">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">Filonuzu Dijitalleştirmeye Hazır mısınız?</h2>
            <p className="text-large mb-8">
              Modern filo yönetimi yazılımları ile operasyonlarınızı optimize edin, 
              maliyetlerinizi azaltın ve verimliliğinizi artırın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-primary px-8 py-3 text-lg"
                onClick={onNavigateToProducts}
              >
                Ürünleri İncele
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="btn-secondary px-8 py-3 text-lg"
                onClick={onContact}
              >
                Demo Talep Et
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
