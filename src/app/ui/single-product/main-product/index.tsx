'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HeartIcon } from "../../component/icons";
import Tab from "./component/tab";
import { CartItemModel, ProductModel } from "@/app/lib/definitions";
import { isEmpty, numberFormat } from "@/helper/util";
import { CheckCircleIcon, MinusCircleIcon } from "@heroicons/react/20/solid";
import { useAppDispatch } from "@/app/lib/hooks";
import { addToCart } from "@/app/lib/features/shoppingCardSlice";

const MainProduct: React.FC<ProductModel> = (product) => {
    const dispatch = useAppDispatch();

    const [mounted, setMounted] = useState<boolean>(false);
    const [nameImage, setNameImage] = useState<string>("/assets/noimage.jpg");
    const [widthImage, setWidthImage] = useState<number>(512);
    const [heightImage, setHeightImage] = useState<number>(315);

    const [color, setColor] = useState<string>('');
    const [validColor, setValidColor] = useState<boolean>(false);
    const [size, setSize] = useState<string>('');
    const [validSize, setValidSize] = useState<boolean>(false);
    const [flavor, setFlavor] = useState<string>('');
    const [validFlavor, setValidFlavor] = useState<boolean>(false);

    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        if (product.imagenes.length !== 0) {
            setNameImage(product.imagenes[0].nombre);
            setWidthImage(product.imagenes[0].ancho);
            setHeightImage(product.imagenes[0].alto);
        }

        setMounted(true);
    }, [product]);

    const handleSelectColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setColor(value);
        if (!isEmpty(value)) {
            setValidColor(false);
        }
    }

    const handleSelectSize = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSize(value);
        if (!isEmpty(value)) {
            setValidSize(false);
        }
    }

    const handleSelectFlavor = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setFlavor(value);
        if (!isEmpty(value)) {
            setValidFlavor(false);
        }
    }

    const handleMinusQuantity = () => {
        if (quantity <= 1) {
            return;
        }

        setQuantity(quantity => quantity - 1);
    };

    const handlePlusQuantity = () => {
        setQuantity(quantity => quantity + 1);
    };

    const handleAddToCart = () => {
        if (product.colores.length !== 0 && color === '') {
            setValidColor(true)
            return
        }

        if (product.tallas.length !== 0 && size === '') {
            setValidSize(true)
            return
        }

        if (product.sabores.length !== 0 && flavor === '') {
            setValidFlavor(true)
            return
        }

        const cartItem: CartItemModel = {
            producto: product,
            cantidad: quantity,
            subTotal: 0,
            colorSeleccionado: product.colores.find((item) => item.idAtributo === color) ?? null,
            tallaSeleccionada: product.tallas.find((item) => item.idAtributo === size) ?? null,
            saborSeleccionado: product.sabores.find((item) => item.idAtributo === flavor) ?? null
        }
        dispatch(addToCart({ cartItem }));
    };

    if (!mounted) {
        return null;
    }

    return (
        <React.Fragment>
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
                                        <Image
                                            src={nameImage}
                                            alt="imagen"
                                            className="object-contain"
                                            width={widthImage}
                                            height={heightImage}
                                            priority={true} />
                                        {/* <div className="w-[80px] h-[80px] rounded-full bg-qyellow text-qblack flex justify-center items-center text-xl font-medium absolute left-[30px] top-[30px]">
                                            <span>-50%</span>
                                        </div> */}
                                    </div>
                                    <div className="flex gap-2 flex-wrap">
                                        {
                                            product.imagenes.map((imagen, index) => {
                                                return (
                                                    <div key={index} className="w-[140px] h-[140px] p-[15px] border border-qgray-border cursor-pointer"
                                                        onClick={() => {
                                                            setNameImage(imagen.nombre);
                                                            setWidthImage(imagen.ancho);
                                                            setHeightImage(imagen.alto);
                                                        }}>

                                                        <Image src={imagen.nombre} alt="" width={385} height={385} className={`w-full h-full object-contain ${imagen.nombre === nameImage ? '' : 'opacity-50'}`} priority={true} />
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="product-details w-full mt-10 lg:mt-0">
                                    <span data-aos="fade-up" className="text-qgray text-xs font-normal uppercase tracking-wider mb-2 inline-block">{product.codigo}</span>
                                    <p data-aos="fade-up" className="text-xl font-medium text-qblack mb-4">{product.nombre}</p>
                                    {/* <div data-aos="fade-up" className="flex space-x-[10px] items-center mb-6">
                                        <div className="flex">
                                            <StarIcon width={18} color="#FFA800" />
                                            <StarIcon width={18} color="#FFA800" />
                                            <StarIcon width={18} color="#FFA800" />
                                            <StarIcon width={18} color="#FFA800" />
                                            <StarIcon width={18} color="#FFA800" />
                                            <StarIcon width={18} color="#FFA800" />
                                        </div>
                                        <span className="text-[13px] font-normal text-qblack">6 Reviews</span>
                                    </div> */}
                                    <div data-aos="fade-up" className="flex space-x-2 items-center mb-7">
                                        <span className="text-sm font-500 text-qgray line-through mt-2">{numberFormat(((product.precio * 0.10) + product.precio))}</span>
                                        <span className="text-2xl font-500 text-qred">{numberFormat(product.precio)}</span>
                                    </div>
                                    <p data-aos="fade-up" className="text-qgray text-sm text-normal mb-[30px] leading-7">{product.descripcionCorta}</p>

                                    {product.colores.length !== 0 && (<div data-aos="fade-up" className="colors mb-[30px]">
                                        <span className="text-sm font-normal uppercase text-qgray mb-[14px] inline-block">COLOR</span>
                                        <ul className="grid w-full gap-6 md:grid-cols-2 mb-3">
                                            {
                                                product.colores.map((item, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <input
                                                                type="radio"
                                                                id={item.idAtributo}
                                                                name="rbColor"
                                                                value={item.idAtributo}
                                                                className="hidden peer"
                                                                checked={item.idAtributo === color}
                                                                onChange={handleSelectColor}
                                                            />
                                                            <label htmlFor={item.idAtributo} className="inline-flex items-center justify-between w-full p-3 text-gray-600 bg-white border border-gray-300 cursor-pointer  peer-checked:border-qyellow peer-checked:text-qyellow hover:text-gray-500 hover:bg-gray-100 dark:hover:text-gray-300 dark:border-qyellow dark:peer-checked:text-qyellow dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                                <div className="block">
                                                                    <div className="w-full text-sm font-semibold">{item.valor}</div>
                                                                    <div className="w-full text-xs text-black">{item.nombre}</div>
                                                                </div>
                                                                {
                                                                    item.idAtributo === color
                                                                        ? <CheckCircleIcon width={32} height={32} />
                                                                        : <MinusCircleIcon width={32} height={32} />
                                                                }
                                                            </label>
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
                                        {validColor && <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 relative" role="alert">
                                            <strong className="font-bold text-sm">¡Atención! </strong>
                                            <span className="block sm:inline text-sm">Completa este campo para continuar.</span>
                                        </div>}
                                        {/* <div className="flex space-x-4 items-center">
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
                                        </div> */}
                                    </div>)}

                                    {product.tallas.length !== 0 && (<div data-aos="fade-up" className="colors mb-[30px]">
                                        <span className="text-sm font-normal uppercase text-qgray mb-[14px] inline-block">SIZES</span>
                                        <ul className="grid w-full gap-6 md:grid-cols-2 mb-3">
                                            {
                                                product.tallas.map((item, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <input
                                                                type="radio"
                                                                id={item.idAtributo}
                                                                name="rbSizes"
                                                                value={item.idAtributo}
                                                                className="hidden peer"
                                                                checked={item.idAtributo === size}
                                                                onChange={handleSelectSize}
                                                            />
                                                            <label htmlFor={item.idAtributo} className="inline-flex items-center justify-between w-full p-3 text-gray-600 bg-white border border-gray-300 cursor-pointer  peer-checked:border-qyellow peer-checked:text-qyellow hover:text-gray-500 hover:bg-gray-100 dark:hover:text-gray-300 dark:border-qyellow dark:peer-checked:text-qyellow dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                                <div className="block">
                                                                    <div className="w-full text-sm font-semibold">{item.valor}</div>
                                                                    <div className="w-full text-xs text-black">{item.nombre}</div>
                                                                </div>
                                                                {
                                                                    item.idAtributo === size
                                                                        ? <CheckCircleIcon width={32} height={32} />
                                                                        : <MinusCircleIcon width={32} height={32} />
                                                                }
                                                            </label>
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
                                        {validSize && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 relative" role="alert">
                                            <strong className="font-bold text-sm">¡Atención! </strong>
                                            <span className="block sm:inline text-sm">Completa este campo para continuar.</span>
                                        </div>}
                                    </div>)}

                                    {product.sabores.length !== 0 && (<div data-aos="fade-up" className="colors mb-[30px]">
                                        <span className="text-sm font-normal uppercase text-qgray mb-[14px] inline-block">FLAVORS</span>
                                        <ul className="grid w-full gap-6 md:grid-cols-2 mb-3">
                                            {
                                                product.sabores.map((item, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <input
                                                                type="radio"
                                                                id={item.idAtributo}
                                                                name="rbFlavors"
                                                                value={item.idAtributo}
                                                                className="hidden peer"
                                                                checked={item.idAtributo === flavor}
                                                                onChange={handleSelectFlavor}
                                                            />
                                                            <label htmlFor={item.idAtributo} className="inline-flex items-center justify-between w-full p-3 text-gray-600 bg-white border border-gray-300 cursor-pointer  peer-checked:border-qyellow peer-checked:text-qyellow hover:text-gray-500 hover:bg-gray-100 dark:hover:text-gray-300 dark:border-qyellow dark:peer-checked:text-qyellow dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                                <div className="block">
                                                                    <div className="w-full text-sm font-semibold">{item.valor}</div>
                                                                    <div className="w-full text-xs text-black">{item.nombre}</div>
                                                                </div>
                                                                {
                                                                    item.idAtributo === flavor
                                                                        ? <CheckCircleIcon width={32} height={32} color="text-blue-600" />
                                                                        : <MinusCircleIcon width={32} height={32} />
                                                                }
                                                            </label>
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
                                        {validFlavor && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 relative" role="alert">
                                            <strong className="font-bold text-sm">¡Atención! </strong>
                                            <span className="block sm:inline text-sm">Completa este campo para continuar.</span>
                                        </div>}
                                    </div>)}

                                    {/* <Select /> */}

                                    <div data-aos="fade-up" className="quantity-card-wrapper w-full flex items-center h-[50px] space-x-[10px] mb-[30px]">
                                        <div className="w-[120px] h-full px-[26px] flex items-center border border-qgray-border">
                                            <div className="flex justify-between items-center w-full">
                                                <button
                                                    type="button"
                                                    className="text-base text-qgray"
                                                    onClick={handleMinusQuantity}>-</button>
                                                <span className="text-qblack">{quantity}</span>
                                                <button
                                                    type="button"
                                                    className="text-base text-qgray"
                                                    onClick={handlePlusQuantity}>+</button>
                                            </div>
                                        </div>
                                        <div className="w-[60px] h-full flex justify-center items-center border border-qgray-border">
                                            <button type="button">
                                                <span>
                                                    <HeartIcon width={24} color="#D5D5D5" />
                                                </span>
                                            </button>
                                        </div>
                                        <div className="flex-1 h-full">
                                            <button type="button" className="bg-black text-white text-sm font-semibold w-full h-full" onClick={handleAddToCart}>Agregar al carrito</button>
                                        </div>
                                    </div>
                                    <div data-aos="fade-up" className="mb-[20px]">
                                        <p className="text-[13px] text-qgray leading-7"><span className="text-qblack">Category :</span> {product.categoria.nombre}</p>
                                        <p className="text-[13px] text-qgray leading-7"><span className="text-qblack">Brand:</span> {product.marca && product.marca.nombre}</p>
                                        {/* <p className="text-[13px] text-qgray leading-7"><span className="text-qblack">SKU:</span> KE-91039</p> */}
                                    </div>
                                    {/* <div data-aos="fade-up" className="flex space-x-2 items-center mb-[20px]">
                                        <span>
                                            <FlagIcon width={15} color="#EB5757" />
                                        </span>
                                        <button type="button" className="text-qred font-semibold text-[13px]">Report This Item</button>
                                    </div> */}
                                    {/* <div data-aos="fade-up" className="social-share flex items-center w-full">
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
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Tab {...product} />
        </React.Fragment>
    );
}

export default MainProduct;