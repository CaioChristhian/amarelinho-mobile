import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Text } from '../Text';

import * as S from './styles';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

interface ModalProps {
	isVisible: boolean;
	onClose: () => void;
	onConfirm?: () => void;
}

export function CreateProfessionalModal({ isVisible, onClose, onConfirm}: ModalProps) {
		const [phoneNumber, setPhoneNumber] = useState('');
		const [description, setDescription] = useState('');

		const {user} = useAuth()!;


		async function handleCreateProfessional() {
			const professionalData = {
					phoneNumber,
					description,
					userId: user?.id
			};

			await api.post('/professional', professionalData)
					.then(response => {
							console.log('Professional created successfully:', response.data);
							onConfirm!(); // Close modal on success
					})
					.catch(error => {
							console.error('Error creating professional:', error);
							alert('Failed to create professional. Please try again.');

							if (error.response) {
								// The request was made and the server responded with a status code
								// that falls out of the range of 2xx
								console.log(error.response.data);
								console.log(error.response.status);
								console.log(error.response.headers);
							} else if (error.request) {
								// The request was made but no response was received
								console.log(error.request);
							} else {
								// Something happened in setting up the request that triggered an Error
								console.log('Error', error.message);
							}
					});
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
