import { useState } from "react";
import { CartContext } from "../Context";

function CartProvider({children}){
    const parsedData = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart,setCart]=useState(parsedData);
    const [query,setQuery]=useState("");
    
     
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

  const totalcount = Object.keys(cart).reduce((prev,cur)=>{ return prev + cart[cur]},0);
  
    return <CartContext.Provider value={{cart,totalcount,updateCart,AddToCart,setCart,query,setQuery}} >{children}</CartContext.Provider>
}
export default CartProvider;