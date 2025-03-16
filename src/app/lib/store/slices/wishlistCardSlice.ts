import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { CartItemModel, CartModel } from '../../definitions'

// Function to get initial state from localStorage
const getInitialState = (): CartModel => {
  // Check if we're in the browser to avoid SSR issues
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('wishlist')
    if (savedCart) {
      try {
        return JSON.parse(savedCart)
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error)
      }
    }
  }

  // Return default initial state if no saved cart
  return {
    items: [],
    totalItems: 0,
    totalPrecio: 0
  }
}

const initialState: CartModel = getInitialState()

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addToWishlist: (state, action: PayloadAction<{ cartItem: CartItemModel }>) => {
      const cartItem = action.payload.cartItem;
      const itemExistente = state.items.find((item) => item.producto.idProducto === cartItem.producto.idProducto);

      if (itemExistente) {
        // itemExistente.cantidad += cartItem.cantidad;
        itemExistente.cantidad += cartItem.cantidad;
        itemExistente.subTotal = itemExistente.cantidad * itemExistente.producto.precio;
      } else {
        const nuevoItem: CartItemModel = {
          ...cartItem,
          subTotal: cartItem.cantidad * cartItem.producto.precio,
        };
        state.items.push(nuevoItem);
      }

      state.totalItems = state.items.reduce((total, item) => total + item.cantidad, 0);
      state.totalPrecio = state.items.reduce((total, item) => total + item.subTotal, 0);

      // Update localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('wishlist', JSON.stringify(state))
      }
    },

    removeFromWishlist: (state, action: PayloadAction<{idProducto: string}>) => {
      state.items = state.items.filter(item => item.producto.idProducto !== action.payload.idProducto);
      state.totalItems = state.items.reduce((total, item) => total + item.cantidad, 0);
      state.totalPrecio = state.items.reduce((total, item) => total + item.subTotal, 0);

      // Update localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('wishlist', JSON.stringify(state))
      }
    },

    updateQuantity: (state, action: PayloadAction<{ idProducto: string; cantidad: number }>) => {
      const item = state.items.find(item => item.producto.idProducto === action.payload.idProducto);
      if(action.payload.cantidad < 1){
        return;
      }
      if (item) {
        item.cantidad = action.payload.cantidad;
        item.subTotal = item.cantidad * item.producto.precio;
      }

      state.totalItems = state.items.reduce((total, item) => total + item.cantidad, 0);
      state.totalPrecio = state.items.reduce((total, item) => total + item.subTotal, 0);

      // Update localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('wishlist', JSON.stringify(state))
      }
    },

    clearWishlist: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrecio = 0;

      // Clear localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('wishlist')
      }
    }
  },
})

export const { addToWishlist, removeFromWishlist, updateQuantity, clearWishlist } = wishlistSlice.actions

export const selectWish = (state: RootState) => state.wish

export default wishlistSlice.reducer
