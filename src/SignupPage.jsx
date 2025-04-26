import { useFormik } from 'formik';
import React, { use, useEffect, useState } from 'react';
import * as Yup from 'yup';

const SignupPage = () => {


  const CallApi = (values) => {
    console.log(values.name, values.email,values.password)
  };
  const schema= Yup.object().shape({
    name:Yup.string().required(),
    email:Yup.string().email().required(),
    password:Yup.string().min(8).required(),

  });

  const formik=useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: CallApi,
    validationSchema:schema,

  
  }
  );

    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor='name' className="block text-gray-700">Name</label>
            <input
            id='name'
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              required
              onBlur={formik.handleBlur}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
           {formik.touched.name && formik.errors.name && <div className='text-red-500'>{formik.errors.email}</div>}

          <div>
            <label htmlFor='email' className="block text-gray-700">Email</label>
            <input
              id='email'
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              required
              onBlur={formik.handleBlur}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {formik.touched.email && formik.errors.email && <div className='text-red-500'>{formik.errors.email}</div>}

          <div>
            <label htmlFor='password'  className="block text-gray-700"   >Password</label>
            <input
              id='password'
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              required
              onBlur={formik.handleBlur}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {formik.touched.password && formik.errors.password && <div className='text-red-500'>{formik.errors.password}</div>}
   
         

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
