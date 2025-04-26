import { useState } from "react";
import Navbar from "./Nevbar";
import ProductListPage from "./ProductsList";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./productDetail";
import SignupPage from "./signupPage";

export default function App() {

  const [query,setQuery]=useState("");
    return (
      <div>
        <SignupPage />
        {/* <Navbar query={query} setQuery={setQuery} />
      <Routes>
        <Route path="/" element={ <ProductListPage  query={query}/>} ></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes> */}
      </div>
    )
  }