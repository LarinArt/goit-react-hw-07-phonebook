import Container from 'components/ui/Container';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Message from '../components/ui/Message';
import { useGetContactsQuery } from 'store/contact-api';
import { Button, ButtonText } from '../layout/common/Header/Header.styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';

function HomePage() {
  const { data } = useGetContactsQuery();

  return (
    <Container title="Contacts">
      <Button to="/contacts/add">
        <ButtonText>Add new contact</ButtonText>
        <BsFillPersonPlusFill size={20} />
      </Button>
      <Filter />
      {!data || data.length === 0 ? <Message /> : <ContactList />}
    </Container>
  );
}

export default HomePage;
