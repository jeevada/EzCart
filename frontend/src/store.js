import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import productsReducer from "./slices/productsSlice";
import ProductReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";

const reducer = combineReducers({
    productsState :  productsReducer,
    productState: ProductReducer,
    authState: authReducer,
    cartState: cartReducer,
    orderState: orderReducer
})


const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),  
})

export default store;