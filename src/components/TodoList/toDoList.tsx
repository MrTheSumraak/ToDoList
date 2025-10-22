import clsx from 'clsx';
import { nanoid } from 'nanoid';
import { ToDo } from '../models/toDoItem';
import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import styles from './toDoList.module.scss';

export const ToDoList = (props: {
  todos: ToDo[];
  upDateTodo: Function;
  deleteTodo: Function;
}) => {
  const checkedToDo = (isDone: boolean) =>
    isDone
      ? props.todos
          .filter((item) => item.isDone)
          .map((item) => (
            <ToDoListItem
              toDoItem={item}
              key={nanoid(10)}
              upDateTodo={props.upDateTodo}
              deleteTodo={props.deleteTodo}
            />
          ))
      : props.todos
          .filter((item) => !item.isDone)
          .map((item) => (
            <ToDoListItem
              toDoItem={item}
              key={nanoid(10)}
              upDateTodo={props.upDateTodo}
              deleteTodo={props.deleteTodo}
            />
          ));

  return (
    <div className={styles.todoContainer}>
      <ul className={clsx(styles.todoList, styles.failed)}>
        {checkedToDo(false)}
      </ul>
      <ul className={clsx(styles.todoList, styles.completed)}>
        {checkedToDo(true)}
      </ul>
    </div>
  );
};
