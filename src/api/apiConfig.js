import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const config = {
  baseURL,
  timeout: 100000,
  headers: {
    'accept': '*/*',
    'Content-Type': 'application/json',
  },
  params: {},
};

const api = axios.create(config);

export default api;