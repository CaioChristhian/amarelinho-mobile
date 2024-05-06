import React, { useState } from 'react';
import { StarIcon } from '../../components/Icons/StarIcon';
import * as S from './styles';

export function ProfessionalAssessment() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  return (
    <S.Container>
      <S.Title>Avalie o serviço do profissional</S.Title>
      <S.StyledImage source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNoq1zTM-9JCnGrlFIvyZU-gW7KNvQc30AMcHEiCBLAA&s' }} />
      <S.Title>Joser Pereira</S.Title>
      <S.RatingContainer>
        {[1, 2, 3, 4, 5].map((value) => (
          <S.RatingButton key={value} onPress={() => setRating(value)}>
            <StarIcon />
          </S.RatingButton>
        ))}
      </S.RatingContainer>
      <S.StyledTextInput
        value={comment}
        onChangeText={setComment}
        placeholder="Digite seu comentário aqui"
      />
      <S.ButtonContainer>
        <S.StyledButton onPress={() => { /* lógica para enviar avaliação */ }}>
          <S.ButtonText>Enviar Avaliação</S.ButtonText>
        </S.StyledButton>
        <S.StyledButtonGreen onPress={() => { /* lógica para voltar */ }}>
          <S.ButtonText>Voltar</S.ButtonText>
        </S.StyledButtonGreen>
      </S.ButtonContainer>
    </S.Container>
  );
}