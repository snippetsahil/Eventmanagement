// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { login as loginService, isAuthenticated as isAuthenticatedService } from '../services/authService'; // Adjust the import path accordingly

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Holds user information
  const [loading, setLoading] = useState(true); // Indicates loading state
  const [error, setError] = useState(null); // Holds error messages

  // Function to log in a user
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await loginService(email, password); // Call to the login service
      setUser(response.user); // Store user info on successful login
      localStorage.setItem('user', JSON.stringify(response.user)); // Optional: Store in localStorage
      alert('Login successful!'); // Notify the user
    } catch (err) {
      setError(err.message); // Set error message on failure
      alert('Login failed: ' + err.message); // Notify the user
    } finally {
      setLoading(false);
    }
  };

  // Function to log out a user
  const logout = () => {
    setUser(null); // Clear user information
    localStorage.removeItem('user'); // Optional: Remove user from localStorage
  };

  // Function to check if a user is authenticated
  const checkAuth = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser); // Restore user from localStorage if exists
    setLoading(false); // Stop loading
    return !!storedUser || isAuthenticatedService(); // Check local state or call service
  };

  useEffect(() => {
    checkAuth(); // Check authentication status on mount
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout, isAuthenticated: checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
