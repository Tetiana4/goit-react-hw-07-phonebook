import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { Container, Title } from './App.styled';

export default function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <Filter />
      <ContactList />
    </Container>
  );
}
