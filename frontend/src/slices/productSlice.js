import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState: { 
        loading: false,
        product: {
            images: []  // important!
        },
        error: null
    },
    reducers: {
        productRequest(state, action){
            state.loading = true;
        },
        productSuccess(state, action){
            state.loading = false;
            state.product = action.payload.product;
            state.error = null;
        },
        productFail(state, action){
                state.loading = false,
                state.error = action.payload
        }
    }
})

const { actions, reducer } = productSlice;

export const { productRequest, productFail, productSuccess } = actions;

export default reducer;  