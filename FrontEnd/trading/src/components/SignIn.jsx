import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    // Example: Perform actual authentication logic (validate credentials)
    try {
      // Simulating asynchronous login process
      await login(); // Replace with actual login function that sets isLoggedIn to true
      navigate('/overview');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure, show error message, etc.
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-700 hover:shadow-md hover:scale-105 transition duration-200"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
