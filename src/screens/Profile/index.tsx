import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export function Profile() {
  // Dados do usuário (substitua pelos dados reais)
  const userName = 'João Silva';
  const userOccupation = 'Designer';
  const userRating = 4.5;
  const userAvatar = require('../../assets/Images/ProfileImage.png'); // Substitua pelo caminho da imagem do avatar

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Perfil de Usuário</Text>
      <View style={styles.userInfoContainer}>
        <View>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userOccupation}>{userOccupation}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>{userRating.toFixed(1)}</Text>
            {/* Aqui você pode renderizar as 5 estrelas com base na avaliação do usuário */}
          </View>
        </View>
        <Image source={userAvatar} style={styles.avatar} />
      </View>
      <Text style={styles.historyText}>Histórico</Text>
      {/* Aqui você pode renderizar os cards de histórico */}
    </View>
  );
};
