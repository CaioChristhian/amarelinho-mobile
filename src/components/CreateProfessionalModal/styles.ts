import styled from 'styled-components/native';

export const MyModal = styled.Modal`
`

export const ModalContent = styled.View`
	background-color: #FCF787;
	padding: 20px;
	align-items: center;
	flex: 1;
`;

export const CloseButton = styled.TouchableOpacity`
	align-self: flex-start;
	background-color: rgba(121,121,	121, 0.4);
	border-radius: 18px;
	padding: 2px;
`;

export const StyledInput = styled.TextInput`
  background-color: #FFFFFF;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 15px;
	border: 1px solid rgba(121,121,	121, 0.4);
`;

export const ConfirmButton = styled.TouchableOpacity`
	width: 100%;
	height: 50px;
	background-color: #87B972;
	border-radius: 12px;
	align-items: center;
	justify-content: center;
	margin-top: 24px;
`
