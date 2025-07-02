'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

interface CarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  autoPlayInterval?: number;
  dotsPosition?: {
    bottom?: number;
    left?: number;
    right?: number;
  };
  className?: string;
}

export function Carousel({
  images,
  autoPlayInterval = 10000,
  dotsPosition = { bottom: 16 },
  className,
}: Readonly<CarouselProps>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>(
    'forward',
  );

  const nextSlide = useCallback(() => {
    setCurrentIndex((previousIndex) => {
      if (previousIndex === images.length - 1) {
        setDirection('backward');
        return previousIndex - 1;
      } else if (previousIndex === 0 && direction === 'backward') {
        setDirection('forward');
        return previousIndex + 1;
      }
      return direction === 'forward'
        ? previousIndex + 1
        : previousIndex - 1;
    });
  }, [images.length, direction]);

  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [nextSlide, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 'forward' : 'backward');
    setCurrentIndex(index);
  };

  return (
    <div className={cn('relative w-full overflow-hidden', className)}>
      {/* ✅ Image Wrapper - Fully Responsive */}
      <div className="relative flex h-[250px] w-full items-center justify-center sm:h-[350px] md:h-[450px] lg:h-[500px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              'absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out',
              index === currentIndex
                ? 'opacity-100 translate-x-0 scale-100'
                : direction === 'forward'
                  ? 'opacity-0 translate-x-full scale-95'
                  : 'opacity-0 -translate-x-full scale-95',
            )}
          >
            <Image
              src={image.src || '/placeholder.svg'}
              alt={image.alt}
              fill
              className="size-full object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* ✅ Navigation Dots - Proper Positioning */}
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
              'h-2 rounded-full transition-all duration-300',
              index === currentIndex
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/75 w-2',
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
