import React from 'react';
import { Language } from '../types';

interface ProductNavigationProps {
  products: any[];
  selectedProduct: any;
  onProductChange: (product: any) => void;
  language: Language;
}

export const ProductNavigation = React.memo(({ 
  products, 
  selectedProduct, 
  onProductChange
}: ProductNavigationProps) => {
  return (
    <div id="product-nav" className="sticky top-14 sm:top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm" style={{ scrollMarginTop: '64px' }}>
      <div className="container-custom">
        <div className="flex items-center gap-2 py-3 sm:py-4 overflow-x-auto scrollbar-hide">
          {products.map((product) => {
            const isActive = selectedProduct?.id === product.id;
            return (
              <button
                key={product.id}
                onClick={() => onProductChange(product)}
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  isActive 
                    ? 'bg-primary/10 border-primary text-primary shadow-sm' 
                    : 'bg-background border-border hover:bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg ${
                  isActive ? 'bg-primary/20' : 'bg-muted'
                }`}>
                  <product.icon className={`h-3 w-3 sm:h-4 sm:w-4 ${isActive ? product.color : 'text-muted-foreground'}`} />
                </div>
                <span className="font-semibold text-xs sm:text-sm">
                  <span className="text-foreground font-semibold">Drive</span><span style={{color: '#4a00ff'}} className="font-semibold">UP</span>{product.title.replace('DriveUp', '')}
                </span>
              </button>
            );
          })}
        </div>
        
        {/* Mobile scroll indicator */}
        <div className="sm:hidden flex justify-center pb-2">
          <div className="flex space-x-1">
            {products.map((_, index) => {
              const isActive = selectedProduct?.id === products[index].id;
              return (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    isActive ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});