'use client'
import { useState } from "react";
import { ProductModel } from "@/app/lib/definitions";

interface TabProps {
    product: ProductModel;
    tabNameOne: string;
    tabNameTwo: string;
}

const Tab: React.FC<TabProps> = ({ product, tabNameOne, tabNameTwo }) => {
    const [tab, setTab] = useState<number>(0);

    return (
        <div className="product-des-wrapper w-full relative pb-[60px]">
            <div className="tab-buttons w-full mb-10 mt-5 sm:mt-0">
                <ul className="flex space-x-12 ">
                    <li onClick={() => setTab(0)}>
                        <span className={`py-[15px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer ${tab === 0 ? 'border-qyellow text-qblack dark:text-white' : 'border-transparent text-qgray'}  `}>
                            {tabNameOne}
                        </span>
                    </li>
                    <li onClick={() => setTab(1)}>
                        <span className={`py-[15px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer ${tab === 1 ? 'border-qyellow text-qblack dark:text-white' : 'border-transparent text-qgray'} `}>
                            {tabNameTwo}
                        </span>
                    </li>
                    {/* <li onClick={() => setTab(2)}>
                            <span className={`py-[15px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer ${tab === 2 ? 'border-qyellow text-qblack' : 'border-transparent text-qgray'} `}>Reviews</span>
                        </li> */}
                </ul>
                <div className="w-full h-[1px] bg-[#E8E8E8] absolute left-0 sm:top-[50px] top-[36px] -z-10"></div>
            </div>

            <div className="tab-contents w-full">
                {tab === 0 && (
                    <div data-aos="fade-up" className="w-full tab-content-item">
                        <p className="text-[15px] dark:text-white text-qblack  text-normal mb-10 whitespace-pre-line">{product.descripcionLarga}</p>
                        {/* <div>
                                <h6 className="text-[18px] text-medium mb-4">Features :</h6>
                                <ul className="list-disc ml-[15px]">
                                    <li className="font-normal text-qgray leading-9">slim body with metal cover</li>
                                    <li className="font-normal text-qgray leading-9">latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                                    <li className="font-normal text-qgray leading-9">8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                                    <li className="font-normal text-qgray leading-9">NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard, touchpad with gesture support</li>
                                </ul>
                            </div> */}
                    </div>
                )}

                {tab === 1 && (
                    <div data-aos="fade-up" className="w-full tab-content-item">
                        <div className="saller-info-wrapper w-full">
                            <div className="saller-info">
                                <table className="w-full">
                                    <tbody>
                                        {product.detalles.map((detalle, index) => {
                                            if (index === 0) {
                                                <tr key={index}>
                                                    <td width={"30%"} className="pt-0 pb-2 border-b border-gray-300"><span className="text-[15px] font-normal text-qgray">{detalle.nombre}:</span></td>
                                                    <td width={"70%"} className="pt-0 pb-2 border-b border-gray-300"><span className="text-[15px] font-normal dark:text-white text-qblack whitespace-pre-line">{detalle.valor}</span></td>
                                                </tr>
                                            }
                                            return (
                                                <tr key={index}>
                                                    <td width={"30%"} className="pt-3 pb-2 border-b border-gray-300"><span className="text-[15px] font-normal text-qgray">{detalle.nombre}:</span></td>
                                                    <td width={"70%"} className="pt-3 pb-2 border-b border-gray-300"><span className="text-[15px] font-normal dark:text-white text-qblack whitespace-pre-line">{detalle.valor}</span></td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                                {/* 
                                    <div className="saller-info sm:flex justify-between items-center pb-[30px] border-b border-[#E8E8E8]">
                                    <div className="flex-1 w-full sm:flex sm:space-x-5 justify-between mt-5 sm:mt-0">
                                        <div className="sm:flex sm:space-x-5 items-center sm:w-1/4">
                                            <div className="saller w-[73px] h-[73px] rounded-full overflow-hidden">
                                                <Image src={"/assets/comment-user-1.png"} alt="saller" width={50} height={50} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="">
                                                <h6 className="text-[18px] font-medium leading-[30px]">Ridoy Rock</h6>
                                                <p className="text-[13px] font-normal text-qgray leading-[30px]">London,United Kingdom</p>
                                                <div className="flex items-center mt-4">
                                                    <div className="flex">
                                                        <StarIcon width={15} color="#FFA800" />
                                                        <StarIcon width={15} color="#FFA800" />
                                                        <StarIcon width={15} color="#FFA800" />
                                                        <StarIcon width={15} color="#FFA800" />
                                                        <StarIcon width={15} color="#FFA800" />
                                                    </div>
                                                    <span className="text-[13px] font-normal ml-1">(4.5)</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-1 w-full sm:flex sm:space-x-5 justify-between sm:ml-[60px] mt-5 sm:mt-0">
                                            <div className="w-full mb-5 sm:mb-0">
                                                <ul>
                                                    <li className="text-qgray leading-[30px]">
                                                        <span className="text-[15px] font-normal text-qblack">Products</span>: 120
                                                    </li>
                                                    <li className="text-qgray leading-[30px]">
                                                        <span className="text-[15px] font-normal text-qblack">Category</span>: Mobile Phone, Sports, Gaming, Electronics
                                                    </li>
                                                    <li className="text-qgray leading-[30px]">
                                                        <span className="text-[15px] font-normal text-qblack">Tags</span>: Beer, Foamer
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="w-full">
                                                <ul>
                                                    <li className="text-qgray leading-[30px]">
                                                        <span className="text-[15px] font-normal text-qblack">Products</span>: 120
                                                    </li>
                                                    <li className="text-qgray leading-[30px]">
                                                        <span className="text-[15px] font-normal text-qblack">Category</span>: Mobile Phone, Sports, Gaming, Electronics
                                                    </li>
                                                    <li className="text-qgray leading-[30px]">
                                                        <span className="text-[15px] font-normal text-qblack">Tags</span>: Beer, Foamer
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                     </div> */}
                            </div>
                        </div>
                    </div>
                )}

                {/* {tab === 2 && (
                        <div data-aos="fade-up" className="w-full tab-content-item">
                            <h6 className="text-[18px] font-medium text-qblack mb-2">Reviews</h6>
                            <div className="w-full">
                                <div className="review-wrapper w-full">
                                    <div className="w-full reviews mb-[60px]">
                                        <div className="w-full comments mb-[60px]">
                                            <div className="comment-item bg-white px-10 py-[32px] mb-2.5">
                                                <div className="comment-author flex justify-between items-center mb-3">
                                                    <div className="flex space-x-3 items-center">
                                                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                                                            <Image src="/assets/comment-user-1.png" alt="" width={50} height={50} className="w-full h-full object-cover" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[18px] font-medium text-qblack">Rafiqul Islam</p>
                                                            <p className="text-[13px] font-normal text-qgray">London,UK</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <div className="flex">
                                                            <span>
                                                                <StarIcon width={15} color="#FFA800" />
                                                            </span>
                                                            <span>
                                                                <StarIcon width={15} color="#FFA800" />
                                                            </span>
                                                            <span>
                                                                <StarIcon width={15} color="#FFA800" />
                                                            </span>
                                                            <span>
                                                                <StarIcon width={15} color="#FFA800" />
                                                            </span>
                                                        </div>
                                                        <span className="text-[13px] font-normal text-qblack mt-1 inline-block">(4.0)</span>
                                                    </div>
                                                </div>
                                                <div className="comment mb-[30px]">
                                                    <p className="text-[15px] text-qgray leading-7 text-normal">Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry&apos;s standard dummy
                                                        text ever since the redi 1500s, when an unknown printer took a
                                                        galley of type and scrambled it to make a type specimen book. It
                                                        has survived not only five centuries but also the on leap into
                                                        electronic typesetting, remaining</p>
                                                </div>
                                                <div className="sub-comment-item bg-white px-10 pt-[32px] border-t">
                                                    <div className="comment-author  mb-3">
                                                        <div className="flex space-x-3 items-center">
                                                            <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                                                                <Image src="/assets/comment-user-2.png" alt="" className="w-full h-full object-cover" width={50} height={50} />
                                                            </div>
                                                            <div>
                                                                <p className="text-[18px] font-medium text-qblack"></p>
                                                                <p className="text-[13px] font-normal text-qgray">London,UK</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="comment mb-[30px]"><p className="text-[15px] text-qgray leading-7 text-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full flex justify-center">
                                            <button type="button" className="bg-black text-white w-[300px] h-[50px] text-sm font-semibold">Load More</button>
                                        </div>
                                    </div>
                                    <div className="write-review w-full">
                                        <h1 className="text-2xl font-medium text-qblack mb-5">Write Your Reviews</h1>
                                        <div className="flex space-x-1 items-center mb-[30px]">
                                            <div className="star-rating flex">
                                                <button type="button" className="text-qgray">
                                                    <StarIcon width={15} color="#797979" />
                                                </button>
                                                <button type="button" className="text-qgray">
                                                    <StarIcon width={15} color="#797979" />
                                                </button>
                                                <button type="button" className="text-qgray">
                                                    <StarIcon width={15} color="#797979" />
                                                </button>
                                                <button type="button" className="text-qgray">
                                                    <StarIcon width={15} color="#797979" />
                                                </button>
                                                <button type="button" className="text-qgray">
                                                    <StarIcon width={15} color="#797979" />
                                                </button>
                                            </div>
                                            <span className="text-qblack text-[15px] font-normal mt-1">(0.0)</span>
                                        </div>
                                        <div className="w-full review-form ">
                                            <div className="sm:flex sm:space-x-[30px] items-center mb-5">
                                                <div className="sm:w-1/3 w-full">
                                                    <div className="input-com w-full h-full">
                                                        <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal" htmlFor="name">name*</label>
                                                        <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                                            <input placeholder="" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" id="name" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="sm:w-1/3 w-full mt-5 sm:mt-0">
                                                    <div className="input-com w-full h-full">
                                                        <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal" htmlFor="name">email**</label>
                                                        <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                                            <input placeholder="" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" id="name" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="sm:w-1/3 w-full mt-5 sm:mt-0">
                                                    <div className="input-com w-full h-full">
                                                        <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal" htmlFor="name">phone number*</label>
                                                        <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                                            <input placeholder="" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]" type="text" id="name" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full mb-[30px]">
                                                <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">Message*</h6>
                                                <textarea name="" id="" cols={30} rows={3} className="w-full focus:ring-0 focus:outline-none p-6"></textarea>
                                            </div>
                                            <div className="flex justify-end">
                                                <button type="button" className="bg-black text-white w-[300px] h-[50px]  flex justify-center">
                                                    <span className="flex space-x-1 items-center h-full">
                                                        <span className="text-sm font-semibold">Submit Review</span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )} */}
            </div>
        </div>
    );
}

export default Tab;