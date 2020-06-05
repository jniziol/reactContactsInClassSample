import React from 'react';
import './App.css';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  state = {
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

  createContact = (name, email, avatarURL) => {
    this.setState(previousState => ({
      contacts: [...previousState.contacts, {
        name: name,
        email: email,
        avatarURL: avatarURL,
      }]
    }))
  }

  render = () => {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <ListContacts
              contacts={this.state.contacts}
              onDeleteContact={this.removeContact}
            />
        )} />

        <Route path='/create' render={(history) => (
          <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }}
          />
        )} />
      </Switch>
    );
  }
}

export default App;