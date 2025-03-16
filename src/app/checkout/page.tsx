
import BreadTitle, { BreadItem } from "../ui/component/default/title";
import Discount from "../ui/component/default/discount";
import Body from "../ui/checkout/body";
import { fetchListTypeOfDocument } from "../lib/data";
import { TypeOfDocumentModel } from "../lib/definitions";


export default async function Checkout({searchParams }: { searchParams: { viewport: string | undefined } }) {
    const inputType = searchParams.viewport === 'mobile' ? 'tel' : 'text';
    const listTypeOfDocument = await fetchListTypeOfDocument() as TypeOfDocumentModel[];

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