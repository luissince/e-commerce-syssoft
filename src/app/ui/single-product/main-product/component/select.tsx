'use client'

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "../../../component/icons";

const Select = () => {
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
        <div data-aos="fade-up" className="product-size mb-[30px]" ref={dropdownSizeRef}>
            <span className="text-sm font-normal uppercase text-qgray mb-[14px] inline-block">SIZE</span>
            <div className="w-full">
                <div className="border border-qgray-border h-[50px] flex justify-between items-center px-6 cursor-pointer">
                    <div className="my-select-box text-sm font-normal relative w-full">
                        <button type="button" className="my-select-box-btn px-6"
                            onClick={() => setOpenSize(!openSize)}>
                            <div>
                                <span className="text-[13px] text-qblack">Small</span>
                            </div>
                            <div className="flex space-x-10 items-center">
                                <span className="text-[13px] text-qblack">3”W x 3”D x 7”H</span>
                                <span>
                                    <ChevronDownIcon width={22} color="#222222" />
                                </span>
                            </div>
                        </button>
                        <div className={`my-select-box-section bg-white dark:bg-[#1a1a1a] w-full left-0 ${openSize ? 'open' : ''}`} >
                            <ul className="list shadow">
                                <li className="bg-[#f6f6f6] font-bold">Small</li>
                                <li className="">Medium</li>
                                <li className="">Large</li>
                                <li className="">Extra Large</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Select;