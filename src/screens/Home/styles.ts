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
	margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
	justify-content: space-evenly;
`;

export const HeaderTextContainer = styled.View`
	align-items: center;
	text-align: center;
`;

export const ImageProfile = styled.Image`
	width: 72px;
	height: 72px;
	border-radius: ${72 / 2}px;
`;

export const Hottest = styled.View`
	margin-top: 8px;
`;

export const HottestBanners = styled.ImageBackground`
	height: 170px;
	width: max-content;
	padding: 0 10px;
	margin-top: 8px;
`;

export const ProfessionalDetails = styled.View`
	margin-top: 16px;
	flex-direction: row;
`;

export const ProfessionalImage = styled.Image`
	height: 75px;
	width: 75px;
	border-radius: ${75 / 2}px;
`;

export const ProfessionalDescription = styled.View`
	padding-left: 12px;
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

export const PersonalService = styled.TouchableOpacity`
	align-self: center;
	padding: 14px;
	background-color: #FFF;
	flex-direction: row;
	border-radius: 12px;
	align-items: center;
	justify-content: center;
	margin-top: 24px;
	width: 95%;
`;

export const RecomendationContainer = styled.View`
	margin-top: 24px;
`;

export const ProfessionalList = styled.View`
	padding-bottom: 14px;
`;

export const ProfessionalCard = styled.View`
	margin-top: 24px;
	background-color: #FFF;
	padding: 16px;
	justify-content: space-around;
	border-radius: 14px;
	flex-direction: row;
	align-items: center;
`;

export const ProfessionalImageCard = styled.Image`
	height: 120px;
	width: 84px;
	border-radius: 14px;
	margin-right: 8px;
`;

export const ProfessionalInfo = styled.View`
flex: 1;
`;

export const RatingContainer = styled.View`
	flex-direction: row;
`;

