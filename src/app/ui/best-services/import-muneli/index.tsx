import { IoReload, IoShieldCheckmarkOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

function BestServices() {
    return (
        <div className="best-services w-full bg-white py-10">
            <div className="container mx-auto px-2 md:px-6">
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0">
                    <div className="flex space-x-5 items-center w-full lg:w-auto">
                        <MdOutlineShoppingCart color="#f76d24" size={40} />
                        <div>
                            <p className="text-[#042460] text-base font-bold tracking-wide mb-1">
                                Envío Gratis
                            </p>
                            <p className="text-sm text-gray-600">Compra superior a S/ 100.00</p>
                        </div>
                    </div>

                    <div className="flex space-x-5 items-center w-full lg:w-auto">
                        <IoReload color="#f76d24" size={40} />
                        <div>
                            <p className="text-[#042460] text-base font-bold tracking-wide mb-1">
                                Devolución
                            </p>
                            <p className="text-sm text-gray-600">Plazo de un día.</p>
                        </div>
                    </div>

                    <div className="flex space-x-5 items-center w-full lg:w-auto">
                        <IoShieldCheckmarkOutline size={40} color="#f76d24" />
                        <div>
                            <p className="text-[#042460] text-base font-bold tracking-wide mb-1">
                                Seguridad de Pago
                            </p>
                            <p className="text-sm text-gray-600">100% de seguridad en el pago</p>
                        </div>
                    </div>

                    <div className="flex space-x-5 items-center w-full lg:w-auto">
                        <CiTrophy size={40} color="#f76d24" />
                        <div>
                            <p className="text-[#042460] text-base font-bold tracking-wide mb-1">
                                Calidad
                            </p>
                            <p className="text-sm text-gray-600">Producto garantizado</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestServices;
