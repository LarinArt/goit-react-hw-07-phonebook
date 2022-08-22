import PropTypes from 'prop-types';
import { FaTrash, FaUserEdit } from 'react-icons/fa';
import { Wrapper, StyledLink, Name, Number, Label } from './Contact.styled';
import Modal from 'components/ui/Modal';
import useToggleState from 'hooks/UseToggleState';
import { ContactModalContent } from '../../ContactModalContent';
import { ContactActios } from './ContactActions';

export const Contact = ({ id, name, phone }) => {
  const { showModal, toggleModal } = useToggleState(false);
  return (
    <>
      {showModal && (
        <Modal onClose={toggleModal} title={name}>
          <ContactModalContent id={id} name={name} toggleModal={toggleModal} />
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
        <ContactActios
          onClick={toggleModal}
          icon={<FaTrash />}
          path={`/contacts/${id}`}
          linkIcon={<FaUserEdit />}
        />
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
