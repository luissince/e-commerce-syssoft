'use client'
import { CompanyModel } from "@/app/lib/definitions";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Logo(company: CompanyModel) {

    const [mounted, setMounted] = useState<boolean>(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="w-full flex flex-col items-center mb-[50px]">
            <div className="mb-[40px]">
                <Link href="/">
                    <Image
                        width="152"
                        height="36"
                        src={company.rutaImage ?? "/assets/logo.svg"}
                        alt={company.nombreEmpresa ?? "logo"}
                        priority={true} />
                    {/* <Image width="152" height="36" src={resolvedTheme === 'dark' ? '/assets/logo-light.webp' : '/assets/logo-dark.webp'} alt="logo" priority={true} /> */}
                </Link>
            </div>
            <div className="w-full h-[1px] bg-[#E9E9E9]"></div>
        </div>

    );
}
