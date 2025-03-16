import { ProductModel } from "@/app/lib/definitions";
import { numberFormat } from "@/helper/util";
import Image from "next/image";
import { CheckCircleIcon, MinusCircleIcon } from "@heroicons/react/20/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { BagIcon } from "@/app/ui/component/import-muneli/icons";

interface SingleProps {
    product: ProductModel;
    nameImage: string;
    widthImage: number;
    heightImage: number;
    setNameImage: React.Dispatch<React.SetStateAction<string>>;
    setWidthImage: React.Dispatch<React.SetStateAction<number>>;
    setHeightImage: React.Dispatch<React.SetStateAction<number>>;
    color: string;
    validColor: boolean;
    handleSelectColor: (event: React.ChangeEvent<HTMLInputElement>) => void;
    size: string;
    validSize: boolean;
    handleSelectSize: (event: React.ChangeEvent<HTMLInputElement>) => void;
    flavor: string;
    validFlavor: boolean;
    handleSelectFlavor: (event: React.ChangeEvent<HTMLInputElement>) => void;
    quantity: number;
    handleMinusQuantity: () => void;
    handlePlusQuantity: () => void;
    handleAddToCart: () => void;
}

export default function Single({
    product,
    nameImage,
    widthImage,
    heightImage,
    setNameImage,
    setWidthImage,
    setHeightImage,
    color,
    validColor,
    handleSelectColor,
    size,
    validSize,
    handleSelectSize,
    flavor,
    validFlavor,
    handleSelectFlavor,
    quantity,
    handleMinusQuantity,
    handlePlusQuantity,
    handleAddToCart
}: SingleProps) {
    return (
        <div className="w-full bg-white pb-[60px]">
            <div className="product-view w-full lg:flex justify-between">
                <div data-aos="fade-right" className="lg:w-1/2 xl:mr-[70px] lg:mr-[50px]">
                    <div className="w-full h-[600px] border border-[#e2e2e2] rounded-md flex justify-center items-center overflow-hidden relative mb-3">
                        <Image
                            src={nameImage}
                            alt="imagen"
                            className="w-full h-full object-contain"
                            width={widthImage}
                            height={heightImage}
                            priority={true}
                        />
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {product.imagenes.map((imagen, index) => (
                            <div
                                key={index}
                                className={`w-[140px] h-[140px] p-[15px] rounded-md border border-[#e2e2e2] cursor-pointer ${imagen.nombre === nameImage ? 'ring-2 ring-[#f76d24]' : ''}`}
                                onClick={() => {
                                    setNameImage(imagen.nombre);
                                    setWidthImage(imagen.ancho);
                                    setHeightImage(imagen.alto);
                                }}
                            >
                                <Image
                                    src={imagen.nombre}
                                    alt=""
                                    width={385}
                                    height={385}
                                    className="w-full h-full object-contain"
                                    priority={true}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1">
                    <div className="product-details w-full mt-10 lg:mt-0">
                        <p data-aos="fade-up" className="text-2xl font-bold text-[#042460]">{product.nombre}</p>
                        <span data-aos="fade-up" className="text-[#042460] text-xs font-normal uppercase tracking-wider mb-2 inline-block">CÓDIGO: {product.codigo}</span>
                        <div data-aos="fade-up" className="flex space-x-2 items-center mb-7">
                            <span className="text-2xl font-bold text-[#f76d24]">{numberFormat(product.precio)}</span>
                        </div>
                        <p data-aos="fade-up" className="text-gray-600 text-sm mb-[30px] leading-7">{product.descripcionCorta}</p>
                        {product.colores.length !== 0 && (
                            <div data-aos="fade-up" className="colors mb-[30px]">
                                <span className="text-sm font-normal uppercase text-[#042460] mb-[14px] inline-block">COLOR</span>
                                <ul className="grid w-full gap-6 md:grid-cols-2 mb-3">
                                    {product.colores.map((item, index) => (
                                        <li key={index}>
                                            <input
                                                type="radio"
                                                id={item.idAtributo}
                                                name="rbColor"
                                                value={item.idAtributo}
                                                className="hidden peer"
                                                checked={item.idAtributo === color}
                                                onChange={handleSelectColor}
                                            />
                                            <label
                                                htmlFor={item.idAtributo}
                                                className="inline-flex items-center justify-between w-full p-3 text-gray-600 bg-white rounded-md border border-[#b2b2b2] cursor-pointer peer-checked:border-[#f76d24] peer-checked:text-[#f76d24] hover:text-gray-500 hover:bg-gray-100"
                                            >
                                                <div className="block">
                                                    <div className="w-full text-sm font-semibold">{item.valor}</div>
                                                    <div className="w-full text-xs text-black">{item.nombre}</div>
                                                </div>
                                                {item.idAtributo === color ? (
                                                    <CheckCircleIcon width={32} height={32} />
                                                ) : (
                                                    <MinusCircleIcon width={32} height={32} />
                                                )}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                                {validColor && (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 relative" role="alert">
                                        <strong className="font-bold text-sm">¡Atención! </strong>
                                        <span className="block sm:inline text-sm">Completa este campo para continuar.</span>
                                    </div>
                                )}
                            </div>
                        )}
                        {product.tallas.length !== 0 && (
                            <div data-aos="fade-up" className="colors mb-[30px]">
                                <span className="text-sm font-normal uppercase text-[#042460] mb-[14px] inline-block">TAMAÑOS</span>
                                <ul className="grid w-full gap-6 md:grid-cols-2 mb-3">
                                    {product.tallas.map((item, index) => (
                                        <li key={index}>
                                            <input
                                                type="radio"
                                                id={item.idAtributo}
                                                name="rbSizes"
                                                value={item.idAtributo}
                                                className="hidden peer"
                                                checked={item.idAtributo === size}
                                                onChange={handleSelectSize}
                                            />
                                            <label
                                                htmlFor={item.idAtributo}
                                                className="inline-flex items-center justify-between w-full p-3 text-gray-600 bg-white rounded-md border border-[#b2b2b2] cursor-pointer peer-checked:border-[#f76d24] peer-checked:text-[#f76d24] hover:text-gray-500 hover:bg-gray-100"
                                            >
                                                <div className="block">
                                                    <div className="w-full text-sm font-semibold">{item.valor}</div>
                                                    <div className="w-full text-xs text-black">{item.nombre}</div>
                                                </div>
                                                {item.idAtributo === size ? (
                                                    <CheckCircleIcon width={32} height={32} />
                                                ) : (
                                                    <MinusCircleIcon width={32} height={32} />
                                                )}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                                {validSize && (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 relative" role="alert">
                                        <strong className="font-bold text-sm">¡Atención! </strong>
                                        <span className="block sm:inline text-sm">Completa este campo para continuar.</span>
                                    </div>
                                )}
                            </div>
                        )}
                        {product.sabores.length !== 0 && (
                            <div data-aos="fade-up" className="colors mb-[30px]">
                                <span className="text-sm font-normal uppercase text-[#042460] mb-[14px] inline-block">SABORES</span>
                                <ul className="grid w-full gap-6 md:grid-cols-2 mb-3">
                                    {product.sabores.map((item, index) => (
                                        <li key={index}>
                                            <input
                                                type="radio"
                                                id={item.idAtributo}
                                                name="rbFlavors"
                                                value={item.idAtributo}
                                                className="hidden peer"
                                                checked={item.idAtributo === flavor}
                                                onChange={handleSelectFlavor}
                                            />
                                            <label
                                                htmlFor={item.idAtributo}
                                                className="inline-flex items-center justify-between w-full p-3 text-gray-600 bg-white rounded-md border border-[#b2b2b2] cursor-pointer peer-checked:border-[#f76d24] peer-checked:text-[#f76d24] hover:text-gray-500 hover:bg-gray-100"
                                            >
                                                <div className="block">
                                                    <div className="w-full text-sm font-semibold">{item.valor}</div>
                                                    <div className="w-full text-xs text-black">{item.nombre}</div>
                                                </div>
                                                {item.idAtributo === flavor ? (
                                                    <CheckCircleIcon width={32} height={32} />
                                                ) : (
                                                    <MinusCircleIcon width={32} height={32} />
                                                )}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                                {validFlavor && (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 relative" role="alert">
                                        <strong className="font-bold text-sm">¡Atención! </strong>
                                        <span className="block sm:inline text-sm">Completa este campo para continuar.</span>
                                    </div>
                                )}
                            </div>
                        )}
                        <div data-aos="fade-up" className="quantity-card-wrapper w-full flex items-center h-[50px] space-x-6 mb-[30px]">
                            <div className="w-[120px] h-full px-[26px] flex items-center rounded-md border border-[#b2b2b2]">
                                <div className="flex justify-between items-center w-full">
                                    <button
                                        type="button"
                                        className="text-base text-gray-600"
                                        onClick={handleMinusQuantity}
                                    >
                                        -
                                    </button>
                                    <span className="text-gray-800">{quantity}</span>
                                    <button
                                        type="button"
                                        className="text-base text-gray-600"
                                        onClick={handlePlusQuantity}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="h-full px-3 flex justify-center items-center border border-[#042460] bg-[#042460] rounded-md"
                            >
                                <span>
                                    <HeartIcon width={24} fill="white" />
                                </span>
                            </button>
                            <button
                                type="button"
                                className="w-full h-full text-sm font-semibold bg-[#f76d24] text-white rounded-md"
                                onClick={handleAddToCart}
                            >
                                <div className="flex items-center justify-center space-x-3">
                                    <span>
                                        <BagIcon width={20} height={20} fill="#fff" />
                                    </span>
                                    <span>Agregar</span>
                                </div>
                            </button>
                        </div>
                        <div data-aos="fade-up" className="mb-[20px]">
                            <p className="text-[13px] text-gray-600 leading-7">
                                <span className="text-gray-800">Categoría:</span> {product.categoria.nombre}
                            </p>
                            <p className="text-[13px] text-gray-600 leading-7">
                                <span className="text-gray-800">Marca:</span> {product.marca ? product.marca.nombre : '-'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
