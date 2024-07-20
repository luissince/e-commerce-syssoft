import Discount from "@/src/components/common/discount";
import Title, { BreadItem } from "@/src/components/common/title";
import { ChevronDownIcon, EditIcon, QuestionIcon } from "@/src/helper/icons";
import Image from "next/image";

const Body = () => {
    return (
        <div className="w-full mb-10">
            <div className="container max-w-screen-x mx-auto md:px-6">
                <div className="w-full bg-white sm:p-[30px] p-3">

                    <div className="flex xl:flex-row flex-col-reverse xl:space-x-11">

                        <div className="xl:w-[824px]">
                            <div className="title w-full mb-4">
                                <h1 className="text-[22px] font-semibold text-qblack mb-1">Seller Information</h1>
                                <p className="text-[15px] text-qgraytwo">Fill the form below or write us .We will help you as soon as possible.</p>
                            </div>

                            <div className="input-area">
                                <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                                    <div className="input-com w-full h-full">
                                        <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">First Name*</label>
                                        <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                            <input placeholder="Demo Name" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                        </div>
                                    </div>

                                    <div className="input-com w-full h-full">
                                        <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">First Name*</label>
                                        <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                            <input placeholder="Demo Name" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                                    <div className="input-com w-full h-full">
                                        <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">First Name*</label>
                                        <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                            <input placeholder="Demo Name" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                        </div>
                                    </div>

                                    <div className="input-com w-full h-full">
                                        <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">First Name*</label>
                                        <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                            <input placeholder="Demo Name" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                        </div>
                                    </div>
                                </div>

                                <div className="input-item mb-5">
                                    <h1 className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Country*</h1>
                                    <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2">
                                        <span className="text-[13px] text-qgraytwo">Select Country</span>
                                        <span>
                                            <ChevronDownIcon />
                                        </span>
                                    </div>
                                </div>

                                <div className="input-com w-full h-full">
                                    <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">First Name*</label>
                                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                        <input placeholder="Demo Name" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                    </div>
                                </div>
                            </div>

                            <div className="title w-full mb-4">
                                <h1 className="text-[22px] font-semibold text-qblack mb-1">Shop Information</h1>
                                <p className="text-[15px] text-qgraytwo">Fill the form below or write us .We will help you as soon as possible.</p>
                            </div>

                            <div className="input-area">

                                <div className="mb-5">
                                    <div className="input-com w-full h-full">
                                        <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">First Name*</label>
                                        <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                            <input placeholder="Demo Name" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <div className="input-com w-full h-full">
                                        <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">First Name*</label>
                                        <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                            <input placeholder="Demo Name" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-[30px]">
                                    <div className="input-com w-full h-full">
                                        <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Password*</label>
                                        <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                            <input placeholder="● ● ● ● ● ●" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                        </div>
                                    </div>

                                    <div className="input-com w-full h-full">
                                        <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Re-Enter Password*</label>
                                        <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                            <input placeholder="● ● ● ● ● ●" className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" />
                                        </div>
                                    </div>
                                </div>

                                <div className="signin-area mb-3">
                                    <div className="flex justify-center">
                                        <button type="button" className="black-btn text-sm text-white w-[490px] h-[50px] font-semibold flex justify-center bg-purple items-center">
                                            <span>Create Seller Account</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="signup-area flex justify-center">
                                    <p className="text-sm text-qgraytwo font-normal">Alrady have an Account?
                                        <a href="/login" className="ml-2 text-qblack">Log In</a>
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="flex-1 mb-10 xl:mb-0">
                            <div className="update-profile w-full mb-9">
                                <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2"
                                >Update Profile
                                    <span className="ml-1">
                                        <QuestionIcon />
                                    </span>
                                </h1>

                                <p className="text-sm text-qgraytwo mb-5">Profile of at least Size
                                    <span className="ml-1 text-qblack">300x300</span>. Gifs work too.
                                    <span className="ml-1 text-qblack">Max 5mb</span>.
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

                            <div className="update-logo w-full mb-9">
                                <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2"
                                >Update Profile
                                    <span className="ml-1">
                                        <QuestionIcon />
                                    </span>
                                </h1>

                                <p className="text-sm text-qgraytwo mb-5">Profile of at least Size
                                    <span className="ml-1 text-qblack">300x300</span>. Gifs work too.
                                    <span className="ml-1 text-qblack">Max 5mb</span>.
                                </p>

                                <div className="flex xl:justify-center justify-start">
                                    <div className="relative">
                                        <Image src="/assets/edit-logoimg.jpg" alt="" className="sm:w-[198px] sm:h-[198px] w-[199px] h-[199px] rounded-full overflow-hidden object-cover" width={200} height={200} />
                                        <input type="file" className="hidden"></input>
                                        <div className="w-[32px] h-[32px] absolute bottom-7 sm:right-0 right-[105px]  hover:bg-[#F539F8] bg-[#F539F8] rounded-full cursor-pointer">
                                            <EditIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="update-logo w-full mb-9">
                                <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2"
                                >Update Cover
                                    <span className="ml-1">
                                        <QuestionIcon />
                                    </span>
                                </h1>

                                <p className="text-sm text-qgraytwo mb-5">Cover of at least Size<span className="ml-1 text-qblack">1170x920</span>.</p>

                                <div className="flex xl:justify-center justify-start">
                                    <div className="relative">
                                        <Image src="/assets/edit-coverimg.jpg" alt="" className="w-full h-[120px] rounded-lg overflow-hidden object-cover" width={230} height={120} />
                                        <input type="file" className="hidden"></input>
                                        <div className="w-[32px] h-[32px] absolute bottom-7 sm:right-0 right-[105px]  hover:bg-[#F539F8] bg-[#F539F8] rounded-full cursor-pointer">
                                            <EditIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

const Profile = () => {

    return (
        <>
            <div className="w-full pt-0 pb-0">
                <Title
                    breadCrumds={
                        <>
                            <BreadItem
                                href={"/"}
                                title={"home"}
                                isSeparator={true} />
                            <BreadItem
                                href={"/become-saller"}
                                title={"Become Saller"}
                                isSeparator={false} />
                        </>
                    }
                    title={"Seller Application"} />
                <Body />
            </div>
            <Discount />
        </>
    );
}

export default Profile;