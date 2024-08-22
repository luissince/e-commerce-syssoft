'use server';
import { redirect } from 'next/navigation';

export async function searchAction(formData: FormData) {
    let search = ''
    const data = formData.get('search');
    if (data) {
        search = encodeURIComponent(data.toString())
    }
    redirect(`/all-products?page=1&query=${search}`)
}