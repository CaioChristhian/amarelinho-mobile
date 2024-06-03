import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3000', // Substitua pelo URL do seu servidor backend
});

export default api;
