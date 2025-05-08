import RESTClient from './RESTClient/RESTClient'

const API_URL = 'https://biblioteka-backend-btd3.onrender.com'
const client = new RESTClient(
  API_URL,
  'BibliotekaKey',
  'api',
  '/auth'
);

export default client;