import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { AxiosError } from "axios";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
const Login = () => {
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const signIn = useSignIn();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setError("");
      try {
        const response = await axios.post(
          "http://localhost:4000/login",
          values
        );
        signIn({
          token: response.data.accessToken,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { email: values.email },
        });
        navigate("/profile");
      } catch (err) {
        if (err.response.status == 404) {
          setError("Email does not exist!");
        } else {
          setError("Wrong password check again...");
        }
      }
    },
  });
  return (
    <div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <div className="text-white bg-red-500">{error}</div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
