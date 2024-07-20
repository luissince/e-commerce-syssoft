import Image from "next/image";
import React from "react";

interface PaymentItemProps {
    image: string;
    width: number;
    height: number;
    name: string;
    cardNumer: string;
    status: boolean;
    border: boolean;
}

const PaymentItem: React.FC<PaymentItemProps> = ({ image, width, height, name, cardNumer, status, border }) => {
    return (
        <li className={`sm:flex justify-between items-center w-full py-[30px] ${border ? "border-b" : "border-none"} border-light-purple`}>
            <div className="flex space-x-5 items-center mb-3 sm:mb-0">
                <div className="sm:w-[120px] sm:h-[120px] flex items-center justify-center rounded-full sm:bg-[#F2F2F2]">
                    <Image src={image} alt="payment" width={width} height={height} />
                </div>
                <div className="flex flex-col space-y-2">
                    <p className="sm:text-xl text-lg tracking-wide text-qblack font-bold">{name}</p>
                    <p className="text-thin-light-gray sm:text-18 text-sm tracking-wide">{cardNumer}</p>
                    <p className={`m:text-18 text-sm tracking-wide ${status ? "text-green-500" : "text-red-500"}`}>{status ? "Verified" : "No Verified"}</p>
                </div>
            </div>
            <div>
                <button type="button" className="w-[116px] sm:h-[46px] h-[40px]  bg-qyellow text-qblack font-medium sm:text-18 text-sm tracking-wide">
                    <span>Manage</span>
                </button>
            </div>
        </li>
    );
}

const Payment = () => {
    return (
        <div className="items-wrapper-bank-payment w-full">
            <ul className="items">
                <PaymentItem
                    image="/assets/card-1.svg"
                    width={57}
                    height={53}
                    name="Datch Bangla Bank Ltd"
                    cardNumer="Bank **********5535"
                    status={true}
                    border={true}
                />
                <PaymentItem
                    image="/assets/card-2.svg"
                    width={64}
                    height={38}
                    name="Datch Bangla Bank Ltd"
                    cardNumer="Bank **********5535"
                    status={true}
                    border={true}
                />
                <PaymentItem
                    image="/assets/card-3.svg"
                    width={49}
                    height={49}
                    name="Datch Bangla Bank Ltd"
                    cardNumer="Bank **********5535"
                    status={true}
                    border={true}
                />
                <PaymentItem
                    image="/assets/card-4.svg"
                    width={59}
                    height={38}
                    name="Datch Bangla Bank Ltd"
                    cardNumer="Bank **********5535"
                    status={false}
                    border={false}
                />
            </ul>
            <div className="flex space-x-4 ">
                <button type="button" className="text-white bg-qblack w-[126px] h-[50px] text-sm font-semibold">Add Card</button>
                <button type="button" className="text-qblack  w-[126px] h-[50px] text-sm font-semibold border border-qblack">Add Bank</button>
            </div>
        </div>
    );
}
export default Payment;
