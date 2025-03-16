import React from "react";
import { fetchLoadCompany } from "../lib/data";
import { CompanyModel } from "../lib/definitions";
import AboutBody from "../ui/about/import-muneli";

export default async function About() {
    const resultCompany = await fetchLoadCompany() as CompanyModel;

    return (
        <AboutBody company={resultCompany} />
    );
}