'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Banner() {
    const images = [
        "/assets/sliders/1.webp",
        "/assets/sliders/2.webp",
        "/assets/sliders/3.webp",
        "/assets/sliders/4.webp",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 5000); // Cambia cada 5 segundos

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="banner-wrapper w-full relative">
            <div
                className="slider-container w-full h-full flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <div key={index} className="slide w-full flex-shrink-0">
                        <Image
                            src={src}
                            width={1600}
                            height={525}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-fill"
                        />
                    </div>
                ))}
            </div>
            <div className="slider-controls absolute inset-0 flex items-center justify-between px-4">
                <button
                    onClick={goToPrevious}
                    className="slider-button px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md text-gray-800"
                >
                    ❮
                </button>
                <button
                    onClick={goToNext}
                    className="slider-button px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md text-gray-800"
                >
                    ❯
                </button>
            </div>
            <div className="slider-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`slider-indicator w-3 h-3 rounded-full ${currentIndex === index ? "bg-gray-800" : "bg-gray-300"}`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
