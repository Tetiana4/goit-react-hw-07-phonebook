import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAddContactMutation } from '../../redux/Contacts';
import { Spinner } from '../../Spinner/Spinner';
import { Label, Button, Input } from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, { isLoading }] = useAddContactMutation();
  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    const resetForm = () => {
      setName('');
      setNumber('');
    };

    event.preventDefault();
    addContact({ name, number });
    resetForm();
  };

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
        <Button type="submit">{isLoading ? <Spinner /> : 'Add contact'}</Button>
      </form>
    </div>
  );
}

export default ContactForm;
