// DriveUp PHP Application JavaScript
class DriveUpApp {
    constructor() {
        this.currentPage = 'home';
        this.selectedProduct = null;
        this.mobileMenuOpen = false;
        this.init();
    }

    init() {
        // Initialize app
        this.setupEventListeners();
        this.updateUIState();
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#language-dropdown') && !e.target.closest('button[onclick="toggleLanguageDropdown()"]')) {
                this.closeLanguageDropdown();
            }
        });
    }

    setupEventListeners() {
        // Form submission handlers
        document.addEventListener('submit', (e) => {
            if (e.target.id === 'partner-form') {
                e.preventDefault();
                this.handlePartnerForm(e.target);
            } else if (e.target.id === 'investor-form') {
                e.preventDefault();
                this.handleInvestorForm(e.target);
            }
        });

        // Window resize handler
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
                this.closeMobileMenu();
            }
        });
    }

    // Navigation
    navigateToHome(event) {
        if (event) event.preventDefault();
        this.currentPage = 'home';
        this.selectedProduct = null;
        this.closeMobileMenu();
        window.history.pushState({ page: 'home' }, '', '/');
        this.updatePageContent();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navigateToProduct(event, product) {
        if (event) event.preventDefault();
        this.currentPage = 'product';
        this.selectedProduct = product;
        this.closeMobileMenu();
        window.history.pushState({ page: 'product', product: product }, '', `/product/${product.id}`);
        this.updatePageContent();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    updatePageContent() {
        // This would typically update the page content
        // For now, we'll just reload the page with the new URL
        if (this.currentPage === 'home') {
            window.location.href = '/';
        } else if (this.currentPage === 'product' && this.selectedProduct) {
            window.location.href = `/product/${this.selectedProduct.id}`;
        }
    }

    // Mobile Menu
    toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');

        if (this.mobileMenuOpen) {
            mobileMenu.classList.remove('-translate-y-full', 'opacity-0');
            mobileMenu.classList.add('translate-y-0', 'opacity-100');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.add('-translate-y-full', 'opacity-0');
            mobileMenu.classList.remove('translate-y-0', 'opacity-100');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    closeMobileMenu() {
        if (this.mobileMenuOpen) {
            this.toggleMobileMenu();
        }
    }

    // Language
    toggleLanguageDropdown() {
        const dropdown = document.getElementById('language-dropdown');
        const isVisible = dropdown.classList.contains('opacity-100');
        
        if (isVisible) {
            dropdown.classList.remove('opacity-100', 'visible');
            dropdown.classList.add('opacity-0', 'invisible');
        } else {
            dropdown.classList.add('opacity-100', 'visible');
            dropdown.classList.remove('opacity-0', 'invisible');
        }
    }

    closeLanguageDropdown() {
        const dropdown = document.getElementById('language-dropdown');
        dropdown.classList.remove('opacity-100', 'visible');
        dropdown.classList.add('opacity-0', 'invisible');
    }

    async changeLanguage(language) {
        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: `action=set_language&language=${language}&csrf_token=${window.csrfToken}`
            });

            const result = await response.json();
            if (result.success) {
                window.location.reload();
            }
        } catch (error) {
            console.error('Language change failed:', error);
        }
        
        this.closeLanguageDropdown();
    }

    // Dark Mode
    async toggleDarkMode() {
        const isDark = document.documentElement.classList.contains('dark');
        const newDarkMode = !isDark;

        document.documentElement.classList.toggle('dark', newDarkMode);

        try {
            await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: `action=set_dark_mode&dark_mode=${newDarkMode}&csrf_token=${window.csrfToken}`
            });
        } catch (error) {
            console.error('Dark mode toggle failed:', error);
        }
    }

    // Modals
    openPartnerForm() {
        const modal = document.getElementById('partner-modal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }
        this.closeMobileMenu();
    }

    closePartnerForm() {
        const modal = document.getElementById('partner-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = '';
        }
    }

    openInvestorForm() {
        const modal = document.getElementById('investor-modal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }
        this.closeMobileMenu();
    }

    closeInvestorForm() {
        const modal = document.getElementById('investor-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = '';
        }
    }

    openContactBanner() {
        const banner = document.getElementById('contact-banner');
        if (banner) {
            banner.classList.remove('hidden');
            banner.classList.add('flex');
        }
        this.closeMobileMenu();
    }

    closeContactBanner() {
        const banner = document.getElementById('contact-banner');
        if (banner) {
            banner.classList.add('hidden');
            banner.classList.remove('flex');
        }
    }

    closeAllModals() {
        this.closePartnerForm();
        this.closeInvestorForm();
        this.closeContactBanner();
    }

    // Forms
    async handlePartnerForm(form) {
        const formData = new FormData(form);
        formData.append('action', 'partner_application');
        formData.append('csrf_token', window.csrfToken);

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: formData
            });

            const result = await response.json();
            
            if (result.success) {
                this.showNotification(result.message, 'success');
                form.reset();
                this.closePartnerForm();
            } else {
                this.showNotification(result.message, 'error');
                if (result.errors) {
                    this.showFormErrors(form, result.errors);
                }
            }
        } catch (error) {
            this.showNotification('An error occurred. Please try again.', 'error');
        }
    }

    async handleInvestorForm(form) {
        const formData = new FormData(form);
        formData.append('action', 'investor_application');
        formData.append('csrf_token', window.csrfToken);

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: formData
            });

            const result = await response.json();
            
            if (result.success) {
                this.showNotification(result.message, 'success');
                form.reset();
                this.closeInvestorForm();
            } else {
                this.showNotification(result.message, 'error');
                if (result.errors) {
                    this.showFormErrors(form, result.errors);
                }
            }
        } catch (error) {
            this.showNotification('An error occurred. Please try again.', 'error');
        }
    }

    showFormErrors(form, errors) {
        // Clear previous errors
        form.querySelectorAll('.error-message').forEach(el => el.remove());
        form.querySelectorAll('.border-red-500').forEach(el => el.classList.remove('border-red-500'));

        // Show new errors
        Object.entries(errors).forEach(([field, message]) => {
            const input = form.querySelector(`[name="${field}"]`);
            if (input) {
                input.classList.add('border-red-500');
                const errorEl = document.createElement('p');
                errorEl.className = 'error-message text-red-500 text-sm mt-1';
                errorEl.textContent = message;
                input.parentNode.appendChild(errorEl);
            }
        });
    }

    // Notifications
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
            type === 'success' ? 'bg-green-500 text-white' : 
            type === 'error' ? 'bg-red-500 text-white' : 
            'bg-blue-500 text-white'
        }`;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);

        // Click to remove
        notification.addEventListener('click', () => {
            notification.remove();
        });
    }

    // FAQ
    toggleFAQ(index) {
        const content = document.getElementById(`faq-content-${index}`);
        const icon = document.getElementById(`faq-icon-${index}`);

        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            icon.style.transform = 'rotate(180deg)';
        } else {
            content.classList.add('hidden');
            icon.style.transform = 'rotate(0deg)';
        }
    }

    // Copy Email
    async copyEmailAddress() {
        try {
            await navigator.clipboard.writeText('info@driveuptr.com');
            this.showNotification(
                window.currentLanguage === 'tr' ? 'E-posta adresi kopyalandı!' : 'Email address copied!',
                'success'
            );
        } catch (error) {
            this.showNotification('Failed to copy email address', 'error');
        }
    }

    // Utility
    updateUIState() {
        // Update dark mode state
        if (window.isDarkMode) {
            document.documentElement.classList.add('dark');
        }
    }

    handleResize() {
        // Close mobile menu on desktop
        if (window.innerWidth >= 1024 && this.mobileMenuOpen) {
            this.closeMobileMenu();
        }
    }
}

// Global functions for onclick handlers
let app;

function navigateToHome(event) { app.navigateToHome(event); }
function navigateToProduct(event, product) { app.navigateToProduct(event, product); }
function toggleMobileMenu() { app.toggleMobileMenu(); }
function toggleLanguageDropdown() { app.toggleLanguageDropdown(); }
function changeLanguage(language) { app.changeLanguage(language); }
function toggleDarkMode() { app.toggleDarkMode(); }
function openPartnerForm() { app.openPartnerForm(); }
function closePartnerForm() { app.closePartnerForm(); }
function openInvestorForm() { app.openInvestorForm(); }
function closeInvestorForm() { app.closeInvestorForm(); }
function openContactBanner() { app.openContactBanner(); }
function closeContactBanner() { app.closeContactBanner(); }
function toggleFAQ(index) { app.toggleFAQ(index); }
function copyEmailAddress() { app.copyEmailAddress(); }

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    app = new DriveUpApp();
});