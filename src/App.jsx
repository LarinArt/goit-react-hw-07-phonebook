import { Routes, Route } from 'react-router-dom';
import Container from 'components/ui/Container';
import Header from 'components/Header';
import ContactsPage from 'pages/ContactsPage';
import AddContactPage from 'pages/AddContactPage';
import ContactInfoPage from 'pages/ContactInfoPage';
import { Section } from './components/ui/Section';

function App() {
  return (
    <>
      <Container>
        <Section>
          <Header />

          <Routes>
            <Route path="/" element={<ContactsPage />} />
            <Route path="/contacts/add" element={<AddContactPage />} />
            <Route
              path="/contacts/:contactId/*"
              element={<ContactInfoPage />}
            />
            <Route path="*" element={<ContactsPage />} />
          </Routes>
        </Section>
      </Container>
    </>
  );
}

export default App;