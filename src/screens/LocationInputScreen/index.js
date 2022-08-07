import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import GooglePlacesInput from '../../components/GooglePlacesInput'
import COLOURS from '../../../assets/utilities/COLOURS'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LocationInputScreen = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.container}>
      
      <TouchableOpacity onPress={()=> navigation.navigate('PickUpLocationScreen')} style={{flexDirection:"row", alignItems:"center", margin:10, justifyContent: "space-between"}}>
        <MaterialCommunityIcons name="location-enter" size={30} color={COLOURS.primary} />
        <View style={styles.input}>
            <Text style={{color: "gray",fontSize:17}}>Pick-up Location</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('DestinationScreen')} style={{flexDirection:"row", alignItems:"center", margin:10, justifyContent: "space-between"}}>
        <MaterialCommunityIcons name="location-exit" size={30} color={COLOURS.primary} />
        <View style={styles.input}>
            <Text style={{color: "gray",fontSize:17}}>Destination</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={{alignSelf:"center",backgroundColor: COLOURS.primary, margin:10, width:350,height:50, borderRadius: 7, alignItems: "center", justifyContent:"center"}}>
        <Text style={{color: "white", fontWeight: "700", fontSize: 19}}>Confirm route</Text>
      </TouchableOpacity>
    
    </SafeAreaView>
  )
}

export default LocationInputScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: "100%"
  },
  input: {
    backgroundColor: COLOURS.lightBlue,
    marginRight:10,
    marginLeft: 5,
    marginTop:10,
    height:65,
    width: 300,
    borderRadius: 7,
    padding:10,
    borderWidth:3,
    borderColor: COLOURS.primary,
    justifyContent:"center"
  },
});
