import React, { useState } from 'react';
import contactsData from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5)); // Initial state with the first 5 contacts
  const remainingContacts = contactsData.slice(5); // Array of remaining contacts

  // Function to handle adding a random contact
  const addRandomContact = () => {
    if (remainingContacts.length === 0) {
      alert("No more remaining contacts!");
      return;
    }

    // Select a random contact from the remaining contacts
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    // Add the random contact to the array in state
    setContacts(prevContacts => [...prevContacts, randomContact]);
  };

  // Function to handle removing a contact by index
  const removeContact = (index) => {
    const updatedContacts = contacts.filter((contact, i) => i !== index);
    setContacts(updatedContacts);
  };

  // Function to handle sorting contacts by name
  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  };

  // Function to handle sorting contacts by popularity (highest first)
  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th> {/* Added Action column for Delete button */}
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td><img src={contact.pictureUrl} alt={contact.name} style={{ width: '50px', height: '50px' }} /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : null}</td>
              <td>{contact.wonEmmy ? '🌟' : null}</td>
              <td><button onClick={() => removeContact(index)}>Delete</button></td> {/* Delete button */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import contactsData from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5)); // Initial state with the first 5 contacts
  const remainingContacts = contactsData.slice(5); // Array of remaining contacts

  // Function to handle adding a random contact
  const addRandomContact = () => {
    if (remainingContacts.length === 0) {
      alert("No more remaining contacts!");
      return;
    }

    // Select a random contact from the remaining contacts
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    // Add the random contact to the array in state
    setContacts(prevContacts => [...prevContacts, randomContact]);
  };

  // Function to handle removing a contact by index
  const removeContact = (index) => {
    const updatedContacts = contacts.filter((contact, i) => i !== index);
    setContacts(updatedContacts);
  };

  // Function to handle sorting contacts by name
  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  };

  // Function to handle sorting contacts by popularity (highest first)
  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th> {/* Added Action column for Delete button */}
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td><img src={contact.pictureUrl} alt={contact.name} style={{ width: '50px', height: '50px' }} /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : null}</td>
              <td>{contact.wonEmmy ? '🌟' : null}</td>
              <td><button onClick={() => removeContact(index)}>Delete</button></td> {/* Delete button */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;