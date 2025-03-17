'use client'
import { forwardRef, useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/app/lib/hooks/storeHooks";
import { formatDecimal } from "@/helper/util";
import { useFormState, useFormStatus } from "react-dom";
import { submitCheckoutForm } from "@/app/lib/actions";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoCloseCircle } from "react-icons/io5";
import Select, { OptionSelect } from "@/app/ui/single-product/default/main-product/component/select";
import { TypeOfDocumentModel } from "@/app/lib/definitions";
import { MdError } from "react-icons/md";
import { selectCart } from "@/app/lib/store/slices/shoppingCardSlice";

interface ErrorItemProps {
    name: string;
    errors: string[];
}

interface InitialProps {
    errors: ErrorItemProps[] | null;
    message: string;
    success: boolean;
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="w-full h-[50px] bg-black text-white flex justify-center items-center"
            disabled={pending}>
            <span className="text-sm font-semibold">{pending ? 'Enviando...' : 'Realizar Pedido'}</span>
        </button>
    );
}

function Loading() {
    const { pending } = useFormStatus();

    useEffect(() => {
        if (pending) {
            // Cuando está pendiente, ocultar el scroll
            document.body.style.overflow = 'hidden';
        }

        // Cleanup function que se ejecuta cuando el componente se desmonta
        // o cuando pending cambia a false
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [pending]);

    if (!pending) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70">
            <div className="animate-spin">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
            </div>
        </div>
    );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
    return (
        <div className="input-com w-full h-full">
            <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                {props.label}
            </label>
            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                <input
                    ref={ref}
                    {...props}
                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                />
            </div>
        </div>
    );
});

Input.displayName = 'Input';

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ ...props }, ref) => {
    return (
        <div className="input-com w-full h-full">
            <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                {props.label}
            </label>
            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                <textarea
                    ref={ref}
                    {...props}
                    rows={4}
                    className="placeholder:text-sm text-sm py-3 px-6 text-dark-gray font-normal bg-white focus:ring-0 focus:outline-none w-full"
                />
            </div>
        </div>
    );
});

TextArea.displayName = 'TextArea';


interface Props {
    inputType: string;
    listTypeOfDocument: TypeOfDocumentModel[];
}

const Body = (props: Props) => {
    const [mounted, setMounted] = useState(false);
    const [typeDocument, setTypeDocument] = useState<string | number>('');
    const cart = useAppSelector(selectCart);

    const initialState: InitialProps = {
        errors: null,
        message: '',
        success: false,
    };

    const [state, formAction] = useFormState(submitCheckoutForm, initialState);
    const ref = useRef<HTMLFormElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }

    const handleSelectChange = (value: OptionSelect) => {
        setTypeDocument(value.id);
    };

    return (
        <div className="w-full">
            <form ref={ref} action={(formData: FormData) => {
                formData.append('typeDocument', typeDocument.toString());
                formData.append('orders', JSON.stringify(cart.items));
                formAction(formData);
            }} className="container max-w-screen-x mx-auto md:px-6">

                {
                    state.message && (
                        <div className={`mb-4 p-3 text-sm flex items-center space-x-1 ${state.success ? 'bg-green-100 text-qblack' : 'bg-red-100 text-red-800'}`}>
                            {
                                state.success
                                    ? <AiFillCheckCircle size={20} />
                                    : <IoCloseCircle size={20} />
                            }
                            <span>{state.message}</span>
                        </div>
                    )
                }

                <Loading />
                {/* <div className="w-full sm:mb-10 mb-5">
                    <div className="sm:flex sm:space-x-[18px]">
                        <div className="sm:w-1/2 w-full mb-5 h-[70px]">
                            <a href="#">
                                <div className="w-full h-full bg-[#F6F6F6] text-qblack flex justify-center items-center">
                                    <span className="text-[15px] font-medium">Log into your Account</span>
                                </div>
                            </a>
                        </div>
                        <div className="flex-1 h-[70px]">
                            <a href="#">
                                <div className="w-full h-full bg-[#F6F6F6] text-qblack flex justify-center items-center">
                                    <span className="text-[15px] font-medium">Enter Coupon Code</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div> */}

                <div className="w-full lg:flex lg:space-x-[30px]">


                    <div className="lg:w-1/2 w-full">

                        <h1 className="sm:text-2xl text-xl text-qblack font-medium mb-5">Detalles de Facturación</h1>
                        <div className="form-area">
                            <div className="flex space-x-5 items-center mb-6">
                                <div className="w-full">
                                    <Select
                                        title="Tipo de Documento*"
                                        options={props.listTypeOfDocument.map((item) => (
                                            { id: item.idTipoDocumento, name: item.nombre }
                                        ))}
                                        onChange={handleSelectChange}
                                    />

                                    {
                                        state.errors && state.errors.find(item => item.name === 'typeDocument')?.errors.map((error, index) => (
                                            <div key={index} className="flex items-center space-x-1 bg-red-100 text-red-800 mb-2 px-3 py-2">
                                                <MdError size={16} />
                                                <span className="text-xs">{error}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="flex space-x-5 items-center mb-6">
                                <div className="w-full">
                                    <Input
                                        label="Documento de Identidad*"
                                        placeholder="10909034223"
                                        id="numberIdentity"
                                        name="numberIdentity"
                                        autoFocus={true}
                                        onPaste={(event: React.ClipboardEvent<HTMLInputElement>) => {
                                            const clipboardData = event.clipboardData;
                                            const pastedData = clipboardData.getData("text");

                                            // Validar el formato completo para texto pegado
                                            const isValidFormat = /^[0-9]+$/.test(pastedData);

                                            if (!isValidFormat) {
                                                // Bloquear el pegado si no es válido
                                                event.preventDefault();
                                            } else {
                                                // O puedes validar todo el valor resultante si se pega
                                                const target = event.target as HTMLInputElement;
                                                const newValue = target.value + pastedData;
                                                if (!/^[0-9]*$/.test(newValue)) {
                                                    event.preventDefault();
                                                }
                                            }
                                        }}
                                        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                                            const target = event.target as HTMLInputElement;
                                            const key = event.key;

                                            // Lista de teclas permitidas
                                            const allowedKeys = [
                                                "Backspace",
                                                "Delete",
                                                "ArrowLeft",
                                                "ArrowRight",
                                                "Tab",
                                            ];

                                            // Verifica si la tecla es un número, permitida o un atajo de teclado
                                            const isNumber = /^[0-9]$/.test(key);
                                            const isAllowedKey = allowedKeys.includes(key);
                                            const isShortcut =
                                                (event.ctrlKey || event.metaKey) && (key === "c" || key === "v" || key === "x");

                                            // Si es una tecla "muerta" o no está permitida, se bloquea
                                            if (key === "Dead" || !(isNumber || isAllowedKey || isShortcut)) {
                                                event.preventDefault();
                                                return;
                                            }
                                        }}
                                        onInput={(event) => {
                                            const target = event.target as HTMLInputElement;
                                            const cleanValue = target.value.replace(/[[\]`´'\\]/g, '');
                                            target.value = cleanValue;
                                        }}
                                    />

                                    {
                                        state.errors && state.errors.find(item => item.name === 'numberIdentity')?.errors.map((error, index) => (
                                            <div key={index} className="flex items-center space-x-1 bg-red-100 text-red-800 mb-2 px-3 py-2">
                                                <MdError size={16} />
                                                <span className="text-xs">{error}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="sm:flex sm:space-x-5 items-center mb-6">
                                <div className="sm:w-1/2  mb-5 sm:mb-0">
                                    <Input
                                        label="Nombres*"
                                        placeholder="Juan"
                                        id="firstname"
                                        name="firstname"
                                    />

                                    {
                                        state.errors && state.errors.find(item => item.name === 'firstname')?.errors.map((error, index) => (
                                            <div key={index} className="flex items-center space-x-1 bg-red-100 text-red-800 mb-2 px-3 py-2">
                                                <MdError size={16} />
                                                <span className="text-xs">{error}</span>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="flex-1">
                                    <Input
                                        label="Apellidos*"
                                        placeholder="Perez"
                                        id="lastname"
                                        name="lastname"
                                    />

                                    {
                                        state.errors && state.errors.find(item => item.name === 'lastname')?.errors.map((error, index) => (
                                            <div key={index} className="flex items-center space-x-1 bg-red-100 text-red-800 mb-2 px-3 py-2">
                                                <MdError size={16} />
                                                <span className="text-xs">{error}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="flex space-x-5 items-center mb-6">
                                <div className="w-1/2">
                                    <Input
                                        label="Email*"
                                        placeholder="juanperez@gmail.com"
                                        id="email"
                                        name="email"
                                    />

                                    {
                                        state.errors && state.errors.find(item => item.name === 'email')?.errors.map((error, index) => (
                                            <div key={index} className="flex items-center space-x-1 bg-red-100 text-red-800 mb-2 px-3 py-2">
                                                <MdError size={16} />
                                                <span className="text-xs">{error}</span>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="flex-1">
                                    <Input
                                        type={props.inputType}
                                        label="Celular*"
                                        placeholder="+51 999999999"
                                        id="phone"
                                        name="phone"
                                        onPaste={(event: React.ClipboardEvent<HTMLInputElement>) => {
                                            const clipboardData = event.clipboardData;
                                            const pastedData = clipboardData.getData("text");

                                            // Validar el formato completo para texto pegado
                                            const isValidFormat = /^[0-9+()-]+$/.test(pastedData);

                                            if (!isValidFormat) {
                                                // Bloquear el pegado si no es válido
                                                event.preventDefault();
                                            } else {
                                                // O puedes validar todo el valor resultante si se pega
                                                const target = event.target as HTMLInputElement;
                                                const newValue = target.value + pastedData;
                                                if (!/^[0-9+()-]*$/.test(newValue)) {
                                                    event.preventDefault();
                                                }
                                            }
                                        }}
                                        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                                            const target = event.target as HTMLInputElement;
                                            const key = event.key;
                                            const inputValue = target.value;

                                            // Lista de teclas permitidas
                                            const allowedKeys = [
                                                "Backspace",
                                                "Delete",
                                                "ArrowLeft",
                                                "ArrowRight",
                                                "Tab",
                                                "+",
                                                "-",
                                                "(",
                                                ")"
                                            ];

                                            // Verifica si la tecla es un número, permitida o un atajo de teclado
                                            const isNumber = /^[0-9]$/.test(key);
                                            const isAllowedKey = allowedKeys.includes(key);
                                            const isShortcut =
                                                (event.ctrlKey || event.metaKey) && (key === "c" || key === "v" || key === "x");

                                            // Si es una tecla "muerta" o no está permitida, se bloquea
                                            if (key === "Dead" || !(isNumber || isAllowedKey || isShortcut)) {
                                                event.preventDefault();
                                                return;
                                            }

                                            // Evitar duplicados de caracteres únicos como "+" y "-"
                                            if ((key === "+" || key === "-") && inputValue.includes(key)) {
                                                event.preventDefault();
                                            }
                                        }}
                                        onInput={(event) => {
                                            const target = event.target as HTMLInputElement;
                                            const cleanValue = target.value.replace(/[[\]`´'\\]/g, '');
                                            target.value = cleanValue;
                                        }}
                                    />

                                    {
                                        state.errors && state.errors.find(item => item.name === 'phone')?.errors.map((error, index) => (
                                            <div key={index} className="flex items-center space-x-1 bg-red-100 text-red-800 mb-2 px-3 py-2">
                                                <MdError size={16} />
                                                <span className="text-xs">{error}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="flex space-x-5 items-center mb-6">
                                <div className="w-full">
                                    <Input
                                        label="Dirección*"
                                        placeholder="Calle 123, 123 123"
                                        id="address"
                                        name="address"
                                    />

                                    {
                                        state.errors && state.errors.find(item => item.name === 'address')?.errors.map((error, index) => (
                                            <div key={index} className="flex items-center space-x-1 bg-red-100 text-red-800 mb-2 px-3 py-2">
                                                <MdError size={16} />
                                                <span className="text-xs">{error}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="flex space-x-5 items-center mb-6">
                                <div className="w-full">
                                    <TextArea
                                        label="Mensaje del pedido"
                                        placeholder="Calle 123, 123 123"
                                        id="address"
                                        name="address"
                                    />
                                </div>
                            </div>

                            {/* <div className="mb-6">
                                    <h1 className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Country*</h1>
                                    <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2">
                                        <span className="text-[13px] text-qgraytwo">Select Country</span>
                                        <span>
                                            <ChevronDownIcon />
                                        </span>
                                    </div>
                                </div> */}

                            {/* <div className="mb-6">
                                    <div className="w-full">
                                        <div className="input-com w-full h-full">
                                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Address*</label>
                                            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                                <input placeholder="your address here" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                            {/* <div className="flex space-x-5 items-center mb-6">
                                    <div className="w-1/2">
                                        <h1 className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Town / City*</h1>
                                        <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center">
                                            <span className="text-[13px] text-qgraytwo">Miyami Town</span>
                                            <span>
                                                <ChevronDownIcon />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="input-com w-full h-full">
                                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Postcode / ZIP*</label>
                                            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                                <input placeholder="" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                            {/* <div className="flex space-x-2 items-center mb-10">
                                    <div>
                                        <input type="checkbox" name="" id="create" />
                                    </div>
                                    <label htmlFor="create" className="text-qblack text-[15px] select-none">Create an account?</label>
                                </div> */}

                            {/* <div className="">
                                    <h1 className="text-2xl text-qblack font-medium mb-3">Billing Details</h1>
                                    <div className="flex space-x-2 items-center mb-10">
                                        <div>
                                            <input type="checkbox" name="" id="address" />
                                        </div>
                                        <label htmlFor="address" className="text-qblack text-[15px] select-none">Ship to a different address</label>
                                    </div>
                                </div> */}
                        </div>
                    </div>

                    <div className="flex-1">

                        <h1 className="sm:text-2xl text-xl text-qblack font-medium mb-5">Resumen del Orden</h1>
                        <div className="w-full px-10 py-[30px] border border-[#EDEDED]">
                            <div className="sub-total mb-6">
                                <div className=" flex justify-between mb-5">
                                    <p className="text-[13px] font-medium text-qblack uppercase">Productos</p>
                                    <p className="text-[13px] font-medium text-qblack uppercase">Total</p>
                                </div>
                                <div className="w-full h-[1px] bg-[#EDEDED]"></div>
                            </div>

                            <div className="product-list w-full mb-[30px]">
                                <ul className="flex flex-col space-y-5">
                                    {
                                        cart.items.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <div className="flex justify-between items-center space-x-2">
                                                        <div>
                                                            <h4 className="text-[15px] text-qblack mb-2.5">{item.producto.nombre}<sup className="text-[13px] text-qgray ml-2 mt-2">x{item.cantidad}</sup></h4>
                                                            <p className="text-[13px] text-qgray">{item.producto.descripcionCorta}</p>
                                                        </div>
                                                        <div>
                                                            <span className="text-[15px] text-qblack font-medium">{formatDecimal(item.producto.precio)}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>

                            <div className="w-full h-[1px] bg-[#EDEDED]"></div>

                            {/* <div className="mt-[30px]">
                                <div className=" flex justify-between mb-5">
                                    <p className="text-[13px] font-medium text-qblack uppercase">SUBTOTAL</p>
                                    <p className="text-[15px] font-medium text-qblack uppercase">$365</p>
                                </div>
                            </div> */}

                            {/* <div className="w-full mt-[30px]">
                                <div className="sub-total mb-6">
                                    <div className=" flex justify-between mb-5">
                                        <div>
                                            <span className="text-xs text-qgraytwo mb-3 block">SHIPPING</span>
                                            <p className="text-base font-medium text-qblack">Free Shipping</p>
                                        </div>
                                        <p className="text-[15px] font-medium text-qblack">+$0</p>
                                    </div>
                                    <div className="w-full h-[1px] bg-[#EDEDED]"></div>
                                </div>
                            </div> */}

                            <div className="mt-[30px]">
                                <div className=" flex justify-between mb-5">
                                    <p className="text-2xl font-medium text-qblack">Total</p>
                                    <p className="text-2xl font-medium text-qred">{formatDecimal(cart.totalPrecio ?? 0)}</p>
                                </div>
                            </div>

                            {/* <div className="shipping mt-[30px]">
                                <ul className="flex flex-col space-y-1">
                                    <li className=" mb-5">
                                        <div className="flex space-x-2.5 items-center mb-4">
                                            <div className="input-radio">
                                                <input type="radio" name="price" className="accent-pink-500" id="transfer" />
                                            </div>
                                            <label htmlFor="transfer" className="text-[18px] text-normal text-qblack">Direct Bank Transfer</label>
                                        </div>
                                        <p className="text-qgraytwo text-[15px] ml-6">Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                                    </li>
                                    <li className=" mb-5">
                                        <div className="flex space-x-2.5 items-center mb-4">
                                            <div className="input-radio">
                                                <input type="radio" name="price" className="accent-pink-500" id="transfer" />
                                            </div>
                                            <label htmlFor="transfer" className="text-[18px] text-normal text-qblack">Direct Bank Transfer</label>
                                        </div>
                                    </li>
                                    <li className=" mb-5">
                                        <div className="flex space-x-2.5 items-center mb-4">
                                            <div className="input-radio">
                                                <input type="radio" name="price" className="accent-pink-500" id="transfer" />
                                            </div>
                                            <label htmlFor="transfer" className="text-[18px] text-normal text-qblack">Direct Bank Transfer</label>
                                        </div>
                                    </li>
                                </ul>
                            </div> */}

                            <SubmitButton />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Body;