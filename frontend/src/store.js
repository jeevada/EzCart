import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import productsReducer from "./slices/productsSlice";
import ProductReducer from "./slices/productSlice";

const reducer = combineReducers({
    productsState :  productsReducer,
    productState: ProductReducer
})


const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),  
})

export default store;