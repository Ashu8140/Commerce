import React, { useReducer, useState } from "react";
import Navbar from "./Nevbar";
import ProductListPage from "./ProductsList";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./productDetail";
import EasyLogin from "./LoginPage";

export default function App() {

  const [query,setQuery]=useState("");
  // const [cart,setCart]=useState([]v
  // vv);

//   function AddToCart(productId,count){
//     let oldCount=cart[productId] || 0;
//     const newCart={...cart,[productId]:oldCount+count}
  
// setCart(newCart);
//   }
  

//   const TotalCount=Object.keys(cart).reduce(function(output,current){
//     return output+cart[current];
//   },0)
//   console.log(TotalCount);

    return (
      <div>
        <EasyLogin />
        <Navbar query={query} setQuery={setQuery}/>
      <Routes>
        <Route path="/" element={ <ProductListPage  query={query}/>} ></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
      </div>
    )
  }