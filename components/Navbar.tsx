import React, { useState } from 'react';
import { Button } from './ui/button';
import { 
  Menu, 
  X, 
  ChevronDown,
  Phone,
  Mail
} from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  onContact: () => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onNavigate, 
  onContact, 
  currentPage 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const navigation = [
    { name: 'Ana Sayfa', page: 'home' },
    { name: 'Ürünler', page: 'products', hasDropdown: true },
    { name: 'Ne Yapıyoruz', page: 'what-we-do' },
    { name: 'İletişim', page: 'contact' }
  ];

  const products = [
    { name: 'DriveUpFixer', description: 'Bakım & Onarım Yönetimi', page: 'products' },
    { name: 'DriveUpGo', description: 'Kiralama Platformu', page: 'products' },
    { name: 'DriveUpPro', description: 'Filo Yönetimi', page: 'products' },
    { name: 'DriveUpManager', description: 'Operasyon Yönetimi', page: 'products' },
    { name: 'DriveUpDesk', description: 'Destek Merkezi', page: 'products' }
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            <span className="text-xl font-bold">
              <span className="text-foreground">Drive</span>
              <span className="text-primary">UP</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.page)}
                    className={`hover:text-primary transition-colors ${
                      currentPage === item.page ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {item.name}
                  </button>
                )}

                {/* Products Dropdown */}
                {item.hasDropdown && isProductsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-lg p-4"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {products.map((product) => (
                        <button
                          key={product.name}
                          onClick={() => handleNavigation(product.page)}
                          className="text-left p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="font-medium text-sm">{product.name}</div>
                          <div className="text-xs text-muted-foreground">{product.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={onContact}
              className="btn-secondary"
            >
              <Phone className="mr-2 h-4 w-4" />
              Ara
            </Button>
            <Button 
              size="sm"
              onClick={onContact}
              className="btn-primary"
            >
              <Mail className="mr-2 h-4 w-4" />
              İletişim
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                        className="flex items-center justify-between w-full py-2 text-left hover:text-primary transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${
                          isProductsOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {isProductsOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {products.map((product) => (
                            <button
                              key={product.name}
                              onClick={() => handleNavigation(product.page)}
                              className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {product.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.page)}
                      className={`block w-full text-left py-2 hover:text-primary transition-colors ${
                        currentPage === item.page ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-border space-y-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={onContact}
                  className="w-full btn-secondary"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Ara
                </Button>
                <Button 
                  size="sm"
                  onClick={onContact}
                  className="w-full btn-primary"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  İletişim
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
