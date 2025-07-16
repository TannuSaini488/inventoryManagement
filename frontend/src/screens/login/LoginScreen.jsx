import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { SERVER_URL } from "../../router";

function LoginScreen() {
  const [formData, setData] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();

  function handInputChange(e) {
    setData({ ...formData, [e.target.id]: e.target.value });
  }

  async function handleSignIn(e) {
    e.preventDefault();

    try {
      const { data, status } = await axios.post(
        `${SERVER_URL}/api/v1/users/login`,
        formData,
        {
          withCredentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (status === 201) {
        history("/");
      } else {
        alert("Wrong credentials. Check Email and password.");
      }
    } catch (error) {
      console.error("Something went wrong:", error);
      alert("Something went wrong");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center px-4">
      <div className="bg-white rounded-xl overflow-hidden shadow-2xl w-full max-w-md">
        {/* Top Welcome Section */}
        <div className="bg-gradient-to-br from-cyan-500 to-blue-700 p-8 text-white relative">
          <h2 className="text-2xl font-bold">Welcome,</h2>
          <h3 className="text-xl font-semibold mb-2">Inventory Management System</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor
            enim, bibendum sed justo quis.
          </p>
          <Link to={"/auth/signup"} className="mt-6 text-sm underline tracking-wide">
            CREATE ACCOUNT
          </Link>
        </div>

        {/* Login Form Section */}
        <div className="bg-white px-8 py-10">
          <h3 className="text-center text-gray-700 font-semibold text-sm tracking-wide mb-6">
            USER LOGIN
          </h3>

          <form className="space-y-5" onSubmit={handleSignIn}>
            {/* Email Input */}
            <div className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md px-3 py-2 text-white">
              <FaUser className="mr-2" />
              <input
                type="email"
                id="email"
                placeholder="Email address"
                onChange={handInputChange}
                required
                className="bg-transparent focus:outline-none flex-1 placeholder-white text-sm"
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md px-3 py-2 text-white">
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

            {/* Remember + Forgot */}
            <div className="flex justify-between text-sm text-blue-600">
              <label className="flex items-center space-x-1">
                <input type="checkbox" className="accent-blue-600" />
                <span>Remember</span>
              </label>
              <a href="#" className="hover:underline">
                Forgot password ?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-800 hover:bg-indigo-900 text-white py-2 rounded-md mt-2 text-sm tracking-wide"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
