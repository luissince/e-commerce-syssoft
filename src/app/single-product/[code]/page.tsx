import { fetchProducRelatedtByCode, fetchProductByCode } from "../../lib/data";
import { redirect } from 'next/navigation';
import { importClientComponents } from '@/app/lib/utils/importClientComponents'

interface SingleProductProps {
    params: {
        code: string;
    }
}

export default async function SingleProduct({ params }: SingleProductProps) {
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

    const { SingleProduct } = await importClientComponents();

    return (<SingleProduct product={product} newRelated={newRelated} />);
}