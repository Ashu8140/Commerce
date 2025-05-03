import React from "react";

function FancyInput({ id, type, name, label,value,onBlur,onChange, touched,error}){
 

  return (
    <div>
      <label htmlFor={id} className="block text-gray-700">{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        onBlur={onBlur}
        className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-8 focus:ring-blue-400"
      />
     {touched && error && (<div className='text-red-500'>{error}</div>)}
    </div>
  ); 
}

export default FancyInput;
