import React from 'react';
import './App.css';
import Contact from './Contact'
import Header from './Header'
import CreateContact from './createContact'
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    query: "",
    contacts: []
  }

  componentDidMount = async () => {
    const response = await fetch('https://60897e8a8c8043001757eed6.mockapi.io/api/contacts');
    const contacts = await response.json();

    this.setState({contacts});
  }

  filterContacts = (value) => {
    this.setState({query: value});
  }

  addContact = (contact) => {
    this.setState(currentState => {
      return {
        contacts: [...currentState.contacts, contact]
      }
    });
  }

  removeContact = (id) => {
    this.setState(currentState => {
      return {
        contacts: currentState.contacts.filter(contact => contact.id !== id)
      }
    });
  }

  render() {
    let display;

    if (this.state.contacts.length > 0) {
      display = this.state.contacts
        .filter(contact => contact.name.includes(this.state.query))
        .map((contact) => (
          <Contact key={contact.id} contact={contact} removeContact={this.removeContact} />
      ));
    } else {
      display = <h2>There are no contacts to display</h2>;
    }

    return (
      <Switch>
        <Route exact path="/">
          <div className='list-contacts'>
            <Header filterContacts={this.filterContacts} />
            <ol className='contacts-list'>
              {
                this.state.contacts
                  .filter(contact => contact.name.includes(this.state.query))
                  .map((contact) => (
                    <Contact key={contact.id} contact={contact} removeContact={this.removeContact} />
                ))
              }
            </ol>
          </div>
        </Route>
        <Route exact path="/newContact" render={({history}) => (
          <CreateContact
            addContact={(contact) => {
              this.addContact(contact);
              history.push('/');
            }}
          />
        )} />
      </Switch>
    );
  }
}

export default App;