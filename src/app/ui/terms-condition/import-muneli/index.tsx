import { CompanyModel } from '@/app/lib/definitions';
import { MDXRemote } from 'next-mdx-remote/rsc'
import BreadTitle, { BreadItem } from '../../component/import-muneli/title';
import Discount from '../../component/import-muneli/discount';

interface Props {
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

const Main = (props: Props) => {
    return (
        <div className="content-area w-full">
            <div className="container mx-auto px-2 md:px-6">

                <MDXRemote
                    source={props.company.terminosCondiciones}
                    components={components}
                />
            </div>
        </div>
    );
}

interface Props {
    company: CompanyModel;
}

export default function TermsConditionBody({ company }: Props) {

    return (
        <>
            <div className="w-full pt-0 pb-0">
                <div className="terms-condition-page w-full bg-white dark:bg-black pb-[30px]">
                    <div className="w-full mb-[30px]">
                        <BreadTitle
                            title={"Terminos y Condiciones"}>
                            <BreadItem
                                href={"/"}
                                title={"Inicio"}
                                isSeparator={true} />

                            <BreadItem
                                href={"/terms-condition"}
                                title={"Terminos y Condiciones"}
                                isSeparator={false} />
                        </BreadTitle>
                        <Main company={company} />
                    </div>
                </div>
            </div>
            <Discount />
        </>
    );
}
