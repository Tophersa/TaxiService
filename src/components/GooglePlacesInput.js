import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import COLOURS from '../../assets/utilities/COLOURS'

const GooglePlacesInput = ({placeholder}) => {
  return (
    <GooglePlacesAutocomplete
      styles={{
        textInputContainer: {
        borderRadius: 5
        
      },listView:{
        
      },textInput: {
        backgroundColor: COLOURS.lightBlue,
        height: 60,
        borderRadius: 7,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 17,
        flex: 1,
      }}}
      placeholder={placeholder}
      currentLocation={true}
      fetchDetails = {true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyAdpaNGsAySEV9W50eZydnCXbYM6iX_2kQ',
        language: 'en',
      }}
    />
  );
};

export default GooglePlacesInput;