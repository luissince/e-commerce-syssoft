import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="w-full pt-20 pb-28">
            <div className="aboutus-wrapper w-full">
                <div className="container max-w-screen-x mx-auto px-2 md:px-6">

                    <div className="empty-card-wrapper w-full">
                        <div className="flex justify-center items-center w-full">
                            <div>
                                <div className="sm:mb-10 mb-0 transform sm:scale-100 scale-50">
                                    <Image src="/assets/not-found.svg" alt="" width={385} height={476} />
                                </div>

                                <div data-aos="fade-up" className="empty-content w-full flex flex-col justify-center items-center">
                                    <h1 className="sm:text-xl text-base font-semibold text-center mb-5">Sorry! We cant’t Find that page!</h1>

                                    <Link href="/" className="w-[180px] h-[50px] ">
                                        <div className="w-[180px] h-[50px] ">
                                            <span className="flex items-center justify-center text-[#1d1d1d] bg-[#ffbb38] w-full h-full text-base">Back to Shop</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default NotFound;