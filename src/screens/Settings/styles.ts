import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #FCF787;
`;

export const CardConfig = styled.TouchableOpacity<{ borderBottom?: boolean }>`
    width: 100%;
    padding: 16px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: ${props => props.borderBottom ? '1px' : '0'};
    border-bottom-color: ${props => props.borderBottom ? 'rgba(204, 204, 204, 0.3)' : 'transparent'};
`;

export const CardContent = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 16px;
`;
