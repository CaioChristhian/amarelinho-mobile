// Passo 1: Modifique IconProps para incluir style
import { SvgXml } from 'react-native-svg';
import { IconProps } from '../../types';
import { ViewStyle } from 'react-native'; // Importe ViewStyle para tipagem de estilo

// Estenda IconProps para incluir style opcional
interface ExtendedIconProps extends IconProps {
  style?: ViewStyle;
}

// Passo 2: Modifique a função HeartIcon para aceitar style
export function HeartIcon({ color = '#000000', size = 24, style }: ExtendedIconProps) {
    const markup = `
    <svg width=${size} height=${size} viewBox="0 0 25 24" fill=${color} xmlns="http://www.w3.org/2000/svg">
    <path d="M0 7.72053C0 13.1658 4.40425 18.5217 11.3499 23.1233C11.6213 23.2895 11.9914 23.4684 12.2505 23.4684C12.5096 23.4684 12.8797 23.2895 13.1388 23.1233C20.0967 18.5217 24.501 13.1658 24.501 7.72053C24.501 3.19561 21.5031 0 17.5059 0C15.2113 0 13.3608 1.12485 12.2505 2.85044C11.1402 1.13761 9.27729 0 6.995 0C2.99789 0 0 3.19561 0 7.72053ZM1.98626 7.72053C1.98626 4.32046 4.10817 2.05794 6.97031 2.05794C9.28966 2.05794 10.6097 3.55349 11.4116 4.83176C11.7447 5.34305 11.9544 5.48365 12.2505 5.48365C12.5466 5.48365 12.7317 5.33023 13.0894 4.83176C13.9283 3.57907 15.2237 2.05794 17.5306 2.05794C20.3928 2.05794 22.5147 4.32046 22.5147 7.72053C22.5147 12.4756 17.6663 17.6013 12.4972 21.1548C12.3738 21.2443 12.2998 21.3082 12.2505 21.3082C12.2011 21.3082 12.1148 21.2443 11.9914 21.1548C6.83461 17.6013 1.98626 12.4756 1.98626 7.72053Z" fill="#CB0303"/>
    </svg>
 `;

    // Passo 3: Passe style para SvgXml
    return <SvgXml xml={markup} style={style} />;
}