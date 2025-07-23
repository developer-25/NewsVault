import React from "react";

const CategoryButton = ({ category, onClick }) => {
  return (
    <button
      onClick={() => onClick(category)}
      className="px-5 py-2 bg-purple-500 text-white border border-purple-700 rounded-full 
      hover:bg-purple-600 transition-all focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-purple-600"
    >
      {category}
    </button>
  );
};

export default CategoryButton;
