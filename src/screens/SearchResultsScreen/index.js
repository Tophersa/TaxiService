import { View, Text,StyleSheet,Image, TouchableOpacity, Dimensions, useWindowDimensions, ActivityIndicator } from 'react-native'
import React, {useRef, useMemo, useEffect, useState} from 'react'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { EvilIcons,FontAwesome5, MaterialCommunityIcons, Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';
import COLOURS from '../../../assets/utilities/COLOURS';
import { useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';

const SearchResultsScreen = ({navigation}) => {
  const [myLocation, setMyLocation] = useState(null);

    const route = useRoute()
    const origin = {
      latitude: route.params.originPlace.details.geometry.location.lat, 
      longitude: route.params.originPlace.details.geometry.location.lng
    };
    const destination = {
      latitude: route.params.destinationPlace.details.geometry.location.lat, 
      longitude: route.params.destinationPlace.details.geometry.location.lng
    };

    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['50%', '60%'], []);
    const {width, height}=useWindowDimensions();

    //console.warn(route.params)
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setMyLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        });
      })();
    }, []);

    //console.warn(myLocation);

  if(!myLocation && route.params){
    return <ActivityIndicator size="large" color={COLOURS.primary}/>
  }

  return (
    <View style={{backgroundColor:"blue", flex:1}}>
      
    
      <MapView style={styles.map} showsUserLocation
       provider={'google'} initialRegion={{
          latitude: route.params.originPlace.details.geometry.location.lat,
          longitude: route.params.originPlace.details.geometry.location.lng,
          longitudeDelta: 0.03,
          latitudeDelta: 0.03
       }}>
       <Marker coordinate={{latitude: route.params.originPlace.details.geometry.location.lat, 
                            longitude: route.params.originPlace.details.geometry.location.lng
                            }}
        ><Ionicons name="pin-sharp" size={50} color={COLOURS.primary} /></Marker>
       <Marker coordinate={{latitude: route.params.destinationPlace.details.geometry.location.lat, 
                            longitude: route.params.destinationPlace.details.geometry.location.lng
                            }}
        ><FontAwesome name="dot-circle-o" size={40} color="navy" /></Marker>
       <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={"AIzaSyAdpaNGsAySEV9W50eZydnCXbYM6iX_2kQ"}
          strokeWidth={5}
          strokeColor="#EC7063"
         />
       </MapView>
        
      <BottomSheet ref={bottomSheetRef}
        index={0} snapPoints={snapPoints}
        handleIndicatorStyle={{backgroundColor: "lightgray", width:50, height:7}}
      >

      
        <View>
          <TouchableOpacity 
          style={{flexDirection: 'row', margin: 5, padding:10, borderBottomWidth:1,borderBottomColor: COLOURS.myGray, alignItems:"center"}}
          onPress={()=> navigation.goBack()}
          >
            <MaterialCommunityIcons name="star-box" size={25} color={COLOURS.primary} />
            <Text style={{fontSize:14, color:"#212F3C", marginLeft: 10, fontWeight: "700" }} numberOfLines={1}>{route.params.originPlace.data.description}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={{flexDirection: 'row', margin: 5, padding:10, borderBottomWidth:1,borderBottomColor: COLOURS.myGray, alignItems:"center"}}
          onPress={()=> navigation.goBack()}
          >
            <MaterialCommunityIcons name="star-box" size={25} color="#212F3C" />
            <Text style={{fontSize:14, color:"#212F3C", marginLeft: 10, fontWeight: "700"}} numberOfLines={1}>{route.params.destinationPlace.data.description}</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={{color:"black", marginHorizontal:20,marginBottom:5,marginVertical:5, fontWeight:"700", fontSize:15}}>AVAILABLE RIDES</Text>
        <View style={{flexDirection: "row", margin:5, justifyContent:"space-between"}}>
          <TouchableOpacity style={{padding: 2,backgroundColor:COLOURS.primary, borderRadius:10, width: "45%", margin: 5, alignItems: "center", flexDirection:"row"}}>
              <Image style={{height: 40, width: 90}} resizeMode={'center'} source={require('../../../assets/carTypes/carType2.png')}/>
              <View style={{padding:2}}>
                <Text style={{color: "white", fontSize:18, alignSelf:"center",fontWeight:"700"}}>R53</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={{padding:2, backgroundColor:COLOURS.lightBlue, borderRadius:10, width: "45%",height:75, margin: 5, alignItems:"center", flexDirection:"row"}}>
                <Image style={{height: 45, width: 95}} resizeMode={'center'} source={require('../../../assets/carTypes/expCarType.png')}/>
                <View style={{padding:2}}>
                  <Text style={{color: "black", fontSize:13, alignSelf:"flex-start"}}>Comming</Text>
                  <Text style={{color: "black", fontSize:13, alignSelf:"flex-start"}}>soon...</Text>
                </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={()=> navigation.navigate('PaymentScreen')} style={{flexDirection:"row", alignItems:"center", margin:5, height:40}}>
          <View style={{backgroundColor:COLOURS.lightBlue, borderRadius: 5, width: "70%", marginRight:10,height:50,flexDirection:"row", justifyContent: "space-between",alignItems:"center", padding:10, borderWidth:1, borderColor:"lightgray"}}>
            <Text style={{ fontWeight:"700" }}>CASH</Text>
            <Entypo name="chevron-right" size={20} color="black" />
          </View>
          <View style={{backgroundColor:"white", borderRadius:5, padding:10, height:50,width:"20%", borderWidth:1, borderColor:"lightgray", justifyContent:"center",alignItems:"center"}}>
            <FontAwesome5 name="coins" size={20} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('ArrivingScreen',route.params.destinationPlace.data.description)} style={{backgroundColor:COLOURS.primary, width:"95%", justifyContent:"center",alignItems:"center", margin:5, height:40, borderRadius:18}}>
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