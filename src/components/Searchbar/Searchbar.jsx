import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query === '') {
      window.alert('Something went wrong');
      return;
    }
    console.log(this.props);
    console.log(this.state);
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
