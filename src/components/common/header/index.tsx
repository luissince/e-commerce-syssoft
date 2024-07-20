'use client'
import { BagIcon, ChevronDownIcon, CloseIcon, CompareIcon, HeartIcon, UserIcon } from "@/src/helper/icons";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface SubMenuProps {
    label: string;
    href: string;
}

const SubMenuItem: React.FC<SubMenuProps> = ({ label, href }) => {
    return (
        <li >
            <Link href={href}>
                <span className="text-qgray text-sm font-normal border-b border-transparent hover:text-qyellow hover:border-qyellow">
                    {label}
                </span>
            </Link>
        </li>
    );
}

interface MenuItemProps {
    label: string;
    href?: string;
    children?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    if (React.Children.count(children) === 0) {
        return (
            <li className="py-[20px]">
                <Link href={href!}>
                    <span className="flex items-center text-sm font-semibold cursor-pointer">
                        <span>{label}</span>
                    </span>
                </Link>
            </li>
        );
    }

    return (
        <li className="relative py-[20px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <span className="flex items-center text-sm font-semibold cursor-pointer text-black">
                <span>{label}</span>
                <span className="ml-1.5 ">
                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" className="fill-current" xmlns="http://www.w3.org/2000/svg"
                    ><rect x="9.18359" y="0.90918" width="5.78538" height="1.28564" transform="rotate(135 9.18359 0.90918)"></rect>
                        <rect x="5.08984" y="5" width="5.78538" height="1.28564" transform="rotate(-135 5.08984 5)"></rect>
                    </svg>
                </span>
            </span>
            <div
                className={`sub-menu w-[220px] absolute left-0 top-[60px] ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'} pointer-events-auto transition-all duration-500 ease-in-out`}>
                <div className="w-full bg-white flex justify-between items-center shadow-xl">
                    <div className="categories-wrapper w-full h-full p-5">
                        <div>
                            <div className="category-items">
                                <ul className="flex flex-col space-y-2">
                                    {children}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

const Nav = () => {
    return (
        <div className="nav">
            <ul className="nav-wrapper flex xl:space-x-10 space-x-5">
                <MenuItem
                    label="Homepage"
                    href="/"
                >
                    {/* <SubMenuItem
                        label="Privacy Policy"
                        href="/privacy-policy"
                    />

                    <SubMenuItem
                        label="Terms and Conditions"
                        href="/terms-condition"
                    /> */}
                </MenuItem>

                <MenuItem
                    label="Shop"
                    href="/all-products"
                />

                <MenuItem
                    label="Pages"
                >
                    <SubMenuItem
                        label="Privacy Policy"
                        href="/privacy-policy"
                    />

                    <SubMenuItem
                        label="Terms and Conditions"
                        href="/terms-condition"
                    />

                    <SubMenuItem
                        label="FAQ"
                        href="/faq"
                    />

                    {/* <SubMenuItem
                        label="Shop Category Icon"
                        href="/shop-category-icon"
                    />

                    <SubMenuItem
                        label="Show List View"
                        href="/show-list-view"
                    /> */}
                </MenuItem>

                <MenuItem
                    label="About"
                    href="/about"
                />

                <MenuItem
                    label="Blog"
                    href="/blogs"
                />

                <MenuItem
                    label="Contact"
                    href="/contact"
                />
            </ul>
        </div>
    );
}

interface CategoryItem {
    title: string;
}

const CategoryItem: React.FC<CategoryItem> = ({ title }) => {
    return (
        <li className="category-item">
            <a>
                <div className="flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:bg-qyellow">
                    <div className="flex items-center space-x-6">
                        <span>
                            <svg className="fill-current" width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.911344 0.0514231C0.633547 0.132053 0.157324 0.565442 0.0722839 0.822452C-0.0240946 1.12481 -0.0240946 14.8132 0.0722839 15.1156C0.162993 15.3928 0.633547 15.811 0.94536 15.8917C1.10977 15.932 1.72773 15.9521 2.94663 15.9521H4.71546L4.85152 15.8262C5.03861 15.6649 5.03861 15.4331 4.85152 15.2718L4.71546 15.1458H2.9523H1.18914L1.05308 15.0199L0.911344 14.8989V8.85526V1.03914L1.05308 0.9182L1.18914 0.792214H5.90035H10.6116L10.7476 0.9182L10.8894 1.03914V8.85526V14.8989L10.7476 15.0199L10.6116 15.1458H8.8484H7.08524L6.94917 15.2718C6.76208 15.4331 6.76208 15.6649 6.94917 15.8262L7.08524 15.9521H8.85406C10.073 15.9521 10.6909 15.932 10.8553 15.8917C11.1842 15.806 11.6377 15.3877 11.7284 15.0955C11.7851 14.9191 11.7964 14.8673 11.7851 8.72423L11.7681 0.807333L11.598 0.560402C11.4903 0.409221 11.3202 0.258039 11.1501 0.16229L10.8723 0.0111084L5.99106 0.00102901C2.53844 -0.0040102 1.05308 0.0111074 0.911344 0.0514231Z"></path><path d="M1.96009 1.72447C1.86938 1.80006 1.81836 1.90588 1.81836 2.00163C1.81836 2.09738 1.86938 2.20321 1.96009 2.2788C2.09049 2.39975 2.13584 2.40479 2.72545 2.40479C3.31506 2.40479 3.36042 2.39975 3.49081 2.2788C3.58152 2.20321 3.63254 2.09738 3.63254 2.00163C3.63254 1.90588 3.58152 1.80006 3.49081 1.72447C3.36042 1.60352 3.31506 1.59848 2.72545 1.59848C2.13584 1.59848 2.09049 1.60352 1.96009 1.72447Z"></path><path d="M8.16214 1.66399C7.83899 1.76981 7.61221 1.93611 7.4478 2.19312C7.31174 2.3947 7.28906 2.48541 7.28906 2.81297C7.28906 3.15061 7.31174 3.22116 7.45914 3.44289C7.56686 3.59407 7.73694 3.74526 7.90702 3.84101C8.15647 3.97707 8.23584 3.99219 8.62135 3.99219C9.00687 3.99219 9.08624 3.97707 9.33569 3.84101C9.50577 3.74526 9.67585 3.59407 9.78357 3.44289C9.93664 3.22116 9.95364 3.15061 9.95364 2.80793C9.95364 2.46525 9.93664 2.3947 9.78357 2.17296C9.54545 1.83029 9.18829 1.64383 8.7234 1.61863C8.50797 1.60351 8.28686 1.62367 8.16214 1.66399ZM8.93317 2.53076C9.02388 2.60635 9.0749 2.71218 9.0749 2.80793C9.0749 2.90368 9.02388 3.0095 8.93317 3.0851C8.84813 3.16573 8.72907 3.21108 8.62135 3.21108C8.51364 3.21108 8.39458 3.16573 8.30954 3.0851C8.21883 3.0095 8.16781 2.90368 8.16781 2.80793C8.16781 2.71218 8.21883 2.60635 8.30954 2.53076C8.39458 2.45013 8.51364 2.40478 8.62135 2.40478C8.72907 2.40478 8.84813 2.45013 8.93317 2.53076Z"></path><path d="M1.96009 3.33677C1.86938 3.41236 1.81836 3.51819 1.81836 3.61394C1.81836 3.70969 1.86938 3.81551 1.96009 3.8911C2.09049 4.01205 2.13584 4.01709 2.72545 4.01709C3.31506 4.01709 3.36042 4.01205 3.49081 3.8911C3.58152 3.81551 3.63254 3.70969 3.63254 3.61394C3.63254 3.51819 3.58152 3.41236 3.49081 3.33677C3.36042 3.21583 3.31506 3.21079 2.72545 3.21079C2.13584 3.21079 2.09049 3.21583 1.96009 3.33677Z"></path><path d="M1.96009 4.94908C1.86938 5.02467 1.81836 5.13049 1.81836 5.22624C1.81836 5.32199 1.86938 5.42782 1.96009 5.50341C2.09049 5.62436 2.13584 5.62939 2.72545 5.62939C3.31506 5.62939 3.36042 5.62436 3.49081 5.50341C3.58152 5.42782 3.63254 5.32199 3.63254 5.22624C3.63254 5.13049 3.58152 5.02467 3.49081 4.94908C3.36042 4.82813 3.31506 4.82309 2.72545 4.82309C2.13584 4.82309 2.09049 4.82813 1.96009 4.94908Z"></path><path d="M1.96009 6.56187C1.86938 6.63746 1.81836 6.74329 1.81836 6.83904C1.81836 6.93478 1.86938 7.04061 1.96009 7.1162C2.09049 7.23715 2.13584 7.24219 2.72545 7.24219C3.31506 7.24219 3.36042 7.23715 3.49081 7.1162C3.58152 7.04061 3.63254 6.93478 3.63254 6.83904C3.63254 6.74329 3.58152 6.63746 3.49081 6.56187C3.36042 6.44092 3.31506 6.43588 2.72545 6.43588C2.13584 6.43588 2.09049 6.44092 1.96009 6.56187Z"></path><path d="M6.03052 7.19834C4.31271 8.72024 4.08594 8.94197 4.08594 9.07804C4.08594 9.17379 4.13696 9.28465 4.22767 9.37032L4.36373 9.50135H5.71303H7.05666L5.5713 10.8267C4.27303 11.9807 4.08594 12.1722 4.08594 12.3083C4.08594 12.5149 4.32405 12.7266 4.56216 12.7266C4.71523 12.7266 4.96468 12.5199 6.67682 10.998C8.80848 9.10324 8.79148 9.12339 8.47966 8.82607L8.3436 8.69504H6.9943H5.65067L7.13603 7.36968C8.42297 6.21566 8.6214 6.01912 8.6214 5.8881C8.6214 5.68148 8.38328 5.46983 8.14517 5.46983C7.9921 5.46983 7.74265 5.6714 6.03052 7.19834Z"></path><path d="M5.589 15.2714C5.49829 15.347 5.44727 15.4528 5.44727 15.5486C5.44727 15.6443 5.49829 15.7502 5.589 15.8257C5.8668 16.0777 6.35436 15.9013 6.35436 15.5486C6.35436 15.342 6.13325 15.1454 5.90081 15.1454C5.79309 15.1454 5.67404 15.1908 5.589 15.2714Z"></path>
                            </svg>
                        </span>
                        <span className="text-xs font-400">{title}</span>
                    </div>

                    <div>
                        <span>
                            <svg className="fill-current" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.49805" y="0.818359" width="5.78538" height="1.28564" transform="rotate(45 1.49805 0.818359)"></rect><rect x="5.58984" y="4.90918" width="5.78538" height="1.28564" transform="rotate(135 5.58984 4.90918)">
                                </rect>
                            </svg>
                        </span>
                    </div>
                </div>
            </a>
        </li>
    );
}

const Category = () => {
    const [isClicked, setIsClicked] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsClicked(false);
            }
        };

        const rootElement = document.querySelector("#root") as HTMLDivElement;

        if (isClicked && rootElement) {
            rootElement.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            if (isClicked && rootElement) {
                rootElement.removeEventListener('mousedown', handleClickOutside);
            }
        };
    }, [isClicked])

    return (
        <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative" ref={dropdownRef}>
            <button
                type="button" className="w-full h-full flex justify-between items-center"
                onClick={() => setIsClicked(!isClicked)}>
                <div className="flex space-x-3 items-center">
                    <span>
                        <svg className="fill-current" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="14" height="1"></rect><rect y="8" width="14" height="1"></rect><rect y="4" width="10" height="1"></rect>
                        </svg>
                    </span>
                    <span className="text-sm font-semibold">All Categories</span>
                </div>
                <div>
                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                        <rect x="9.18359" y="0.90918" width="5.78538" height="1.28564" transform="rotate(135 9.18359 0.90918)"></rect>
                        <rect x="5.08984" y="5" width="5.78538" height="1.28564" transform="rotate(-135 5.08984 5)"></rect>
                    </svg>
                </div>
            </button>

            <div className={`category-dropdown w-full absolute left-0 top-[53px] overflow-hidden ${isClicked ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-500 ease-in-out shadow-xl`}>
                <ul className="categories-list">
                    <CategoryItem title={"Mobile & Laptops"} />
                    <CategoryItem title={"Gaming Entertainment"} />
                    <CategoryItem title={"Image & Video"} />
                    <CategoryItem title={"Vehicles"} />
                    <CategoryItem title={"Furnitures"} />
                    <CategoryItem title={"Sport"} />
                    <CategoryItem title={"Food & Drinks"} />
                    <CategoryItem title={"Fashion Accessories"} />
                    <CategoryItem title={"Toilet & Sanitation"} />
                    <CategoryItem title={"Makeup Corner"} />
                    <CategoryItem title={"Baby Items"} />
                </ul>
            </div>
        </div>
    );
}

const CartWrapper = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="cart-wrapper group relative py-4">
            <div className="cart relative cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <a rel="noopener noreferrer" href="/cart">
                    <span>
                        <BagIcon />
                    </span>
                </a>
                <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow">15</span>
            </div>
            <div className={`w-[300px] bg-white border-t-[3px] border-[#FFBB38] cart-wrappwer ${isHovered ? 'block' : 'hidden'}  absolute -right-[45px] top-11 z-50 group-hover:block shadow-2xl`}>
                <div className="w-full h-full">
                    <div className="product-items h-[310px] overflow-y-auto">
                        <ul>
                            {
                                Array.from({ length: 10 }).map((_, key) => (
                                    <li key={key} className="w-full h-full flex">
                                        <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                                            <div className="w-[65px] h-full">
                                                <Image
                                                    src="/assets/product-img-1.jpg"
                                                    alt=""
                                                    className="w-full h-full object-contain"
                                                    width={65}
                                                    height={65} />
                                            </div>
                                            <div className="flex-1 h-full flex flex-col justify-center ">
                                                <p className="title mb-2 text-[13px] font-semibold text-qblack leading-4 line-clamp-2 hover:text-blue-600">iPhone 12 Pro Max 128GB Golen colour</p>
                                                <p className="price"><span className="offer-price text-qred font-semibold text-[15px] ml-2">$38</span></p>
                                            </div>
                                        </div>
                                        <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer ">
                                            <CloseIcon />
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="w-full px-4 mt-[20px] mb-[12px]">
                        <div className="h-[1px] bg-[#F0F1F3]"></div>
                    </div>
                    <div className="product-actions px-4 mb-[30px]">
                        <div className="total-equation flex justify-between items-center mb-[28px]">
                            <span className="text-[15px] font-medium text-qblack">Subtotal</span>
                            <span className="text-[15px] font-medium text-qred ">$365</span>
                        </div>
                        <div className="product-action-btn">
                            <a href="#"><div className="gray-btn w-full h-[50px] mb-[10px]"><span>View Cart</span></div></a>
                            <a href="#"><div className="w-full h-[50px]"><div className="yellow-btn"><span className="text-sm">Checkout Now</span></div></div></a>
                        </div>
                    </div>
                    <div className="w-full px-4 mt-[20px]">
                        <div className="h-[1px] bg-[#F0F1F3]"></div>
                    </div>
                    <div className="flex justify-center py-[15px]">
                        <p className="text-[13px] font-500 text-qgray">Get Return within <span className="text-qblack">30 days</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface ItemListLeftProps {
    title: string;
    selected: string;
}

interface ItemHeaderLeftProps {
    title: string;
    image?: string | null;
    icon: React.ReactElement;
    list: ItemListLeftProps[];
}

const ItemHeaderLeft: React.FC<ItemHeaderLeftProps> = ({ title, image, list, icon }) => {

    const [openSize, setOpenSize] = useState<boolean>(false);
    const dropdownSizeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownSizeRef.current && !dropdownSizeRef.current.contains(event.target as Node)) {
                setOpenSize(false);
            }
        };

        const rootElement = document.querySelector("#root") as HTMLDivElement;

        if (openSize && rootElement) {
            rootElement.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            if (openSize && rootElement) {
                rootElement.removeEventListener('mousedown', handleClickOutside);
            }
        };
    }, [openSize])

    return (
        <div className="country-select flex space-x-1 items-center" ref={dropdownSizeRef}>
            <div>
                {image && <Image src={image}
                    width={22} height={22}
                    alt="country logo"
                    className="overflow-hidden rounded-full text-transparent" />}
            </div>
            <div className="my-select-box w-fit">
                <button type="button" className="my-select-box-btn"
                    onClick={() => setOpenSize(!openSize)}>
                    <span className="text-[#222222] text-xs font-medium">{title}</span>
                </button>
                <div className={`my-select-box-section left-auto right-0 w-[150px] ${openSize ? 'open' : ''}`} >
                    <ul className="list">
                        {list.map((item: ItemListLeftProps, index) => (
                            <li key={index} className={`${item.selected} text-xs`}>{item.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                {icon}
            </div>
        </div>
    );
}

export default function Header() {
    // let navegador = navigator.userAgent;
    // if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || window.innerWidth <= 780) {
    //     console.log("Toma Pop-Up, por entrar con un dispositivo móvil");
    // } else {
    //     console.log("No estás usando un móvil");
    // }


    return (
        <header className="header-section-wrapper relative">
            <div className="w-full bg-white h-10 border-b border-qgray-border">
                <div className="container max-w-screen-x mx-auto px-2 md:px-6 h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="">
                            <ul className="flex space-x-6">
                                <li>
                                    <span className={`text-xs leading-6 text-qblack font-medium`}>Account</span>
                                </li>
                                <Link href={"/tracking-order"}>
                                    <span className="text-xs leading-6 text-qblack font-medium">Track Order</span>
                                </Link>
                                <li>
                                    <span className="text-xs leading-6 text-qblack font-medium">Support</span>
                                </li>
                            </ul>
                        </div>

                        <div className="topbar-dropdowns sm:block hidden">
                            <div className="flex space-x-6">

                                <ItemHeaderLeft
                                    title={"United State"}
                                    image={"/assets/country-logo-16x16.png"}
                                    list={[
                                        {
                                            "title": "United State",
                                            "selected": "selected"
                                        },
                                        {
                                            "title": "Bangladesh",
                                            "selected": ""
                                        },
                                        {
                                            "title": "India",
                                            "selected": ""
                                        },
                                    ]}
                                    icon={<ChevronDownIcon width={10} height={5} />}
                                />
                                <ItemHeaderLeft
                                    title={"USD"}
                                    list={[
                                        {
                                            "title": "USD",
                                            "selected": "selected"
                                        },
                                        {
                                            "title": "BDT",
                                            "selected": ""
                                        },
                                    ]}
                                    icon={<ChevronDownIcon width={10} height={5} />}
                                />
                                <ItemHeaderLeft
                                    title={"Bangla"}
                                    list={[
                                        {
                                            "title": "Bangla",
                                            "selected": "selected"
                                        },
                                        {
                                            "title": "english",
                                            "selected": ""
                                        },
                                    ]}
                                    icon={<ChevronDownIcon width={10} height={5} />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[86px] bg-white lg:block hidden">
                <div className="container max-w-screen-x mx-auto md:px-6 h-full">
                    <div className="flex justify-between items-center h-full">
                        <Link href={"/"} className="cursor-pointer">
                            <Image width="152" height="36" src="/assets/logo.svg" alt="logo" priority={true} />
                        </Link>

                        <div className="w-[517px] h-[44px]">
                            <div className="w-full h-full flex items-center  border border-qgray-border bg-white search-com">
                                <div className="flex-1 bg-white h-full">
                                    <form action="#" className="h-full">
                                        <input type="text" className="search-input" placeholder="Search Product..." />
                                        {/* <input
                                            type="text"
                                            className="block w-full h-full flex-1 text-xs border-0 outline-0 bg-transparent pl-2 placeholder:text-gray-500  leading-4"
                                            placeholder="Search Product..." /> */}
                                    </form>
                                </div>
                                <div className="w-[1px] h-[22px] bg-qgray-border"></div>
                                <div className="flex-1 flex items-center px-4">
                                    <button type="button" className="w-full text-xs font-medium text-qgray flex justify-between items-center">
                                        <span className="text-gray-500 ">All Categories</span>
                                        <span>
                                            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="9.18359" y="0.90918" width="5.78538" height="1.28564" transform="rotate(135 9.18359 0.90918)" fill="#8E8E8E">
                                                </rect>
                                                <rect x="5.08984" y="5" width="5.78538" height="1.28564" transform="rotate(-135 5.08984 5)" fill="#8E8E8E">
                                                </rect>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <button className="w-[93px] h-full text-sm font-semibold bg-search-btn" type="button">Search</button>
                            </div>
                        </div>

                        <div className="flex space-x-6 items-center">
                            <div className=" relative">
                                <Link rel="noopener noreferrer" href="/products-compaire">
                                    <span>
                                        <CompareIcon />
                                    </span>
                                </Link>
                                <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow">2</span>
                            </div>
                            <div className=" relative">
                                <Link rel="noopener noreferrer" href="/wishlist">
                                    <span>
                                        <HeartIcon />
                                    </span>
                                </Link>
                                <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow">1</span>
                            </div>

                            <CartWrapper />

                            <div>
                                <Link rel="noopener noreferrer" href="/profile#dashboard">
                                    <span>
                                        <UserIcon />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:hidden block w-full h-[60px] bg-white">
                <div className="w-full h-full flex justify-between items-center px-5">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7"></path>
                        </svg>
                    </div>
                    <div>
                        <Image width="152" height="36" src="/assets/logo.svg" alt="logo" priority={true} />
                    </div>
                    <div className="relative cursor-pointer">
                        <Link rel="noopener noreferrer" href="/cart">
                            <span>
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.1568 5.1772C16.0284 4.84626 15.7343 4.81766 14.2887 4.81766H13.0875V4.2947C13.0875 3.48165 12.9716 2.91374 12.6899 2.32949C12.1804 1.2713 11.3272 0.531797 10.2213 0.188601C9.68279 0.0251747 8.87923 -0.0442816 8.39047 0.0292604C7.03602 0.241715 5.88039 1.09562 5.29223 2.31315C5.00642 2.90966 4.89045 3.48165 4.89045 4.2947V4.82175H3.68511C2.23954 4.82175 1.94546 4.85035 1.81705 5.19354C1.75078 5.41008 1.12948 10.0637 0.864385 12.0697C0.632431 13.8184 0.417045 15.469 0.259648 16.711C-0.0137267 18.8519 -0.00544266 18.8846 0.00284141 18.9214V18.9255C0.0401198 19.0644 0.408761 19.428 0.520596 19.5342L1.00521 20H16.9438L17.3041 19.6854C17.4657 19.5424 18 19.0562 18 18.8152C18 18.6517 16.1899 5.27117 16.1568 5.1772ZM16.6911 18.5046C16.687 18.5332 16.6538 18.619 16.5958 18.6803L16.513 18.7702H1.46498L1.2496 18.5414L2.09871 12.2863C2.39694 10.0596 2.66203 8.11888 2.81943 6.95855C2.88984 6.45193 2.92298 6.19453 2.93955 6.06788C3.49872 6.06379 5.94252 6.0597 8.98278 6.0597H15.0302L15.0384 6.10465C15.1047 6.4315 16.6621 18.141 16.6911 18.5046ZM6.1372 4.82175V4.35598C6.1372 4.04139 6.17862 3.6083 6.22418 3.40811C6.46856 2.38669 7.30111 1.5573 8.34076 1.29173C8.77568 1.1855 9.48811 1.22228 9.92303 1.37753H9.92717C10.3828 1.5287 10.7556 1.77384 11.0994 2.14972C11.6544 2.74623 11.8408 3.28145 11.8408 4.27018V4.82175H6.1372Z" fill="black"></path>
                                </svg>
                            </span>
                        </Link>
                        <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow text-qblack">15</span>
                    </div>
                </div>
            </div>

            <div className="w-full h-[60px] relative z-30 bg-qyellow lg:block hidden">
                <div className="container max-w-screen-x mx-auto md:px-6 h-full">
                    <div className="w-full h-full relative">
                        <div className="w-full h-full flex justify-between items-center">
                            <div className="category-and-nav flex xl:space-x-7 space-x-3 items-center">
                                <Category />
                                <Nav />
                            </div>

                            <Link href={"/become-saller"}>
                                <div className="black-btn w-[161px] h-[40px] flex justify-center items-center cursor-pointer">
                                    <div className="flex space-x-2 items-center">
                                        <span className="text-sm font-semibold">Become a Seller</span>
                                        <span>
                                            <svg className="fill-current" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1.08984" width="6.94106" height="1.54246" transform="rotate(45 1.08984 0)" fill="white"></rect><rect x="6" y="4.9082" width="6.94106" height="1.54246" transform="rotate(135 6 4.9082)" fill="white"></rect>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </header>
    );
}
