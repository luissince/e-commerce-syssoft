import Discount from "@/app/ui/component/default/discount";
import BreadTitle, { BreadItem } from "@/app/ui/component/default/title";
import Body from "./body";
import { TypeOfDocumentModel } from "@/app/lib/definitions";

interface CheckoutBodyProps {
    inputType: string;
    listTypeOfDocument: TypeOfDocumentModel[];
}

export default async function CheckoutBody({ inputType, listTypeOfDocument }: CheckoutBodyProps) {

    return (
        <>
            <div className="w-full pt-0 pb-0">
                <div className="checkout-page-wrapper w-full bg-white pb-[60px]">
                    <BreadTitle
                        title={"Checkout"}>
                        <BreadItem
                            href={"/"}
                            title={"home"}
                            isSeparator={true} />
                        <BreadItem
                            href={"/checkout"}
                            title={"checkout"}
                            isSeparator={false} />
                    </BreadTitle>
                    <Body inputType={inputType} listTypeOfDocument={listTypeOfDocument} />
                </div>
            </div>
            <Discount />
        </>
    );
}