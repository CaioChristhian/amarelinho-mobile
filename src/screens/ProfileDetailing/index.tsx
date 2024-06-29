import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { PropsStack } from '../../routes/models';
import * as S from './styles';
import { Text } from '../../components/Text';
import { PropsNavigationStack } from '../../routes/models';
import api from '../../services/api';

type ProfileDetailingRouteProp = RouteProp<PropsNavigationStack, 'ProfileDetailing'>;

export function ProfileDetailing() {
    const navigation = useNavigation<PropsStack>();
    const route = useRoute<ProfileDetailingRouteProp>();
    const { id } = route.params;

    const [user, setUser] = useState({
        average_rating: 0,
        categories: '',
        description: '',
        email: '',
        id: 0,
        name: '',
        phone: '',
        total_ratings: '',
        user_id: 0
    });

    useEffect(() => {
        api.get(`/professional/${id}`).then(response => {
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
    }, []);



    const handleChatRedirect = () => {
        navigation.navigate('Chat');
    };

    return (
        <S.Container>
            <S.TitleText>Perfil do Usuário</S.TitleText>
            <S.ProfileView>
                <S.ProfileImage source={{ uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                <S.InfoView>
                    <S.NameText>{user.name}</S.NameText>
                    <Text>{user.average_rating}|{user.total_ratings} avaliações</Text>
                </S.InfoView>
            </S.ProfileView>
            <S.ProfessionalInfo> 
                <S.OccupationText>Informações:</S.OccupationText>
                <S.ValueText>Telefone: {user.phone}</S.ValueText>
                <S.ValueText>Email: {user.email}</S.ValueText>
                <S.OccupationText>Serviços:</S.OccupationText>
                <S.ValueText>{user.categories}</S.ValueText>
                <S.OccupationText>Descrição:</S.OccupationText>
                <S.ValueText>{user.description}</S.ValueText>
            </S.ProfessionalInfo>
            <S.ButtonContainer>
                <S.ServiceButton onPress={() => {/* código para solicitar serviço */ }}>
                    <S.ButtonText>Solicitar Serviço</S.ButtonText>
                </S.ServiceButton>
                <S.ChatButton onPress={handleChatRedirect}>
                    <S.ButtonText>Chat</S.ButtonText>
                </S.ChatButton>
            </S.ButtonContainer>
        </S.Container>
    );
};
