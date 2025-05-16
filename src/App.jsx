import React, { use, useEffect, useReducer, useState } from "react";
import Navbar from "./Nevbar";
import ProductListPage from "./ProductsList";
import { Route, Routes, useLocation } from "react-router-dom";
import ProductDetail from "./productDetail";
import CartList from "./CartList";
import UserRoute from "./UserRoute";
import AuthRoute from "./AuthRoute";
import EasySignup  from "./SignupPage";
import EasyLogin from "./LoginPage";
import UserProvider from "./userProvider.jsx/UserProvider";
import CartProvider from "./userProvider.jsx/CartProvider";
 function App() {
  
  const location = useLocation();
   const noNavbarPaths = ["/login", "/signup"];
    const path = location.pathname.replace(/\/+$/, "");
     const hideNavbar = noNavbarPaths.includes(path);

    return (
      <div className="p-6">
      <UserProvider>
      <CartProvider>
       { !hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<AuthRoute > <ProductListPage  /></AuthRoute>} ></Route>
        <Route path="/signup" element={<UserRoute><EasySignup /></UserRoute>}></Route>   
        <Route path="/login" element={<UserRoute ><EasyLogin /></UserRoute>} ></Route>
        <Route path="/cart" element={ <AuthRoute ><CartList /> </AuthRoute>}></Route>
        <Route path="/product/:id" element={ <AuthRoute><ProductDetail /></AuthRoute>}></Route>
      </Routes>
      </CartProvider>
      </UserProvider>
      </div>
    )
  }

  export default App;