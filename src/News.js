import React, { useState, useEffect } from "react";
import "./News.css";
import axios from "axios";
import NewsCard from "./components/NewsCard";

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=7c9dfd690a4d43b6aef535cb58d8c8e2"
      )
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <NewsCard
          url={article.url}
          title={article.title}
          description={article.description}
          urlToImage={article.urlToImage}
        />
      ))}
    </div>
  );
}

export default News;
