import { ScreenshotData } from '../types';

// Import DriveUpPro images from assets/img/DriveUpPro folder
import driveup_pro_1 from '../assets/img/DriveUpPro/1.png';
import driveup_pro_2 from '../assets/img/DriveUpPro/2.png';
import driveup_pro_5 from '../assets/img/DriveUpPro/5.png';
import driveup_pro_6 from '../assets/img/DriveUpPro/6.png';
import driveup_pro_7 from '../assets/img/DriveUpPro/7.png';
import driveup_pro_8 from '../assets/img/DriveUpPro/8.png';
import driveup_pro_9 from '../assets/img/DriveUpPro/9.png';
import driveup_pro_10 from '../assets/img/DriveUpPro/10.png';
import driveup_pro_11 from '../assets/img/DriveUpPro/11.png';
import driveup_pro_12 from '../assets/img/DriveUpPro/12.png';
import driveup_pro_13 from '../assets/img/DriveUpPro/13.png';
import driveup_pro_14 from '../assets/img/DriveUpPro/14.png';
import driveup_pro_15 from '../assets/img/DriveUpPro/15.png';
import driveup_pro_16 from '../assets/img/DriveUpPro/16.png';
import driveup_pro_17 from '../assets/img/DriveUpPro/17.png';
import driveup_pro_18 from '../assets/img/DriveUpPro/18.png';
import driveup_pro_19 from '../assets/img/DriveUpPro/19.png';

export const driveUpProScreenshotData: ScreenshotData[] = [
  {
    id: 'pro-dashboard',
    title: {
      tr: 'DriveUpPro Ana Dashboard',
      en: 'DriveUpPro Main Dashboard'
    },
    description: {
      tr: 'Profesyonel sürücü uygulaması ana kontrol paneli',
      en: 'Professional driver application main control panel'
    },
    image: driveup_pro_1,
    features: {
      tr: [
        'Sürüş istatistikleri',
        'Günlük hedefler',
        'Hızlı eylemler',
        'Bildirim merkezi'
      ],
      en: [
        'Driving statistics',
        'Daily goals',
        'Quick actions',
        'Notification center'
      ]
    }
  },
  {
    id: 'pro-navigation',
    title: {
      tr: 'Pro Navigasyon',
      en: 'Pro Navigation'
    },
    description: {
      tr: 'Gelişmiş navigasyon ve rota planlama özellikleri',
      en: 'Advanced navigation and route planning features'
    },
    image: driveup_pro_2,
    features: {
      tr: [
        'Gerçek zamanlı trafik',
        'Alternatif rotalar',
        'Sesli navigasyon',
        'Favori lokasyonlar'
      ],
      en: [
        'Real-time traffic',
        'Alternative routes',
        'Voice navigation',
        'Favorite locations'
      ]
    }
  },
  {
    id: 'pro-vehicle-info',
    title: {
      tr: 'Araç Bilgileri',
      en: 'Vehicle Information'
    },
    description: {
      tr: 'Detaylı araç bilgileri ve durum takibi',
      en: 'Detailed vehicle information and status tracking'
    },
    image: driveup_pro_5,
    features: {
      tr: [
        'Araç detayları',
        'Bakım bilgileri',
        'Yakıt durumu',
        'Kilometre takibi'
      ],
      en: [
        'Vehicle details',
        'Maintenance info',
        'Fuel status',
        'Mileage tracking'
      ]
    }
  },
  {
    id: 'pro-safety-features',
    title: {
      tr: 'Güvenlik Özellikleri',
      en: 'Safety Features'
    },
    description: {
      tr: 'Sürüş güvenliği ve güvenlik uyarıları',
      en: 'Driving safety and security alerts'
    },
    image: driveup_pro_6,
    features: {
      tr: [
        'Güvenlik uyarıları',
        'Sürüş analizi',
        'Hız takibi',
        'Fren mesafesi hesaplama'
      ],
      en: [
        'Safety alerts',
        'Driving analysis',
        'Speed monitoring',
        'Braking distance calculation'
      ]
    }
  },
  {
    id: 'pro-communication',
    title: {
      tr: 'İletişim Araçları',
      en: 'Communication Tools'
    },
    description: {
      tr: 'Ekip iletişimi ve mesajlaşma özellikleri',
      en: 'Team communication and messaging features'
    },
    image: driveup_pro_7,
    features: {
      tr: [
        'Ekip mesajlaşması',
        'Sesli mesajlar',
        'Durum güncellemeleri',
        'Acil durum bildirimleri'
      ],
      en: [
        'Team messaging',
        'Voice messages',
        'Status updates',
        'Emergency notifications'
      ]
    }
  },
  {
    id: 'pro-trip-management',
    title: {
      tr: 'Sefer Yönetimi',
      en: 'Trip Management'
    },
    description: {
      tr: 'Sefer planlama ve takip sistemi',
      en: 'Trip planning and tracking system'
    },
    image: driveup_pro_8,
    features: {
      tr: [
        'Sefer planlama',
        'Zaman takibi',
        'Maliyet hesaplama',
        'Sefer raporları'
      ],
      en: [
        'Trip planning',
        'Time tracking',
        'Cost calculation',
        'Trip reports'
      ]
    }
  },
  {
    id: 'pro-analytics',
    title: {
      tr: 'Pro Analitik',
      en: 'Pro Analytics'
    },
    description: {
      tr: 'Detaylı sürüş analizi ve performans metrikleri',
      en: 'Detailed driving analysis and performance metrics'
    },
    image: driveup_pro_9,
    features: {
      tr: [
        'Sürüş performansı',
        'Yakıt verimliliği',
        'Güvenlik skorları',
        'Trend analizi'
      ],
      en: [
        'Driving performance',
        'Fuel efficiency',
        'Safety scores',
        'Trend analysis'
      ]
    }
  },
  {
    id: 'pro-settings',
    title: {
      tr: 'Pro Ayarlar',
      en: 'Pro Settings'
    },
    description: {
      tr: 'Gelişmiş uygulama ayarları ve tercihler',
      en: 'Advanced application settings and preferences'
    },
    image: driveup_pro_10,
    features: {
      tr: [
        'Kullanıcı tercihleri',
        'Bildirim ayarları',
        'Güvenlik konfigürasyonu',
        'Veri yönetimi'
      ],
      en: [
        'User preferences',
        'Notification settings',
        'Security configuration',
        'Data management'
      ]
    }
  },
  {
    id: 'pro-notifications',
    title: {
      tr: 'Pro Bildirimler',
      en: 'Pro Notifications'
    },
    description: {
      tr: 'Akıllı bildirim sistemi ve uyarılar',
      en: 'Smart notification system and alerts'
    },
    image: driveup_pro_11,
    features: {
      tr: [
        'Akıllı uyarılar',
        'Bildirim filtreleme',
        'Öncelik seviyeleri',
        'Bildirim geçmişi'
      ],
      en: [
        'Smart alerts',
        'Notification filtering',
        'Priority levels',
        'Notification history'
      ]
    }
  },
  {
    id: 'pro-reports',
    title: {
      tr: 'Pro Raporlar',
      en: 'Pro Reports'
    },
    description: {
      tr: 'Kapsamlı raporlama ve analiz araçları',
      en: 'Comprehensive reporting and analysis tools'
    },
    image: driveup_pro_12,
    features: {
      tr: [
        'Detaylı raporlar',
        'Veri görselleştirme',
        'Export seçenekleri',
        'Zamanlı raporlar'
      ],
      en: [
        'Detailed reports',
        'Data visualization',
        'Export options',
        'Scheduled reports'
      ]
    }
  },
  {
    id: 'pro-calendar',
    title: {
      tr: 'Pro Takvim',
      en: 'Pro Calendar'
    },
    description: {
      tr: 'Sefer planlama ve randevu yönetimi',
      en: 'Trip planning and appointment management'
    },
    image: driveup_pro_13,
    features: {
      tr: [
        'Sefer takvimi',
        'Randevu yönetimi',
        'Hatırlatmalar',
        'Senkronizasyon'
      ],
      en: [
        'Trip calendar',
        'Appointment management',
        'Reminders',
        'Synchronization'
      ]
    }
  },
  {
    id: 'pro-maps',
    title: {
      tr: 'Pro Haritalar',
      en: 'Pro Maps'
    },
    description: {
      tr: 'Gelişmiş harita görünümleri ve özellikler',
      en: 'Advanced map views and features'
    },
    image: driveup_pro_14,
    features: {
      tr: [
        'Çoklu harita türleri',
        'Offline haritalar',
        '3D görünüm',
        'Özel işaretleyiciler'
      ],
      en: [
        'Multiple map types',
        'Offline maps',
        '3D view',
        'Custom markers'
      ]
    }
  },
  {
    id: 'pro-weather',
    title: {
      tr: 'Pro Hava Durumu',
      en: 'Pro Weather'
    },
    description: {
      tr: 'Hava durumu bilgileri ve sürüş koşulları',
      en: 'Weather information and driving conditions'
    },
    image: driveup_pro_15,
    features: {
      tr: [
        'Gerçek zamanlı hava',
        'Sürüş koşulları',
        'Hava uyarıları',
        'Rota etkileri'
      ],
      en: [
        'Real-time weather',
        'Driving conditions',
        'Weather alerts',
        'Route impacts'
      ]
    }
  },
  {
    id: 'pro-traffic',
    title: {
      tr: 'Pro Trafik',
      en: 'Pro Traffic'
    },
    description: {
      tr: 'Gelişmiş trafik analizi ve rota optimizasyonu',
      en: 'Advanced traffic analysis and route optimization'
    },
    image: driveup_pro_16,
    features: {
      tr: [
        'Gerçek zamanlı trafik',
        'Trafik tahminleri',
        'Rota optimizasyonu',
        'Alternatif yollar'
      ],
      en: [
        'Real-time traffic',
        'Traffic predictions',
        'Route optimization',
        'Alternative routes'
      ]
    }
  },
  {
    id: 'pro-parking',
    title: {
      tr: 'Pro Park Yeri',
      en: 'Pro Parking'
    },
    description: {
      tr: 'Park yeri bulma ve rezervasyon sistemi',
      en: 'Parking spot finder and reservation system'
    },
    image: driveup_pro_17,
    features: {
      tr: [
        'Park yeri arama',
        'Rezervasyon sistemi',
        'Fiyat karşılaştırması',
        'Navigasyon entegrasyonu'
      ],
      en: [
        'Parking spot search',
        'Reservation system',
        'Price comparison',
        'Navigation integration'
      ]
    }
  },
  {
    id: 'pro-fuel',
    title: {
      tr: 'Pro Yakıt',
      en: 'Pro Fuel'
    },
    description: {
      tr: 'Yakıt istasyonu bulma ve fiyat takibi',
      en: 'Fuel station finder and price tracking'
    },
    image: driveup_pro_18,
    features: {
      tr: [
        'Yakıt istasyonu arama',
        'Fiyat karşılaştırması',
        'Yakıt tüketimi takibi',
        'Maliyet hesaplama'
      ],
      en: [
        'Fuel station search',
        'Price comparison',
        'Fuel consumption tracking',
        'Cost calculation'
      ]
    }
  },
  {
    id: 'pro-support',
    title: {
      tr: 'Pro Destek',
      en: 'Pro Support'
    },
    description: {
      tr: 'Kullanıcı desteği ve yardım sistemi',
      en: 'User support and help system'
    },
    image: driveup_pro_19,
    features: {
      tr: [
        'Canlı destek',
        'Yardım dokümantasyonu',
        'Video eğitimler',
        'Ticket sistemi'
      ],
      en: [
        'Live support',
        'Help documentation',
        'Video tutorials',
        'Ticket system'
      ]
    }
  }
];
