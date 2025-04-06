import React, {  useState } from "react";
// import { Link } from "react-router"
import { Loading } from "./Loading";
import { Link } from "react-router-dom";

const Product = ({data,setSort,sort}) => {
  

  return (
    <>
    <div className="flex justify-end mr-4 mt-4">
<select
          className="p-2 border rounded-lg just bg-white shadow-md focus:ring-2 focus:ring-blue-400"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">default</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="a-z">Alphabetical (A-Z)</option>
          <option value="z-a">Alphabetical (Z-A)</option>
        </select>
        </div>

     {data.length>0 ? (
    <div className="container mx-auto p-4">
    
      <h1 className="text-3xl font-bold text-center  mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div key={item.sku} className="bg-white shadow-md rounded-lg overflow-hidden p-4">
            <img src={item.thumbnail} alt={item.name} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
            <p className="text-gray-500">{`Rating+ ${item.rating}`}</p>
            <p className="text-lg font-bold text-blue-600 mt-1">${item.price}</p>
          
        <Link to={`/product/${item.id}`} > <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
              View Detail
            </button></Link> 
          </div>
        ))}
      </div>
    </div>): <Loading/>
}
    </>
    
  );
};

export default Product;
