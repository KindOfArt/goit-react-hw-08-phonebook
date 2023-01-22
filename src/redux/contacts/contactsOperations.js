import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'contactsAPI';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const contacts = await addContact(newContact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContactById = createAsyncThunk(
  'contacts/deleteContactById',
  async (contactId, { rejectWithValue }) => {
    try {
      const contact = await deleteContact(contactId);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
