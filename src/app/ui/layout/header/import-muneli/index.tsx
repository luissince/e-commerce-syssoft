import React, { Suspense, useState } from "react";
import { fetchImagesCompany } from "@/app/lib/data";
import { CompanyModel } from "@/app/lib/definitions";

import HeaderMuneliTablet from "@/app/ui/layout/header/import-muneli/tablet";
import HeaderMuneliMobil from "@/app/ui/layout/header/import-muneli/mobil";


export default async function Header() {
    const company = await fetchImagesCompany() as CompanyModel;

    return (
        <header className="header-section-wrapper relative">
            <HeaderMuneliTablet {...company} />

            <HeaderMuneliMobil {...company} />
        </header>
    );
}
