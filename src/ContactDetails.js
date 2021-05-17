import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ContactDetails = () => {
  const [contact, setContact] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getContact = async () => {
      const response = await fetch(`http://localhost:5000/contacts/${id}`);
      const contact = await response.json();

      setContact(contact);
    }

    getContact();
  },[]);

  return (
    <>
      {contact.name}
      {contact.email}
    </>
  );
}

export default ContactDetails;