'use client'
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks/storeHooks";
import { selectCart } from '@/app/lib/store/slices/shoppingCardSlice';
import { formatDecimal } from "@/helper/util";
import { useEffect, useState } from "react";
import { removeFromCart, updateQuantity } from "@/app/lib/store/slices/shoppingCardSlice";
import { CartItemModel } from "@/app/lib/definitions";
import { IoClose } from "react-icons/io5";
import Container from "@/app/ui/component/import-muneli/container";

const Body = () => {
    const [mounted, setMounted] = useState(false);
    const cart = useAppSelector(selectCart);

    const dispatch = useAppDispatch();

    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }

    return (
        <div className="contact-wrapper w-full">
            <Container>
                <div className="w-full pt-10 pb-10">
                    <div className="relative w-full overflow-x-auto border border-[#EDEDED]">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead>
                                <tr className="text-[13px] font-medium text-black bg-[#F6F6F6] whitespace-nowrap px-2 border-b default-border-bottom uppercase">
                                    <th className="py-4 pl-10 block whitespace-nowrap  w-[380px]">Producto</th>
                                    <th className="py-4 whitespace-nowrap text-center">color</th>
                                    <th className="py-4 whitespace-nowrap text-center">tamaño</th>
                                    <th className="py-4 whitespace-nowrap text-center">precio</th>
                                    <th className="py-4 whitespace-nowrap text-center">cantidad</th>
                                    <th className="py-4 whitespace-nowrap text-center">total</th>
                                    <th className="py-4 whitespace-nowrap text-right w-[114px] block"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.items.map((item: CartItemModel, index: number) => {
                                        return (
                                            <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                                <td className="pl-10  py-4 ">
                                                    <div className="flex space-x-6 items-center">
                                                        <div className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
                                                            <Image src={item.producto.imagen ?? "/assets/noimage.jpg"} alt="product" className="w-full h-full object-contain" width={196} height={196} />
                                                        </div>
                                                        <div className="flex-1 flex flex-col">
                                                            <p className="font-bold text-base text-[#042460]">{item.producto.nombre}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center py-4 px-2">
                                                    <div className=" flex justify-center items-center">
                                                        <span className="w-[20px] h-[20px] bg-[#E4BC87] block rounded-full"></span>
                                                    </div>
                                                </td>
                                                <td className="text-center py-4 px-2">
                                                    <div className="flex space-x-1 items-center justify-center">
                                                        <span className="text-base font-normal text-black">Small</span>
                                                    </div>
                                                </td>
                                                <td className="text-center py-4 px-2">
                                                    <div className="flex space-x-1 items-center justify-center">
                                                        <span className="text-base font-normal text-black">{formatDecimal(item.producto.precio)}</span>
                                                    </div>
                                                </td>
                                                <td className=" py-4">
                                                    <div className="flex justify-center items-center">
                                                        <div className="w-[120px] h-[40px] px-[26px] flex items-center border border-qgray-border">
                                                            <div className="flex justify-between items-center w-full">
                                                                <button
                                                                    type="button"
                                                                    className="text-base text-qgray"
                                                                    // onClick={handleMinusQuantity}
                                                                    onClick={() => dispatch(updateQuantity({
                                                                        idProducto: item.producto.idProducto,
                                                                        cantidad: item.cantidad - 1
                                                                    }))}
                                                                >-</button>
                                                                <span className="text-qblack">{formatDecimal(item.cantidad, 0)}</span>
                                                                <button
                                                                    type="button"
                                                                    className="text-base text-qgray"
                                                                    // onClick={handlePlusQuantity}
                                                                    onClick={() => dispatch(updateQuantity({
                                                                        idProducto: item.producto.idProducto,
                                                                        cantidad: item.cantidad + 1
                                                                    }))}
                                                                >+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-right py-4">
                                                    <div className="flex space-x-1 items-center justify-center">
                                                        <span className="text-base font-bold text-[#042460]">
                                                            {formatDecimal(item.producto.precio * item.cantidad)}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="text-center py-4">
                                                    <button
                                                        onClick={() => {
                                                            dispatch(removeFromCart({
                                                                idProducto: item.producto.idProducto
                                                            }));
                                                        }}>
                                                        <span>
                                                            <IoClose size={24} />
                                                        </span>
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="w-full mt-10 flex justify-end">
                    <div className="flex items-center justify-between space-x-10">
                        <div>
                            <button
                                type="button"
                                className="text-red-500 flex items-center"
                            >
                                <span className="inline-block text-sm font-semibold">Limpiar lista de deseos</span>
                            </button>
                        </div>

                        <div>
                            <button
                                type="button"
                                className="w-full block bg-[#f76d24] text-white px-6 py-3 rounded-md text-lg text-center font-semibold hover:bg-[#e05a1f] transition duration-300"
                            >
                                <span className="text-sm font-semibold">Agregar todo al carrito</span>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Body;