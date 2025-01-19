import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
//  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login
  const login = async (email, password) => {
    try {
      const response = await axios.post("https://jobportal-3-1vi0.onrender.com/api/login", {
        email,
        password,
      });
      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        setToken(token);
        validateToken(token); // Validate token after login
        
      }
    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error.message);
    }
  };

  // Function to handle logout
  const logout = () => {
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  // Function to validate the token
  const validateToken = async (currentToken) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/confirmToken",{token: currentToken},
      );
      setUser(response.data); // Set user details from the response
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Token validation failed:", error.response ? error.response.data : error.message);
      logout(); // Log out if token is invalid
    }
  };

  // Automatically validate token on app load
  useEffect(() => {
    if (token) {
      validateToken(token);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
