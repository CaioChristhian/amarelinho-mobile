import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface Professional {
  id: number;
  name: string;
  profile_picture: string;
  description: string;
  average_rating: number;
  total_ratings: number;
  phone?: string;
  email?: string;
  categories?: string[];
}

export type PropsNavigationStack = {
	Login: undefined;
	SingUp: undefined;
	Home: undefined;
	Profile: undefined;
	tab: undefined;
	ProfileDetailing: { professional: Professional };
	Settings: undefined;
	Chat: undefined;
	Search: undefined;
	CreateProfessional: undefined;
}

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>
