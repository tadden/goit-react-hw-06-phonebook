import './App.css';
import { useState, useEffect } from 'react';
import Container from 'Componets/Container';
import ContactForm from 'Componets/ContactForm';
import ContactList from 'Componets/ContactList';
import Filter from 'Componets/Filter';
import shortId from 'shortid';


function findStorageContacts() {
  return JSON.parse(localStorage.getItem('contacts')) ?? []
}

export default function App() {
  const [contacts, setContacts] = useState(() => findStorageContacts());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])


  const addContact = ({ name, number }) => {

    const newContact = {
      id: shortId.generate(),
      name: name,
      number: number,
    };
    if (
      contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase()) ||
      contacts.find(contact => contact.number === newContact.number)
    ) {
      alert(`${newContact.name} contact is already exists!`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
  };


  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };
    
    
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = filterContacts();
  
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <Filter value={filter} onChange={changeFilter} />
      <h2>Contacts</h2>
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </Container>
  );
};
