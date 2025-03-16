import { fetchListColor } from "@/app/lib/data";
import { AttributeModel } from "@/app/lib/definitions";

const Item = (attribute: AttributeModel) => {
    return (
        <li className="item flex justify-between items-center mb-5">
            <div className="flex space-x-[14px] items-center">
                <div>
                    <div>
                        <input id={attribute.idAtributo} type="checkbox" name={attribute.idAtributo} />
                    </div>
                </div>
                <div>
                    <label htmlFor={attribute.idAtributo} className="text-xs font-normal capitalize text-qblack ">{attribute.nombre}</label>
                </div>
            </div>
        </li>
    );
}

export default async function ListColors() {
    const colors = await fetchListColor();
    return (
        <ul>
            {colors.map((item: AttributeModel, index: number) => (
                <Item key={index} {...item} />
            ))}
        </ul>
    );
}