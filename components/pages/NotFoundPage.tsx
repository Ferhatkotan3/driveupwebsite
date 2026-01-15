import React from 'react';
import { Button } from '../ui/button';
import { Home, Search } from 'lucide-react';

interface NotFoundPageProps {
  language?: 'tr' | 'en';
  onNavigateHome?: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ 
  language = 'tr', 
  onNavigateHome 
}) => {
  const handleGoHome = () => {
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="text-6xl font-bold text-[#5A00FF]">404</div>
        
        <h1 className="text-3xl font-bold">
          {language === 'en' ? 'Page Not Found' : 'Sayfa Bulunamadı'}
        </h1>
        
        <p className="text-muted-foreground text-lg">
          {language === 'en'
            ? 'The page you are looking for does not exist or has been moved.'
            : 'Aradığınız sayfa bulunamadı veya taşınmış olabilir.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={handleGoHome}
            className="btn-primary"
          >
            <Home className="mr-2 h-4 w-4" />
            {language === 'en' ? 'Go to Homepage' : 'Ana Sayfaya Dön'}
          </Button>
          
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="btn-secondary"
          >
            <Search className="mr-2 h-4 w-4" />
            {language === 'en' ? 'Go Back' : 'Geri Dön'}
          </Button>
        </div>
      </div>
    </div>
  );
};
