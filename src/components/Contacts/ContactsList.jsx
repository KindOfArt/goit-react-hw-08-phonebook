import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectContacts } from 'redux/contacts/contactsSelectors';
import { selectFilterValue } from 'redux/filter/filterSelectors';

import ContactsItem from './ContactsItem/ContactsItem';

const ContactsList = () => {
  const contactsList = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterValue);

  const filteredContacts = useMemo(
    () =>
      contactsList.filter(({ name }) =>
        name.toLowerCase().includes(filterValue.toLowerCase())
      ),
    [contactsList, filterValue]
  );

  return (
    <div>
      {filteredContacts.length > 0 && (
        <ul>
          {filteredContacts.map(({ id, name, phone }) => (
            <ContactsItem
              key={id}
              serialNumber={id}
              name={name}
              phone={phone}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactsList;
