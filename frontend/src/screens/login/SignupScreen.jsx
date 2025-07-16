import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { SERVER_URL } from "../../router";

function SignupScreen() {
  const navigator = useNavigate();

  const [formData, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handInputChange(e) {
    setData({ ...formData, [e.target.id]: e.target.value });
  }

  async function handleSignIN(e) {
    e.preventDefault();
    try {
      const { data, status } = await axios.post(
        `${SERVER_URL}/api/v1/users/new`,
        formData
      );

      if (status === 201) {
        navigator("/auth", { replace: true });
      } else {
        alert("Something went wrong");
      }
    } catch (e) {
      console.log(e);
      alert("User already exists with same email");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center px-4">
      <div className="bg-white rounded-xl overflow-hidden shadow-2xl w-full max-w-md">
        {/* Top Welcome Section */}
        <div className="bg-gradient-to-br bg-blue-500 p-8 text-white relative">
          <h2 className="text-2xl font-bold">Inventory Management System</h2>
          <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            eveniet repellat pariatur cumque.
          </p>
          <Link to={"/auth"} className="mt-6 text-sm underline tracking-wide">
            ALREADY HAVE AN ACCOUNT?
          </Link>
        </div>

        {/* Signup Form Section */}
        <div className="bg-white px-8 py-10">
          <h3 className="text-center text-gray-700 font-semibold text-sm tracking-wide mb-6">
            SIGNUP FORM
          </h3>

          <form className="space-y-5" onSubmit={handleSignIN}>
            {/* Name Input */}
            <div className="flex items-center bg-gradient-to-r bg-blue-400 rounded-md px-3 py-2 text-white">
              <FaUser className="mr-2" />
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                onChange={handInputChange}
                required
                className="bg-transparent focus:outline-none flex-1 placeholder-white text-sm"
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center bg-gradient-to-r bg-blue-400 rounded-md px-3 py-2 text-white">
              <FaEnvelope className="mr-2" />
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                onChange={handInputChange}
                required
                className="bg-transparent focus:outline-none flex-1 placeholder-white text-sm"
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center bg-gradient-to-r bg-blue-400 rounded-md px-3 py-2 text-white">
              <FaLock className="mr-2" />
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={handInputChange}
                required
                className="bg-transparent focus:outline-none flex-1 placeholder-white text-sm"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2 text-sm text-blue-600">
              <input
                type="checkbox"
                id="remember"
                className="accent-blue-600"
              />
              <label htmlFor="remember" className="font-medium">
                Remember me
              </label>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-900 text-white py-2 rounded-md mt-2 text-sm tracking-wide"
            >
              SIGNUP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupScreen;
