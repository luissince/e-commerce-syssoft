import { AttributeModel, BranchModel, BrandModel, CategoryModel, CompanyModel, ProductModel, ProductPagesModel, RangePriceModel, TypeOfDocumentModel } from "./definitions";
import { DarkIcon, LightIcon, SpanishIcon, SystemIcon, UsaIcon } from "../ui/component/default/icons";

export interface ItemListShopTopBarProps {
    title: string;
    icon: React.ReactElement;
    value: string;
};

export const listLenguajes: ItemListShopTopBarProps[] = [
    {
        "title": "Español",
        "icon": <SpanishIcon width={22} height={22} />,
        "value": "es"
    },
    {
        "title": "English",
        "icon": <UsaIcon width={15} height={15} />,
        "value": "en"
    },
];

export const listThemes: ItemListShopTopBarProps[] = [
    {
        "title": "Light",
        "icon": <LightIcon width={22} height={22} fill="#000" />,
        "value": "light"
    },
    {
        "title": "Dark",
        "icon": <DarkIcon width={15} height={15} fill="#000" />,
        "value": "dark"
    },
    {
        "title": "System",
        "icon": <SystemIcon width={17} height={17} stroke="#000" />,
        "value": "system"
    },
];

export const fetchListCategories = async (): Promise<CategoryModel[]> => {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/api/categoria/combo`, {
            next: { revalidate: 0 }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return [];
    }
}

export const fetchListBrands = async (): Promise<BrandModel[]> => {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/api/marca/combo`);
        const data = await response.json();
        return data;
    } catch (error) {
        return [];
    }
}

export const fetchListColor = async (): Promise<AttributeModel[]> => {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/api/atributo/combo?idTipoAtributo=TA0001`, {
            next: { revalidate: 0 }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return [];
    }
}

export const fetchListSize = async (): Promise<AttributeModel[]> => {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/api/atributo/combo?idTipoAtributo=TA0002`, {
            next: { revalidate: 0 }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return [];
    }
}

export const fetchListFlavor = async (): Promise<AttributeModel[]> => {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/api/atributo/combo?idTipoAtributo=TA0003`, {
            next: { revalidate: 0 }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return [];
    }
}

export const fetchRangePrice = async (): Promise<RangePriceModel> => {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/api/producto/filter/web/rangeprice`, {
            next: { revalidate: 0 }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        const response: RangePriceModel = {
            minimo: 0,
            maximo: 0
        }
        return response;
    }
}

export const fetchFilteredProducts = async (query: string, currentPage: number, totalPage: number): Promise<ProductModel[] | []> => {
    try {
        const params = new URLSearchParams({
            buscar: query,
            posicionPagina: currentPage.toString(),
            filasPorPagina: totalPage.toString()
        });

        const response = await fetch(
            `${process.env.APP_BACK_END}/api/producto/filter/web?${params}`, {
            next: { revalidate: 0 }
        });

        if (!response.ok) {
            return [];
        }

        return response.json();
    } catch (error) {
        return [];
    }
}

export const fetchProductsPages = async (): Promise<ProductPagesModel | number> => {
    try {
        const params = new URLSearchParams({
            opcion: '0',
            buscar: ''
        });

        const response = await fetch(
            `${process.env.APP_BACK_END}/api/producto/filter/web/pages?${params}`, {
            next: { revalidate: 0 }
        });

        if (!response.ok) {
            return 0;
        }

        return response.json();
    } catch (error) {
        return 0;
    }
}

export const fetchIndexProducts = async (limit: number): Promise<ProductModel[] | []> => {
    try {
        const params = new URLSearchParams({
            limit: limit.toString(),
        });

        const response = await fetch(
            `${process.env.APP_BACK_END}/api/producto/filter/web/index?${params}`, {
            next: { revalidate: 0 }
        });

        if (!response.ok) {
            return [];
        }

        return response.json();
    } catch (error) {
        return [];
    }
}

export const fetchProductByCode = async (code: string, url?: string): Promise<ProductModel | null> => {
    try {
        const params = new URLSearchParams({
            "codigo": code,
        });

        const response = await fetch(
            `${process.env.APP_BACK_END || url}/api/producto/filter/web/id?${params}`, {
            next: { revalidate: 0 }
        });

        if (!response.ok) {
            return null;
        }

        return response.json();
    } catch (error) {
        return null;
    }
}

export const fetchProducRelatedtByCode = async (idCategoria: string): Promise<Array<ProductModel>> => {
    try {
        const params = new URLSearchParams({
            "idCategoria": idCategoria,
        });

        const response = await fetch(
            `${process.env.APP_BACK_END}/api/producto/filter/web/related/id?${params}`, {
            next: { revalidate: 0 }
        });

        if (!response.ok) {
            return [];
        }

        return response.json();
    } catch (error) {
        return [];
    }
}

export async function fetchListBranchs(): Promise<BranchModel[]> {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/api/sucursal/list/web`, {
            next: { revalidate: 0 }
        });

        if (!response.ok) {
            return [];
        }
        return response.json();
    } catch (error) {
        return [];
    }
}

export async function fetchLoadCompany(): Promise<CompanyModel | null> {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/api/empresa/load/web`, {
            next: { revalidate: 0 }
        });

        if (!response.ok) {
            return null;
        }
        
        return response.json();
    } catch (error) {
        return null;
    }
}

export async function fetchImagesCompany(): Promise<CompanyModel | null> {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/api/empresa/images/web`, {
            next: { revalidate: 0 }
        });

        if (!response.ok) {
            return null;
        }

        return response.json();
    } catch (error) {
        return null;
    }
}

export async function fetchListTypeOfDocument(): Promise<TypeOfDocumentModel[]> {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/api/tipodocumento/combo`, {
            next: { revalidate: 0 }
        });

        if (!response.ok) {
            return [];
        }

        return response.json();
    } catch (error) {
        return [];
    }
}