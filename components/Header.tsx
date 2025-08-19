import React from 'react';
import { Button } from './ui/button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Language, Page } from '../types';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  language: Language;
  changeLanguage: (lang: Language) => void;
  scrollToSection: (sectionId: string) => void;
  t: any;
  currentPage: Page;
  navigateToHome: () => void;
  onContactClick: () => void;
}

export const Header = React.memo(({ 
  darkMode, 
  setDarkMode, 
  mobileMenuOpen, 
  setMobileMenuOpen,
  language, 
  changeLanguage, 
  scrollToSection,
  t,
  currentPage,
  navigateToHome,
  onContactClick
}: HeaderProps) => {

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border/50 transition-all duration-300">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={navigateToHome}
              className="text-lg sm:text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              <span className="text-foreground font-bold">Drive</span><span style={{color: '#4a00ff'}} className="font-bold">UP</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {[
              { name: t.nav.products, id: 'products' },
              { name: t.nav.technology, id: 'technology' },
              { name: t.nav.roadmap, id: 'roadmap' },
              { name: t.nav.investment, id: 'investment' },
              { name: t.nav.partners, id: 'partners' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (currentPage !== 'home') {
                    navigateToHome();
                    setTimeout(() => scrollToSection(item.id), 100);
                  } else {
                    scrollToSection(item.id);
                  }
                }}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-semibold"
              >
                {item.name}
              </button>
            ))}
            
            {/* Contact Button */}
            <button
              onClick={onContactClick}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-semibold"
            >
              {language === 'tr' ? 'İletişim' : 'Contact'}
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Switcher */}
            <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
              <button
                onClick={() => changeLanguage('tr')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  language === 'tr' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                🇹🇷 TR
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  language === 'en' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                🇺🇸 EN
              </button>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="hover:bg-muted h-9 w-9"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Actions - Only menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="hover:bg-muted h-9 w-9"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-9 w-9"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-background border-t border-border/50">
              {[
                { name: t.nav.products, id: 'products' },
                { name: t.nav.technology, id: 'technology' },
                { name: t.nav.roadmap, id: 'roadmap' },
                { name: t.nav.investment, id: 'investment' },
                { name: t.nav.partners, id: 'partners' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (currentPage !== 'home') {
                      navigateToHome();
                      setTimeout(() => scrollToSection(item.id), 100);
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-all"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Contact Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="block w-full text-left px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-all"
              >
                {language === 'tr' ? 'İletişim' : 'Contact'}
              </button>
              
              {/* Mobile Language Switcher */}
              <div className="px-3 py-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {language === 'tr' ? 'Dil:' : 'Language:'}
                  </span>
                  <div className="flex space-x-1">
                    <button
                      onClick={() => {
                        changeLanguage('tr');
                        setMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                        language === 'tr' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      🇹🇷 TR
                    </button>
                    <button
                      onClick={() => {
                        changeLanguage('en');
                        setMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                        language === 'en' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      🇺🇸 EN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
});