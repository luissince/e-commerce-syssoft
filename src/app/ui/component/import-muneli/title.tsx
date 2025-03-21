import Link from "next/link";
import React from "react";
import Container from "@/app/ui/component/import-muneli/container";

interface BreadItemProps {
    href: string;
    title: string;
    isSeparator: boolean;
}

export const BreadItem: React.FC<BreadItemProps> = ({ href, title, isSeparator }) => {
    return (
        <>
            <span className="flex items-center">
                <Link href={href}>
                    <span className="mx-1 capitalize text-white hover:text-[#f76d24] transition duration-300">{title}</span>
                </Link>
                {isSeparator && <span className="mx-1 text-gray-400">/</span>}
            </span>
        </>
    );
}

interface BreadTileProps {
    title: string;
    children: React.ReactNode;
}

const BreadTitle: React.FC<BreadTileProps> = ({ title, children }) => {
    return (
        <div className="page-title">
            <div className="page-title-wrapper bg-[#042460] w-full h-[173px] py-10">
                <Container>
                    <div className="mb-5">
                        <div className="breadcrumb-wrapper font-medium text-sm text-white mb-4 flex items-center">
                            {children}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="text-4xl font-bold text-white">{title}</h1>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default BreadTitle;
