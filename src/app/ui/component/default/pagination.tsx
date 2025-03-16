'use client'
import React, { ReactElement, useRef, useState } from "react";
import { ProductModel } from "../../../lib/definitions";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

interface PaginationProps {
    loading: boolean
    data: ProductModel[]
    totalPages: number
    currentPage: number
    restar: boolean
}

const Pagination: React.FC<PaginationProps> = ({ loading, data, totalPages, currentPage }) => {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const upperPageBound = useRef<number>(3);
    const lowerPageBound = useRef<number>(0);
    const isPrevBtnActive = useRef<string>('disabled');
    const isNextBtnActive = useRef<string>('');
    const pageBound = useRef<number>(3);
    const messagePaginacion = useRef<ReactElement>();

    const setPrevAndNextBtnClass = (page: number | string) => {
        isNextBtnActive.current = 'disabled';
        isPrevBtnActive.current = 'disabled';

        if (totalPages === page && totalPages > 1) {
            isPrevBtnActive.current = '';
        } else if (page === 1 && totalPages > 1) {
            isNextBtnActive.current = '';
        } else if (totalPages > 1) {
            isNextBtnActive.current = '';
            isPrevBtnActive.current = '';
        }

        const params = new URLSearchParams(searchParams);
        params.set('page', page.toString());
        replace(`${pathname}?${params.toString()}`);
    }

    const btnPrevClick = () => {
        if (loading) return;

        if ((currentPage - 1) % pageBound.current === 0) {
            upperPageBound.current = upperPageBound.current - pageBound.current;
            lowerPageBound.current = lowerPageBound.current - pageBound.current;
        }
        const pagId = currentPage - 1;
        setPrevAndNextBtnClass(pagId);
    }

    const btnDecrementClick = () => {
        if (loading) return;

        upperPageBound.current = upperPageBound.current - pageBound.current;
        lowerPageBound.current = lowerPageBound.current - pageBound.current;
        const pagId = upperPageBound.current;
        setPrevAndNextBtnClass(pagId);
    }

    const handleClick = (page: number) => {
        if (loading) return;

        setPrevAndNextBtnClass(page);
    }

    const btnIncrementClick = () => {
        if (loading) return;

        upperPageBound.current = upperPageBound.current + pageBound.current;
        lowerPageBound.current = lowerPageBound.current + pageBound.current;

        const pagId = lowerPageBound.current + 1;
        setPrevAndNextBtnClass(pagId);
    }

    const btnNextClick = () => {
        if (loading) return;

        if (currentPage + 1 > upperPageBound.current) {
            upperPageBound.current = upperPageBound.current + pageBound.current;
            lowerPageBound.current = lowerPageBound.current + pageBound.current;
        }
        const page = currentPage + 1;
        setPrevAndNextBtnClass(page);
    }

    messagePaginacion.current = <p className="text-base text-gray-700">Mostrando <span className="font-medium">{data.length}</span> de <span className="font-medium">{totalPages}</span> paginas</p>;

    const pageNumbers = [] as number[];
    for (let index = 1; index <= totalPages; index++) {
        pageNumbers.push(index);
    }

    const renderPageNumbers = pageNumbers.map((value: number, index) => {
        if (value === 1 && currentPage === 1) {
            return (
                <span key={index} className="relative z-10 inline-flex items-center bg-qyellow px-4 py-2 text-base font-medium focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {value}
                </span>
            );
        }

        if (value < upperPageBound.current + 1 && value > lowerPageBound.current) {
            if (value === currentPage) {
                return (
                    <span key={index} className="relative z-10 inline-flex items-center bg-qyellow px-4 py-2 text-base font-medium focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {value}
                    </span>
                );
            }
            return (
                <button key={index} className="relative inline-flex items-center px-4 py-2 text-base font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={() => handleClick(value)}>
                    {value}
                </button>
            );
        }

        return null;
    });

    let renderPrevBtn = null;
    if (isPrevBtnActive.current === 'disabled' || totalPages <= 1) {
        renderPrevBtn = (
            <span className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                </svg>
            </span>
        );
    } else {
        renderPrevBtn = (
            <button type="button" className="relative inline-flex items-center px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                onClick={btnPrevClick}>
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                </svg>
            </button>
        );
    }

    let pageDecrementBtn = null;
    if (lowerPageBound.current >= 1) {
        pageDecrementBtn = (
            <button type="button" className="relative inline-flex items-center px-4 py-2 text-base font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                onClick={btnDecrementClick}>
                {' '}&hellip;{' '}
            </button>
        );
    }

    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound.current) {
        pageIncrementBtn = (
            <button type="button" className="relative inline-flex items-center px-4 py-2 text-base font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                onClick={btnIncrementClick}>
                {' '}&hellip;{' '}
            </button>
        );
    }

    let renderNextBtn = null;
    if (isNextBtnActive.current === 'disabled' || totalPages <= 1) {
        renderNextBtn = (
            <span className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
            </span>
        );
    } else {
        renderNextBtn = (
            <button className="relative inline-flex items-center px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                onClick={btnNextClick}>
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
            </button>
        );
    }

    return (
        <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                {renderPrevBtn}
                {renderNextBtn}
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    {messagePaginacion.current}
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px shadow-sm" aria-label="Pagination">
                        {renderPrevBtn}
                        {pageDecrementBtn}
                        {renderPageNumbers}
                        {pageIncrementBtn}
                        {renderNextBtn}
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Pagination;