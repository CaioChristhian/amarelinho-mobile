import React, { useState } from 'react';
import Svg, { Path } from 'react-native-svg';
import { useAuth } from '../../context/AuthContext';

import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes/models';

export function SingUp() {
	const navigation = useNavigation<PropsStack>();
	const { signUp } = useAuth()!;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

	const handleSignUp = async () => {
    try {
      await signUp(name, email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <S.Container>

      <S.StyledInput
        placeholder="Nome"
        value={name}
        onChangeText={text => setName(text)}
      />
      <S.StyledInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <S.StyledInput
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <S.StyledButton onPress={handleSignUp}>
        <S.ButtonText>Registrar</S.ButtonText>
      </S.StyledButton>

      <S.GoogleButton>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path d="M12.2449 9.81812V14.4654H18.8349C18.5455 15.9599 17.6771 17.2254 16.3747 18.0763L20.3488 21.0982C22.6642 19.0037 24 15.9273 24 12.2728C24 11.4219 23.9221 10.6036 23.7774 9.81825L12.2449 9.81812Z" fill="#4285F4" />
          <Path d="M5.3824 14.2841L4.4861 14.9564L1.31348 17.3782C3.32833 21.2945 7.45794 24 12.2446 24C15.5507 24 18.3225 22.9309 20.3485 21.0983L16.3745 18.0764C15.2835 18.7964 13.892 19.2328 12.2446 19.2328C9.06091 19.2328 6.35595 17.1274 5.38741 14.291L5.3824 14.2841Z" fill="#34A853" />
          <Path d="M1.31346 6.62183C0.478619 8.23631 0 10.0581 0 11.9999C0 13.9417 0.478619 15.7636 1.31346 17.378C1.31346 17.3889 5.38779 14.2799 5.38779 14.2799C5.14289 13.5599 4.99813 12.7963 4.99813 11.9998C4.99813 11.2033 5.14289 10.4398 5.38779 9.71976L1.31346 6.62183Z" fill="#FBBC05" />
          <Path d="M12.2448 4.77818C14.0482 4.77818 15.6512 5.38907 16.9313 6.56727L20.4378 3.13095C18.3117 1.18917 15.551 0 12.2448 0C7.45819 0 3.32833 2.69454 1.31348 6.62183L5.38767 9.72001C6.35609 6.88362 9.06116 4.77818 12.2448 4.77818Z" fill="#EA4335" />
        </Svg>
        <S.GoogleButtonText>Registrar com Google</S.GoogleButtonText>
      </S.GoogleButton>

      <S.BackButton>
        <S.BackButtonText>Voltar para login</S.BackButtonText>
      </S.BackButton>
    </S.Container>
  );
}
