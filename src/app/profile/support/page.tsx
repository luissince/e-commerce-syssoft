import { DiscussionIcon, RemoveIcon } from "@/app/ui/component/icons";

const Support = () => {
    return (
        <div className="support-tab w-full">
            <div className="w-[180px] h-[50px] mb-4">
                <button type="button" className="sm:w-[158px] w-[80px]  h-full bg-qyellow text-sm font-semibold text-black outline-0"><div className="w-full text-sm font-semibold">Add New Support</div></button>
            </div>

            <div className="relative w-full overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead>
                        <tr className="text-base text-qblack font-semibold bg-[#F6F6F6] whitespace-nowrap px-2 border-b default-border-bottom ">
                            <td className="py-6 whitespace-nowrap text-center">No</td>
                            <td className="py-6 whitespace-nowrap text-center">Time</td>
                            <td className="py-6 whitespace-nowrap text-center">Report</td>
                            <td className="py-6 whitespace-nowrap text-center">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white hover:bg-gray-50">
                            <td className="text-center py-4"><span className="text-lg text-qblack font-medium">#354</span></td>
                            <td className="text-center py-4 px-2"><span className="text-base text-qgray  whitespace-nowrap">Fub 05,2021</span></td>
                            <td className="text-center py-4 px-2"><span className="text-sm text-center text-qgray">Printing and typesetting industry standard dummy text ever since</span></td>
                            <td className="text-center py-4 flex space-x-2.5 justify-center">
                                <button className="border border-qgray w-[34px] h-[34px] rounded-full flex justify-center items-center">
                                    <DiscussionIcon />
                                </button>
                                <button className="border border-qgray w-[34px] h-[34px] rounded-full flex justify-center items-center">
                                    <RemoveIcon />
                                </button>
                            </td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-50">
                            <td className="text-center py-4"><span className="text-lg text-qblack font-medium">#354</span></td>
                            <td className="text-center py-4 px-2"><span className="text-base text-qgray  whitespace-nowrap">Fub 05,2021</span></td>
                            <td className="text-center py-4 px-2"><span className="text-sm text-center text-qgray">Printing and typesetting industry standard dummy text ever since</span></td>
                            <td className="text-center py-4 flex space-x-2.5 justify-center">
                                <button className="border border-qgray w-[34px] h-[34px] rounded-full flex justify-center items-center">
                                    <DiscussionIcon />
                                </button>
                                <button className="border border-qgray w-[34px] h-[34px] rounded-full flex justify-center items-center">
                                    <RemoveIcon />
                                </button>
                            </td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-50">
                            <td className="text-center py-4"><span className="text-lg text-qblack font-medium">#354</span></td>
                            <td className="text-center py-4 px-2"><span className="text-base text-qgray  whitespace-nowrap">Fub 05,2021</span></td>
                            <td className="text-center py-4 px-2"><span className="text-sm text-center text-qgray">Printing and typesetting industry standard dummy text ever since</span></td>
                            <td className="text-center py-4 flex space-x-2.5 justify-center">
                                <button className="border border-qgray w-[34px] h-[34px] rounded-full flex justify-center items-center">
                                    <DiscussionIcon />
                                </button>
                                <button className="border border-qgray w-[34px] h-[34px] rounded-full flex justify-center items-center">
                                    <RemoveIcon />
                                </button>
                            </td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-50">
                            <td className="text-center py-4"><span className="text-lg text-qblack font-medium">#354</span></td>
                            <td className="text-center py-4 px-2"><span className="text-base text-qgray  whitespace-nowrap">Fub 05,2021</span></td>
                            <td className="text-center py-4 px-2"><span className="text-sm text-center text-qgray">Printing and typesetting industry standard dummy text ever since</span></td>
                            <td className="text-center py-4 flex space-x-2.5 justify-center">
                                <button className="border border-qgray w-[34px] h-[34px] rounded-full flex justify-center items-center">
                                    <DiscussionIcon />
                                </button>
                                <button className="border border-qgray w-[34px] h-[34px] rounded-full flex justify-center items-center">
                                    <RemoveIcon />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Support;