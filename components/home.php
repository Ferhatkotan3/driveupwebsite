<?php
// Home Page Component
?>
<main>
    <!-- Hero Section -->
    <section class="hero-gradient section-padding">
        <div class="container-custom">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="mb-6 animate-fadeInUp">
                    <?= htmlspecialchars($content['hero']['title']) ?>
                    <span class="text-gradient"><?= htmlspecialchars($content['hero']['titleHighlight']) ?></span>
                </h1>
                
                <p class="text-large mb-8 animate-fadeInUp" style="animation-delay: 0.2s;">
                    <?= htmlspecialchars($content['hero']['subtitle']) ?>
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp" style="animation-delay: 0.4s;">
                    <button onclick="openPartnerForm()" class="btn-primary">
                        <?= htmlspecialchars($content['hero']['cta1']) ?>
                    </button>
                    <button onclick="openInvestorForm()" class="btn-secondary">
                        <?= htmlspecialchars($content['hero']['cta2']) ?>
                    </button>
                </div>
                
                <!-- Stats -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeInUp" style="animation-delay: 0.6s;">
                    <?php foreach ($content['stats'] as $stat): ?>
                    <div class="text-center">
                        <div class="text-2xl lg:text-3xl font-semibold text-primary mb-2">
                            <?= htmlspecialchars($stat['value']) ?>
                        </div>
                        <div class="text-sm text-muted-foreground">
                            <?= htmlspecialchars($stat['label']) ?>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="section-padding bg-background-secondary">
        <div class="container-custom">
            <div class="max-w-3xl mx-auto text-center mb-16">
                <h2 class="mb-6"><?= $language === 'tr' ? 'Ürün Ailesi' : 'Product Family' ?></h2>
                <p class="text-large">
                    <?= $language === 'tr' 
                        ? 'Araç kiralama sektörünün her ihtiyacını karşılayan entegre platform çözümleri'
                        : 'Integrated platform solutions that meet every need of the car rental industry'
                    ?>
                </p>
            </div>

            <!-- Products Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php foreach ($content['platforms'] as $index => $platform): ?>
                <div class="card-minimal group cursor-pointer animate-fadeInUp" 
                     style="animation-delay: <?= $index * 0.1 ?>s;"
                     onclick="navigateToProduct(event, <?= htmlspecialchars(json_encode($platform)) ?>)">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                            <span class="text-primary font-bold"><?= substr($platform['name'], -2) ?></span>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-foreground"><?= htmlspecialchars($platform['name']) ?></h3>
                            <p class="text-sm text-primary"><?= htmlspecialchars($platform['tagline']) ?></p>
                        </div>
                    </div>
                    
                    <p class="text-muted-foreground mb-6">
                        <?= htmlspecialchars($platform['description']) ?>
                    </p>
                    
                    <ul class="space-y-2">
                        <?php foreach (array_slice($platform['features'], 0, 3) as $feature): ?>
                        <li class="flex items-center text-sm text-muted-foreground">
                            <svg class="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <?= htmlspecialchars($feature) ?>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                    
                    <div class="mt-6 pt-4 border-t border-border">
                        <span class="text-primary font-medium group-hover:underline">
                            <?= $language === 'tr' ? 'Detayları Gör' : 'View Details' ?> →
                        </span>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-padding">
        <div class="container-custom">
            <div class="max-w-4xl mx-auto">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="mb-6"><?= htmlspecialchars($content['about']['title']) ?></h2>
                        <p class="text-large mb-6">
                            <?= htmlspecialchars($content['about']['description']) ?>
                        </p>
                        <div class="space-y-4">
                            <?php 
                            $features = $language === 'tr' 
                                ? [
                                    'Türkiye\'nin en kapsamlı araç kiralama ekosistemi',
                                    'AI destekli akıllı filo yönetimi',
                                    'End-to-end dijital çözümler',
                                    '7/24 müşteri destek hizmetleri'
                                ]
                                : [
                                    'Turkey\'s most comprehensive car rental ecosystem',
                                    'AI-powered smart fleet management',
                                    'End-to-end digital solutions',
                                    '24/7 customer support services'
                                ];
                            ?>
                            <?php foreach ($features as $feature): ?>
                            <div class="flex items-center">
                                <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span class="text-muted-foreground"><?= htmlspecialchars($feature) ?></span>
                            </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                    <div class="lg:order-first">
                        <div class="card-elevated">
                            <div class="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                    </div>
                                    <p class="text-muted-foreground">
                                        <?= $language === 'tr' ? 'Dijital Dönüşüm' : 'Digital Transformation' ?>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="section-padding bg-background-secondary">
        <div class="container-custom">
            <div class="max-w-3xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="mb-6"><?= $language === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions' ?></h2>
                    <p class="text-large">
                        <?= $language === 'tr' 
                            ? 'DriveUp hakkında merak edilenler'
                            : 'Everything you need to know about DriveUp'
                        ?>
                    </p>
                </div>

                <div class="space-y-4">
                    <?php 
                    $faqs = $language === 'tr' 
                        ? [
                            ['question' => 'DriveUp nedir ve nasıl çalışır?', 'answer' => 'DriveUp, araç kiralama sektörünün tüm ihtiyaçlarını karşılayan entegre bir platform ailesidir. 5 farklı ürün ile marketplace\'ten operasyon yönetimine kadar kapsamlı çözümler sunar.'],
                            ['question' => 'Hangi şirketler DriveUp\'ı kullanabilir?', 'answer' => 'Bireysel araç kiralama şirketlerinden büyük kurumsal filolara, yedek parça tedarikçilerinden servis ağlarına kadar sektördeki tüm aktörler DriveUp ekosisteminden faydalanabilir.'],
                            ['question' => 'DriveUp\'ın rekabet avantajları nelerdir?', 'answer' => 'AI destekli akıllı algoritmaları, end-to-end entegre çözümleri, 7/24 müşteri desteği ve Türkiye\'nin en kapsamlı araç kiralama ekosistemi olmak başlıca avantajlarımızdır.'],
                            ['question' => 'İş ortağı olmak için hangi kriterler gerekiyor?', 'answer' => 'Araç kiralama sektöründe faaliyet gösteren veya sektöre hizmet veren şirketler iş ortağımız olabilir. Başvuru formunu doldurarak sürecin bir parçası olabilirsiniz.']
                        ]
                        : [
                            ['question' => 'What is DriveUp and how does it work?', 'answer' => 'DriveUp is an integrated platform family that meets all the needs of the car rental industry. It offers comprehensive solutions from marketplace to operations management with 5 different products.'],
                            ['question' => 'Which companies can use DriveUp?', 'answer' => 'All actors in the industry, from individual car rental companies to large corporate fleets, from spare parts suppliers to service networks, can benefit from the DriveUp ecosystem.'],
                            ['question' => 'What are DriveUp\'s competitive advantages?', 'answer' => 'AI-powered smart algorithms, end-to-end integrated solutions, 24/7 customer support, and being Turkey\'s most comprehensive car rental ecosystem are our main advantages.'],
                            ['question' => 'What criteria are required to become a partner?', 'answer' => 'Companies operating in the car rental industry or serving the industry can become our partners. You can be part of the process by filling out the application form.']
                        ];
                    ?>
                    <?php foreach ($faqs as $index => $faq): ?>
                    <div class="card-minimal">
                        <button onclick="toggleFAQ(<?= $index ?>)" class="w-full flex items-center justify-between text-left">
                            <span class="font-medium text-foreground"><?= htmlspecialchars($faq['question']) ?></span>
                            <svg id="faq-icon-<?= $index ?>" class="w-5 h-5 text-muted-foreground transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="faq-content-<?= $index ?>" class="mt-4 text-muted-foreground hidden">
                            <?= htmlspecialchars($faq['answer']) ?>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding">
        <div class="container-custom">
            <div class="card-elevated text-center max-w-4xl mx-auto">
                <h2 class="mb-6">
                    <?= $language === 'tr' 
                        ? 'DriveUp Ekosisteminin Bir Parçası Olun'
                        : 'Become Part of the DriveUp Ecosystem'
                    ?>
                </h2>
                <p class="text-large mb-8">
                    <?= $language === 'tr' 
                        ? 'Araç kiralama sektörünün geleceğini birlikte şekillendirin'
                        : 'Shape the future of the car rental industry together'
                    ?>
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onclick="openPartnerForm()" class="btn-primary">
                        <?= htmlspecialchars($content['nav']['partner']) ?>
                    </button>
                    <button onclick="openInvestorForm()" class="btn-secondary">
                        <?= htmlspecialchars($content['nav']['investor']) ?>
                    </button>
                </div>
            </div>
        </div>
    </section>
</main>