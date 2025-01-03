import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartSlice from './features/shoppingCardSlice'

// Combina tus reducers
const reducer = combineReducers({
    cart: cartSlice
})

// Crea y exporta una única instancia de la store
export const makeStore = () => {
    return configureStore({
        reducer: reducer,
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']