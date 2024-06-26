import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Text } from '../Text';

import * as S from './styles';

interface ModalProps {
	isVisible: boolean;
	onClose: () => void;
}

export function CreateProfessionalModal({ isVisible, onClose}: ModalProps) {
		const [phoneNumber, setPhoneNumber] = useState('');
		const [description, setDescription] = useState('');


		function handleCreateProfessional() {

		}

    return (
			<S.MyModal
					animationType="slide"
					visible={isVisible}
					onRequestClose={onClose}
			>
				<S.ModalContent>
					<S.CloseButton onPress={onClose}>
						<Ionicons color='#3C3C3C' name='close' size={28} />
					</S.CloseButton>

					<Text size={46}>Termine de Cadastrar suas informações:</Text>

					<S.StyledInput
						placeholder="Número de celular"
						value={phoneNumber}
						onChangeText={setPhoneNumber}
						keyboardType='decimal-pad'
						style={{marginTop: 76}}
					/>

					<S.StyledInput
						placeholder="Descrição"
						value={description}
						onChangeText={setDescription}
					/>

					<S.ConfirmButton onPress={handleCreateProfessional}>
						<Text weight='600' color='#fff'>Confirmar</Text>
					</S.ConfirmButton>
				</S.ModalContent>
			</S.MyModal>
    );
}
