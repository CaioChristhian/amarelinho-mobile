import api from './api';

interface RatedProfessional {
  _id: string;
  name: string;
  profession: string;
  rating: number;
}

export const getRatedProfessionals = async (): Promise<RatedProfessional[]> => {
  const response = await api.get<RatedProfessional[]>('/professional/rated/');
  return response.data;
};