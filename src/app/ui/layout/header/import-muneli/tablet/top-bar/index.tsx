import { ChevronLeftIcon } from "@heroicons/react/20/solid";

function TopBar() {
    return (
        <div className="w-full bg-[#f76d24]">
            <div className="container mx-auto px-2 md:px-6 py-1">
                <div className="flex justify-between items-center">
                    <button>
                        <ChevronLeftIcon width={26} height={26} color="#fff"  />
                    </button>
                    <p className="text-white text-center text-sm">Envío gratis a todo Lima Metropolitana y a todo el Perú por compras superiores a S/250</p>
                    <button>
                        <ChevronLeftIcon width={26} height={26} color="#fff" className="rotate-180"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TopBar;