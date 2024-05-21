import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const Stor = configureStore({
        reducer: {
           cart: cartReducer,
        }
})

export default Stor ;