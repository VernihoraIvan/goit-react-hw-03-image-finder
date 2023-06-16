import { Component } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    query: '',
    page: 1,
    imageProfiles: [],
  };

  handleChange = async event => {
    event.preventDefault();
    await this.setState({ query: event.target.value });
    this.props.onChange(this.state.query);
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query === '') {
      return;
    }
    if (this.state.query === event.target.value) {
      return;
    }
    this.props.onSubmit(this.state.query, this.state.page);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={css.header}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button className={css.button} type="submit">
            <span className={css.label}>Search</span>
          </button>
          <input
            className={css.input}
            value={query}
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
