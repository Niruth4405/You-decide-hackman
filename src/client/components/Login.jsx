import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/loginImg.jpg";

const Login = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-0">
      <div className="w-full h-screen max-w-none mx-0 bg-white rounded-none shadow-none flex flex-col md:flex-row overflow-hidden">
        {/* Left: Login Area */}
        <div className="md:w-1/2 w-full mx-auto flex flex-col justify-center items-center p-8">
          {/* LOGO REMOVED */}
          <div className="flex flex-col items-start justify-start text-start">
            <h2 className="text-2xl font-bold mb-2">Login</h2>
          </div>
          {/* Google/Apple sign in REMOVED */}
          <form className="w-full flex flex-col justify-center mt-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter Password"
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer mt-2 bg-black text-white font-semibold py-2 rounded-md shadow-md hover:bg-slate-700 transition-all"
            >
              Login
            </button>
            <p className="text-sm mt-1 text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="hover:underline">
                Signup Now!
              </Link>
            </p>
          </form>
        </div>

        {/* Right: Dashboard Preview */}
        <div className="hidden md:flex flex-col w-1/2 bg-gradient-to-br from-indigo-50 via-purple-50 to-purple-100 p-8 relative h-screen">
          <img src={img} alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
