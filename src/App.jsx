import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage'));
const AddContactPage = lazy(() => import('pages/AddContactPage'));
const ContactDetailPage = lazy(() => import('pages/ContactDetailPage'));
const ChangeContactPage = lazy(() => import('pages/ChangeContactPage'));
const SharedLayout = lazy(() => import('layout/SharedLayout'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts/add" element={<AddContactPage />} />
        <Route path="/contacts/:contactId/*" element={<ContactDetailPage />}>
          <Route path="edit" element={<ChangeContactPage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
export default App;
