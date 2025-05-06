import {  withFormik } from 'formik';
import * as Yup from 'yup';
import NormalInput from './NormalInput';

const CallApi = (values) => {
  console.log( values.email, values.password);
};

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required(),
});


const  initialValues={
      email: '',
      password: '',
    }

 export const LoginPage = (props) => {
const { values, touched, errors,handleChange,handleBlur,handleSubmit}=props;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
       
        <form onSubmit={handleSubmit} className="space-y-4">
          
         
          <NormalInput
            label="Email"
            id="email"
            type="email"
            name="email"
            value={values.email} 
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
           Login
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
const EasyLogin= MyHOC(LoginPage);

export default EasyLogin;

