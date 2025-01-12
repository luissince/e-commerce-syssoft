'use server';
import { isEmail, isEmpty, sleep } from '@/helper/util';
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

        if (!isEmail(email)) {
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

    const typeDocument = formData.get('typeDocument')?.toString().trim() ?? '';
    const numberIdentity = formData.get('numberIdentity')?.toString().trim() ?? '';
    const firstname = formData.get('firstname')?.toString().trim() ?? '';
    const lastname = formData.get('lastname')?.toString().trim() ?? '';
    const email = formData.get('email')?.toString().trim() ?? '';
    const phone = formData.get('phone')?.toString().trim() ?? '';
    const address = formData.get('address')?.toString().trim() ?? '';
    const orders = formData.get('orders')?.toString() ?? '';

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const errors = [];

    if(isEmpty(typeDocument)){
        errors.push({
            name: 'typeDocument',
            errors: [
                'El tipo de documento es requerido',
            ],
        });
    }

    if(isEmpty(numberIdentity)){
        errors.push({
            name: 'numberIdentity',
            errors: [
                'El documento de identidad es requerido',
            ],
        });
    }

    if (isEmpty(firstname)) {
        errors.push({
            name: 'firstname',
            errors: [
                'El nombre o los nombres son requeridos',
            ],
        });
    }

    if (isEmpty(lastname)) {
        errors.push({
            name: 'lastname',
            errors: [
                'El apellido o los apellidos son requeridos',
            ],
        });
    }

    if (!isEmail(email)) {
        errors.push({
            name: 'email',
            errors: [
                'El email es invalido',
            ],
        });
    }

    if(isEmpty(phone)){
        errors.push({
            name: 'phone',
            errors: [
                'El numero de celular es requerido',
            ],
        });
    }

    if(isEmpty(address)){
        errors.push({
            name: 'address',
            errors: [
                'La direccion es requerida',
            ],
        });
    }

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
        message: 'Se registro correctamente su pedido, nos comunicaremos con usted en breve.',
        errors: [],
    };
}