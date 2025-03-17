import React from "react";
import { ArrowPathIcon, CubeTransparentIcon, ShieldCheckIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { CompanyModel } from "@/app/lib/definitions";
import BreadTitle, { BreadItem } from "../../component/import-muneli/title";
import BestServices from "../../best-services/import-muneli";
import { MdBusinessCenter } from "react-icons/md";
import Discount from "../../component/import-muneli/discount";
import Container from "../../component/import-muneli/container";

interface MainProps {
    company: CompanyModel;
}

const components = {
    h1: (props: any) => <h1 className="text-2xl font-black text-[#042460] my-5">{props.children}</h1>,
    h2: (props: any) => <h2 className="text-1xl font-extrabold text-[#042460] my-5">{props.children}</h2>,
    h3: (props: any) => <h3 className="text-lg font-bold text-[#042460] my-5">{props.children}</h3>,
    h4: (props: any) => <h4 className="text-base font-semibold text-[#042460] my-5">{props.children}</h4>,
    ul: (props: any) => <ul className="list-disc ml-5 my-5">{props.children}</ul>,
    li: (props: any) => <li className="text-sm text-black my-1">{props.children}</li>,
    p: (props: any) => <p className="text-sm text-black my-5">{props.children}</p>,
};

const Main = (props: MainProps) => {
    return (
        <div className="aboutus-wrapper w-full bg-white">
            <Container>
                <div className="w-full min-h-[665px] lg:flex lg:space-x-12 items-center pb-10 lg:pb-0">
                    <div className="md:w-[570px] w-full md:h-[560px] h-auto rounded overflow-hidden my-5 lg:my-0">
                        <Image src="/assets/about-banner.png" alt="about" className="w-full h" width={570} height={559} />
                    </div>
                    <div className="content flex-1">
                        <MDXRemote
                            source={props.company.acercaNosotros}
                            components={components}
                        />

                        {/* <Link href="/contact">
                            <div className="w-[121px] h-10">
                                <span className="flex items-center justify-center text-[#1d1d1d] bg-[#ffbb38] w-full h-full text-sm font-bold">Acerca de nosotros</span>
                            </div>
                        </Link> */}

                        <Link href="/contact"
                            type="button"
                            className="text-sm font-semibold bg-[#f76d24] text-white rounded-md px-4 py-3"
                        >
                            <div className="flex items-center justify-center space-x-3">
                                <span>
                                    <MdBusinessCenter width={20} height={20} fill="#fff" />
                                </span>
                                <span>Acerca de nosotros</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
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