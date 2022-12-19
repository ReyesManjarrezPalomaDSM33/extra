import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return(
        <Tab.Navigator
        screenOptions = { ( {route})=> ({
       tabBarIcon: ({focused, color, size}) => {
        let iconName = '';
        switch (route.name){
                case 'Home':
                iconName = focused ? 'home' : 'home-outline';
            break;
                case 'Profile':
                iconName =  focused ? 'planet-outline': 'planet-outline';
             break;
                case 'Settings':
                iconName =  focused ? 'cog': 'settings-outline';
             break;
        }

        return <Icon name={iconName} size={30} color= {color} />
       }
        })}
        >
            <Tab.Screen name = 'Home' component={HomeScreen }/>
            <Tab.Screen  name = 'Profile' component ={ProfileScreen}/>
            <Tab.Screen name = 'Settings' component ={SettingsScreen}/>
        </Tab.Navigator>
    );
}