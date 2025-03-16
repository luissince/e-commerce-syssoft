import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartSlice from './slices/shoppingCardSlice'
import wishSlide from './slices/wishlistCardSlice'

// Combina tus reducers
const reducer = combineReducers({
    cart: cartSlice,
    wish: wishSlide
})

// Crea y exporta una única instancia de la store
export const makeStore = () => {
    return configureStore({
        reducer: reducer,
    })
}

// Tipos inferidos
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']