import React from 'react';
import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import { useFetchContactsQuery } from '../../redux/contacts';
import { getFilter, getVisibleList } from '../../redux/contacts';
import { List } from './ContactList.styled';

const ContactList = () => {
  const { data: contactList } = useFetchContactsQuery();
  const filterValue = useSelector(state => getFilter(state));
  const visibledList = getVisibleList({ filterValue, contactList });

  return (
    <List>
      {contactList &&
        visibledList.map(contact => (
          <ContactListItem key={contact.id} {...contact} />
        ))}
    </List>
  );
};

export default ContactList;
