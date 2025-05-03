import {  withFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import FancyInput from './fancyInput';
import NormalInput from './NormalInput';

const CallApi = (values) => {
  console.log(values.name, values.email, values.password);
};

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const  initialValues={
      name: '',
      email: '',
      password: '',
    }

 export const SignupPage = (props) => {
const { values, touched, errors,handleChange,handleBlur,handleSubmit}=props;
console.log(props);
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
            handleBlur={handleBlur}  
            handleChange={handleChange}
            errors={errors.name}
            touched={touched.name}
          />
         
          <FancyInput
            label="Email"
            id="email"
            type="email"
            name="email"
            value={values.email} 
            handleBlur={handleBlur}  
            handleChange={handleChange}
            errors={errors.email}
            touched={touched.email}
            />
          
          <NormalInput
            label="Password"
            id="password"
            type="password"
            name="password"
            value={values.password} 
            handleBlur={handleBlur}  
            handleChange={handleChange}
            errors={errors.password}
            touched={touched.password}
          
          />


          <button
            type="submit"
             className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition "  
              >
            Sign Up
          </button>
        </form>
        
      </div>
    </div>
  );
};

const MyHOC = withFormik({
  validationSchema:schema,
  initialValues:initialValues,
  handleSubmit:CallApi,

});
const EasySignup= MyHOC(SignupPage);

export default EasySignup;

