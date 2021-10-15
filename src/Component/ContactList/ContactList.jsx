import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import { getVisibleList } from '../../redux/selectors';
import { List, ListItem, Button } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getVisibleList);
  const dispatch = useDispatch();
  const onDelete = id => dispatch(actions.deleteContact(id));

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <Button onClick={() => onDelete(id)}>delete</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propeTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};
