import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import styles from './styles';
import { useAuth } from '../../context/AuthContext';
import { CreateProfessionalModal } from '../../components/CreateProfessionalModal/CreateProfessionalModal';


export function Profile() {
  const { user,logout } = useAuth()!; // Usando o hook para acessar a função de logout
  const [modalVisible, setModalVisible] = useState(true); // Estado para controlar a visibilidade do modal


  const userName = 'João Silva';
  const userOccupation = 'Designer';
  const userRating = 4.5;

	console.log(user?.id)

	return (
    <>
		<View style={styles.container}>
      <Text style={styles.headerText}>Perfil de Usuário</Text>
      <View style={styles.userInfoContainer}>
        <View>
          <Text style={styles.userName}>{user?.name}</Text>
          <Text style={styles.userOccupation}>{userOccupation}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>{userRating.toFixed(1)}</Text>
          </View>
        </View>
        <Image source={{uri:'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'}} style={styles.avatar} />
      </View>
      <Text style={styles.historyText}>Histórico</Text>
      <Button title="Logout" onPress={logout} color="#e85954" />
      <Button title="Abrir Modal" onPress={() => setModalVisible(true)} color="#4CAF50" />
			</View>

      <CreateProfessionalModal  isVisible={modalVisible} onClose={() => setModalVisible(false)} />
		</>
  );
};
