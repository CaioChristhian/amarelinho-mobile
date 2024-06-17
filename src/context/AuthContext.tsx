import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api'; // Verifique se o caminho está correto
import { AuthContextType, User } from '../types';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadStoredData = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };

    loadStoredData();
  }, []);

  const login = async (email: string, password: string) => {
    try {
        const response = await api.post('/users/login', { email, password });
        const { user } = response.data;
				console.log("Dados recebidos:", response.data);
        if (!user) {
            throw new Error('Falha ao obter dados do usuário.');
        }

        await AsyncStorage.setItem('user', JSON.stringify(user));
        setUser(user);
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};



  const signUp = async (name: string, email: string, password: string) => {
    try {
      const response = await api.post('/users/register', { name, email, password });
      const { user } = response.data;

      if (!user) {
        throw new Error('Falha ao registrar usuário.');
      }

      await AsyncStorage.setItem('user', JSON.stringify(user));
      setUser(user);
    } catch (error) {
      console.error('Signup failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
