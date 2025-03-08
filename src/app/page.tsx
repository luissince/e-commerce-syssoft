import React from "react";
import Discount from "./ui/component/discount";
import SellingProducts from "./ui/index/selling-products";
import PopularSales from "./ui/index/popular-sales";
import { BannerCard, BannerTwo, BestServices } from "./ui/index/banner";

async function Home() {
  return (
    <>
      <div className="w-full pt-[30px] pb-[60px]">
        
        <BannerCard />

        <BestServices />

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
