import { UserIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon, ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Title, { BreadItem } from "../ui/component/title";
import Discount from "../ui/component/discount";

interface BlogCardItemProps {
    image: string;
    widthImage?: number;
    heightImage?: number;
    alt: string;
    autor: string;
    comments: number;
    title: string;
    description: string;
}

const BlogCardItem: React.FC<BlogCardItemProps> = ({ image, widthImage = 567, heightImage = 340, alt, autor, comments, title, description }) => {
    return (
        <div data-aos="fade-up" className="item w-full">
            <div className="blog-card-wrapper w-full border border-[#D3D3D3] ">
                <div className="img w-full h-[340px]">
                    <Image src={image} width={widthImage} height={heightImage} alt={alt} className="w-full h-full object-cover" priority={true} />
                </div>
                <div className="p-[24px]">
                    <div className="short-data flex space-x-9 items-center mb-3">
                        <div className="flex space-x-1.5 items-center">
                            <UserIcon width={24} color="#FFBB38" />
                            <span className="text-base text-qgraytwo capitalize">{autor}</span>
                        </div>
                        <div className="flex space-x-1.5 items-center">
                            <span>
                                <ChatBubbleBottomCenterIcon width={24} color="#FFBB38" />
                            </span>
                            <span className="text-base text-qgraytwo">{comments} Comments</span>
                        </div>
                    </div>
                    <div className="details">
                        <Link href="/blogs/blog">
                            <h1 className="text-[22px] text-qblack dark:text-white hover:text-blue-500 font-semibold line-clamp-2 mb-1 capitalize">{title}</h1>
                        </Link>
                        <p className="text-qgraytwo text-[15px] leading-[30px] line-clamp-2 mb-3">{description}</p>
                        <a href="#">
                            <div className="flex items-center space-x-2">
                                <span className="text-qblack text-base font-semibold">View More</span>
                                <span>
                                    <ArrowRightIcon width={24} />
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Body = () => {
    return (
        <div className="w-full mb-10">
            <div className="container max-w-screen-x mx-auto md:px-6">
                <div className="w-full">
                    <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5">
                        <BlogCardItem
                            image={"https://shopo.quomodothemes.website/assets/images/blog-img-1.jpg"}
                            alt={"blog"}
                            autor={"By Admin"}
                            comments={6}
                            title={"reprehenderit non esse anim laboris reprehenderit officia"}
                            description={"irure laborum qui deserunt excepteur id ad sit quis laboris duis ut cillum eiusmod non sint exercitation nulla tempor nostrud eiusmod commodo mollit magna sint laboris excepteur elit cupidatat id"} />

                        <BlogCardItem
                            image={"https://shopo.quomodothemes.website/assets/images/blog-img-2.jpg"}
                            alt={"blog"}
                            autor={"By Admin"}
                            comments={6}
                            title={"reprehenderit non esse anim laboris reprehenderit officia"}
                            description={"irure laborum qui deserunt excepteur id ad sit quis laboris duis ut cillum eiusmod non sint exercitation nulla tempor nostrud eiusmod commodo mollit magna sint laboris excepteur elit cupidatat id"} />

                        <BlogCardItem
                            image={"https://shopo.quomodothemes.website/assets/images/blog-img-3.jpg"}
                            alt={"blog"}
                            autor={"By Admin"}
                            comments={6}
                            title={"reprehenderit non esse anim laboris reprehenderit officia"}
                            description={"irure laborum qui deserunt excepteur id ad sit quis laboris duis ut cillum eiusmod non sint exercitation nulla tempor nostrud eiusmod commodo mollit magna sint laboris excepteur elit cupidatat id"} />

                        <BlogCardItem
                            image={"https://shopo.quomodothemes.website/assets/images/blog-img-4.jpg"}
                            alt={"blog"}
                            autor={"By Admin"}
                            comments={6}
                            title={"reprehenderit non esse anim laboris reprehenderit officia"}
                            description={"irure laborum qui deserunt excepteur id ad sit quis laboris duis ut cillum eiusmod non sint exercitation nulla tempor nostrud eiusmod commodo mollit magna sint laboris excepteur elit cupidatat id"} />

                        <BlogCardItem
                            image={"https://shopo.quomodothemes.website/assets/images/blog-img-5.jpg"}
                            alt={"blog"}
                            autor={"By Admin"}
                            comments={6}
                            title={"reprehenderit non esse anim laboris reprehenderit officia"}
                            description={"irure laborum qui deserunt excepteur id ad sit quis laboris duis ut cillum eiusmod non sint exercitation nulla tempor nostrud eiusmod commodo mollit magna sint laboris excepteur elit cupidatat id"} />

                        <BlogCardItem
                            image={"https://shopo.quomodothemes.website/assets/images/blog-img-6.jpg"}
                            alt={"blog"}
                            autor={"By Admin"}
                            comments={6}
                            title={"reprehenderit non esse anim laboris reprehenderit officia"}
                            description={"irure laborum qui deserunt excepteur id ad sit quis laboris duis ut cillum eiusmod non sint exercitation nulla tempor nostrud eiusmod commodo mollit magna sint laboris excepteur elit cupidatat id"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Blogs() {
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
                                href={"/blogs"}
                                title={"blogs"}
                                isSeparator={false} />
                        </>
                    }
                    title={"Our Blogs"} />
                <Body />
            </div>
            <Discount />
        </>
    );
}