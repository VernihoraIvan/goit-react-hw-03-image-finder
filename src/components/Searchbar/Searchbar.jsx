import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
    page: 1,
    imageProfiles: [],
    st: 'searchbar',
  };

  //   handleChange = event => {
  //     event.preventDefault();
  //     this.setState({ query: event.target.value });
  //     console.log(this.state);
  //   };

  //   showCurrentPage = () => {
  //     this.setState(prevState => ({
  //       page: prevState.page + 1,
  //     }));
  //     return this.state.page;
  //   };

  //   componentDidUpdate() {
  //     const { queryUpdate } = this.props;
  //     queryUpdate();
  //   }
  //     // event.preventDefault();
  //     if (this.state.query === '') {
  //       return;
  //     }
  //     // this.setState(prevState => ({
  //     //   page: prevState.page + 1,
  //     // }));
  //     this.props.onSubmit(this.state.query, this.state.page);
  //     console.log(this.state);

  //     this.setState({ query: '' });
  //   }
  //   handleSubmit = event => {
  //     event.preventDefault();
  //     if (this.state.query === '') {
  //       return;
  //     }
  //     // this.setState(prevState => ({
  //     //   page: prevState.page + 1,
  //     // }));
  //     this.props.onSubmit(this.state.query, this.state.page);
  //     console.log(this.state);

  //     // this.setState({ query: '' });
  //   };

  handleChange = async event => {
    event.preventDefault();
    await this.setState({ query: event.target.value });
    this.props.onChange(this.state.query);
    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query === '') {
      return;
    }
    if (this.state.query === event.target.value) {
      return;
    }
    // this.setState(prevState => ({
    //   page: prevState.page + 1,
    // }));
    this.props.onSubmit(this.state.query, this.state.page);
    console.log(this.state);
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
