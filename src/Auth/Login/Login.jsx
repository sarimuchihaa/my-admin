// Imports.
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Frontend.
const Login = () => {
  const navigate = useNavigate();

  // Validation.
  const loginSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Submit.
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/admin/login", values, { withCredentials: true });
  
      if (response.status === 200) {
        localStorage.setItem("jwt", response.data.token); // Store JWT token
        alert("Login Successful!");
        navigate("/dashboard");
      }
    } catch (error) {
      setErrors({ server: error.response?.data?.error || "Something went wrong" });
    }
    setSubmitting(false);
  };
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-rose-400 mb-6">Login</h2>
        
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form className="flex flex-col gap-4">
              {errors.server && <p className="text-red-500 text-sm">{errors.server}</p>}

              {/* Name Field */}
              <div>
                <label className="text-gray-300">Email</label>
                <Field type="email" name="email" className="w-full p-2 mt-1 rounded bg-gray-700 text-white" />
                <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
              </div>

              {/* Password Field */}
              <div>
                <label className="text-gray-300">Password</label>
                <Field type="password" name="password" className="w-full p-2 mt-1 rounded bg-gray-700 text-white" />
                <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
