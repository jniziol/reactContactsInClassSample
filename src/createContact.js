import React, { Component } from 'react';

class CreateContact extends Component {
  state = {
    avatarURL: "",
    name: "",
    email: "",
  }

  onFieldUpdate = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({avatarURL: "", name: "", email: ""})
  }

  render() {
    return (
      <div>
        <a className='close-create-contact' href='/'>Close</a>
        <form onSubmit={this.handleSubmit} className='create-contact-form'>
          <div className='create-contact-details'>
            <input onChange={this.onFieldUpdate} type="text" name='avatarURL' placeholder='avatarURL' value={this.state.avatarURL}/>
            <input onChange={this.onFieldUpdate} type='text' name='name' placeholder='Name' value={this.state.name}/>
            <input onChange={this.onFieldUpdate} type='text' name='email' placeholder='Email' value={this.state.email}/>
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateContact