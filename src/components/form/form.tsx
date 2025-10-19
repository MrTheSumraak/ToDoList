import styles from './form.module.scss';

export const Form = () => (
  <>
    <div className={styles.formWrapper}>
      <form action='/'>
        <label>
          <input type='text' />
          <button />
        </label>
      </form>
    </div>
  </>
);
