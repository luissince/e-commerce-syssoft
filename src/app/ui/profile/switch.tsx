

'use client'
import React, { useState } from "react";

const SwitchProfile = () => {
    const [active, setActive] = useState<boolean>(false);

    return (

        <div className="title-area w-full flex justify-between items-center">
            <h1 className="text-[22px] font-bold text-qblack">Your Dashboard</h1>
            <div className="switch-dashboard flex space-x-3 items-center">
                <p className="text-qgray text-base">Switch Dashboard</p>
                <button type="button" className="w-[73px] h-[31px] border border-[#D9D9D9] rounded-full relative "
                    onClick={() => {
                        setActive(!active);
                    }}>
                    {/* <div className="w-[23px] h-[23px] bg-qblack rounded-full absolute top-[3px] transition-all duration-300 ease-in-out "></div> */}
                    <div className={`w-[23px] h-[23px] bg-qblack rounded-full absolute top-[3px] transition-all duration-300 ease-in-out ${active ? "left-[44px]" : "left-[4px]"} `}></div>
                </button>
            </div>
        </div>
    );
}

export default SwitchProfile;