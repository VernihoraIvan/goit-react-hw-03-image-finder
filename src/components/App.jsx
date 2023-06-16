import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchImages } from '../utils/image-service';
import { Button } from 'components/Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    imageProfiles: [],
    isLoading: false,
    totalHits: '',
    isButtonActive: false,
    showModal: false,
    largeImage: '',
  };

  getPhotos = async (query, page) => {
    if (!query) {
      return;
    }

    try {
      this.setState({ isLoading: true });
      const data = await fetchImages(query, page);
      this.setState({
        imageProfiles: data.hits,
        totalHits: data.totalHits,
      });
    } catch {
      window.alert('Somthing went wrong');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleAgentChange = value => {
    this.setState({ query: value });
  };
  handleLoadMore = () => {
    const { query, page } = this.state;
    const currentPage = page + 1;
    try {
      fetchImages(query, currentPage).then(images => {
        this.setState(prevState => ({
          imageProfiles: [...prevState.imageProfiles, ...images.hits],
          totalHits: images.totalHits,
          page: currentPage,
        }));
      });
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

  modalOpen = largeImage => {
    this.setState({ largeImage, showModal: true });
  };
  onClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { imageProfiles, isButtonActive, isLoading, largeImage, showModal } =
      this.state;

    return (
      <div>
        <Searchbar
          onSubmit={this.getPhotos}
          onChange={this.handleAgentChange}
        />
        <ImageGallery
          imageProfiles={imageProfiles}
          modalOpen={this.modalOpen}
        />
        {isLoading && <Loader />}
        {isButtonActive && <Button onClick={this.handleLoadMore} />}
        {showModal && <Modal largeImage={largeImage} onClose={this.onClose} />}
      </div>
    );
  }
}
