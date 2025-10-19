import styles from './toDoListItem.module.scss';

export const ToDoListItem = () => (
  <li className={styles.todoListItemWrapper}>
    <span>Первая задача</span>
    <div className={styles.todoListItemButtons}>
      <button className={styles.btnTrash} />
      <button className={styles.btnCheck} />
    </div>
  </li>
);
