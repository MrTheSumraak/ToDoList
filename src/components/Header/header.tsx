import { NavLink } from 'react-router-dom';
import { ToDo } from '../models/toDoItem';
import styles from './header.module.scss';



export const Header = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }): string =>
    isActive ? `${styles.active} ${styles.link}` : styles.link;
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <NavLink to='/' className={getActiveClass}>
          ToDo
        </NavLink>
        <NavLink to='/list' className={getActiveClass}>
          List
        </NavLink>
      </div>
    </header>
  );
};
