'use client'
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React, { useState } from "react";

export interface SubMenuProps {
    label: string;
    href: string;
}

export const SubMenuItem: React.FC<SubMenuProps> = ({ label, href }) => {
    return (
        <li className="w-full">
            <Link href={href}>
                <span className="text-[#042460] text-sm font-bold border-b border-transparent hover:border-[#f76d24] w-full block uppercase">
                    {label}
                </span>
            </Link>
        </li>
    );
}

export interface MenuItemProps {
    label: string;
    href?: string;
    children?: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({ label, href, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    if (React.Children.count(children) === 0) {
        return (
            <li className="flex-grow py-5">
                <Link href={href!}>
                    <span className="flex items-center text-sm font-bold cursor-pointer text-[#042460] w-full">
                        <span className="uppercase">{label}</span>
                    </span>
                </Link>
            </li>
        );
    }

    return (
        <li className="relative flex-grow py-5 z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <span className="flex items-center text-sm font-bold cursor-pointer text-[#042460] w-full">
                <span className="uppercase">{label}</span>
                <span className="ml-1.5">
                    <ChevronDownIcon width={20} fill="#000" />
                </span>
            </span>
            <div
                className={`sub-menu w-full absolute left-0 top-[60px] ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'} pointer-events-auto transition-all duration-500 ease-in-out`}>
                <div className="w-full bg-white flex justify-between items-center shadow-xl">
                    <div className="categories-wrapper w-full h-full p-5">
                        <div>
                            <div className="category-items">
                                <ul className="flex flex-col space-y-2 w-full">
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

function NavBar() {
    return (
        <div className="w-full bg-white border-t-[1px] border-[#f76d24]">
            <div className="container mx-auto px-2 md:px-6">
                <ul className="nav-wrapper flex w-full">
                    <MenuItem
                        label="Inicio"
                        href="/"
                    />

                    <MenuItem
                        label="Tienda"
                        href="/all-products"
                    />

                    <MenuItem
                        label="Páginas"
                    >
                        <SubMenuItem
                            label="Política de Privacidad"
                            href="/privacy-policy"
                        />

                        <SubMenuItem
                            label="Términos y Condiciones"
                            href="/terms-condition"
                        />

                    </MenuItem>

                    <MenuItem
                        label="Acerca de"
                        href="/about"
                    />

                    <MenuItem
                        label="Contacto"
                        href="/contact"
                    />
                </ul>
            </div>
        </div>
    );
}

export default NavBar;