import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from "../../component/product-card";
import { IoIosArrowForward } from "react-icons/io";
import { fetchIndexProducts } from "@/app/lib/data";
import { ProductModel } from "@/app/lib/definitions";
import { numberFormat } from "@/helper/util";
import Link from "next/link";

async function PopularSales() {
    const products = await fetchIndexProducts(4) as ProductModel[];
    
    return (
        <div
            data-aos="fade-up"
            className="section-style-one category-products mb-[60px]" >
            <div className="section-wrapper w-full">
                <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                    <div className="section-title flex justify-between items-center mb-5">
                        <div>
                            <h1 className="sm:text-3xl text-xl font-semibold text-qblacktext dark:text-white leading-none">
                                Productos Polulares
                            </h1>
                        </div>

                        <div>
                            <Link href="/all-products">
                                <div className="flex space-x-2 items-center">
                                    <p className="text-base font-semibold text-qblacktext dark:text-white">Ver Más</p>
                                    <FaArrowRightLong size={22} />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="section-content">
                        <div className="products-section w-full">
                            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                                {/* <div className="category-card hidden xl:block w-full">
                                    <div className="category-card-wrappwer w-full h-full p-[30px] bg-popularSaleLeft bg-cover bg-no-repeat">
                                        <div>
                                            <h1 className="text-base font-semibold tracking-wide mb-2 text-black">
                                                Electronics
                                            </h1>
                                            <div className="brands-list mb-[7px]">
                                                <ul>
                                                    <li>
                                                        <a href="/all-products">
                                                            <span className="text-sm text-qgray hober:text-qBlack border-b border-transparent hover:border-qblack hover:text-qblack capitalize">
                                                                xioami
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/all-products">
                                                            <span className="text-sm text-qgray hober:text-qBlack border-b border-transparent hover:border-qblack hover:text-qblack capitalize">
                                                                apple
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/all-products">
                                                            <span className="text-sm text-qgray hober:text-qBlack border-b border-transparent hover:border-qblack hover:text-qblack capitalize">
                                                                google
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/all-products">
                                                            <span className="text-sm text-qgray hober:text-qBlack border-b border-transparent hover:border-qblack hover:text-qblack capitalize">
                                                                samsung
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <a href="#">
                                                <div className="flex space-x-2 items-center">
                                                    <span className="text-qblack font-semibold text-sm">
                                                        Shop Now
                                                    </span>
                                                    <IoIosArrowForward color="#000000" size={18} />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}

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
                </div>
            </div>
        </div>
    );
}

export default PopularSales;