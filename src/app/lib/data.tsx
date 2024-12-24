import axios from "axios"
import { AttributeModel, BranchModel, BrandModel, CategoryModel, CompanyModel, ProductModel, ProductPagesModel, RangePriceModel } from "./definitions";
import { DarkIcon, LightIcon, SpanishIcon, SystemIcon, UsaIcon } from "../ui/component/icons";

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
        const response = await axios.get<CategoryModel[]>(`${process.env.APP_BACK_END}/api/categoria/combo`, {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });
        return response.data;
    } catch (error) {
        return [];
    }
}

export const fetchListBrands = async (): Promise<BrandModel[]> => {
    try {
        const response = await axios.get<BrandModel[]>(`${process.env.APP_BACK_END}/api/marca/combo`, {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });
        return response.data;
    } catch (error) {
        return [];
    }
}

export const fetchListColor = async (): Promise<AttributeModel[]> => {
    try {
        const response = await axios.get<AttributeModel[]>(`${process.env.APP_BACK_END}/api/atributo/combo?idTipoAtributo=TA0001`, {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });
        return response.data;
    } catch (error) {
        return [];
    }
}

export const fetchListSize = async (): Promise<AttributeModel[]> => {
    try {
        const response = await axios.get<AttributeModel[]>(`${process.env.APP_BACK_END}/api/atributo/combo?idTipoAtributo=TA0002`, {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });
        return response.data;
    } catch (error) {
        return [];
    }
}

export const fetchListFlavor = async (): Promise<AttributeModel[]> => {
    try {
        const response = await axios.get<AttributeModel[]>(`${process.env.APP_BACK_END}/api/atributo/combo?idTipoAtributo=TA0003`, {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });
        return response.data;
    } catch (error) {
        return [];
    }
}

export const fetchRangePrice = async (): Promise<RangePriceModel> => {
    try {
        const response = await axios.get<RangePriceModel>(`${process.env.APP_BACK_END}/api/producto/filter/web/rangeprice`, {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });
        return response.data;
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
        const response = await axios.get<ProductModel[]>(`${process.env.APP_BACK_END}/api/producto/filter/web`, {
            params: {
                "buscar": query,
                "posicionPagina": currentPage,
                "filasPorPagina": totalPage
            },
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });
        return response.data;
    } catch (error) {
        return [];
    }
}

export const fetchProductsPages = async (): Promise<ProductPagesModel | number> => {
    try {
        const response = await axios.get<ProductPagesModel>(`${process.env.APP_BACK_END}/api/producto/filter/web/pages`, {
            params: {
                "opcion": 0,
                "buscar": ""
            },
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });
        return response.data;
    } catch (error) {
        return 0;
    }
}

export const fetchIndexProducts = async (limit: number): Promise<ProductModel[] | []> => {
    try {
        const response = await axios.get<ProductModel[]>(`${process.env.APP_BACK_END}/api/producto/filter/web/index`, {
            params: {
                limit: limit,
            },
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });

        return response.data;
    } catch (error) {
        return [];
    }
}

export const fetchProductByCode = async (code: string, url?: string): Promise<ProductModel | null> => {
    try {
        const response = await axios.get<ProductModel>(`${process.env.APP_BACK_END || url}/api/producto/filter/web/id`, {
            params: {
                "codigo": code,
            },
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });
        return response.data;
    } catch (error) {
        return null;
    }
}

export const fetchProducRelatedtByCode = async (idCategoria: string): Promise<Array<ProductModel>> => {
    try {
        const response = await axios.get<ProductModel[]>(`${process.env.APP_BACK_END}/api/producto/filter/web/related/id`, {
            params: {
                "idCategoria": idCategoria,
            },
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });
        return response.data;
    } catch (error) {
        return [];
    }
}


export async function fetchListBranchs(): Promise<BranchModel[] | null> {
    try {
        const response = await axios.get<BranchModel[]>(`${process.env.APP_BACK_END }/api/sucursal/list/web`, {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });
        return response.data;
    } catch (error) {
        return [];
    }
}

export async function fetchLoadCompany(): Promise<CompanyModel | null> {
    try {
        const response = await axios.get<CompanyModel>(`${process.env.APP_BACK_END}/api/empresa/load/web`, {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });
        return response.data;
    } catch (error) {
        return null;
    }
}