'use client'
import { CompanyModel } from "@/app/lib/definitions";
import { HeartIcon } from "@/app/ui/component/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsBag } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosArrowForward, IoIosBusiness, IoIosCloseCircle } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";

interface MenuItemProps {
    type?: "link" | "button";
    label: string;
    href?: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ type = "link", label, href, icon, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubmenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className="category-item">
            {
                type === "link" && (
                    <Link href={href!}>
                        <div className=" flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                            {/*  */}
                            <div className="flex items-center space-x-6">
                                <span>
                                    {icon}
                                </span>
                                <span className="text-sm font-400">{label}</span>
                            </div>
                        </div>
                    </Link>
                )
            }

            {
                type === "button" && (
                    <>
                        <button onClick={toggleSubmenu} className="w-full">
                            <div className=" flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                                {/*  */}
                                <div className="flex items-center space-x-6">
                                    <span>
                                        {icon}
                                    </span>
                                    <span className="text-sm font-400">{label}</span>
                                </div>

                                {/*  */}
                                <div>
                                    <span>
                                        <IoIosArrowForward
                                            color="#000000"
                                            size={18}
                                            className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                                        />
                                    </span>
                                </div>
                            </div>
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <ul>
                                {children}
                            </ul>
                        </div>
                    </>
                )
            }
        </li>
    );
}

const QuomodoShopDrawer = (company: CompanyModel) => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
            <div className="lg:hidden block w-full bg-white dark:bg-black">
                <div className="w-full h-full flex justify-between items-center p-5">
                    <button className="" onClick={() => setIsClicked(true)}>
                        <HiOutlineMenu size={24} />
                    </button>

                    <div className="relative flex items-center h-full">
                        <div className="relative w-[152px] h-[48px]">
                            <Image
                                src={company.rutaImage ?? "/assets/logo.svg"}
                                alt={company.nombreEmpresa ?? "logo"}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    <div className="relative cursor-pointer">
                        <Link rel="noopener noreferrer" href="/cart">
                            <BsBag size={20} />
                        </Link>
                        <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow text-qblack">15</span>
                    </div>
                </div>
            </div>


            {/* Drawer Mobile */}
            <div className={`drawer-wrapper w-full  h-full relative ${isClicked ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="w-full h-screen bg-black bg-opacity-40 z-40 left-0 top-0 fixed cursor-pointer" onClick={() => setIsClicked(false)}></div>
                <div className="w-[280px] transition-all duration-300 ease-in-out h-screen overflow-y-auto overflow-x-hidden overflow-style-none bg-white fixed left-0 top-0 z-50">

                    {/* Drawer Header */}
                    <div className="w-full px-5 mt-5 mb-4">
                        <div className="flex justify-between items-center">
                            {/*  */}
                            <div className="flex space-x-5 items-center">
                                <div className="favorite relative">
                                    <Link rel="noopener noreferrer" href="/wishlist">
                                        <span>
                                            <HeartIcon />
                                        </span>
                                    </Link>
                                    <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow">1</span>
                                </div>
                            </div>

                            {/*  */}
                            <button type="button" onClick={() => setIsClicked(false)}>
                                <IoIosCloseCircle size={38} fill="red" />
                            </button>
                        </div>
                    </div>

                    {/* Drawer Content */}
                    <div className="category-item mt-5 w-full">
                        <ul className="categories-list">

                            <MenuItem label={"Inicio"} href="/" icon={<MdHome />} />

                            <MenuItem label={"Tienda"} href="/all-products" icon={<FaShoppingCart />} />

                            <MenuItem type="button" label={"Páginas"} icon={<IoDocumentText />}>
                                <MenuItem label={"Politica de Privacidad"} href="/privacy-policy" icon={<FiMinus />} />
                                <MenuItem label={"Terminos y Condiciones"} href="/terms-condition" icon={<FiMinus />} />
                            </MenuItem>


                            <MenuItem label={"Acerca de"} href="/about" icon={<IoIosBusiness />} />

                            <MenuItem label={"Contacto"} href="/contact" icon={<RiContactsBook2Fill />} />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuomodoShopDrawer;