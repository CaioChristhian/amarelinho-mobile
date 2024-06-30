import React, { useEffect, useState } from 'react';
import Svg, { Path } from 'react-native-svg';
import { useAuth } from '../../context/AuthContext';

import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes/models';

const logo = require('../../assets/Images/logo.png')

export function SingUp() {
	const navigation = useNavigation<PropsStack>();
	const { signUp } = useAuth()!;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

	// Função para enviar os dados
	const handleSignUp = async () => {
		if (!name) {
			console.error('O nome é obrigatório');
			return;
		}
		try {
			await signUp(name, email, password);
			navigation.navigate('CreateProfessional');
		} catch (error) {
			console.error('Signup failed:', error);
		}
	};

	function handleBackLogin() {
		navigation.navigate('Login')
	}

  return (
    <S.Container>

			<S.ImageLogo
      	source={logo}
				style={{
					width: 200,
					height: 200
				}}
			/>

      <S.StyledInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <S.StyledInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <S.StyledInput
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <S.StyledButton onPress={handleSignUp}>
        <S.ButtonText>Registrar</S.ButtonText>
      </S.StyledButton>

      <S.BackButton onPress={handleBackLogin}>
        <S.BackButtonText>Voltar para login</S.BackButtonText>
      </S.BackButton>
    </S.Container>
  );
}
