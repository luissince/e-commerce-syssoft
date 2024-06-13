'use client'
import Discount from "@/src/components/discount";
import ProductCard from "@/src/components/product-card";
import { ChevronDownIcon, FlagIcon } from "@heroicons/react/20/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SingleProduct = () => {

    const [tab, setTab] = useState<number>(0);
    const [openSize, setOpenSize] = useState<boolean>(false);
    const dropdownSizeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownSizeRef.current && !dropdownSizeRef.current.contains(event.target as Node)) {
                setOpenSize(false);
            }
        };

        const rootElement = document.querySelector("#root") as HTMLDivElement;

        if (openSize && rootElement) {
            rootElement.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            if (openSize && rootElement) {
                rootElement.removeEventListener('mousedown', handleClickOutside);
            }
        };
    }, [openSize])

    return (
        <>
            <div className="w-full  pt-0 pb-0">
                <div className="single-product-wrapper w-full ">
                    <div className="product-view-main-wrapper bg-white pt-[30px] w-full">

                        <div className="breadcrumb-wrapper w-full ">
                            <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                                <div className="font-normal text-[13px] text-qblack mb-[23px]"><span>
                                    <a href="/"><span className="mx-1 capitalize">home</span></a>
                                    <span>/</span></span>
                                    <a href="/"><span className="mx-1 capitalize">Single Product</span></a>
                                </div>
                            </div>
                        </div>

                        <div className="w-full bg-white pb-[60px]">
                            <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                                <div className="product-view w-full lg:flex justify-between ">
                                    <div data-aos="fade-right" className="lg:w-1/2 xl:mr-[70px] lg:mr-[50px]">
                                        <div className="w-full">
                                            <div className="w-full h-[600px] border border-qgray-border flex justify-center items-center overflow-hidden relative mb-3">
                                                <Image src="/assets/product-details-1.png" alt="" className="object-contain" width={385} height={385} priority={true} />
                                                <div className="w-[80px] h-[80px] rounded-full bg-qyellow text-qblack flex justify-center items-center text-xl font-medium absolute left-[30px] top-[30px]">
                                                    <span>-50%</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 flex-wrap">
                                                <div className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer">
                                                    <Image src="/assets/product-details-1.png" alt="" width={385} height={385} className="w-full h-full object-contain" priority={true} />
                                                </div>
                                                <div className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer">
                                                    <Image src="/assets/product-details-2.png" alt="" width={385} height={385} className="w-full h-full object-contain opacity-50" priority={true} />
                                                </div>
                                                <div className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer">
                                                    <Image src="/assets/product-details-3.png" alt="" width={385} height={385} className="w-full h-full object-contain opacity-50" priority={true} />
                                                </div>
                                                <div className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer">
                                                    <Image src="/assets/product-details-4.png" alt="" width={385} height={385} className="w-full h-full object-contain opacity-50" priority={true} />
                                                </div>
                                                <div className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer">
                                                    <Image src="/assets/product-details-5.png" alt="" width={385} height={385} className="w-full h-full object-contain opacity-50" priority={true} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="product-details w-full mt-10 lg:mt-0">
                                            <span data-aos="fade-up" className="text-qgray text-xs font-normal uppercase tracking-wider mb-2 inline-block">Mobile Phones</span>
                                            <p data-aos="fade-up" className="text-xl font-medium text-qblack mb-4">Samsung Galaxy Z Fold3 5G 3 colors in 512GB</p>
                                            <div data-aos="fade-up" className="flex space-x-[10px] items-center mb-6">
                                                <div className="flex">
                                                    <StarIcon width={18} color="#FFA800" />
                                                    <StarIcon width={18} color="#FFA800" />
                                                    <StarIcon width={18} color="#FFA800" />
                                                    <StarIcon width={18} color="#FFA800" />
                                                    <StarIcon width={18} color="#FFA800" />
                                                    <StarIcon width={18} color="#FFA800" />
                                                </div>
                                                <span className="text-[13px] font-normal text-qblack">6 Reviews</span>
                                            </div>
                                            <div data-aos="fade-up" className="flex space-x-2 items-center mb-7">
                                                <span className="text-sm font-500 text-qgray line-through mt-2">$9.99</span>
                                                <span className="text-2xl font-500 text-qred">$6.99</span>
                                            </div>
                                            <p data-aos="fade-up" className="text-qgray text-sm text-normal mb-[30px] leading-7">It is a long established fact that a reader will be distracted by the readable there content of a page when looking at its layout.</p>
                                            <div data-aos="fade-up" className="colors mb-[30px]">
                                                <span className="text-sm font-normal uppercase text-qgray mb-[14px] inline-block">COLOR</span>
                                                <div className="flex space-x-4 items-center">
                                                    <div>
                                                        <button type="button" className="w-[20px] h-[20px]  rounded-full focus:ring-2  ring-offset-2 flex justify-center items-center">
                                                            <span className="w-[20px] h-[20px] block rounded-full border bg-[#ffbc63]"></span>
                                                        </button>
                                                    </div>

                                                    <div>
                                                        <button type="button" className="w-[20px] h-[20px]  rounded-full focus:ring-2  ring-offset-2 flex justify-center items-center">
                                                            <span className="w-[20px] h-[20px] block rounded-full border bg-[#649eff]"></span>
                                                        </button>
                                                    </div>

                                                    <div>
                                                        <button type="button" className="w-[20px] h-[20px]  rounded-full focus:ring-2  ring-offset-2 flex justify-center items-center">
                                                            <span className="w-[20px] h-[20px] block rounded-full border bg-[#ffffff]"></span>
                                                        </button>
                                                    </div>

                                                    <div>
                                                        <button type="button" className="w-[20px] h-[20px]  rounded-full focus:ring-2  ring-offset-2 flex justify-center items-center">
                                                            <span className="w-[20px] h-[20px] block rounded-full border bg-[#ff7173]"></span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-aos="fade-up" className="product-size mb-[30px]" ref={dropdownSizeRef}>
                                                <span className="text-sm font-normal uppercase text-qgray mb-[14px] inline-block">SIZE</span>
                                                <div className="w-full">
                                                    <div className="border border-qgray-border h-[50px] flex justify-between items-center cursor-pointer">
                                                        <div className="my-select-box w-full">
                                                            <button type="button" className="my-select-box-btn px-6"
                                                                onClick={() => setOpenSize(!openSize)}>
                                                                <div>
                                                                    <span className="text-[13px] text-qblack">Small</span>
                                                                </div>
                                                                <div className="flex space-x-10 items-center">
                                                                    <span className="text-[13px] text-qblack">3”W x 3”D x 7”H</span>
                                                                    <span>
                                                                        <ChevronDownIcon width={22} color="#222222" />
                                                                    </span>
                                                                </div>
                                                            </button>
                                                            <div className={`my-select-box-section  ${openSize ? 'open' : ''}`} >
                                                                <ul className="list shadow">
                                                                    <li className="selected">Small</li>
                                                                    <li className="">Medium</li>
                                                                    <li className="">Large</li>
                                                                    <li className="">Extra Large</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-aos="fade-up" className="quantity-card-wrapper w-full flex items-center h-[50px] space-x-[10px] mb-[30px]">
                                                <div className="w-[120px] h-full px-[26px] flex items-center border border-qgray-border">
                                                    <div className="flex justify-between items-center w-full">
                                                        <button type="button" className="text-base text-qgray">-</button>
                                                        <span className="text-qblack">1</span>
                                                        <button type="button" className="text-base text-qgray">+</button>
                                                    </div>
                                                </div>
                                                <div className="w-[60px] h-full flex justify-center items-center border border-qgray-border">
                                                    <button type="button">
                                                        <span>
                                                            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17 1C14.9 1 13.1 2.1 12 3.7C10.9 2.1 9.1 1 7 1C3.7 1 1 3.7 1 7C1 13 12 22 12 22C12 22 23 13 23 7C23 3.7 20.3 1 17 1Z" stroke="#D5D5D5" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
                                                            </svg> */}
                                                            <HeartIcon width={24} color="#D5D5D5" />
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="flex-1 h-full">
                                                    <button type="button" className="black-btn text-sm font-semibold w-full h-full">Add To Cart</button>
                                                </div>
                                            </div>
                                            <div data-aos="fade-up" className="mb-[20px]">
                                                <p className="text-[13px] text-qgray leading-7"><span className="text-qblack">Category :</span> Kitchen</p>
                                                <p className="text-[13px] text-qgray leading-7"><span className="text-qblack">Tags :</span> Beer, Foamer</p>
                                                <p className="text-[13px] text-qgray leading-7"><span className="text-qblack">SKU:</span> KE-91039</p>
                                            </div>
                                            <div data-aos="fade-up" className="flex space-x-2 items-center mb-[20px]">
                                                <span>
                                                    <FlagIcon width={15} color="#EB5757" />
                                                    {/* <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 0C0.247634 0 0.475436 0 0.729172 0C0.738324 0.160174 0.747477 0.316279 0.757647 0.493233C1.05816 0.392044 1.33885 0.282211 1.62818 0.203395C3.11296 -0.201361 4.51385 0.0366111 5.84202 0.779512C6.47661 1.13494 7.14171 1.39071 7.86987 1.47207C8.88125 1.58496 9.82093 1.35817 10.7098 0.88426C10.9335 0.765274 11.1522 0.636627 11.411 0.491199C11.4161 0.606117 11.4237 0.693577 11.4237 0.780529C11.4242 3.18822 11.4222 5.5954 11.4288 8.00309C11.4293 8.1892 11.3718 8.29089 11.2096 8.38039C9.31956 9.42279 7.4285 9.43499 5.54557 8.37734C4.06231 7.54443 2.55363 7.43307 0.992568 8.13835C0.804428 8.22327 0.737816 8.33005 0.739341 8.53904C0.749003 9.9206 0.744426 11.3027 0.744426 12.6842C0.744426 12.7849 0.744426 12.8851 0.744426 13C0.48764 13 0.254244 13 0 13C0 8.67582 0 4.34961 0 0Z" fill="#EB5757"></path>
                                                    </svg> */}
                                                </span>
                                                <button type="button" className="text-qred font-semibold text-[13px]">Report This Item</button>
                                            </div>
                                            <div data-aos="fade-up" className="social-share flex items-center w-full">
                                                <span className="text-qblack text-[13px] mr-[17px] inline-block">Share This</span>
                                                <div className="flex space-x-5 items-center">
                                                    <span>
                                                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 16V9H0V6H3V4C3 1.3 4.7 0 7.1 0C8.3 0 9.2 0.1 9.5 0.1V2.9H7.8C6.5 2.9 6.2 3.5 6.2 4.4V6H10L9 9H6.3V16H3Z" fill="#3E75B2"></path></svg>
                                                    </span>
                                                    <span>
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8C0 11.4 2.1 14.3 5.1 15.4C5 14.8 5 13.8 5.1 13.1C5.2 12.5 6 9.1 6 9.1C6 9.1 5.8 8.7 5.8 8C5.8 6.9 6.5 6 7.3 6C8 6 8.3 6.5 8.3 7.1C8.3 7.8 7.9 8.8 7.6 9.8C7.4 10.6 8 11.2 8.8 11.2C10.2 11.2 11.3 9.7 11.3 7.5C11.3 5.6 9.9 4.2 8 4.2C5.7 4.2 4.4 5.9 4.4 7.7C4.4 8.4 4.7 9.1 5 9.5C5 9.7 5 9.8 5 9.9C4.9 10.2 4.8 10.7 4.8 10.8C4.8 10.9 4.7 11 4.5 10.9C3.5 10.4 2.9 9 2.9 7.8C2.9 5.3 4.7 3 8.2 3C11 3 13.1 5 13.1 7.6C13.1 10.4 11.4 12.6 8.9 12.6C8.1 12.6 7.3 12.2 7.1 11.7C7.1 11.7 6.7 13.2 6.6 13.6C6.4 14.3 5.9 15.2 5.6 15.7C6.4 15.9 7.2 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0Z" fill="#E12828"></path></svg>
                                                    </span>
                                                    <span>
                                                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0722 1.60052C16.432 1.88505 15.7562 2.06289 15.0448 2.16959C15.7562 1.74278 16.3253 1.06701 16.5742 0.248969C15.8985 0.640206 15.1515 0.924742 14.3335 1.10258C13.6933 0.426804 12.7686 0 11.7727 0C9.85206 0 8.28711 1.56495 8.28711 3.48557C8.28711 3.7701 8.32268 4.01907 8.39382 4.26804C5.51289 4.12577 2.9165 2.73866 1.17371 0.604639C0.889175 1.13814 0.71134 1.70722 0.71134 2.34742C0.71134 3.5567 1.31598 4.62371 2.27629 5.26392C1.70722 5.22835 1.17371 5.08608 0.675773 4.83711V4.87268C0.675773 6.5799 1.88505 8.00258 3.48557 8.32268C3.20103 8.39382 2.88093 8.42938 2.56082 8.42938C2.34742 8.42938 2.09845 8.39382 1.88505 8.35825C2.34742 9.74536 3.62784 10.7768 5.15722 10.7768C3.94794 11.7015 2.45412 12.2706 0.818041 12.2706C0.533505 12.2706 0.248969 12.2706 0 12.2351C1.56495 13.2309 3.37887 13.8 5.37062 13.8C11.8082 13.8 15.3294 8.46495 15.3294 3.84124C15.3294 3.69897 15.3294 3.52113 15.3294 3.37887C16.0052 2.9165 16.6098 2.31186 17.0722 1.60052Z" fill="#3FD1FF"></path></svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-des-wrapper w-full relative pb-[60px]">
                        <div className="tab-buttons w-full mb-10 mt-5 sm:mt-0">
                            <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                                <ul className="flex space-x-12 ">
                                    <li onClick={() => setTab(0)}>
                                        <span className={`py-[15px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer ${tab === 0 ? 'border-qyellow text-qblack' : 'border-transparent text-qgray'}  `}>Description</span>
                                    </li>
                                    <li onClick={() => setTab(1)}>
                                        <span className={`py-[15px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer ${tab === 1 ? 'border-qyellow text-qblack' : 'border-transparent text-qgray'} `}>Detail</span>
                                    </li>
                                    <li onClick={() => setTab(2)}>
                                        <span className={`py-[15px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer ${tab === 2 ? 'border-qyellow text-qblack' : 'border-transparent text-qgray'} `}>Reviews</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full h-[1px] bg-[#E8E8E8] absolute left-0 sm:top-[50px] top-[36px] -z-10"></div>
                        </div>
                        <div className="tab-contents w-full min-h-[400px] ">
                            <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                                {tab === 0 && (
                                    <div data-aos="fade-up" className="w-full tab-content-item">
                                        <h6 className="text-[18px] font-medium text-qblack mb-2">Introduction</h6>
                                        <p className="text-[15px] text-qgray text-normal mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book.</p>
                                        <div>
                                            <h6 className="text-[18px] text-medium mb-4">Features :</h6>
                                            <ul className="list-disc ml-[15px]">
                                                <li className="font-normal text-qgray leading-9">slim body with metal cover</li>
                                                <li className="font-normal text-qgray leading-9">latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                                                <li className="font-normal text-qgray leading-9">8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                                                <li className="font-normal text-qgray leading-9">NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard, touchpad with gesture support</li>
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {tab === 1 && (
                                    <div data-aos="fade-up" className="w-full tab-content-item">
                                        <div className="saller-info-wrapper w-full">
                                            <div className="saller-info sm:flex justify-between items-center pb-[30px] border-b border-[#E8E8E8]">
                                                <div className="sm:flex sm:space-x-5 items-center sm:w-1/4">
                                                    <div className="saller w-[73px] h-[73px] rounded-full overflow-hidden">
                                                        <Image src={"/assets/comment-user-1.png"} alt="saller" width={50} height={50} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="">
                                                        <h6 className="text-[18px] font-medium leading-[30px]">Ridoy Rock</h6>
                                                        <p className="text-[13px] font-normal text-qgray leading-[30px]">London,United Kingdom</p>
                                                        <div className="flex items-center mt-4">
                                                            <div className="flex">
                                                                <StarIcon width={15} color="#FFA800" />
                                                                <StarIcon width={15} color="#FFA800" />
                                                                <StarIcon width={15} color="#FFA800" />
                                                                <StarIcon width={15} color="#FFA800" />
                                                                <StarIcon width={15} color="#FFA800" />
                                                            </div>
                                                            <span className="text-[13px] font-normal ml-1">(4.5)</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex-1 w-full sm:flex sm:space-x-5 justify-between sm:ml-[60px] mt-5 sm:mt-0">
                                                    <div className="w-full mb-5 sm:mb-0">
                                                        <ul>
                                                            <li className="text-qgray leading-[30px]">
                                                                <span className="text-[15px] font-normal text-qblack">Products</span>: 120
                                                            </li>
                                                            <li className="text-qgray leading-[30px]">
                                                                <span className="text-[15px] font-normal text-qblack">Category</span>: Mobile Phone, Sports, Gaming, Electronics
                                                            </li>
                                                            <li className="text-qgray leading-[30px]">
                                                                <span className="text-[15px] font-normal text-qblack">Tags</span>: Beer, Foamer
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="full">
                                                        <ul>
                                                            <li className="text-qgray leading-[30px]">
                                                                <span className="text-[15px] font-normal text-qblack">Products</span>: 120
                                                            </li>
                                                            <li className="text-qgray leading-[30px]">
                                                                <span className="text-[15px] font-normal text-qblack">Category</span>: Mobile Phone, Sports, Gaming, Electronics
                                                            </li>
                                                            <li className="text-qgray leading-[30px]">
                                                                <span className="text-[15px] font-normal text-qblack">Tags</span>: Beer, Foamer
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {tab === 2 && (
                                    <div data-aos="fade-up" className="w-full tab-content-item">
                                        <h6 className="text-[18px] font-medium text-qblack mb-2">Reviews</h6>
                                        <div className="w-full">
                                            <div className="review-wrapper w-full">
                                                <div className="w-full reviews mb-[60px]">
                                                    <div className="w-full comments mb-[60px]">
                                                        <div className="comment-item bg-white px-10 py-[32px] mb-2.5">
                                                            <div className="comment-author flex justify-between items-center mb-3">
                                                                <div className="flex space-x-3 items-center">
                                                                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                                                                        <Image src="/assets/comment-user-1.png" alt="" width={50} height={50} className="w-full h-full object-cover" />
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-[18px] font-medium text-qblack">Rafiqul Islam</p>
                                                                        <p className="text-[13px] font-normal text-qgray">London,UK</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-center space-x-2">
                                                                    <div className="flex">
                                                                        <span>
                                                                            {/* <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg> */}
                                                                            <StarIcon width={15} color="#FFA800" />
                                                                        </span>
                                                                        <span>
                                                                            {/* <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg> */}
                                                                            <StarIcon width={15} color="#FFA800" />
                                                                        </span>
                                                                        <span>
                                                                            {/* <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg> */}
                                                                            <StarIcon width={15} color="#FFA800" />
                                                                        </span>
                                                                        <span>
                                                                            {/* <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg> */}
                                                                            <StarIcon width={15} color="#FFA800" />
                                                                        </span>
                                                                    </div>
                                                                    <span className="text-[13px] font-normal text-qblack mt-1 inline-block">(4.0)</span>
                                                                </div>
                                                            </div>
                                                            <div className="comment mb-[30px]">
                                                                <p className="text-[15px] text-qgray leading-7 text-normal">Lorem Ipsum is simply dummy text of the printing and typesetting
                                                                    industry. Lorem Ipsum has been the industry's standard dummy
                                                                    text ever since the redi 1500s, when an unknown printer took a
                                                                    galley of type and scrambled it to make a type specimen book. It
                                                                    has survived not only five centuries but also the on leap into
                                                                    electronic typesetting, remaining</p>
                                                            </div>
                                                            <div className="sub-comment-item bg-white px-10 pt-[32px] border-t">
                                                                <div className="comment-author  mb-3">
                                                                    <div className="flex space-x-3 items-center">
                                                                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                                                                            <Image src="/assets/comment-user-2.png" alt="" className="w-full h-full object-cover" width={50} height={50} />
                                                                        </div>
                                                                        <div>
                                                                            <p className="text-[18px] font-medium text-qblack"></p>
                                                                            <p className="text-[13px] font-normal text-qgray">London,UK</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment mb-[30px]"><p className="text-[15px] text-qgray leading-7 text-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-full flex justify-center">
                                                        <button type="button" className="black-btn w-[300px] h-[50px] text-sm font-semibold">Load More</button>
                                                    </div>
                                                </div>
                                                <div className="write-review w-full">
                                                    <h1 className="text-2xl font-medium text-qblack mb-5">Write Your Reviews</h1>
                                                    <div className="flex space-x-1 items-center mb-[30px]">
                                                        <div className="star-rating flex">
                                                            <button type="button" className="text-qgray">
                                                                {/* <svg width="19" height="18" viewBox="0 0 19 18" fill="none" class="fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"></path></svg> */}
                                                                <StarIcon width={15} color="#797979" />
                                                            </button>
                                                            <button type="button" className="text-qgray">
                                                                {/* <svg width="19" height="18" viewBox="0 0 19 18" fill="none" class="fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"></path></svg> */}
                                                                <StarIcon width={15} color="#797979" />
                                                            </button>
                                                            <button type="button" className="text-qgray">
                                                                {/* <svg width="19" height="18" viewBox="0 0 19 18" fill="none" class="fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"></path></svg> */}
                                                                <StarIcon width={15} color="#797979" />
                                                            </button>
                                                            <button type="button" className="text-qgray">
                                                                {/* <svg width="19" height="18" viewBox="0 0 19 18" fill="none" class="fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"></path></svg> */}
                                                                <StarIcon width={15} color="#797979" />
                                                            </button>
                                                            <button type="button" className="text-qgray">
                                                                {/* <svg width="19" height="18" viewBox="0 0 19 18" fill="none" class="fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"></path></svg> */}
                                                                <StarIcon width={15} color="#797979" />
                                                            </button>
                                                        </div>
                                                        <span className="text-qblack text-[15px] font-normal mt-1">(0.0)</span>
                                                    </div>
                                                    <div className="w-full review-form ">
                                                        <div className="sm:flex sm:space-x-[30px] items-center mb-5">
                                                            <div className="sm:w-1/3 w-full">
                                                                <div className="input-com w-full h-full">
                                                                    <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal" htmlFor="name">name*</label>
                                                                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                                                        <input placeholder="" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" id="name" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="sm:w-1/3 w-full mt-5 sm:mt-0">
                                                                <div className="input-com w-full h-full">
                                                                    <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal" htmlFor="name">email**</label>
                                                                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                                                        <input placeholder="" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" id="name" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="sm:w-1/3 w-full mt-5 sm:mt-0">
                                                                <div className="input-com w-full h-full">
                                                                    <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal" htmlFor="name">phone number*</label>
                                                                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                                                        <input placeholder="" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" id="name" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full mb-[30px]">
                                                            <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">Message*</h6>
                                                            <textarea name="" id="" cols={30} rows={3} className="w-full focus:ring-0 focus:outline-none p-6"></textarea>
                                                        </div>
                                                        <div className="flex justify-end">
                                                            <button type="button" className="black-btn w-[300px] h-[50px]  flex justify-center">
                                                                <span className="flex space-x-1 items-center h-full">
                                                                    <span className="text-sm font-semibold">Submit Review</span>
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="related-product w-full bg-white">
                        <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                            <div className="w-full py-[60px]">
                                <h1 className="sm:text-3xl text-xl font-semibold text-qblacktext leading-none mb-[30px]">Related Product</h1>
                                <div data-aos="fade-up" className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                                    <ProductCard
                                        image="/assets/product-img-1.jpg"
                                        title="Xoggle aute et pariatur adipisicing nostrud et excepteur"
                                        priceOld="$27.27"
                                        priceNew="$18.73"
                                        reviews={3}
                                    />

                                    <ProductCard
                                        image="/assets/product-img-1.jpg"
                                        title="Xoggle aute et pariatur adipisicing nostrud et excepteur"
                                        priceOld="$27.27"
                                        priceNew="$18.73"
                                        reviews={3}
                                    />

                                    <ProductCard
                                        image="/assets/product-img-1.jpg"
                                        title="Xoggle aute et pariatur adipisicing nostrud et excepteur"
                                        priceOld="$27.27"
                                        priceNew="$18.73"
                                        reviews={3}
                                    />

                                    <ProductCard
                                        image="/assets/product-img-1.jpg"
                                        title="Xoggle aute et pariatur adipisicing nostrud et excepteur"
                                        priceOld="$27.27"
                                        priceNew="$18.73"
                                        reviews={3}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Discount />
        </>
    );
}

export default SingleProduct;