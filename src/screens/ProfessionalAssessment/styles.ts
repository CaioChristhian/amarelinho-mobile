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
  width: 60%;
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
  background-color: gray;
  padding: 10px;
  margin: 5px;
`;