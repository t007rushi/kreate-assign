import React from "react";
import { Routes, Route } from "react-router-dom";
import { Cart, Home, Products, SingleProduct } from "../pages";

export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/:id" element={<SingleProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
};
