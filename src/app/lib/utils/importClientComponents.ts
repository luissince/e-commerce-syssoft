import Cart from '@/app/cart/page';

// lib/utils/importClientComponents.ts
export async function importClientComponents() {
    const clientName: string = process.env.NEXT_PUBLIC_CLIENT_NAME || 'default'

    switch (clientName) {
        case 'default':
            const [HeaderClient1, FooterClient1, MainClient1, AllProductsClient1, SingleProductClient1, PrivacyPolicyClient1, TermsConditionClient1, AboutClient1 ,ContactClient1, CartClient1, CheckoutClient1] = await Promise.all([
                import('@/app/ui/layout/header/default'),
                import('@/app/ui/layout/footer/default'),
                import('@/app/ui/main/default'),
                import('@/app/ui/all-products/default'),
                import('@/app/ui/single-product/default'),
                import('@/app/ui/privacy-policy/default'),
                import('@/app/ui/terms-condition/default'),
                import('@/app/ui/about/default'),
                import('@/app/ui/contact/default'),
                import('@/app/ui/cart/default'),
                import('@/app/ui/checkout/default'),
            ]);
            return {
                Header: HeaderClient1.default, Footer: FooterClient1.default, Main: MainClient1.default,
                AllProducts: AllProductsClient1.default, SingleProduct: SingleProductClient1.default,
                PrivacyPolicy: PrivacyPolicyClient1.default, TermsCondition: TermsConditionClient1.default,
                About: AboutClient1.default, Contact: ContactClient1.default, Cart: CartClient1.default,
                Checkout: CheckoutClient1.default,
            };

        case 'import-muneli':
            const [HeaderClient2, FooterClient2, MainClient2, AllProductsClient2, SingleProductClient2, PrivacyPolicyClient2, TermsConditionClient2, AboutClient2,ContactClient2, CartClient2, CheckoutClient2] = await Promise.all([
                import('@/app/ui/layout/header/import-muneli'),
                import('@/app/ui/layout/footer/import-muneli'),
                import('@/app/ui/main/import-muneli'),
                import('@/app/ui/all-products/import-muneli'),
                import('@/app/ui/single-product/import-muneli'),
                import('@/app/ui/privacy-policy/import-muneli'),
                import('@/app/ui/terms-condition/import-muneli'),
                import('@/app/ui/about/import-muneli'),
                import('@/app/ui/contact/import-muneli'),
                import('@/app/ui/cart/import-muneli'),
                import('@/app/ui/checkout/import-muneli'),
            ]);
            return {
                Header: HeaderClient2.default, Footer: FooterClient2.default, Main: MainClient2.default,
                AllProducts: AllProductsClient2.default, SingleProduct: SingleProductClient2.default,
                PrivacyPolicy: PrivacyPolicyClient2.default, TermsCondition: TermsConditionClient2.default,
                About: AboutClient2.default, Contact: ContactClient2.default, Cart: CartClient2.default,
                Checkout: CheckoutClient2.default,
            };

        default:
            throw new Error('Cliente no reconocido');
    }
}
