import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import AddContactPage from 'pages/AddContactPage';
import ContactDetailPage from 'pages/ContactDetailPage';
import { Wrapper } from './components/ui/Wrapper';
import { SharedLayout } from 'layout/SharedLayout';
import ChangeContactPage from 'pages/ChangeContactPage';
// import { lazy } from 'react';

// const HomePage = lazy(() => import('pages/HomePage'));
// const AddContactPage = lazy(() => import('pages/AddContactPage'));
// const ContactDetailPage = lazy(() => import('pages/ContactDetailPage'));
// const ChangeContactPage = lazy(() => import('pages/ChangeContactPage'))

const App = () => {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/contacts/add" element={<AddContactPage />} />
            <Route
              path="/contacts/:contactId/*"
              element={<ContactDetailPage />}
            >
              <Route path="edit" element={<ChangeContactPage />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Wrapper>
    </>
  );
};

export default App;
