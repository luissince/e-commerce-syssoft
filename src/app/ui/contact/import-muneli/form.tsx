'use client';
import { submitContactForm } from "@/app/lib/actions";
import { error } from "console";
import { useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoCloseCircle } from "react-icons/io5";
import { MdError } from "react-icons/md";

interface ErrorItemProps {
    name: string;
    errors: string[];
}

interface InitialProps {
    errors: ErrorItemProps[] | null;
    message: string;
    success: boolean;
}

// Componente hijo para enviar el formulario
function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-[#f76d24] w-full text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#e05a1f] transition duration-300">
             <span>{pending ? 'Enviando...' : 'Enviar'}</span>
        </button>
    );
}

// Componente hijo que muestra un spinner mientras se envía el formulario
function Loading() {
    const { pending } = useFormStatus();

    if (!pending) {
        return null;
    }

    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/70">
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


// Componente hijo que muestra los campos del formulario
function Body({ inputType, state }: { inputType: string, state: InitialProps }) {
    const { pending } = useFormStatus();

    return (
        <>
            <div className="mb-4">
                <div className="input-com w-full h-full">
                    <label className="input-label capitalize block  mb-2 text-[#042460] text-xs font-normal" htmlFor="name">Nombres*</label>
                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                        <input
                            placeholder="Juan Perez"
                            className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px] dark:bg-black"
                            id="name"
                            name="name"
                            autoFocus={true}
                            disabled={pending}
                        />
                    </div>
                    {
                        state.errors && state.errors.find(item => item.name === 'name')?.errors.map((error, index) => (
                            <div key={index} className="flex items-center space-x-1 bg-red-100 text-red-800 mb-2 px-3 py-2">
                                <MdError size={16} />
                                <span className="text-xs">{error}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="mb-4">
                <div className="input-com w-full h-full">
                    <label className="input-label capitalize block  mb-2 text-[#042460] text-xs font-normal" htmlFor="email">Email*</label>
                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                        <input
                            type="email"
                            placeholder="info@syssoftintegra.com"
                            className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px] dark:bg-black"
                            id="email"
                            name="email"
                            disabled={pending}
                        />
                    </div>
                    {
                        state.errors && state.errors.find(item => item.name === 'email')?.errors.map((error, index) => (
                            <div key={index} className="flex items-center space-x-1 bg-red-100 text-red-800 mb-2 px-3 py-2">
                                <MdError size={16} />
                                <span className="text-xs">{error}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="mb-4">
                <div className="input-com w-full h-full">
                    <label className="input-label capitalize block  mb-2 text-[#042460] text-xs font-normal" htmlFor="number">Teléfono*</label>
                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                        <input
                            type={inputType}
                            placeholder="+51 999999999"
                            className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px] dark:bg-black"
                            id="number"
                            name="number"
                            disabled={pending}
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
                    </div>
                    {
                        state.errors && state.errors.find(item => item.name === 'number')?.errors.map((error, index) => (
                            <div key={index} className="flex items-center space-x-1 bg-red-100 text-red-800 mb-2 px-3 py-2">
                                <MdError size={16} />
                                <span className="text-xs">{error}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="mb-5">
                <label className="input-label text-[#042460] capitalize text-xs font-normal block mb-2" htmlFor="message">Mensaje*</label>
                <textarea
                    placeholder="Ingrese su mensaje aquí"
                    className="w-full h-[105px] focus:ring-0 focus:outline-none p-3 border border-qgray-border placeholder:text-sm"
                    id="message"
                    name="message"
                    disabled={pending}
                >
                </textarea>
                {
                    state.errors && state.errors.find(item => item.name === 'message')?.errors.map((error, index) => (
                        <div key={index} className="flex items-center space-x-1 bg-red-100 text-red-800 mb-2 px-3 py-2">
                            <MdError size={16} />
                            <span className="text-xs">{error}</span>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default function ContactForm({ inputType }: { inputType: string }) {
    const initialState: InitialProps = {
        errors: null,
        message: '',
        success: false,
    };

    const [state, formAction] = useFormState(submitContactForm, initialState);
    const ref = useRef<HTMLFormElement>(null);

    if (state.success) {
        ref.current?.reset();
    }

    return (
        <form ref={ref} action={(formData: FormData) => {
            formAction(formData);
        }} className="inputs mt-5 relative" noValidate>

            <Loading />

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

            <Body inputType={inputType} state={state} />

            <SubmitButton />
        </form>
    );
}
