import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import Router from './src/navigation/Router';
import 'react-native-gesture-handler';
import DrawerNav from './src/navigation/Drawer';

export default function App() {
  return (
    <NavigationContainer>
        
        <DrawerNav/>
      <StatusBar style="auto" />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
