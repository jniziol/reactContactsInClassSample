import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const [filterInput, setFilterInput] = useState("")
  const history = useHistory();

  const updateFilterInput = (e) => {
    setFilterInput(e.target.value);
  }

  const onSearch = (e) => {
    e.preventDefault();
    history.push({
      pathname: 'search',
      search: `query=${filterInput}`
    });
  }

  return (
    <div className='list-contacts-top'>
      <form onSubmit={onSearch}>
        <input
          className='search-contacts'
          type='text'
          placeholder='Filter Contacts'
          value={filterInput}
          onChange={updateFilterInput}
        />
      </form>

      <Link to="/contact/new" className='add-contact'>Add Contact</Link>
    </div>
  );

}

export default Header;