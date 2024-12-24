import { fetchIndexProducts } from "@/app/lib/data";
import { ProductModel } from "@/app/lib/definitions";
import { FaArrowRightLong } from "react-icons/fa6";
import Product from "./component/llist";

async function SellingProducts() {
    const products = await fetchIndexProducts(4) as ProductModel[];

    return (
        <div className="section-wrapper w-full top-selling-product mb-[60px]">
            <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                <div className="section-title flex justify-between items-center mb-5">
                    <div>
                        <h1 className="sm:text-3xl text-xl font-semibold text-qblacktext dark:text-white leading-none">
                            Top Selling Products
                        </h1>
                    </div>
                    <div>
                        <a href="/all-products">
                            <div className="flex space-x-2 items-center">
                                <p className="text-base font-semibold text-qblacktext dark:text-white">View More</p>
                                <FaArrowRightLong size={22} />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="section-content">
                    <div className="section-content w-full grid sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 ">
                        {
                            products.map((item, index) => {

                                return (
                                    <Product key={index} {...item} />
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
