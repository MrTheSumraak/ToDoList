import { ToDo } from '../models/toDoItem';
import styles from './listItem.module.scss';

export const ListItem = (props: { todo: ToDo }) => (
  <a
    className={`${styles.link} ${props.todo.isDone} ? ${styles.done} : ${styles.notDone}`}
    target='_blank'
    href={`/app/list/${props.todo.id}`}
  >
    {props.todo.text}
  </a>
);
