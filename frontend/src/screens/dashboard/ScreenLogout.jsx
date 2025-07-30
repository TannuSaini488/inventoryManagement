import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Management System</Link>
      <div className="space-x-4">
        <Link to="auth" className="hover:underline">Login</Link>
        <Link to="/auth/signup" className="hover:underline">Signup</Link>
      </div>
    </nav>
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-blue-300 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Inventory Management System
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-xl">
       Manage your inventory, monitor stock, and streamline operations effortlessly — whether you're on-site or managing remotely.
      </p>
      <Link
        to="auth"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
      >
        Get Started
      </Link>
    </div>
    </>
  );
}
