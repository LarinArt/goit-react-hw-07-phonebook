import { Label, StyledField } from './ContactForm.styled';
import { Title } from 'components/ui/Title';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'store/contact-api';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Report } from 'notiflix';
import { Button } from 'components/ui/Button';

function ContactForm() {
  const navigate = useNavigate();

  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const onSubmitForm = ({ name, phone }) => {
    contacts.some(contact => contact.name === name)
      ? Report.warning(
          `${name}`,
          'This user is already in the contact list.',
          'OK',
        )
      : createContact({ name, phone });

    navigate('/');
  };

  const contactSchema = yup.object({
    name: yup.string().required().min(3).max(30),
    phone: yup.number().required(),
  });

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      onSubmit={onSubmitForm}
      validationSchema={contactSchema}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <Label>
            <Title>Name</Title>
            <StyledField
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
            />
            <ErrorMessage name="name" component="div" />
          </Label>
          <Label>
            <Title>Phone</Title>
            <StyledField
              type="tel"
              name="phone"
              onChange={handleChange}
              value={values.phone}
            />
            <ErrorMessage name="phone" component="div" />
          </Label>
          <Button type="submit" disabled={isSubmitting}>
            Add contact
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
