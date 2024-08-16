"use client";

import React, { useState } from "react";

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(search); // Call the onSearch function passed as a prop
  };

  return (
    <header className="bg-white shadow-md p-4">
      <form
        onSubmit={handleSearch}
        className="flex max-w-lg mx-11"
      >
      <img src="/logo@2x.png" alt="" className="h-7 pr-10 mx-10 pt-1" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="border border-gray-300 rounded-md py-2 px-4 max-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="ml-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
