import {  withFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import NormalInput from './NormalInput';
import axios from 'axios';
import { Form, Link, Navigate } from 'react-router-dom';
import { withUser } from './withProvider';

const CallApi = (values,bag) => {
  console.log(values.name, values.email, values.password);
  axios.post("https://myeasykart.codeyogi.io/signup",{
 fullName:values.name, email:values.email, password:values.password

  }).then((response)=>{
   const {user,token}=response.data;
   console.log();
  localStorage.setItem("token",token);
  bag.props.setUser(user);
  }).catch(()=>{
    console.log("invalid creantial");
  })
};


const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required(),
});


const  initialValues={
      name: '',
      email: '',
      password: '',
    }

 export const SignupPage = (props) => {
const { values, touched, errors,handleChange,handleBlur,handleSubmit}=props;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
       
        <form onSubmit={handleSubmit} className="space-y-4">
          <NormalInput
            label="Name"
            id="name"
            type="text" 
            name="name"
            value={values.name} 
            onBlur={handleBlur}  
            onChange={handleChange}
            error={errors.name }
            touched={touched.name}
          />
         
          <NormalInput
            label="Email"
            id="email"
            type="email"
            name="email"
            value={values.email || ""} 
            onBlur={handleBlur}  
            onChange={handleChange}
            error={errors.email}
            touched={touched.email}
            />
          
          <NormalInput
            label="Password"
            id="password"
            type="password"
            name="password"
            value={values.password} 
            onBlur={handleBlur}  
            onChange={handleChange}
            error={errors.password}
            touched={touched.password}
          
          />


          <button
            type="submit"
             className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition "  
              >
            Sign Up
          </button>
        </form>
      <div className='mt-4 flex justify-center'>
        <Link to="/login">Already have an Account? <span className='text-blue-500'>login</span> </Link>
 </div> 
      </div>
    </div>
  );
};


const EasySignup = withFormik({
  validationSchema:schema,
  initialValues:initialValues,
  handleSubmit:CallApi,

})(SignupPage);


export default withUser(EasySignup);

