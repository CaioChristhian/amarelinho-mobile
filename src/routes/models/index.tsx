import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type PropsNavigationStack = {
	Login: undefined;
	SingUp: undefined;
	Home: undefined;
	Profile: undefined;
	tab: undefined;
	ProfileDetailing: undefined;
	Settings: undefined;
}

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>
