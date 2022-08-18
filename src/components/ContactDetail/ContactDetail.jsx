import { FaTrash, FaUserEdit } from 'react-icons/fa';
import {
  Wrapper,
  PersonalData,
  Name,
  Label,
  Phone,
  ButtonWrapper,
  Button,
  EditButton,
} from './ContactDetail.styled';
import { useParams } from 'react-router-dom';
import { useGetContactByidQuery } from 'store/contact-api';
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import Modal from 'components/ui/Modal';
import useToggleState from 'hooks/UseToggleState';
import DeletingContact from 'components/ContactList/ContactsListAction/DeletingContact';

const ContactDetail = () => {
  const { showModal, toggleModal } = useToggleState(false);

  const { contactId } = useParams();

  const {
    data: contact,
    isFetching,
    error,
  } = useGetContactByidQuery(contactId);

  return (
    <>
      {showModal && (
        <Modal onClose={toggleModal} title={contact.name}>
          <DeletingContact
            id={contactId}
            name={contact.name}
            toggleModal={toggleModal}
          />
        </Modal>
      )}

      {isFetching && <Loader />}
      {error && <NotFound data={error.data} status={error.status} />}
      {contact && (
        <Wrapper>
          <PersonalData>
            <Name>{contact.name}</Name>
            <Phone>
              <Label>Phone: </Label>
              {contact.phone}
            </Phone>
          </PersonalData>
          <ButtonWrapper>
            <Button type="button" onClick={toggleModal}>
              <FaTrash />
            </Button>
            <EditButton to="edit" type="button">
              <FaUserEdit />
            </EditButton>
          </ButtonWrapper>
        </Wrapper>
      )}
    </>
  );
};

export default ContactDetail;
