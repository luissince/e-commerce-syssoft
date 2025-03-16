import { AttributeModel, CartItemModel, ProductModel } from "@/app/lib/definitions";
import { useAppDispatch } from "@/app/lib/hooks/storeHooks";
import { CheckCircleIcon, MinusCircleIcon } from "@heroicons/react/20/solid";
import { useRef, useState } from "react";
import { CustomModalType } from "./container";
import { fetchProductByCode } from "@/app/lib/data";
import { focusOnFirstInvalidButton, isEmpty, numberFormat } from "@/helper/util";
import { addToCart } from "@/app/lib/store/slices/shoppingCardSlice";
import { CustomModalForm } from ".";
import { ImSpinner9 } from "react-icons/im";

interface ButtonItemProps {
    attribute: AttributeModel;
    isSelected: boolean;
    onSelect: (id: string) => void;
}

const ButtonItem: React.FC<ButtonItemProps> = ({ attribute, isSelected, onSelect }) => {
    return (
        <button
            type="button"
            onClick={() => onSelect(attribute.idAtributo)}
            className={`
                inline-flex 
                items-center 
                justify-between 
                w-full 
                p-3 
                text-gray-600 
                bg-white border 
                border-gray-300 
                cursor-pointer 
                ${isSelected ? 'border-qyellow text-qyellow' : 'hover:text-gray-500 hover:bg-gray-100'} 
                focus:outline-none focus:ring-1 focus:ring-qyellow 
                active:bg-gray-200 
                dark:active:bg-gray-900 
                dark:hover:text-gray-300 
                dark:border-qyellow 
                dark:text-gray-400 
                dark:bg-gray-800 
                dark:hover:bg-gray-700`}
        >
            <div className="block">
                <div className="w-full text-sm font-semibold">{attribute.valor}</div>
                <div className="w-full text-xs text-black">{attribute.nombre}</div>
            </div>
            {
                isSelected
                    ? <CheckCircleIcon width={32} height={32} />
                    : <MinusCircleIcon width={32} height={32} />
            }
        </button>
    );
}

interface ProductoModal {
    isOpen: boolean;
    code: string;
    onClose: () => void
}

const ProductoModal: React.FC<ProductoModal> = ({ isOpen, code, onClose }) => {
    const dispatch = useAppDispatch();

    const refModal = useRef<CustomModalType>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const [product, setProduct] = useState<ProductModel>();

    const refContentColor = useRef<HTMLDivElement>(null);
    const [color, setColor] = useState<string>('');
    const [validColor, setValidColor] = useState<boolean>(false);

    const refContentSize = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState<string>('');
    const [validSize, setValidSize] = useState<boolean>(false);

    const refContentFlavor = useRef<HTMLDivElement>(null);
    const [flavor, setFlavor] = useState<string>('');
    const [validFlavor, setValidFlavor] = useState<boolean>(false);

    const [quantity, setQuantity] = useState<number>(1);

    const onOpen = async () => {
        const product = await fetchProductByCode(code, process.env.NEXT_PUBLIC_APP_BACK_END);
        setProduct(product!);
        setLoading(false);
    }

    const handleSelectColor = (id: string) => {
        setColor(id);
        if (!isEmpty(id)) {
            setValidColor(false);
        }
    }

    const handleSelectSize = (id: string) => {
        setSize(id);
        if (!isEmpty(id)) {
            setValidSize(false);
        }
    }

    const handleSelectFlavor = (id: string) => {
        setFlavor(id);
        if (!isEmpty(id)) {
            setValidFlavor(false);
        }
    }

    const handleMinusQuantity = () => {
        if (quantity <= 1) {
            return;
        }

        setQuantity(quantity => quantity - 1);
    };

    const handlePlusQuantity = () => {
        setQuantity(quantity => quantity + 1);
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        if (!product) {
            return;
        }

        if (product.colores.length !== 0 && color === '') {
            focusOnFirstInvalidButton(refContentColor.current!);
            setValidColor(true);
            return;
        }

        if (product.tallas.length !== 0 && size === '') {
            focusOnFirstInvalidButton(refContentSize.current!);
            setValidSize(true);
            return;
        }

        if (product.sabores.length !== 0 && flavor === '') {
            focusOnFirstInvalidButton(refContentFlavor.current!);
            setValidFlavor(true);
            return;
        }

        const cartItem: CartItemModel = {
            producto: product,
            cantidad: quantity,
            subTotal: 0,
            colorSeleccionado: product.colores.find((item) => item.idAtributo === color) ?? null,
            tallaSeleccionada: product.tallas.find((item) => item.idAtributo === size) ?? null,
            saborSeleccionado: product.sabores.find((item) => item.idAtributo === flavor) ?? null
        }
        dispatch(addToCart({ cartItem }));

        await refModal.current?.handleOnClose();
    }

    return (
        <CustomModalForm
            contentRef={refModal}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            contentLabel={""}
            titleHeader={"Producto"}
            body={
                <>
                    {loading && <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-70 flex flex-col items-center justify-center">
                        <div className="bg-black p-8 rounded-lg shadow-lg">
                            <div className="flex items-center justify-center mb-4">
                                <ImSpinner9 className="animate-spin text-3xl text-white" />
                            </div>
                            <h5 className="text-white font-bold text-xl">Procesando información...</h5>
                        </div>
                    </div>}

                    {!loading && product &&
                        <div className="p-4">
                            <h2 className="text-xl mb-4 text-black">{product?.nombre}</h2>
                            <div className="text-xs flex items-center mb-4 text-black">
                                {product?.descripcionCorta}
                            </div>

                            <div className="flex justify-between flex-wrap">
                                <div className="quantity-card-wrapper flex items-center h-[50px] space-x-[10px] mb-[30px]">
                                    <div className="w-[120px] h-full px-[26px] flex items-center border border-qgray-border">
                                        <div className="flex justify-between items-center w-full">
                                            <button
                                                type="button"
                                                className="text-base text-qgray"
                                                onClick={handleMinusQuantity}>-</button>
                                            <span className="text-qblack">{quantity}</span>
                                            <button
                                                type="button"
                                                className="text-base text-qgray"
                                                onClick={handlePlusQuantity}>+</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex space-x-2 items-center mb-7">
                                    <span className="text-sm font-500 text-qgray line-through mt-2">{numberFormat(((product!.precio * 0.10) + product!.precio))}</span>
                                    <span className="text-2xl font-500 text-qred">{numberFormat(product.precio)}</span>
                                </div>
                            </div>

                            {product.colores.length !== 0 && (<div ref={refContentColor} data-aos="fade-up" className="colors mb-[30px]">
                                <span className="text-sm font-normal uppercase text-black mb-[14px] inline-block">COLOR</span>
                                <ul className="grid w-full gap-6 md:grid-cols-2 mb-3">
                                    {
                                        product.colores.map((item, index) => {
                                            const isSelected = item.idAtributo === color;
                                            return (
                                                <li key={index}>
                                                    <ButtonItem
                                                        attribute={item}
                                                        isSelected={isSelected}
                                                        onSelect={handleSelectColor}
                                                    />
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                                {validColor && <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 relative" role="alert">
                                    <strong className="font-bold text-sm">¡Atención! </strong>
                                    <span className="block sm:inline text-sm">Completa este campo para continuar.</span>
                                </div>}
                            </div>)}

                            {product.tallas.length !== 0 && (<div ref={refContentSize} data-aos="fade-up" className="colors mb-[30px]">
                                <span className="text-sm font-normal uppercase text-black mb-[14px] inline-block">SIZES</span>
                                <ul className="grid w-full gap-6 md:grid-cols-2 mb-3">
                                    {
                                        product.tallas.map((item, index) => {
                                            const isSelected = item.idAtributo === size;
                                            return (
                                                <li key={index}>
                                                    <ButtonItem
                                                        attribute={item}
                                                        isSelected={isSelected}
                                                        onSelect={handleSelectSize}
                                                    />
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                                {validSize && <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 relative" role="alert">
                                    <strong className="font-bold text-sm">¡Atención! </strong>
                                    <span className="block sm:inline text-sm">Completa este campo para continuar.</span>
                                </div>}
                            </div>)}

                            {product.sabores.length !== 0 && (<div ref={refContentFlavor} data-aos="fade-up" className="colors mb-[30px]">
                                <span className="text-sm font-normal uppercase text-black mb-[14px] inline-block">FLAVORS</span>
                                <ul className="grid w-full gap-6 md:grid-cols-2 mb-3">
                                    {
                                        product.sabores.map((item, index) => {
                                            const isSelected = item.idAtributo === flavor;
                                            return (
                                                <li key={index}>
                                                    <ButtonItem
                                                        attribute={item}
                                                        isSelected={isSelected}
                                                        onSelect={handleSelectFlavor}
                                                    />
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                                {validFlavor && <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 relative" role="alert">
                                    <strong className="font-bold text-sm">¡Atención! </strong>
                                    <span className="block sm:inline text-sm">Completa este campo para continuar.</span>
                                </div>}
                            </div>)}

                        </div>
                    }
                </>
            }
            footer={
                <div className="flex items-center">
                    <button
                        className="px-5 h-10 text-sm font-semibold bg-search-btn text-black"
                        type="submit"
                    >
                        Agregar
                    </button>
                    <p className="px-4"></p>
                    <button
                        className="px-5 h-10 text-sm font-semibold bg-red-500 text-white"
                        type="button"
                        onClick={async () => await refModal.current?.handleOnClose()}
                    >
                        Close
                    </button>
                </div>
            }
            onSubmit={onSubmit} />
    );
}

export default ProductoModal;