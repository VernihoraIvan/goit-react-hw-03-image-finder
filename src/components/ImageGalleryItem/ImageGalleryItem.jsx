import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, alt, largeImage, modalOpen }) => {
  return (
    <li className={css.ImageGalleryItem} onClick={() => modalOpen(largeImage)}>
      <img className={css.ImageGalleryItem_image} src={image} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
