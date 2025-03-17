
import { BranchModel } from "@/app/lib/definitions";
import { fetchListBranchs } from "../lib/data";
import { importClientComponents } from "@/app/lib/utils/importClientComponents";

export default async function Contact({searchParams }: { searchParams: { viewport: string | undefined } }) {
    const inputType = searchParams.viewport === 'mobile' ? 'tel' : 'text';
    const resultBranchs = await fetchListBranchs() as BranchModel[];

     const { Contact } = await importClientComponents();
    return (<Contact inputType={inputType} branchs={resultBranchs} />);
}