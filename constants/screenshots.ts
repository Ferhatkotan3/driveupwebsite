import { ScreenshotData } from '../types';
// Local placeholder image (SVG data URI) used instead of removed Figma asset import
const exampleImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

export const staticScreenshotData: ScreenshotData[] = [
  {
    id: 'dashboard',
    title: {
      tr: 'Ana Dashboard',
      en: 'Main Dashboard'
    },
    description: {
      tr: 'Kullanıcı dostu arayüz ile tüm işlemlere hızlı erişim sağlayan ana kontrol paneli',
      en: 'Main control panel providing quick access to all operations with user-friendly interface'
    },
    image: exampleImage,
    features: {
      tr: [
        'Gerçek zamanlı veri görüntüleme',
        'Özelleştirilebilir widget\'lar',
        'Hızlı eylem butonları',
        'Responsive tasarım'
      ],
      en: [
        'Real-time data display',
        'Customizable widgets',
        'Quick action buttons',
        'Responsive design'
      ]
    }
  },
  {
    id: 'mobile-app',
    title: {
      tr: 'Mobil Uygulama Ana Ekranı',
      en: 'Mobile App Home Screen'
    },
    description: {
      tr: 'iOS ve Android platformları için optimize edilmiş mobil ana ekran deneyimi',
      en: 'Mobile home screen experience optimized for iOS and Android platforms'
    },
    image: exampleImage,
    features: {
      tr: [
        'Dokunmatik optimize navigasyon',
        'Push bildirimleri entegrasyonu',
        'Offline mod desteği',
        'Hızlı erişim kısayolları'
      ],
      en: [
        'Touch-optimized navigation',
        'Push notifications integration',
        'Offline mode support',
        'Quick access shortcuts'
      ]
    }
  },
  {
    id: 'analytics',
    title: {
      tr: 'Analitik ve Raporlama',
      en: 'Analytics & Reporting'
    },
    description: {
      tr: 'Detaylı raporlama ve veri analizi araçları ile performans takibi',
      en: 'Performance tracking with detailed reporting and data analysis tools'
    },
    image: exampleImage,
    features: {
      tr: [
        'İnteraktif grafikler ve çizelgeler',
        'Özelleştirilebilir raporlar',
        'PDF/Excel export',
        'Zamanlı karşılaştırma'
      ],
      en: [
        'Interactive charts and graphs',
        'Customizable reports',
        'PDF/Excel export',
        'Time-based comparison'
      ]
    }
  },
  {
    id: 'user-management',
    title: {
      tr: 'Kullanıcı Yönetimi',
      en: 'User Management'
    },
    description: {
      tr: 'Kullanıcı hesapları, roller ve izinlerin yönetimi için kapsamlı araçlar',
      en: 'Comprehensive tools for managing user accounts, roles and permissions'
    },
    image: exampleImage,
    features: {
      tr: [
        'Rol bazlı erişim kontrolü',
        'Kullanıcı grupları yönetimi',
        'İki faktörlü kimlik doğrulama',
        'Aktivite logları'
      ],
      en: [
        'Role-based access control',
        'User group management',
        'Two-factor authentication',
        'Activity logs'
      ]
    }
  },
  {
    id: 'settings',
    title: {
      tr: 'Sistem Ayarları',
      en: 'System Settings'
    },
    description: {
      tr: 'Uygulama ayarları ve konfigürasyon seçenekleri yönetim paneli',
      en: 'Application settings and configuration options management panel'
    },
    image: exampleImage,
    features: {
      tr: [
        'Genel sistem konfigürasyonu',
        'API entegrasyon ayarları',
        'Güvenlik politikaları',
        'Backup ve geri yükleme'
      ],
      en: [
        'General system configuration',
        'API integration settings',
        'Security policies',
        'Backup and restore'
      ]
    }
  },
  {
    id: 'notifications',
    title: {
      tr: 'Bildirim Merkezi',
      en: 'Notification Center'
    },
    description: {
      tr: 'Sistem bildirimleri ve mesajların merkezi yönetim arayüzü',
      en: 'Central management interface for system notifications and messages'
    },
    image: exampleImage,
    features: {
      tr: [
        'Gerçek zamanlı bildirimler',
        'Bildirim geçmişi',
        'Özelleştirilebilir filtreler',
        'Email/SMS entegrasyonu'
      ],
      en: [
        'Real-time notifications',
        'Notification history',
        'Customizable filters',
        'Email/SMS integration'
      ]
    }
  },
  {
    id: 'search',
    title: {
      tr: 'Gelişmiş Arama',
      en: 'Advanced Search'
    },
    description: {
      tr: 'Güçlü arama algoritmaları ile hızlı ve doğru sonuçlar',
      en: 'Fast and accurate results with powerful search algorithms'
    },
    image: exampleImage,
    features: {
      tr: [
        'Akıllı arama önerileri',
        'Çoklu kriter filtreleme',
        'Arama geçmişi',
        'Kayıtlı aramalar'
      ],
      en: [
        'Smart search suggestions',
        'Multi-criteria filtering',
        'Search history',
        'Saved searches'
      ]
    }
  },
  {
    id: 'calendar',
    title: {
      tr: 'Takvim ve Planlama',
      en: 'Calendar & Planning'
    },
    description: {
      tr: 'Etkinlik planlama ve randevu yönetimi için entegre takvim sistemi',
      en: 'Integrated calendar system for event planning and appointment management'
    },
    image: exampleImage,
    features: {
      tr: [
        'Çoklu takvim görünümü',
        'Tekrarlayan etkinlikler',
        'Otomatik hatırlatmalar',
        'Takvim paylaşımı'
      ],
      en: [
        'Multiple calendar views',
        'Recurring events',
        'Automatic reminders',
        'Calendar sharing'
      ]
    }
  },
  {
    id: 'integration',
    title: {
      tr: 'Üçüncü Taraf Entegrasyonlar',
      en: 'Third-Party Integrations'
    },
    description: {
      tr: 'Popüler uygulamalar ve servislerle sorunsuz entegrasyon yönetimi',
      en: 'Seamless integration management with popular applications and services'
    },
    image: exampleImage,
    features: {
      tr: [
        'API bağlantı yönetimi',
        'Veri senkronizasyonu',
        'Webhook konfigürasyonu',
        'Entegrasyon logları'
      ],
      en: [
        'API connection management',
        'Data synchronization',
        'Webhook configuration',
        'Integration logs'
      ]
    }
  },
  {
    id: 'security',
    title: {
      tr: 'Güvenlik Merkezi',
      en: 'Security Center'
    },
    description: {
      tr: 'Kapsamlı güvenlik kontrolleri ve tehdit yönetimi araçları',
      en: 'Comprehensive security controls and threat management tools'
    },
    image: exampleImage,
    features: {
      tr: [
        'Güvenlik duvarı yönetimi',
        'Tehdit algılama sistemi',
        'Erişim logları analizi',
        'Güvenlik raporları'
      ],
      en: [
        'Firewall management',
        'Threat detection system',
        'Access log analysis',
        'Security reports'
      ]
    }
  },
  {
    id: 'backup',
    title: {
      tr: 'Yedekleme ve Geri Yükleme',
      en: 'Backup & Restore'
    },
    description: {
      tr: 'Otomatik yedekleme ve veri kurtarma seçenekleri yönetimi',
      en: 'Automatic backup and data recovery options management'
    },
    image: exampleImage,
    features: {
      tr: [
        'Otomatik yedekleme planları',
        'Anlık geri yükleme',
        'Bulut depolama entegrasyonu',
        'Veri bütünlüğü kontrolü'
      ],
      en: [
        'Automatic backup schedules',
        'Instant restore',
        'Cloud storage integration',
        'Data integrity checks'
      ]
    }
  },
  {
    id: 'performance',
    title: {
      tr: 'Performans İzleme',
      en: 'Performance Monitoring'
    },
    description: {
      tr: 'Sistem performansı ve kaynak kullanımının detaylı takibi',
      en: 'Detailed tracking of system performance and resource usage'
    },
    image: exampleImage,
    features: {
      tr: [
        'Gerçek zamanlı performans metrikleri',
        'Kaynak kullanım analizi',
        'Performans uyarıları',
        'Optimizasyon önerileri'
      ],
      en: [
        'Real-time performance metrics',
        'Resource usage analysis',
        'Performance alerts',
        'Optimization recommendations'
      ]
    }
  },
  {
    id: 'communication',
    title: {
      tr: 'İletişim Merkezi',
      en: 'Communication Hub'
    },
    description: {
      tr: 'Müşteri iletişimi ve mesajlaşma araçlarının merkezi yönetimi',
      en: 'Central management of customer communication and messaging tools'
    },
    image: exampleImage,
    features: {
      tr: [
        'Çoklu kanal mesajlaşma',
        'Otomatik yanıtlar',
        'Mesaj şablonları',
        'İletişim geçmişi'
      ],
      en: [
        'Multi-channel messaging',
        'Auto-responses',
        'Message templates',
        'Communication history'
      ]
    }
  },
  {
    id: 'workflow',
    title: {
      tr: 'İş Akışı Yönetimi',
      en: 'Workflow Management'
    },
    description: {
      tr: 'Özelleştirilebilir iş akışları ve süreç otomasyonu araçları',
      en: 'Customizable workflows and process automation tools'
    },
    image: exampleImage,
    features: {
      tr: [
        'Sürükle-bırak akış tasarımı',
        'Koşullu dallanma',
        'Onay süreçleri',
        'Süreç izleme'
      ],
      en: [
        'Drag-and-drop flow design',
        'Conditional branching',
        'Approval processes',
        'Process tracking'
      ]
    }
  },
  {
    id: 'inventory',
    title: {
      tr: 'Envanter Yönetimi',
      en: 'Inventory Management'
    },
    description: {
      tr: 'Stok takibi ve envanter kontrolü için kapsamlı yönetim sistemi',
      en: 'Comprehensive management system for stock tracking and inventory control'
    },
    image: exampleImage,
    features: {
      tr: [
        'Gerçek zamanlı stok durumu',
        'Otomatik sipariş önerileri',
        'Barkod/QR kod desteği',
        'Stok hareket geçmişi'
      ],
      en: [
        'Real-time stock status',
        'Automatic order suggestions',
        'Barcode/QR code support',
        'Stock movement history'
      ]
    }
  },
  {
    id: 'finance',
    title: {
      tr: 'Finansal Yönetim',
      en: 'Financial Management'
    },
    description: {
      tr: 'Gelir, gider ve bütçe yönetimi için finansal araçlar',
      en: 'Financial tools for revenue, expense and budget management'
    },
    image: exampleImage,
    features: {
      tr: [
        'Gelir-gider takibi',
        'Bütçe planlama',
        'Finansal raporlar',
        'Vergi hesaplamaları'
      ],
      en: [
        'Revenue-expense tracking',
        'Budget planning',
        'Financial reports',
        'Tax calculations'
      ]
    }
  },
  {
    id: 'customer',
    title: {
      tr: 'Müşteri Yönetimi',
      en: 'Customer Management'
    },
    description: {
      tr: 'Müşteri bilgileri ve ilişki yönetimi için CRM araçları',
      en: 'CRM tools for customer information and relationship management'
    },
    image: exampleImage,
    features: {
      tr: [
        'Müşteri profil yönetimi',
        'Etkileşim geçmişi',
        'Segmentasyon araçları',
        'Müşteri memnuniyet takibi'
      ],
      en: [
        'Customer profile management',
        'Interaction history',
        'Segmentation tools',
        'Customer satisfaction tracking'
      ]
    }
  },
  {
    id: 'project',
    title: {
      tr: 'Proje Yönetimi',
      en: 'Project Management'
    },
    description: {
      tr: 'Proje planlama, takip ve ekip işbirliği araçları',
      en: 'Project planning, tracking and team collaboration tools'
    },
    image: exampleImage,
    features: {
      tr: [
        'Gantt chart görünümü',
        'Görev ataması ve takibi',
        'Ekip işbirliği araçları',
        'Proje zaman çizelgesi'
      ],
      en: [
        'Gantt chart view',
        'Task assignment and tracking',
        'Team collaboration tools',
        'Project timeline'
      ]
    }
  },
  {
    id: 'document',
    title: {
      tr: 'Doküman Yönetimi',
      en: 'Document Management'
    },
    description: {
      tr: 'Dosya depolama, paylaşım ve versiyon kontrolü sistemi',
      en: 'File storage, sharing and version control system'
    },
    image: exampleImage,
    features: {
      tr: [
        'Bulut tabanlı depolama',
        'Versiyon kontrolü',
        'Dosya paylaşım izinleri',
        'Doküman arama motoru'
      ],
      en: [
        'Cloud-based storage',
        'Version control',
        'File sharing permissions',
        'Document search engine'
      ]
    }
  },
  {
    id: 'map',
    title: {
      tr: 'Harita ve Konum',
      en: 'Map & Location'
    },
    description: {
      tr: 'GPS takip ve coğrafi lokasyon yönetimi araçları',
      en: 'GPS tracking and geographic location management tools'
    },
    image: exampleImage,
    features: {
      tr: [
        'Gerçek zamanlı GPS takip',
        'Rota optimizasyonu',
        'Coğrafi bölge tanımlama',
        'Konum geçmişi'
      ],
      en: [
        'Real-time GPS tracking',
        'Route optimization',
        'Geographic zone definition',
        'Location history'
      ]
    }
  },
  {
    id: 'automation',
    title: {
      tr: 'Otomasyon Merkezi',
      en: 'Automation Center'
    },
    description: {
      tr: 'İş süreçlerinin otomatikleştirilmesi ve kural tanımlama',
      en: 'Automation of business processes and rule definition'
    },
    image: exampleImage,
    features: {
      tr: [
        'Koşullu otomasyon kuralları',
        'Zamanlı tetikleyiciler',
        'Email/SMS otomasyonu',
        'Otomasyon raporları'
      ],
      en: [
        'Conditional automation rules',
        'Scheduled triggers',
        'Email/SMS automation',
        'Automation reports'
      ]
    }
  },
  {
    id: 'quality',
    title: {
      tr: 'Kalite Kontrol',
      en: 'Quality Control'
    },
    description: {
      tr: 'Hizmet kalitesi takibi ve sürekli iyileştirme araçları',
      en: 'Service quality tracking and continuous improvement tools'
    },
    image: exampleImage,
    features: {
      tr: [
        'Kalite metrikleri dashboard\'ı',
        'Müşteri geri bildirimleri',
        'Performans skorları',
        'İyileştirme önerileri'
      ],
      en: [
        'Quality metrics dashboard',
        'Customer feedback',
        'Performance scores',
        'Improvement recommendations'
      ]
    }
  },
  {
    id: 'support',
    title: {
      tr: 'Destek Sistemi',
      en: 'Support System'
    },
    description: {
      tr: 'Müşteri destek talepleri ve ticket yönetim sistemi',
      en: 'Customer support requests and ticket management system'
    },
    image: exampleImage,
    features: {
      tr: [
        'Ticket oluşturma ve takip',
        'Öncelik seviyesi yönetimi',
        'Otomatik eskalasyon',
        'Destek ekibi atama'
      ],
      en: [
        'Ticket creation and tracking',
        'Priority level management',
        'Automatic escalation',
        'Support team assignment'
      ]
    }
  },
  {
    id: 'training',
    title: {
      tr: 'Eğitim Modülü',
      en: 'Training Module'
    },
    description: {
      tr: 'Kullanıcı eğitimleri ve öğrenme yönetim sistemi',
      en: 'User training and learning management system'
    },
    image: exampleImage,
    features: {
      tr: [
        'İnteraktif eğitim videoları',
        'Quizler ve testler',
        'İlerleme takibi',
        'Sertifika yönetimi'
      ],
      en: [
        'Interactive training videos',
        'Quizzes and tests',
        'Progress tracking',
        'Certificate management'
      ]
    }
  }
];