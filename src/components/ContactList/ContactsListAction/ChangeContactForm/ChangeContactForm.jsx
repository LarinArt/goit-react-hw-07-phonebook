import { Formik, Form, ErrorMessage } from 'formik';
import { MainTitle, Label, StyledField } from './ChangeContactForm.styled';
import { Title } from '../../../ui/Title';
import { Button } from 'components/ui/Button';
import {
  useChangeContactMutation,
  useGetContactByidQuery,
} from 'store/contact-api';
import { useParams, useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ChangeContactForm = () => {
  const { contactId } = useParams();
  const navigate = useNavigate();

  const [chengeContact, { isLoading: isUpdating }] = useChangeContactMutation();
  const { data: contact } = useGetContactByidQuery(contactId);

  const onSubmitForm = values => {
    if (JSON.stringify(values) === JSON.stringify(initialValues)) {
      Notify.warning('Try to change something first.');
      return;
    }

    chengeContact({ contactId, ...values });
    navigate(`/contacts/${contactId}`);
    Notify.success('The contact has been successfully changed.');
  };

  let initialValues = null;
  if (contact) {
    initialValues = {
      name: contact.name,
      phone: contact.phone,
    };
  }

  return (
    contact && (
      <Formik initialValues={initialValues} onSubmit={onSubmitForm}>
        {({ values, handleChange, handleSubmit, handleBlur }) => (
          <>
            <MainTitle>{`Edit Contact — "${contact.name}"`}</MainTitle>
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
              <Button type="submit">
                {isUpdating ? '...' : 'Change contact'}
              </Button>
            </Form>
          </>
        )}
      </Formik>
    )
  );
};

export default ChangeContactForm;
