import Image from "next/image";
import React, { Suspense } from "react";
import ListBrands from "@/app/ui/all-products/default/list-brands";
import ListCategories from "@/app/ui/all-products/default/list-categories";
import { ListCategorySkeleton, ListProductSkeleton } from "@/app/ui/component/default/skeletons";
import ListRange from "@/app/ui/all-products/default/list-range";
import ListSizes from "@/app/ui/all-products/default/list-sizes";
import ListProducts from "@/app/ui/all-products/default/list-products";
import Discount from "@/app/ui/component/default/discount";
import Pagination from "@/app/ui/component/default/pagination";
import ListColors from "@/app/ui/all-products/default/list-colors";
import ListFlavors from "@/app/ui/all-products/default/list-flavors";

const ITEM_PER_PAGE: number = 10;


interface BodyProps {
    query: string;
    total: number,
    currentPage: number;
  }
  
export default  function AllProductsBody({ query, total, currentPage }: BodyProps) {

  return (
    <>
      <div className="w-full pt-[30px] pb-[60px]">
        <div className="w-full">
          <div className="container max-w-screen-x mx-auto px-2 md:px-6">
            <div className="font-normal text-[13px] text-qblack mb-[23px]">
              <span>
                <a href="/"><span className="mx-1 capitalize">Inicio</span></a>
                <span>/</span>
              </span>
              <span><a href="/profile">
                <span className="mx-1 capitalize">Productos</span></a>
              </span>
            </div>

            <div className="w-full lg:flex lg:space-x-[30px]">
              <div className="lg:w-[270px]">
                <div className="w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] mb-[30px]  hidden lg:block">

                  <div className="filter-subject-item pb-10 border-b border-qgray-border">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-black text-base font-medium">Categorías</h1>
                    </div>
                    <div className="filter-items">
                      <Suspense fallback={<ListCategorySkeleton />}>
                        <ListCategories />
                      </Suspense>
                    </div>
                  </div>

                  <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-black text-base font-500">Rango de precios</h1>
                    </div>
                    <Suspense fallback={<ListCategorySkeleton />}>
                      <ListRange />
                    </Suspense>
                  </div>

                  <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-black text-base font-500">Marcas</h1>
                    </div>
                    <div className="filter-items">
                      <Suspense fallback={<ListCategorySkeleton />}>
                        <ListBrands />
                      </Suspense>
                    </div>
                  </div>

                  <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-black text-base font-500">Colores</h1>
                    </div>
                    <div className="filter-items">
                      <Suspense fallback={<ListCategorySkeleton />}>
                        <ListColors />
                      </Suspense>
                    </div>
                  </div>

                  <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-black text-base font-500">Tamaños</h1>
                    </div>
                    <div className="filter-items">
                      <Suspense fallback={<ListCategorySkeleton />}>
                        <ListSizes />
                      </Suspense>
                    </div>
                  </div>

                  <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-black text-base font-500">Sabores</h1>
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
                  totalPages={Number(Math.ceil(total / ITEM_PER_PAGE))}
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
