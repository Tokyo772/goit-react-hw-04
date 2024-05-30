import ImageCard from "./ImageCard/ImageCard";

import styles from "./ImageGallery.module.css";

const ImageGallery = ({ items }) => {
  return (
    <ul className={styles.ul}>
      {items.map(({ id, alt_description, urls: { small } }) => (
        <li key={id} className={styles.li}>
          <ImageCard small={small} desc={alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
