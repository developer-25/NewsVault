const API_KEY = "5f6a7f9062634e0ba45fc21bfb9f1cec";

const getData = async (query, type = "everything") => {
  let url = "";

  if (type === "everything") {
    url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
  } else if (type === "top-headlines") {
    url = `https://newsapi.org/v2/top-headlines?country=${query}&apiKey=${API_KEY}`;
  }

  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData.articles || [];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export default getData;
