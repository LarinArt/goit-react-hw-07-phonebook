import { Outlet } from 'react-router-dom';
import { Header } from './common/Header/Header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
