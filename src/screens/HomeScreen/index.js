import { View, Text,StyleSheet, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, {useRef, useMemo, useCallback} from 'react'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { EvilIcons,FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import locationHistory from '../../../assets/data/locationHistory.json'


const HomeScreen = () => {
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['30%', '70%'], []);

    const renderItem = useCallback(
        ({ item }) => (
          <LocationHistory name={item.name} subName={item.subName}/>
        ),
        []
      );

  return (
    <View style={{backgroundColor:"blue", flex:1}}>
      <BottomSheet ref={bottomSheetRef}
        index={0} snapPoints={snapPoints}
        handleIndicatorStyle={{backgroundColor: "lightgray", width:50, height:7}}
      >
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonLeft}>
                <EvilIcons name="search" size={26} color="black" />
                <Text style={styles.whereTo}>Where to?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRight}>
                <FontAwesome5 name="map-marked-alt" size={24} color="black" />
            </TouchableOpacity>
        </View>

        <BottomSheetFlatList
          data={locationHistory}
          keyExtractor={(i) => i.id}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet>
    </View>
  )
}

const LocationHistory = ({name, subName}) => {
 
  return (
    <TouchableOpacity>
    <View style={{flexDirection: "row", alignItems: "center", margin:10,paddingLeft:10, paddingBottom:10, borderBottomWidth: 1, borderBottomColor: "lightgray"}}>
        <MaterialIcons name="access-time" size={24} color="gray" />
        <View style={{marginHorizontal: 10}}>
            <Text style={{fontWeight: "400", fontSize: 17}} numberOfLines={1}>{name}</Text>
            <Text style={{color: "gray", fontSize: 17}} numberOfLines={1}>{subName}</Text>
        </View>
    </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 10,
    },
    buttonLeft: {
        backgroundColor: "lightgray",
        height: 55,
        width: "82%",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    buttonRight: {
        backgroundColor: "lightgray",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        height: 55,
        width: "16%"
    },
    whereTo: {
        marginLeft: 10,
        fontWeight : "700",
        fontSize: 19,
    },
  });
export default HomeScreen