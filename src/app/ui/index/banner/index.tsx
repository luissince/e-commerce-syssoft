import Image from "next/image";

function BannerTwo() {
    return (
        <div className="w-full products-ads-section mb-[60px]">
            <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                <div className="undefined  items-center w-full  overflow-hidden">
                    <div
                        data-aos="fade-right"
                        className="h-full sm:mb-0 mb-5 w-full"
                    >
                        <a href="/single-product">
                            <Image
                                src="/assets/ads-3.png"
                                width={1168}
                                height={292}
                                alt=""
                                className="w-full sm:h-full h-auto"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BannerThree() {
    return (
        <div className="w-full products-ads-section mb-[60px]">
            <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                <div className="164  items-center w-full  overflow-hidden">
                    <div
                        data-aos="fade-right"
                        className="h-full sm:mb-0 mb-5 w-full"
                    >
                        <a href="/single-product">
                            <Image
                                src="/assets/ads-4.png"
                                width={1168}
                                height={164}
                                alt=""
                                className="w-full sm:h-full h-auto"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}




export {
    BannerTwo,
    BannerThree
};
