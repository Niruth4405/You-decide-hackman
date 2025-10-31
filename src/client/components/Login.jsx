import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-3">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Left: Login Area */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-8">
          <div className="mb-10 flex items-center space-x-2">
            <img src="https://cdn-icons-png.flaticon.com/512/1160/1160330.png" alt="logo" className="w-10 h-10" />
            <div>
              <div className="font-semibold text-lg text-gray-800">IQMS</div>
              <div className="text-xs text-gray-400">Pressure Sensor</div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Login to Dashboard</h2>
          <p className="mb-6 text-gray-500 text-sm">Fill the below form to login</p>
          <div className="flex space-x-2 mb-4 w-full">
            <button className="w-full flex items-center justify-center border rounded-md py-2 bg-white hover:bg-gray-100 text-sm font-medium gap-2 shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" className="w-4 h-4" />
              Sign in with Google
            </button>
            <button className="w-full flex items-center justify-center border rounded-md py-2 bg-white hover:bg-gray-100 text-sm font-medium gap-2 shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_logo_black.svg" alt="Apple" className="w-4 h-4" />
              Sign in with Apple
            </button>
          </div>
          <div className="w-full text-center text-gray-400 my-2 text-xs flex items-center justify-center">
            <span className="border-t w-1/4" /> <span className="mx-2">OR</span> <span className="border-t w-1/4" />
          </div>
          <form className="w-full flex flex-col space-y-4 mt-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm outline-none focus:ring-2 focus:ring-purple-400" placeholder="Enter email address" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm outline-none focus:ring-2 focus:ring-purple-400" placeholder="Enter Password" />
            </div>
            <div className="flex justify-end text-xs">
              <a href="#" className="text-purple-600 hover:underline">Forgot Password?</a>
            </div>
            <button type="submit" className="mt-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-2 rounded-md shadow-md hover:from-purple-600 hover:to-indigo-600 transition-all">
              Login
            </button>
          </form>
        </div>

        {/* Right: Dashboard Preview */}
        <div className="hidden md:flex flex-col w-1/2 bg-gradient-to-br from-indigo-50 via-purple-50 to-purple-100 p-8 relative">
          <div className="flex flex-col">
            <div className="mb-8">
              <div className="uppercase text-xs text-gray-400">IQM SYSTEMS Pressure Control</div>
              <div className="mt-2 text-xl font-semibold text-gray-700">
                Manage your concreting and construction operations <span className="text-purple-500 font-bold">more professionally</span>
              </div>
            </div>
            {/* Dashboard Preview Card */}
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex items-center space-x-3 mb-4">
                <img src="https://cdn-icons-png.flaticon.com/512/1160/1160330.png" className="w-8 h-8" alt="logo" />
                <span className="font-medium text-base">IQMS</span>
                <span className="text-gray-400 text-xs">Pressure Sensor</span>
              </div>
              <div className="text-gray-500 text-sm mb-2 font-semibold">Welcome to Overview</div>
              <div className="flex items-center space-x-3">
                <div className="flex-1 bg-gray-100 rounded-md px-3 py-2 text-center">
                  <div className="text-xs text-gray-400">Structures</div>
                  <div className="font-bold text-lg">29</div>
                </div>
                <div className="flex-1 bg-gray-100 rounded-md px-3 py-2 text-center">
                  <div className="text-xs text-gray-400">Pour Sessions</div>
                  <div className="font-bold text-lg">12</div>
                </div>
              </div>
              {/* Dummy Schedule Table */}
              <div className="mt-4 rounded-md overflow-hidden border bg-white text-xs">
                <div className="grid grid-cols-4 bg-gray-50">
                  <span className="p-2 font-semibold">Time</span>
                  <span className="p-2 font-semibold">May 12</span>
                  <span className="p-2 font-semibold">May 13</span>
                  <span className="p-2 font-semibold">May 14</span>
                </div>
                <div className="grid grid-cols-4 border-t">
                  <span className="p-2 bg-gray-50">4 PM</span>
                  <span className="p-2 text-orange-500 font-semibold">In Progress</span>
                  <span className="p-2"></span>
                  <span className="p-2"></span>
                </div>
                <div className="grid grid-cols-4 border-t">
                  <span className="p-2 bg-gray-50">7 PM</span>
                  <span className="p-2 text-green-500 font-semibold">Finished</span>
                  <span className="p-2"></span>
                  <span className="p-2 text-gray-400 font-semibold">Not Started</span>
                </div>
                {/* Add more rows as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
