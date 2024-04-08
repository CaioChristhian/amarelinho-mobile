import styled from 'styled-components/native';
import { TouchableOpacity, Text, Image } from 'react-native';

export const Container = styled.View`
  background-color: #FCF787;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const StyledInput = styled.TextInput`
  background-color: #FFFFFF;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 15px;
`;

export const StyledButton = styled(TouchableOpacity)`
  background: #3345E9;
  border-radius: 15px;
  width: 50%;
  padding: 10px;
  align-items: center;
  margin-top: 15px;
`;

export const ButtonText = styled.Text`
  color: #FFFFFF;
`;

export const GoogleButton = styled(TouchableOpacity)` 
  background-color: #E0F0FA;
  border-radius: 15px;
  width: 100%;
  padding: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
`;

export const GoogleButtonText = styled(Text)`
  color: #0273BB;
  text-align: center;
  flex: 1;
`;

export const BackButton = styled(TouchableOpacity)`
  border-radius: 15px;
  width: 40%;
  padding: 10px;
  align-items: center;
  margin-top: 20px;
`;

export const BackButtonText = styled(Text)`
  color: #0273BB;
`;
