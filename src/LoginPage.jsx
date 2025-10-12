import { withFormik } from "formik";
import * as Yup from "yup";
import NormalInput from "./NormalInput";
import axios from "axios";
import { Link } from "react-router-dom";
import { withUser } from "./withProvider";

const CallApi = (values, bag) => {
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
    })
    .catch(() => {
      console.log("invalid creantial");
    });
};

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required(),
});

const initialValues = {
  email: "",
  password: "",
};

export const LoginPage = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

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
        <div className="mt-4 flex justify-center">
          <Link to="/signup">
            Don't have an Account? <span className="text-blue-500">Signup</span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

const EasyLogin = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: CallApi,
})(LoginPage);

export default withUser(EasyLogin);
