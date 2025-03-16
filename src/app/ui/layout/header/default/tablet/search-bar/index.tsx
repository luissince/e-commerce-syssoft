'use client'
import Link from "next/link";
import { CloseIcon, HeartIcon, UserIcon } from "@/app/ui/component/default/icons";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { searchAction } from "@/app/lib/actions";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks/storeHooks";
import { removeFromCart, selectCart } from "@/app/lib/store/slices/shoppingCardSlice";
import { CartModel, CompanyModel } from "@/app/lib/definitions";
import { formatDecimal, rounded } from "@/helper/util";
import { BsBag } from "react-icons/bs";

const CartWrapper: React.FC<CartModel> = (cart) => {
    const dispatch = useAppDispatch();
    const [isHovered, setIsHovered] = useState(false);
    const { resolvedTheme } = useTheme();

    return (
        <div className="cart-wrapper group relative py-4">
            <div className="cart relative cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <Link rel="noopener noreferrer" href="/cart">
                    <span>
                        <BsBag fill={resolvedTheme === 'light' ? "#000" : "#fff"} size={22} />
                    </span>
                </Link>
                <span className="w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow">{cart.items.length}</span>
            </div>
            <div className={`w-[300px] bg-white border-t-[3px] border-[#FFBB38] cart-wrapper ${isHovered ? 'block' : 'hidden'} absolute -right-[45px] top-11 z-50 group-hover:block shadow-2xl`}>
                <div className="w-full h-full">
                    <div className="product-items h-[310px] overflow-y-auto">
                        <ul>
                            {cart.items.map((item, key) => (
                                <li key={key} className="w-full h-full flex">
                                    <div className="flex flex-1 space-x-[6px] justify-center items-center px-4 my-[20px]">
                                        <div className="w-[65px] h-full">
                                            <Image
                                                src={item.producto.imagen ?? "/assets/noimage.jpg"}
                                                alt={item.producto.nombre}
                                                className="w-full h-full object-contain"
                                                width={65}
                                                height={65} />
                                        </div>
                                        <div className="flex-1 h-full flex flex-col justify-center">
                                            <p className="title mb-2 text-[13px] font-semibold text-qblack leading-4 line-clamp-2 hover:text-blue-600">{item.producto.nombre}</p>
                                            <p className="price"><span className="offer-price text-qred font-semibold text-[15px] ml-2">S/ {rounded(item.producto.precio)} x {item.cantidad}</span></p>
                                        </div>
                                    </div>
                                    <button className="mt-[20px] mr-[15px] inline-flex cursor-pointer"
                                        onClick={() => {
                                            dispatch(removeFromCart({
                                                idProducto: item.producto.idProducto
                                            }));
                                        }}>
                                        <CloseIcon />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full px-4 mt-[20px] mb-[12px]">
                        <div className="h-[1px] bg-[#F0F1F3]"></div>
                    </div>
                    <div className="product-actions px-4 mb-[30px]">
                        <div className="total-equation flex justify-between items-center mb-[28px]">
                            <span className="text-[15px] font-medium text-qblack">Sub Total</span>
                            <span className="text-[15px] font-medium text-qred">S/ {formatDecimal(cart.totalPrecio)}</span>
                        </div>
                        <div className="product-action-btn">
                            <Link href="/cart">
                                <div className="w-full h-[50px] mb-[10px] flex items-center justify-center bg-gray-200 text-sm font-semibold">
                                    <span>Mostrar Carrito</span>
                                </div>
                            </Link>
                            <Link href="/checkout">
                                <div className="w-full h-[50px]">
                                    <div className="w-full h-full flex items-center justify-center text-sm font-semibold bg-search-btn text-black">
                                        <span className="text-sm">Checkout Ahora</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full px-4 mt-[20px]">
                        <div className="h-[1px] bg-[#F0F1F3]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function SearchBar(company: CompanyModel) {
    const cart = useAppSelector(selectCart);
    const [mounted, setMounted] = useState<boolean>(false);
    const { resolvedTheme } = useTheme();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSearch = useDebouncedCallback((search: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (search) {
            params.set('query', search);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    if (!mounted) {
        return null;
    }

    return (
        <div className="w-full bg-white dark:bg-black lg:block hidden py-5">
            <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                <div className="flex justify-between items-center">
                    <div className="relative flex items-center">
                        <Link href={"/"} className="cursor-pointer">
                            <Image
                                src={company.rutaImage ?? "/assets/logo.svg"}
                                alt={company.nombreEmpresa ?? "logo"}
                                width="152" 
                                height="36"
                                priority
                            />
                        </Link>
                    </div>

                    <form action={searchAction} className="w-full max-w-lg h-[44px]">
                        <div className="w-full h-full flex items-center border border-gray-300">
                            <div className="flex-1 h-full">
                                <div className="h-full">
                                    <input
                                        type="text"
                                        name="search"
                                        className="search-input border-0 outline-none text-[#000] dark:text-[#fff] w-full h-full p-5 font-normal text-sm bg-white dark:bg-black"
                                        placeholder="Buscar producto..."
                                        onChange={(event) => handleSearch(event.target.value)}
                                        defaultValue={searchParams.get('query')?.toString()}
                                    />
                                </div>
                            </div>
                            <button
                                className="w-[93px] h-full text-sm font-semibold bg-search-btn text-black"
                                type="submit"
                            >
                                Buscar
                            </button>
                        </div>
                    </form>

                    <div className="flex space-x-6 items-center">
                        <div className="relative">
                            <Link rel="noopener noreferrer" href="/wishlist">
                                <span>
                                    <HeartIcon fill={resolvedTheme === 'light' ? "#000" : "#fff"} />
                                </span>
                            </Link>
                            <span className="w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow">1</span>
                        </div>

                        <CartWrapper {...cart} />

                        <div>
                            <Link rel="noopener noreferrer" href="/profile#dashboard">
                                <span>
                                    <UserIcon fill={resolvedTheme === 'light' ? "#000" : "#fff"} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
