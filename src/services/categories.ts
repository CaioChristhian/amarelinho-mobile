import api from './api';

interface Category {
  _id: string;
  name: string;
  description?: string;
}

export const getCategories = async (): Promise<Category[]> => {
  const response = await api.get<Category[]>('/category');
  return response.data;
};

export const getCategoryById = async (id: string): Promise<Category> => {
  const response = await api.get<Category>(`/category/${id}`);
  return response.data;
};

export const createCategory = async (categoryData: Omit<Category, '_id'>): Promise<Category> => {
  const response = await api.post<Category>('/category/', categoryData);
  return response.data;
};

export const updateCategory = async (id: string, categoryData: Partial<Category>): Promise<Category> => {
  const response = await api.put<Category>(`/category/${id}`, categoryData);
  return response.data;
};

export const deleteCategory = async (id: string): Promise<void> => {
  await api.delete(`/category/${id}`);
};
