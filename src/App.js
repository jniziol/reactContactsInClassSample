import React from 'react';
import './App.css';
import Contact from './Contact';

class App extends React.Component {
  state = {
    query: "",
    contacts: [
      {
        "id": "1",
        "name": "Captain America",
        "email": "cap@avengers.com",
        "avatarURL": "https://66.media.tumblr.com/3956a5fb5563f14f6b060dc98c3a2dda/tumblr_nogjowrCWK1t7cmmpo1_1280.png",
      },
      {
        "id": "2",
        "name": "Ironman",
        "email": "ironman@avengers.com",
        "avatarURL": "https://ironmanhelmetshop.com/wp-content/uploads/2015/10/ironman_1x.jpg",
      },
      {
        "id": "3",
        "name": "Thanos",
        "email": "thanos@avengers.com",
        "avatarURL": "https://cdn.dribbble.com/users/458522/screenshots/4588058/thanos_1x.jpg",
      },
      {
        "id": "4",
        "name": "Ultron 6",
        "email": "ultron-6@avengers.com",
        "avatarURL": "https://vignette.wikia.nocookie.net/marveldatabase/images/3/36/Ultron_%28Earth-616%29_from_Avengers_Vol_1_66_0001.jpg/revision/latest/scale-to-width-down/340?cb=20161020042955",
      },
    ]
  }

  removeContact = contact => {
    this.setState(previousState => ({contacts: previousState.contacts.filter(stateContact => stateContact !== contact)}));
  }

  createContact = (name, email, avatar) => {
    this.setState(previousState => ({
      contacts: [...previousState.contacts, {
        name: name,
        email: email,
        avatarURL: avatar,
      }]
    }))
  }

  updateQuery = e => {
    this.setState({query: e.target.value})
  }

  render = () => {
    let contacts = [...this.state.contacts];

    if (this.state.query) {
      contacts = contacts.filter(contact => contact.name.includes(this.state.query));
    }

    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Filter Contacts'
            value={this.state.query}
            onChange={this.updateQuery}
          />
          <a href="" className='add-contact' onClick={this.addContact} >Add Contact</a>
        </div>
        <ol className='contacts-list'>
          {contacts.map(contact => <Contact key={contact.id} contact={contact} onRemoveContact={this.removeContact} /> )}
        </ol>
      </div>
    );
  }
}

export default App;