import React from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/contactSlice';
import { ListItem, Button } from './ContactListItem.styled';

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
  id: PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.number,
};
