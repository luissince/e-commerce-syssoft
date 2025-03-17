import Container from "@/app/ui/component/import-muneli/container";
import Image from "next/image";

function Brands() {
    return (
        <div
            data-aos="fade-up"
            className="brand-section-wrapper w-full bg-white pb-10">
            <Container>
                <div className="section-title flex justify-between items-center mb-10">
                    <h1 className="sm:text-3xl text-xl font-bold text-[#f76d24]">
                        Marcas Populares
                    </h1>
                </div>

                <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-6">
                    {[...Array(12)].map((_, index) => (
                        <div key={index} className="item transform transition-transform duration-300 hover:scale-105">
                            <div className="w-full h-[130px] flex justify-center items-center border border-[#042460] rounded-md">
                                <Image src={`/assets/brand-${index + 1}.png`} width={128} height={32} alt="logo" />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Brands;
