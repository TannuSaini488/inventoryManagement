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
    <>
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Management System
        </Link>
        <div className="space-x-4">
          <Link to="/auth" className="hover:underline">
            Login
          </Link>
          <Link to="/auth/signup" className="hover:underline">
            Signup
          </Link>
        </div>
      </nav>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form
          className="bg-white shadow-md p-8 rounded-xl w-96"
          onSubmit={handleSignIN}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

          <input
            type="text"
            id="name"
            placeholder="Name"
            onChange={handInputChange}
            required
            className="w-full mb-3 p-2 border rounded"
          />

          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={handInputChange}
            required
            className="w-full mb-3 p-2 border rounded"
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handInputChange}
            required
            className="w-full mb-3 p-2 border rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 w-full py-2 rounded text-white hover:bg-blue-700"
          >
            Signup
          </button>
          <p className="text-sm text-center mt-4">
            Already registered?{" "}
            <Link to={"/auth"} className="text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignupScreen;
