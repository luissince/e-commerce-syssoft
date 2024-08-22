import React, { Suspense } from "react";
import ShopTopBar from "./component/shop-top-bar";
import ShopMiddleBar from "./component/shop-middle-bar";
import QuomodoShopDrawer from "./component/quomodo-shop-drawer";
import QuomodoShopNavBar from "./component/quomodo-shop-nav-bar";

export default function Header() {
    // let navegador = navigator.userAgent;
    // if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || window.innerWidth <= 780) {
    //     console.log("Toma Pop-Up, por entrar con un dispositivo móvil");
    // } else {
    //     console.log("No estás usando un móvil");
    // }

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
