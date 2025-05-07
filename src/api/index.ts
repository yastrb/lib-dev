import RESTClient from './RESTClient/RESTClient'

const API_URL = 'https://biblioteka-backend-btd3.onrender.com/api/'

const client = new RESTClient(
  API_URL,
  'BibliotekaKey',
  'v1',
  '/auth'
);

export default client;