import * as React from 'react';
import {StyleSheet} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/feed';
import CreateStory from '../screens/createStory';
import {RFValue} from 'react-native-responsive-fontsize'

const Tab=createMaterialBottomTabNavigator();

const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStyle}
        screenOptions={({route})=>({
            tabBarIcon:({focused, color, size})=>{
                let iconName

                if(route.name==="Feed"){
                    iconName= focused ? 'home' : 'home-outline'
                }else if(route.name==="CreateStory"){
                    iconName= focused ? 'add-circle' : 'add-circle-outline'
                }
                return <Ionicons style={styles.icon} name={iconName} size={RFValue(25)} color={color} />
            },
            activeColor:'#ee8249',
            inactiveColor:'grey'

        })}
        >
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="CreateStory" component={CreateStory}/>
        </Tab.Navigator>
    )
}
const styles=StyleSheet.create({
    bottomTabStyle:{
        backgroundColor:'#2f345d',
        height:'8%',
        bottomTopLeftRadius:30,
        bottomTopRightRadius:30,
        position:'absolute',
        overflow:'hidden'
    },
    icon:{
        width:RFValue(30),
        height:RFValue(30)
    }
})
export default BottomTabNavigator;
