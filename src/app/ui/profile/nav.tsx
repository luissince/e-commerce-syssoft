'use client'
import {
    ConfigurationIcon,
    CreditCardIcon,
    DashboardIcon,
    HeartAltIcon,
    LikeIcon,
    LogOutIcon,
    PadLockIcon,
    PersonAddresIcon,
    PersonIcon,
    ShoppingCartIcon
} from "@/app/ui/component/icons";
import Link from "next/link";
import React from "react";

interface ItemGroupProps {
    path: string,
    title: string,
    icon: React.ReactNode
}

const ItemGroup: React.FC<ItemGroupProps> = ({ path, title, icon }) => {
    return (
        <div className="item group">
            <Link href={path}>
                <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                    <span className="">
                        {icon}
                    </span>
                    <span className=" font-normal text-base">{title}</span>
                </div>
            </Link>
        </div>
    );
}

const NavProfile = () => {

    return (
        <div className="w-[236px] min-h-[600px] border-r border-[rgba(0, 0, 0, 0.1)]">
            <div className="flex flex-col space-y-10">
                <ItemGroup path="/profile/dashboard" title="Dashboard" icon={<DashboardIcon />} />
                <ItemGroup path="/profile/profile" title="Personal Info" icon={<PersonIcon />} />
                <ItemGroup path="/profile/payment" title="Payment Method" icon={<CreditCardIcon />} />
                <ItemGroup path="/profile/order" title="Order" icon={<ShoppingCartIcon />} />
                <ItemGroup path="/profile/wishlist" title="Wishlist" icon={<HeartAltIcon />} />
                <ItemGroup path="/profile/address" title="Address" icon={<PersonAddresIcon />} />
                <ItemGroup path="/profile/review" title="Reviews" icon={<LikeIcon />} />
                <ItemGroup path="/profile/password" title="Change Password" icon={<PadLockIcon />} />
                <ItemGroup path="/profile/support" title="Support Ticket" icon={<ConfigurationIcon />} />
                <ItemGroup path="/profile/logout" title="Logoout" icon={<LogOutIcon />} />
            </div>
        </div>
    );
}

export default NavProfile;