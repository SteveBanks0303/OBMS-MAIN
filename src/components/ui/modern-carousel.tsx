
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Button } from './button';

interface CarouselItem {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ModernCarouselProps {
  items: CarouselItem[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
  showThumbnails?: boolean;
  itemsPerView?: number;
}

export const ModernCarousel: React.FC<ModernCarouselProps> = ({ 
  items, 
  className = "", 
  autoPlay = true,
  interval = 5000,
  showThumbnails = true,
  itemsPerView = 1
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= items.length - itemsPerView ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, items.length, interval, itemsPerView]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - itemsPerView : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= items.length - itemsPerView ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-2xl group">
        <div 
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className={`flex-shrink-0 relative ${itemsPerView > 1 ? `w-1/${itemsPerView}` : 'w-full'} flex flex-col h-full`} style={{ width: `${100 / itemsPerView}%` }}>
              <div className="aspect-square overflow-hidden bg-gray-50 rounded-2xl mx-2 flex-shrink-0">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Always visible content below image */}
              {(item.title || item.description) && (
                <div className="p-3 md:p-4 text-center flex-grow flex flex-col justify-start overflow-hidden">
                  {item.title && (
                    <h3 className="font-bold text-sm md:text-base lg:text-lg text-school-navy mb-2 line-clamp-2 break-words">{item.title}</h3>
                  )}
                  {item.description && (
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-4 break-words overflow-hidden">{item.description}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {items.length > itemsPerView && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/4 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-xl border-0 text-school-navy hover:text-school-blue opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/4 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-xl border-0 text-school-navy hover:text-school-blue opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Play/Pause Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-xl border-0 text-school-navy hover:text-school-blue opacity-0 group-hover:opacity-100 transition-all duration-300"
              onClick={togglePlayPause}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
          </>
        )}
      </div>

      {/* Progress Dots */}
      {items.length > itemsPerView && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(items.length - itemsPerView + 1) }).map((_, index) => (
            <button
              key={index}
              className={`relative h-1 rounded-full transition-all duration-500 overflow-hidden ${
                index === currentIndex ? 'bg-school-yellow w-8' : 'bg-gray-300 hover:bg-gray-400 w-4'
              }`}
              onClick={() => goToSlide(index)}
            >
              {index === currentIndex && isPlaying && (
                <div 
                  className="absolute top-0 left-0 h-full bg-school-gold transition-all duration-1000 ease-linear"
                  style={{ 
                    width: '100%',
                    animation: `progress ${interval}ms linear infinite`
                  }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Thumbnails */}
      {showThumbnails && items.length > 1 && itemsPerView === 1 && (
        <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
          {items.map((item, index) => (
            <button
              key={index}
              className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex 
                  ? 'border-school-yellow shadow-lg scale-110' 
                  : 'border-transparent hover:border-school-navy/30 hover:scale-105'
              }`}
              onClick={() => goToSlide(index)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Custom CSS for progress animation */}
      <style>
        {`
          @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}
      </style>
    </div>
  );
};
