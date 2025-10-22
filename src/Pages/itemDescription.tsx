import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToDo } from '../components/models/toDoItem';

interface IComponentsProps {
  todos: ToDo[];
}

export const ItemDescription = ({ todos }: IComponentsProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<ToDo>();

  useEffect(() => {
    const serrchTodo = todos.find((todo) => String(todo.id) === id);
    serrchTodo ? setTodo(serrchTodo) : navigate('/404');
  }, [todos, id, navigate]);

  return (
    <div className='container'>
      <h1>{todo?.text}</h1>;
    </div>
  );
};
