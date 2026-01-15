<?php
declare(strict_types=1);

class Content {
    private static array $content = [];

    public static function load(): void {
        if (empty(self::$content)) {
            self::$content = [
                'tr' => [
                    'meta' => [
                        'title' => 'DriveUp - Araç Kiralama Ekosisteminin Geleceği | Türkiye',
                        'description' => 'DriveUp, bireysel kullanıcılardan kurumsal filolara kadar araç kiralama sektörünün tüm ihtiyaçlarını karşılayan entegre platform ailesi.',
                        'keywords' => 'araç kiralama, car rental, filo yönetimi, fleet management, DriveUp, araç marketplace, bakım onarım, yedek parça'
                    ],
                    'nav' => [
                        'home' => 'Ana Sayfa',
                        'products' => 'Ürünler',
                        'about' => 'Hakkımızda',
                        'contact' => 'İletişim',
                        'partner' => 'İş Ortağı Ol',
                        'investor' => 'Yatırımcı Ol'
                    ],
                    'hero' => [
                        'title' => 'Araç Kiralama Ekosisteminin',
                        'titleHighlight' => 'Geleceği',
                        'subtitle' => 'Bireysel kullanıcılardan kurumsal filolara kadar araç kiralama sektörünün tüm ihtiyaçlarını karşılayan entegre platform ailesi.',
                        'cta1' => 'İş Ortağı Ol',
                        'cta2' => 'Yatırımcı Ol'
                    ],
                    'stats' => [
                        'marketSize' => ['value' => '750M TL', 'label' => 'Türkiye Pazar Büyüklüğü'],
                        'growth' => ['value' => '%23', 'label' => 'Yıllık Büyüme'],
                        'vehicles' => ['value' => '45K+', 'label' => 'Araç Filosu'],
                        'partners' => ['value' => '1.2K+', 'label' => 'İş Ortağı']
                    ],
                    'platforms' => [
                        [
                            'id' => 'driveupgo',
                            'name' => 'DriveUpGo',
                            'tagline' => 'Marketplace',
                            'description' => 'Bireysel ve kurumsal müşteriler için araç kiralama marketplace platformu',
                            'features' => [
                                'Anlık araç bulma ve rezervasyon',
                                'Fiyat karşılaştırma ve en uygun seçenekler',
                                'Mobil uygulama ile kolay yönetim',
                                'Güvenli ödeme sistemi'
                            ]
                        ],
                        [
                            'id' => 'driveupmanager',
                            'name' => 'DriveUpManager',
                            'tagline' => 'Operasyon Yönetimi',
                            'description' => 'Araç kiralama şirketleri için kapsamlı operasyon yönetim sistemi',
                            'features' => [
                                'Filo takibi ve analitik raporlama',
                                'Otomatik fiyatlandırma algoritmaları',
                                'Müşteri ilişkileri yönetimi (CRM)',
                                'Entegre muhasebe sistemi'
                            ]
                        ],
                        [
                            'id' => 'driveupfixer',
                            'name' => 'DriveUpFixer',
                            'tagline' => 'Bakım & Onarım',
                            'description' => 'Araç bakım, onarım ve yedek parça tedarik platformu',
                            'features' => [
                                'Bakım takvimleri ve hatırlatmalar',
                                'Servis ağı yönetimi',
                                'Yedek parça tedarik zinciri',
                                'Hasar kayıt ve takip sistemi'
                            ]
                        ],
                        [
                            'id' => 'driveuppro',
                            'name' => 'DriveUpPro',
                            'tagline' => 'Kurumsal Filo',
                            'description' => 'Büyük ölçekli kurumsal filo yönetimi ve optimizasyon çözümleri',
                            'features' => [
                                'AI destekli filo optimizasyonu',
                                'Maliyet analizi ve raporlama',
                                'Çok lokasyonlu yönetim',
                                'API entegrasyonları'
                            ]
                        ],
                        [
                            'id' => 'driveupdesk',
                            'name' => 'DriveUpDesk',
                            'tagline' => 'Call Center',
                            'description' => 'Müşteri hizmetleri ve destek operasyonları yönetim platformu',
                            'features' => [
                                '7/24 müşteri destek sistemi',
                                'Çok kanallı iletişim (telefon, chat, email)',
                                'Bilet yönetimi ve takip',
                                'Performans analitikleri'
                            ]
                        ]
                    ],
                    'about' => [
                        'title' => 'Sektörün Dijital Dönüşüm Lideri',
                        'description' => 'DriveUp, Türkiye\'nin araç kiralama sektöründe kapsamlı dijital çözümler sunan öncü teknoloji platformudur.'
                    ],
                    'contact' => [
                        'title' => 'İletişime Geçin',
                        'email' => 'info@driveuptr.com',
                        'phone' => '+90 xxx xxx xxxx',
                        'address' => 'İstanbul, Türkiye'
                    ]
                ],
                'en' => [
                    'meta' => [
                        'title' => 'DriveUp - Future of Car Rental Ecosystem | Turkey',
                        'description' => 'DriveUp is an integrated platform family that meets all the needs of the car rental industry from individual users to corporate fleets.',
                        'keywords' => 'car rental, fleet management, DriveUp, vehicle marketplace, maintenance, spare parts'
                    ],
                    'nav' => [
                        'home' => 'Home',
                        'products' => 'Products',
                        'about' => 'About',
                        'contact' => 'Contact',
                        'partner' => 'Become Partner',
                        'investor' => 'Become Investor'
                    ],
                    'hero' => [
                        'title' => 'Future of Car Rental',
                        'titleHighlight' => 'Ecosystem',
                        'subtitle' => 'An integrated platform family that meets all the needs of the car rental industry from individual users to corporate fleets.',
                        'cta1' => 'Become Partner',
                        'cta2' => 'Become Investor'
                    ],
                    'stats' => [
                        'marketSize' => ['value' => '$42M', 'label' => 'Turkey Market Size'],
                        'growth' => ['value' => '23%', 'label' => 'Annual Growth'],
                        'vehicles' => ['value' => '45K+', 'label' => 'Vehicle Fleet'],
                        'partners' => ['value' => '1.2K+', 'label' => 'Partners']
                    ],
                    'platforms' => [
                        [
                            'id' => 'driveupgo',
                            'name' => 'DriveUpGo',
                            'tagline' => 'Marketplace',
                            'description' => 'Car rental marketplace platform for individual and corporate customers',
                            'features' => [
                                'Instant vehicle search and reservation',
                                'Price comparison and best options',
                                'Easy management with mobile app',
                                'Secure payment system'
                            ]
                        ],
                        [
                            'id' => 'driveupmanager',
                            'name' => 'DriveUpManager',
                            'tagline' => 'Operations Management',
                            'description' => 'Comprehensive operations management system for car rental companies',
                            'features' => [
                                'Fleet tracking and analytics reporting',
                                'Automated pricing algorithms',
                                'Customer relationship management (CRM)',
                                'Integrated accounting system'
                            ]
                        ],
                        [
                            'id' => 'driveupfixer',
                            'name' => 'DriveUpFixer',
                            'tagline' => 'Maintenance & Repair',
                            'description' => 'Vehicle maintenance, repair and spare parts supply platform',
                            'features' => [
                                'Maintenance schedules and reminders',
                                'Service network management',
                                'Spare parts supply chain',
                                'Damage recording and tracking system'
                            ]
                        ],
                        [
                            'id' => 'driveuppro',
                            'name' => 'DriveUpPro',
                            'tagline' => 'Corporate Fleet',
                            'description' => 'Large-scale corporate fleet management and optimization solutions',
                            'features' => [
                                'AI-powered fleet optimization',
                                'Cost analysis and reporting',
                                'Multi-location management',
                                'API integrations'
                            ]
                        ],
                        [
                            'id' => 'driveupdesk',
                            'name' => 'DriveUpDesk',
                            'tagline' => 'Call Center',
                            'description' => 'Customer service and support operations management platform',
                            'features' => [
                                '24/7 customer support system',
                                'Multi-channel communication (phone, chat, email)',
                                'Ticket management and tracking',
                                'Performance analytics'
                            ]
                        ]
                    ],
                    'about' => [
                        'title' => 'Digital Transformation Leader',
                        'description' => 'DriveUp is the leading technology platform offering comprehensive digital solutions in Turkey\'s car rental industry.'
                    ],
                    'contact' => [
                        'title' => 'Get In Touch',
                        'email' => 'info@driveuptr.com',
                        'phone' => '+90 xxx xxx xxxx',
                        'address' => 'Istanbul, Turkey'
                    ]
                ]
            ];
        }
    }

    public static function get(string $language = null): array {
        if (empty(self::$content)) {
            self::load();
        }

        if ($language === null) {
            $language = Session::getLanguage();
        }

        return self::$content[$language] ?? self::$content[DEFAULT_LANGUAGE];
    }

    public static function getSection(string $section, string $language = null): array {
        $content = self::get($language);
        return $content[$section] ?? [];
    }
}
?>