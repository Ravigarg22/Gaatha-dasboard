import axios from 'axios';
import globals from '../constants/globals';

const API = axios.create({
  baseURL: globals.DASHBOARD_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
