import { EyeIcon } from "@/src/helper/icons";
import Image from "next/image";

const Password = () => {
    return (
        <div className="changePasswordTab w-full">
            <div className="w-full flex xl:flex-row flex-col-reverse space-x-5 xl:items-center">
                <div className="w-[397px] mb-10">
                    <div className="input-field mb-6">
                        <label className="input-label text-qgray text-sm block mb-2.5" htmlFor="old_password">Old Password*</label>
                        <div className="input-wrapper border border-[#E8E8E8] w-full  h-[58px] overflow-hidden relative ">
                            <input
                                className="input-field placeholder:text-base text-bese px-4 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                                placeholder="● ● ● ● ● ●"
                                type="password"
                                id="old_password"
                            />
                            <div className="absolute right-6 bottom-[17px] z-10 cursor-pointer">
                                <EyeIcon />
                            </div>
                        </div>
                    </div>

                    <div className="input-field mb-6">
                        <label className="input-label text-qgray text-sm block mb-2.5" htmlFor="new_password">Password*</label>
                        <div className="input-wrapper border border-[#E8E8E8] w-full  h-[58px] overflow-hidden relative ">
                            <input
                                className="input-field placeholder:text-base text-bese px-4 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                                placeholder="● ● ● ● ● ●"
                                type="password"
                                id="new_password"
                            />
                            <div className="absolute right-6 bottom-[17px] z-10 cursor-pointer">
                                <EyeIcon />
                            </div>
                        </div>
                    </div>

                    <div className="input-field mb-6">
                        <label className="input-label text-qgray text-sm block mb-2.5" htmlFor="confirm_password">Re-enter Password*</label>
                        <div className="input-wrapper border border-[#E8E8E8] w-full  h-[58px] overflow-hidden relative ">
                            <input
                                className="input-field placeholder:text-base text-bese px-4 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                                placeholder="● ● ● ● ● ●"
                                type="password"
                                id="confirm_password"
                            />
                            <div className="absolute right-6 bottom-[17px] z-10 cursor-pointer">
                                <EyeIcon />
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-[30px] flex justify-start">
                        <div className="sm:flex sm:space-x-[30px] items-center">
                            <div className="w-[180px] h-[50px]"><button type="button" className="yellow-btn"><div className="w-full text-sm font-semibold">Upldate Password</div></button></div>
                            <button type="button"><div className="w-full text-sm font-semibold text-qblack mb-5 sm:mb-0">Cancel</div></button>
                        </div>
                    </div>
                </div>
                <div className="flex-1 sm:flex hidden justify-end">
                    <Image src="/assets/update-password.svg" alt="" width={311} height={320} />
                </div>
            </div>
        </div>
    );
}
export default Password;