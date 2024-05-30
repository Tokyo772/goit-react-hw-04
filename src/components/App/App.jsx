import { useState, useEffect } from "react";

import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";

import fetchArticles from "../../article-api";

import style from "./App.module.css";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

function App() {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [showBnt, setShowBtn] = useState(false);

  useEffect(() => {
    async function getArticle() {
      if (query.trim() === "") return;

      try {
        setLoading(true);
        setError(false);
        const data = await fetchArticles(query, page);
        setArticle((prevArticle) => {
          return [...prevArticle, ...data.results];
        });
        console.log(data.total_pages);
        setShowBtn(page < data.total_pages);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getArticle();
  }, [query, page]);
  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setShowBtn(false);
    setArticle([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  console.log(article);

  return (
    <div className={style.container}>
      <SearchBar onSubmit={handleSearch} />
      {article.length > 0 && <ImageGallery items={article} />}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {article.length > 0 && !loading && showBnt && (
        <LoadMoreBtn onLoad={handleLoadMore} />
      )}
    </div>
  );
}

export default App;
