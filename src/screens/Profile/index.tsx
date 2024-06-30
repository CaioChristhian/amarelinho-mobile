import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';

import styles from './styles';
import { useAuth } from '../../context/AuthContext';
import { CreateProfessionalModal } from '../../components/CreateProfessionalModal/CreateProfessionalModal';
import { Text } from '../../components/Text';
import api from '../../services/api';
import { IUserImage } from '../../types';

export function Profile() {
  const { user, logout } = useAuth()!;
  const [modalVisible, setModalVisible] = useState(false);
  const [userProfessional, setUserProfessional] = useState(null);
  const [imageUri, setImageUri] = useState<string | null>(null);
	const [userImage, setUserImage] = useState<IUserImage | null>(null); // Estado tipado com IUserImage

	const compressImage = async (uri: any) => {
		const result = await ImageManipulator.manipulateAsync(
			uri,
			[{ resize: { width: 1000 } }], // Ajuste conforme necessário
			{ compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
		);
		return result.uri;
	};


  useEffect(() => {
    if (user?.id) {
      api.get(`/professional`)
        .then((response) => {
          const professionals = response.data;
          const matchedProfessional = professionals.find((prof: any) => prof.user_id === user.id);
          setUserProfessional(matchedProfessional);
        })
        .catch(error => {
          console.error('Failed to fetch professionals:', error);
        });

    }
  }, [user?.id]);

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
			Alert.alert("Success", "Image uploaded successfully!");
			console.log(response);
		} catch (error) {
			console.error("Error uploading image: ", error);
			Alert.alert("Error", "Failed to upload image.");
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
		}
	};


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
            <Text style={styles.userName}>{user?.name || 'João Silva'}</Text>
            <Text style={styles.userOccupation}>Designer</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>4.5</Text>
            </View>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={handleToggleImage} style={styles.avatar}>
              <Image source={{ uri: imageUri || 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png' }} style={styles.avatar} />
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
        <Text style={styles.historyText}>Histórico</Text>
      </View>
      <CreateProfessionalModal isVisible={modalVisible} onClose={() => setModalVisible(false)} />
    </>
  );
};
