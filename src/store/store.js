import { configureStore } from "@reduxjs/toolkit";
import ecommerceReducer from './productSlice';

const store = configureStore({
        reducer:{
            ecommerce: ecommerceReducer,
        }
})

export default store;