"use client"

import React, { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface CarouselProps {
  images: {
    src: string
    alt: string
    caption?: string
    title?: string
  }[]
  autoPlayInterval?: number
  className?: string
  captionPosition?: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
  captionClassName?: string
}

export function CustomCarousel({
  images,
  autoPlayInterval = 5000,
  className,
  captionPosition = { top: "15%" },
  captionClassName = "whitespace-pre-line text-center text-sm font-bold text-white md:text-lg lg:text-3xl xl:text-5xl",
}: Readonly<CarouselProps>) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }, [images.length])

  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval)
    return () => clearInterval(interval)
  }, [nextSlide, autoPlayInterval])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={cn("relative min-h-96 w-full", className)}> 
    <div className="h-full w-full overflow-hidden md:py-40 2xl:py-60"> 
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 h-full w-full transition-opacity duration-500", 
            index === currentIndex ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="relative h-full w-full"> 
            <Image
              src={image.src}
              alt={image.alt} title={image.title} width={1920} height={1080}
              className="h-full w-full rounded-tl-[100px] object-cover object-bottom"
            />
          </div>
          {image.caption && (
              <div
                className="absolute w-full"
                style={{
                  top: captionPosition.top,
                  bottom: captionPosition.bottom,
                  left: captionPosition.left,
                  right: captionPosition.right,
                }}
              >
                <h5
                className={cn(captionClassName, "whitespace-pre-wrap text-center")}
                 >{image.caption}</h5>
              </div>
            )}
        </div>
      ))}
    </div>
    <div className="absolute inset-x-0 top-4 z-10">
      <div className="flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/75 w-2",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
  )
}

