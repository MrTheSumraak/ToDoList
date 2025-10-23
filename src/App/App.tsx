import { useDispatch, useSelector } from 'react-redux';
import '../assets/scss/normalize.scss';
import { Form } from '../components/form/form';
import { ToDo } from '../components/models/toDoItem';
import { ToDoList } from '../components/TodoList/toDoList';
import {
  createAction,
  deleteAction,
  todosSelector,
  upDateAction
} from '../service/listItemSlice';
import './App.scss';

export const App = () => {
  const dispatch = useDispatch();
  const todoSelector = useSelector(todosSelector);
  const createNewTodo = (text: string) => {
    dispatch(createAction(text));
  };

  const upDateTodo = (toDoItem: ToDo) => {
    dispatch(upDateAction(toDoItem));
  };
  const deleteTodo = (toDoItem: ToDo) => {
    dispatch(deleteAction(toDoItem));
  };

  return (
    <>
      <Form createNewTodo={createNewTodo} />
      <ToDoList
        todos={todoSelector}
        upDateTodo={upDateTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};
