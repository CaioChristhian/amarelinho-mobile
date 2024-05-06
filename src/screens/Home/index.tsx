import React from 'react';
import { FlatList, View,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes/models';
import { Text } from '../../components/Text';
import { LupaIcon } from '../../components/Icons/LupaIcon';

import profile from '../../assets/Images/ProfileImage.png';
import banner from '../../assets/Images/banner.png'
import professional from '../../assets/Images/people-banner.png'

import * as S from './styles';
import { StarIcon } from '../../components/Icons/StarIcon';
import { HeartIcon } from '../../components/Icons/HeartIcon';

export function Home(){

	const navigation = useNavigation<PropsStack>(); 

	const handleChatRedirect = () => {
		navigation.navigate('Chat');
	  };
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
						<S.Button>
							<Text style={{ alignSelf: 'center' }} weight='600' color='#FFF'>Solicitar</Text>
						</S.Button>
					</View>
				</S.HottestBanners>
			</S.Hottest>

			<Text style={{ alignSelf: 'center', marginTop: 36 }} weight='700' size={24}>Em busca de profissional?</Text>

			<S.InputContainer>
				<LupaIcon />
				<S.Input
					placeholder={`Encontre pela especialidade desejada`}
				/>
			</S.InputContainer>

			<S.PersonalService>
				<Text size={18} weight='600'>Criar demanda personalisada</Text>
			</S.PersonalService>

			<S.RecomendationContainer>
				<Text weight='600' size={22} style={{ marginLeft: 16 }}>Recomendações</Text>

				<S.ProfessionalList>
				<TouchableOpacity onPress={handleChatRedirect}>
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
					</View>
					</TouchableOpacity>
					
				</S.ProfessionalList>
			</S.RecomendationContainer>
		</S.Container>
	);
}
