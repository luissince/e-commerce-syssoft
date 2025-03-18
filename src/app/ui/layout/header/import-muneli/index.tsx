import React from "react";
import { CompanyModel } from "@/app/lib/definitions";

import HeaderMuneliTablet from "@/app/ui/layout/header/import-muneli/tablet";
import HeaderMuneliMobil from "@/app/ui/layout/header/import-muneli/mobil";

interface Props {
    company: CompanyModel;
}

export default async function Header({ company }: Props) {
    return (
        <header className="header-section-wrapper relative">
            <HeaderMuneliTablet {...company} />

            <HeaderMuneliMobil {...company} />
        </header>
    );
}
