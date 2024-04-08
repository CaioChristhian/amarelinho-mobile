import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';
import { SingUp } from '../screens/SingUp';
import { Text } from '../components/Text';
import { PropsNavigationStack } from './models';
import { Home } from '../screens/Home';

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
		<View style={{ borderBottomWidth: focused ? 2 : 0, borderBottomColor: '#D73035', width: 12, marginTop: 4 }}></View>
	</>
);

function AppTabRoutes() {

	return (
		<Navigator
			screenOptions={{
				tabBarHideOnKeyboard: true,
				headerShown: false,
				tabBarActiveTintColor: '#D73035',
				tabBarInactiveTintColor: '#666666',
				tabBarShowLabel: true, // Exibir o texto do tabBarLabel
				tabBarStyle: {
					backgroundColor: '#FFFFFF',
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

					tabBarLabel: ({ focused, color }) => (
						<CustomTabBarLabel color={color} label='Home' focused={focused} />
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
			initialRouteName='Login'
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
		</Stack.Navigator>
	);
};
