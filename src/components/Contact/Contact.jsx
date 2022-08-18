import PropTypes from 'prop-types';
import { FaTrash, FaUserEdit } from 'react-icons/fa';
import {
  Wrapper,
  StyledLink,
  Name,
  Number,
  Label,
  ButtonWrapper,
  Button,
  ButtonLink,
} from './Contact.styled';
import Modal from 'components/ui/Modal';
import useToggleState from 'hooks/UseToggleState';
import DeletingContact from 'components/ContactList/ContactsListAction/DeletingContact';
const Contact = ({ id, name, phone }) => {
  const { showModal, toggleModal } = useToggleState(false);
  return (
    <>
      {showModal && (
        <Modal onClose={toggleModal} title={name}>
          <DeletingContact id={id} name={name} toggleModal={toggleModal} />
        </Modal>
      )}
      <Wrapper>
        <StyledLink to={`/contacts/${id}`}>
          <Name>{name}</Name>
          <Number>
            <Label>Phone: </Label>
            {phone}
          </Number>
        </StyledLink>
        <ButtonWrapper>
          <Button type="button" onClick={toggleModal}>
            <FaTrash />
          </Button>
          <ButtonLink to={`/contacts/${id}`}>
            <FaUserEdit />
          </ButtonLink>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};
Contact.prototype = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string,
  company: PropTypes.string,
  photo: PropTypes.string,
};
export default Contact;
