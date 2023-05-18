import axios from 'axios';

axios.defaults.baseURL = 'https://64664418ba7110b6639c25a1.mockapi.io/api/v1';

export const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addNewContact = async ({ name, number }) => {
  const response = await axios.post('/contacts', { name, number });
  return response.data;
};

export const deleteContactById = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
