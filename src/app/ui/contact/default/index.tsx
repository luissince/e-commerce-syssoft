
import React from "react";
import { BranchModel } from "@/app/lib/definitions";
import { CurveIcon } from "@/app/ui/component/default/icons";
import BreadTitle, { BreadItem } from "../../component/import-muneli/title";
import ContactForm from "./form";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

interface MainProps {
    inputType: string;
    branchs: BranchModel[];
}

const Main = (props: MainProps) => {
    return (
        <div className="contact-wrapper w-full mb-10">
            <div className="container max-w-screen-x mx-auto md:px-6">
                <div className="main-wrapper w-full lg:flex lg:space-x-[30px]">
                    <div className="lg:w-1/2 w-full">
                        <h1 className="text-xl font-semibold text-qblack dark:text-white mb-1">Información de contacto</h1>
                        <p className="text-sm text-qgraytwo mb-5">Rellane el formulario de abajo o escribenos. Te ayudaremos tan pronto como sea posible.</p>
                        <div className="xl:flex xl:space-x-[30px] mb-[30px]">
                            <div className="xl:w-1/2 w-full  h-[196px] flex flex-col item justify-center bg-[#FFEAE5] p-5">
                                <div className="flex justify-center mb-3 ">
                                    <PhoneIcon width={26} height={26} color="#FFBB38" />
                                </div>
                                <p className="text-xl text-black text-center font-semibold">Celulare(s)</p>
                                {
                                    props.branchs?.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <p className="text-sm text-black text-center break-words">{item.celular}</p>
                                        </React.Fragment>
                                    ))
                                }
                            </div>
                            <div className="xl:w-1/2 w-full h-[196px] flex flex-col item justify-center bg-[#D3EFFF] p-5">
                                <div className="flex justify-center mb-3 ">
                                    <MdEmail size={26} color="#FFBB38" />
                                </div>
                                <p className="text-xl text-black text-center font-semibold">Email(s)</p>

                                {
                                    props.branchs?.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <p className="text-sm text-black text-center break-words">{item.email}</p>
                                        </React.Fragment>
                                    ))
                                }
                            </div>
                        </div>
                        {
                            props.branchs?.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="p-5 flex flex-col justify-between w-full bg-[#E7F2EC]">
                                        <div className="flex space-x-5">
                                            <span>
                                                <FaMapMarkerAlt size={24} color="#FFBB38" />
                                            </span>
                                            <div>
                                                <h1 className="text-xl font-semibold text-qblack mb-2">Dirección</h1>
                                                <p className="text-sm text-qblack">{item.direccion}</p>
                                            </div>
                                        </div>
                                        <div className="w-full h-[206px] mt-5">
                                            <iframe title="newWork" src={item.googleMaps}
                                                loading="lazy" className="w-full h-full border-0">
                                            </iframe>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))
                        }
                    </div>

                    <div className="flex-1 bg-white sm:p-10 p-3">
                        <div className="title flex flex-col items-center">
                            <h1 className="text-[34px] font-bold text-qblack">Ponte en contacto</h1>
                            <span className="-mt-5 block">
                                <CurveIcon width={"100%"} />
                            </span>
                        </div>

                        <ContactForm inputType={props.inputType} />
                    </div>
                </div>
            </div>
        </div>
    );
}

interface Props {
    inputType: string;
    branchs: BranchModel[];
}

export default async function ContactBody({ inputType, branchs }: Props) {

    return (
        <div className="w-full pt-0 pb-0">
            <BreadTitle
                title={"Contacto"} >
                <BreadItem
                    href={"/"}
                    title={"Inicio"}
                    isSeparator={true} />
                <BreadItem
                    href={"/contact"}
                    title={"Contacto"}
                    isSeparator={false} />
            </BreadTitle>

            <Main inputType={inputType} branchs={branchs} />
        </div>
    );
}