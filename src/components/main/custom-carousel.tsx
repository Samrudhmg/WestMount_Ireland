'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

interface CarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  autoPlayInterval?: number; // in milliseconds
  dotsPosition?: {
    bottom?: number; // in pixels
    left?: number;
    right?: number;
  };
  className?: string;
}

export function Carousel({ images, autoPlayInterval = 5000, dotsPosition = { bottom: 16 }, className }: Readonly<CarouselProps>) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex(previousIndex => (previousIndex === images.length - 1 ? 0 : previousIndex + 1));
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [nextSlide, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={cn('relative w-full rounded-2xl overflow-hidden', className)}>
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            'absolute top-0 left-0 w-full h-full transition-opacity duration-500',
            index === currentIndex ? 'opacity-100' : 'opacity-0',
          )}
        >
          <Image
            src={image.src || '/placeholder.svg'}
            alt={image.alt}
            fill
            title={image.alt}
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Navigation Dots */}
      <div
        className="absolute left-1/2 flex -translate-x-1/2 gap-2"
        style={{
          bottom: dotsPosition.bottom,
          left: dotsPosition.left,
          right: dotsPosition.right,
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75',
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
