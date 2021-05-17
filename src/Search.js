import React from 'react';
import { useLocation } from 'react-router-dom';

const Search = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const query = searchParams.get('query')

  const contacts = props.contacts.filter(contact => contact.email.includes(query))

  console.log(contacts)
  return (
    <>
      {contacts.map(contact => <>{contact.name}</>)}
    </>
  );
}

export default Search;