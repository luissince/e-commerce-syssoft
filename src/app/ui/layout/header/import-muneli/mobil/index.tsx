'use client'
import { CompanyModel } from "@/app/lib/definitions";
import { useAppSelector } from "@/app/lib/hooks/storeHooks";
import { selectCart } from "@/app/lib/store/slices/shoppingCardSlice";
import { CloseIcon } from "@/app/ui/component/default/icons";
import { HomeModernIcon, ShoppingBagIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosArrowForward, IoIosBusiness } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
import TopBar from "../tablet/top-bar";
import images from "@/app/lib/config/images";
import Container from "@/app/ui/component/import-muneli/container";

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
                        <div className=" flex justify-between items-center px-5 h-12 bg-white  transition-all duration-300 ease-in-out cursor-pointer">
                            {/*  */}
                            <div className="flex items-center space-x-6">
                                <span>
                                    {icon}
                                </span>
                                <span className="text-sm text-[#042460] font-bold">{label}</span>
                            </div>
                        </div>
                    </Link>
                )
            }

            {
                type === "button" && (
                    <>
                        <button onClick={toggleSubmenu} className="w-full">
                            <div className=" flex justify-between items-center px-5 h-12 bg-white  transition-all duration-300 ease-in-out cursor-pointer">
                                {/*  */}
                                <div className="flex items-center space-x-6">
                                    <span>
                                        {icon}
                                    </span>
                                    <span className="text-sm text-[#042460] font-bold">{label}</span>
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

const HeaderMuneliMobil = (company: CompanyModel) => {
    const cart = useAppSelector(selectCart);
    const [mounted, setMounted] = useState<boolean>(false);

    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <div className="lg:hidden block w-full bg-white">
                <TopBar />

                <Container>
                    <div className="w-full h-full flex justify-between items-center py-4">
                        <button
                            className="relative px-6 flex items-center space-x-2 bg-[#f76d24] text-white h-12 border rounded-md"
                            onClick={() => setIsClicked(true)}>
                            <HiOutlineMenu size={24} color="#ffffff" />
                        </button>

                        <div className="relative flex items-center h-full">
                            <Link href={"/"} className="cursor-pointer">
                                <Image
                                    src={company.rutaImage ?? images["import-muneli"].logo}
                                    alt={company.nombreEmpresa ?? "logo"}
                                    width={132}
                                    height={36}
                                    priority
                                />
                            </Link>
                        </div>

                        <Link href="/cart"
                            className="relative px-6 flex items-center space-x-2 bg-[#f76d24] text-white h-12 border rounded-md"
                        >
                            <ShoppingBagIcon width={18} height={18} />
                            <span className="text-sm font-semibold">Carrito</span>
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {cart.totalItems}
                            </span>
                        </Link>
                    </div>
                </Container>
            </div>

            <div className={`drawer-wrapper lg:hidden block w-full  h-full relative ${isClicked ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="w-full h-screen bg-black bg-opacity-40 z-40 left-0 top-0 fixed cursor-pointer" onClick={() => setIsClicked(false)}></div>
                <div className="w-[280px] transition-all duration-300 ease-in-out h-screen overflow-y-auto overflow-x-hidden overflow-style-none bg-white fixed left-0 top-0 z-50">

                    <div className="w-full px-5 mt-5 mb-4">
                        <div className="flex justify-between items-center">
                            <button className="relative px-3 flex items-center space-x-2 bg-[#f76d24] text-white h-12 border rounded-md">
                                <FaHeart width={18} height={18} color="#fff" />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {cart.totalItems}
                                </span>
                            </button>

                            <button className="text-white border-0 rounded-md"
                                onClick={() => setIsClicked(false)}>
                                <CloseIcon width={20} height={20} color="#fff" />
                            </button>
                        </div>
                    </div>

                    <div className="category-item mt-5 w-full">
                        <ul className="categories-list">

                            <MenuItem label={"Inicio"} href="/" icon={<HomeModernIcon width={22} height={22} color="#f76d24" />} />

                            <MenuItem label={"Tienda"} href="/all-products" icon={<FaShoppingCart size={22} color="#f76d24" />} />

                            <MenuItem type="button" label={"Páginas"} icon={<IoDocumentText size={22} color="#f76d24" />}>
                                <MenuItem label={"Politica de Privacidad"} href="/privacy-policy" icon={<FiMinus size={22} color="#f76d24" />} />
                                <MenuItem label={"Terminos y Condiciones"} href="/terms-condition" icon={<FiMinus size={22} color="#f76d24" />} />
                            </MenuItem>


                            <MenuItem label={"Acerca de"} href="/about" icon={<IoIosBusiness size={22} color="#f76d24" />} />

                            <MenuItem label={"Contacto"} href="/contact" icon={<RiContactsBook2Fill size={22} color="#f76d24" />} />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderMuneliMobil;