import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import LocationInputScreen from '../screens/LocationInputScreen';
import DestinationScreen from '../screens/LocationInputScreen/DestinationScreen';
import PickUpLocationScreen from '../screens/LocationInputScreen/PickUpLocationScreen';
import DrawerNav from './DrawerNav';
import DestinationSearch from '../screens/DestinationSearch';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen name="DrawerNav" component={DrawerNav} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LocationInputScreen" component={LocationInputScreen} options={{headerTitle: ""}}/>
      <Stack.Screen name="DestinationScreen" component={DestinationScreen} />
      <Stack.Screen name="PickUpLocationScreen" component={PickUpLocationScreen} />
      <Stack.Screen name="DestinationSearch" component={DestinationSearch } options={{headerTitle: "Your route"}}/>
      
      
    </Stack.Navigator>
  )
}

export default Router
