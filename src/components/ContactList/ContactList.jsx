import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propeTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};
