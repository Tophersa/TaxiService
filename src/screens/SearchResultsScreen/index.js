import { View, Text,StyleSheet,Image, TouchableOpacity, Dimensions, useWindowDimensions } from 'react-native'
import React, {useRef, useMemo, useCallback} from 'react'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { EvilIcons,FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import COLOURS from '../../../assets/utilities/COLOURS';
import { useRoute } from '@react-navigation/native';
import MapView from 'react-native-maps';



const SearchResultsScreen = ({navigation}) => {
    
    const route = useRoute()
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['70%', '80%'], []);
    const {width, height}=useWindowDimensions();

    //console.warn(route.params)

  return (
    <View style={{backgroundColor:"blue", flex:1}}>
      
    
      <MapView style={styles.map} showsUserLocation followsUserLocation provider={'google'}/>
        
      <BottomSheet ref={bottomSheetRef}
        index={0} snapPoints={snapPoints}
        handleIndicatorStyle={{backgroundColor: "lightgray", width:50, height:7}}
      >

      
        <View>
          <TouchableOpacity 
          style={{flexDirection: 'row', margin: 10, padding:10, borderBottomWidth:1,borderBottomColor: COLOURS.myGray, alignItems:"center"}}
          onPress={()=> navigation.goBack()}
          >
            <MaterialCommunityIcons name="star-box" size={30} color={COLOURS.primary} />
            <Text style={{fontSize:18, color:"#212F3C", marginLeft: 10, fontWeight: "700"}}>{route.params.originPlace.description}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={{flexDirection: 'row', margin: 10, padding:10, borderBottomWidth:1,borderBottomColor: COLOURS.myGray, alignItems:"center"}}
          onPress={()=> navigation.goBack()}
          >
            <MaterialCommunityIcons name="star-box" size={30} color="#212F3C" />
            <Text style={{fontSize:18, color:"#212F3C", marginLeft: 10, fontWeight: "700"}}>{route.params.originPlace.destinationPlace}</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={{color:"black", marginHorizontal:20,marginBottom:10,marginVertical:10, fontWeight:"700", fontSize:17}}>AVAILABLE RIDES</Text>
        <View style={{flexDirection: "row", margin:10}}>
          <TouchableOpacity style={{padding: 10,backgroundColor:COLOURS.primary, borderRadius:10, width: 100, margin: 10, justifyContent: "center", alignItems: "center"}}>
              <Image style={{height: 60, width: 90}} source={require('../../../assets/carTypes/carType.png')}/>
              <Text style={{color: "white", fontWeight:"700", fontSize:14, alignSelf:"flex-start"}}>STANDARD</Text>
              <Text style={{color: "white", fontSize:16, alignSelf:"flex-start"}}>R53</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{padding:10, backgroundColor:COLOURS.lightBlue, borderRadius:10, width: 100, margin: 10, justifyContent: "center", alignItems:"center"}}>
                <Image style={{height: 60, width: 90}} source={require('../../../assets/carTypes/truckType.png')}/>
                <Text style={{color: "black", fontWeight:"700", fontSize:14, alignSelf:"flex-start"}}>HIRE A BIKE</Text>
                <Text style={{color: "black", fontSize:14, alignSelf:"flex-start"}}>Comming</Text>
                <Text style={{color: "black", fontSize:14, alignSelf:"flex-start"}}>soon...</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={()=> navigation.navigate('PaymentScreen')} style={{flexDirection:"row", alignItems:"center", margin:10, height:50}}>
          <View style={{backgroundColor:COLOURS.lightBlue, borderRadius: 5, width: "70%", marginRight:10,height:50,flexDirection:"row", justifyContent: "space-between",alignItems:"center", padding:10, borderWidth:1, borderColor:"lightgray"}}>
            <Text style={{ fontWeight:"700" }}>CASH</Text>
            <Entypo name="chevron-right" size={20} color="black" />
          </View>
          <View style={{backgroundColor:"white", borderRadius:5, padding:10, height:50,width:"20%", borderWidth:1, borderColor:"lightgray", justifyContent:"center",alignItems:"center"}}>
            <FontAwesome5 name="coins" size={20} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('ArrivingScreen')} style={{backgroundColor:COLOURS.primary, width:"95%", justifyContent:"center",alignItems:"center", margin:10, height:50, borderRadius:35}}>
          <Text style={{color:"white", fontSize:18, fontWeight:"700"}}>Book Now</Text>
        </TouchableOpacity>
      </BottomSheet>
    </View>
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
        backgroundColor: COLOURS.lightBlue,
        height: 55,
        width: "82%",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    buttonRight: {
        backgroundColor: COLOURS.lightBlue,
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
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
  });
export default SearchResultsScreen