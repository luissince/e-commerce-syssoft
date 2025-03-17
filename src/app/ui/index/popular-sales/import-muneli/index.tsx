import ProductCard from "@/app/ui/component/import-muneli/product-card";
import { fetchIndexProducts } from "@/app/lib/data";
import { ProductModel } from "@/app/lib/definitions";
import { numberFormat } from "@/helper/util";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Container from "@/app/ui/component/import-muneli/container";

async function PopularSales() {
    const products = await fetchIndexProducts(4) as ProductModel[];

    return (
        <div
            data-aos="fade-up"
            className="section-wrapper w-full bg-white top-selling-product pb-10">
            <Container>
                <div className="section-title flex justify-between items-center mb-10">
                    <h1 className="sm:text-3xl text-xl font-bold text-[#f76d24]">
                        Productos Más Vendidos
                    </h1>

                    <Link href="/all-products">
                        <div className="flex space-x-2 items-center">
                            <p className="text-base font-semibold text-[#042460] dark:text-white">VER MAS</p>
                            <ChevronRightIcon width={26} height={26} fill="#f76d24"/>
                        </div>
                    </Link>
                </div>

                <div className="section-content">
                    <div className="products-section w-full">
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                            {
                                products.map((item, index) => {
                                    return (
                                        <ProductCard
                                            key={index}
                                            image={!item.imagen ? "/assets/noimage.jpg" : item.imagen}
                                            width={!item.imagen ? 512 : 196}
                                            height={!item.imagen ? 315 : 196}
                                            code={item.codigo}
                                            title={item.nombre}
                                            priceOld={numberFormat(((item.precio * 0.10) + item.precio))}
                                            priceNew={numberFormat(item.precio)}
                                            reviews={3}
                                            link={`/single-product/${item.codigo}`}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default PopularSales;