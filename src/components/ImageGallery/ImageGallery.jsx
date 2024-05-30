import ImageCard from "./ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ items, onImageClick }) => {
  return (
    <ul className={styles.ul}>
      {items.map((item) => (
        <li
          key={item.id}
          className={styles.li}
          onClick={() => onImageClick(item.id)}
        >
          <ImageCard small={item.urls.small} desc={item.alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
