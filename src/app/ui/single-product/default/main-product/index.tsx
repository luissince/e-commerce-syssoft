'use client'

import React, { useEffect, useState } from "react";
import Tab from "./component/tab";
import { CartItemModel, ProductModel } from "@/app/lib/definitions";
import { isEmpty } from "@/helper/util";
import { useAppDispatch } from "@/app/lib/hooks/storeHooks";
import { addToCart } from "@/app/lib/store/slices/shoppingCardSlice";
import Title from "./component/title";
import Single from "./component/single";

const MainProduct: React.FC<ProductModel> = (product) => {
    const dispatch = useAppDispatch();

    const [mounted, setMounted] = useState<boolean>(false);
    const [nameImage, setNameImage] = useState<string>("/assets/noimage.jpg");
    const [widthImage, setWidthImage] = useState<number>(512);
    const [heightImage, setHeightImage] = useState<number>(315);

    const [color, setColor] = useState<string>('');
    const [validColor, setValidColor] = useState<boolean>(false);
    const [size, setSize] = useState<string>('');
    const [validSize, setValidSize] = useState<boolean>(false);
    const [flavor, setFlavor] = useState<string>('');
    const [validFlavor, setValidFlavor] = useState<boolean>(false);

    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        if (product.imagenes.length !== 0) {
            setNameImage(product.imagenes[0].nombre);
            setWidthImage(product.imagenes[0].ancho);
            setHeightImage(product.imagenes[0].alto);
        }

        setMounted(true);
    }, [product]);

    const handleSelectColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setColor(value);
        if (!isEmpty(value)) {
            setValidColor(false);
        }
    }

    const handleSelectSize = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSize(value);
        if (!isEmpty(value)) {
            setValidSize(false);
        }
    }

    const handleSelectFlavor = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setFlavor(value);
        if (!isEmpty(value)) {
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

    const handleAddToCart = () => {
        if (product.colores.length !== 0 && color === '') {
            setValidColor(true)
            return
        }

        if (product.tallas.length !== 0 && size === '') {
            setValidSize(true)
            return
        }

        if (product.sabores.length !== 0 && flavor === '') {
            setValidFlavor(true)
            return
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
    };

    if (!mounted) {
        return null;
    }

    return (
        <React.Fragment>
            <div className="single-product-wrapper bg-white pt-[30px] w-full">
                <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                    <Title titleBase={"Inicio"} titleDetail={"Producto Único"} />

                    <Single
                        product={product}
                        nameImage={nameImage}
                        widthImage={widthImage}
                        heightImage={heightImage}
                        setNameImage={setNameImage}
                        setWidthImage={setWidthImage}
                        setHeightImage={setHeightImage}
                        color={color}
                        validColor={validColor}
                        handleSelectColor={handleSelectColor}
                        size={size}
                        validSize={validSize}
                        handleSelectSize={handleSelectSize}
                        flavor={flavor}
                        validFlavor={validFlavor}
                        handleSelectFlavor={handleSelectFlavor}
                        quantity={quantity}
                        handleMinusQuantity={handleMinusQuantity}
                        handlePlusQuantity={handlePlusQuantity}
                        handleAddToCart={handleAddToCart}
                    />

                    <Tab product={product} tabNameOne={"Descripción"} tabNameTwo={"Detalles"} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default MainProduct;