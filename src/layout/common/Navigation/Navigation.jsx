import { ContactsNavLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ContactsNavLink to="/">Home</ContactsNavLink>
      <ContactsNavLink to="/contacts/add">Add new contact</ContactsNavLink>
    </nav>
  );
};

export default Navigation;
