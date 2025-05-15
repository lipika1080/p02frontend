import axios from 'axios';

const API_BASE_URL = "https://p02backend.azurewebsites.net"

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
