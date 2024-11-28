// src/components/header.tsx
import React from 'react';

function Header() {
  return (
    <header className='bg-white shadow-sm p-2'>
      <div className=" mx-auto py-2  md:px-8 flex  justify-between items-center">
        <div className="w-1/2 lg:w-1/3 px-2">
          <img src="/logo.png" alt="Logo" className=" w-auto sm:px-4  sm:h-11 md:h-20" />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 px-2 py-1 sm:px-4 sm:py-2 rounded-md focus:outline-none w-1/2 lg:w-1/3"
        />
      </div>
    </header>
  );
}

export default Header;