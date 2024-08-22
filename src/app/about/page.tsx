import React from "react";
import { ArrowPathIcon, CubeTransparentIcon, ShieldCheckIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Title, { BreadItem } from "../ui/component/title";
import CustomerFeedback from "../ui/about/custom-feedback";

const Body = () => {
    return (
        <div className="aboutus-wrapper w-full">
            <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                <div className="w-full min-h-[665px] lg:flex lg:space-x-12 items-center pb-10 lg:pb-0">
                    <div className="md:w-[570px] w-full md:h-[560px] h-auto rounded overflow-hidden my-5 lg:my-0">
                        <Image src="/assets/about-banner.png" alt="about" className="w-full h" width={570} height={559} />
                    </div>
                    <div className="content flex-1">
                        <h1 className="text-[18px] font-medium text-qblack dark:text-white mb-2.5">What is e-commerce business?</h1>
                        <p className="text-[15px] text-qgraytwo leading-7 mb-2.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting.</p>
                        <ul className="text-[15px] text-qgraytwo leading-7 list-disc ml-5 mb-5">
                            <li>slim body with metal cover</li>
                            <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                            <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                            <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard</li>
                        </ul>
                        <a href="/contact">
                            <div className="w-[121px] h-10">
                                <span className="flex items-center justify-center text-[#1d1d1d] bg-[#ffbb38] w-full h-full text-sm font-bold">Contact Us</span>
                            </div>
                        </a>
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

export default function About() {
    return (
        <>
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
                {/* <CustomerFeedback /> */}
                <BestServices />
            </div>
        </>
    );
}