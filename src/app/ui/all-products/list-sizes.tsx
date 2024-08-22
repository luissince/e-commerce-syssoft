import { fetchListSize } from "@/app/lib/data";
import { AttributeModel } from "@/app/lib/definitions";

const Item = (attribute: AttributeModel) => {
    return (
        <li className="item flex justify-between items-center mb-5">
            <div className="flex space-x-[14px] items-center">
                <div>
                    <div>
                        <input id={attribute.idAtributo} type="checkbox" name={attribute.idAtributo}  />
                    </div>
                </div>
                <div>
                    <label htmlFor={attribute.idAtributo} className="text-xs font-normal capitalize text-qblack ">{attribute.nombre}</label>
                </div>
            </div>
        </li>
    );
}

export default async function ListSizes() {
    const size = await fetchListSize();
    return (
        <ul>
            {size.map((item: AttributeModel, index: number) => (
                <Item key={index} {...item} />
            ))}
        </ul>
    );
}
// interface SizesItemProps {
//     id: string;
//     title: string;
// }

// const SizesItem: React.FC<SizesItemProps> = ({ id, title }) => {
//     return (
//         <li className="item flex justify-between items-center mb-5">
//             <div className="flex space-x-[14px] items-center">
//                 <div>
//                     <div>
//                         <input id={id} type="checkbox" name={id} />
//                     </div>
//                 </div>
//                 <div>
//                     <label htmlFor={id} className="text-xs font-normal capitalize text-qblack ">{title}</label>
//                 </div>
//             </div>
//         </li>
//     );
// }

// export default async function ListSizes() {
//     return (
//         <ul>
//             <SizesItem id="sizeS" title="s" />
//             <SizesItem id="sizeM" title="M" />
//             <SizesItem id="sizeXL" title="XL" />
//             <SizesItem id="sizeXXL" title="XXL" />
//             <SizesItem id="sizeFit" title="Sliem Fit" />
//         </ul>
//     );
// }