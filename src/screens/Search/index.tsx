import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes/models';
import { Text } from '../../components/Text';
import { LupaIcon } from '../../components/Icons/LupaIcon';

import profile from '../../assets/Images/ProfileImage.png';

import * as S from './styles';

export function Search(){
	const navigation = useNavigation<PropsStack>();

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
					placeholder={`Encontre pela especialidade desejada`}
				/>
			</S.InputContainer>

		</S.Container>
	);
}
