import React, { Suspense } from "react";
import ShopTopBar from "./component/shop-top-bar";
import ShopMiddleBar from "./component/shop-middle-bar";
import QuomodoShopDrawer from "./component/quomodo-shop-drawer";
import QuomodoShopNavBar from "./component/quomodo-shop-nav-bar";
import { fetchImagesCompany } from "@/app/lib/data";
import { CompanyModel } from "@/app/lib/definitions";

export default async function Header() {
    const company = await fetchImagesCompany() as CompanyModel;

    return (
        <header className="header-section-wrapper relative">
            <ShopTopBar />

            <Suspense fallback={<div>Cargando...</div>}>
                <ShopMiddleBar {...company} />  
            </Suspense>

            <QuomodoShopDrawer {...company} />

            <QuomodoShopNavBar />
        </header>
    );
}
