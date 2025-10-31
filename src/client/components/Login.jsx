import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import img from "../../assets/loginImg.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful!");
        
        // Store token if provided
        if (data.token) {
          localStorage.setItem("authToken", data.token);
        }
        
        // Store user data if provided
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }

        // Redirect after short delay
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        toast.error(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Unable to connect to server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-0">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <div className="w-full h-screen max-w-none mx-0 bg-white rounded-none shadow-none flex flex-col md:flex-row overflow-hidden">
        {/* Left: Login Area */}
        <div className="md:w-1/2 w-full mx-auto flex flex-col justify-center items-center p-8">
          <div className="flex flex-col items-start justify-start text-start">
            <h2 className="text-2xl font-bold mb-2">Login</h2>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center mt-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter email address"
                disabled={isLoading}
              />
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter Password"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="cursor-pointer mt-6 bg-black text-white font-semibold py-2 rounded-md shadow-md hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
            
            <p className="text-sm mt-4 text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="hover:underline text-black font-medium">
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