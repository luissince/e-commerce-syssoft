'use client'
import React, { useEffect, useState } from "react";
import { ProductModel } from "@/app/lib/definitions";
import { numberFormat } from "@/helper/util";
import ProductCard from "@/app/ui/component/import-muneli/product-card";
import Container from "@/app/ui/component/import-muneli/container";


interface RelatedProductProps {
    products: Array<ProductModel>;
}

const RelatedProduct: React.FC<RelatedProductProps> = ({ products }) => {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="related-product w-full bg-white pb-20">
            <Container>
                <h1 className="sm:text-3xl text-xl font-semibold text-[#042460] leading-none mb-[30px]">Producto Relacionado</h1>
                <div data-aos="fade-up" className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
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
            </Container>
        </div>
    );
}

export default RelatedProduct;