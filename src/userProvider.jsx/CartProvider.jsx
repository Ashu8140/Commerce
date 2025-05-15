// import { CartContext } from "../Context";

// function CartProvider({children}){
//     const [cart,setCart]=useState(parsedData);
     
//      localStorage.setItem("cart",JSON.stringify(cart));
    

// //  function AddToCart(productId,count){
//    const oldCount= cart[productId] || 0;
//    const newCount= {...cart , [productId]:oldCount+count}
//    updateCart(newCount)
   
   
//   }
   
//   function updateCart(UpdatedData){
//     setCart(UpdatedData);
//     localStorage.setItem("cart",JSON.stringify(UpdatedData));
//    }

//   const Totalcount = Object.keys(cart).reduce((prev,cur)=>{ return prev + cart[cur]},0);
  
//     return <CartContext.Provider value={{cart,Totalcount,updateCart,AddToCart,setCart,}} />
// }
// export default CartProvider;