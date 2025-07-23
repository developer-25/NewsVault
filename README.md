# NewsVault - React News App

NewsVault is a dynamic news application built using React.js that fetches the latest news articles from the [NewsAPI](https://newsapi.org/) and displays them in a user-friendly interface. Users can browse **Top Headlines**, search for news on various topics, and filter by categories.

---

## 🚀 Features

✅ **Fetches latest news** from [NewsAPI](https://newsapi.org/) using `everything` and `top-headlines` endpoints  
✅ **Search functionality** for finding relevant news articles  
✅ **Category-based filtering** for different news topics  
✅ **Responsive UI** designed with Tailwind CSS  
✅ **Modular code structure** for better maintainability  

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **API:** NewsAPI (https://newsapi.org/)
- **State Management:** React Hooks

---

## 📌 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Dayanshi123/NewsVault.git
   cd newsvault
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your NewsAPI key:
   ```sh
   REACT_APP_NEWS_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```sh
   npm start
   ```

The application will be available at `http://localhost:5173`.

---

## 📂 Project Structure
```
newsvault/
│── src/
│   │── components/
│   │   │── Navbar.jsx
│   │   │── Card.jsx
│   │   │── CategoryButton.jsx
│   │   │── Newsapp.jsx
│   │── hooks/
│   │   │── getData.js
│   │── App.jsx
│   │── index.js
│── public/
│── package.json
│── README.md
```

---

## ⚙️ Usage

- **View Top Headlines**: Click on the **Top Headlines** button in the navbar.
- **Search News**: Type any keyword in the search bar and hit enter.
- **Category Filters**: Click on category buttons (Sports, Politics, Health, etc.) to fetch related news.
- **Read Full Articles**: Click on any news card to open the full article in a new tab.

---

## 📝 API Endpoints Used

| Endpoint | Description |
|----------|-------------|
| `https://newsapi.org/v2/everything?q=KEYWORD&apiKey=YOUR_API_KEY` | Fetch all news related to a keyword |
| `https://newsapi.org/v2/top-headlines?country=COUNTRY_CODE&apiKey=YOUR_API_KEY` | Fetch top headlines from a specific country |

> **Note:** You need to sign up at [NewsAPI](https://newsapi.org/) to get an API key.

---

## 📌 Future Enhancements

- [ ] Add dark mode support
- [ ] Implement infinite scrolling
- [ ] Improve search with AI-based recommendations
- [ ] Allow users to save/bookmark articles

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or want to fix bugs, feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

### 🎯 Developed with ❤️ by [Dayanshi Jain]
