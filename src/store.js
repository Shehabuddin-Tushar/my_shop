import { configureStore } from '@reduxjs/toolkit'
import productsReducer, { productsFetch } from './features/productsSlice'
import cartReducer from './features/cartSlice'
import authReducer, { loadUser } from './features/authSlice'
export const store = configureStore({
    reducer: {
        products: productsReducer,
        carts: cartReducer,
        auth:authReducer
    
    },
})

store.dispatch(productsFetch())
store.dispatch(loadUser(null))

