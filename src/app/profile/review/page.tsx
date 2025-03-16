import { StarIcon } from "@/app/ui/component/default/icons";
import Image from "next/image";
import React from "react";

interface ItemProps {
    image: string;
    width: number;
    height: number;
    title: string;
    date: string;
    numberStar: number;
    description: string;
}

const ReviewItem: React.FC<ItemProps> = ({ image, width, height, title, date, numberStar, description }) => {
    return (
        <div className="item">
            <div className="product-row-card-style-one w-full h-[170px] bg-white group relative overflow-hidden shadow-shadowProduct">
                <div className="flex space-x-2 items-center w-full h-full p-2">
                    <div className="w-1/3 h-full">
                        <Image src={image} alt="" className="w-full h-full object-contain" width={width} height={height} />
                    </div>
                    <div className="flex-1 flex flex-col justify-center h-full">
                        <div>
                            <span className="text-qgray text-sm mb-1.5 block">{date}</span>
                            <div className="flex mb-1.5">
                                {Array.from({ length: numberStar }).map((_, index) => (
                                    <span key={index}>
                                        <StarIcon />
                                    </span>
                                ))}
                            </div>
                            <a href="/single-product"><p className="title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-1 hover:text-blue-600">{title}</p></a>
                            <p className="price mb-[26px] text-sm text-qgray line-clamp-2">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Review = () => {
    return (
        <div className="review-tab-wrapper w-full">
            <div className="grid grid-cols-2 gap-8">
                <ReviewItem
                    image="/assets/product-img-1.jpg"
                    width={125}
                    height={154}
                    title="Xoggle aute et pariatur adipisicing nostrud et excepteur"
                    date="July 22, 2022"
                    numberStar={3}
                    description="Didn't I tell you not put your phone on charge because weekend?"
                />

                <ReviewItem
                    image="/assets/product-img-2.jpg"
                    width={125}
                    height={154}
                    title="Xoggle aute et pariatur adipisicing nostrud et excepteur"
                    date="July 22, 2022"
                    numberStar={5}
                    description="Didn't I tell you not put your phone on charge because weekend?"
                />

                <ReviewItem
                    image="/assets/product-img-3.jpg"
                    width={125}
                    height={154}
                    title="Xoggle aute et pariatur adipisicing nostrud et excepteur"
                    date="July 22, 2022"
                    numberStar={5}
                    description="Didn't I tell you not put your phone on charge because weekend?"
                />

                <ReviewItem
                    image="/assets/product-img-4.jpg"
                    width={125}
                    height={154}
                    title="Xoggle aute et pariatur adipisicing nostrud et excepteur"
                    date="July 22, 2022"
                    numberStar={5}
                    description="Didn't I tell you not put your phone on charge because weekend?"
                />

                <ReviewItem
                    image="/assets/product-img-5.jpg"
                    width={125}
                    height={154}
                    title="Xoggle aute et pariatur adipisicing nostrud et excepteur"
                    date="July 22, 2022"
                    numberStar={5}
                    description="Didn't I tell you not put your phone on charge because weekend?"
                />

                <ReviewItem
                    image="/assets/product-img-6.jpg"
                    width={125}
                    height={154}
                    title="Xoggle aute et pariatur adipisicing nostrud et excepteur"
                    date="July 22, 2022"
                    numberStar={5}
                    description="Didn't I tell you not put your phone on charge because weekend?"
                />
            </div>
        </div>
    );
}
export default Review;