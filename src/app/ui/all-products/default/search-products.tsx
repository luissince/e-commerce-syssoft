'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const SearchProducts = () => {
    const [mounted, setMounted] = useState(false);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    if (!mounted) {
        return null;
    }

    return (
        <div className="products-sorting w-full bg-white md:h-[70px] flex md:flex-row flex-col md:space-y-0 space-y-5 md:justify-between md:items-center p-[30px] mb-[40px]">
            <div className="flex space-x-3 items-center text-qblack ">
                <span className="font-400 text-[13px]">Search:</span>
                <div className="flex space-x-3 items-center border-b border-b-qgray w-full">
                    <input
                        type="text"
                        className="outline-none text-xs w-full"
                        onChange={(e) => {
                            handleSearch(e.target.value);
                        }}
                        defaultValue={searchParams.get('query')?.toString()}
                    />
                </div>
            </div>
            <div>
                <p className="font-400 text-[13px] ">
                    <span className="text-qgray ">Showing</span> <span className="text-qblack">1–16 of 66 results</span></p>
            </div>
        </div>

    );
}

export default SearchProducts;