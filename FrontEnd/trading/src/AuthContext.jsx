import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async () => {
    // Example: Perform actual login logic (e.g., validate credentials)
    setIsLoggedIn(true); // Replace with actual login logic
  };

  const logout = async () => {
    // Example: Perform actual logout logic (e.g., clear session, invalidate tokens)
    setIsLoggedIn(false); // Replace with actual logout logic
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
