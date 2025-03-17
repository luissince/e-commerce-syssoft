import Discount from "@/app/ui/component/default/discount";
import BreadTitle, { BreadItem } from "@/app/ui/component/default/title";
import Body from "@/app/ui/cart/default/body";


export default function CartBody() {

    return (
        <>
            <div className="w-full pt-0 pb-0">
                <div className="products-compaire-wrapper w-full bg-white pb-[40px]">
                    <BreadTitle
                        title={"Your Cart"}>
                        <BreadItem
                            href={"/"}
                            title={"home"}
                            isSeparator={true} />
                        <BreadItem
                            href={"/cart"}
                            title={"Your Cart"}
                            isSeparator={false} />
                    </BreadTitle>
                    <Body />
                </div>

                <Discount />
            </div>
        </>
    );
}