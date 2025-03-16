
import { BranchModel } from "@/app/lib/definitions";
import { fetchListBranchs } from "../lib/data";
import ContactBody from "../ui/contact/import-muneli";

export default async function Contact({searchParams }: { searchParams: { viewport: string | undefined } }) {
    const inputType = searchParams.viewport === 'mobile' ? 'tel' : 'text';
    const resultBranchs = await fetchListBranchs() as BranchModel[];

    return (<ContactBody inputType={inputType} branchs={resultBranchs} />);
}