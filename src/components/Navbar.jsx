import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = ({ search, onSearchChange, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold text-purple-700">NewsVault</h1>

          <ul className="hidden md:flex md:items-center md:space-x-6">
            <button
              onClick={() => onSearch("india", "everything")}
              className="text-purple-700 hover:text-purple-900 font-medium focus:text-purple-800"
            >
              All News
            </button>
            <button
              onClick={() => onSearch("us", "top-headlines")}
              className="text-purple-700 hover:text-purple-900 font-medium focus:text-purple-800"
            >
              Top Headlines
            </button>
          </ul>

          <div className="flex items-center bg-purple-100 px-3 py-1 rounded-md w-32 md:w-64">
            <input
              type="text"
              value={search}
              placeholder="Search..."
              onChange={(e) => onSearchChange(e.target.value)}
              className="bg-transparent outline-none text-sm md:text-base px-2 py-1 w-full"
            />
            <button
              onClick={() => onSearch(search, "everything")}
              className="bg-purple-600 text-white px-3 py-1 rounded-md ml-2 hover:bg-purple-800 transition-all"
            >
              <AiOutlineSearch size={18} />
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-purple-700 focus:outline-none">
              {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center bg-white shadow-md p-4 space-y-2">
            <button
              onClick={() => onSearch("india", "everything")}
              className="text-purple-700 hover:text-purple-900 font-medium"
            >
              All News
            </button>
            <button
              onClick={() => onSearch("us", "top-headlines")}
              className="text-purple-700 hover:text-purple-900 font-medium"
            >
              Top Headlines
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
