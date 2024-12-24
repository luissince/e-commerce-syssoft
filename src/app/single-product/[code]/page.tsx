import Discount from "../../ui/component/discount";
import RelatedProduct from "../../ui/single-product/related-product";
import MainProduct from "../../ui/single-product/main-product";
import { fetchProducRelatedtByCode, fetchProductByCode } from "../../lib/data";
import { redirect } from 'next/navigation';
import { Suspense } from "react";

interface SingleProduct {
    params: {
        code: string;
    }
}

export default async function SingleProduct({ params }: SingleProduct) {
    const code = params.code;

    if (!code) {
        redirect('/all-products');
    }

    const product = await fetchProductByCode(code)

    if (!product) {
        redirect('/all-products');
    }

    const related = await fetchProducRelatedtByCode(product.categoria.idCategoria)
    const newRelated = related.filter(item => item.idProducto !== product.idProducto);

    return (
        <>
            <div className="w-full  pt-0 pb-0">
                <div className="single-product-wrapper w-full ">
                    <MainProduct {...product} />

                    <RelatedProduct products={newRelated} />
                </div>
            </div>

            <Discount />
        </>
    );
}