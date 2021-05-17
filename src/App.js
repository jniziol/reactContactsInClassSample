import React, { useState, useEffect } from 'react';
import './App.css';
import Contact from './Contact'
import Header from './Header'
import CreateContact from './createContact'
import { Switch, Route } from "react-router-dom";
import ContactDetails from './ContactDetails';
import Search from './Search';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    setContacts(JSON.parse(contacts) || []);
  }, []);

  const filterContacts = (value) => {
    setQuery(value);
  }

  const addContact = (contact) => {
    setContacts(currentContacts => {
      const contacts = [...currentContacts, contact];
      localStorage.setItem('contacts', JSON.stringify(contacts));
      return contacts;
    });
  }

  const removeContact = (id) => {
    setContacts(currentContacts => {
      const contacts = currentContacts.filter(contact => contact.id !== id);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      return contacts;
    });
  }


  let display;

  if (contacts.length > 0) {
    display = contacts
      .filter(contact => contact.name.includes(query))
      .map((contact) => (
        <Contact key={contact.id} contact={contact} removeContact={removeContact} />
    ));
  } else {
    display = <h2>There are no contacts to display</h2>;
  }

  return (
    <Switch>
      <Route exact path="/">
        <div className='list-contacts'>
          <Header filterContacts={filterContacts} />
          <ol className='contacts-list'>
            {
              contacts
                .filter(contact => contact.name.includes(query))
                .map((contact) => (
                  <Contact key={contact.id} contact={contact} removeContact={removeContact} />
              ))
            }
          </ol>
        </div>
      </Route>
      <Route path="/contact/new">
        <CreateContact addContact={addContact}/>
      </Route>

      <Route path="/contacts/:id">
        <ContactDetails contact={contacts}/>
      </Route>

      <Route path="/search">
        <Search contacts={contacts}/>
      </Route>
    </Switch>
  );

}

export default App;