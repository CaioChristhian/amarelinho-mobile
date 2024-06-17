import React from 'react';

import { Text } from '../../components/Text';
import { ArrowRightIcon } from '../../components/Icons/ArrowRightIcon';
import { SunIcon } from '../../components/Icons/SunIcon';
import { LanguageIcon } from '../../components/Icons/LanguageIcon';
import { BellIcon } from '../../components/Icons/BellIcon';

import * as S from './styles';

export function Settings(){
    return (
        <S.Container>
            <Text style={{ padding: 24 }} weight='600' size={24}>Configurações</Text>



            <S.CardConfig>
                <S.CardContent>
                    <BellIcon />
                    <Text size={16}>Notificações </Text>
                </S.CardContent>
                <ArrowRightIcon color='#000000' />
            </S.CardConfig>

        </S.Container>
    );
}
