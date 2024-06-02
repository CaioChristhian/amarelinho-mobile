import api from './api';

interface Review {
  _id: string;
  userId: string;
  professionalId: string;
  rating: number;
  comment: string;
}

export const getReviews = async (): Promise<Review[]> => {
  const response = await api.get<Review[]>('/review/');
  return response.data;
};

export const getReviewById = async (id: string): Promise<Review> => {
  const response = await api.get<Review>(`/review/${id}`);
  return response.data;
};

export const getReviewsByProfessionalId = async (id: string): Promise<Review[]> => {
  const response = await api.get<Review[]>(`/review/professional/${id}`);
  return response.data;
};

export const getReviewsByUserId = async (id: string): Promise<Review[]> => {
  const response = await api.get<Review[]>(`/review/user/${id}`);
  return response.data;
};

export const createReview = async (reviewData: Omit<Review, '_id'>): Promise<Review> => {
  const response = await api.post<Review>('/review/', reviewData);
  return response.data;
};

export const updateReview = async (id: string, reviewData: Partial<Review>): Promise<Review> => {
  const response = await api.put<Review>(`/review/${id}`, reviewData);
  return response.data;
};

export const deleteReview = async (id: string): Promise<void> => {
  await api.delete(`/review/${id}`);
};