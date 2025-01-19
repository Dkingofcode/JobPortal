import React, { useContext, useState } from 'react';
import Logo from '../assets/logo-with tag.png';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleResume = () => {
     navigate('/resume');
  }

  const handleLogin = () => {
    navigate('/login');
    console.log('Login Button Clicked');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
    console.log('User clicked Logout button');
  };

  const handleJobPage = () => {
    navigate('/jobs');
    console.log('All jobs Page');
  };

  return (
    <header className="bg-gray-300 shadow">
      <div className="container bg-gray-300 mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gray-800">
          <img src={Logo} alt="logo image" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="/profile"
            className="text-gray-700 hover:text-blue-500 font-medium transition"
          >
            Create Profile
          </a>
          <a
            href="/post-job"
            className="text-gray-700 hover:text-blue-500 font-medium transition"
          >
            Post Job
          </a>
          <a
            href="/resume"
            className="text-gray-700 hover:text-blue-500 font-medium transition"
          >
            Resume Builder
          </a>
          <a
            href="/company"
            className="text-gray-700 hover:text-blue-500 font-medium transition"
          >
            Register Company
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={isAuthenticated ? handleLogout : handleLogin}
            className="text-gray-700 font-bold transition"
          >
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
          <button
          onClick={handleResume}
            className="text-purple-700 font-bold border border-purple-400 p-2 rounded-md transition"
          >
            Resume Builder
          </button>
          <button
            onClick={handleJobPage}
            className="text-gray-50 bg-purple-600 border border-purple-600 font-bold p-2 rounded-md transition"
          >
            Apply For Jobs
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 hover:text-blue-500 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-gray-100 px-4 py-2 space-y-2">
            <a
              href="/profile"
              className="block text-gray-700 hover:text-blue-500 font-medium transition"
            >
              Create Profile
            </a>
            <a
              href="/company"
              className="block text-gray-700 hover:text-blue-500 font-medium transition"
            >
              Create Company
            </a>
            <a
              href="/post-job"
              className="block text-gray-700 hover:text-blue-500 font-medium transition"
            >
              Post Job
            </a>
            <a
              href="/resume"
              className="block text-gray-700 hover:text-blue-500 font-medium transition"
            >
              Resume Builder
            </a>
            <a
              href="/jobs"
              className="block text-gray-700 hover:text-blue-500 font-medium transition"
            >
              Apply for Jobs
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
