import React, { useState } from "react";
import EasySignup from "./signupPage";
// import Navbar from "./Nevbar";
// import ProductListPage from "./ProductsList";
// import { Route, Routes } from "react-router-dom";
// import ProductDetail from "./productDetail";

export default function App() {

  const [query,setQuery]=useState("");
    return (
      <div>
        <EasySignup />
        {/* <SignupPage/> */}
        {/* <Navbar query={query} setQuery={setQuery} />
      <Routes>
        <Route path="/" element={ <ProductListPage  query={query}/>} ></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes> */}
      </div>
    )
  }