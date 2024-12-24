'use server';
import { sleep } from '@/helper/util';
import { redirect } from 'next/navigation';

export async function searchAction(formData: FormData) {
    let search = ''
    const data = formData.get('search');
    if (data) {
        search = encodeURIComponent(data.toString())
    }
    redirect(`/all-products?page=1&query=${search}`)
}

// Server Action en el mismo archivo o en actions.ts
export async function submitContactForm(prevState: any, formData: FormData) {
    try {
        const name = formData.get('name')?.toString().trim() ?? '';
        const email = formData.get('email')?.toString().trim() ?? '';
        const number = formData.get('number')?.toString().trim() ?? '';
        const message = formData.get('message')?.toString().trim() ?? '';

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        const errors = [];

        if (name.length === 0) {
            errors.push({
                name: 'name',
                errors: [
                    'El nombre es requerido',
                ],
            });
        }

        if (email.length === 0) {
            errors.push({
                name: 'email',
                errors: [
                    'El email es requerido',
                ],
            });
        }

        if (!emailRegex.test(email)) {
            if (errors.some(item => item.name === 'email')) {
                errors.forEach(item => {
                    if (item.name === 'email') {
                        item.errors.push('El email es invalido');
                    }
                });
            } else {
                errors.push({
                    name: 'email',
                    errors: [
                        'El email es invalido',
                    ],
                });
            }
        }

        if (number.length === 0) {
            errors.push({
                name: 'number',
                errors: [
                    'Sú número de teléfono es requerido',
                ],
            });
        }

        if (message.length === 0) {
            errors.push({
                name: 'message',
                errors: [
                    'El mensaje es requerido',
                ],
            });
        }

        if (errors.length > 0) {
            return {
                success: false,
                message: '',
                errors: errors,
            };
        }

        return {
            success: true,
            message: 'Su mensaje ha sido enviado exitosamente',
            errors: errors,
        };
    } catch (error) {
        return {
            success: true,
            message: 'El servidor no puede procesar su solicitud, intente nuevamente.',
            errors: [],
        };
    }
}

export async function submitCheckoutForm(prevState: any, formData: FormData) {


    const id = formData.get('id')?.toString().trim() ?? '';
    const firstname = formData.get('firstname')?.toString().trim() ?? '';
    const lastname = formData.get('lastname')?.toString().trim() ?? '';
    const email = formData.get('email')?.toString().trim() ?? '';
    const phone = formData.get('phone')?.toString().trim() ?? '';
    const address = formData.get('address')?.toString().trim() ?? '';
    const orders = formData.get('orders')?.toString() ?? '';

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const errors = [];


    if (!orders) {
        errors.push({
            name: 'products',
            errors: [
                'No se pudo encontrar la lista de productos a ordenar.',
            ],
        });
    }

    if(errors.length > 0) {
        return {
            success: false,
            message: '',
            errors: errors,
        };

    }

    return {
        success: true,
        message: 'Su mensaje ha sido enviado exitosamente',
        errors: [],
    };
}