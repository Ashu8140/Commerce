import { Form, Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import FancyInput from './fancyInput';
import NormalInput from './NormalInput';

const SignupPage = () => {

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <Formik 
        initialValues={initialValues}
        onSubmit={CallApi}
        validationSchema={schema}
        >
        <Form  className="space-y-4">
          <NormalInput
            label="Name"
            id="name"
            type="text" 
            name="name"   
          />
         
          <FancyInput
            label="Email"
            id="email"
            type="email"
            name="email"
            />
          
          <NormalInput
            label="Password"
            id="password"
            type="password"
            name="password"
          
          />
       

          <button
            type="submit"
             className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition "  
              >
            Sign Up
          </button>
        </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignupPage;
