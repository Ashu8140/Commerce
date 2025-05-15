import React, { useEffect, useState } from "react";
import { getProductList } from "./Api";
import Product from "./Products";
import { Navigate } from "react-router-dom";

function ProductListPage({query}){
 const[products, setProducts]=useState([]);
  const [sort,setSort]=useState("default");
 
  useEffect(()=>{
    getProductList().then((rsponse)=>{
         setProducts(rsponse.data.products);
    });
  },[]);

  
  const data=products.filter(function(item){
    return item.title.toLowerCase().includes(query.toLowerCase())})
    .sort((a, b) => {
      if (sort === "low-to-high") return a.price - b.price;
      if (sort === "high-to-low") return b.price - a.price;
      if (sort === "a-z") return a.title.localeCompare(b.title);
      if (sort === "z-a") return b.title.localeCompare(a.title);
      
      return 0; // Default (no sorting)
    });
    
    
      
  
    return(
        <div>
        <Product setSort={setSort} data={data} sort={sort}/>
        </div>
    );
}
export default ProductListPage;


