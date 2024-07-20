import Discount from '@/src/components/common/discount';
import NavProfile from '@/src/components/profile/nav';
import SwitchProfile from '@/src/components/profile/switch';

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="w-full pt-[30px] pb-[60px]">
                <div className="w-full">
                    <div className="container max-w-screen-x mx-auto px-2 md:px-6">
                        <div className="breadcrumb-wrapper font-normal text-[13px] text-qblack mb-[23px]">
                            <span>
                                <a href="/"><span className="mx-1 capitalize">home</span></a>
                                <span>/</span>
                            </span>
                            <span><a href="/profile">
                                <span className="mx-1 capitalize">profile</span></a>
                            </span>
                        </div>

                        <div className="w-full bg-white px-10 py-9">
                            <SwitchProfile />

                            <div className="profile-wrapper w-full mt-8 flex space-x-10">
                                <NavProfile />

                                <div className="flex-1">
                                    <div className='item-body dashboard-wrapper w-full'>
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Discount />
        </>
    );
}