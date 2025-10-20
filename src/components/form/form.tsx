import { ChangeEvent, useState } from 'react';
import styles from './form.module.scss';

export const Form = (props: { createNewTodo: Function }) => {
  const [text, setText] = useState('');

  const changeText = (event: ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);

  const clearInput = () => setText('');

  const submitForm = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    text && props.createNewTodo(text);
    clearInput();
  };

  return (
    <>
      <div className={styles.formWrapper}>
        <form action='/' onSubmit={submitForm}>
          <label>
            <input value={text} type='text' onChange={changeText} />
            <button />
          </label>
        </form>
      </div>
    </>
  );
};
