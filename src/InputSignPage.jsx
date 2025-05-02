import { useField } from "formik";
import React from "react";

function InputSignPage({ id, type, name, label}) {
  const field=useField(name);
  const [data,meta]=field;
 const {onBlur,onChange,value,}=data;
 const {touched,error}=meta;

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
        className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
     {touched && error && (<div className='text-red-500'>{error}</div>)}
    </div>
  ); 
}

export default InputSignPage;
