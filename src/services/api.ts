import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333', // Substitua pelo URL do seu servidor backend
});

export default api;