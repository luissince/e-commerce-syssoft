import { fetchCompanyInfo } from "../lib/data";
import { CompanyModel } from "../lib/definitions";
import { importClientComponents } from "@/app/lib/utils/importClientComponents";

export default async function TermsCondition() {
    const resultCompany = await fetchCompanyInfo() as CompanyModel;

     const { TermsCondition } = await importClientComponents();
    return (<TermsCondition company={resultCompany} />);
}
