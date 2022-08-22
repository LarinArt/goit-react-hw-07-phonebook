import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export const FormPhoneInput = () => {
  return (
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
    />
  );
};
