import { ProductModel } from "@/app/lib/definitions";
import Discount from "../../component/import-muneli/discount";
import MainProduct from "./main-product";
import RelatedProduct from "./related-product";

interface BodyProps {
    product: ProductModel,
    newRelated: ProductModel[]
}

export default function SingleProductBody({ product, newRelated }: BodyProps) {
    return (
        <>
            <MainProduct {...product} />

            <RelatedProduct products={newRelated} />

            <Discount />
        </>
    );
}