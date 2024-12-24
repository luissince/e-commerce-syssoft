import React, { Suspense } from "react";
import ShopTopBar from "./component/shop-top-bar";
import ShopMiddleBar from "./component/shop-middle-bar";
import QuomodoShopDrawer from "./component/quomodo-shop-drawer";
import QuomodoShopNavBar from "./component/quomodo-shop-nav-bar";

export default function Header() {
    return (
        <header className="header-section-wrapper relative">
            <ShopTopBar />

            <Suspense fallback={<div>Cargando...</div>}>
                <ShopMiddleBar />
            </Suspense>

            <QuomodoShopDrawer />

            <QuomodoShopNavBar />
        </header>
    );
}
