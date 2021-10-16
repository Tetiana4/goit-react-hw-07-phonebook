import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Spinner } from '../../helpers/Spinner';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsSlice';
import ContactList from '../ContactList/ContactList';

import { Label, Button, Input } from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const { data: contacts, isFetching } = useFetchContactsQuery(name);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const dispatch = useDispatch();
  const propSubmit = value => dispatch(actions.addContact(value));

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    const resetForm = () => {
      setName('');
      setNumber('');
    };

    event.preventDefault();
    propSubmit({ name, number });
    resetForm();
  };
  console.log('data: ', contacts);
  console.log('isFetching: ', isFetching);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            placeholder="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
            id={nameInputId}
          />
        </Label>
        <Label htmlFor={numberInputId}>
          Number
          <Input
            placeholder="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
            id={numberInputId}
          />
        </Label>
        <Button type="submit">Add contact</Button>
        {isFetching && <Spinner />}
        {contacts && (
          <ContactList
            contacts={contacts}
            onDelete={deleteContact}
            deleting={isDeleting}
          />
        )}
      </form>
    </div>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  propSubmit: PropTypes.func,
};
