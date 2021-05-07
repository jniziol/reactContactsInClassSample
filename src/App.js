import React, { useState, useEffect } from 'react';
import './App.css';
import Contact from './Contact'
import Header from './Header'
import CreateContact from './createContact'
import { Switch, Route } from "react-router-dom";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/contacts');
      const contacts = await response.json();

      setContacts(contacts);
    }

    fetchData();
  }, [])

  const filterContacts = (value) => {
    setQuery(value);
  }

  const addContact = async (contact) => {
    const contacts = await fetch(`http://localhost:5000/contacts/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    });

    setContacts(currentContacts => {
      return [...currentContacts, contact]
    });
  }

  const removeContact = async (id) => {
    await fetch(`http://localhost:5000/contacts/${id}`, {
      method: 'DELETE'
    });

    setContacts(currentContacts => {
      return currentContacts.filter(contact => contact.id !== id)
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
      <Route exact path="/newContact" render={({history}) => (
        <CreateContact
          addContact={(contact) => {
            addContact(contact);
            history.push('/');
          }}
        />
      )} />
    </Switch>
  );

}

export default App;