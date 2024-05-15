import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        product: [],
        wishlist : [],
        cart : []
}

const productSlice = createSlice({
        name: "ecommerce",
        initialState : initialState,
        reducers : {
                addToProduct(state, action){
                        state.product = action.payload;
                },
                addToWishlist(state, action){
                        state.wishlist.push(action.payload);
                },
                removeFromWishlist(state, action){
                        state.wishlist = state.wishlist.filter((item)=>item.id!==action.payload);
                },
                addToCart(state, action){
                        state.cart.push(action.payload);
                },
                removeFromCart(state, action){
                        state.cart = state.cart.filter((item)=>item.id!==action.payload);
                }
        }
})

export const {addToProduct, addToWishlist, removeFromWishlist, addToCart, removeFromCart} = productSlice.actions;

export default productSlice.reducer;