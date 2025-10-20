import { useState } from 'react';
import '../assets/scss/normalize.scss';
import { Form } from '../components/form/form';
import { Header } from '../components/Header/header';
import { ToDo } from '../components/models/toDoItem';
import { ToDoList } from '../components/TodoList/toDoList';
import './App.scss';

export const App = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const createNewTodo = (text: string) => {
    const newTodo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false
    };
    setTodos([...todos, newTodo]);
  };

  const upDateTodo = (toDoItem: ToDo) => {
    const newTodo = todos.map((item) =>
      item.id === toDoItem.id ? { ...item, isDone: !item.isDone } : item
    );
    setTodos(newTodo);
  };
  const deleteTodo = (toDoItem: ToDo) => {
    const newTodos = todos.filter((item) => item.id !== toDoItem.id);
    setTodos(newTodos);
  };

  return (
    <>
      <Header />
      <Form createNewTodo={createNewTodo} />
      <ToDoList todos={todos} upDateTodo={upDateTodo} deleteTodo={deleteTodo} />
    </>
  );
};
