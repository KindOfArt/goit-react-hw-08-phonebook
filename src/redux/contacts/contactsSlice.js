import { createSlice } from '@reduxjs/toolkit';
import {
  addNewContact,
  deleteContactById,
  fetchAllContacts,
} from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchAllContacts.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [fetchAllContacts.fulfilled]: (state, { payload }) => ({
      ...state,
      items: [...payload],
      isLoading: false,
      error: null,
    }),
    [fetchAllContacts.rejected]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },
    [addNewContact.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [addNewContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
      isLoading: false,
      error: null,
    }),
    [addNewContact.rejected]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },
    [deleteContactById.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [deleteContactById.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== payload.id),
        isLoading: false,
        error: null,
      };
    },
    [deleteContactById.rejected]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
