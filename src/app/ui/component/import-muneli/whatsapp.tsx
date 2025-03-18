'use client'
import { useRef, useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { IoLogoWhatsapp, IoSend } from "react-icons/io5";

interface Props {
    title: string;
    message: string;
    number: string;
}

export default function Whatsapp({ title, message, number }: Props) {
    const [valorInput, setValorInput] = useState('');
    const miRef = useRef<HTMLDivElement>(null);
    const refInput = useRef<HTMLInputElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValorInput(event.target.value);
    };

    const toggleChating = () => {
        miRef.current?.classList.remove('opacity-0', 'translate-x-full');
        miRef.current?.classList.add('translate-x-0', 'opacity-100');
    };

    const closeChating = () => {
        miRef.current?.classList.remove('opacity-100');
        miRef.current?.classList.add('translate-x-full', 'opacity-0');
        setValorInput("");
    };

    const sendMessage = () => {
        if (valorInput.length === 0) {
            refInput.current?.focus();
            return;
        }

        const url = `https://api.whatsapp.com/send?phone=${number}&text=${message}: ${valorInput}`;
        window.open(url + encodeURIComponent(valorInput), '_blank');
        setValorInput("");
    };

    useEffect(() => {
        const timer = setTimeout(toggleChating, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div>
                <div
                    ref={miRef}
                    className="fixed bottom-20 lg:right-4 z-50 bg-white rounded-md shadow-2xl p-4 transform transition-all duration-1000 ease-in-out translate-x-full opacity-0 w-full lg:max-w-md"
                >
                    <div className="cursor-pointer flex justify-end">
                        <span onClick={closeChating}>
                            <IoMdClose size={30} color="#f76d24" />
                        </span>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <div className="py-3">
                            <IoLogoWhatsapp size={48} color="#f76d24" />
                        </div>
                        <div className="pl-4 py-3 text-[#042460]">
                            <p>{title}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <div className="w-full">
                            <input
                                type="text"
                                ref={refInput}
                                value={valorInput}
                                onChange={handleChange}
                                className="form-control h-12 rounded-xl font-sans block w-full my-1 px-3 text-base font-normal leading-[1.5] bg-gray-100 border border-gray-300 focus:border-[#042460] focus:outline-none transition-all duration-300"
                                placeholder="Enviar mensaje..."
                            />
                        </div>
                        <div className="flex justify-end w-full mt-2">
                            <button
                                onClick={sendMessage}
                                className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg"
                            >
                                <IoSend size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                <a
                    className="cursor-pointer flex items-center justify-center fixed w-14 h-14 bottom-4 right-4 rounded-full shadow-lg bg-green-500 text-white z-50"
                    onClick={toggleChating}
                >
                    <IoLogoWhatsapp size={32} />
                </a>
            </div>
        </>
    );
}
