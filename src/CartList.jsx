import { number } from "yup";
import CartRow from "./CartRow";
import { use, useEffect, useState } from "react";
import { getProductRow } from "../../Desktop/TodoApp/Todo/src/Api";
import { getProductList } from "./Api";
import { LuVariable } from "react-icons/lu";
import { withCart } from "./withProvider";

const CartList=({cart ,updateCart})=>{
    const [product,setProduct]=useState([]);
    const [localCart,setLocalCart]=useState(cart);
    const [loading,setLoading]=useState(false);
    const key=Object.keys(cart || {});
    const cartIdArray= key.map(Number);

useEffect(()=>{
    const responses=Promise.all(cartIdArray.map((id)=>getProductRow(id)))
    responses.then((response)=>setProduct(response));
    },[cart])
 
    
//    
function onQuantityChange(id, newValue) {
    setLocalCart({...localCart,[id]:newValue})
  }

function handleUpdateCart(){
  updateCart(localCart);
   }
   
   function handleClickDelete(id){
   const  newCart={...cart};
    delete newCart[id];
    updateCart(newCart);
     localStorage.setItem('cart', JSON.stringify(newCart));
    setLoading(true)
  setTimeout(() => setLoading(false), 500); 

   }
   if(loading){
    return <div>...Loading</div>
   }


 return (
    <div className="w-auto p-4 shadow-lg rounded-xl  ">
     <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      {product.length ? ( product.map((item)=>(
            <CartRow
            key={item.id}
            id={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            onQuantityChange={onQuantityChange}
            localCart={localCart}
            handleClickDelete={handleClickDelete}
          />
        ))): <div>Loading</div>}
        
        <div className="flex justify-end mr-4">
          <button className="border border-black p-2 text-xl bg-red-500 " onClick={handleUpdateCart}  >Update Cart</button>
          </div>
    
          
        </div>
    );

}
export default withCart( CartList);