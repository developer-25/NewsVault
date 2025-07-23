import React from "react";

const Card = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((item, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
          {item.urlToImage && (
            <img
              src={item.urlToImage}
              alt={item.title}
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => window.open(item.url, "_blank")}
            />
          )}
          <div className="p-4">
            <h2
              className="text-lg font-bold text-purple-700 hover:text-purple-900 cursor-pointer"
              onClick={() => window.open(item.url, "_blank")}
            >
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm my-2">{item.description}</p>
            <button
              onClick={() => window.open(item.url, "_blank")}
              className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-800 transition-all"
            >
              Read more...
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
