'use client'
import { useState } from "react";
import { ProductModel } from "@/app/lib/definitions";

interface TabProps {
    product: ProductModel;
    tabNameOne: string;
    tabNameTwo: string;
}

const Tab: React.FC<TabProps> = ({ product, tabNameOne, tabNameTwo }) => {
    const [tab, setTab] = useState<number>(0);

    return (
        <div className="product-des-wrapper w-full relative pb-[60px]">
            <div className="tab-buttons w-full mb-10 mt-5 sm:mt-0">
                <ul className="flex space-x-12">
                    <li onClick={() => setTab(0)}>
                        <span className={`py-[15px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer ${tab === 0 ? 'border-[#F76D23] text-qblack dark:text-white' : 'border-transparent text-qgray'} `}>
                            {tabNameOne}
                        </span>
                    </li>
                    <li onClick={() => setTab(1)}>
                        <span className={`py-[15px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer ${tab === 1 ? 'border-[#F76D23] text-qblack dark:text-white' : 'border-transparent text-qgray'} `}>
                            {tabNameTwo}
                        </span>
                    </li>
                </ul>
                <div className="w-full h-[1px] bg-[#E8E8E8] absolute left-0 sm:top-[50px] top-[36px] -z-10"></div>
            </div>

            <div className="tab-contents w-full">
                {tab === 0 && (
                    <div data-aos="fade-up" className="w-full tab-content-item">
                        <p className="text-[15px] dark:text-white text-qblack text-normal mb-10 whitespace-pre-line">{product.descripcionLarga}</p>
                    </div>
                )}

                {tab === 1 && (
                    <div data-aos="fade-up" className="w-full tab-content-item">
                        <div className="saller-info-wrapper w-full">
                            <div className="saller-info">
                                <table className="w-full">
                                    <tbody>
                                        {product.detalles.map((detalle, index) => (
                                            <tr key={index}>
                                                <td width="30%" className="pt-3 pb-2 border-b border-gray-300">
                                                    <span className="text-[15px] font-normal text-qgray">{detalle.nombre}:</span>
                                                </td>
                                                <td width="70%" className="pt-3 pb-2 border-b border-gray-300">
                                                    <span className="text-[15px] font-normal dark:text-white text-qblack whitespace-pre-line">{detalle.valor}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tab;
