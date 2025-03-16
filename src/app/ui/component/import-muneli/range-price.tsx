'use client'

import { RangePriceModel } from "@/app/lib/definitions";
import React, { useCallback, useEffect, useRef, useState } from "react";

export default function RangePrices(price: RangePriceModel) {
    const priceGap = 100;
    const refContentSlider = useRef<HTMLDivElement | null>(null);

    const [minRange, setMinRange] = useState(Math.floor(price.minimo));
    const [maxRange, setMaxRange] = useState(Math.ceil(price.maximo));

    const updateSliderStyles = useCallback((minVal: number, maxVal: number) => {
        if (refContentSlider.current) {
            refContentSlider.current.style.left = ((minVal / price.maximo) * 100) + "%";
            refContentSlider.current.style.right = (100 - (maxVal / price.maximo) * 100) + "%";
        }
    }, [price.maximo]);

    const handleMinRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const minVal = Math.floor(Number(event.target.value));
        setMinRange(minVal);

        if ((maxRange - minVal) < priceGap) {
            setMinRange(maxRange - priceGap);
        } else {
            updateSliderStyles(minVal, maxRange);
        }
    };

    const handleMaxRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const maxVal = Math.ceil(Number(event.target.value));
        setMaxRange(maxVal);

        if ((maxVal - minRange) < priceGap) {
            setMaxRange(minRange + priceGap);
        } else {
            updateSliderStyles(minRange, maxVal);
        }
    };

    useEffect(() => {
        updateSliderStyles(minRange, maxRange);
    }, [minRange, maxRange, updateSliderStyles]);

    return (
        <>
            <div className="price-range mb-5">
                <div className="slider">
                    <div className="progress" ref={refContentSlider}></div>
                </div>
                <div className="relative">
                    <input type="range"
                        className="range-min absolute w-full h-1 top-[-5px] bg-transparent pointer-events-none appearance-none"
                        min={price.minimo}
                        max={price.maximo}
                        value={minRange}
                        step={1}
                        onChange={handleMinRangeChange}
                    />
                    <input
                        type="range"
                        className="range-max absolute w-full h-1 top-[-5px] bg-transparent pointer-events-none appearance-none"
                        min={price.minimo}
                        max={price.maximo}
                        value={maxRange}
                        step={1}
                        onChange={handleMaxRangeChange}
                    />
                </div>
            </div>
            <p className="text-xs text-qblack font-400">Price: ${minRange} - ${maxRange}</p>
        </>
    );
}