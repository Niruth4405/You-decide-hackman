import React, { useState, useEffect } from "react";

export default function LoginPage() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Detect user's preferred color scheme
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(darkQuery.matches ? "dark" : "light");

    // Listen to changes in color scheme preference
    const handler = (e) => setTheme(e.matches ? "dark" : "light");
    darkQuery.addEventListener("change", handler);

    return () => darkQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-md w-full space-y-6 p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <h2 className="text-center text-3xl font-extrabold">
          Login to your account
        </h2>
        <form
          className="mt-8 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Login button clicked");
          }}
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                placeholder="Username"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-black text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
