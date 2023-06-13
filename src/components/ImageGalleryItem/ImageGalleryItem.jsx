// import { Component } from 'react';

const ImageGalleryItem = ({ image, alt, largeImage }) => {
  return (
    <li className="gallery-item">
      <img src={image} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
