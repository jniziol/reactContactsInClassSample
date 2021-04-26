import React from 'react';

export default function Header() {
  return (
    <div className='list-contacts-top'>
      <input
        className='search-contacts'
        type='text'
        placeholder='Filter Contacts'
      />
      <a href="" className='add-contact'>Add Contact</a>
    </div>
  );
}