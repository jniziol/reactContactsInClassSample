import React from 'react';
import './App.css';
import Contact from './Contact'
import Header from './Header'

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

  removeContact = (id) => {
    this.setState(currentState => {
      return {
        contacts: currentState.contacts.filter(contact => contact.id !== id)
      }
    });
  }

  render() {
    return (
      <div className='list-contacts'>
        <Header filterContacts={this.filterContacts} />
        <ol className='contacts-list'>
          {this.state.contacts
            .filter(contact => contact.name.includes(this.state.query))
            .map((contact) => (
              <Contact key={contact.id} contact={contact} removeContact={this.removeContact} />
          ))}
        </ol>
      </div>
    );
  }
}

export default App;