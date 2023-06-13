import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { getImages } from '../../utils/image-service';

export class App extends Component {
  state = {
    query: '',
    imageProfiles: [],
    isLoading: false,
  };

  getImageProfiles = async query => {
    if (!query) {
      return;
    }
    this.setState({ isLoading: true });
    try {
      const data = await getImages(query, 1);
      console.log(data);
      this.setState(prevState => ({
        imageProfiles: [...prevState.imageProfiles, ...data.hits],
      }));
      console.log(this.state.imageProfiles);
    } catch {
      window.alert('Somthing went wrong');
    }
  };

  render() {
    const { imageProfiles } = this.state;
    return (
      <div>
        <ImageGallery>
          <Searchbar onSubmit={this.getImageProfiles} />
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
        </ImageGallery>
      </div>
    );
  }
}
