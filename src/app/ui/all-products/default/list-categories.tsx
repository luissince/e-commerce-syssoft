import { CategoryModel } from "@/app/lib/definitions";
import { fetchListCategories } from "../../../lib/data";

const Category: React.FC<CategoryModel> = (category) => {
    return (
        <li className="item flex justify-between items-center mb-5">
            <div className="flex space-x-[14px] items-center">
                <div>
                    <div>
                        <input id={category.idCategoria} type="checkbox" name={category.idCategoria} />
                    </div>
                </div>
                <div>
                    <label htmlFor={category.idCategoria} className="text-xs font-normal text-qblack capitalize">{category.nombre}
                    </label>
                </div>
            </div>
            {/* <div>
                <span className="cursor-pointer">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="4" width="10" height="2" fill="#C4C4C4">
                        </rect>
                        <rect x="6" width="10" height="2" transform="rotate(90 6 0)" fill="#C4C4C4">
                        </rect>
                    </svg>
                </span>
            </div> */}
        </li>
    );
}

export default async function ListCategories() {
    const categories = await fetchListCategories();
    return (
        <ul>
            {categories.map((item: CategoryModel, index: number) => (
                <Category key={index} {...item} />
            ))}
        </ul>
    );
}