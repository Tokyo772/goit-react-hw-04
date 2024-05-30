import styles from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onLoad }) => {
  const handleClick = () => {
    onLoad();
  };
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
