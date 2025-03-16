import { fetchLoadCompany } from "../lib/data";
import { CompanyModel } from "../lib/definitions";
import PrivacyPolicyBody from "../ui/privacy-policy/import-muneli";

export default async function PrivacyPolicy() {
    const resultCompany = await fetchLoadCompany() as CompanyModel;

    return (<PrivacyPolicyBody company={resultCompany} />);
}