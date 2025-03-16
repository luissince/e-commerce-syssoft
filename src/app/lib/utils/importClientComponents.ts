// lib/utils/importClientComponents.ts
export async function importClientComponents() {
    const clientName: string = process.env.NEXT_PUBLIC_CLIENT_NAME || 'default'

    switch (clientName) {
        case 'default':
            const [HeaderClient1, FooterClient1, MainClient1, AllProductsClient1, SingleProductClient1] = await Promise.all([
                import('@/app/ui/layout/header/default'),
                import('@/app/ui/layout/footer/default'),
                import('@/app/ui/main/default'),
                import('@/app/ui/all-products/default'),
                import('@/app/ui/single-product/default'),

            ]);
            return {
                Header: HeaderClient1.default, Footer: FooterClient1.default, Main: MainClient1.default,
                AllProducts: AllProductsClient1.default, SingleProduct: SingleProductClient1.default
            };

        case 'import-muneli':
            const [HeaderClient2, FooterClient2, MainClient2, AllProductsClient2, SingleProductClient2] = await Promise.all([
                import('@/app/ui/layout/header/import-muneli'),
                import('@/app/ui/layout/footer/import-muneli'),
                import('@/app/ui/main/import-muneli'),
                import('@/app/ui/all-products/import-muneli'),
                import('@/app/ui/single-product/import-muneli'),
            ]);
            return {
                Header: HeaderClient2.default, Footer: FooterClient2.default, Main: MainClient2.default,
                AllProducts: AllProductsClient2.default, SingleProduct: SingleProductClient2.default
            };

        default:
            throw new Error('Cliente no reconocido');
    }
}
