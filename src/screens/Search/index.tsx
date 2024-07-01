import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Professional, PropsStack } from '../../routes/models';
import { Text } from '../../components/Text';
import { LupaIcon } from '../../components/Icons/LupaIcon';

import * as S from './styles';
import api from '../../services/api';
import { StarIcon } from '../../components/Icons/StarIcon';

export function Search() {
    const navigation = useNavigation<PropsStack>();
    const [searchTerm, setSearchTerm] = useState('');
    const [professionals, setProfessionals] = useState([]);
    const [filteredProfessionals, setFilteredProfessionals] = useState<any>([]);

		const handleProfileRedirect = (professional: Professional) => {
			navigation.navigate('ProfileDetailing', {professional});
		};

    useEffect(() => {
        // Buscar todos os profissionais ao carregar a tela
        api.get('/professional').then(response => {
            setProfessionals(response.data);
        }).catch(error => {
            console.error('Erro ao buscar profissionais:', error);
        });
    }, []);

    const handleSearch = () => {
        // Filtrar profissionais com base no nome
        const filtered = professionals.filter((prof: any) =>
            prof.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProfessionals(filtered);
    };

		const handleResetSearch = () => {
			setSearchTerm('');
			setFilteredProfessionals([]);
	};

    return (
        <S.Container>
            <S.Header>
                <S.HeaderTextContainer>
                    <Text weight='600'>Pesquisar Profissional</Text>
                </S.HeaderTextContainer>
            </S.Header>

            <Text style={{ alignSelf: 'center', marginTop: 36 }} weight='700' size={24}>Em busca de profissional?</Text>

            <S.InputContainer>
                <LupaIcon />
                <S.Input
                    placeholder="Encontre pelo(a) profissional desejado(a)"
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                />

            </S.InputContainer>

						<View>
            <TouchableOpacity onPress={handleSearch} style={{
                backgroundColor: '#4CAF50',
                borderRadius: 12,
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 12,
                width: '80%',
                alignSelf: 'center'
            }}>
                <Text color='#FFF' weight='600'>Pesquisar</Text>
            </TouchableOpacity>
            {(filteredProfessionals != '') && (
							<TouchableOpacity onPress={handleResetSearch} style={{
                backgroundColor: '#FF6347',  // Tomate para contraste
                borderRadius: 12,
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 12,
                width: '80%',
                alignSelf: 'center'
            }}>
                <Text color='#FFF' weight='600'>Resetar</Text>
            </TouchableOpacity>
						)}
        </View>

            <FlatList
                data={filteredProfessionals}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
									<TouchableOpacity onPress={() => handleProfileRedirect(item)}>
										<S.ProfessionalCard>
											<S.ProfessionalImageCard source={{ uri: item.profile_picture }} />
											<S.ProfessionalInfo>
												<Text size={20} weight='600'>{item.name}</Text>
												<Text size={18}>{item.description}</Text>
												<S.RatingContainer>
													{/* Assumindo que average_rating é um número e você deseja mostrar essa quantidade de estrelas */}
													{[...Array(item.average_rating)].map((_, i) => <StarIcon key={i} />)}
												</S.RatingContainer>
											</S.ProfessionalInfo>
											<Text weight='600' style={{ position: 'absolute', right: 0, bottom: 0, margin: 4 }}>{item.average_rating}|{item.total_ratings} avaliações</Text>
										</S.ProfessionalCard>
									</TouchableOpacity>
								)}
            />
        </S.Container>
    );
}
