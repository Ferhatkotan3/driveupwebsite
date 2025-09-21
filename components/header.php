<?php
// Header Component
$csrfToken = Security::generateCSRFToken();
?>
<header class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div class="container-custom">
        <div class="flex items-center justify-between h-16 lg:h-20">
            <!-- Logo -->
            <div class="flex items-center">
                <a href="/" class="flex items-center space-x-3 group" onclick="navigateToHome(event)">
                    <div class="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <span class="text-white font-bold text-sm lg:text-base">D</span>
                    </div>
                    <div class="flex flex-col">
                        <div class="text-lg lg:text-xl font-semibold text-foreground">
                            <span class="text-black dark:text-white">Drive</span><span class="text-primary">UP</span>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden lg:flex items-center space-x-8">
                <a href="/" class="nav-link text-muted-foreground hover:text-foreground transition-colors" onclick="navigateToHome(event)">
                    <?= htmlspecialchars($content['nav']['home']) ?>
                </a>
                <div class="relative group">
                    <button class="nav-link text-muted-foreground hover:text-foreground transition-colors flex items-center">
                        <?= htmlspecialchars($content['nav']['products']) ?>
                        <svg class="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <!-- Products Dropdown -->
                    <div class="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div class="p-4 space-y-3">
                            <?php foreach ($content['platforms'] as $platform): ?>
                            <a href="/product/<?= $platform['id'] ?>" 
                               class="block p-3 rounded-lg hover:bg-muted transition-colors"
                               onclick="navigateToProduct(event, <?= htmlspecialchars(json_encode($platform)) ?>)">
                                <div class="flex items-center space-x-3">
                                    <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <span class="text-primary font-semibold text-sm"><?= substr($platform['name'], -2) ?></span>
                                    </div>
                                    <div>
                                        <div class="font-medium text-foreground"><?= htmlspecialchars($platform['name']) ?></div>
                                        <div class="text-sm text-muted-foreground"><?= htmlspecialchars($platform['tagline']) ?></div>
                                    </div>
                                </div>
                            </a>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
                <button onclick="openContactBanner()" class="nav-link text-muted-foreground hover:text-foreground transition-colors">
                    <?= htmlspecialchars($content['nav']['contact']) ?>
                </button>
            </nav>

            <!-- Action Buttons -->
            <div class="flex items-center space-x-2 lg:space-x-4">
                <!-- Language Toggle -->
                <div class="relative">
                    <button onclick="toggleLanguageDropdown()" class="flex items-center space-x-1 px-2 py-1 rounded-md hover:bg-muted transition-colors">
                        <span class="text-sm font-medium text-muted-foreground uppercase"><?= $language ?></span>
                        <svg class="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="language-dropdown" class="absolute top-full right-0 mt-1 w-20 bg-background border border-border rounded-md shadow-lg opacity-0 invisible transition-all duration-200">
                        <div class="py-1">
                            <button onclick="changeLanguage('tr')" class="block w-full px-3 py-2 text-left text-sm hover:bg-muted <?= $language === 'tr' ? 'bg-muted text-primary' : 'text-muted-foreground' ?>">TR</button>
                            <button onclick="changeLanguage('en')" class="block w-full px-3 py-2 text-left text-sm hover:bg-muted <?= $language === 'en' ? 'bg-muted text-primary' : 'text-muted-foreground' ?>">EN</button>
                        </div>
                    </div>
                </div>

                <!-- Dark Mode Toggle -->
                <button onclick="toggleDarkMode()" class="p-2 rounded-md hover:bg-muted transition-colors">
                    <svg class="w-5 h-5 text-muted-foreground dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                    </svg>
                    <svg class="w-5 h-5 text-muted-foreground hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                </button>

                <!-- Partner Button -->
                <button onclick="openPartnerForm()" class="hidden lg:flex btn-secondary">
                    <?= htmlspecialchars($content['nav']['partner']) ?>
                </button>

                <!-- Mobile Menu Button -->
                <button onclick="toggleMobileMenu()" class="lg:hidden p-2 rounded-md hover:bg-muted transition-colors">
                    <svg id="menu-icon" class="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    <svg id="close-icon" class="w-6 h-6 text-muted-foreground hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="lg:hidden fixed inset-x-0 top-16 bg-background border-b border-border shadow-lg transform -translate-y-full opacity-0 transition-all duration-300">
            <div class="p-4 space-y-4">
                <a href="/" class="block py-2 text-muted-foreground hover:text-foreground transition-colors" onclick="navigateToHome(event)">
                    <?= htmlspecialchars($content['nav']['home']) ?>
                </a>
                
                <!-- Mobile Products -->
                <div class="space-y-2">
                    <div class="text-sm font-medium text-foreground"><?= htmlspecialchars($content['nav']['products']) ?></div>
                    <?php foreach ($content['platforms'] as $platform): ?>
                    <a href="/product/<?= $platform['id'] ?>" 
                       class="block py-2 pl-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                       onclick="navigateToProduct(event, <?= htmlspecialchars(json_encode($platform)) ?>)">
                        <?= htmlspecialchars($platform['name']) ?>
                    </a>
                    <?php endforeach; ?>
                </div>
                
                <button onclick="openContactBanner()" class="block py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left">
                    <?= htmlspecialchars($content['nav']['contact']) ?>
                </button>
                
                <div class="border-t border-border pt-4 space-y-3">
                    <button onclick="openPartnerForm()" class="w-full btn-secondary">
                        <?= htmlspecialchars($content['nav']['partner']) ?>
                    </button>
                    <button onclick="openInvestorForm()" class="w-full btn-primary">
                        <?= htmlspecialchars($content['nav']['investor']) ?>
                    </button>
                </div>
            </div>
        </div>
    </div>
</header>

<script>
// Pass CSRF token to JavaScript
window.csrfToken = "<?= $csrfToken ?>";
window.currentLanguage = "<?= $language ?>";
window.isDarkMode = <?= $darkMode ? 'true' : 'false' ?>;
window.content = <?= json_encode($content) ?>;
</script>