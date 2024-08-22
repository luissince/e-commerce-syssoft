import Discount from "../../ui/component/discount";
import RelatedProduct from "../../ui/single-product/related-product";
import MainProduct from "../../ui/single-product/main-product";
import { fetchProductByCode } from "../../lib/data";
import { redirect } from 'next/navigation';

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

    const result = await fetchProductByCode(code)

    if (!result) {
        redirect('/all-products');
    }

    return (
        <>
            <div className="w-full  pt-0 pb-0">
                <div className="single-product-wrapper w-full ">
                    <MainProduct {...result} />

                    <RelatedProduct /> 
                </div>
            </div>

            <Discount />
        </>
    );
}