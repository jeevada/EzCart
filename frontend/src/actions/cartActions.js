import { addCartItemRequest, addCartItemSuccess } from "../slices/cartSlice";
import axios from 'axios';

export const addCartItem = (id, quantity) => async(dispatch) => {
    try {
        dispatch(addCartItemRequest())
        const { data } = await axios.get(`/api/v1/product/${id}`)
        console.log("data fetched successfully");
        dispatch(addCartItemSuccess({
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            image: data.product.images[0].image,
            stock: data.product.stock,
            quantity
        }))
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}