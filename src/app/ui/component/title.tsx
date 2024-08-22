import Link from "next/link";
import React from "react";

interface BreadItemProps {
    href: string;
    title: string;
    isSeparator: boolean;
}

export const BreadItem: React.FC<BreadItemProps> = ({ href, title, isSeparator }) => {
    return (
        <>
            <span>
                <Link href={href}>
                    <span className="mx-1 capitalize">{title}</span>
                </Link>
                {isSeparator && <span>/</span>}
            </span>
            <span></span>
        </>
    );
}

interface TileProps {
    breadCrumds: React.ReactNode;
    title: string;
}

const Title: React.FC<TileProps> = ({ breadCrumds, title }) => {
    return (
        <div className="page-title mb-10">
            <div className="page-title-wrapper bg-[#FFFAEF] w-full h-[173px] py-10">
                <div className="container max-w-screen-x mx-auto md:px-6">
                    <div className="mb-5">
                        <div className="breadcrumb-wrapper font-400 text-[13px] text-qblack mb-[23px]">
                            {breadCrumds}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="text-3xl font-semibold text-qblack">{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Title;