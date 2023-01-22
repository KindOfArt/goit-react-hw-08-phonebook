import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContactsForm from './Contacts/ContactsForm/ContactsForm';
import FilterField from './FilterField/FilterField';
import ContactsList from './Contacts/ContactsList';

import { fetchAllContacts } from 'redux/contacts/contactsOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <main>
      <ContactsForm />
      <br />
      <FilterField />
      <br />
      <ContactsList />
    </main>
  );
};
