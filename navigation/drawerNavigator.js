import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './tabNavigator';
import Profile from '../screens/profile';

const Drawer=createDrawerNavigator();

const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={BottomTabNavigator} />
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    )    
}
export default DrawerNavigator;