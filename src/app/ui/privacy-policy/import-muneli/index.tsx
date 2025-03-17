import { MDXRemote } from "next-mdx-remote/rsc";
import { CompanyModel } from "@/app/lib/definitions";
import BreadTitle, { BreadItem } from "../../component/import-muneli/title";
import Discount from "../../component/import-muneli/discount";
import Container from "../../component/import-muneli/container";

interface MainProps {
    company: CompanyModel;
}

const components = {
    h1: (props: any) => <h1 className="text-2xl font-black text-[#042460] my-5">{props.children}</h1>,
    h2: (props: any) => <h2 className="text-1xl font-extrabold text-[#042460] my-5">{props.children}</h2>,
    h3: (props: any) => <h3 className="text-lg font-bold text-[#042460] my-5">{props.children}</h3>,
    h4: (props: any) => <h4 className="text-base font-semibold text-[#042460] my-5">{props.children}</h4>,
    ul: (props: any) => <ul className="list-disc ml-5 my-5">{props.children}</ul>,
    li: (props: any) => <li className="text-sm text-black my-1">{props.children}</li>,
    p: (props: any) => <p className="text-sm text-black my-5">{props.children}</p>,
};

const Main = (props: MainProps) => {
    return (
        <div className="content-area w-full">
            <Container>

                <MDXRemote
                    source={props.company.politicasPrivacidad}
                    components={components}
                />

            </Container>
        </div>
    );
}

interface Props {
    company: CompanyModel;
}

export default function PrivacyPolicyBody({company}: Props) {
    return (
        <>
            <div className="terms-condition-page w-full bg-white pb-[30px]">
                <div className="w-full mb-[30px]">
                    <BreadTitle
                        title={"Politicas de Privacidad"}>
                        <BreadItem
                            href={"/"}
                            title={"Inicio"}
                            isSeparator={true} />

                        <BreadItem
                            href={"/privacy-policy"}
                            title={"Politicas de Privacidad"}
                            isSeparator={false} />
                    </BreadTitle>
                    <Main company={company} />
                </div>
            </div>
            <Discount />
        </>
    );
}