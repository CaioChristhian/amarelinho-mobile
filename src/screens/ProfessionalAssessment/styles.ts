import styled from 'styled-components/native';
import { TouchableOpacity, TextInput, Image } from 'react-native';

export const Container = styled.View`
  background-color: #FCF787;
  flex: 1;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const StyledImage = styled(Image)`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

export const StyledTextInput = styled(TextInput)`
  height: 40%;
  width: 80%;
  border: 1px solid #000;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const RatingButton = styled.TouchableOpacity`
  padding: 10px;
  margin: 5px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: blue;
  padding: 10px;
  margin: 5px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const StyledButtonGreen = styled(StyledButton)`
  background-color: green;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;