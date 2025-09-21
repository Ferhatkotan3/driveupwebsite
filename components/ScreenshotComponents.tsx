import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScreenshotData } from '../types';

// Local placeholder image (SVG data URI)
const exampleImage =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Rya2Utd2lkdGg9IjMuNyI+PHJlY3QgeD0iMTYiIHk9IjE2IiB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHJ4PSI2Ii8+PHBhdGggZD0ibTE2IDU4IDE2LTE4IDMyIDMyIi8+PGNpcmNsZSBjeD0iNTMiIGN5PSIzNSIgcj0iNyIvPjwvc3ZnPgoK';

// ===================== Screenshot Display =====================
export const ScreenshotDisplay = React.memo(({
  currentSlide,
  screenshots,
  onPrevious,
  onNext
}: {
  currentSlide: number;
  screenshots: ScreenshotData[];
  onPrevious: (e?: any) => void;
  onNext: (e?: any) => void;
}) => {
  const shot = screenshots[currentSlide];

  return (
    <div className="group relative flex-1 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-border mx-4 sm:mx-0">
      {/* Sol ok (desktop) */}
      <button
        onClick={(e) => { e.stopPropagation?.(); onPrevious?.(e); }}
        aria-label="Previous"
        className="
          hidden sm:flex absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 rounded-full bg-white text-[rgb(74,0,255)]
          items-center justify-center shadow-md hover:shadow-lg hover:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-[rgb(74,0,255)]/30
        "
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Sağ ok (desktop) */}
      <button
        onClick={(e) => { e.stopPropagation?.(); onNext?.(e); }}
        aria-label="Next"
        className="
          hidden sm:flex absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 rounded-full bg-white text-[rgb(74,0,255)]
          items-center justify-center shadow-md hover:shadow-lg hover:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-[rgb(74,0,255)]/30
        "
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Görsel */}
      <div className="h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] flex items-center justify-center">
        <ImageWithFallback
          key={(shot as any)?.id || currentSlide}
          src={(shot as any)?.image || (shot as any)?.src || exampleImage}
          alt={`Screenshot ${currentSlide + 1}`}
          className="max-h-full max-w-full object-contain rounded-lg sm:rounded-xl shadow-lg transition-opacity duration-200"
        />
      </div>

      {/* Mobil oklar */}
      <div className="sm:hidden absolute inset-x-0 top-1/2 -translate-y-1/2 px-3 flex justify-between">
        <button
          onClick={(e) => { e.stopPropagation?.(); onPrevious?.(e); }}
          aria-label="Previous"
          className="w-9 h-9 rounded-full bg-white text-[rgb(74,0,255)]
                     flex items-center justify-center shadow-md hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation?.(); onNext?.(e); }}
          aria-label="Next"
          className="w-9 h-9 rounded-full bg-white text-[rgb(74,0,255)]
                     flex items-center justify-center shadow-md hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
});

// ===================== Screenshot Navigation (Dots) =====================
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
      {/* Sayaç (desktop) */}
      <div className="hidden sm:block text-center text-sm text-muted-foreground">
        {currentSlide + 1} / {totalSlides}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 max-w-full overflow-x-auto pb-2">
        {Array.from({ length: totalSlides }).map((_, index) => {
          const isActive = currentSlide === index;
          return (
            <button
              key={index}
              onClick={() => onSlideChange(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full flex-shrink-0 transition-colors
                ${isActive ? 'bg-[rgb(74,0,255)]' : 'bg-gray-300 hover:bg-gray-400'}`}
            />
          );
        })}
      </div>
    </div>
  );
});
