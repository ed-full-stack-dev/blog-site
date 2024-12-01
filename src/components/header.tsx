// src/components/header.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link to='/' className="text-xl font-bold w-1/2 lg:w-1/3">
        <img src="/logo.png" alt="Logo" className=" w-auto   sm:h-11 md:h-20" />
      </Link>
      {location.pathname.includes('/post') ? (
        <Link
          to="/"
          className="text-blue-500  text-2xl font-bold hover:text-orange-400"
        >
          Blog
        </Link>
      ) : (
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2 rounded-md focus:outline-none w-1/2 lg:w-1/3"
        />
      )}
    </header>
  );
}

export default Header;