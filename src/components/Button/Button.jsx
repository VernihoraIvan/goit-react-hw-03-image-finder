import { Component } from 'react';

import css from './Button.module.css';

export class Button extends Component {
  state = {
    query: '',
    imageProfiles: [],
    isLoading: false,
    totalHits: '',
    isButtonActive: false,
    page: 1,
  };
  render() {
    const { onClick } = this.props;
    return (
      <div className={css.buttonContainer}>
        <button
          className={css.button}
          // disabled={inactiveButton}
          type="button"
          onClick={onClick}
        >
          Load more
        </button>
      </div>
    );
  }
}
