import { Container } from 'components/ui/Container';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Message from '../components/ui/Message';
import { useGetContactsQuery } from 'store/contacts-slice';
import { RouterLink, LinkText } from 'components/ui';
import { BsFillPersonPlusFill } from 'react-icons/bs';

const HomePage = () => {
  const { data } = useGetContactsQuery();

  return (
    <Container title="Contacts">
      <RouterLink to="/contacts/add">
        <LinkText>Add new contact</LinkText>
        <BsFillPersonPlusFill size={20} />
      </RouterLink>
      <Filter />
      {!data || data.length === 0 ? <Message /> : <ContactList />}
    </Container>
  );
};

export default HomePage;
