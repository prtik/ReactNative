import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/Login/View';
import Routes from './Routes';
import { DashboardScreen } from '../screens/DashBoard/View';

const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
          name= "LoginScreen"
          component={LoginScreen}
          options={{ 
            headerShown: false,
            title: 'Login' }}
        />
      <Stack.Screen name= {Routes.DASHBOARD_SCREEN} component={DashboardScreen} />
    </Stack.Navigator>
  );
}