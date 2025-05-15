import React, { use, useEffect, useReducer, useState } from "react";
import Navbar from "./Nevbar";
import ProductListPage from "./ProductsList";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./productDetail";
import EasyLogin, { LoginPage } from "./LoginPage";
import CartList from "./CartList";
import axios from "axios";
import EasySignup from "./SignupPage";
import UserRoute from "./UserRoute";
import AuthRoute from "./AuthRoute";

export default function App() {
const parsedData = JSON.parse(localStorage.getItem("cart") || []);
  const [query,setQuery]=useState("");
  const [cart,setCart]=useState(parsedData);
  const [user,setUser]=useState();
  const [Loading,setLoading]=useState(true);
  localStorage.setItem("cart",JSON.stringify(cart) || {});

  
 
  const token =localStorage.getItem("token");
  useEffect(()=>{
      if(token){
        axios.get("https://myeasykart.codeyogi.io/me",{
          headers:{
            Authorization:token,
          },
        }).then((response)=>{
          setUser(response.data);
       setLoading(false);
        })
      }else{
       setLoading(false);
      }
    },[]);
  

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
  
 if(Loading){
  return  <div>Loading... </div>
 }


    return (
      <div>
        
       
      { user && <Navbar query={query} setQuery={setQuery} TotalCount={Totalcount}  cart={cart} setUser={setUser} />}
      <Routes>
        <Route path="/signup" element={<UserRoute user={user}><EasySignup setUser={setUser} user={user}/></UserRoute>}></Route>   
        <Route path="/login" element={<UserRoute user={user}><EasyLogin user={user} setUser={setUser} /></UserRoute>} ></Route>
        <Route path="/cart" element={ <AuthRoute user={user}><CartList setCart={setCart} updateCart={updateCart} cart={cart} /> </AuthRoute>}></Route>
        <Route path="/" element={<AuthRoute user={user}> <ProductListPage  query={query} user={user}/></AuthRoute>} ></Route>
        <Route path="/product/:id" element={ <AuthRoute user={user}><ProductDetail AddToCart={AddToCart} /></AuthRoute>}></Route>
      </Routes>
      </div>
    )
  }
