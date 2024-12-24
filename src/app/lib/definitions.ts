export interface CartItemModel {
    producto: ProductModel;
    cantidad: number;
    subTotal: number;
    colorSeleccionado: AttributeModel | null;
    tallaSeleccionada: AttributeModel | null;
    saborSeleccionado: AttributeModel | null;
}

export interface CartModel {
    items: CartItemModel[];
    totalItems: number;
    totalPrecio: number;
}

export interface RangePriceModel {
    minimo: number;
    maximo: number;
}

export interface CategoryModel {
    idCategoria: string;
    nombre: string;
}

export interface BrandModel {
    idMarca: string;
    nombre: string;
}

export interface AttributeModel {
    idAtributo: string;
    idTipoAtributo: string;
    nombre: string;
    hexadecimal: string;
    valor: string;
}

export interface ProductImageModel {
    idImagen: number;
    idProducto: string;
    nombre: string;
    extension: string;
    ancho: number;
    alto: number;
}

export interface ProductDetailModel {
    idDetalle: number;
    idProducto: string;
    nombre: string;
    valor: string;
}

export interface ProductModel {
    id: number;
    idProducto: string;
    tipo: string;
    venta: string;
    codigo: string;
    nombre: string;
    descripcionCorta: string,
    descripcionLarga: string,
    precio: number;
    preferido: number;
    imagen: string | null;
    estado: number;
    medida: string;
    idCategoria: string;

    categoria: CategoryModel;

    marca: BrandModel,

    detalles: ProductDetailModel[],

    imagenes: ProductImageModel[],

    colores: AttributeModel[],

    tallas: AttributeModel[],

    sabores: AttributeModel[],
    
}

export interface ProductPagesModel {
    total: number;
}

export interface ListResponseModel<T> {
    result: T,
    total: number
}

export interface UbigeoModel {
    idUbigeo: number;
    ubigeo: string;
    departamento: string;
    provincia: string;
    distrito: string
}

export interface BranchModel {
    idSucursal: string;
    nombre: string;
    telefono: string;
    celular: string;
    email: string;
    paginaWeb: string;
    direccion: string
    idUbigeo: string;
    googleMaps: string;
    ruta: string;
    estado: boolean;
    principal: boolean;
    fecha: string;
    hora: string;

    ubigeo: UbigeoModel;
}

export interface CompanyModel {
    idEmpresa: string;
    documento: string;
    razonSocial: string;
    nombreEmpresa: string;
    email: string;
    paginaWeb: string;
    rutaLogo: string;
    rutaImage: string;
    horarioAtencion: string;
    acercaNosotros: string;
    politicasPrivacidad: string;
    terminosCondiciones: string;
}