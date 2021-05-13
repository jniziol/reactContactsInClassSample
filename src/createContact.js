import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateContact = (props) => {
  const history = useHistory();

  const [inputs, setInput] = useState({
    avatarURL: "",
    name: "",
    email: "",
  });

  const onFieldUpdate = (e) => {
    e.persist();
    setInput(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addContact(inputs);
    setInput({avatarURL: "", name: "", email: ""})
    history.push("/");
  }

  return (
    <div>
      <a className='close-create-contact' href='/'>Close</a>
      <form onSubmit={handleSubmit} className='create-contact-form'>
        <div className='create-contact-details'>
          <input onChange={onFieldUpdate} type="text" name='avatarURL' placeholder='avatarURL' value={inputs.avatarURL}/>
          <input onChange={onFieldUpdate} type='text' name='name' placeholder='Name' value={inputs.name}/>
          <input onChange={onFieldUpdate} type='text' name='email' placeholder='Email' value={inputs.email}/>
          <button>Add Contact</button>
        </div>
      </form>
    </div>
  )
}

export default CreateContact