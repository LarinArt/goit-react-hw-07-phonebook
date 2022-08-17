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
} from './Contact.styled';
import { useNavigate } from 'react-router-dom';
import Modal from 'components/ui/Modal';
import useShowModal from 'hooks/useShowModal';
import DeletingContact from 'components/DeletingContact';

function Contact({ id, name, phone }) {
  const { showModal, toggleModal } = useShowModal(false);

  const navigate = useNavigate();
  const openEditPage = () => navigate(`/contacts/${id}/edit`);

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
          <Button type="button" onClick={openEditPage}>
            <FaUserEdit />
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

Contact.prototype = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string,
  company: PropTypes.string,
  photo: PropTypes.string,
};

export default Contact;
