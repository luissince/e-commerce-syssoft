import Image from "next/image";
import Discount from "@/app/ui/component/import-muneli/discount";
import { Suspense } from "react";
import Pagination from "@/app/ui/component/import-muneli/pagination";
import { ListCategorySkeleton, ListProductSkeleton } from "@/app/ui/component/import-muneli/skeletons";
import ListCategories from "./list-categories";
import ListRange from "@/app/ui/all-products/import-muneli/list-range";
import ListBrands from "@/app/ui/all-products/import-muneli/list-brands";
import ListColors from "@/app/ui/all-products/import-muneli/list-colors";
import ListSizes from "@/app/ui/all-products/import-muneli/list-sizes";
import ListFlavors from "@/app/ui/all-products/import-muneli/list-flavors";
import ListProducts from "@/app/ui/all-products/import-muneli/list-products";
import images from "@/app/lib/config/images";
import Container from "@/app/ui/component/import-muneli/container";
import Title from "../../single-product/import-muneli/main-product/component/title";

const ITEM_PER_PAGE: number = 10;

interface BodyProps {
  query: string;
  total: number,
  currentPage: number;
}

export default function AllProductsBody({ query, total, currentPage }: BodyProps) {
  return (
    <>
      <div className="w-full bg-white pt-[30px] pb-[60px]">
          <Container>
            <Title titleBase={"Inicio"} titleDetail={"Productos"} />

            <div className="w-full lg:flex lg:space-x-[30px]">
              <div className="lg:w-[270px]">
                <div className="w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] mb-[30px]  hidden lg:block">

                  <div className="filter-subject-item pb-10 border-b border-qgray-border">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-[#042460] text-base font-bold">Categorías</h1>
                    </div>
                    <div className="filter-items">
                      <Suspense fallback={<ListCategorySkeleton />}>
                        <ListCategories />
                      </Suspense>
                    </div>
                  </div>

                  <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-[#042460] text-base font-bold">Rango de precios</h1>
                    </div>
                    <Suspense fallback={<ListCategorySkeleton />}>
                      <ListRange />
                    </Suspense>
                  </div>

                  <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-[#042460] text-base font-bold">Marcas</h1>
                    </div>
                    <div className="filter-items">
                      <Suspense fallback={<ListCategorySkeleton />}>
                        <ListBrands />
                      </Suspense>
                    </div>
                  </div>

                  <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-[#042460] text-base font-bold">Colores</h1>
                    </div>
                    <div className="filter-items">
                      <Suspense fallback={<ListCategorySkeleton />}>
                        <ListColors />
                      </Suspense>
                    </div>
                  </div>

                  <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-[#042460] text-base font-bold">Tamaños</h1>
                    </div>
                    <div className="filter-items">
                      <Suspense fallback={<ListCategorySkeleton />}>
                        <ListSizes />
                      </Suspense>
                    </div>
                  </div>

                  <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                    <div className="subject-title mb-[30px]">
                      <h1 className="text-[#042460] text-base font-bold">Sabores</h1>
                    </div>
                    <div className="filter-items">
                      <Suspense fallback={<ListCategorySkeleton />}>
                        <ListFlavors />
                      </Suspense>
                    </div>
                  </div>
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

                <div className="w-full h-64 relative">
                  <Image
                    src={images["import-muneli"].sliders.desktop[images["import-muneli"].sliders.desktop.length -1]}
                    alt="Descripción de la imagen"
                    className="w-full h-full object-cover rounded-md"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </Container>
      </div>

      <Discount />
    </>
  );
}