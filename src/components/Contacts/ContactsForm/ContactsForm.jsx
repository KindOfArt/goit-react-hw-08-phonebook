import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (value, { resetForm }) => {
    const { name: newName, phone: newPhone } = value;

    !contacts.find(
      ({ name, phone }) =>
        name.toLowerCase() === newName.toLowerCase() && phone === newPhone
    )
      ? dispatch(addNewContact({ ...value, id: '' }))
      : alert('This contact is already in your phonebook');

    resetForm();
  };

  return (
    <div>
      <Formik initialValues={{ name: '', phone: '' }} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field
              id="name"
              name="name"
              autoComplete="off"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="enter name..."
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="phone">Number:</label>
            <Field
              type="number"
              id="phone"
              name="phone"
              autoComplete="off"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="enter number..."
              required
            />
          </div>
          <br />
          <button type="submit">Add to contacts</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactsForm;
