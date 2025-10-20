import { ToDo } from '../../models/toDoItem';
import styles from './toDoListItem.module.scss';

export const ToDoListItem = (props: {
  toDoItem: ToDo;
  upDateTodo: Function;
  deleteTodo: Function;
}) => (
  <li className={styles.todoListItemWrapper}>
    <span>{props.toDoItem.text}</span>
    <div className={styles.todoListItemButtons}>
      <button
        className={styles.btnTrash}
        onClick={() => props.deleteTodo(props.toDoItem)}
      />
      <button
        className={props.toDoItem.isDone ? styles.btnCheck : styles.btnUncheck}
        onClick={() => props.upDateTodo(props.toDoItem)}
      />
    </div>
  </li>
);
