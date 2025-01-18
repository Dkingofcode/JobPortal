import React from "react";
import { useNavigate } from "react-router-dom";


const Logout = () => {
const navigate = useNavigate();

 const handleLogout = () => {
    localStorage.removeItem('token'); // Or sessionStorage.clear(), or Cookies.remove('authToken');
    navigate('/login');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;