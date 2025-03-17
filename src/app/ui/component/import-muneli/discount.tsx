import Image from 'next/image';
import images from "@/app/lib/config/images";

function Discount() {
    const banner = images["import-muneli"].sliders.desktop[1];
    return (
        <div className="discount-banner w-full h-[307px] relative"> 
            <Image 
                src={banner}
                alt="Discount Banner"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="absolute inset-0 flex justify-center items-center z-20">
                <div className="text-center px-2">
                    <h2 className="text-white text-4xl font-bold mb-4">¡Obtén un 20% de descuento!</h2>
                    <p className="text-white text-lg mb-6">Aprovecha nuestra oferta especial por tiempo limitado.</p>
                    <a href="/all-products" className="bg-[#f76d24] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#e05a1f] transition duration-300">
                        Comprar ahora
                    </a>
                </div>
            </div>
        </div>
    );
}

// function Discount() {
//     const banner = images["import-muneli"].sliders.desktop[1];
//     return (
//         <div 
//             className="discount-banner w-full h-[307px] bg-cover flex justify-center items-center bg-no-repeat relative"
//             style={{ backgroundImage: `url(${banner})` }}
//         > 
//             <div className="absolute inset-0 bg-black opacity-50"></div>
//             <div className="relative z-10 text-center px-2">
//                 <h2 className="text-white text-4xl font-bold mb-4">¡Obtén un 20% de descuento!</h2>
//                 <p className="text-white text-lg mb-6">Aprovecha nuestra oferta especial por tiempo limitado.</p>
//                 <a href="/all-products" className="bg-[#f76d24] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#e05a1f] transition duration-300">
//                     Comprar ahora
//                 </a>
//             </div>
//         </div>
//     );
// }

export default Discount;