import Container from 'components/ui/Container';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';
import Message from '../components/ui/Message';
import { useGetContactsQuery } from 'store/contact-api';

function ContactsPage() {
  const { data } = useGetContactsQuery();

  return (
    <Container title="Contacts">
      <Filter />
      {!data || data.length === 0 ? <Message /> : <Contacts />}
    </Container>
  );
}

export default ContactsPage;
