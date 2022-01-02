import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} exact />
        <Route path="/cart" element={<Cart />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/productList" element={<ProductList />} exact />
        <Route path="/product" element={<Product />} exact />
      </Routes>
    </Router>
  );
};

export default App;
