import React from 'react';
import {View} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import COLOURS from '../../../assets/utilities/COLOURS';


const PickUpLocationScreen = ({navigation}) => {
  return (
    <View style={{flex:1, height:'100%', backgroundColor: COLOURS.lightBlue}}>
        <GooglePlacesAutocomplete
        styles={{
            textInputContainer: {
                borderRadius: 10,
                margin:10
          },textInput: {
                backgroundColor: "white",
                height: 60,
                borderRadius: 7,
                paddingVertical: 5,
                paddingHorizontal: 10,
                fontSize: 17,
                borderWidth: 1,
                borderColor: COLOURS.primary
          },listView:{
                margin:10
          }}}
        placeholder='Search pick-up location'
        onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            navigation.goBack()
        }}
        query={{
            key: 'AIzaSyAdpaNGsAySEV9W50eZydnCXbYM6iX_2kQ',
            language: 'en',
        }}
        currentLocation={true}
        currentLocationLabel='Current location'
        />
    </View>
  );
};

export default PickUpLocationScreen;