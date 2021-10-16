import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Button } from './ContactListItem.styled';
import { useDeleteContactMutation } from '../../redux/contactsSlice';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <ListItem key={id}>
      <span>
        {name}: {number}
      </span>
      <Button onClick={() => deleteContact(id)}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Button>
    </ListItem>
  );
};

export default ContactListItem;

ContactListItem.propeTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};
