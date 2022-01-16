import { createSlice } from "@reduxjs/toolkit";
import ReduxUtils from "./ReduxUtils";
import {fetchProducts} from "./thunks";


export const initialState = {
    products : ReduxUtils.getAsyncSlice(),
    cart: []
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        resetState: (state) => {
            state.products = initialState.products;
            state.cart = [];
        },
        addToCart : (state, action) =>{
            state.cart.push(action.payload)
        },
        removeFromCart : (state, action) =>{
          state.cart = action.payload
        }
    },
    extraReducers : (builder) => {

        builder.addCase(fetchProducts.pending, (state) => {
            state.products.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            state.products.isLoading = false;
            state.products.error = '';
            state.products.data = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.products.isLoading = false;
            state.products.error = 'something vent wrong';
        });

    },
});

export const { resetState , addToCart, removeFromCart  } = productsSlice.actions

export default productsSlice.reducer;
