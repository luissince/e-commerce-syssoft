'use client'
import { BagIcon, HeartIcon, StarIcon } from "@/app/ui/component/default/icons";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProductoModal from "./modal/product-modal";

interface ProductCardProps {
    image: string;
    width?: number;
    height?: number;
    code?: string;
    title: string;
    priceOld: string;
    priceNew: string;
    available?: boolean;
    amount?: string;
    reviews: number;
    link: string;
}

const ProductCard = ({ image, width = 196, height = 196, code, title, priceOld, priceNew, available = false, amount = "0", reviews, link = "" }: ProductCardProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    const onOpenModal = () => {
        setIsOpen(true);
    }

    const onCloseModal = () => {
        setIsOpen(false);
    }

    if (!mounted) {
        return null
    }

    return (
        <div>
            <ProductoModal
                isOpen={isOpen}
                code={code!}
                onClose={onCloseModal}
            />

            <div className="product-card-one w-full h-full bg-white rounded-md border border-[#042460] pb-5 relative group overflow-hidden">
                <div className="product-card-img w-full h-[300px] flex items-center justify-center">
                    <Image
                        src={image}
                        alt={title}
                        width={width}
                        height={height}
                        priority={true}
                    />
                    {available && (
                        <div className="px-[30px] absolute left-0 top-3 w-full">
                            <div className="progress-title flex justify-between ">
                                <p className="text-xs text-qblack font-400 leading-6">
                                    Prodcuts Available
                                </p>
                                <span className="text-sm text-qblack font-semibold leading-6">
                                    {amount}
                                </span>
                            </div>
                            <div className="progress w-full h-[5px] rounded-[22px] bg-primarygray relative overflow-hidden">
                                <div className="h-full absolute left-0 top-0  bg-qyellow w-[66.6667%]"></div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="product-card-details px-[30px] mb-5 relative">
                    <div className="reviews flex space-x-[1px] mb-3">
                        {Array.from({ length: reviews }).map((_, key) => (
                            <span key={key}>
                                <StarIcon />
                            </span>
                        ))}
                    </div>
                    <Link href={link!}>
                        <span className="text-xs text-qgray">{code}</span>
                        <p className="title mb-2 text-base font-semibold text-[#042460] line-clamp-2 hover:text-blue-600">{title}</p>
                    </Link>
                    <p className="price">
                        {/* <span className="main-price text-qgray line-through font-semibold text-[18px]">{priceOld}</span> */}
                        <span className="offer-price text-[#f76d24] font-semibold text-[18px]">{priceNew}</span>
                    </p>
                </div>

                <div className="product-card-add w-full h-10 px-[30px] flex space-x-4">
                    <button
                        type="button"
                        className="w-full h-full text-sm font-semibold bg-[#f76d24] text-white rounded-md"
                        onClick={onOpenModal}>
                        <div className="flex items-center justify-center space-x-3">
                            <span>
                                <BagIcon width={20} height={20} fill="#fff" />
                            </span>
                            <span>Agregar</span>
                        </div>
                    </button>

                    <button
                        type="button"
                        className="w-[60px] h-full flex justify-center items-center border border-[#042460] bg-[#042460] rounded-md">
                        <span>
                            <HeartIcon width={24} fill="white" />
                        </span>
                    </button>
                </div>

                {/* <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-20  transition-all duration-300 ease-in-out">
                    <a href="#">
                        <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                            <ExpandIcon />
                        </span>
                    </a>
                    <a href="#">
                        <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                            <HeartIcon />
                        </span>
                    </a>
                    <a href="#">
                        <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                            <CompareIcon />
                        </span>
                    </a>
                </div> */}
            </div>
        </div>
    );
}

export default ProductCard;