import { ContactForm } from 'components/ContactForm';
import {
  useChangeContactMutation,
  useGetContactByidQuery,
} from 'store/contacts-slice';
import { useParams, useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ChangeContactPage = () => {
  const { contactId } = useParams();
  const navigate = useNavigate();

  const [changeContact] = useChangeContactMutation();
  const { data: contact } = useGetContactByidQuery(contactId);

  const onSubmitForm = values => {
    if (
      JSON.stringify(values) ===
      JSON.stringify({
        name: contact.name,
        phone: contact.phone,
      })
    ) {
      Notify.warning('Try to change something first.');
      return;
    }
    changeContact({ contactId, ...values });
    navigate(`/contacts/${contactId}`);
    Notify.success('The contact has been successfully changed.');
  };
  return (
    <ContactForm
      onSubmit={onSubmitForm}
      contact={contact}
      edit={true}
      text={'Change contact'}
    />
  );
};

export default ChangeContactPage;
