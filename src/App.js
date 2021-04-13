import React, { useEffect, useState } from "react";
import "./styles/App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const LOCAL_STORAGE_KEY = "react-contact-list-contacts";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storageContacs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageContacs) {
      setContacts(storageContacs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  function addContact(contact) {
    setContacts([contact, ...contacts]);
  }

  function removeContact(id) {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className="title">Contacts</p>
        <ContactForm addContact={addContact} />
        <ContactList contacts={contacts} removeContact={removeContact} />
      </header>
    </div>
  );
}

export default App;
