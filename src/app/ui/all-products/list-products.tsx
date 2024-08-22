import Image from "next/image";
import { fetchFilteredProducts } from "../../lib/data";
import { ProductModel } from "../../lib/definitions";
import { numberFormat } from "@/helper/util";
import ProductCard from "../component/product-card";

interface ListProductsProps {
    query: string;
    currentPage: number;
    itemPerPage: number;
}

export default async function ListProducts({ query, currentPage, itemPerPage }: ListProductsProps) {
    const products = await fetchFilteredProducts(query, (currentPage - 1) * itemPerPage, itemPerPage) as ProductModel[];
    
    return (
        <>
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  xl:gap-[30px] gap-5 mb-[40px]">
                {products.map((item: ProductModel, index) => {
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
                })}
            </div>

            <div className="w-full h-[164px] overflow-hidden mb-[40px]">
                <Image
                    src="/assets/ads-6.png"
                    alt=""
                    className="w-full h-full object-contain"
                    width={868}
                    height={164}
                />
            </div>
        </>
    );
}