function Discount() {
    return (
        <div className="discount-banner w-full h-[307px] bg-cover flex justify-center items-center bg-[url('/assets/sliders/2.webp')] bg-no-repeat relative">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center">
                <h2 className="text-white text-4xl font-bold mb-4">¡Obtén un 20% de descuento!</h2>
                <p className="text-white text-lg mb-6">Aprovecha nuestra oferta especial por tiempo limitado.</p>
                <a href="/all-products" className="bg-[#f76d24] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#e05a1f] transition duration-300">
                    Comprar ahora
                </a>
            </div>
        </div>
    );
}

export default Discount;
