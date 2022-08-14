import { Title, Button, ButtonText } from './Header.styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';

function Header() {
  return (
    <>
      <Title to="/">Phonebook</Title>
      <Button to="/contacts/add">
        <ButtonText>Add new contact</ButtonText>
        <BsFillPersonPlusFill size={20} />
      </Button>
    </>
  );
}

export default Header;
