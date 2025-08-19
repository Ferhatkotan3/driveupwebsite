import { ScreenshotData } from '../types';

// Import DriveupManager images from assets/img/DriveupManager folder
import driveup_manager_1 from '../assets/img/DriveupManager/Driveup_manager_1.png';
import driveup_manager_2 from '../assets/img/DriveupManager/Driveup_manager_2.png';
import driveup_manager_3 from '../assets/img/DriveupManager/Driveup_manager_3.png';
import driveup_manager_4 from '../assets/img/DriveupManager/Driveup_manager_4.png';
import driveup_manager_5 from '../assets/img/DriveupManager/Driveup_manager_5.png';
import driveup_manager_6 from '../assets/img/DriveupManager/Driveup_manager_6.png';
import driveup_manager_7 from '../assets/img/DriveupManager/Driveup_manager_7.png';
import driveup_manager_8 from '../assets/img/DriveupManager/Driveup_manager_8.png';
import driveup_manager_9 from '../assets/img/DriveupManager/Driveup_manager_9.png';
import driveup_manager_10 from '../assets/img/DriveupManager/Driveup_manager_10.png';
import driveup_manager_11 from '../assets/img/DriveupManager/Driveup_manager_11.png';
import driveup_manager_12 from '../assets/img/DriveupManager/Driveup_manager_12.png';
import driveup_manager_13 from '../assets/img/DriveupManager/Driveup_manager_13.png';
import driveup_manager_14 from '../assets/img/DriveupManager/Driveup_manager_14.png';
import driveup_manager_15 from '../assets/img/DriveupManager/Driveup_manager_15.png';
import driveup_manager_16 from '../assets/img/DriveupManager/Driveup_manager_16.png';
import driveup_manager_17 from '../assets/img/DriveupManager/Driveup_manager_17.png';
import driveup_manager_18 from '../assets/img/DriveupManager/Driveup_manager_18.png';
import driveup_manager_19 from '../assets/img/DriveupManager/Driveup_manager_19.png';

export const driveupManagerScreenshotData: ScreenshotData[] = [
  {
    id: 'manager-dashboard',
    title: {
      tr: 'DriveupManager Ana Dashboard',
      en: 'DriveupManager Main Dashboard'
    },
    description: {
      tr: 'Filo yönetimi ve araç takibi için gelişmiş ana kontrol paneli',
      en: 'Advanced main control panel for fleet management and vehicle tracking'
    },
    image: driveup_manager_1,
    features: {
      tr: [
        'Filo genel bakış',
        'Araç durumu takibi',
        'Gerçek zamanlı veriler',
        'Hızlı eylem menüsü'
      ],
      en: [
        'Fleet overview',
        'Vehicle status tracking',
        'Real-time data',
        'Quick action menu'
      ]
    }
  },
  {
    id: 'vehicle-list',
    title: {
      tr: 'Araç Listesi',
      en: 'Vehicle List'
    },
    description: {
      tr: 'Tüm araçların detaylı listesi ve filtreleme seçenekleri',
      en: 'Detailed list of all vehicles with filtering options'
    },
    image: driveup_manager_2,
    features: {
      tr: [
        'Araç arama ve filtreleme',
        'Durum göstergeleri',
        'Toplu işlemler',
        'Detaylı bilgiler'
      ],
      en: [
        'Vehicle search and filtering',
        'Status indicators',
        'Bulk operations',
        'Detailed information'
      ]
    }
  },
  {
    id: 'driver-management',
    title: {
      tr: 'Sürücü Yönetimi',
      en: 'Driver Management'
    },
    description: {
      tr: 'Sürücü bilgileri, lisanslar ve performans takibi',
      en: 'Driver information, licenses and performance tracking'
    },
    image: driveup_manager_3,
    features: {
      tr: [
        'Sürücü profilleri',
        'Lisans takibi',
        'Performans metrikleri',
        'Eğitim kayıtları'
      ],
      en: [
        'Driver profiles',
        'License tracking',
        'Performance metrics',
        'Training records'
      ]
    }
  },
  {
    id: 'route-planning',
    title: {
      tr: 'Rota Planlama',
      en: 'Route Planning'
    },
    description: {
      tr: 'Akıllı rota optimizasyonu ve planlama araçları',
      en: 'Smart route optimization and planning tools'
    },
    image: driveup_manager_4,
    features: {
      tr: [
        'Rota optimizasyonu',
        'Trafik analizi',
        'Zaman planlaması',
        'Maliyet hesaplama'
      ],
      en: [
        'Route optimization',
        'Traffic analysis',
        'Time planning',
        'Cost calculation'
      ]
    }
  },
  {
    id: 'maintenance-schedule',
    title: {
      tr: 'Bakım Programı',
      en: 'Maintenance Schedule'
    },
    description: {
      tr: 'Araç bakım planları ve hatırlatma sistemi',
      en: 'Vehicle maintenance plans and reminder system'
    },
    image: driveup_manager_5,
    features: {
      tr: [
        'Bakım takvimi',
        'Hatırlatmalar',
        'Bakım geçmişi',
        'Maliyet takibi'
      ],
      en: [
        'Maintenance calendar',
        'Reminders',
        'Maintenance history',
        'Cost tracking'
      ]
    }
  },
  {
    id: 'fuel-management',
    title: {
      tr: 'Yakıt Yönetimi',
      en: 'Fuel Management'
    },
    description: {
      tr: 'Yakıt tüketimi takibi ve maliyet analizi',
      en: 'Fuel consumption tracking and cost analysis'
    },
    image: driveup_manager_6,
    features: {
      tr: [
        'Yakıt tüketimi',
        'Maliyet analizi',
        'Verimlilik raporları',
        'Anomali tespiti'
      ],
      en: [
        'Fuel consumption',
        'Cost analysis',
        'Efficiency reports',
        'Anomaly detection'
      ]
    }
  },
  {
    id: 'expense-tracking',
    title: {
      tr: 'Gider Takibi',
      en: 'Expense Tracking'
    },
    description: {
      tr: 'Araç giderleri ve bütçe yönetimi',
      en: 'Vehicle expenses and budget management'
    },
    image: driveup_manager_7,
    features: {
      tr: [
        'Gider kategorileri',
        'Bütçe planlama',
        'Maliyet analizi',
        'Raporlama'
      ],
      en: [
        'Expense categories',
        'Budget planning',
        'Cost analysis',
        'Reporting'
      ]
    }
  },
  {
    id: 'reports-analytics',
    title: {
      tr: 'Raporlar ve Analitik',
      en: 'Reports & Analytics'
    },
    description: {
      tr: 'Detaylı raporlar ve performans analizi',
      en: 'Detailed reports and performance analysis'
    },
    image: driveup_manager_8,
    features: {
      tr: [
        'Performans raporları',
        'Trend analizi',
        'Karşılaştırma grafikleri',
        'Export seçenekleri'
      ],
      en: [
        'Performance reports',
        'Trend analysis',
        'Comparison charts',
        'Export options'
      ]
    }
  },
  {
    id: 'alerts-notifications',
    title: {
      tr: 'Uyarılar ve Bildirimler',
      en: 'Alerts & Notifications'
    },
    description: {
      tr: 'Sistem uyarıları ve bildirim yönetimi',
      en: 'System alerts and notification management'
    },
    image: driveup_manager_9,
    features: {
      tr: [
        'Gerçek zamanlı uyarılar',
        'Bildirim ayarları',
        'Uyarı geçmişi',
        'E-posta/SMS entegrasyonu'
      ],
      en: [
        'Real-time alerts',
        'Notification settings',
        'Alert history',
        'Email/SMS integration'
      ]
    }
  },
  {
    id: 'compliance-tracking',
    title: {
      tr: 'Uyumluluk Takibi',
      en: 'Compliance Tracking'
    },
    description: {
      tr: 'Yasal gereklilikler ve uyumluluk kontrolü',
      en: 'Legal requirements and compliance monitoring'
    },
    image: driveup_manager_10,
    features: {
      tr: [
        'Yasal gereklilikler',
        'Uyumluluk raporları',
        'Denetim takibi',
        'Belge yönetimi'
      ],
      en: [
        'Legal requirements',
        'Compliance reports',
        'Audit tracking',
        'Document management'
      ]
    }
  },
  {
    id: 'insurance-management',
    title: {
      tr: 'Sigorta Yönetimi',
      en: 'Insurance Management'
    },
    description: {
      tr: 'Araç sigortaları ve poliçe takibi',
      en: 'Vehicle insurance and policy tracking'
    },
    image: driveup_manager_11,
    features: {
      tr: [
        'Poliçe takibi',
        'Yenileme hatırlatmaları',
        'Talep yönetimi',
        'Maliyet analizi'
      ],
      en: [
        'Policy tracking',
        'Renewal reminders',
        'Claim management',
        'Cost analysis'
      ]
    }
  },
  {
    id: 'document-center',
    title: {
      tr: 'Belge Merkezi',
      en: 'Document Center'
    },
    description: {
      tr: 'Araç ve sürücü belgelerinin merkezi yönetimi',
      en: 'Central management of vehicle and driver documents'
    },
    image: driveup_manager_12,
    features: {
      tr: [
        'Belge depolama',
        'Versiyon kontrolü',
        'Arama ve filtreleme',
        'Paylaşım izinleri'
      ],
      en: [
        'Document storage',
        'Version control',
        'Search and filtering',
        'Sharing permissions'
      ]
    }
  },
  {
    id: 'communication-hub',
    title: {
      tr: 'İletişim Merkezi',
      en: 'Communication Hub'
    },
    description: {
      tr: 'Ekip içi iletişim ve mesajlaşma araçları',
      en: 'Team communication and messaging tools'
    },
    image: driveup_manager_13,
    features: {
      tr: [
        'Ekip mesajlaşması',
        'Bildirim sistemi',
        'Mesaj şablonları',
        'İletişim geçmişi'
      ],
      en: [
        'Team messaging',
        'Notification system',
        'Message templates',
        'Communication history'
      ]
    }
  },
  {
    id: 'performance-metrics',
    title: {
      tr: 'Performans Metrikleri',
      en: 'Performance Metrics'
    },
    description: {
      tr: 'Filo ve sürücü performans göstergeleri',
      en: 'Fleet and driver performance indicators'
    },
    image: driveup_manager_14,
    features: {
      tr: [
        'KPI dashboard',
        'Performans karşılaştırması',
        'Hedef takibi',
        'İyileştirme önerileri'
      ],
      en: [
        'KPI dashboard',
        'Performance comparison',
        'Goal tracking',
        'Improvement suggestions'
      ]
    }
  },
  {
    id: 'safety-monitoring',
    title: {
      tr: 'Güvenlik İzleme',
      en: 'Safety Monitoring'
    },
    description: {
      tr: 'Güvenlik protokolleri ve risk yönetimi',
      en: 'Safety protocols and risk management'
    },
    image: driveup_manager_15,
    features: {
      tr: [
        'Güvenlik skorları',
        'Risk değerlendirmesi',
        'Olay raporları',
        'Güvenlik eğitimleri'
      ],
      en: [
        'Safety scores',
        'Risk assessment',
        'Incident reports',
        'Safety training'
      ]
    }
  },
  {
    id: 'integration-center',
    title: {
      tr: 'Entegrasyon Merkezi',
      en: 'Integration Center'
    },
    description: {
      tr: 'Üçüncü taraf uygulamalarla entegrasyon',
      en: 'Integration with third-party applications'
    },
    image: driveup_manager_16,
    features: {
      tr: [
        'API bağlantıları',
        'Veri senkronizasyonu',
        'Webhook yönetimi',
        'Entegrasyon logları'
      ],
      en: [
        'API connections',
        'Data synchronization',
        'Webhook management',
        'Integration logs'
      ]
    }
  },
  {
    id: 'mobile-access',
    title: {
      tr: 'Mobil Erişim',
      en: 'Mobile Access'
    },
    description: {
      tr: 'Mobil cihazlardan erişim ve yönetim',
      en: 'Access and management from mobile devices'
    },
    image: driveup_manager_17,
    features: {
      tr: [
        'Responsive tasarım',
        'Mobil uygulama',
        'Push bildirimleri',
        'Offline mod'
      ],
      en: [
        'Responsive design',
        'Mobile app',
        'Push notifications',
        'Offline mode'
      ]
    }
  },
  {
    id: 'settings-configuration',
    title: {
      tr: 'Ayarlar ve Konfigürasyon',
      en: 'Settings & Configuration'
    },
    description: {
      tr: 'Sistem ayarları ve kullanıcı tercihleri',
      en: 'System settings and user preferences'
    },
    image: driveup_manager_18,
    features: {
      tr: [
        'Kullanıcı ayarları',
        'Sistem konfigürasyonu',
        'Güvenlik ayarları',
        'Backup yönetimi'
      ],
      en: [
        'User settings',
        'System configuration',
        'Security settings',
        'Backup management'
      ]
    }
  },
  {
    id: 'help-support',
    title: {
      tr: 'Yardım ve Destek',
      en: 'Help & Support'
    },
    description: {
      tr: 'Kullanıcı yardımı ve teknik destek sistemi',
      en: 'User help and technical support system'
    },
    image: driveup_manager_19,
    features: {
      tr: [
        'Yardım dokümantasyonu',
        'Video eğitimler',
        'Canlı destek',
        'Ticket sistemi'
      ],
      en: [
        'Help documentation',
        'Video tutorials',
        'Live support',
        'Ticket system'
      ]
    }
  }
];
