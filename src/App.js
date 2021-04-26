import React from 'react';
import './App.css';
import Contacts from './Contacts';
import Header from './Header'

function App() {
  return (
    <div className='list-contacts'>
      <Header />
      <Contacts />
    </div>
  );
}

export default App;