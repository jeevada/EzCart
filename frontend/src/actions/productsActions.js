import axios from "axios";
import { productsFail, productsRequest, productsSuccess } from "../slices/productsSlice";

export const getProducts = () => async (dispatch) => {
    try {
        dispatch(productsRequest())
        console.log("fetching started")
        const { data } = await axios.get('/api/v1/products');
        console.log(data)
        dispatch(productsSuccess(data))
    }catch (error) {
        // handle error 
        console.log("error happened")
        const message =
            error.response?.data?.message || error.message || "Something went wrong";
        dispatch(productsFail(message));
    }
}