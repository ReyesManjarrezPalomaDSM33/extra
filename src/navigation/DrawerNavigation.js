import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"
import ProfileScreen from "../screens/ProfileScreen"
import SettingsScreen from "../screens/SettingsScreen"

const Drawer = createDrawerNavigator()

export function DrawerNavigation() {
    return(
        <Drawer.Navigator>
        <Drawer.Screen name = "Settings" component={SettingsScreen}/>
        </Drawer.Navigator>
    );


};