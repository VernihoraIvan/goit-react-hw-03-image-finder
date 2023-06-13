import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: '',
    page: 1,
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ query: event.target.value });
  };

  //   showCurrentPage = () => {
  //     this.setState(prevState => ({
  //       page: prevState.page + 1,
  //     }));
  //     return this.state.page;
  //   };

  //   handleSubmit = event => {
  //     event.preventDefault();
  //     if (this.state.query === '') {
  //       return;
  //     }
  //     this.setState(prevState => ({
  //       page: prevState.page + 1,
  //     }));
  //     this.props.onSubmit(this.state.query, this.state.page);
  //     // this.setState({ query: '' });
  //   };

  render() {
    const { getPhotos } = this.props;
    // const { query } = this.state;
    return (
      <header>
        <form onSubmit={getPhotos}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            // value={query}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
