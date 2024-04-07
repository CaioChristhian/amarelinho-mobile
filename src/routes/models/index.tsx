import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type PropsNavigationStack = {
	Login: undefined;
	SingUp: undefined;
	Home: undefined;
	tab: undefined;
}

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>
