import { useState, useEffect } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import fetchArticles from "../../article-api";
import style from "./App.module.css";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [showBtn, setShowBtn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const openModal = (imageId) => {
    const image = article.find((img) => img.id === imageId);
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={style.container}>
      <SearchBar onSubmit={handleSearch} />
      {article.length > 0 && (
        <ImageGallery items={article} onImageClick={openModal} />
      )}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {article.length > 0 && !loading && showBtn && (
        <LoadMoreBtn onLoad={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedImage={selectedImage}
      />
    </div>
  );
}

export default App;
