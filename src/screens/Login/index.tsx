import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export function Login() {
  const navigation = useNavigation();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleLogin = () => {
		// Lógica de autenticação
		console.log('Email:', email);
		console.log('Senha:', password);}
  return (
	  <View style={styles.container}>
      {/* <Image source={require('./src/assets/images/logo.png')} style={styles.logo} /> */}
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
