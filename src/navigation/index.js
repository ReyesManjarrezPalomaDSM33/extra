
import * as React from 'react';
import {BottomNavigation} from './bottom'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from '../carrusels/Onboarding';
import Onboarding3 from '../carrusels/Onboarding3';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
const Stack = createNativeStackNavigator();

export const Navigation = () =>  {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome'> 
        <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false  }} />
        <Stack.Screen name="Root" component={BottomNavigation}  options={{ headerShown: false,title: 'home' }} />
        <Stack.Screen name="Perfil" component={ProfileScreen}  options={{title: 'regresar' }} />
        <Stack.Screen name="settings" component={SettingsScreen}  options={{title: 'regresar' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}