'use client'

import { useState } from "react";

interface StorageItemProps {
    title: string;
}

const StorageItem = ({ title }: StorageItemProps) => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <span
            className={`font-normal border border-qgray-border text-xs px-[14px] py-[6px] cursor-pointer mb-[5px] ${active ? 'bg-qyellow text-qblack' : 'text-qgray'} `}
            onClick={() => setActive(!active)}>
            {title}
        </span>
    );
}

export default function ListStorage() {
    return (
        <div className="filter-items">
            <div className="flex space-x-[5px] flex-wrap">
                <StorageItem title="64GB" />
                <StorageItem title="128GB" />
                <StorageItem title="256GB" />
                <StorageItem title="512GB" />
                <StorageItem title="1024GB" />
            </div>
        </div>
    );
}