import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import AddContactPage from 'pages/AddContactPage';
import ContactInfoPage from 'pages/ContactInfoPage';
import { Wrapper } from './components/ui/Wrapper';
import { SharedLayout } from 'layout/SharedLayout';
// import { lazy } from 'react';

// const HomePage = lazy(() => import('pages/HomePage'));
// const AddContactPage = lazy(() => import('pages/AddContactPage'));
// const ContactInfoPage = lazy(() => import('pages/ContactInfoPage'));

function App() {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/contacts/add" element={<AddContactPage />} />
            <Route
              path="/contacts/:contactId/*"
              element={<ContactInfoPage />}
            />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
