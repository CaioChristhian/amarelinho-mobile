import api from './api';

interface Professional {
  _id: string;
  name: string;
  profession: string;
  bio?: string;
}

export const getProfessionals = async (): Promise<Professional[]> => {
  const response = await api.get<Professional[]>('/professional/');
  return response.data;
};

export const getProfessionalById = async (id: string): Promise<Professional> => {
  const response = await api.get<Professional>(`/professional/${id}`);
  return response.data;
};

export const createProfessional = async (professionalData: Omit<Professional, '_id'>): Promise<Professional> => {
  const response = await api.post<Professional>('/professional/', professionalData);
  return response.data;
};

export const updateProfessional = async (id: string, professionalData: Partial<Professional>): Promise<Professional> => {
  const response = await api.put<Professional>(`/professional/${id}`, professionalData);
  return response.data;
};

export const deleteProfessional = async (id: string): Promise<void> => {
  await api.delete(`/professional/${id}`);
};