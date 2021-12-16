import './App.css';
import Container from 'Componets/Container';
import ContactForm from 'Componets/ContactForm';
import ContactList from 'Componets/ContactList';
import Filter from 'Componets/Filter';


export default function Phonebook() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </Container>
  );
};

  
  
