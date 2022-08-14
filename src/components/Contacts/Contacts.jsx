import { useSelector } from 'react-redux';
import Contact from './Contact';
import { List, Item } from './Contacts.styled';
import Loader from 'components/Loader';
import { useGetContactsQuery } from 'store/contact-api';
import NotFound from 'components/NotFound';
import { getFilter } from 'store/contact-selectors';

function ContactList() {
  const { data: contacts, isFetching, error } = useGetContactsQuery();
  const { filter } = useSelector(state => getFilter(state));

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      )
    );
  };

  const filteredContactList = filtredContacts();

  return (
    <List>
      {isFetching && <Loader />}
      {error && <NotFound data={error.data} status={error.status} />}
      {contacts &&
        filteredContactList.map(({ id, name, phone }) => {
          return (
            <Item key={id}>
              <Contact id={id} name={name} phone={phone} />
            </Item>
          );
        })}
    </List>
  );
}

export default ContactList;
