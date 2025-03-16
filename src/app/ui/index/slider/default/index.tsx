import Image from "next/image";

export default function Banner() {
    return (
        <div className="banner-wrapper w-full mb-[60px]">
            <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                <div className="banner-card xl:flex xl:space-x-[30px] xl:h-[600px] mb-[30px]">
                    <div className="xl:w-[740px] w-full h-full">
                        <Image
                            src="/assets/banner-1.2.png"
                            width={740}
                            height={600}
                            alt=""
                            className="w-full max-w-full h-auto object-cover"
                        />
                    </div>
                    <div className="flex-1 flex xl:flex-col flex-row xl:space-y-[30px] h-full">
                        <div className="w-full xl:h-1/2">
                            <Image
                                src="/assets/banner-2.png"
                                width={398}
                                height={285}
                                alt=""
                                className="w-full h-full"
                            />
                        </div>
                        <div className="w-full xl:h-1/2">
                            <Image
                                src="/assets/banner-3.png"
                                width={398}
                                height={285}
                                alt=""
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
