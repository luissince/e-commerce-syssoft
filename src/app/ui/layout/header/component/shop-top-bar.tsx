'use client'
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { DarkIcon, LightIcon, SpanishIcon, SystemIcon } from "../../../component/icons";
import { useTheme } from 'next-themes'
import { ItemListShopTopBarProps, listLenguajes, listThemes } from "@/app/lib/data";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface ItemShopTopBarProps {
    title: string;
    iconRight: React.ReactElement;
    iconLeft: React.ReactElement;
    children: React.ReactElement;
}

const ItemShopTopBar: React.FC<ItemShopTopBarProps> = ({ title, iconRight, iconLeft, children }) => {
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
                {iconRight}
            </div>
            <div className="my-select-box text-sm font-norma relative w-fit">
                <button type="button" className="my-select-box-btn"
                    onClick={() => setOpenSize(!openSize)}>
                    <span className="text-[#222222] dark:text-white text-xs font-medium">{title}</span>
                </button>
                <div className={`my-select-box-section bg-white dark:bg-[#1a1a1a] left-auto right-0 w-[150px] ${openSize ? 'open' : ''}`} >
                    <ul className="list">
                        {children}
                    </ul>
                </div>
            </div>
            <div>
                {iconLeft}
            </div>
        </div>
    );
}

const ShopTopBar = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, resolvedTheme } = useTheme()

    const [language, setLanguage] = useState<string>('es');

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const getIcon = (themeValue: string) => {
        switch (themeValue) {
            case 'light':
                return <LightIcon width={22} height={22} fill={resolvedTheme === 'light' ? '#000' : '#fff'} />;
            case 'dark':
                return <DarkIcon width={15} height={15} fill={resolvedTheme === 'light' ? '#000' : '#fff'} />;
            default:
                return <SystemIcon width={17} height={17} stroke={resolvedTheme === 'light' ? '#000' : '#fff'} />;
        }
    };

    return (
        <div className="w-full bg-white border-qgray-border dark:bg-[#101010] h-10 border-b ">
            <div className="container max-w-screen-x mx-auto px-2 md:px-6 h-full">
                <div className="flex justify-between items-center h-full">
                    <div className="">
                        {/* <ul className="flex space-x-6">
                            <li>
                                <span className={`text-xs leading-6 text-qblack dark:text-white font-medium`}>Account</span>
                            </li>
                            <Link href={"/tracking-order"}>
                                <span className="text-xs leading-6 text-qblack dark:text-white font-medium">Track Order</span>
                            </Link>
                            <li>
                                <span className="text-xs leading-6 text-qblack dark:text-white font-medium">Support</span>
                            </li>
                        </ul> */}
                    </div>

                    <div className="topbar-dropdowns sm:block hidden">
                        <div className="flex space-x-6">
                            {/* <ItemShopTopBar
                                title={listLenguajes.find(t => t.value === language)?.title!}
                                iconRight={listLenguajes.find(t => t.value === language)?.icon!}
                                iconLeft={<ChevronDownIcon width={10} height={5} />}
                            >
                                <>
                                    {listLenguajes.map((item: ItemListShopTopBarProps, index: number) => (
                                        <li key={index} className={`${item.selected ? "selected" : ""} text-xs`} onClick={() => {
                                            // setTheme(item.value);
                                        }}>
                                            <div className="flex items-center">
                                                {item.icon} <span className="ml-2">{item.title}</span>
                                            </div>
                                        </li>
                                    ))}
                                </>
                            </ItemShopTopBar> */}

                            <ItemShopTopBar
                                title={listThemes.find(t => t.value === theme)?.title!}
                                iconRight={getIcon(theme!)}
                                iconLeft={<ChevronDownIcon width={17} height={17} fill={resolvedTheme === 'light' ? '#000' : '#fff'} />}
            
                            >
                                <>
                                    {listThemes.map((item: ItemListShopTopBarProps, index: number) => (
                                        <li key={index} className={`${item.value === theme ? "bg-[#f6f6f6] font-bold dark:bg-[#474545]" : ""} text-xs `} onClick={() => {
                                            setTheme(item.value);
                                        }}>
                                            <div className="flex items-center">
                                                {getIcon(item.value)}
                                                <span className="ml-2">{item.title}</span>
                                            </div>
                                        </li>
                                    ))}
                                </>
                            </ItemShopTopBar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopTopBar;