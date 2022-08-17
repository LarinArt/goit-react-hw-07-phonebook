import { Routes, Route } from 'react-router-dom';
import Container from 'components/ui/Container';
import { Section } from './components/ui/Section';
import { SharedLayout } from 'layout/SharedLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage'));
const AddContactPage = lazy(() => import('pages/AddContactPage'));
const ContactInfoPage = lazy(() => import('pages/ContactInfoPage'));

export const App = () => {
  return (
    <>
      <Container>
        <Section>
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
        </Section>
      </Container>
    </>
  );
};

export default App;
