import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ToDo } from '../components/models/toDoItem';
import { todosSelector } from '../service/listItemSlice';

export const ViewListItem = () => {
  const todoSelector = useSelector(todosSelector);
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<ToDo>();

  useEffect(() => {
    const serrchTodo = todoSelector.find((todo) => String(todo.id) === id);
    serrchTodo ? setTodo(serrchTodo) : navigate('/404');
  }, [todoSelector, id, navigate]);

  return (
    <div className='container'>
      <h1>{todo?.text}</h1>;
    </div>
  );
};
