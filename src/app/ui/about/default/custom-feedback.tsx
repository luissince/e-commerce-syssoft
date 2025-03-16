'use client'
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function CustomSlide({ descriptions, name, country }: Customer) {
    return (
        <div>
            <div className="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2">
                <div className="flex flex-col justify-between h-full">
                    <div className="rating flex space-x-1 items-center">
                        <div className="flex items-center">
                            <svg width="20" height="20" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg>
                            <svg width="20" height="20" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg>
                            <svg width="20" height="20" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg>
                            <svg width="20" height="20" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg>
                            <svg width="20" height="20" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg>
                        </div>
                        <span className="text-[13px] text-qblack">(5.0)</span>
                    </div>
                    <div className="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">
                        {descriptions}
                    </div>
                    <div className="flex items-center space-x-2.5 mt-3">
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                            <Image src="/assets/comment-user-1.png" alt="user" width={50} height={50} />
                        </div>
                        <div>
                            <p className="text-[18px] text-qblack font-medium">{name}</p>
                            <p className="text-qgraytwo text-[13px]">{country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface Customer {
    descriptions: string;
    name: string;
    country: string;
}

const list: Customer[] = [
    {
        descriptions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an into the find unknown printer took a galley of type and scrambled it to make a type inot the specimen book. It has survived not only five centuries but also the on leap into find it a electronic typesetting, remaining end to make it.",
        name: "Ridoy Rock",
        country: "London,UK"
    },
    {
        descriptions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an into the find unknown printer took a galley of type and scrambled it to make a type inot the specimen book. It has survived not only five centuries but also the on leap into find it a electronic typesetting, remaining end to make it.",
        name: "Ridoy Rock",
        country: "London,UK"
    },
    {
        descriptions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an into the find unknown printer took a galley of type and scrambled it to make a type inot the specimen book. It has survived not only five centuries but also the on leap into find it a electronic typesetting, remaining end to make it.",
        name: "Ridoy Rock",
        country: "London,UK"
    },
    {
        descriptions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an into the find unknown printer took a galley of type and scrambled it to make a type inot the specimen book. It has survived not only five centuries but also the on leap into find it a electronic typesetting, remaining end to make it.",
        name: "Ridoy Rock",
        country: "London,UK"
    },
    {
        descriptions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an into the find unknown printer took a galley of type and scrambled it to make a type inot the specimen book. It has survived not only five centuries but also the on leap into find it a electronic typesetting, remaining end to make it.",
        name: "Ridoy Rock",
        country: "London,UK"
    },
    {
        descriptions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an into the find unknown printer took a galley of type and scrambled it to make a type inot the specimen book. It has survived not only five centuries but also the on leap into find it a electronic typesetting, remaining end to make it.",
        name: "Ridoy Rock",
        country: "London,UK"
    },
]

var settings: Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0
            }
        },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        // }
    ]
};


const CustomerFeedback = () => {
    let sliderRef = useRef<Slider | null>(null);
    const next = () => {
        sliderRef.current?.slickNext();
    };
    const previous = () => {
        sliderRef.current?.slickPrev();
    };

    return (
        <div className="customer-feedback w-full bg-white py-[60px]">
            <div className="title flex justify-center mb-5">
                <h1 className="text-[30px] font-semibold text-qblack">Customers Feedback</h1>
            </div>
            <div className="feedback-slider-wrapper w-vw relative overflow-hidden">
                <div className="slider-container">
                    <Slider
                        ref={sliderRef}
                        {...settings}>
                        {
                            list.map((item: Customer, key: any) => (
                                <CustomSlide key={key} {...item} />
                            ))
                        }

                    </Slider>
                    <div className="slider-btns flex justify-center mt-[40px]">
                        <div className="flex space-x-5 item-center">
                            <button className="w-[48px] h-[48px] rounded-full overflow-hidden flex justify-center items-center border border-qyellow text-qyellow focus:bg-qyellow focus:text-white" onClick={previous}>
                                <ChevronLeftIcon width={24} height={24} />
                            </button>
                            <button className="w-[48px] h-[48px] rounded-full overflow-hidden flex justify-center items-center border border-qyellow text-qyellow focus:bg-qyellow focus:text-white" onClick={next}>
                                <ChevronRightIcon width={24} height={24} />
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default CustomerFeedback