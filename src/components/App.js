import React, { useState, useEffect } from 'react';
// import uuid from 'react-native-uuid';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Abilash",
  //     email: "abi@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     name: "Naidu",
  //     email: "naidu@gmail.com"
  //   }
  // ]

  // Add Contact
  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: uuidv4(), ...contact}]);
    console.log(contacts);
    // setContacts([...contacts, contacts]);

  }

  // Delete Contact
  const deleteContact = (id) => {
    const updatedContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(updatedContactList);
  }



  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts.length > 0) {
      setContacts(retriveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
 
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts}  getContactId={deleteContact} />
    </div>
  );
}

export default App;
