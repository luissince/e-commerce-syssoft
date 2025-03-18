import React from "react";
import { CompanyModel } from "@/app/lib/definitions";

import HeaderDefaultTablet from "@/app/ui/layout/header/default/tablet";
import HeaderDefaultMobil from "@/app/ui/layout/header/default/mobil";

interface Props {
    company: CompanyModel;
}

export default async function Header({ company }: Props) {
    return (
        <header className="header-section-wrapper relative">
            <HeaderDefaultTablet {...company} />

            <HeaderDefaultMobil {...company} />
        </header>
    );
}
