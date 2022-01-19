import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Cart, Navbar, Products} from "./components";
import Footer from "./components/Footer/Footer";

const Routing = () => {
    return (
        <Router>
            <Navbar  />
            <Routes>
                <Route  path="/"  element={ <Products />}/>
                <Route  path="/cart" element={<Cart/>} />
                <Route exact path="/checkout">
                    {/*<Checkout cart={cart} />*/}
                </Route>
            </Routes>
            <Footer/>
        </Router>
    );
};

export default Routing;