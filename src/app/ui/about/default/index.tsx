import React from "react";
import { ArrowPathIcon, CubeTransparentIcon, ShieldCheckIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { CompanyModel } from "@/app/lib/definitions";
import BreadTitle, { BreadItem } from "../../component/default/title";
import Discount from "../../component/default/discount";

interface MainProps {
    company: CompanyModel;
}

const components = {
    h1: (props: any) => <h1 className="text-2xl font-black text-qblacktext dark:text-white my-5">{props.children}</h1>,
    h2: (props: any) => <h2 className="text-1xl font-extrabold text-qblacktext dark:text-white my-5">{props.children}</h2>,
    h3: (props: any) => <h3 className="text-lg font-bold text-qblacktext dark:text-white my-5">{props.children}</h3>,
    h4: (props: any) => <h4 className="text-base font-semibold text-qblacktext dark:text-white my-5">{props.children}</h4>,
    ul: (props: any) => <ul className="list-disc ml-5 my-5">{props.children}</ul>,
    li: (props: any) => <li className="text-sm text-qgray dark:text-white my-1">{props.children}</li>,
    p: (props: any) => <p className="text-sm text-qgray my-5">{props.children}</p>,
};

const Main = (props: MainProps) => {
    return (
        <div className="aboutus-wrapper w-full">
            <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                <div className="w-full min-h-[665px] lg:flex lg:space-x-12 items-center pb-10 lg:pb-0">
                    <div className="md:w-[570px] w-full md:h-[560px] h-auto rounded overflow-hidden my-5 lg:my-0">
                        <Image src="/assets/about-banner.png" alt="about" className="w-full h" width={570} height={559} />
                    </div>
                    <div className="content flex-1">
                        <MDXRemote
                            source={props.company.acercaNosotros}
                            components={components}
                        />

                        <Link href="/contact" className="bg-[#ffbb38] px-3 py-3">
                            <span className=" text-[#1d1d1d] text-sm font-bold">Acerca de nosotros</span>
                        </Link>
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

interface Props {
    company: CompanyModel;
}

export default function AboutBody({ company }: Props) {

    return (
        <>
            <div className="w-full pt-0 pb-0">
                <BreadTitle
                    title={"Acerca de Nosotros"} >
                    <BreadItem
                        href={"/"}
                        title={"Inicio"}
                        isSeparator={true} />
                    <BreadItem
                        href={"/about"}
                        title={"Acerca de Nosotros"}
                        isSeparator={false} />
                </BreadTitle>
                <Main company={company} />
                {/* <CustomerFeedback /> */}
                <BestServices />
            </div>
            <Discount />
        </>
    );
}