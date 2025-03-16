import { fetchRangePrice } from "@/app/lib/data";
import RangePrices from "../../component/default/range-price";

export default async function ListRange() {
    const price = await fetchRangePrice();
    return (
        <RangePrices {...price} />
    );
}