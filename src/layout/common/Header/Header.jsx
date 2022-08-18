import { Title } from './Header.styled';
import { Navigation } from '../Navigation/Navigation';
import Container from 'components/ui/Container/Container';

export const Header = () => {
  return (
    <>
      <Container>
        <Navigation />
        <Title to="/">Phonebook</Title>
      </Container>
    </>
  );
};

export default Header;
