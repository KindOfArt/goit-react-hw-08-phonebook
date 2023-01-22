import axios from 'axios';

const api_key = '63bb336a32d17a509089f16a';

axios.defaults.baseURL = `https://${api_key}.mockapi.io`;

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(newContact) {
  const { data } = await axios.post('/contacts', newContact);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}
