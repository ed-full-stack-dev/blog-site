// components/search.tsx
"use client";

import React from "react";

type SearchProps = {
  placeholder: string;
  onSearch: (value: string) => void;
};

const Search: React.FC<SearchProps> = ({ placeholder, onSearch }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      />
      <button className="absolute inset-y-0 right-0 flex items-center pr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.414-1.414l4.388 4.387a1 1 0 01-1.414 1.414l-4.388-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
