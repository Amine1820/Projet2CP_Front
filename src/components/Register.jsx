import axios from "axios";
import { useFormik } from "formik";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [confirm, setConfirm] = useState("");
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      gender: "",
      phone: "",
      role:"BASIC",
      address:"",
      wilaya:"",
      motivation:""
    },
    onSubmit: async (values) => {
      if (confirm !== values.password) {
        alert("Please check password");
        return;
      }
      try {
        values.role="BASIC";
         await axios.post(
          "http://localhost:3030/createUser",
          values
        );
        navigate("/welcome");
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <div class="">
      <section class="bg-gray-300 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[35rem] lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="space-y-5 md:space-y-6 sm:p-6">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form
                onSubmit={formik.handleSubmit}
                class="space-y-4 md:space-y-3"
                action="/login"
              >
                <div class="flex justify-between">
                  <div class="flex-col">
                    <label
                      for="firstname"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First name
                    </label>
                    <input
                      value={formik.values.firstname}
                      onChange={formik.handleChange}
                      type="text"
                      name="firstname"
                      id="firstname"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div class="flex-col">
                    <label
                      for="lastname"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last name
                    </label>
                    <input
                      value={formik.values.lastname}
                      onChange={formik.handleChange}
                      type="text"
                      name="lastname"
                      id="lastname"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="flex-col">
                    <label
                      for="phone"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone
                    </label>
                    <input
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      type="number"
                      name="phone"
                      id="phone"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div class="flex-col">
                    <label
                      for="lastname"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Gender
                    </label>
                    <input
                      value={formik.values.gender}
                      onChange={formik.handleChange}
                      type="text"
                      name="gender"
                      id="gender"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div class="flex justify-between">
                  <div class="flex-col">
                    <label
                      for="firstname"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Address
                    </label>
                    <input
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      type="text"
                      name="address"
                      id="address"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div class="flex-col">
                    <label
                      for="wilaya"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Wilaya
                    </label>
                    <input
                      value={formik.values.wilaya}
                      onChange={formik.handleChange}
                      type="text"
                      name="wilaya"
                      id="wilaya"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    type="password"
                    name="password"
                    id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    for="confirm-password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    onChange={(e) => setConfirm(e.target.value)}
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    for="motivation"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Motivation
                  </label>
                  <input
                    value={formik.values.motivation}
                    onChange={formik.handleChange}
                    type="text"
                    name="motivation"
                    id="motivation"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
