import React from "react";
import { View, Text } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import styles from './styles'

const PlaceRow = ({ data }) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
          <Entypo name='location-pin' siz={20} color={'white'} />
      </View>
      <View>
      <Text style={[styles.locationText,{fontSize:16}]}>{data.structured_formatting.main_text}</Text>
      <Text style={[styles.locationText,{color:"gray"}]}>{data.structured_formatting.secondary_text}</Text>
      {/* <Text style={styles.locationText}>{data.description || data.vicinity}</Text> */}
    </View>
    </View>
    
  );
};

export default PlaceRow;