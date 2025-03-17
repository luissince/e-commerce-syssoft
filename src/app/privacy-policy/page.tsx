import { fetchLoadCompany } from "../lib/data";
import { CompanyModel } from "../lib/definitions";
import { importClientComponents } from "@/app/lib/utils/importClientComponents";

export default async function PrivacyPolicy() {
    const resultCompany = await fetchLoadCompany() as CompanyModel;

     const { PrivacyPolicy } = await importClientComponents();
    return (<PrivacyPolicy company={resultCompany} />);
}