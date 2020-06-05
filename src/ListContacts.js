import React from 'react';
import { Link } from 'react-router-dom'
import Contact from './Contact';

class ListContacts extends React.Component {

  state = {
    query: "",
  }

  updateQuery = e => {
    this.setState({query: e.target.value})
  }

  render = () => {
    let contacts = [...this.props.contacts];

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
          <Link to='/create' className='add-contact'>Add Contact</Link>
        </div>
        <ol className='contacts-list'>
          {contacts.map(contact => <Contact key={contact.id} contact={contact} onDeleteContact={this.props.onDeleteContact} /> )}
        </ol>
      </div>

    )
  }
}

export default ListContacts;
