import React from 'react';
import './Contact.css';

function Contact(props) {
  return (
    <li className='contact-list-item'>
      <div className='contact-avatar' style={{backgroundImage: `url(${props.contact.avatarURL})`}}/>
      <div className='contact-details'>
        <p>{props.contact.name}</p>
        <p>{props.contact.email}</p>
      </div>
      <button className='contact-remove' onClick={() => props.onDeleteContact(props.contact)}>
        Remove
      </button>
    </li>
  );
}

export default Contact