'use client'

import { useEffect, useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

function Discount() {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="discount-banner w-full h-[307px] bg-cover flex justify-center items-center bg-discount bg-no-repeat">
            <div>
                <div data-aos="fade-up">
                    <h1 className="sm:text-3xl text-xl font-bold text-qblack mb-2 text-center">Get <span className="mx-1 text-qyellow">20%</span> Off Discount Coupon</h1>
                    <p className="text-center sm:text-[18px] text-sm font-400 dark:text-black">
                        by Subscribe our Newsletter
                    </p>
                </div>
                <div
                    data-aos="fade-right"
                    className="sm:w-[543px] w-[300px] h-[54px] flex mt-8"
                >
                    <div className="flex-1 bg-white  dark:bg-black  pl-4 flex space-x-2 items-center h-full focus-within:text-qyellow text-qblack dark:text-white">
                        <span>
                            <EnvelopeIcon  width={22} height={22} />
                        </span>
                        <input
                            type="email"
                            name="email"
                            className="w-full h-full outline-0 border-none bg-white dark:bg-black text-sm  placeholder:text-xs placeholder:text-qblack dark:placeholder:text-gray-400 font-400 tracking-wider pl-2"
                            placeholder="EMAIL ADDRESS"
                        />
                    </div>
                    <button
                        type="button"
                        className="sm:w-[158px] w-[80px]  h-full bg-qyellow text-sm font-semibold text-black outline-0"
                    >
                        Get the Coupon
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Discount;