import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: 'cat',
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query === '') {
      window.alert('Something went wrong');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
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
