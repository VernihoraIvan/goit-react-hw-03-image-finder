import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { fetchImages } from '../utils/image-service';
import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    query: '',
    imageProfiles: [],
    isLoading: false,
    totalHits: '',
    isButtonActive: false,
    page: 1,
  };

  getPhotos = async (query, page) => {
    if (!query) {
      return;
    }
    this.setState({ isLoading: true });
    try {
      const data = await fetchImages(query, page);
      console.log(data);
      this.setState(prevState => ({
        imageProfiles: [...prevState.imageProfiles, ...data.hits],
        totalHits: data.totalHits,
      }));
      // this.setState({ query: '' });
    } catch {
      window.alert('Somthing went wrong');
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query === '') {
      return;
    }
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.props.onSubmit(this.state.query, this.state.page);
    // this.setState({ query: '' });
  };

  handleLoadMore = async () => {
    const { query, imageProfiles, page } = this.state;
    const currentPage = page + 1;
    try {
      const images = await fetchImages(query, currentPage);
      this.setState(prevState => ({
        imageProfiles: [...prevState.imageProfiles, ...images.hits],
        totalHits: images.totalHits,
      }));
    } catch {
      window.alert('Somthing went wrong backend');
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      !prevState.isButtonActive &&
      this.state.totalHits > this.state.imageProfiles.length
    ) {
      this.setState({ isButtonActive: true });
    }
    if (
      prevState.isButtonActive &&
      this.state.totalHits < this.state.imageProfiles.length
    ) {
      this.setState({ isButtonActive: false });
    }
  }

  render() {
    const { imageProfiles, isButtonActive } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.getPhotos} />
        <ImageGallery imageProfiles={imageProfiles} />
        {isButtonActive && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}
