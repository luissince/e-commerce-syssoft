import Image from "next/image";
import React, { Suspense } from "react";
import ListBrands from "../ui/all-products/list-brands";
import ListCategories from "../ui/all-products/list-categories";
import { ListCategorySkeleton, ListProductSkeleton } from "../ui/component/skeletons";
import ListRange from "../ui/all-products/list-range";
import ListSizes from "../ui/all-products/list-sizes";
import ListProducts from "../ui/all-products/list-products";
import Discount from "../ui/component/discount";
import { Metadata } from "next";
import Pagination from "../ui/component/pagination";
import { fetchProductsPages } from "../lib/data";
import { ProductPagesModel } from "../lib/definitions";
import ListColors from "../ui/all-products/list-colors";
import ListFlavors from "../ui/all-products/list-flavors";

export const metadata: Metadata = {
  title: 'Invoices',
};

const ITEM_PER_PAGE: number = 10;

interface AllProductsProps {
  searchParams?: {
    query?: string;
    page?: string;
  }
}

export default async function AllProducts({ searchParams }: AllProductsProps) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const result = await fetchProductsPages() as ProductPagesModel;

  return (
    <>
      <div className="w-full pt-[30px] pb-[60px]">
        <div className="w-full">
          <div className="container max-w-screen-x mx-auto px-2 md:px-6">
            <div className="font-normal text-[13px] text-qblack mb-[23px]">
              <span>
                <a href="/"><span className="mx-1 capitalize">home</span></a>
                <span>/</span>
              </span>
              <span><a href="/profile">
                <span className="mx-1 capitalize">productos</span></a>
              </span>
            </div>

            <div className="w-full lg:flex lg:space-x-[30px]">
              <div className="lg:w-[270px]">
                <div className="w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] mb-[30px]  hidden lg:block">

                  <div className="filter-subject-item pb-10 border-b border-qgray-border">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-black text-base font-medium">Product categories</h1>
                    </div>
                    <div className="filter-items">
                      <Suspense fallback={<ListCategorySkeleton />}>
                        <ListCategories />
                      </Suspense>
                    </div>
                  </div>

                  <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-black text-base font-500">Price Range</h1>
                    </div>
                    <Suspense fallback={<ListCategorySkeleton />}>
                      <ListRange />
                    </Suspense>
                  </div>

                  <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-black text-base font-500">Brands</h1>
                    </div>
                    <div className="filter-items">
                      <Suspense fallback={<ListCategorySkeleton />}>
                        <ListBrands />
                      </Suspense>
                    </div>
                  </div>

                  <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-black text-base font-500">Colors</h1>
                    </div>
                    <div className="filter-items">
                      <Suspense fallback={<ListCategorySkeleton />}>
                        <ListColors />
                      </Suspense>
                    </div>
                  </div>

                  <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-black text-base font-500">Sizes</h1>
                    </div>
                    <div className="filter-items">
                      <Suspense fallback={<ListCategorySkeleton />}>
                        <ListSizes />
                      </Suspense>
                    </div>
                  </div>

                  <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-black text-base font-500">Flavors</h1>
                    </div>
                    <div className="filter-items">
                      <Suspense fallback={<ListCategorySkeleton />}>
                        <ListFlavors />
                      </Suspense>
                    </div>
                  </div>

                  {/* <div className="filter-subject-item pb-10 mt-10">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-black text-base font-500">
                        Sizes</h1>
                    </div>
                    <div className="filter-items">
                      <ListSizes />
                    </div>
                  </div> */}

                </div>
                <div className="w-full hidden lg:block h-[295px]">
                  <Image src="/assets/ads-5.png" alt="" width={270} height={295} className="w-full h-full object-contain" />
                </div>
              </div>

              <div className="flex-1">
                {/* <SearchProducts /> */}

                <Suspense key={query + currentPage} fallback={<ListProductSkeleton />}>
                  <ListProducts
                    query={query}
                    currentPage={currentPage}
                    itemPerPage={ITEM_PER_PAGE}
                  />
                </Suspense>

                <Pagination
                  loading={false}
                  data={[]}
                  totalPages={Number(Math.ceil(result.total / ITEM_PER_PAGE))}
                  restar={false}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Discount />
    </>
  );
}
