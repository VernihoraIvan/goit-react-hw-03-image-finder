import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImages } from '../utils/image-service';

export class App extends Component {
  state = {
    query: '',
    isLoading: false,
  };

  // onSubmit = value => {
  //   this.setState({ query: value });
  // };

  getPhotos = async query => {
    if (!query) {
      return;
    }
    this.setState({ isLoading: true });
    try {
      const data = await getImages(query, 1);
      console.log(data);
    } catch {
      window.alert('Somthing went wrong');
    }
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.getPhotos} />
        <ImageGallery></ImageGallery>
      </div>
    );
  }
}
