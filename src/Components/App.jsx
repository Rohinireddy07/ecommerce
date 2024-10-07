import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Final from "./Final";
import Login from "../Pages/Login";
import Products from "./Products";
import '../index.css'
export default function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Final/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}