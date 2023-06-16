import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    const { imageProfiles, modalOpen } = this.props;
    console.log(imageProfiles);
    return (
      <>
        <ul className={css.ImageGallery}>
          {imageProfiles.map(element => (
            <ImageGalleryItem
              key={element.id}
              image={element.webformatURL}
              alt={element.tags}
              largeImage={element.largeImageURL}
              modalOpen={modalOpen}
            />
          ))}
        </ul>
      </>
    );
  }
}
