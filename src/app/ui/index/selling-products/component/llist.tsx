'use client'

import { ProductModel } from "@/app/lib/definitions";
import { BagIcon } from "@/app/ui/component/icons";
import ProductoModal from "@/app/ui/component/modal/product-modal";
import { numberFormat } from "@/helper/util";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

function Product({ codigo, nombre, imagen, precio }: ProductModel) {
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
        <div className="item w-full">

            <ProductoModal
                isOpen={isOpen}
                code={codigo}
                onClose={onCloseModal}
            />

            <div
                data-aos="fade-left"
                className="product-row-card-style-one w-full h-[250px] bg-white group relative overflow-hidden"
            >
                <div className="flex space-x-5 items-center w-full h-full lg:p-[30px] sm:p-5 p-2">
                    <div className="lg:w-1/2 w-1/3 h-full">
                        <Image
                            src={!imagen ? "/assets/noimage.jpg" : imagen}
                            width={255}
                            height={190}
                            alt={nombre}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="flex-1 flex flex-col justify-center h-full">
                        <div>
                            <div className="flex space-x-1 mb-3">
                                <FaStar color="#FFA800" size={18} />
                                <FaStar color="#FFA800" size={18} />
                                <FaStar color="#FFA800" size={18} />
                                <FaStar color="#FFA800" size={18} />
                                <FaStar color="#FFA800" size={18} />
                            </div>
                            <a href={`/single-product/${codigo}`} >
                                <p className="title mb-2 sm:text-[15px] text-[13px] font-semibold text-qblack leading-[24px] line-clamp-2 hover:text-blue-600">
                                    {nombre}
                                </p>
                            </a>
                            <p className="price mb-[26px]">
                                <span className="main-price text-qgray line-through font-semibold sm:text-[18px] text-base">
                                    {numberFormat(((precio * 0.10) + precio))}
                                </span>
                                <span className="offer-price text-qred font-semibold sm:text-[18px] text-base ml-2">
                                    {numberFormat(precio)}
                                </span>
                            </p>
                            <div className="product-card-add w-full h-10">
                                <button type="button"
                                    className="w-full h-full text-sm font-semibold bg-search-btn text-black"
                                    onClick={onOpenModal}
                                >
                                    <div className="flex items-center justify-center space-x-3">
                                        <BagIcon />
                                        <span>Agregar al carrito</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-[30px]  transition-all duration-300 ease-in-out">
                    <a href="#">
                        <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                            <IoExpand color="#000000" size={24} />
                        </span>
                    </a>
                    <a href="#">
                        <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                            <IoMdHeartEmpty color="#000000" size={24} />
                        </span>
                    </a>
                    <a href="#">
                        <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                            <TfiReload color="#000000" size={24} />
                        </span>
                    </a>
                </div> */}
            </div>
        </div>
    );
}

export default Product;