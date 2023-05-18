import ContactForm from 'components/contactForm';
import Filter from 'components/filter';
import { ContactList } from 'components/contactList';

import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
