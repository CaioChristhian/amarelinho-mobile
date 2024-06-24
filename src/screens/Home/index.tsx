import React, { useEffect, useState } from 'react';
import { FlatList, View,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes/models';
import { Text } from '../../components/Text';

import profile from '../../assets/Images/ProfileImage.png';
import banner from '../../assets/Images/banner.png'
import professional from '../../assets/Images/people-banner.png'
import jurica from '../../assets/Images/jurica.png'
import ian from '../../assets/Images/ian.png'
import toa from '../../assets/Images/toa.png'

import * as S from './styles';
import { StarIcon } from '../../components/Icons/StarIcon';
import { HeartIcon } from '../../components/Icons/HeartIcon';
import api from '../../services/api';

interface ICategory {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export function Home(){

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
					<Text weight='600'>José Pinto Valente</Text>
				</S.HeaderTextContainer>
				<S.ImageProfile source={profile} />
			</S.Header>

			<S.Hottest>
				<Text weight='700'>Destaques</Text>
				<S.HottestBanners borderRadius={12} source={banner}>
					<S.ProfessionalDetails>
						<S.ProfessionalImage source={professional} />
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
					<TouchableOpacity onPress={handleProfileRedirect}>
						<View>
							<S.ProfessionalCard>
							<S.ProfessionalImageCard source={professional} />
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

							<S.ProfessionalCard>
							<S.ProfessionalImageCard source={ian} />
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

							<S.ProfessionalCard>
							<S.ProfessionalImageCard source={jurica} />
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

							<S.ProfessionalCard>
							<S.ProfessionalImageCard source={jurica} />
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
						</View>
					</TouchableOpacity>
				</S.ProfessionalList>
			</S.RecomendationContainer>
		</S.Container>
	);
}
