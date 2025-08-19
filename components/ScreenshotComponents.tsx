import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScreenshotData } from '../types';
// Local placeholder image (SVG data URI) used instead of removed Figma asset import
const exampleImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

// Screenshot Display Component
export const ScreenshotDisplay = React.memo(({ 
  currentSlide, 
  screenshots, 
  onPrevious, 
  onNext 
}: {
  currentSlide: number;
  screenshots: ScreenshotData[];
  onPrevious: () => void;
  onNext: () => void;
}) => {
  const currentScreenshot = screenshots[currentSlide];
  
  return (
    <div className="relative flex-1 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-border mx-4 sm:mx-0">
      {/* Navigation Buttons - Hidden on mobile */}
      <button
        onClick={onPrevious}
        className="hidden sm:block absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-all duration-200 border border-border shadow-lg"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
      
      <button
        onClick={onNext}
        className="hidden sm:block absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-all duration-200 border border-border shadow-lg"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      {/* Screenshot Display */}
      <div className="h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] flex items-center justify-center">
        <ImageWithFallback
          key={currentScreenshot?.id || currentSlide}
          src={currentScreenshot?.image || exampleImage}
          alt={`Screenshot ${currentSlide + 1}`}
          className="max-h-full max-w-full object-contain rounded-lg sm:rounded-xl shadow-lg transition-opacity duration-200"
        />
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="sm:hidden flex justify-between items-center mt-4">
        <button
          onClick={onPrevious}
          className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg shadow-sm hover:bg-muted transition-all"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Önceki</span>
        </button>
        
        <div className="text-sm text-muted-foreground">
          {currentSlide + 1} / {screenshots.length}
        </div>
        
        <button
          onClick={onNext}
          className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg shadow-sm hover:bg-muted transition-all"
        >
          <span className="text-sm font-medium">Sonraki</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
});

// Screenshot Navigation Component  
export const ScreenshotNavigation = React.memo(({ 
  currentSlide, 
  totalSlides, 
  onSlideChange 
}: {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
}) => {
  return (
    <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 px-4 sm:px-0">
      {/* Screenshot Counter - Hidden on mobile as it's shown in the display component */}
      <div className="hidden sm:block text-center text-sm text-muted-foreground">
        {currentSlide + 1} / {totalSlides}
      </div>
      
      {/* Dots Navigation */}
      <div className="flex justify-center space-x-1 sm:space-x-2 max-w-full overflow-x-auto pb-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
              currentSlide === index ? 'bg-primary w-4 sm:w-6' : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
});