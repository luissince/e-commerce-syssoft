'use client'
import { useEffect, useState } from "react";
import ProductCard from "../component/product-card";

const RelatedProduct = () => {

    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="related-product w-full bg-white">
            <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                <div className="w-full py-[60px]">
                    <h1 className="sm:text-3xl text-xl font-semibold text-qblacktext leading-none mb-[30px]">Related Product</h1>
                    <div data-aos="fade-up" className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                        <ProductCard
                            image="/assets/product-img-1.jpg"
                            code=""
                            title="Xoggle aute et pariatur adipisicing nostrud et excepteur"
                            priceOld="$27.27"
                            priceNew="$18.73"
                            reviews={3}
                            link=""
                        />

                        <ProductCard
                            image="/assets/product-img-1.jpg"
                            code=""
                            title="Xoggle aute et pariatur adipisicing nostrud et excepteur"
                            priceOld="$27.27"
                            priceNew="$18.73"
                            reviews={3}
                            link=""
                        />

                        <ProductCard
                            image="/assets/product-img-1.jpg"
                            code=""
                            title="Xoggle aute et pariatur adipisicing nostrud et excepteur"
                            priceOld="$27.27"
                            priceNew="$18.73"
                            reviews={3}
                            link=""
                        />

                        <ProductCard
                            image="/assets/product-img-1.jpg"
                            code=""
                            title="Xoggle aute et pariatur adipisicing nostrud et excepteur"
                            priceOld="$27.27"
                            priceNew="$18.73"
                            reviews={3}
                            link=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RelatedProduct;