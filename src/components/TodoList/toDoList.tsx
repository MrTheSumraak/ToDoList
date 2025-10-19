import clsx from 'clsx';
import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import styles from './toDoList.module.scss';

export const ToDoList = () => (
  <div className={styles.todoContainer}>
    <ul className={clsx(styles.todoList, styles.failed)}>
      <ToDoListItem />
    </ul>
    <ul className={clsx(styles.todoList, styles.completed)}>
      {/* <li className='todo-list-item__wrapper'>
          <span>Вторая задача</span>
          <div className='todo-list-item__buttons'>
            <button className='btn-trash' />
            <button className='btn-uncheck' />
          </div>
        </li> */}
      <ToDoListItem />
    </ul>
  </div>
);
