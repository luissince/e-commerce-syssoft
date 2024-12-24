
import Title, { BreadItem } from "../ui/component/title";
import Discount from "../ui/component/discount";
import Body from "../ui/checkout/body";


export default function Checkout({searchParams }: { searchParams: { viewport: string | undefined } }) {
    const inputType = searchParams.viewport === 'mobile' ? 'tel' : 'text';

    return (
        <>
            <div className="w-full pt-0 pb-0">
                <div className="checkout-page-wrapper w-full bg-white pb-[60px]">
                    <Title
                        title={"Checkout"}>
                        <BreadItem
                            href={"/"}
                            title={"home"}
                            isSeparator={true} />
                        <BreadItem
                            href={"/checkout"}
                            title={"checkout"}
                            isSeparator={false} />
                    </Title>
                    <Body inputType={inputType} />
                </div>
            </div>
            <Discount />
        </>
    );
}