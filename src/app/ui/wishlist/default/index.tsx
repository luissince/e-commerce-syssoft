import Discount from "@/app/ui/component/default/discount";
import BreadTitle, { BreadItem } from "@/app/ui/component/default/title";
import Body from "@/app/ui/wishlist/default/body";

export default function WishListBody() {

    return (
        <>
            <div className="w-full pt-0 pb-0">
                <div className="products-compaire-wrapper w-full bg-white pb-[40px]">
                    <BreadTitle
                        title={"Favoritos"}>
                        <BreadItem
                            href={"/"}
                            title={"Inicio"}
                            isSeparator={true} />
                        <BreadItem
                            href={"/wishlist"}
                            title={"Favoritos"}
                            isSeparator={false} />
                    </BreadTitle>
                    <Body />
                </div>

                <Discount />
            </div>
        </>
    );
}