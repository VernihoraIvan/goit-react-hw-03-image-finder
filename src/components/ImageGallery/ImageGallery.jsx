import { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { getImages } from '../../utils/image-service';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    const { imageProfiles } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.getPhotos} />
        <ul>
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
