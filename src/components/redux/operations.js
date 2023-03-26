import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64204f8725cb65721046c2c6.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, API) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (evt) {
      return API.rejectWithValue(evt.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, API) => {
    try {
      const { name, number } = contact;
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (evt) {
      return API.rejectWithValue(evt.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, API) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (evt) {
      return API.rejectWithValue(evt.message);
    }
  }
);