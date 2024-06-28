import React, { useEffect, useState } from 'react';
import { FlatList, View,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes/models';
import { Text } from '../../components/Text';

import * as S from './styles';
import { StarIcon } from '../../components/Icons/StarIcon';
import { HeartIcon } from '../../components/Icons/HeartIcon';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

interface ICategory {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export function Home(){
	const { user } = useAuth()!; // Usando o hook para acessar a função de logout

	const navigation = useNavigation<PropsStack>();
	const [categories, setCategories] = useState<ICategory[]>([]);

	const handleProfileRedirect = () => {
		navigation.navigate('ProfileDetailing');
	};



  useEffect(() => {
    api.get('/category').then(response => {
      console.log(response.data);
      setCategories(response.data);
    }).catch(error => console.error('Erro ao buscar categorias:', error));
  }, []);


	return (
		<S.Container>
			<S.Header>
				<S.HeaderTextContainer>
					<Text weight='600'>Bem vindo !</Text>
					<Text weight='600'>{user?.name}</Text>
				</S.HeaderTextContainer>
				<S.ImageProfile source={{uri: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'}} />
			</S.Header>

			<S.Hottest>
				<Text weight='700'>Destaques</Text>
				<S.HottestBanners borderRadius={12} source={{uri: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}>
					<S.ProfessionalDetails>
						<S.ProfessionalImage source={{ uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
						<S.ProfessionalDescription>
								<Text weight='600' color='#FFF'>Roberto Miranda</Text>
								<Text weight='600' color='#FFF'>Pedreiro</Text>
						</S.ProfessionalDescription>
					</S.ProfessionalDetails>

					<Text style={{ alignSelf: 'center', marginBottom: 12 }} weight='600' color='#FFF'>Faixa: 300 - 1200 / Diária</Text>
					<View style={{ paddingHorizontal: 62 }}>
						<S.Button onPress={() => console.log(categories?.length)}>
							<Text style={{ alignSelf: 'center' }} weight='600' color='#FFF'>Solicitar</Text>
						</S.Button>
					</View>
				</S.HottestBanners>
			</S.Hottest>

			<S.RecomendationContainer>
				<Text weight='600' size={22} style={{ marginLeft: 16 }}>Recomendações</Text>

				<S.ProfessionalList>
						<View>
						<TouchableOpacity onPress={handleProfileRedirect}>

							<S.ProfessionalCard>
							<S.ProfessionalImageCard source={{uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} />
							<S.ProfessionalInfo>
								<Text size={20} weight='600'>Dulce Vasconcelos</Text>
								<Text size={18}>Jardineira</Text>
								<S.RatingContainer>
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<StarIcon />
								</S.RatingContainer>
							</S.ProfessionalInfo>
							<HeartIcon />
							<Text style={{ position: 'absolute', right: 0, bottom: 0, margin: 8 }}>4.0|70 avaliações</Text>
							</S.ProfessionalCard>
							</TouchableOpacity>

							<TouchableOpacity onPress={handleProfileRedirect}>

							<S.ProfessionalCard>
							<S.ProfessionalImageCard source={{uri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} />
							<S.ProfessionalInfo>
								<Text size={20} weight='600'>Ian-Somel Gustavo</Text>
								<Text size={18}>Pintor</Text>
								<S.RatingContainer>
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<StarIcon />
								</S.RatingContainer>
							</S.ProfessionalInfo>
							<HeartIcon />
							<Text style={{ position: 'absolute', right: 0, bottom: 0, margin: 8 }}>3.5|750 avaliações</Text>
							</S.ProfessionalCard>
							</TouchableOpacity>

							<TouchableOpacity onPress={handleProfileRedirect}>

							<S.ProfessionalCard>
							<S.ProfessionalImageCard source={{uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} />
							<S.ProfessionalInfo>
								<Text size={20} weight='600'>Jurica Alencar</Text>
								<Text size={18}>Designer</Text>
								<S.RatingContainer>
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<StarIcon />
								</S.RatingContainer>
							</S.ProfessionalInfo>
							<HeartIcon />
							<Text style={{ position: 'absolute', right: 0, bottom: 0, margin: 8 }}>4.5|800 avaliações</Text>
							</S.ProfessionalCard>
							</TouchableOpacity>
						</View>
				</S.ProfessionalList>
			</S.RecomendationContainer>
		</S.Container>
	);
}
