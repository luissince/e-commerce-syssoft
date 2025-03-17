import Container from "@/app/ui/component/import-muneli/container";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

function TopBar() {
    return (
        <div className="w-full bg-[#f76d24]">
            <Container>
                <div className="flex justify-between items-center py-2">
                    <button>
                        <ChevronLeftIcon width={26} height={26} color="#fff" />
                    </button>
                    <p className="text-white text-center text-sm">Envío gratis a todo Lima Metropolitana y a todo el Perú por compras superiores a S/250</p>
                    <button>
                        <ChevronLeftIcon width={26} height={26} color="#fff" className="rotate-180" />
                    </button>
                </div>
            </Container>
        </div>
    );
}

export default TopBar;