import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import LocationInputScreen from '../screens/LocationInputScreen';
import CustomDrawer from '../components/CustomDrawer';
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import COLOURS from '../../assets/utilities/COLOURS';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator drawerContent={props=> <CustomDrawer {...props}/>} 
    screenOptions={{
        
        drawerActiveBackgroundColor: "#AED6F1", 
        drawerActiveTintColor: "black",
        drawerLabelStyle:{marginLeft:-25, fontSize:16}}} 
    >
      <Drawer.Screen name="Home" component={HomeScreen}
        options={{
            drawerIcon:({color})=>(<Ionicons name="home-outline" size={24} color={color} />),
            headerShown: false,
        }}
      />
      <Drawer.Screen name="Payment" component={LocationInputScreen} 
        options={{
            drawerIcon:({color})=>(<Ionicons name="wallet-outline" size={24} color={color} />)
        }}
      />
      <Drawer.Screen name="My Trips" component={LocationInputScreen} 
        options={{
            drawerIcon:({color})=>(<MaterialCommunityIcons name="bag-suitcase-outline" size={24} color={color} />)
        }}
      />
      <Drawer.Screen name="Support" component={LocationInputScreen} 
        options={{
            drawerIcon:({color})=>(<Ionicons name="chatbox-ellipses-outline" size={24} color={color} />)
        }}
      />
      <Drawer.Screen name="About" component={LocationInputScreen} 
        options={{
            drawerIcon:({color})=>(<Ionicons name="information-circle-outline" size={24} color={color} />)
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNav