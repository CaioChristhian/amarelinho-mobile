import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #FCF787;
`;
export const ProfileView = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
export const InfoView = styled.View`
  margin-top: 20px;
  flex: 1;
  align-items: center;
`;
export const ProfessionalInfo = styled.View`
  margin: 15px;
  margin-top: 20px;
  border-radius: 10px;
`;
export const RatingContainer = styled.View`
	flex-direction: row;
`;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
export const GalleryImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProfileText = styled.Text`
  font-size: 16px;
  color: #333;
`;
export const NameText = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;
export const OccupationText = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: 600;
`;
export const InfoText = styled.Text`
  margin: 2px 2px;
  font-weight: bold;
`;
export const ValueText = styled.Text`
  margin: 1px 4px;
`;
export const TitleText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;
  align-self: center;
`;
export const GalleryTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;
`;
export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
`;

export const ServiceButton = styled.TouchableOpacity`
    background-color: blue;
    padding: 10px 20px;
    margin-right: 10px;
    border-radius: 5px;
`;

export const ChatButton = styled.TouchableOpacity`
    background-color: green;
    padding: 10px 20px;
    margin-left: 10px;
    border-radius: 5px;
`;

export const ButtonText = styled.Text`
    color: white;
    font-weight: bold;
`;
