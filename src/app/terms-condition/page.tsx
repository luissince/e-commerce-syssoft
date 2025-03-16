import { fetchLoadCompany } from "../lib/data";
import { CompanyModel } from "../lib/definitions";
import TermsConditionBody from "../ui/terms-condition/import-muneli";

export default async function TermsCondition() {
    const resultCompany = await fetchLoadCompany() as CompanyModel;

    return (<TermsConditionBody company={resultCompany} />);
}
