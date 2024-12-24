import { CurveIcon } from "@/app/ui/component/icons";
import React from "react";
import Discount from "../ui/component/discount";
import Title, { BreadItem } from "../ui/component/title";
import AccordionItem from "../ui/faq/accordion-item";

const Body = () => {
    return (
        <div className="aboutus-wrapper w-full mb-10">
            <div className="container max-w-screen-x mx-auto px-2 md:px-6">

                <div className="main-wrapper w-full lg:flex lg:space-x-[30px]">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
                        <h1 className="text-qblack dark:text-white font-bold text-[22px] mb-4">Frequently asked questions</h1>
                        <div className="flex flex-col space-y-7 justify-between">
                            <AccordionItem title={"01. How does information technology work?"} />
                            <AccordionItem title={"02. How can I become IT manager?"} />
                            <AccordionItem title={"03. What are the latest trends in IT?"} />
                            <AccordionItem title={"04. How long should a business plan be?"} />
                            <AccordionItem title={"05. How work the support policy?"} />

                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="bg-white sm:p-10 p-5">
                            <div className="title flex flex-col items-center">
                                <h1 className="lg:text-[34px] text-xl font-bold text-qblack">Have Any Qustion</h1>
                                <span className="-mt-5 block">
                                    <CurveIcon />
                                </span>
                            </div>
                            <div className="inputs mt-5">
                                <div className="mb-4">
                                    <div className="input-com w-full h-full">
                                        <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal" htmlFor="first_name">Frist Name*</label>
                                        <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                            <input placeholder="Demo Name" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" id="first_name" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="input-com w-full h-full">
                                        <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal" htmlFor="first_name">Email Address*</label>
                                        <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                            <input placeholder="info@quomodosoft.com" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" id="first_name" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <div className="input-com w-full h-full">
                                        <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">Message*</h6>
                                        <textarea placeholder="Type your message here" className="w-full h-[105px] focus:ring-0 focus:outline-none p-3 border border-qgray-border placeholder:text-sm"></textarea>
                                    </div>
                                </div>

                                <div>
                                    <a href="#">
                                        <div className="bg-black text-white text-sm font-semibold w-full h-[50px] flex justify-center items-center">
                                            <span>Send Now</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default function Faq() {
    return (
        <>
            <div className="w-full pt-0 pb-0">
                <Title
                    title={"Frequently Asked Questions"}
                >
                    <BreadItem
                        href={"/"}
                        title={"home"}
                        isSeparator={true} />

                    <BreadItem
                        href={"/faq"}
                        title={"faq"}
                        isSeparator={false} />
                </Title>
                <Body />
            </div>
            <Discount />
        </>
    );
}