import { FaTrash, FaUserEdit } from 'react-icons/fa';
import {
  ContactDetailWrapper,
  PersonalData,
  Name,
  Label,
  Phone,
} from './ContactDetail.styled';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useGetContactByidQuery } from 'store/contacts-slice';
import { Loader } from 'components/ui/Loader';
import NotFound from 'components/NotFound';
import Modal from 'components/ui/Modal';
import useToggleState from 'hooks/UseToggleState';
import { ContactModalContent } from 'components/ContactModalContent';
import { Suspense } from 'react';
import { ContactActios } from 'components/ContactList/Contact/ContactActions';

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
          <ContactModalContent
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
          <ContactActios
            onClick={toggleModal}
            icon={<FaTrash />}
            path={'edit'}
            linkIcon={<FaUserEdit />}
            state={{ from: location }}
          />
          <Suspense>
            <Outlet />
          </Suspense>
        </ContactDetailWrapper>
      )}
    </>
  );
};
export default ContactDetail;
