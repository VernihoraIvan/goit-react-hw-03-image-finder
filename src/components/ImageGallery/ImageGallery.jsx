import { Component } from 'react';
// import { Searchbar } from 'components/Searchbar/Searchbar';
// import { getImages } from '../../utils/image-service';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import { fetchImages } from '../../utils/image-service';

export class ImageGallery extends Component {
  //   state = {
  //     query: '',
  //     imageProfiles: [],
  //     isLoading: false,
  //     totalHits: '',
  //     isButtonActive: false,
  //     page: 1,
  //     st: 'imageGallery',
  //   };

  //   componentDidUpdate(prevProps, prevState) {
  //     const { page, query } = this.state;
  //     if (query !== prevState.query || prevState.page !== page) {
  //       this.setState({
  //         isLoader: true,
  //         inactiveButton: true,
  //         showButton: page !== 1,
  //       });
  //       this.getImages(query, page);
  //     }
  //   }

  //   handleSubmit = query => {
  //     if (query === this.state.query) {
  //       return;
  //     }
  //     this.setState({ query, page: 1, images: [], isEmpty: false, error: null });
  //   };

  //   componentDidUpdate(prevProps, prevState) {
  //     if (
  //       !prevState.isButtonActive &&
  //       this.state.totalHits > this.state.imageProfiles.length
  //     ) {
  //       this.setState({ isButtonActive: true });
  //     }
  //     if (
  //       prevState.isButtonActive &&
  //       this.state.totalHits < this.state.imageProfiles.length
  //     ) {
  //       this.setState({ isButtonActive: false });
  //     }
  //   }

  //   getPhotos = async (query, page) => {
  //     if (!query) {
  //       return;
  //     }
  //     this.setState({ isLoading: true });
  //     try {
  //       const data = await fetchImages(query, page);
  //       console.log(data);
  //       this.setState(prevState => ({
  //         imageProfiles: [...prevState.imageProfiles, ...data.hits],
  //         totalHits: data.totalHits,
  //       }));
  //       this.setState({ query: '' });
  //     } catch {
  //       window.alert('Somthing went wrong');
  //     } finally {
  //       console.log(this.state);
  //     }
  //   };

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
