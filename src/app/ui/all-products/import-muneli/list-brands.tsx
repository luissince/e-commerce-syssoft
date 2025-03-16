import { fetchListBrands } from "@/app/lib/data";
import { BrandModel } from "@/app/lib/definitions";

const BrandItem = (brand: BrandModel) => {
    return (
        <li className="item flex justify-between items-center mb-5">
            <div className="flex space-x-[14px] items-center">
                <div>
                    <div>
                        <input id={brand.idMarca} type="checkbox" name={brand.idMarca} />
                    </div>
                </div>
                <div>
                    <label htmlFor={brand.idMarca} className="text-xs font-normal capitalize text-qblack ">{brand.nombre}</label>
                </div>
            </div>
        </li>
    );
}

export default async function ListBrands() {
    const categories = await fetchListBrands();
    return (
        <ul>
            {categories.map((item: BrandModel, index: number) => (
                <BrandItem key={index} {...item} />
            ))}
        </ul>
    );
}