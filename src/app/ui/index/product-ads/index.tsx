import Image from "next/image";

function ProductAds() {
    return (
        <div className="w-full products-ads-section mb-[60px]">
            <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                <div className="sm:h-[295px] h-full sm:flex xl:space-x-[30px] sm:space-x-5 items-center w-full  overflow-hidden">
                    <div
                        data-aos="fade-right"
                        className="h-full sm:mb-0 mb-5 sm:w-1/2 w-full"
                    >
                        <a href="/single-product">
                            <Image
                                src="/assets/ads-1.png"
                                width={584}
                                height={295}
                                alt=""
                                className="w-full sm:h-full h-auto"
                                priority={true}
                            />
                        </a>
                    </div>

                    <div
                        data-aos="fade-left"
                        className="flex-1 h-full"
                    >
                        <a href="/single-product">
                            <Image
                                src="/assets/ads-2.png"
                                width={554}
                                height={295}
                                alt=""
                                className="w-full h-full" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductAds;
