import axios from 'axios';

const api = axios.create({
  baseURL: 'https://amarelinho-backend.onrender.com/', // Substitua pelo URL do seu servidor backend
});

export default api;
