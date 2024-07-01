import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { Professional, PropsStack } from '../../routes/models';
import * as S from './styles';
import { Text } from '../../components/Text';
import { PropsNavigationStack } from '../../routes/models';
import api from '../../services/api';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Linking, Alert } from 'react-native';

type ProfileDetailingRouteProp = RouteProp<PropsNavigationStack, 'ProfileDetailing'>;

export function ProfileDetailing() {
    const navigation = useNavigation<PropsStack>();
    const route = useRoute<ProfileDetailingRouteProp>();
    const { professional } = route.params;

    const [user, setUser] = useState<Professional>(professional);


    /* useEffect(() => {
        api.get(`/professional/${professional.id}`).then(response => {
            // console.log("Entrou no Proficinal", response.data);
            const data = response.data;
            setUser({
                ...user,
                name: data.name,
                phone: data.phone,
                email: data.email,
                description: data.description,
                categories: data.categories.join(', '),
                total_ratings: data.total_ratings,
                average_rating: data.average_rating,
            });
        }).catch(error => console.error('Erro ao buscar profissionais:', error));
    }, []); */


		function handleChatRedirect() {
				if (professional.phone) {
						// Limpar o número de telefone para remover caracteres não numéricos
						const phoneNumber = professional.phone.replace(/[^\d]/g, '');
						const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`;

						// Verificar se o dispositivo pode abrir o URL do WhatsApp
						Linking.canOpenURL(whatsappUrl)
								.then((supported) => {
										if (supported) {
												Linking.openURL(whatsappUrl);
										} else {
												Alert.alert('Erro', 'WhatsApp não está instalado');
										}
								})
								.catch((err) => console.error('An error occurred', err));
				} else {
						Alert.alert('Erro', 'Número de telefone não disponível');
				}
		};


		function handleGoback() {
			navigation.goBack();
		}

    return (
        <S.Container>
						<S.Header>
							<TouchableOpacity onPress={handleGoback}>
								<Ionicons name='arrow-back-circle' size={28} />
							</TouchableOpacity>
            	<S.TitleText>Perfil do Usuário</S.TitleText>
						</S.Header>
            <S.ProfileView>
                <S.ProfileImage source={{ uri: professional.profile_picture || 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'}} />
                <S.InfoView>
                    <S.NameText>{professional.name}</S.NameText>
                    <Text>{professional.average_rating}|{professional.total_ratings} avaliações</Text>
                </S.InfoView>
            </S.ProfileView>
            <S.ProfessionalInfo>
                <S.OccupationText>Informações:</S.OccupationText>
                <S.ValueText>Telefone: {professional.phone}</S.ValueText>
                <S.ValueText>Email: {professional.email}</S.ValueText>
                <S.OccupationText>Serviços:</S.OccupationText>
                <S.ValueText>{professional.categories?.join(', ')}</S.ValueText>
                <S.OccupationText>Descrição:</S.OccupationText>
                <S.ValueText>{professional.description}</S.ValueText>
            </S.ProfessionalInfo>
            <S.ButtonContainer>
                <S.ChatButton onPress={handleChatRedirect}>
										<Ionicons name='logo-whatsapp' size={24} color='#FFFFFF' />
                    <S.ButtonText>WhattsApp</S.ButtonText>
                </S.ChatButton>
            </S.ButtonContainer>
        </S.Container>
    );
};
