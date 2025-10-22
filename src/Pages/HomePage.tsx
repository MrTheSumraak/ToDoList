import { nanoid } from 'nanoid';
import { ListItem } from '../components/ListItem/listItem';
import { ToDo } from '../components/models/toDoItem';

export const HomePage = (props: { todos: ToDo[] }) => {
  const zalupd = {};
  return (
    <div className='container'>
      {props.todos.map((todo) => {
        {
          return <ListItem todo={todo} key={nanoid(10)} />;
        }
      })}
    </div>
  );
};
