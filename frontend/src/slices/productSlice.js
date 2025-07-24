import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState: { 
        loading: false,
        product: {
            images: []  // important!
        },
        error: null,
        isReviewSubmitted: false,
        isProductCreated: false
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
        },
        createReviewRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        createReviewSuccess(state, action){
            return {
                ...state,
                loading: false,
                isReviewSubmitted: true
            }
        },
        createReviewFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload
            }
        },
        clearReviewSubmitted(state, action) {
            return {
                ...state,
                isReviewSubmitted: false
            }
        },
        clearError(state, action) {
           return{ 
            ...state,
            error: null
           }
        },
        clearProduct(state, action) {
            return{ ...state,
                product : {}
            }
        },
        newProductRequest(state, action){
            return {
                ...state,
                loading: true
            }
        },
        newProductSuccess(state, action){
            return {
                ...state,
                loading: false,
                product: action.payload.product,
                isProductCreated: true
            }
        },
        newProductFail(state, action){
                return {
                    ...state,
                    loading: false,
                    error: action.payload,
                    isProductCreated: false
                }
        },
        clearProductCreated(state, action) {
            return {
                ...state,
                isProductCreated: false
            }
        }
    }
})

const { actions, reducer } = productSlice;

export const { 
    productRequest, 
    productFail, 
    productSuccess,
    createReviewFail,
    createReviewRequest,
    createReviewSuccess,
    clearError,
    clearReviewSubmitted,
    clearProduct,
    newProductFail,
    newProductRequest,
    newProductSuccess,
    clearProductCreated
} = actions;

export default reducer;  