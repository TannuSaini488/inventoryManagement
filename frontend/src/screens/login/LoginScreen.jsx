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
        onSubmit={handleSignIn}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
          className="w-full mb-4 p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 w-full py-2 rounded text-white hover:bg-blue-700"
        >
          Login
        </button>
        <p className="text-sm text-center mt-4">
          New here?{" "}
          <Link to={"/auth/signup"} className="text-blue-600">
            Register
          </Link>
        </p>
      </form>
    </div>
    </>
  );
}

export default LoginScreen;
