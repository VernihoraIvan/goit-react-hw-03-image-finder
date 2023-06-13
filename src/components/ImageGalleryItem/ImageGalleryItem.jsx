// import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, alt, largeImage }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img className={css.ImageGalleryItem_image} src={image} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
