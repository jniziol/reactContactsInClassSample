import React from 'react';
import { Link } from "react-router-dom";

 class Header extends React.Component {
  state = {
    filterInput: ""
  }

  updateFilterInput = (e) => {
    this.setState({filterInput: e.target.value});
    this.props.filterContacts(e.target.value);
  }

  render() {
    return (
      <div className='list-contacts-top'>
        <input
          className='search-contacts'
          type='text'
          placeholder='Filter Contacts'
          value={this.state.filterInput}
          onChange={this.updateFilterInput}
        />
        <Link to="/newContact" className='add-contact'>Add Contact</Link>
      </div>
    );
  }
}

export default Header;