import api from './api';

interface User {
  username: string;
  password: string;
  email?: string;
}

interface AuthResponse {
  token: string;
  user: any;
}

export const registerUser = async (userData: User): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/users/register', userData);
  return response.data;
};

export const loginUser = async (credentials: { username: string; password: string }): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/users/login', credentials);
  return response.data;
};