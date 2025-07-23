import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CategoryButton from "./CategoryButton";
import Card from "./Card";
import getData from "../hooks/getData";

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    fetchNews("india", "everything");
  }, []);

  const fetchNews = async (query, type) => {
    const data = await getData(query, type);
    setNewsData(data);
  };

  return (
    <div>
      <Navbar search={search} onSearchChange={setSearch} onSearch={fetchNews} />

      <div className="flex flex-col items-center justify-center p-6">
        <p className="text-lg font-semibold text-gray-700 mb-4">Stay Updated with News</p>

        <div className="flex flex-wrap justify-center gap-3">
          {["Sports", "Politics", "Entertainment", "Health", "Fitness"].map((category, index) => (
            <CategoryButton key={index} category={category} onClick={(cat) => fetchNews(cat, "everything")} />
          ))}
        </div>
      </div>

      <div className="container mx-auto p-4">
        {newsData ? <Card data={newsData} /> : <p className="text-center text-gray-500">Loading...</p>}
      </div>
    </div>
  );
};

export default Newsapp;
