import { fetchLoadCompany } from "../lib/data";
import { CompanyModel } from "../lib/definitions";
import Discount from "../ui/component/discount";
import Title, { BreadItem } from "../ui/component/title";
import { MDXRemote } from 'next-mdx-remote/rsc'

interface Props {
    company: CompanyModel;
}

const components = {
    h1: (props: any) => <h1 className="text-2xl font-black text-qblacktext dark:text-white my-5">{props.children}</h1>,
    h2: (props: any) => <h2 className="text-1xl font-extrabold text-qblacktext dark:text-white my-5">{props.children}</h2>,
    h3: (props: any) => <h3 className="text-lg font-bold text-qblacktext dark:text-white my-5">{props.children}</h3>,
    h4: (props: any) => <h4 className="text-base font-semibold text-qblacktext dark:text-white my-5">{props.children}</h4>,
    ul: (props: any) => <ul className="list-disc ml-5 my-5">{props.children}</ul>,
    li: (props: any) => <li className="text-sm text-qgray dark:text-white my-1">{props.children}</li>,
    p: (props: any) => <p className="text-sm text-qgray my-5">{props.children}</p>,
};

const Body = (props: Props) => {
    return (
        <div className="content-area w-full">
            <div className="container max-w-screen-x mx-auto px-2 md:px-6">

                <MDXRemote
                    source={props.company.terminosCondiciones}
                    components={components}
                />
            </div>
        </div>
    );
}

export default async function TermsCondition() {
    const resultCompany = await fetchLoadCompany() as CompanyModel;

    return (
        <>
            <div className="w-full pt-0 pb-0">
                <div className="terms-condition-page w-full bg-white dark:bg-black pb-[30px]">
                    <div className="w-full mb-[30px]">
                        <Title
                            title={"Terms and Condition"}>
                            <BreadItem
                                href={"/"}
                                title={"home"}
                                isSeparator={true} />

                            <BreadItem
                                href={"/terms-condition"}
                                title={"Terms and Condition"}
                                isSeparator={false} />
                        </Title>
                        <Body company={resultCompany} />
                    </div>
                </div>
            </div>
            <Discount />
        </>
    );
}
