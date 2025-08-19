import { ScreenshotData } from '../types';

// Import DriveupDesk images from assets/img/DriveupDesk folder
import driveup_desk_1 from '../assets/img/DriveupDesk/1.png';
import driveup_desk_2 from '../assets/img/DriveupDesk/2.png';

export const driveupDeskScreenshotData: ScreenshotData[] = [
  {
    id: 'desk-main-interface',
    title: {
      tr: 'DriveupDesk Ana Arayüz',
      en: 'DriveupDesk Main Interface'
    },
    description: {
      tr: 'Masaüstü uygulaması ana ekranı ve temel navigasyon',
      en: 'Desktop application main screen and basic navigation'
    },
    image: driveup_desk_1,
    features: {
      tr: [
        'Ana dashboard görünümü',
        'Hızlı erişim menüsü',
        'Sistem durumu göstergeleri',
        'Kullanıcı profil yönetimi'
      ],
      en: [
        'Main dashboard view',
        'Quick access menu',
        'System status indicators',
        'User profile management'
      ]
    }
  },
  {
    id: 'desk-settings-panel',
    title: {
      tr: 'DriveupDesk Ayarlar Paneli',
      en: 'DriveupDesk Settings Panel'
    },
    description: {
      tr: 'Uygulama ayarları ve konfigürasyon seçenekleri',
      en: 'Application settings and configuration options'
    },
    image: driveup_desk_2,
    features: {
      tr: [
        'Genel ayarlar',
        'Görünüm tercihleri',
        'Bildirim ayarları',
        'Güvenlik konfigürasyonu'
      ],
      en: [
        'General settings',
        'Display preferences',
        'Notification settings',
        'Security configuration'
      ]
    }
  }
];
