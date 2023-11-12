import css from './FormSubmit.module.css';

export const FormSubmit = ({ onSubmitForm }) => {
  return (
    <form className={css.form} onSubmit={onSubmitForm}>
      <label>
        <span className={css.formSpan}>Search movie: </span>
        <input type="text" name="query" required className={css.formInput} />
      </label>
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};
