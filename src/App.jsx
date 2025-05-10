import React, { useReducer, useState } from "react";
import Navbar from "./Nevbar";
import ProductListPage from "./ProductsList";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./productDetail";
import EasyLogin from "./LoginPage";
import Cart from "./CartList";
import CartList from "./CartList";

export default function App() {
const parsedData=JSON.parse(localStorage.getItem("cart"));
  const [query,setQuery]=useState("");
  const [cart,setCart]=useState(parsedData);
 
 localStorage.setItem("cart",JSON.stringify(cart));
 function AddToCart(productId,count){
   const oldCount= cart[productId] || 0;
   const newCount= {...cart , [productId]:oldCount+count}
   updateCart(newCount)
   
   
  }
  
  function updateCart(UpdatedData){
    setCart(UpdatedData);
    localStorage.setItem("cart",JSON.stringify(UpdatedData));
   }
  const Totalcount = Object.keys(cart).reduce((prev,cur)=>{ return prev + cart[cur]},0);
  


    return (
      <div>
        {/* <EasyLogin /> */}
        <Navbar query={query} setQuery={setQuery} TotalCount={Totalcount}/>
      <Routes>
        
        <Route path="/cart" element={ <CartList cart={cart} updateCart={updateCart} setCart={setCart} /> }></Route>
        <Route path="/" element={ <ProductListPage  query={query}/>} ></Route>
        <Route path="/product/:id" element={<ProductDetail AddToCart={AddToCart} />}></Route>
      </Routes>
      </div>
    )
  }