import React from "react";
import Discount from "./ui/component/discount";
import SellingProducts from "./ui/index/selling-products";
import PopularSales from "./ui/index/popular-sales";
import { BannerCard, BannerTwo, BestServices } from "./ui/index/banner";


function Banner() {
  return (
    <div className="w-full banner-wrapper mb-[60px]">
      <div className="container max-w-screen-x mx-auto px-2 md:px-6">
        <div className="main-wrapper w-full">
          <BannerCard />
          <BestServices />
        </div>
      </div>
    </div>
  );
}

async function Home() {
  return (
    <>
      <div className="w-full  pt-[30px] pb-[60px]">
        <div className="w-5 h-5"></div>

        <Banner />

        {/* <GameStore /> */}

        {/* <Brands /> */}

        {/* <PostBrands /> */}

        <SellingProducts />

        {/* <BestSeller /> */}

        {/* <ProductAds /> */}

        <PopularSales />

        <BannerTwo />

        {/* <NewArrivals /> */}

        {/* <BannerThree /> */}

        {/* <PopularSalesTwo /> */}

      </div>

      <Discount />
    </>
  );
}

export default Home;
