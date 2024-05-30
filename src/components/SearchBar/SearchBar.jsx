import toast, { Toaster } from "react-hot-toast";

import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handlerSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const { text } = form.elements;
    if (text.value.trim() === "") {
      toast.error("Please enter some text", {
        duration: 4000,
        position: "top-center",
        icon: "👀",
      });
    }
    onSubmit(text.value);

    form.reset();
  };
  return (
    <header>
      <form className={styles.form} onSubmit={handlerSubmit}>
        <input
          type="text"
          name="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
