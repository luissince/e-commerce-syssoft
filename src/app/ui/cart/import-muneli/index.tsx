import Discount from "@/app/ui/component/import-muneli/discount";
import BreadTitle, { BreadItem } from "@/app/ui/component/import-muneli/title";
import Body from "@/app/ui/cart/import-muneli/body";

export default function CartBody() {

    return (
        <>
            <div className="w-full pt-0 pb-0">
                <div className="products-compaire-wrapper w-full bg-white pb-[40px]">
                    <BreadTitle
                        title={"Tu carrito"}>
                        <BreadItem
                            href={"/"}
                            title={"Inicio"}
                            isSeparator={true} />
                        <BreadItem
                            href={"/cart"}
                            title={"Tu carrito"}
                            isSeparator={false} />
                    </BreadTitle>
                    <Body />
                </div>

                <Discount />
            </div>
        </>
    );
}