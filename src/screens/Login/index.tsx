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
      navigation.navigate("Home");
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

	return (
	  <View style={styles.container}>
      <Image
      source={logo} style={styles.logo}/>
      <Text style={styles.title}>Amarelinho</Text>
      <Text style={styles.title}>Cliente</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.forgotPassword}>
        <Text>Esqueci minha senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>Quero me cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialText}>Entrar com o Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialText}>Entrar com o Facebook</Text>
      </TouchableOpacity>
      </View>
    );
}
