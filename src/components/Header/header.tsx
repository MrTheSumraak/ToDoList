import clsx from 'clsx';
import styles from './header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <a href='/' className={clsx(styles.link)}>
        ToDo
      </a>
    </div>
  </header>
);