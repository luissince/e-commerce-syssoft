'use client'
import { CompanyModel } from "@/app/lib/definitions";
import { useAppSelector } from "@/app/lib/hooks/storeHooks";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from "react";
import { FaHeart } from "react-icons/fa";
import { useDebouncedCallback } from "use-debounce";
import { selectCart } from "@/app/lib/store/slices/shoppingCardSlice";
import images from "@/app/lib/config/images";
import Container from "@/app/ui/component/import-muneli/container";
// import { searchAction } from "@/app/lib/actions";

export default function SearchBar(company: CompanyModel) {
    const cart = useAppSelector(selectCart);
    const [mounted, setMounted] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState('');
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    // const searchParams = useSearchParams();
    // const pathname = usePathname();
    // const { replace } = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    // const handleSearch = useDebouncedCallback((search: string) => {
    //     const params = new URLSearchParams(searchParams);
    //     params.set('page', '1');
    //     if (search) {
    //         params.set('query', search);
    //     } else {
    //         params.delete('query');
    //     }
    //     replace(`${pathname}?${params.toString()}`);
    // }, 300);


    const handleSearch = (search: string) => {
        setSearchValue(search);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchValue.trim()) {
            startTransition(() => {
                router.push(`/all-products?page=1&query=${encodeURIComponent(searchValue)}`);
            });
        }
    };

    if (!mounted) {
        return null;
    }

    return (
        <div className="w-full bg-white">
            <Container>
                <div className="flex items-center space-x-5 py-4">
                    <Link href={"/"} className="cursor-pointer">
                        <Image
                            src={company.rutaImage ?? images["import-muneli"].logo}
                            alt={company.nombreEmpresa ?? "logo"}
                            width="172"
                            height="36"
                            priority
                        />
                    </Link>

                    <form onSubmit={handleSubmit} className="w-full h-12 flex items-center border rounded-md border-[#f76d24]">
                        <div className="flex-1 h-full">
                            <div className="h-full">
                                <input
                                    type="text"
                                    name="search"
                                    className="search-input border-0 outline-none text-[#000] font-semibold w-full h-full p-5 text-sm bg-white rounded-l-md"
                                    placeholder="Buscar producto..."
                                    onChange={(event) => handleSearch(event.target.value)}
                                    value={searchValue}
                                // defaultValue={searchParams.get('query')?.toString()}
                                />
                            </div>
                        </div>
                        <button
                            className="px-6 h-full flex items-center space-x-2 text-sm font-semibold border border-[#f76d24] bg-[#f76d24] text-white rounded-r-md"
                            type="submit"
                        >
                            {isPending && (
                                <>
                                    <span>Buscando</span>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                </>
                            )}
                            {!isPending  && <span>Buscar </span> }
                        </button>
                    </form>

                    <Link href="/wishlist" className="relative px-3 flex items-center space-x-2 bg-[#f76d24] text-white h-12 border rounded-md">
                        <FaHeart width={18} height={18} color="#fff" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {cart.totalItems}
                        </span>
                    </Link>

                    <Link href="/cart" className="relative px-6 flex items-center space-x-2 bg-[#f76d24] text-white h-12 border rounded-md">
                        <ShoppingBagIcon width={18} height={18} />
                        <span className="text-sm font-semibold">Carrito</span>
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {cart.totalItems}
                        </span>
                    </Link>
                </div>
            </Container>
        </div>
    );
}