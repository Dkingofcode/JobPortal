import React from 'react';
import Logo from '../assets/logo-with tag.png';


const Header = () => {
  return (
    <header className="bg-gray-100 shadow">
      <div className="container bg-gray-300 mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <a href="#" className="text-2xl font-bold text-gray-800"><img src={Logo} alt='logo image' /></a>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-500 font-medium transition"
          >
            Create Profile
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-500 font-medium transition"
          >
            Post Jobs
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-500 font-medium transition"
          >
            Resume Builder
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-500 font-medium transition"
            >
            Services
          </a>
              </nav>
              

         <div className='hidden md:flex space-x-8'>
          <button
            href="#"
            className="text-gray-700  font-bold transition"
            >
            Login
          </button>

          <button
            href="#"
            className="text-purple-700  font-bold border border-purple-400 p-2 rounded-md transition"
            >
            Resume Builder
          </button>

          <button
            href="#"
            className="text-gray-50 bg-purple-600 border border-purple-600 font-bold p-2 rounded-md transition"
            >
            Apply For Jobs
          </button>
       </div>

        {/* Mobile Menu Button */}
        <button
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <nav className="bg-gray-100 px-4 py-2 space-y-2">
          <a
            href="#"
            className="block text-gray-700 hover:text-blue-500 font-medium transition"
          >
            Career Fair
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-blue-500 font-medium transition"
          >
            Skills Test
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-blue-500 font-medium transition"
          >
            Resume Builder
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-blue-500 font-medium transition"
          >
            Apply for Jobs
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
