import React from 'react';

const SignUp = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
              type="text"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-700 hover:shadow-md  hover:scale-105 transition duration-200"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account? <a href="/signin" className="text-red-500">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
