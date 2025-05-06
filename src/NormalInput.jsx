import { useField } from "formik";
import React from "react";

function NormalInput({ id, type, name, label, value, onBlur, onChange, touched, error}) {
 
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
      {error && touched && (
        <div className="text-red-500 text-sm mt-1">{error}</div>
      )}
    </div>
  ); 
}

export default NormalInput;
