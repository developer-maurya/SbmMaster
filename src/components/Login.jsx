import React, { useState } from "react";

const Login = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login & signup

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="fixed inset-0 bg-black-700 bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-slate-100 rounded-xl shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-xl font-bold text-center text-blue-600 mb-4">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                className="text-blue-600 font-medium hover:underline"
                onClick={toggleForm}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                className="text-blue-600 font-medium hover:underline"
                onClick={toggleForm}
              >
                Login
              </button>
            </>
          )}
        </p>

        <button
          onClick={onClose}
          className="mt-3 text-sm text-red-500 w-full text-center hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Login;
