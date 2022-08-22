import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './common/Header';
import { SpinnerDotted } from 'spinners-react';
import { MainContainer } from 'layout/common/MainContainer';

const SharedLayout = () => {
  return (
    <MainContainer>
      <Header />
      <main>
        <Suspense fallback={<SpinnerDotted />}>
          <Outlet />
        </Suspense>
      </main>
    </MainContainer>
  );
};

export default SharedLayout;
