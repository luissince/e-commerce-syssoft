import Image from "next/image";

function Brands() {
    return (
        <div
            data-aos="fade-up"
            className="w-full brand-section-wrapper mb-[60px]">
            <div className="container max-w-screen-x mx-auto px-2 md:px-6">

                <div className=" section-title flex justify-between items-center mb-5">
                    <div>
                        <h1 className="sm:text-3xl text-xl font-semibold text-qblacktext dark:text-white">
                            Shop by Brand
                        </h1>
                    </div>
                </div>

                <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2">
                    <div className="item">
                        <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
                            <Image src="/assets/brand-1.png" width={128} height={32} alt="logo" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
                            <Image src="/assets/brand-2.png" width={110} height={19} alt="logo" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
                            <Image src="/assets/brand-3.png" width={88} height={30} alt="logo" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
                            <Image src="/assets/brand-4.png" width={141} height={30} alt="logo" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
                            <Image src="/assets/brand-5.png" width={90} height={30} alt="logo" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
                            <Image src="/assets/brand-6.png" width={138} height={30} alt="logo" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
                            <Image src="/assets/brand-7.png" width={111} height={21} alt="logo" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
                            <Image src="/assets/brand-8.png" width={92} height={31} alt="logo" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
                            <Image src="/assets/brand-9.png" width={110} height={30} alt="logo" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
                            <Image src="/assets/brand-10.png" width={120} height={16} alt="logo" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
                            <Image src="/assets/brand-11.png" width={98} height={30} alt="logo" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center">
                            <Image src="/assets/brand-12.png" width={105} height={30} alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brands;