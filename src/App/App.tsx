import { Form } from '../components/form/form';
import { Header } from '../components/Header/header';
import { ToDoList } from '../components/TodoList/toDoList';
import './App.scss';

export const App = () => (
  <>
    <Header />

    <Form />

    <ToDoList />
  </>
);
