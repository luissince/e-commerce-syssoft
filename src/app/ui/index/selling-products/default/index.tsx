import { fetchIndexProducts } from "@/app/lib/data";
import { ProductModel } from "@/app/lib/definitions";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import ProductCard from "@/app/ui/component/default/product-card";
import { numberFormat } from "@/helper/util";

async function SellingProducts() {
    const products = await fetchIndexProducts(4) as ProductModel[];

    return (
        <div className="section-wrapper w-full top-selling-product mt-10 mb-20">
            <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                <div className="section-title flex justify-between items-center mb-5">
                        <h1 className="sm:text-3xl text-xl font-semibold text-qblacktext dark:text-white leading-none">
                            Productos Más Vendidos
                        </h1>

                    <div>
                        <Link href="/all-products">
                            <div className="flex space-x-2 items-center">
                                <p className="text-base font-semibold text-qblacktext dark:text-white">Ver Más</p>
                                <FaArrowRightLong size={22} />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="section-content" data-aos="fade-up">
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                        {
                            products.map((item, index) => {
                                return (
                                    // <Product key={index} {...item} />
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
        </div>
    );
}

export default SellingProducts;
