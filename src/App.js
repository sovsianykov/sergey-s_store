import * as React from "react";

import { Products, Navbar, Cart} from "./components";
import { useEffect, useState } from "react";
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "./redux/thunks";

export default function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])
    const { data , isLoading , error, cart } = useSelector(state => state.productsSlice.products)

    if (isLoading) {

        return <h1>Loading ...</h1>
    }
    console.log(data, isLoading)
    return (
        <Router>
            <div>
                <Navbar totalItems={5} />
                <Routes>
                    <Route  path="/"  element={ <Products products={data} onAddToCard={() => null} />}/>
                    <Route  path="/cart" element={<Cart cart={cart}/>} />
                    <Route exact path="/checkout">
                        {/*<Checkout cart={cart} />*/}
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}
