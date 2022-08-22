import {
  Text,
  Name,
  List,
  Item,
  ButtonCancel,
  ButtonDelete,
} from './ContactModalContent.styled';
import { useDeleteContactMutation } from 'store/contacts-slice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const ContactModalContent = ({ id, name, toggleModal }) => {
  const navigate = useNavigate();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const deleteSelectedContact = () => {
    deleteContact(id);
    navigate('/');
    Notify.failure(`The ${name} has been removed from your contact list.`);
  };

  return (
    <>
      <Text>
        Are you sure you want to delete a contact <Name>{name}</Name>?
      </Text>
      <List>
        <Item>
          <ButtonCancel type="button" onClick={toggleModal}>
            Cancel
          </ButtonCancel>
        </Item>
        <Item>
          <ButtonDelete type="button" onClick={deleteSelectedContact}>
            {isDeleting ? '...' : 'Delete'}
          </ButtonDelete>
        </Item>
      </List>
    </>
  );
};

ContactModalContent.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
