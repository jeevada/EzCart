import { Fragment, useEffect, useState } from "react";
import MetaData from "./layouts/MetaData";
import { getProducts } from "../actions/productsActions";
import { useDispatch, useSelector } from 'react-redux'
import Loader from "./layouts/loader";
import Product from "./product/Product";
import { toast } from "react-toastify";
import Pagination from 'react-js-pagination'


export  default function Home(){
    const dispatch = useDispatch();
    const { products, loading, error, productsCount, resPerPage } = useSelector(state => state.productsState)
    const [ currentPage, setCurrentPage ] = useState(1);

    const setCurrentPageNo = (pageNo) => {
        setCurrentPage(pageNo);
    }

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
        dispatch(getProducts(null, null, null, null, currentPage));
    }, [dispatch, currentPage]); // Add dispatch to satisfy the linter, it's stable and won't cause re-runs.

    // Effect 2: Watch for errors and show a toast.
    // This effect runs ONLY when the 'error' value changes.
    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: "bottom-center"
            });
            // Optional: You could dispatch a "clearError" action here too.
        }
    }, [error, currentPage]);


    return (
        <Fragment>
            {loading? <Loader />:
                <Fragment>
                    <MetaData title={'Buy  Best Products'} />
                    <h1 id="products_heading">Latest Products</h1>
                    <section id="products" className="container mt-5">
                        <div className="row">
                            { products && products.map(product => (
                                <Product col={3} key={product._id} product={product}/>
                            ))}    
                        </div>
                    </section>
                    {productsCount > 0 && productsCount > resPerPage ?
                    <div className="d-flex justify-content-center mt-5" >
                        <Pagination 
                            activePage={currentPage}
                            onChange={setCurrentPageNo}
                            totalItemsCount={productsCount}
                            itemsCountPerPage={resPerPage}
                            nextPageText={'Next'}
                            firstPageText={'First'}
                            lastPageText={'Last'}
                            itemClass="page-item"
                            linkClass={"page-link"} 
                        />
                    </div> : null }
                </Fragment>
            }
        </Fragment>
    )
}