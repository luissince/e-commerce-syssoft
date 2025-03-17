import React from "react";
import { fetchLoadCompany } from "../lib/data";
import { CompanyModel } from "../lib/definitions";
import { importClientComponents } from "@/app/lib/utils/importClientComponents";

export default async function About() {
    const resultCompany = await fetchLoadCompany() as CompanyModel;

    const { About } = await importClientComponents();
    return (<About company={resultCompany} />);
}