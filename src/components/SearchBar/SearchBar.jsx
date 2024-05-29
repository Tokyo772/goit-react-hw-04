import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.text.value);
    const formValue = e.target.elements.value;
    resetForm();
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
    </header>
  );
};

export default SearchBar;
