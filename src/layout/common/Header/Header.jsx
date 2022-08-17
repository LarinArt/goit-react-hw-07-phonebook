import { Title } from './Header.styled';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  return (
    <>
      <Navigation />
      <Title to="/">Phonebook</Title>
    </>
  );
};

export default Header;
