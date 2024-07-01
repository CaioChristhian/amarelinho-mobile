import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import styles from './styles';
import { useAuth } from '../../context/AuthContext';
import { CreateProfessionalModal } from '../../components/CreateProfessionalModal/CreateProfessionalModal';
import { Text } from '../../components/Text';
import api from '../../services/api';

export function Profile() {
	const [isProfessional, setIsProfessional] = useState(false);
  const { user, logout } = useAuth()!;
  const [modalVisible, setModalVisible] = useState(false);
  const [userProfessional, setUserProfessional] = useState(null);
  const [imageUri, setImageUri] = useState<string | null>(null);
	const [professionalsData, setProfessionalsData] = useState<any>([]);


  useEffect(() => {
		const fetchProfessionalData = async () => {
			if (user?.id) {
				try {
					// Primeira chamada API para buscar todos os profissionais
					const response = await api.get(`/professional`);
					const professionals = response.data;
					const matchedProfessional = professionals.find((prof: any) => prof.user_id === user.id);

					if (matchedProfessional) {
						setUserProfessional(matchedProfessional);
						setImageUri(matchedProfessional.profile_picture);
						setIsProfessional(true)
						// Segunda chamada API dependendo do resultado da primeira
						const professionalDetailsResponse = await api.get(`/professional/${matchedProfessional.id}`);
						const professionalDetails = professionalDetailsResponse.data;
						setProfessionalsData(professionalDetails); // Atualiza o estado com os detalhes do profissional
						console.log(professionalDetails);
					} else {
						setUserProfessional(null);
						setIsProfessional(false)
						setProfessionalsData([]); // Limpa os dados anteriores se não houver profissional correspondente
					}
				} catch (error) {
					console.error('Failed to fetch professionals:', error);
				}
			}
		};

		fetchProfessionalData();
	}, [user?.id, isProfessional]); // Adicionado userProfessional como dependência
	 // Dependência para re-executar quando o ID do usuário mudar



  const handleToggleImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Sorry, we need media library permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2, // Começa com a melhor qualidade
    });

    if (!result.canceled && result.assets) {
      let uri = result.assets[0].uri;
      let quality = 1;
      let fileSize = result.assets[0].fileSize;

			console.log(fileSize)

      while (fileSize! > 2000000 && quality > 0.1) { // Enquanto o arquivo for maior que 2MB
        quality -= 0.1; // Reduz a qualidade em 10%
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: quality,
        });
        if (result.assets) {
          fileSize = result.assets[0].fileSize;
          uri = result.assets[0].uri;
        }
      }

      setImageUri(uri);
      uploadImage(uri);
    }
  };

  const uploadImage = async (uri: string) => {
		const formData = new FormData();
		formData.append('image', {
			uri: uri,
			name: 'photo.jpg',
			type: 'image/jpeg',
		} as any);
		formData.append('user_id', String(user?.id));

		const config = {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		};

		try {
			const response = await api.post('/user_images', formData, config);
			Alert.alert("Success", "Imagem alterada com sucesso!");
			console.log(response);
		} catch (error) {
			console.error("Error uploading image: ", error);
			Alert.alert("Error", "Failed to upload image.");
			/* if (error.response) {
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
			} */
		}
	};

	function handleProfessionalCreated() {
		setModalVisible(false)
		setIsProfessional(!isProfessional)
	}


  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Perfil de Usuário</Text>
          <TouchableOpacity style={{backgroundColor: '#e85954', borderRadius: 12, height: 38, width: 68, alignItems: 'center', justifyContent: 'center'}} onPress={logout}>
            <Text weight='600' color='#FFFFFF'>Sair</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userInfoContainer}>
          <View>
            <Text style={styles.userName}>{user?.name}</Text>

            {userProfessional && (
							<>
							<Text style={styles.userOccupation}>{professionalsData.description}</Text>
							<View style={styles.ratingContainer}>
              	<Text style={styles.ratingText}>{professionalsData.average_rating} | {professionalsData.total_ratings} avaliações</Text>
            	</View>
							</>
						)}


          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={imageUri ? null : handleToggleImage} style={styles.avatar}>
              <Image  source={{ uri: imageUri || 'https://www.kindpng.com/picc/m/264-2642043_galeria-de-fotos-circle-hd-png-download.png' }} style={styles.avatar} />
            </TouchableOpacity>
            {!userProfessional && (
              <TouchableOpacity onPress={() => setModalVisible(true)} style={{
                backgroundColor: '#4CAF50',
                borderRadius: 12,
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 12
              }}>
                <Text weight='600' color='#FFFFFF'>Quero Trabalhar</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      <CreateProfessionalModal isVisible={modalVisible} onClose={() => setModalVisible(false)} onConfirm={handleProfessionalCreated}/>
    </>
  );
};
