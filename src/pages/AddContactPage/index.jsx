import { Container } from 'components/ui/Container';
import { ContactForm } from 'components/ContactForm';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'store/contacts-slice';
import { useNavigate } from 'react-router-dom';
import { Report } from 'notiflix';

const AddContactPage = () => {
  const navigate = useNavigate();

  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const onSubmitForm = values => {
    contacts.some(contact => contact.name === values.name)
      ? Report.warning(
          `${values.name}`,
          'This user is already in the contact list.',
          'OK',
        )
      : createContact(values);
    navigate('/');
  };
  return (
    <Container>
      <ContactForm
        onSubmit={onSubmitForm}
        contact={contacts}
        text={'Add contact'}
      />
    </Container>
  );
};

export default AddContactPage;
