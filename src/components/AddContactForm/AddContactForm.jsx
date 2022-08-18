import { Label, StyledField } from './AddContactForm.styled';
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
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const AddContactForm = () => {
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
  });

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      onSubmit={onSubmitForm}
      validationSchema={contactSchema}
    >
      {({ values, handleChange, handleSubmit, isSubmitting, handleBlur }) => (
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
            <PhoneInput
              inputStyle={{
                width: '270px',
                height: '40px',

                fontSize: '14px',
                paddingLeft: '48px',
                borderColor: '#2b2b2b',
                borderRadius: '0px',
              }}
              buttonStyle={{ borderColor: '#2b2b2b', borderRadius: '0px' }}
              dropdownStyle={{ width: '270px' }}
              inputProps={{ name: 'phone' }}
              country={'ua'}
              onChange={(phoneNumber, country, e) => {
                handleChange(e);
              }}
              onBlur={handleBlur}
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
};

export default AddContactForm;
