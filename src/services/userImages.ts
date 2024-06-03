import api from './api';

interface UserImage {
  _id: string;
  userId: string;
  imageUrl: string;
}

export const getUserImages = async (): Promise<UserImage[]> => {
  const response = await api.get<UserImage[]>('/user_images/');
  return response.data;
};

export const createUserImage = async (imageData: Omit<UserImage, '_id'>): Promise<UserImage> => {
  const response = await api.post<UserImage>('/user_images/', imageData);
  return response.data;
};

export const updateUserImage = async (id: string, imageData: Partial<UserImage>): Promise<UserImage> => {
  const response = await api.put<UserImage>(`/user_images/${id}`, imageData);
  return response.data;
};

export const deleteUserImage = async (id: string): Promise<void> => {
  await api.delete(`/user_images/${id}`);
};