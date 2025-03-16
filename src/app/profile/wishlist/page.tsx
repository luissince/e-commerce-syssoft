import { CloseIcon } from "@/app/ui/component/default/icons";
import Image from "next/image";

const Wishlist = () => {
    return (
        <div className="w-full ">
            <div className="relative w-full overflow-x-auto border border-[#EDEDED]">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead>
                        <tr className="text-[13px] font-medium text-black bg-[#F6F6F6] whitespace-nowrap px-2 border-b default-border-bottom uppercase">
                            <td className="py-4 pl-10 block whitespace-nowrap  w-[380px]">product</td>
                            <td className="py-4 whitespace-nowrap text-center">stock status</td>
                            <td className="py-4 whitespace-nowrap text-center">price</td>
                            <td className="py-4 whitespace-nowrap  text-center">quantity</td>
                            <td className="py-4 whitespace-nowrap  text-center">total</td>
                            <td className="py-4 whitespace-nowrap text-right w-[114px] block"></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="pl-10  py-4 ">
                                <div className="flex space-x-6 items-center">
                                    <div className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
                                        <Image src="/assets/product-img-1.jpg" alt="" width={78} height={78} />
                                    </div>
                                    <div className="flex-1 flex flex-col"><p className="font-medium text-[15px] text-qblack">iPhone 12 Pro Max 128GB</p></div>
                                </div>
                            </td>
                            <td className="text-center py-4 px-2"><span className="text-[15px] font-normal">In Stock(23)</span></td>
                            <td className="text-center py-4 px-2"><div className="flex space-x-1 items-center justify-center"><span className="text-[15px] font-normal">$38</span></div></td>
                            <td className=" py-4">
                                <div className="flex justify-center items-center">
                                    <div className="w-[120px] h-[40px] px-[26px] flex items-center border border-qgray-border">
                                        <div className="flex justify-between items-center w-full">
                                            <button type="button" className="text-base text-qgray">-</button>
                                            <span className="text-qblack">1</span>
                                            <button type="button" className="text-base text-qgray">+</button>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="text-right py-4"><div className="flex space-x-1 items-center justify-center"><span className="text-[15px] font-normal">$38</span></div></td>
                            <td className="text-right py-4">
                                <div className="flex space-x-1 items-center justify-center">
                                    <span>
                                        <CloseIcon />
                                    </span>
                                </div>
                            </td>
                        </tr>

                        <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="pl-10  py-4 ">
                                <div className="flex space-x-6 items-center">
                                    <div className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
                                        <Image src="/assets/product-img-1.jpg" alt="" width={78} height={78} />
                                    </div>
                                    <div className="flex-1 flex flex-col"><p className="font-medium text-[15px] text-qblack">iPhone 12 Pro Max 128GB</p></div>
                                </div>
                            </td>
                            <td className="text-center py-4 px-2"><span className="text-[15px] font-normal">In Stock(23)</span></td>
                            <td className="text-center py-4 px-2"><div className="flex space-x-1 items-center justify-center"><span className="text-[15px] font-normal">$38</span></div></td>
                            <td className=" py-4">
                                <div className="flex justify-center items-center">
                                    <div className="w-[120px] h-[40px] px-[26px] flex items-center border border-qgray-border">
                                        <div className="flex justify-between items-center w-full">
                                            <button type="button" className="text-base text-qgray">-</button>
                                            <span className="text-qblack">1</span>
                                            <button type="button" className="text-base text-qgray">+</button>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="text-right py-4"><div className="flex space-x-1 items-center justify-center"><span className="text-[15px] font-normal">$38</span></div></td>
                            <td className="text-right py-4">
                                <div className="flex space-x-1 items-center justify-center">
                                    <span>
                                        <CloseIcon />
                                    </span>
                                </div>
                            </td>
                        </tr>

                        <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="pl-10  py-4 ">
                                <div className="flex space-x-6 items-center">
                                    <div className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
                                        <Image src="/assets/product-img-1.jpg" alt="" width={78} height={78} />
                                    </div>
                                    <div className="flex-1 flex flex-col"><p className="font-medium text-[15px] text-qblack">iPhone 12 Pro Max 128GB</p></div>
                                </div>
                            </td>
                            <td className="text-center py-4 px-2"><span className="text-[15px] font-normal">In Stock(23)</span></td>
                            <td className="text-center py-4 px-2"><div className="flex space-x-1 items-center justify-center"><span className="text-[15px] font-normal">$38</span></div></td>
                            <td className=" py-4">
                                <div className="flex justify-center items-center">
                                    <div className="w-[120px] h-[40px] px-[26px] flex items-center border border-qgray-border">
                                        <div className="flex justify-between items-center w-full">
                                            <button type="button" className="text-base text-qgray">-</button>
                                            <span className="text-qblack">1</span>
                                            <button type="button" className="text-base text-qgray">+</button>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="text-right py-4"><div className="flex space-x-1 items-center justify-center"><span className="text-[15px] font-normal">$38</span></div></td>
                            <td className="text-right py-4">
                                <div className="flex space-x-1 items-center justify-center">
                                    <span>
                                        <CloseIcon />
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="w-full mt-[30px] flex sm:justify-end justify-start">
                <div className="sm:flex sm:space-x-[30px] items-center">
                    <button type="button"><div className="w-full text-sm font-semibold text-qred mb-5 sm:mb-0">Limpiar lista de deseos</div></button>
                    <div className="w-[180px] h-[50px]">
                        <button type="button" className="sm:w-[158px] w-[80px]  h-full bg-qyellow text-sm font-semibold text-black outline-0"><div className="w-full text-sm font-semibold">Agregar al carrito todo</div></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Wishlist;