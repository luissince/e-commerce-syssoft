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

    sabores: AttributeModel[]
}

export interface ProductPagesModel {
    total: number;
}

export interface ListResponseModel<T> {
    result: T,
    total: number
}