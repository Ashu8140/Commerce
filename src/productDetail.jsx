import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductDetail } from "./Api";

export default function ProductDetail({onAddToCart}) {

  const [data, setData]=useState([]);
  const [count,setCount]=useState(1);
  const id  = +(useParams().id);
 
   useEffect(()=>{
     getProductDetail(id).then((response)=>{
     setData(response.data);
     setCount(1);
      })
    },[id]);

    function handleChange(e){
        setCount(+e.target.value);
    } 
    function handleButtonClick(){
      onAddToCart(id,count)
    }

    
  return (
    <div>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-4">
      <Link to="/">Back</Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">    
    <div>
     <img src={data.thumbnail} className="w-full h-96 object-cover rounded-xl"/>
   </div>
<div>
          <h1 className="text-2xl font-bold text-gray-800">{data.title}</h1>
          <div className="flex items-center space-x-2 my-2">
            <span className="text-yellow-500 flex">
            
            </span>
            <span className="text-gray-600">({data.rating} Reviews)</span>
          </div>
        
          <p className="text-gray-600 my-4">{data.description}</p>

          <div className="flex items-center space-x-3 text-lg font-semibold">
            {/* <span className="text-red-500">${discountedPrice}</span> */}
            <span className="text-gray-400 line-through">${data.price}</span>
            <span className="text-green-500">{data.discount}% Off</span>
          </div>

          <div className="mt-4 flex space-x-4">
          <input onChange={handleChange} value={count} type="number" min="1" max="100"  className="border rounded" 
/>
        <button onClick={handleButtonClick} className="px-5 py-2 bg-blue-600 text-white rounded-xl flex items-center space-x-2 hover:bg-blue-700">
              <span>Add to Cart</span>
            </button>
            {/* <button className="px-5 py-2 bg-green-600 text-white rounded-xl flex items-center space-x-2 hover:bg-green-700">
              <span>Buy Now</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
      <div className="flex flex-row justify-between gap-4 p-4 bg-gray-200">
      {id>1 ? (<Link to={"/product/"+ (id - 1)} className="text-xl">Previous</Link>):""}
      <Link to={"/product/" +( id + 1)} className="text-xl">Next</Link>
      </div>
    </div>
  );
} 
