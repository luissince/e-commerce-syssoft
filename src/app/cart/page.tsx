import { importClientComponents } from "@/app/lib/utils/importClientComponents";

export default async function Cart() {
    const { Cart } = await importClientComponents();
    return (<Cart />);
}