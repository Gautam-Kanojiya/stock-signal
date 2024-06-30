import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout(); // Replace with actual logout function that sets isLoggedIn to false
      navigate('/signin');
    } catch (error) {
      console.error('Logout failed:', error);
      // Handle logout failure, show error message, etc.
    }
  };

  return (
    <header className="bg-red-600 p-4 flex justify-between items-center border-b-4 border-yellow-400">
      <div className="text-white text-2xl font-bold" style={{ fontFamily: 'Merriweather, Arial, sans-serif' }}>
        Wells Fargo
      </div>
      <nav className="flex space-x-4">
        {isLoggedIn ? (
          <>
            <Link to="/overview" className="text-white hover:text-gray-300">Overview</Link>
            <Link to="/about" className="text-white hover:text-gray-300">About</Link>
            <button onClick={handleSignOut} className="text-white hover:text-gray-300">Sign Out</button>
          </>
        ) : (
          <>
            <Link to="/signin" className="text-white hover:text-gray-300">Sign In</Link>
            <Link to="/signup" className="text-white hover:text-gray-300">Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
