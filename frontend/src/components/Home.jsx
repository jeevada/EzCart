import { Fragment, useEffect } from "react";
import MetaData from "./layouts/MetaData";
import { getProducts } from "../actions/productsActions";
import { useDispatch, useSelector } from 'react-redux'
import Loader from "./layouts/loader";
import Product from "./product/Product";
import { toast } from "react-toastify";


export  default function Home(){
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.productsState)

    // The loop happens if you ever clear the error
    // useEffect(() => {
    //     if(error){
    //         toast.error(error,{
    //             position:"bottom-center"
    //         })
    //     }
    //     dispatch(getProducts());
    // }, [error])
    // Effect 1: Fetch data ONCE when the component mounts.
    // The empty dependency array `[]` ensures this only runs one time.
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]); // Add dispatch to satisfy the linter, it's stable and won't cause re-runs.

    // Effect 2: Watch for errors and show a toast.
    // This effect runs ONLY when the 'error' value changes.
    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: "bottom-center"
            });
            // Optional: You could dispatch a "clearError" action here too.
        }
    }, [error]);


    return (
        <Fragment>
            {loading? <Loader />:
                <Fragment>
                    <MetaData title={'Buy  Best Products'} />
                    <h1 id="products_heading">Latest Products</h1>
                    <section id="products" className="container mt-5">
                        <div className="row">
                            { products && products.map(product => (
                                <Product product={product}/>
                            ))}    
                        </div>
                    </section>
                </Fragment>
            }
        </Fragment>
    )
}