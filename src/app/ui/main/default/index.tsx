import React from "react";
import Discount from "@/app/ui/component/default/discount";
import SellingProducts from "@/app/ui/index/selling-products/default";
import PopularSales from "@/app/ui/index/popular-sales/default";
import Banner from "@/app/ui/index/slider/default";
import BestServices from "@/app/ui/best-services/default";
import Brands from "@/app/ui/index/brands/default";

async function Main() {
  return (
    <>

      {/* <BannerCard /> */}
      <Banner />

      <BestServices />

      {/* <GameStore /> */}

      {/* <PostBrands /> */}

      <SellingProducts />

      <Brands />

      {/* <BestSeller /> */}

      {/* <ProductAds /> */}

      <PopularSales />

      {/* <BannerTwo /> */}

      {/* <NewArrivals /> */}

      {/* <BannerThree /> */}

      {/* <PopularSalesTwo /> */}

      <Discount />
    </>
  );
}

export default Main;
