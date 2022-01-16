import * as React from "react";
import { Products, Navbar, Cart} from "./components";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCart} from "./redux/selectors";


export default function App() {
    return (
        <Router>
            <div>
                <Navbar  />
                <Routes>
                    <Route  path="/"  element={ <Products />}/>
                    <Route  path="/cart" element={<Cart/>} />
                    <Route exact path="/checkout">
                        {/*<Checkout cart={cart} />*/}
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}
