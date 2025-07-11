import { createSlice } from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name: 'products',
    initialState: { 
        loading: false,
        products: [],
        error: null
    },
    reducers: {
        productsRequest(state, action){
            state.loading = true;
        },
        productsSuccess(state, action){
            state.loading = false;
            state.products = action.payload.products;
            state.error = null;
        },
        productsFail(state, action){
                state.loading = false,
                state.error = action.payload
        }
    }
})

const { actions, reducer } = productsSlice;

export const { productsRequest, productsFail, productsSuccess } = actions;

export default reducer;  