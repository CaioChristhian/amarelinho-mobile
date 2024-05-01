import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';
import { SingUp } from '../screens/SingUp';
import { ProfileDetailing } from '../screens/ProfileDetailing';
import { ProfessionalAssessment } from '../screens/ProfessionalAssessment';
import { Text } from '../components/Text';
import { PropsNavigationStack } from './models';
import { Profile } from '../screens/Profile';
import { Home } from '../screens/Home';
import { LogoIcon } from '../components/Icons/LogoIcon';
import { ProfileIcon } from '../components/Icons/ProfileIcon';


const { Navigator, Screen } = createBottomTabNavigator<PropsNavigationStack>();
const Stack = createNativeStackNavigator();

interface PropsCustomTabBarLabel {
	label: string;
	focused: boolean;
	color: string;
}

const CustomTabBarLabel = ({ label, focused, color }: PropsCustomTabBarLabel) => (
	<>
		<Text color={color} size={14}>{label}</Text>
		<View style={{ borderBottomWidth: focused ? 2 : 0, borderBottomColor: '#A09904', width: 12, marginTop: 4 }}></View>
	</>
);

function AppTabRoutes() {

	return (
		<Navigator
			screenOptions={{
				tabBarHideOnKeyboard: true,
				headerShown: false,
				tabBarActiveTintColor: '#A09904',
				tabBarInactiveTintColor: '#666666',
				tabBarShowLabel: true, // Exibir o texto do tabBarLabel
				tabBarStyle: {
					backgroundColor: '#FCF787',
					minHeight: 72,
					paddingBottom: 8,

				},
				tabBarLabelStyle: {
					fontSize: 12,
				},
				tabBarIconStyle: {
					marginBottom: -12
				}
			}}
		>
			<Screen
				name='Home'
				component={Home}
				options={{
					tabBarIcon: ({ color }) => (
						<LogoIcon
							color={color}
						/>
					),

					tabBarLabel: ({ focused, color }) => (
						<CustomTabBarLabel color={color} label='Home' focused={focused} />
					),
				}}
			/>

			<Screen
				name='Profile'
				component={Profile}
				options={{
					tabBarIcon: ({ color }) => (
						<ProfileIcon
							color={color} width={24} height={24}
						/>
					),

					tabBarLabel: ({ focused, color }) => (
						<CustomTabBarLabel color={color} label='Profile' focused={focused} />
					),
				}}
			/>
		</Navigator>
	);
}

export const AppRoutes = () => {

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
			initialRouteName='ProfessinalAssessment'
		>
			<Stack.Screen
				name='tab'
				component={AppTabRoutes}
			/>

			<Stack.Screen
				name='Login'
				component={Login}
			/>

			<Stack.Screen
				name='SingUp'
				component={SingUp}
			/>
			<Stack.Screen
				name='Profile'
				component={Profile}
			/>

			<Stack.Screen
				name='ProfileDetailing'
				component={ProfileDetailing}
			/>

			<Stack.Screen
				name='ProfessinalAssessment'
				component={ProfessionalAssessment}
			/>
		</Stack.Navigator>
	);
};
