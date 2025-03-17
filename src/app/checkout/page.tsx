import { fetchListTypeOfDocument } from "../lib/data";
import { TypeOfDocumentModel } from "../lib/definitions";
import { importClientComponents } from "@/app/lib/utils/importClientComponents";

export default async function Checkout({ searchParams }: { searchParams: { viewport: string | undefined } }) {
    const inputType = searchParams.viewport === 'mobile' ? 'tel' : 'text';
    const listTypeOfDocument = await fetchListTypeOfDocument() as TypeOfDocumentModel[];

    const { Checkout } = await importClientComponents();
    return (<Checkout inputType={inputType} listTypeOfDocument={listTypeOfDocument} />);
}