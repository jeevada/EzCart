import { createSlice } from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name: 'products',
    initialState: { 
        loading: false,
        products: [],
        error: null,
        productsCount: 0,
        resPerPage: 0
    },
    reducers: {
        productsRequest(state, action){
            state.loading = true;
        },
        productsSuccess(state, action){
            state.loading = false;
            state.products = action.payload.products;
            state.error = null;
            state.productsCount = action.payload.count;
            state.resPerPage = action.payload.resPerPage;
        },
        productsFail(state, action){
                state.loading = false;
                state.error = action.payload;
        },
        adminProductsRequest(state, action){
            state.loading = true;
        },
        adminProductsSuccess(state, action){
            state.loading = false;
            state.products = action.payload.products; 
        },
        clearError(state, action){
                return {
                    ...state,
                    error: null,
                }
        },
         
    }
})

const { actions, reducer } = productsSlice;

export const { 
    productsRequest, 
    productsFail, 
    productsSuccess,
    adminProductsFail,
    adminProductsRequest,
    adminProductsSuccess,
    clearError
} = actions;

export default reducer;  