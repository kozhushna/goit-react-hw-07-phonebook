import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from '../../redux/contactsSlice';

import './ContactForm.css';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const existen = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existen) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(
      addContact({
        name: name,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label">
        Name
        <input
          type="text"
          name="name"
          className="input"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="label">
        Number
        <input
          type="tel"
          name="number"
          className="input"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className="button">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
