import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { CartItemModel, CartModel } from '../definitions'

const initialState: CartModel = {
  items: [],
  totalItems: 0,
  totalPrecio: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addToCart: (state, action: PayloadAction<{ cartItem: CartItemModel }>) => {
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
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.producto.idProducto !== action.payload);
      state.totalItems = state.items.reduce((total, item) => total + item.cantidad, 0);
      state.totalPrecio = state.items.reduce((total, item) => total + item.subTotal, 0);
    },

    updateQuantity: (state, action: PayloadAction<{ idProducto: string; cantidad: number }>) => {
      const item = state.items.find(item => item.producto.idProducto === action.payload.idProducto);
      if (item) {
        item.cantidad = action.payload.cantidad;
        item.subTotal = item.cantidad * item.producto.precio;
      }

      state.totalItems = state.items.reduce((total, item) => total + item.cantidad, 0);
      state.totalPrecio = state.items.reduce((total, item) => total + item.subTotal, 0);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrecio = 0;
    }
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: RootState) => state.counter.value
export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer
