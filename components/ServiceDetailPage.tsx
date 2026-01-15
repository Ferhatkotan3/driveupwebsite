import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface ServiceDetailPageProps {
  serviceId: string;
  onBack: () => void;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceId, onBack }) => {
  const getServiceData = (id: string) => {
    const services = {
      'filo-yonetimi': {
        title: 'Filo Yönetimi',
        description: 'Filo yönetim yazılımı; şirketin sahip olduğu veya kiraladığı tüm araçların envanter, bakım, hasar, yakıt, sigorta, sözleşme ve operasyon süreçlerini tek bir platformda toplar.',
        sections: [
          {
            title: 'Filo Yönetim Yazılımı Nedir?',
            content: 'Filo yönetim yazılımı; şirketin sahip olduğu veya kiraladığı tüm araçların envanter, bakım, hasar, yakıt, sigorta, sözleşme ve operasyon süreçlerini tek bir platformda toplar.',
            subsections: [
              {
                title: 'Kapsam:',
                items: [
                  'Araç envanteri ve yaşam döngüsü takibi (satın alma → kullanım → elden çıkarma)',
                  'KM/yaşa bağlı bakım planlama ve hatırlatmalar',
                  'Hasar kayıtları, eksper ve onarım süreçlerinin yönetimi',
                  'Yakıt, ceza, HGS/OGS, lastik gibi masraf kalemlerinin kontrolü',
                  'Yetki, rol ve onay mekanizmaları ile güvenli kullanım'
                ]
              },
              {
                title: 'Çıktılar:',
                items: ['Daha şeffaf operasyon', 'Azaltılmış manuel iş yükü', 'Tek kaynaktan doğru veri']
              }
            ]
          },
          {
            title: 'Operasyonel Faydalar',
            subsections: [
              {
                title: 'Zaman tasarrufu:',
                content: 'Otomatik hatırlatmalar, hazır şablonlar ve entegrasyonlarla tekrar eden işler azalır.'
              },
              {
                title: 'Hata oranında düşüş:',
                content: 'Standart iş akışları ve zorunlu alanlar sayesinde veri kalitesi artar.'
              },
              {
                title: 'Merkezi kontrol:',
                content: 'Çoklu lokasyon/şube için tek panelden takip ve raporlama.'
              },
              {
                title: 'Uyum & denetim:',
                content: 'Log, sürümleme ve onay zinciri ile iç/dış denetimlere hazır altyapı.'
              }
            ]
          },
          {
            title: 'Verimlilik Artışı',
            subsections: [
              {
                title: 'Kullanım oranı optimizasyonu:',
                content: 'Araç/segment/hat bazında doluluk takibi.'
              },
              {
                title: 'Maliyet kontrolü:',
                content: 'Bakım, yakıt ve parça maliyetleri için eşik/limit, bütçe ve uyarı mekanizmaları.'
              },
              {
                title: 'Karar destek:',
                content: 'KPI panoları (maliyet/km, arıza sıklığı, bakım bekleme süresi, gelir/araç).'
              }
            ]
          }
        ]
      },
      'ozmal-arac': {
        title: 'Özmal Araç Yönetimi',
        description: 'Şirketin özkaynaklı araçlarının km, sigorta, vergi ve kullanım geçmişi tek ekrandan izlenir.',
        sections: [
          {
            title: 'Özmal Araç Takibi',
            subsections: [
              {
                title: 'Envanter kartları:',
                content: 'Plaka, şasi, model yılı, donanım, zimmet bilgisi.'
              },
              {
                title: 'KM & kullanım:',
                content: 'Otomatik/manuel km güncelleme, rotasyon ve görev atamaları.'
              },
              {
                title: 'Vergi & zorunlu belgeler:',
                content: 'MTV, trafik sigortası, muayene, kasko tarih ve uyarıları.'
              }
            ]
          },
          {
            title: 'Bakım & Onarım Yönetimi',
            subsections: [
              {
                title: 'Planlı bakım:',
                content: 'KM/yaşa göre periyodik bakım, iş emri ve parça listeleri.'
              },
              {
                title: 'Arıza yönetimi:',
                content: 'Arıza kaydı, teşhis, teklif/onarım onayı, servis süreci takibi.'
              },
              {
                title: 'Servis performansı:',
                content: 'SLA, tamamlama süresi, tekrar arıza oranı, parça maliyeti analizi.'
              }
            ]
          },
          {
            title: 'Sigorta & Hasar Süreçleri',
            subsections: [
              {
                title: 'Poliçe yönetimi:',
                content: 'Poliçe bitiş uyarıları, teminat/istisna kayıtları.'
              },
              {
                title: 'Hasar dosyası:',
                content: 'Kaza kaydı, fotoğraf/doküman ekleri, eksper atama ve onarım süreci.'
              },
              {
                title: 'Tazminat takibi:',
                content: 'Sigorta şirketi yazışmaları, ödemeler, masraf karşılaştırmaları.'
              }
            ]
          }
        ]
      },
      'arac-takip': {
        title: 'Araç Takip Sistemleri',
        description: 'Araçlardan canlı veri akışı sağlanır.',
        sections: [
          {
            title: 'GPS / IoT Entegrasyonu',
            subsections: [
              {
                title: 'Veri akışı:',
                content: 'Konum, hız, rölanti, ani fren/ivmelenme ve yakıt seviyesi gibi telematik veriler.'
              },
              {
                title: 'Uyarlama:',
                content: 'Farklı cihaz/markalar için esnek API katmanı ve veri standardizasyonu.'
              }
            ]
          },
          {
            title: 'Canlı Konum Takibi',
            subsections: [
              {
                title: 'Harita görünümü:',
                content: 'Filonun anlık konumu, rota geçmişi ve duraklama noktaları.'
              },
              {
                title: 'Uyarılar:',
                content: 'Jeo-çit (geofence), hız limiti, mesai dışı kullanım, rölanti süresi uyarıları.'
              }
            ]
          },
          {
            title: 'Raporlama & Analitik',
            subsections: [
              {
                title: 'Sürüş davranışı:',
                content: 'Güvenli sürüş skoru, eğitim ihtiyacı tespiti.'
              },
              {
                title: 'Verimlilik raporları:',
                content: 'Boşta geçen süre, mesafe, kullanım deseni, ısı haritaları.'
              },
              {
                title: 'Maliyet etkisi:',
                content: 'Sürüş davranışlarının yakıt ve bakım maliyetlerine yansıması.'
              }
            ]
          }
        ]
      },
      'bakim-onarim': {
        title: 'Bakım ve Onarım Çözümleri',
        description: 'Kilometre ve yıllık bakımlar otomatik planlanır.',
        sections: [
          {
            title: 'Bakım Paketleri',
            subsections: [
              {
                title: 'Paket kurgusu:',
                content: 'Marka/model/segment bazında kilometre ve yıllık paketler.'
              },
              {
                title: 'Otomasyon:',
                content: 'KM girişine göre en yakın paket önerisi, iş emri ve parça listesi oluşturma.'
              },
              {
                title: 'Uygunluk:',
                content: 'OEM/Aftermarket parça eşleştirmeleri, garanti/geri çağırma kontrolleri.'
              }
            ]
          },
          {
            title: 'Servis Entegrasyonu',
            subsections: [
              {
                title: 'Ağ yönetimi:',
                content: 'Yetkili/özel servis ağı, hizmet alanları ve fiyat sözleşmeleri.'
              },
              {
                title: 'Dijital akış:',
                content: 'Randevu, teklif, onay, onarım, faturalandırma süreçlerinin entegrasyonu.'
              },
              {
                title: 'Kalite & SLA:',
                content: 'Tamamlama süresi, tekrar arıza, müşteri memnuniyeti puanları.'
              }
            ]
          },
          {
            title: 'Yedek Parça Yönetimi',
            subsections: [
              {
                title: 'Parça kartları:',
                content: 'OEM numarası, muadil listesi, stok ve fiyat geçmişi.'
              },
              {
                title: 'Maliyet:',
                content: 'Parça/işçilik ayrışması, garanti & iade süreçleri, depo hareketleri.'
              },
              {
                title: 'Tedarik:',
                content: 'Tedarikçi kıyaslaması, teslimat süreleri, sözleşmeli fiyat takibi.'
              }
            ]
          }
        ]
      },
      'gunluk-kiralama': {
        title: 'Günlük Araç Kiralama Operasyonları',
        description: 'Rezervasyon süreci ve araç teslim-tesellüm takip edilir.',
        sections: [
          {
            title: 'Sözleşme Yönetimi',
            subsections: [
              {
                title: 'Dijital sözleşmeler:',
                content: 'Şablonlar, ekler, imza akışları ve versiyonlama.'
              },
              {
                title: 'Koşullar:',
                content: 'Provizyon, depozito, hasar sorumluluğu, ek sürücü, yakıt ve km limitleri.'
              },
              {
                title: 'Denetim izi:',
                content: 'Tüm değişikliklerin zaman damgalı kayıtları.'
              }
            ]
          },
          {
            title: 'Rezervasyon & Teslim Alma',
            subsections: [
              {
                title: 'Çok kanallı rezervasyon:',
                content: 'Web, çağrı merkezi, partner kanalları.'
              },
              {
                title: 'Araç hazırlığı:',
                content: 'Temizlik, yakıt, hasar tespiti ve fotoğraflama checklist\'leri.'
              },
              {
                title: 'Teslim/tesellüm:',
                content: 'Mobil tutanak, hasar işaretleme, anlık KM ve yakıt kaydı.'
              }
            ]
          },
          {
            title: 'Faturalama & Ödeme',
            subsections: [
              {
                title: 'Otomatik ücretlendirme:',
                content: 'Gün/hafta/ay, ek hizmetler (bebek koltuğu, navigasyon vb.).'
              },
              {
                title: 'Ödeme entegrasyonları:',
                content: 'Sanal POS, provizyon yönetimi, iade/ek tahsilatlar.'
              },
              {
                title: 'Muhasebe:',
                content: 'E-fatura/e-arşiv, cari, kampanya/indirim raporları.'
              }
            ]
          }
        ]
      },
      'kiralama-ozel': {
        title: 'Kiralama Şirketlerine Özel Uygulamalar',
        description: 'Kiralama sektörüne özel geliştirilmiş yazılım çözümleri',
        sections: [
          {
            title: 'Çok şubeli yapı',
            subsections: [
              {
                title: 'Stok transferi:',
                content: 'Bölge bazlı fiyat, dinamik fiyatlandırma.'
              },
              {
                title: 'Kurumsal kiralama:',
                content: 'Anlaşmalı şirket tarifeleri, havuz araç yönetimi.'
              },
              {
                title: 'Risk & suistimal:',
                content: 'Kara liste, anomali tespiti, kural setleri (ör. mesai dışı kullanım).'
              }
            ]
          }
        ]
      },
      'cagri-merkezi': {
        title: 'Çağrı Merkezi Uygulamaları',
        description: 'Gelen çağrılar tek ekrandan yönetilir, müşteri talepleri kayıt altına alınır.',
        sections: [
          {
            title: 'Müşteri Çağrı Yönetimi',
            subsections: [
              {
                title: 'CTI entegrasyonu:',
                content: 'Arayanı tanıma, otomatik kayıt açma, arama nedeni kategorileri.'
              },
              {
                title: '360° müşteri görünümü:',
                content: 'Sözleşmeler, rezervasyonlar, bekleyen talepler, ödemeler tek ekranda.'
              },
              {
                title: 'Hızlı işlemler:',
                content: 'Rezervasyon oluşturma, tarih değişikliği, ikame talebi.'
              }
            ]
          },
          {
            title: 'Talep ve Şikayet Takibi',
            subsections: [
              {
                title: 'Kayıt & sınıflandırma:',
                content: 'Talep, şikayet, öneri; kanal (telefon, e-posta, web) ayrımı.'
              },
              {
                title: 'Atama & SLA:',
                content: 'Otomatik yönlendirme, hedef süreler, eskalasyon ve bildirimler.'
              },
              {
                title: 'Geri bildirim döngüsü:',
                content: 'Çözüm sonrası memnuniyet ölçümü ve kök neden analizi.'
              }
            ]
          },
          {
            title: 'Operasyon Entegrasyonu',
            subsections: [
              {
                title: 'Saha ekipleri:',
                content: 'Bakım/onarım iş emirleri, çekici-ikame süreçleriyle çift yönlü akış.'
              },
              {
                title: 'Bildirimler:',
                content: 'SMS/e-posta/push ile müşteri ve ekip bilgilendirmeleri.'
              },
              {
                title: 'Raporlama:',
                content: 'Çağrı hacmi, ilk aramada çözüm, ortalama çözüm süresi, NPS/CSAT.'
              }
            ]
          }
        ]
      }
    };

    return services[id as keyof typeof services] || null;
  };

  const serviceData = getServiceData(serviceId);

  if (!serviceData) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Hizmet Bulunamadı</h1>
            <button
              onClick={onBack}
              className="inline-flex items-center px-4 py-2 bg-[#5A00FF] text-white rounded-lg hover:bg-[#4A00E6] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Geri Dön
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center text-[#5A00FF] hover:text-[#4A00E6] transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Geri Dön
          </button>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{serviceData.title}</h1>
          <p className="text-lg text-gray-600 max-w-4xl">
            Araç kiralama ve filo yönetimi operasyonlarını uçtan uca dijitalleştiriyoruz. Aşağıdaki hizmet başlıklarında; kapsam, iş akışları, entegrasyon örnekleri ve çıktılar net şekilde açıklanmıştır.
          </p>
        </div>

        {/* Service Description */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <p className="text-gray-700 leading-relaxed">{serviceData.description}</p>
        </div>

        {/* Service Sections */}
        <div className="space-y-8">
          {serviceData.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
              
              {'content' in section && section.content && (
                <p className="text-gray-700 mb-6 leading-relaxed">{section.content}</p>
              )}

              <div className="space-y-6">
                {section.subsections?.map((subsection, subsectionIndex) => (
                  <div key={subsectionIndex}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {subsection.title}
                    </h3>
                    
                    {'content' in subsection && subsection.content && (
                      <p className="text-gray-700 mb-3 leading-relaxed">{subsection.content}</p>
                    )}
                    
                    {'items' in subsection && subsection.items && (
                      <ul className="space-y-2">
                        {subsection.items.map((item: string, itemIndex: number) => (
                          <li key={itemIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sık Kullanılan Entegrasyonlar</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Teknik Entegrasyonlar</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Telematik & cihazlar: GPS/IoT üreticileri, yakıt sensörleri</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Ödeme & e-Belge: Sanal POS, e-fatura/e-arşiv, muhasebe yazılımları</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Servis & parça: Servis ağları, parça tedarikçileri</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">İletişim & Güvenlik</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-700">İletişim: SMS, e-posta, çağrı merkezi (CTI) ve canlı destek</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Güvenlik: Roller & izinler, kayıt & denetim, veri koruma</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Raporlama: KPI panoları, maliyet analizi, performans göstergeleri</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
