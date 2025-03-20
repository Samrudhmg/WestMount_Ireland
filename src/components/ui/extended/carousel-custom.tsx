"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
    "/images/img-90.png",
    "/images/img-91.png",
    "/images/img-92.png",
    "/images/img-94.png",
    "/images/img-95.png",
    "/images/img-96.png",
    "/images/img-92.png",
    "/images/img-94.png",
    "/images/img-95.png",
    "/images/img-96.png",
];

export default function CustomCarousel() {
    const [currentSlide, setCurrentSlide] = useState(2);
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    // Dynamic Scaling based on screen width
    const getScaleAndDimensions = (position: number) => {
        if (position === 4)
            return "scale-100 w-[200px] h-[400px] md:w-[230px] md:h-[380px] lg:w-[260px] lg:h-[450px] ";
        if (position === 3 || position === 5)
            return "scale-95 w-[140px] h-[380px] md:w-[150px] md:h-[350px] lg:w-[140px] lg:h-[420px]  ";
        if (position === 2 || position === 6)
            return "scale-90 w-[115px] h-[360px] md:w-[120px] md:h-[320px] lg:w-[110px] lg:h-[400px] ";
        if (position === 1 || position === 7)
            return "scale-85 w-[100px] h-[340px] md:w-[100px] md:h-[300px] lg:w-[90px] lg:h-[370px]  ";
        return "scale-80 w-[50px] h-[300px] md:w-[40px] md:h-[280px] ";
    };

    return (
        <div className="relative   h-[400px] md:h-[400px] sm:h-[350px] lg:h-[500px] w-full overflow-hidden">
            <div className="absolute w-full h-full flex items-center justify-center">
                {images.map((_, index) => {
                    const adjustedIndex = (index - currentSlide + 9) % 9;

                    // **New: Dynamic offset for better animation**
                    const baseOffset =
                        screenWidth >= 1024 ? 90 : screenWidth >= 768 ? 60 : 40; // Adjusted for mobile
                    const offset = (adjustedIndex - 4) * baseOffset;

                    return (
                        <div
                            key={index}
                            className={`absolute rounded-xl overflow-hidden transition-all duration-700 ease-in-out ${getScaleAndDimensions(adjustedIndex)}`}
                            style={{
                                transform: `translateX(${offset}%)`,
                                zIndex: 10 - Math.abs(adjustedIndex - 4),
                            }}
                        >
                            {/* Overlay Effect */}
                            <div
                                className={`absolute inset-0 bg-black ${
                                    adjustedIndex === 4
                                        ? "opacity-0"
                                        : "opacity-50"
                                } transition-opacity duration-500 z-10`}
                            />

                            {/* Image */}
                            <Image
                                src={images[index]}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={adjustedIndex === 4}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
