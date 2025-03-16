import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export interface OptionSelect {
    id: string | number;
    name: string;
}

interface Props {
    title: string;
    options: OptionSelect[];
    onChange?: (value: OptionSelect) => void;
}

const Select = ({ title, options, onChange }: Props) => {
    const [openSize, setOpenSize] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<OptionSelect | null>(null);
    const dropdownSizeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownSizeRef.current && !dropdownSizeRef.current.contains(event.target as Node)) {
                setOpenSize(false);
            }
        };

        const rootElement = document.querySelector("#root") as HTMLDivElement;

        if (openSize && rootElement) {
            rootElement.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            if (openSize && rootElement) {
                rootElement.removeEventListener('mousedown', handleClickOutside);
            }
        };
    }, [openSize]);

    const handleSelect = (value: OptionSelect) => {
        setSelectedValue(value); // Actualiza el valor seleccionado
        setOpenSize(false); // Cierra el dropdown
        if (onChange) {
            onChange(value); // Llama a la función onChange del padre si existe
        }
    };

    return (
        <div className="product-size" ref={dropdownSizeRef}>
            <span className="text-sm font-normal text-qgray mb-[14px] inline-block">{title}</span>
            <div className="w-full">
                <div className="border border-qgray-border h-[50px] flex justify-between items-center cursor-pointer">
                    <div className="my-select-box text-sm font-normal relative w-full h-full">
                        <button type="button" className="w-full h-full flex justify-between items-center px-6"
                            onClick={() => setOpenSize(!openSize)}>
                            <div>
                                <span className="text-[13px] text-qblack">
                                    {selectedValue?.name || "Selecciona una opción"} {/* Mostrar el valor seleccionado o un placeholder */}
                                </span>
                            </div>
                            <span>
                                <IoIosArrowDown color="#000" size={20} />
                            </span>
                        </button>
                        <div className={`my-select-box-section shadow absolute top-[100%]  origin-[50%_0%]  p-0 mt-1 z-10  bg-white dark:bg-[#1a1a1a] w-full left-0 ${openSize ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-75 translate-y-[-21px] invisible'}`} >
                            <ul className="list">
                                {options.map((option, index) => (
                                    <li
                                        key={index}
                                        className={`py-3 cursor-pointer text-left outline-none px-5  hover:bg-gray-100 
                                            ${selectedValue?.id === option.id ? "bg-gray-200 font-bold" : "font-normal"
                                            }`}
                                        onClick={() => handleSelect(option)} // Seleccionar opción
                                    >
                                        {option.name}
                                    </li>
                                ))}
                                {/* <li className="bg-[#f6f6f6] font-bold">Small</li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Select;