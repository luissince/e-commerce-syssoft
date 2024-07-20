'use client'
import React, { useRef } from "react";
import { ArrowPathIcon, ChevronLeftIcon, ChevronRightIcon, CubeTransparentIcon, ShieldCheckIcon, ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Title, { BreadItem } from "@/src/components/common/title";

const Body = () => {
    return (
        <div className="aboutus-wrapper w-full">
            <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                <div className="w-full min-h-[665px] lg:flex lg:space-x-12 items-center pb-10 lg:pb-0">
                    <div className="md:w-[570px] w-full md:h-[560px] h-auto rounded overflow-hidden my-5 lg:my-0">
                        <Image src="/assets/about-banner.png" alt="about" className="w-full h" width={570} height={559} />
                    </div>
                    <div className="content flex-1">
                        <h1 className="text-[18px] font-medium text-qblack mb-2.5">What is e-commerce business?</h1>
                        <p className="text-[15px] text-qgraytwo leading-7 mb-2.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting.</p>
                        <ul className="text-[15px] text-qgraytwo leading-7 list-disc ml-5 mb-5">
                            <li>slim body with metal cover</li>
                            <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                            <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                            <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard</li>
                        </ul>
                        <a href="/contact">
                            <div className="w-[121px] h-10">
                                <span className="yellow-btn">Contact Us</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

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

interface BestServicesItemProps {
    title: string;
    subTitle: string;
    icon: React.ReactNode
}

const BestServicesItem = ({ title, subTitle, icon }: BestServicesItemProps) => {
    return (
        <div className="item">
            <div className="flex space-x-5 items-center">
                <div className="">
                    <span>
                        {icon}
                    </span>
                </div>
                <div className="">
                    <p className="text-black text-[15px] font-bold tracking-wide mb-1 uppercase">
                        {title}
                    </p>
                    <p className="text-sm text-qblack">
                        {subTitle}
                    </p>
                </div>
            </div>
        </div>
    );
}

const BestServices = () => {
    return (
        <div className="container max-w-screen-x mx-auto px-2 md:px-6 container-x my-[60px]">
            <div data-aos="fade-down" className="best-services w-full bg-qyellow flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10">
                <BestServicesItem title={"Free Shipping"} subTitle={"When ordering over $100"} icon={<ShoppingCartIcon width={36} />} />
                <BestServicesItem title={"Free Return"} subTitle={"Get Return within 30 days"} icon={<ArrowPathIcon width={36} />} />
                <BestServicesItem title={"Secure Payment"} subTitle={"100% Secure Online Payment"} icon={<ShieldCheckIcon width={36} />} />
                <BestServicesItem title={"Best Quality"} subTitle={"Original Product Guarenteed"} icon={<CubeTransparentIcon width={36} />} />
            </div>
        </div>
    );
}


const About = () => {
    return (
        <div className="w-full pt-0 pb-0">
            <Title
                breadCrumds={
                    <>
                        <BreadItem
                            href={"/"}
                            title={"home"}
                            isSeparator={true} />
                        <BreadItem
                            href={"/about"}
                            title={"About Us"}
                            isSeparator={false} />
                    </>
                }
                title={"About Us"} />
            <Body />
            <CustomerFeedback />
            <BestServices />
        </div>
    );
}

export default About;