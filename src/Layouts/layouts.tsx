import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/header';

export const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);
