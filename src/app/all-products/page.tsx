import React from "react";
import { Metadata } from "next";
import { fetchProductsPages } from "../lib/data";
import { ProductPagesModel } from "../lib/definitions";
import { importClientComponents } from '@/app/lib/utils/importClientComponents'

export const metadata: Metadata = {
  title: 'Store',
};

interface AllProductsProps {
  searchParams?: {
    query?: string;
    page?: string;
  }
}

export default async function AllProducts({ searchParams }: AllProductsProps) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const result = await fetchProductsPages() as ProductPagesModel;

  const { AllProducts } = await importClientComponents();
  return (<AllProducts query={query} total={result.total} currentPage={currentPage} />);
}
