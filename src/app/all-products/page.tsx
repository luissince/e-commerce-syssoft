'use client'
import Discount from "@/src/components/common/discount";
import ProductCard from "@/src/components/common/product-card";
import Image from "next/image";
import React, { RefObject, useEffect, useRef, useState } from "react";

interface CategoryProps {
    id: string;
    title: string;
}

const Category: React.FC<CategoryProps> = ({ id, title }) => {
    return (
        <li className="item flex justify-between items-center mb-5">
            <div className="flex space-x-[14px] items-center">
                <div>
                    <div>
                        <input id={id} type="checkbox" name={id} />
                    </div>
                </div>
                <div>
                    <label htmlFor={id} className="text-xs font-normal capitalize">{title}
                    </label>
                </div>
            </div>
            <div>
                <span className="cursor-pointer">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="4" width="10" height="2" fill="#C4C4C4">
                        </rect>
                        <rect x="6" width="10" height="2" transform="rotate(90 6 0)" fill="#C4C4C4">
                        </rect>
                    </svg>
                </span>
            </div>
        </li>
    );
}

interface BrandItemProps {
    id: string;
    title: string;
}

const BrandItem = ({ id, title }: BrandItemProps) => {
    return (
        <li className="item flex justify-between items-center mb-5">
            <div className="flex space-x-[14px] items-center">
                <div>
                    <div>
                        <input id={id} type="checkbox" name={id} />
                    </div>
                </div>
                <div>
                    <label htmlFor={id} className="text-xs font-normal capitalize">{title}</label>
                </div>
            </div>
        </li>
    );
}

interface SizesItemProps {
    id: string;
    title: string;
}

const SizesItem: React.FC<SizesItemProps> = ({ id, title }) => {
    return (
        <li className="item flex justify-between items-center mb-5">
            <div className="flex space-x-[14px] items-center">
                <div>
                    <div>
                        <input id={id} type="checkbox" name={id} />
                    </div>
                </div>
                <div>
                    <label htmlFor={id} className="text-xs font-normal capitalize">{title}</label>
                </div>
            </div>
        </li>
    );
}

interface StorageItemProps {
    title: string;
}

const StorageItem = ({ title }: StorageItemProps) => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <span
            className={`font-normal border border-qgray-border text-xs px-[14px] py-[6px] cursor-pointer mb-[5px] ${active ? 'bg-qyellow text-qblack' : 'text-qgray'} `}
            onClick={() => setActive(!active)}>
            {title}
        </span>
    );
}

const AllProducts = () => {

    const priceGap = 100;
    const refContentSlider = useRef<HTMLDivElement | null>(null);

    const [minRange, setMinRange] = useState(0);
    const [maxRange, setMaxRange] = useState(1000);

    const updateSliderStyles = (minVal: number, maxVal: number) => {
        if (refContentSlider.current) {
            refContentSlider.current.style.left = ((minVal / 1000) * 100) + "%";
            refContentSlider.current.style.right = (100 - (maxVal / 1000) * 100) + "%";
        }
    };

    const handleMinRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const minVal = parseInt(event.target.value);
        setMinRange(minVal);

        if ((maxRange - minVal) < priceGap) {
            setMinRange(maxRange - priceGap);
        } else {
            updateSliderStyles(minVal, maxRange);
        }
    };

    const handleMaxRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const maxVal = parseInt(event.target.value);
        setMaxRange(maxVal);

        if ((maxVal - minRange) < priceGap) {
            setMaxRange(minRange + priceGap);
        } else {
            updateSliderStyles(minRange, maxVal);
        }
    };

    useEffect(() => {
        updateSliderStyles(minRange, maxRange);
    }, [minRange, maxRange]);

    return (
        <>
            <div className="w-full pt-[30px] pb-[60px]">
                <div className="w-full">
                    <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                        <div className="font-normal text-[13px] text-qblack mb-[23px]">
                            <span>
                                <a href="/"><span className="mx-1 capitalize">home</span></a>
                                <span>/</span>
                            </span>
                            <span><a href="/profile">
                                <span className="mx-1 capitalize">productos</span></a>
                            </span>
                        </div>

                        <div className="w-full lg:flex lg:space-x-[30px]">
                            <div className="lg:w-[270px]">
                                <div className="w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] mb-[30px]  hidden lg:block">
                                    <div className="filter-subject-item pb-10 border-b border-qgray-border">
                                        <div className="subject-title mb-[30px]">
                                            <h1 className="text-black text-base font-medium">Product categories</h1>
                                        </div>
                                        <div className="filter-items">
                                            <ul>
                                                <Category id="mobileLaptops" title="Mobile & Laptops" />
                                                <Category id="gamingEntertainment" title="Gaming Entertainment" />
                                                <Category id="imageVideo" title="Image & Video" />
                                                <Category id="vehicles" title="Vehicles" />
                                                <Category id="furnitures" title="Furnitures" />
                                                <Category id="sport" title="Sport" />
                                                <Category id="foodDrinks" title="Food & Drinks" />
                                                <Category id="fashionAccessories" title="Fashion Accessories" />
                                                <Category id="toiletSanitation" title="Toilet & Sanitation" />
                                                <Category id="makeupCorner" title="Makeup Corner" />
                                                <Category id="babyItems" title="Baby Items" />
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                                        <div className="subject-title mb-[30px]">
                                            <h1 className="text-black text-base font-500">Price Range</h1>
                                        </div>
                                        <div className="price-range mb-5">
                                            <div className="slider">
                                                <div className="progress" ref={refContentSlider}></div>
                                            </div>
                                            <div className="relative">
                                                <input type="range"
                                                    className="range-min range-input"
                                                    min="0"
                                                    max="1000"
                                                    value={minRange}
                                                    step="50"
                                                    onChange={handleMinRangeChange}
                                                />
                                                <input
                                                    type="range"
                                                    className="range-max range-input"
                                                    min="0"
                                                    max="1000"
                                                    value={maxRange}
                                                    step="50"
                                                    onChange={handleMaxRangeChange}
                                                />
                                            </div>
                                        </div>
                                        <p className="text-xs text-qblack font-400">Price: ${minRange} - ${maxRange}</p>
                                    </div>

                                    <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                                        <div className="subject-title mb-[30px]">
                                            <h1 className="text-black text-base font-500">
                                                Brands</h1>
                                        </div>
                                        <div className="filter-items">
                                            <ul>
                                                <BrandItem id="apple" title="apple" />
                                                <BrandItem id="samsung" title="Samsung" />
                                                <BrandItem id="walton" title="Walton" />
                                                <BrandItem id="oneplus" title="OnePlus" />
                                                <BrandItem id="vivo" title="Vivo" />
                                                <BrandItem id="oppo" title="Oppo" />
                                                <BrandItem id="xiomi" title="Xiomi" />
                                                <BrandItem id="others" title="Others" />
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                                        <div className="subject-title mb-[30px]">
                                            <h1 className="text-black text-base font-500">
                                                Storage</h1>
                                        </div>
                                        <div className="filter-items">
                                            <div className="flex space-x-[5px] flex-wrap">
                                                <StorageItem title="64GB" />
                                                <StorageItem title="128GB" />
                                                <StorageItem title="256GB" />
                                                <StorageItem title="512GB" />
                                                <StorageItem title="1024GB" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="filter-subject-item pb-10 mt-10">
                                        <div className="subject-title mb-[30px]">
                                            <h1 className="text-black text-base font-500">
                                                Sizes</h1>
                                        </div>
                                        <div className="filter-items">
                                            <ul>
                                                <SizesItem id="sizeS" title="s" />
                                                <SizesItem id="sizeM" title="M" />
                                                <SizesItem id="sizeXL" title="XL" />
                                                <SizesItem id="sizeXXL" title="XXL" />
                                                <SizesItem id="sizeFit" title="Sliem Fit" />
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-full hidden lg:block h-[295px]">
                                    <Image src="/assets/ads-5.png" alt="" width={270} height={295} className="w-full h-full object-contain" />
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="products-sorting w-full bg-white md:h-[70px] flex md:flex-row flex-col md:space-y-0 space-y-5 md:justify-between md:items-center p-[30px] mb-[40px]">
                                    <div>
                                        <p className="font-400 text-[13px]">
                                            <span className="text-qgray">Showing</span> 1–16 of 66 results</p>
                                    </div>
                                    <div className="flex space-x-3 items-center">
                                        <span className="font-400 text-[13px]">
                                            Sort by:</span>
                                        <div className="flex space-x-3 items-center border-b border-b-qgray">
                                            <span className="font-400 text-[13px] text-qgray">
                                                Default</span>
                                            <span>
                                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L5 5L9 1" stroke="#9A9A9A">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <button type="button" className="w-10 lg:hidden h-10 rounded flex justify-center items-center border border-qyellow text-qyellow">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>

                                <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  xl:gap-[30px] gap-5 mb-[40px]">
                                    <ProductCard
                                        image="/assets/product-img-1.jpg"
                                        title="Xoggle aute et pariatur adipisicing nostrud et excepteur"
                                        priceOld="$27.27"
                                        priceNew="$18.73"
                                        reviews={3}
                                    />

                                    <ProductCard
                                        image="/assets/product-img-2.jpg"
                                        width={316}
                                        height={222}
                                        title="Geeky ipsum esse repreh est consequat"
                                        priceOld="$24.55"
                                        priceNew="$17.79"
                                        available={true}
                                        amount="20"
                                        reviews={5}
                                    />

                                    <ProductCard
                                        image="/assets/product-img-3.jpg"
                                        title="Conjurica ea magna eiusmod esse cupt anim aliquip"
                                        priceOld="$32.64"
                                        priceNew="$18.03"
                                        reviews={5}
                                    />

                                    {/*  */}

                                    <ProductCard
                                        image="/assets/product-img-4.jpg"
                                        title="Senmei ipsum dolore eiusmod dolor officia do nisi"
                                        priceOld="$20.64"
                                        priceNew="$27.61"
                                        available={true}
                                        amount="20"
                                        reviews={5}
                                    />

                                    <ProductCard
                                        image="/assets/product-img-5.jpg"
                                        width={250}
                                        height={176}
                                        title="Canopoly duis voluptate dolor sunt sit adipisicing in"
                                        priceOld="$39.27"
                                        priceNew="$10.42"
                                        available={true}
                                        amount="20"
                                        reviews={5}
                                    />

                                    <ProductCard
                                        image="/assets/product-img-6.jpg"
                                        title="Unisure aliqua repreh ex cupt qui elit officia"
                                        priceOld="$36.90"
                                        priceNew="$16.43"
                                        reviews={5}
                                    />
                                </div>

                                <div className="w-full h-[164px] overflow-hidden mb-[40px]">
                                    <Image src="/assets/ads-6.png"
                                        alt=""
                                        className="w-full h-full object-contain"
                                        width={868}
                                        height={164}
                                    />
                                </div>

                                <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  xl:gap-[30px] gap-5 mb-[40px]">
                                    <ProductCard
                                        image="/assets/product-img-1.jpg"
                                        title="Xoggle aute et pariatur adipisicing nostrud et excepteur"
                                        priceOld="$27.27"
                                        priceNew="$18.73"
                                        reviews={3}
                                    />

                                    <ProductCard
                                        image="/assets/product-img-2.jpg"
                                        width={316}
                                        height={222}
                                        title="Geeky ipsum esse repreh est consequat"
                                        priceOld="$24.55"
                                        priceNew="$17.79"
                                        available={true}
                                        amount="20"
                                        reviews={5}
                                    />

                                    <ProductCard
                                        image="/assets/product-img-3.jpg"
                                        title="Conjurica ea magna eiusmod esse cupt anim aliquip"
                                        priceOld="$32.64"
                                        priceNew="$18.03"
                                        reviews={5}
                                    />

                                    {/*  */}

                                    <ProductCard
                                        image="/assets/product-img-4.jpg"
                                        title="Senmei ipsum dolore eiusmod dolor officia do nisi"
                                        priceOld="$20.64"
                                        priceNew="$27.61"
                                        available={true}
                                        amount="20"
                                        reviews={5}
                                    />

                                    <ProductCard
                                        image="/assets/product-img-5.jpg"
                                        width={250}
                                        height={176}
                                        title="Canopoly duis voluptate dolor sunt sit adipisicing in"
                                        priceOld="$39.27"
                                        priceNew="$10.42"
                                        available={true}
                                        amount="20"
                                        reviews={5}
                                    />

                                    <ProductCard
                                        image="/assets/product-img-6.jpg"
                                        title="Unisure aliqua repreh ex cupt qui elit officia"
                                        priceOld="$36.90"
                                        priceNew="$16.43"
                                        reviews={5}
                                    />

                                    {/*  */}

                                    <ProductCard
                                        image="/assets/product-img-4.jpg"
                                        title="Senmei ipsum dolore eiusmod dolor officia do nisi"
                                        priceOld="$20.64"
                                        priceNew="$27.61"
                                        available={true}
                                        amount="20"
                                        reviews={5}
                                    />

                                    <ProductCard
                                        image="/assets/product-img-5.jpg"
                                        width={250}
                                        height={176}
                                        title="Canopoly duis voluptate dolor sunt sit adipisicing in"
                                        priceOld="$39.27"
                                        priceNew="$10.42"
                                        available={true}
                                        amount="20"
                                        reviews={5}
                                    />

                                    <ProductCard
                                        image="/assets/product-img-6.jpg"
                                        title="Unisure aliqua repreh ex cupt qui elit officia"
                                        priceOld="$36.90"
                                        priceNew="$16.43"
                                        reviews={5}
                                    />
                                </div>

                                <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
                                    <div className="flex flex-1 justify-between sm:hidden">
                                        <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                                        <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Next</a>
                                    </div>
                                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                        <div>
                                            <p className="text-base text-gray-700">Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">97</span> results
                                            </p>
                                        </div>
                                        <div>
                                            <nav className="isolate inline-flex -space-x-px shadow-sm" aria-label="Pagination">
                                                <a href="#" className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                                    <span className="sr-only">Previous</span>
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                                <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-qyellow px-4 py-2 text-base font-medium focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                                                <a href="#" className="relative inline-flex items-center px-4 py-2 text-base font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                                                <a href="#" className="relative hidden items-center px-4 py-2 text-base font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                                                <span className="relative inline-flex items-center px-4 py-2 text-base font-medium text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                                                <a href="#" className="relative hidden items-center px-4 py-2 text-base font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                                                <a href="#" className="relative inline-flex items-center px-4 py-2 text-base font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                                                <a href="#" className="relative inline-flex items-center px-4 py-2 text-base font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                                                <a href="#" className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                                    <span className="sr-only">Next</span>
                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                            </nav>
                                        </div>
                                    </div>
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

export default AllProducts;