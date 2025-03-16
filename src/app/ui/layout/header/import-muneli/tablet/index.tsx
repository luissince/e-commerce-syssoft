import { CompanyModel } from "@/app/lib/definitions";
import { Suspense } from "react";
import TopBar from "./top-bar";
import SearchBar from "./search-bar";
import NavBar from "./nav-bar";

export default function HeaderMuneliTablet(company: CompanyModel) {
    return (
        <div className="hidden lg:block w-full">
            <TopBar />

            <Suspense fallback={<div>Cargando...</div>}>
                <SearchBar {...company}/>
            </Suspense>

            <NavBar />
        </div>
    );
}