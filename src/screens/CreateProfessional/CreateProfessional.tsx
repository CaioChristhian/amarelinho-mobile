import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text } from '../../components/Text';
import { PropsStack } from '../../routes/models';

import * as S from './styles';
import { CreateProfessionalModal } from '../../components/CreateProfessionalModal/CreateProfessionalModal';

export function CreateProfessional(){
	const navigation = useNavigation<PropsStack>();
	const [modalVisible, setModalVisible] = useState(false);

	function goApp() {
		navigation.navigate('Home');
	}

	function handleGoCreateProfessional() {
		setModalVisible(true);
	}

	return (
		<>
		<S.Container>
			<Text weight='600' style={{ textAlign: 'center' }} size={60}>Deseja criar um perfil de Profissional?</Text>

			<S.BoxButtons>
				<S.DeclineButton onPress={goApp}>
					<Text weight='600' color='#FFF'>Não, quero contratar</Text>
				</S.DeclineButton>
				<S.AcceptButton onPress={handleGoCreateProfessional}>
					<Text weight='600' color='#FFF'>Sim, quero trabalhar</Text>
				</S.AcceptButton>
			</S.BoxButtons>
		</S.Container>

		<CreateProfessionalModal isVisible={modalVisible} onClose={() => setModalVisible(false)} />
		</>
	);
}
