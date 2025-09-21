import React, { useEffect } from 'react';
import { Button } from './ui/button';
import { X, Mail, Copy } from 'lucide-react';
import { Language } from '../types';

interface ContactBannerProps {
  language: Language;
  onClose: () => void;
  onCopyEmail: () => void;
}

export const ContactBanner: React.FC<ContactBannerProps> = ({
  language,
  onClose,
  onCopyEmail
}) => {
  // Auto close after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 8000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-primary text-white shadow-lg animate-fadeIn">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <div className="flex items-start sm:items-center space-x-3 flex-1">
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 sm:mt-0 flex-shrink-0" />
            <div className="flex flex-col space-y-1 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4 min-w-0">
              <span className="font-medium text-sm sm:text-base">
                {language === 'tr' ? 'İletişim:' : 'Contact:'}
              </span>
              <span className="text-xs sm:text-base opacity-90 break-all">
                info@driveuptr.com
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0 ml-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onCopyEmail}
              className="text-white hover:bg-white/20 text-xs sm:text-sm px-2 sm:px-3"
            >
              <Copy className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-1" />
              <span className="hidden sm:inline">
                {language === 'tr' ? 'Kopyala' : 'Copy'}
              </span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20 h-8 w-8 sm:h-10 sm:w-10"
            >
              <X className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};