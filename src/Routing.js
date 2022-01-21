import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart, Navbar, Products } from "./components";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Order from "./components/Order/Order";

const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
