import { EditIcon, QuestionIcon } from "@/src/helper/icons";
import Image from "next/image";

const Profile = () => {
    return (
        <>
            <div className="flex space-x-8">
                <div className="w-[570px] ">
                    <div className="input-item flex space-x-2.5 mb-8">
                        <div className="w-1/2 h-full">
                            <div className="input-com w-full h-full">
                                <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">First Name*</label>
                                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                    <input placeholder="Demo Name" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 h-full">
                            <div className="input-com w-full h-full">
                                <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">First Name*</label>
                                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                    <input placeholder="Demo Name" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="input-item flex space-x-2.5 mb-8">
                        <div className="w-1/2 h-full">
                            <div className="input-com w-full h-full">
                                <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Email*</label>
                                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                    <input placeholder="Demo Name" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 h-full">
                            <div className="input-com w-full h-full">
                                <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Phone Number**</label>
                                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                    <input placeholder="Demo Name" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="input-item  mb-8">
                        <div className="w-full">
                            <div className="input-com w-full h-full">
                                <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Email*</label>
                                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                    <input placeholder="Demo Name" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="input-item  mb-8">
                        <div className="w-full">
                            <div className="input-com w-full h-full">
                                <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Email*</label>
                                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                    <input placeholder="Demo Name" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="input-item flex space-x-2.5 mb-8">
                        <div className="w-1/2 h-full">
                            <div className="input-com w-full h-full">
                                <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Email*</label>
                                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                    <input placeholder="Demo Name" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 h-full">
                            <div className="input-com w-full h-full">
                                <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Phone Number**</label>
                                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                    <input placeholder="Demo Name" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="update-logo w-full mb-9">
                        <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
                            Update Profile
                            <span>
                                <QuestionIcon />
                            </span>
                        </h1>
                        <p className="text-sm text-qgraytwo mb-5 ">
                            Profile of at least Size
                            <span className="ml-1 text-qblack">300x300</span>
                            . Gifs work too.
                            <span className="ml-1 text-qblack">Max 5mb</span>
                        </p>
                        <div className="flex xl:justify-center justify-start">
                            <div className="relative">
                                <Image src="/assets/edit-profileimg.jpg" alt="" className="sm:w-[198px] sm:h-[198px] w-[199px] h-[199px] rounded-full overflow-hidden object-cover" width={200} height={200} />
                                <input type="file" className="hidden"></input>
                                <div className="w-[32px] h-[32px] absolute bottom-7 sm:right-0 right-[105px]  hover:bg-[#F539F8] bg-[#F539F8] rounded-full cursor-pointer">
                                    <EditIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="action-area flex space-x-4 items-center">
                <button type="button" className="text-sm text-qred font-semibold">Cancel</button>
                <button type="button" className="w-[164px] h-[50px] bg-qblack text-white text-sm">Update Profile</button>
            </div>
        </>
    );
}
export default Profile;