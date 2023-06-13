import { Component } from 'react';
// import { Searchbar } from 'components/Searchbar/Searchbar';
// import { getImages } from '../../utils/image-service';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css'

export class ImageGallery extends Component {
  state = {};

  render() {
    const { imageProfiles } = this.props;
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
            />
          ))}
        </ul>
      </>
    );
  }
}
