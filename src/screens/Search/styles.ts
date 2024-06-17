import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.ScrollView`
	flex: 1;
	background-color: #FCF787;
	padding: 0 24px;
`;

export const Header = styled.View`
	flex-direction: row;
	align-items: center;
	margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` :  '0'};
	justify-content: space-evenly;
`;

export const HeaderTextContainer = styled.View`
	align-items: center;
	text-align: center;
`;

export const Button = styled.TouchableOpacity`
	background-color: #6070FF;
	height: 32px;
	border-radius: 8px;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const InputContainer = styled.View`
	align-self: center;
	padding: 12px;
	background-color: #FFF;
	flex-direction: row;
	border-radius: 12px;
	align-items: center;
	justify-content: center;
	margin-top: 8px;
	width: 95%;
`;

export const Input = styled.TextInput`
	padding-left: 14px;
`;

