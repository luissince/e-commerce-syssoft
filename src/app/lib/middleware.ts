import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "./store";

const localStorageMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
    const result = next(action);

    try {
        // Recupera el estado actualizado del carrito
        const state = store.getState();
        localStorage.setItem('cart', JSON.stringify(state.cart));
    } catch (error) {
        console.error('Error guardando en localStorage', error);
    }

    return result;
};


export {
    localStorageMiddleware
}