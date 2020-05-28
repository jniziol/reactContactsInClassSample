import React from 'react';

class ContactsTop extends React.Component {
  state = {
    nameField: "",
    emailField: "",
    imageField: "",
  }

  updateNameField = (e) => {    
    this.setState({nameField: e.target.value});
  }

  updateEmailField = (e) => {    
    this.setState({emailField: e.target.value});
  }

  updateImageField = (e) => {    
    this.setState({imageField: e.target.value});
  }

  createContact = (e) => {
    this.props.createContact(this.state.nameField, this.state.emailField, this.state.imageField);
    this.setState({emailField: "", nameField: "", imageField: ""})
    e.preventDefault();
  }

  render = () => {
    return (
    <div className='list-contacts-top'>
      <form onSubmit={this.createContact}>
        <input
          className='search-contacts'
          type='text'
          placeholder='Name'
          value={this.state.nameField}
          onChange={this.updateNameField}
        />
        <input
          className='search-contacts'
          type='text'
          placeholder='Email'
          value={this.state.emailField}
          onChange={this.updateEmailField}
        />
        <input
          className='search-contacts'
          type='text'
          placeholder='Image'
          value={this.state.imageField}
          onChange={this.updateImageField}
        />
        <button>Submit</button>
      </form>
    </div> 
    )
  }

}

export default ContactsTop
