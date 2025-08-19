<?php
declare(strict_types=1);

// Bootstrap application
require_once __DIR__ . '/config/config.php';
require_once __DIR__ . '/classes/Security.php';
require_once __DIR__ . '/classes/Session.php';
require_once __DIR__ . '/classes/Content.php';
require_once __DIR__ . '/classes/FormHandler.php';

// Initialize database
Database::init();
Database::createTables();

// Start session
Session::start();

// Handle AJAX requests
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest') {
    header('Content-Type: application/json');
    
    $formHandler = new FormHandler();
    $action = $_POST['action'] ?? '';
    
    switch ($action) {
        case 'partner_application':
            echo json_encode($formHandler->handlePartnerApplication());
            exit;
            
        case 'investor_application':
            echo json_encode($formHandler->handleInvestorApplication());
            exit;
            
        case 'set_language':
            $language = $_POST['language'] ?? DEFAULT_LANGUAGE;
            Session::setLanguage($language);
            echo json_encode(['success' => true]);
            exit;
            
        case 'set_dark_mode':
            $darkMode = filter_var($_POST['dark_mode'] ?? false, FILTER_VALIDATE_BOOLEAN);
            Session::setDarkMode($darkMode);
            echo json_encode(['success' => true]);
            exit;
            
        default:
            echo json_encode(['success' => false, 'message' => 'Invalid action']);
            exit;
    }
}

// Handle URL routing
$requestUri = $_SERVER['REQUEST_URI'];
$path = parse_url($requestUri, PHP_URL_PATH);
$query = parse_url($requestUri, PHP_URL_QUERY);

// Parse query parameters
parse_str($query ?: '', $params);

// Route handling
$page = 'home';
$productId = null;

if ($path === '/' || $path === '/index.php') {
    $page = 'home';
} elseif (preg_match('/^\/product\/([a-z]+)$/', $path, $matches)) {
    $page = 'product';
    $productId = $matches[1];
} elseif (isset($params['page'])) {
    $page = $params['page'];
    $productId = $params['product'] ?? null;
}

// Load content
Content::load();
$content = Content::get();
$language = Session::getLanguage();
$darkMode = Session::getDarkMode();

// Clean up old sessions periodically
if (random_int(1, 100) === 1) {
    Session::cleanupOldSessions();
}
?>
<!DOCTYPE html>
<html lang="<?= htmlspecialchars($language) ?>" class="<?= $darkMode ? 'dark' : '' ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Primary Meta Tags -->
    <title><?= htmlspecialchars($content['meta']['title']) ?></title>
    <meta name="title" content="<?= htmlspecialchars($content['meta']['title']) ?>">
    <meta name="description" content="<?= htmlspecialchars($content['meta']['description']) ?>">
    <meta name="keywords" content="<?= htmlspecialchars($content['meta']['keywords']) ?>">
    <meta name="author" content="DriveUp Technologies">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?= APP_URL ?>">
    <meta property="og:title" content="<?= htmlspecialchars($content['meta']['title']) ?>">
    <meta property="og:description" content="<?= htmlspecialchars($content['meta']['description']) ?>">
    <meta property="og:image" content="<?= APP_URL ?>/assets/og-image.jpg">
    <meta property="og:site_name" content="DriveUp">
    <meta property="og:locale" content="<?= $language === 'tr' ? 'tr_TR' : 'en_US' ?>">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="<?= APP_URL ?>">
    <meta property="twitter:title" content="<?= htmlspecialchars($content['meta']['title']) ?>">
    <meta property="twitter:description" content="<?= htmlspecialchars($content['meta']['description']) ?>">
    <meta property="twitter:image" content="<?= APP_URL ?>/assets/twitter-image.jpg">
    
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
    <link rel="manifest" href="/assets/site.webmanifest">
    <link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="#007AFF">
    <meta name="msapplication-TileColor" content="#007AFF">
    <meta name="theme-color" content="#007AFF">
    
    <!-- Performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    
    <!-- CSS -->
    <link href="/styles/globals.css" rel="stylesheet">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "DriveUp Technologies",
      "description": "<?= htmlspecialchars($content['about']['description']) ?>",
      "url": "<?= APP_URL ?>",
      "logo": "<?= APP_URL ?>/assets/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "<?= htmlspecialchars($content['contact']['phone']) ?>",
        "contactType": "Customer Service",
        "email": "<?= htmlspecialchars($content['contact']['email']) ?>"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TR",
        "addressLocality": "<?= htmlspecialchars($content['contact']['address']) ?>"
      },
      "sameAs": [
        "https://linkedin.com/company/driveup-tr"
      ]
    }
    </script>
</head>
<body>
    <div id="page-wrapper" class="page-wrapper">
        <!-- Header -->
        <?php include __DIR__ . '/components/header.php'; ?>
        
        <!-- Main Content -->
        <div class="page-content transition-all duration-300 pt-4 sm:pt-6 lg:pt-0">
            <?php if ($page === 'home'): ?>
                <?php include __DIR__ . '/components/home.php'; ?>
            <?php elseif ($page === 'product' && $productId): ?>
                <?php include __DIR__ . '/components/product.php'; ?>
            <?php else: ?>
                <?php include __DIR__ . '/components/404.php'; ?>
            <?php endif; ?>
        </div>
        
        <!-- Modals -->
        <?php include __DIR__ . '/components/modals.php'; ?>
    </div>
    
    <!-- JavaScript -->
    <script src="/assets/js/app.js"></script>
</body>
</html>