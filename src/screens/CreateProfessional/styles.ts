import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

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

export const BoxButtons = styled.View`
  justify-content: space-between;
  align-items: center;
	flex-direction: row;
	width: 100%;
`;

export const DeclineButton = styled(TouchableOpacity)`
  background: #F6685E;
  border-radius: 15px;
  width: 48%;
  height: 50px;
  align-items: center;
  margin-top: 15px;
	display: flex;
	justify-content: center;
`;

export const AcceptButton = styled(TouchableOpacity)`
  background: #87B972;
  border-radius: 15px;
  width: 48%;
  height: 50px;
  align-items: center;
  margin-top: 15px;
	display: flex;
	justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #FFFFFF;
`;

export const ImageLogo = styled.Image`
	width: 200;
	height: 200;
	margin-bottom: 24px;
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
