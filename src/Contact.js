import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact(props) {
  return (
    <li className='contact-list-item'>
      <div className='contact-avatar' style={{backgroundImage: `url(${props.contact.avatarURL})`}}/>
      <div className='contact-details'>
        <p><Link to={`/contact/${props.contact.id}`}>{props.contact.name}</Link></p>
        <p>{props.contact.email}</p>
      </div>
      <button className='contact-remove' onClick={(e) => props.removeContact(props.contact.id)}>
        Remove
      </button>
    </li>
  );
}

export default Contact;