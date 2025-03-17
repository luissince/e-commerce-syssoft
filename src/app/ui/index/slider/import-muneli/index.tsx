'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import images from "@/app/lib/config/images";
import Container from "@/app/ui/component/import-muneli/container";

export default function Banner() {
    const slidersDesktop = images["import-muneli"].sliders.desktop;
    const slidersMobile = images["import-muneli"].sliders.mobile;

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slidersDesktop.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slidersDesktop.length - 1;
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
        <div className="banner-wrapper w-full relative overflow-hidden">
            <div
                className="slider-container hidden w-full h-full lg:flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slidersDesktop.map((src, index) => (
                    <div key={index} className="slide w-full flex-shrink-0">
                        <Image
                            src={src}
                            width={1600}
                            height={525}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            <div
                className="slider-container bg-slate-400 w-full lg:hidden flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {
                    slidersMobile.map((src, index) => (
                        <div key={index} className="slide w-full flex-shrink-0">
                            <Image
                                src={src}
                                width={880}
                                height={828}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))
                }
            </div>


            <div className="slider-controls absolute inset-0 flex items-center">
                <Container>
                    <div className="flex items-center justify-between w-full h-full">
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
                </Container>
            </div>

            <div className="slider-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {
                    slidersDesktop.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`slider-indicator w-3 h-3 rounded-full ${currentIndex === index ? "bg-gray-800" : "bg-gray-300"}`}
                        ></button>
                    ))
                }
            </div>
        </div>
    );
}
