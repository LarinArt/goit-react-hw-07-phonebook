import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { MainTitle, Label, StyledField } from './ContactForm.styled';
import { Title } from '../ui/Title';
import { Button } from 'components/ui/Button';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export const ContactForm = ({ onSubmit, contact, text, edit = false }) => {
  let initialValues = null;
  !edit
    ? (initialValues = { name: '', phone: '' })
    : (initialValues = {
        name: contact.name,
        phone: contact.phone,
      });

  const contactSchema = yup.object({
    name: yup.string().required().min(3).max(30),
    phone: yup.string().required().min(5).max(30),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={contactSchema}
    >
      {({ values, handleChange, handleSubmit, handleBlur }) => (
        <>
          {edit && <MainTitle>{`Edit Contact — "${contact.name}"`}</MainTitle>}
          <Form onSubmit={handleSubmit}>
            <Label>
              <Title>Name</Title>
              <StyledField type="text" name="name" onChange={handleChange} />
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
                  border: 'none',
                  borderBottom: '1px solid',
                  borderColor: '#2b2b2b',
                  borderRadius: '0px',
                }}
                buttonStyle={{
                  border: 'none',
                  borderBottom: '1px solid',
                  borderColor: '#2b2b2b',
                  borderRadius: '0px',
                }}
                dropdownStyle={{ width: '270px' }}
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: true,
                }}
                country={'ua'}
                onChange={(phoneNumber, country, e) => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
                value={values.phone}
              />
              <ErrorMessage name="phone" component="div" />
            </Label>
            <Button type="submit">{text}</Button>
          </Form>
        </>
      )}
    </Formik>
  );
};
