import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.error}>
        Oops, something went wrong. Please try reloading the page❗️
      </p>
    </>
  );
};

export default ErrorMessage;
