import axios from 'axios';

// Connection made with the api
const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
