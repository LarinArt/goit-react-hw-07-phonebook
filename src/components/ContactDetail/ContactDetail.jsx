import { FaTrash, FaUserEdit } from 'react-icons/fa';
import {
  ContactDetailWrapper,
  PersonalData,
  Name,
  Label,
  Phone,
  ButtonWrapper,
  Button,
  EditButton,
} from './ContactDetail.styled';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useGetContactByidQuery } from 'store/contact-api';
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import Modal from 'components/ui/Modal';
import useToggleState from 'hooks/UseToggleState';
import DeletingContact from 'components/ContactList/ContactsListAction/DeletingContact';
import { Suspense } from 'react';
const ContactDetail = () => {
  const { showModal, toggleModal } = useToggleState(false);
  const location = useLocation();
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
        <ContactDetailWrapper>
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
            <EditButton to="edit" state={{ from: location }}>
              <FaUserEdit />
            </EditButton>
          </ButtonWrapper>
          <Suspense>
            <Outlet />
          </Suspense>
        </ContactDetailWrapper>
      )}
    </>
  );
};
export default ContactDetail;
