import React from "react";
import HeaderDefaultTablet from "@/app/ui/layout/header/default/tablet";
import HeaderDefaultMobil from "@/app/ui/layout/header/default/mobil";
import { fetchImagesCompany } from "@/app/lib/data";
import { CompanyModel } from "@/app/lib/definitions";


export default async function Header() {
    const company = await fetchImagesCompany() as CompanyModel;

    return (
        <header className="header-section-wrapper relative">

            <HeaderDefaultTablet {...company} />

            <HeaderDefaultMobil {...company} />

        </header>
    );
}
