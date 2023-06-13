import css from './Button.module.css';
export const Button = ({ onClick, inactiveButton }) => {
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
};
