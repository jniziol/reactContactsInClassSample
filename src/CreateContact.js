import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CreateContact extends Component {

  state = {
    name: "",
    email: "",
    avatarUrl: "",
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.onCreateContact(this.state.name, this.state.email, this.state.avatarUrl);
    this.setState({name: "", email: "", avatarUrl: ""})
  }

  formFieldsUpdate = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
        <Link className='close-create-contact' to='/'>
          Close
        </Link>
        <form onSubmit={this.handleSubmit} className='create-contact-form'>
          <div className='create-contact-details'>
            <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={this.formFieldsUpdate}/>
            <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={this.formFieldsUpdate}/>
            <input type='text' name='avatarUrl' placeholder='Avatar URL' value={this.state.avatarUrl} onChange={this.formFieldsUpdate}/>
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateContact