
import { SearchIcon, StarIcon } from "@/app/ui/component/icons";
import Image from "next/image";
import React, { Suspense } from "react";
import Discount from "../ui/component/discount";
import Title, { BreadItem } from "../ui/component/title";

interface CardProps {
    src: string;
}

const Card: React.FC<CardProps> = ({ src }) => {
    return (
        <>
            <div className="w-full mb-[30px]">
                <div className="w-full h-[44px]">
                    <div className="input-com w-full h-full">
                        <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                            <input placeholder="Search Product..." className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none" type="text" ></input>
                            <div className="absolute right-2 z-10 bg-white top-[12px]">
                                <SearchIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-img flex justify-center mb-3 ">
                <div className="w-[161px] h-[161px]">
                    <Image src={src} alt="" className="w-full h-full object-contain" width={200} height={200} property="true" />
                </div>
            </div>
            <p className="text-center text-[15px] font-medium text-qblack leading-[24px] mb-2">Apple MacBook Air 13.3-Inch Display</p>
            <p className="text-center text-[15px] font-medium text-qred leading-[24px]">$6.99</p>
        </>
    );
}

const StarRating = () => {
    return (
        <div className="flex space-x-2 items-center">
            <span className="text-[15px] font-medium text-qblack">4.8</span>
            <div className="flex items-center">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </div>
            <span className="text-[13px] font-normal text-qgraytwo">(10)</span>
        </div>
    );
}

const Body = () => {
    return (
        <div className="contact-wrapper w-full">
            <div className="container max-w-screen-x mx-auto md:px-6">
                <div className="w-full border border-qgray-border">
                    <table className="table-wrapper">
                        <tbody>
                            <tr className="table-row-wrapper">
                                <td className="w-[233px] pt-[30px] px-[26px] align-top bg-[#FAFAFA]">
                                    <div>
                                        <h1 className="text-[18px] font-medium text-qblack mb-4">Product Comparison</h1>
                                        <p className="text-[13px] text-qgraytwo">Select products to see the differences and similarities between them</p>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white p-6 border-b border-r border-qgray-border">
                                    <Card src="/assets/product-img-15.jpg" />
                                </td>
                                <td className="product w-[235px] bg-white p-6 border-b border-r border-qgray-border">
                                    <Card src="/assets/product-img-16.jpg" />
                                </td>
                                <td className="product w-[235px] bg-white p-6 border-b border-r border-qgray-border">
                                    <Card src="/assets/product-img-12.jpg" />
                                </td>
                                <td className="product w-[235px] bg-white p-6">
                                    <Card src="/assets/product-img-11.jpg" />
                                </td>
                            </tr>

                            <tr className="table-row-wrapper">
                                <td className="w-[233px]  px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Star Rating</h1>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pt-[20px] pb-[20px] align-top">
                                    <StarRating />
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pt-[20px] pb-[20px] align-top">
                                    <StarRating />
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pt-[20px] pb-[20px] align-top">
                                    <StarRating />
                                </td>
                                <td className="product w-[235px] bg-white px-6 pt-[20px] pb-[20px] align-top">
                                    <StarRating />
                                </td>
                            </tr>

                            <tr className="table-row-wrapper">
                                <td className="w-[233px]  px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Star Rating</h1>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Apple MacBook Air 13&quot;</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Apple MacBook Air 13&quot;</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Apple MacBook Air 13&quot;</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Apple MacBook Air 13&quot;</span>
                                </td>
                            </tr>

                            <tr className="table-row-wrapper">
                                <td className="w-[233px]  px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Brand</h1>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Apple</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Asus</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Lenovo</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Microsoft</span>
                                </td>
                            </tr>

                            <tr className="table-row-wrapper">
                                <td className="w-[233px]  px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Availability</h1>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-semibold text-green-500">In Stock</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-semibold  text-qred">In Stock</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-semibold text-green-500">In Stock</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 pb-[20px] align-top">
                                    <span className="text-[13px] font-semibold  text-qred">In Stock</span>
                                </td>
                            </tr>

                            <tr className="table-row-wrapper">
                                <td className="w-[233px]  px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Colors</h1>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <div className="flex space-x-2 items-center">
                                        <span className="w-4 h-4 rounded-full bg-[#649EFF]"></span>
                                        <span className="w-4 h-4 rounded-full bg-[#BAFE90]"></span>
                                        <span className="w-4 h-4 rounded-full bg-[#FF7173]"></span>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <div className="flex space-x-2 items-center">
                                        <span className="w-4 h-4 rounded-full bg-[#649EFF]"></span>
                                        <span className="w-4 h-4 rounded-full bg-[#BAFE90]"></span>
                                        <span className="w-4 h-4 rounded-full bg-[#FF7173]"></span>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <div className="flex space-x-2 items-center">
                                        <span className="w-4 h-4 rounded-full bg-[#649EFF]"></span>
                                        <span className="w-4 h-4 rounded-full bg-[#BAFE90]"></span>
                                        <span className="w-4 h-4 rounded-full bg-[#FF7173]"></span>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white px-6 pb-[20px] align-top">
                                    <div className="flex space-x-2 items-center">
                                        <span className="w-4 h-4 rounded-full bg-[#649EFF]"></span>
                                        <span className="w-4 h-4 rounded-full bg-[#BAFE90]"></span>
                                        <span className="w-4 h-4 rounded-full bg-[#FF7173]"></span>
                                    </div>
                                </td>
                            </tr>

                            <tr className="table-row-wrapper">
                                <td className="w-[233px]  px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Processor</h1>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Apple M1 chip with 8-core CPU and 7-core GPU</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Apple M1 chip with 8-core CPU and 7-core GPU</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Apple M1 chip with 8-core CPU and 7-core GPU</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Apple M1 chip with 8-core CPU and 7-core GPU</span>
                                </td>
                            </tr>

                            <tr className="table-row-wrapper">
                                <td className="w-[233px]  px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Display</h1>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">13.3-inch</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">13.3-inch</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">13.3-inch</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">13.3-inch</span>
                                </td>
                            </tr>

                            <tr className="table-row-wrapper">
                                <td className="w-[233px]  px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Memory</h1>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">8GB RAM</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">8GB RAM</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">8GB RAM</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">8GB RAM</span>
                                </td>
                            </tr>

                            <tr className="table-row-wrapper">
                                <td className="w-[233px]  px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Storage</h1>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">1TB 5400rpm SATA HDD</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">1TB 5400rpm SATA HDD</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">1TB 5400rpm SATA HDD</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">1TB 5400rpm SATA HDD</span>
                                </td>
                            </tr>

                            <tr className="table-row-wrapper">
                                <td className="w-[233px]  px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Graphics</h1>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">macOS</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">macOS</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">macOS</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">macOS</span>
                                </td>
                            </tr>

                            <tr className="table-row-wrapper">
                                <td className="w-[233px]  px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Battery</h1>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Built-in 49.9‑watt‑hour</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Built-in 49.9‑watt‑hour</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Built-in 49.9‑watt‑hour</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Built-in 49.9‑watt‑hour</span>
                                </td>
                            </tr>

                            <tr className="table-row-wrapper">
                                <td className="w-[233px]  px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Wi-Fi</h1>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">802.11ac Wi-Fi wireless</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">802.11ac Wi-Fi wireless</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">802.11ac Wi-Fi wireless</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">802.11ac Wi-Fi wireless</span>
                                </td>
                            </tr>

                            <tr className="table-row-wrapper">
                                <td className="w-[233px]  px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Bluetooth</h1>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">5.0 wireless technology</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">5.0 wireless technology</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">5.0 wireless technology</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">5.0 wireless technology</span>
                                </td>
                            </tr>

                            <tr className="table-row-wrapper">
                                <td className="w-[233px]  px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">WebCam</h1>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">720p FaceTime HD camera</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">720p FaceTime HD camera</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">720p FaceTime HD camera</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">720p FaceTime HD camera</span>
                                </td>
                            </tr>

                            <tr className="table-row-wrapper">
                                <td className="w-[233px]  px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Audio</h1>
                                    </div>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Stereo speakers</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Stereo speakers</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Stereo speakers</span>
                                </td>
                                <td className="product w-[235px] bg-white px-6 pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">Stereo speakers</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default function ProductCompaire() {

    return (
        <>
            <div className="w-full pt-0 pb-0">
                <div className="products-compaire-wrapper w-full bg-white pb-[40px]">
                    <Title
                        title={"Products Compaire"}>
                        <BreadItem
                            href={"/"}
                            title={"home"}
                            isSeparator={true} />
                        <BreadItem
                            href={"/products-compaire"}
                            title={"products compaire"}
                            isSeparator={false} />
                    </Title>
                    <Body />
                </div>

                <Discount />
            </div>
        </>
    );
}