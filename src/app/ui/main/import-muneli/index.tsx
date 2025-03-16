import React from "react";
import Discount from "@/app/ui/component/import-muneli/discount";
import SellingProducts from "@/app/ui/index/selling-products/import-muneli";
import PopularSales from "@/app/ui/index/popular-sales/import-muneli";
import Banner from "@/app/ui/index/slider/import-muneli";
import BestServices from "@/app/ui/best-services/import-muneli";
import Brands from "@/app/ui/index/brands/import-muneli";

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
