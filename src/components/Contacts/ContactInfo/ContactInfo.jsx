import { FaTrash, FaUserEdit, FaArrowLeft } from 'react-icons/fa';
import {
  Wrapper,
  GoBack,
  PersonalData,
  Name,
  Label,
  Phone,
  ButtonWrapper,
  Button,
  EditButton,
} from './ContactInfo.styled';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import ChangeContactPage from 'pages/ChangeContactPage';
import { useGetContactByidQuery } from 'store/contact-api';
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import Modal from 'components/ui/Modal';
import useShowModal from 'hooks/useShowModal';
import DeletingContact from 'components/DeletingContact';

function ContactInfo() {
  const { showModal, togleModal } = useShowModal(false);

  const navigate = useNavigate();
  const { contactId } = useParams();

  const {
    data: contact,
    isFetching,
    error,
  } = useGetContactByidQuery(contactId);

  return (
    <>
      {showModal && (
        <Modal onClose={togleModal} title={contact.name}>
          <DeletingContact
            id={contactId}
            name={contact.name}
            togleModal={togleModal}
          />
        </Modal>
      )}

      {isFetching && <Loader />}
      {error && <NotFound data={error.data} status={error.status} />}
      {contact && (
        <Wrapper>
          <GoBack type="button" onClick={() => navigate('/')}>
            <FaArrowLeft />
          </GoBack>
          <PersonalData>
            <Name>{contact.name}</Name>
            <Phone>
              <Label>Phone: </Label>
              {contact.phone}
            </Phone>
          </PersonalData>
          <ButtonWrapper>
            <Button type="button" onClick={togleModal}>
              <FaTrash />
            </Button>
            <EditButton to="edit" type="button">
              <FaUserEdit />
            </EditButton>
          </ButtonWrapper>
        </Wrapper>
      )}

      <Routes>
        <Route path="edit" element={<ChangeContactPage />} />
      </Routes>
    </>
  );
}

export default ContactInfo;
