import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { deleteContactById } from 'redux/contacts/contactsOperations';

const ContactsItem = ({ serialNumber, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <p>{serialNumber}</p>
      <p>{name}</p>
      <p>{phone}</p>
      <button
        onClick={() => dispatch(deleteContactById(serialNumber))}
        type="button"
      >
        Delete contact
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  serialNumber: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
};

export default ContactsItem;
