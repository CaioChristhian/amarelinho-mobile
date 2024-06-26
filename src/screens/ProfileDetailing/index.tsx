import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes/models';
import { StarIcon } from '../../components/Icons/StarIcon';
import * as S from './styles';

export function ProfileDetailing() {
    const navigation = useNavigation<PropsStack>();

    const user = {
        name: 'Marcos Silva',
        phone: '123-456-7890',
        biography: 'Um pedreiro com 20 anos de experiência que trabalha com todo tipo de construção e manutenção.',
        occupation: 'Pedreiro',
        value: "R$300/Diaria",
        galleryImages: [
            { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNoq1zTM-9JCnGrlFIvyZU-gW7KNvQc30AMcHEiCBLAA&s' },
            { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNoq1zTM-9JCnGrlFIvyZU-gW7KNvQc30AMcHEiCBLAA&s' },
            { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNoq1zTM-9JCnGrlFIvyZU-gW7KNvQc30AMcHEiCBLAA&s' },
        ],
        rating: 4.5,
    };

    const handleChatRedirect = () => {
		navigation.navigate('Chat');
	};

    return (
        <S.Container>
            <S.TitleText>Perfil do Usuário</S.TitleText>
            <S.ProfileView>
                <S.ProfileImage source={{uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} />
                <S.InfoView>
                    <S.NameText>{user.name}</S.NameText>
                    <S.OccupationText>{user.occupation}</S.OccupationText>
                    <S.RatingContainer>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </S.RatingContainer>
                </S.InfoView>
            </S.ProfileView>
            <S.ProfessionalInfo>
                <S.InfoText>Contato:</S.InfoText>
                <S.ValueText>{user.phone}</S.ValueText>
                <S.InfoText>Descrição:</S.InfoText>
                <S.ValueText>{user.biography}</S.ValueText>
                <S.InfoText>Valor:</S.InfoText>
                <S.ValueText>{user.value}</S.ValueText>
            </S.ProfessionalInfo>
            <S.GalleryTitle>Galeria</S.GalleryTitle>
            <FlatList
                data={user.galleryImages}
                horizontal
                renderItem={({ item }) => (
                    <S.GalleryImage source={item} />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
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
