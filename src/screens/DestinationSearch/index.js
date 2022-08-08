import React, {useState, useEffect, useRef} from 'react';
import {View, TextInput, SafeAreaView, StyleSheet} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLOURS from '../../../assets/utilities/COLOURS.js';

import styles from './styles.js';
import PlaceRow from "./PlaceRow";


const DestinationSearch = (props) => {

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResultsScreen', {
        originPlace,
        destinationPlace,
      })
    }
  }

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);


  return (
    <SafeAreaView>
      <View style={styles.container}>

        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          nearbyPlacesAPI="GooglePlacesSearch"
          GooglePlacesSearchQuery={{rankby: 'distance'}}
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAdpaNGsAySEV9W50eZydnCXbYM6iX_2kQ',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
        
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          GooglePlacesSearchQuery={{rankby: 'distance'}}
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAdpaNGsAySEV9W50eZydnCXbYM6iX_2kQ',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />

        <View style={styles.circle}>
          <MaterialCommunityIcons name="location-enter" size={20} color={COLOURS.primary} />
        </View>

        <View style={styles.square}>
          <MaterialCommunityIcons name="location-exit" size={20} color={COLOURS.primary} />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;