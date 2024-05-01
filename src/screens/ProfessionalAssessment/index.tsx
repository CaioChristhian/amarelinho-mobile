import React, { useState } from 'react';
import { Button } from 'react-native';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

export function ProfessionalAssessment() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  return (
    <S.Container>
      <S.Title>Avalie o serviço desse profissional</S.Title>
      <S.StyledImage source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNoq1zTM-9JCnGrlFIvyZU-gW7KNvQc30AMcHEiCBLAA&s' }} />
      <S.RatingContainer>
        {[1, 2, 3, 4, 5].map((value) => (
          <S.RatingButton key={value}/>
        ))}
      </S.RatingContainer>
      <S.StyledTextInput
        value={comment}
        onChangeText={setComment}
        placeholder="Digite seu comentário aqui"
      />
      <Button title="Enviar Avaliação" onPress={() => { /* lógica para enviar avaliação */ }} />
    </S.Container>
  );
}