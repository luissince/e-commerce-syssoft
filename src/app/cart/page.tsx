
import Title, { BreadItem } from "../ui/component/title";
import Discount from "../ui/component/discount";
import Body from "../ui/cart/body";

export default function Cart() {

    return (
        <>
            <div className="w-full pt-0 pb-0">
                <div className="products-compaire-wrapper w-full bg-white pb-[40px]">
                    <Title
                        title={"Your Cart"}>
                        <BreadItem
                            href={"/"}
                            title={"home"}
                            isSeparator={true} />
                        <BreadItem
                            href={"/cart"}
                            title={"Your Cart"}
                            isSeparator={false} />
                    </Title>
                    <Body />
                </div>

                <Discount />
            </div>
        </>
    );
}