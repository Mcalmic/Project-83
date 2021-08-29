import React from 'react';
import Profile from '../screens/profile.js'
import BottomTabNavigator from './tabNavigator.js'
import {createDrawerNavigator} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = 'Home' component={BottomTabNavigator}/>
            <Drawer.Screen name = 'Profile' component={Profile}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;
