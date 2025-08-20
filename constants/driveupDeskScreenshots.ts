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
      tr: 'Masaüstü uygulaması ana arayüzü ve kontrol paneli',
      en: 'Desktop application main interface and control panel'
    },
    image: driveup_desk_1,
    features: {
      tr: [
        'Masaüstü optimizasyonu',
        'Geniş ekran desteği',
        'Hızlı erişim menüleri',
        'Profesyonel görünüm'
      ],
      en: [
        'Desktop optimization',
        'Wide screen support',
        'Quick access menus',
        'Professional appearance'
      ]
    }
  },
  {
    id: 'desk-settings',
    title: {
      tr: 'DriveupDesk Ayarlar',
      en: 'DriveupDesk Settings'
    },
    description: {
      tr: 'Masaüstü uygulaması ayarları ve konfigürasyon',
      en: 'Desktop application settings and configuration'
    },
    image: driveup_desk_2,
    features: {
      tr: [
        'Gelişmiş ayarlar',
        'Tema seçenekleri',
        'Klavye kısayolları',
        'Sistem entegrasyonu'
      ],
      en: [
        'Advanced settings',
        'Theme options',
        'Keyboard shortcuts',
        'System integration'
      ]
    }
  }
];