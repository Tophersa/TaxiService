import { View, Text,StyleSheet,Image, TouchableOpacity, Dimensions, useWindowDimensions,ActivityIndicator } from 'react-native'
import React, {useRef, useMemo, useCallback} from 'react'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { EvilIcons,FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import COLOURS from '../../../assets/utilities/COLOURS';
import { useRoute } from '@react-navigation/native';
import MapView from 'react-native-maps';



const ConfirmedScreen = ({navigation}) => {
    
    const route = useRoute()
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['45%', '60%'], []);
    const {width, height}=useWindowDimensions();

    //console.warn(route.params)

  return (
    <View style={{backgroundColor:"blue", flex:1}}>
      
    
      <MapView style={styles.map} showsUserLocation followsUserLocation provider={'google'}/>
        
      <BottomSheet ref={bottomSheetRef}
        index={0} snapPoints={snapPoints}
        handleIndicatorStyle={{backgroundColor: "lightgray", width:50, height:7}}
      >
        <Text style={{margin:10, fontSize:25,fontWeight:"700"}}>Booking confirmed</Text>
        <Text style={{fontSize:18, margin:10, color:"gray"}} numberOfLines={2}>Bolt has accepted your booking. Finding you a driver...</Text>
        <ActivityIndicator size="large" color={COLOURS.primary}/>
        <View style={{flexDirection:"row", justifyContent:"space-around", margin:10}}>  
            <View style={{alignItems:"center"}}>
                <Image style={{height:60, width:60, borderRadius:30}} source={require('../../../assets/driver.jpg')}/>
                <Text>Tshibaka</Text>
            </View>
            <View style={{alignItems:"center"}}>
                <View style={{height:60,width:60,borderRadius:30,backgroundColor:"#FDEDEC", justifyContent:"center", alignItems:"center"}}>
                    <MaterialCommunityIcons name="car-off" size={30} color="red" />
                </View>
                <Text>Cancel Trip</Text>
            </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('DestinationSearch')} style={{flexDirection:"row",alignItems:"center", borderTopWidth:1, borderTopColor:"lightgray", margin:10, width:320,padding:10}}>
            <Entypo name="location-pin" size={25} color={COLOURS.primary} />
            <Text style={{fontSize:17, marginHorizontal:10}} numberOfLines={1} ellipsizeMode={'middle'}>Respublica Rosscommon,Claremont, Rosscommon str, South Africa</Text>
            <FontAwesome5 name="pen" size={20} color="lightgray" />
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
export default ConfirmedScreen