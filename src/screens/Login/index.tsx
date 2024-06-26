import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import styles from './styles';
import { PropsStack } from '../../routes/models';

export function Login() {
  const logo = require('../../assets/Images/logo.png')
	const navigation = useNavigation<PropsStack>();
	const { login } = useAuth()!;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

	const handleLogin = async () => {
    try {
      await login(email, password);
      navigation.navigate("CreateProfessional");
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

	function handleGoSignUp() {
		navigation.navigate('SingUp')
	}

	console.log(email)

	return (
	  <View style={styles.container}>
      <Image
      source={logo} style={styles.logo}/>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoSignUp} style={styles.registerButton}>
        <Text style={styles.registerText}>Quero me cadastrar</Text>
      </TouchableOpacity>

      </View>
    );
}
