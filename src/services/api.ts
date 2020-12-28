import axios from 'axios';

// Connection made with the api
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
