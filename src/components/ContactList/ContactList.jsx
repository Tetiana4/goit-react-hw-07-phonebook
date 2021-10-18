import React from 'react';
import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import { useFetchContactsQuery } from '../../redux/contactSlice';
import { getFilter } from '../../redux/selectors';
import { List } from './ContactList.styled';

const ContactList = () => {
  const { data: contactList } = useFetchContactsQuery();
  const filterValue = useSelector(state => getFilter(state));
  const contacts = contactList?.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase()),
  );
  return (
    <List>
      {contactList &&
        contacts.map(contact => (
          <ContactListItem key={contact.id} {...contact} />
        ))}
    </List>
  );
};

export default ContactList;
