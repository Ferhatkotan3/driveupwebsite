import { ScreenshotData } from '../types';

// Import DriveUpPro images from assets/img/DriveUpPro folder
import driveup_pro_1 from '../assets/img/DriveUpPro/1.webp';
import driveup_pro_2 from '../assets/img/DriveUpPro/2.webp';
import driveup_pro_5 from '../assets/img/DriveUpPro/5.webp';
import driveup_pro_6 from '../assets/img/DriveUpPro/6.webp';
import driveup_pro_7 from '../assets/img/DriveUpPro/7.webp';
import driveup_pro_8 from '../assets/img/DriveUpPro/8.webp';
import driveup_pro_9 from '../assets/img/DriveUpPro/9.webp';
import driveup_pro_10 from '../assets/img/DriveUpPro/10.webp';
import driveup_pro_11 from '../assets/img/DriveUpPro/11.webp';
import driveup_pro_12 from '../assets/img/DriveUpPro/12.webp';
import driveup_pro_13 from '../assets/img/DriveUpPro/13.webp';
import driveup_pro_14 from '../assets/img/DriveUpPro/14.webp';
import driveup_pro_15 from '../assets/img/DriveUpPro/15.webp';
import driveup_pro_16 from '../assets/img/DriveUpPro/16.webp';
import driveup_pro_17 from '../assets/img/DriveUpPro/17.webp';
import driveup_pro_18 from '../assets/img/DriveUpPro/18.webp';
import driveup_pro_19 from '../assets/img/DriveUpPro/19.webp';

export const driveUpProScreenshotData: ScreenshotData[] = [
  {
    id: 'pro-schedule',
    title: {
      tr: 'Program Yönetimi',
      en: 'Schedule Management'
    },
    description: {
      tr: 'Sürüş programları ve randevu yönetimi',
      en: 'Driving schedules and appointment management'
    },
    image: driveup_pro_8,
    features: {
      tr: [
        'Günlük program',
        'Randevu takibi',
        'Mola planlaması',
        'Çalışma saatleri'
      ],
      en: [
        'Daily schedule',
        'Appointment tracking',
        'Break planning',
        'Working hours'
      ]
    }
  },
  {
    id: 'pro-vehicle',
    title: {
      tr: 'Araç Yönetimi',
      en: 'Vehicle Management'
    },
    description: {
      tr: 'Araç bilgileri ve bakım takibi',
      en: 'Vehicle information and maintenance tracking'
    },
    image: driveup_pro_9,
    features: {
      tr: [
        'Araç detayları',
        'Bakım hatırlatmaları',
        'Yakıt durumu',
        'Araç durumu'
      ],
      en: [
        'Vehicle details',
        'Maintenance reminders',
        'Fuel status',
        'Vehicle condition'
      ]
    }
  },
  {
    id: 'pro-customer',
    title: {
      tr: 'Müşteri Yönetimi',
      en: 'Customer Management'
    },
    description: {
      tr: 'Müşteri bilgileri ve geçmiş',
      en: 'Customer information and history'
    },
    image: driveup_pro_10,
    features: {
      tr: [
        'Müşteri profilleri',
        'Sürüş geçmişi',
        'Tercihler',
        'Değerlendirmeler'
      ],
      en: [
        'Customer profiles',
        'Ride history',
        'Preferences',
        'Reviews'
      ]
    }
  },
  {
    id: 'pro-earnings',
    title: {
      tr: 'Kazanç Takibi',
      en: 'Earnings Tracking'
    },
    description: {
      tr: 'Günlük, haftalık ve aylık kazanç analizi',
      en: 'Daily, weekly and monthly earnings analysis'
    },
    image: driveup_pro_11,
    features: {
      tr: [
        'Günlük kazançlar',
        'Trend analizi',
        'Hedef takibi',
        'Grafik görünümü'
      ],
      en: [
        'Daily earnings',
        'Trend analysis',
        'Goal tracking',
        'Graph view'
      ]
    }
  },
  {
    id: 'pro-ratings',
    title: {
      tr: 'Değerlendirme Sistemi',
      en: 'Rating System'
    },
    description: {
      tr: 'Müşteri değerlendirmeleri ve geri bildirimler',
      en: 'Customer ratings and feedback'
    },
    image: driveup_pro_12,
    features: {
      tr: [
        'Müşteri puanları',
        'Geri bildirimler',
        'İyileştirme önerileri',
        'Başarı rozetleri'
      ],
      en: [
        'Customer scores',
        'Feedback',
        'Improvement suggestions',
        'Achievement badges'
      ]
    }
  },
  {
    id: 'pro-support',
    title: {
      tr: 'Destek Sistemi',
      en: 'Support System'
    },
    description: {
      tr: 'Teknik destek ve yardım araçları',
      en: 'Technical support and help tools'
    },
    image: driveup_pro_13,
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
  },
  {
    id: 'pro-settings',
    title: {
      tr: 'Ayarlar ve Tercihler',
      en: 'Settings & Preferences'
    },
    description: {
      tr: 'Uygulama ayarları ve kişisel tercihler',
      en: 'App settings and personal preferences'
    },
    image: driveup_pro_14,
    features: {
      tr: [
        'Profil ayarları',
        'Bildirim tercihleri',
        'Güvenlik ayarları',
        'Dil seçenekleri'
      ],
      en: [
        'Profile settings',
        'Notification preferences',
        'Security settings',
        'Language options'
      ]
    }
  },
  {
    id: 'pro-notifications',
    title: {
      tr: 'Bildirim Merkezi',
      en: 'Notification Center'
    },
    description: {
      tr: 'Önemli bildirimler ve uyarılar',
      en: 'Important notifications and alerts'
    },
    image: driveup_pro_15,
    features: {
      tr: [
        'Sistem bildirimleri',
        'Müşteri mesajları',
        'Güvenlik uyarıları',
        'Bildirim geçmişi'
      ],
      en: [
        'System notifications',
        'Customer messages',
        'Security alerts',
        'Notification history'
      ]
    }
  },
  {
    id: 'pro-map',
    title: {
      tr: 'Harita Görünümü',
      en: 'Map View'
    },
    description: {
      tr: 'Gelişmiş harita ve konum özellikleri',
      en: 'Advanced map and location features'
    },
    image: driveup_pro_16,
    features: {
      tr: [
        '3D harita görünümü',
        'Uydu görüntüleri',
        'Trafik katmanları',
        'Konum işaretleme'
      ],
      en: [
        '3D map view',
        'Satellite images',
        'Traffic layers',
        'Location marking'
      ]
    }
  },
  {
    id: 'pro-analytics',
    title: {
      tr: 'Performans Analizi',
      en: 'Performance Analytics'
    },
    description: {
      tr: 'Detaylı performans metrikleri ve analiz',
      en: 'Detailed performance metrics and analysis'
    },
    image: driveup_pro_17,
    features: {
      tr: [
        'Performans grafikleri',
        'Karşılaştırma analizi',
        'Hedef takibi',
        'İyileştirme önerileri'
      ],
      en: [
        'Performance charts',
        'Comparison analysis',
        'Goal tracking',
        'Improvement suggestions'
      ]
    }
  },
  {
    id: 'pro-backup',
    title: {
      tr: 'Yedekleme ve Senkronizasyon',
      en: 'Backup & Sync'
    },
    description: {
      tr: 'Veri yedekleme ve cihazlar arası senkronizasyon',
      en: 'Data backup and cross-device synchronization'
    },
    image: driveup_pro_18,
    features: {
      tr: [
        'Otomatik yedekleme',
        'Bulut senkronizasyonu',
        'Veri geri yükleme',
        'Çoklu cihaz desteği'
      ],
      en: [
        'Automatic backup',
        'Cloud synchronization',
        'Data restore',
        'Multi-device support'
      ]
    }
  },
  {
    id: 'pro-help',
    title: {
      tr: 'Yardım ve Eğitim',
      en: 'Help & Training'
    },
    description: {
      tr: 'Kullanıcı yardımı ve eğitim materyalleri',
      en: 'User help and training materials'
    },
    image: driveup_pro_19,
    features: {
      tr: [
        'Video eğitimler',
        'Kullanım kılavuzu',
        'SSS',
        'İletişim bilgileri'
      ],
      en: [
        'Video tutorials',
        'User manual',
        'FAQ',
        'Contact information'
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
      tr: 'Müşteri ve merkez ile iletişim araçları',
      en: 'Communication tools with customers and center'
    },
    image: driveup_pro_6,
    features: {
      tr: [
        'Müşteri mesajlaşması',
        'Merkez iletişimi',
        'Sesli aramalar',
        'Mesaj şablonları'
      ],
      en: [
        'Customer messaging',
        'Center communication',
        'Voice calls',
        'Message templates'
      ]
    }
  },
  {
    id: 'pro-dashboard',
    title: {
      tr: 'DriveUpPro Ana Dashboard',
      en: 'DriveUpPro Main Dashboard'
    },
    description: {
      tr: 'Profesyonel sürücüler için gelişmiş ana kontrol paneli',
      en: 'Advanced main control panel for professional drivers'
    },
    image: driveup_pro_1,
    features: {
      tr: [
        'Sürüş istatistikleri',
        'Performans metrikleri',
        'Hızlı eylemler',
        'Gerçek zamanlı veriler'
      ],
      en: [
        'Driving statistics',
        'Performance metrics',
        'Quick actions',
        'Real-time data'
      ]
    }
  },
  {
    id: 'pro-navigation',
    title: {
      tr: 'Gelişmiş Navigasyon',
      en: 'Advanced Navigation'
    },
    description: {
      tr: 'Akıllı rota planlama ve trafik analizi',
      en: 'Smart route planning and traffic analysis'
    },
    image: driveup_pro_2,
    features: {
      tr: [
        'Gerçek zamanlı trafik',
        'Alternatif rotalar',
        'Tahminli varış süresi',
        'Sesli navigasyon'
      ],
      en: [
        'Real-time traffic',
        'Alternative routes',
        'Estimated arrival time',
        'Voice navigation'
      ]
    }
  },
  {
    id: 'pro-safety',
    title: {
      tr: 'Güvenlik Merkezi',
      en: 'Safety Center'
    },
    description: {
      tr: 'Güvenlik protokolleri ve uyarı sistemi',
      en: 'Safety protocols and warning system'
    },
    image: driveup_pro_5,
    features: {
      tr: [
        'Güvenlik uyarıları',
        'Sürüş davranış analizi',
        'Acil durum butonları',
        'Güvenlik raporları'
      ],
      en: [
        'Safety alerts',
        'Driving behavior analysis',
        'Emergency buttons',
        'Safety reports'
      ]
    }
  },
  {
    id: 'pro-payments',
    title: {
      tr: 'Ödeme Yönetimi',
      en: 'Payment Management'
    },
    description: {
      tr: 'Ödeme işlemleri ve finansal takip',
      en: 'Payment transactions and financial tracking'
    },
    image: driveup_pro_7,
    features: {
      tr: [
        'Ödeme geçmişi',
        'Komisyon hesaplama',
        'Transfer işlemleri',
        'Finansal raporlar'
      ],
      en: [
        'Payment history',
        'Commission calculation',
        'Transfer operations',
        'Financial reports'
      ]
    }
  }
];