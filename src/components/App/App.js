import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import { useFetchContactsQuery } from '../../redux/contactsSlice';
import ContactList from '../ContactList/ContactList';
import { Spinner } from '../../helpers/Spinner';

import { Container, Title } from './App.styled';

export default function App() {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <Filter />
      {isFetching && <Spinner />}
      {contacts && <ContactList contacts={contacts} />}
    </Container>
  );
}
