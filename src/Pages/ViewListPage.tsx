import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { ListItem } from '../components/ListItem/listItem';
import { todosSelector } from '../service/listItemSlice';

export const ViewListPage = () => {
  const todoSelector = useSelector(todosSelector);
  return (
    <div className='container'>
      {todoSelector.map((todo) => {
        {
          return <ListItem todo={todo} key={nanoid(10)} />;
        }
      })}
    </div>
  );
};
