import { BagIcon, CompareIcon, ExpandIcon, HeartIcon, StarIcon } from "@/src/helper/icons";
import Image from "next/image";

interface ProductCardProps {
    image: string;
    width?: number;
    height?: number;
    title: string;
    priceOld: string;
    priceNew: string;
    available?: boolean;
    amount?: string;
    reviews: number;
}

const ProductCard = ({ image, width = 196, height = 196, title, priceOld, priceNew, available = false, amount = "0", reviews }: ProductCardProps) => {
    return (
        <div data-aos="fade-up">
            <div className="product-card-one w-full h-full bg-white relative group overflow-hidden shadow-2xl shadow-black/10">
                <div className="product-card-img w-full h-[300px] flex items-center justify-center">
                    <Image
                        src={image}
                        alt={title}
                        width={width}
                        height={height}
                        priority={true}
                    />
                    {available && (
                        <div className="px-[30px] absolute left-0 top-3 w-full">
                            <div className="progress-title flex justify-between ">
                                <p className="text-xs text-qblack font-400 leading-6">
                                    Prodcuts Available
                                </p>
                                <span className="text-sm text-qblack font-semibold leading-6">
                                    {amount}
                                </span>
                            </div>
                            <div className="progress w-full h-[5px] rounded-[22px] bg-primarygray relative overflow-hidden">
                                <div className="h-full absolute left-0 top-0  bg-qyellow w-[66.6667%]"></div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="product-card-details px-[30px] pb-[30px] relative">
                    <div className="absolute w-full h-10 px-[30px] left-0 top-40 group-hover:top-[85px] transition-all duration-300 ease-in-out">
                        <button type="button" className="yellow-btn">
                            <div className="flex items-center space-x-3">
                                <span>
                                    <BagIcon />
                                </span>
                                <span>Add To Cart</span>
                            </div>
                        </button>
                    </div>
                    <div className="reviews flex space-x-[1px] mb-3">
                        {Array.from({ length: reviews }).map((_, key) => (
                            <span key={key}>
                                <StarIcon />
                            </span>
                        ))}
                    </div>
                    <a href="/single-product">
                        <p className="title mb-2 text-[15px] font-semibold text-qblack leading-[24px] line-clamp-2 hover:text-blue-600">{title}</p>
                    </a>
                    <p className="price">
                        <span className="main-price text-qgray line-through font-semibold text-[18px]">{priceOld}</span>
                        <span className="offer-price text-qred font-semibold text-[18px] ml-2">{priceNew}</span>
                    </p>
                </div>
                <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-20  transition-all duration-300 ease-in-out">
                    <a href="#">
                        <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                            <ExpandIcon />
                        </span>
                    </a>
                    <a href="#">
                        <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                            <HeartIcon />
                        </span>
                    </a>
                    <a href="#">
                        <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
                            <CompareIcon />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;