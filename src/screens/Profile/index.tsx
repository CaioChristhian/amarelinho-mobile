import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import styles from './styles';
import { useAuth } from '../../context/AuthContext';

export function Profile() {
  const { logout } = useAuth()!; // Usando o hook para acessar a função de logout


  const userName = 'João Silva';
  const userOccupation = 'Designer';
  const userRating = 4.5;
  const userAvatar = require('../../assets/Images/ProfileImage.png');

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Perfil de Usuário</Text>
      <View style={styles.userInfoContainer}>
        <View>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userOccupation}>{userOccupation}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>{userRating.toFixed(1)}</Text>
          </View>
        </View>
        <Image source={userAvatar} style={styles.avatar} />
      </View>
      <Text style={styles.historyText}>Histórico</Text>
      <Button title="Logout" onPress={logout} color="#D9534F" />
    </View>
  );
};
