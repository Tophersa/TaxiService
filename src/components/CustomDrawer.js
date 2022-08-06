import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import COLOURS from '../../assets/utilities/COLOURS'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const CustomDrawer = (props) => {
  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: COLOURS.primary}}>
            <TouchableOpacity style={{margin:10, flexDirection: "row", alignItems: "center", marginTop:1}}>
                <Ionicons name="person-circle-outline" size={55} color="white" />
                <View style={{marginLeft: 10}}>
                    <Text style={{color: "white", fontSize: 20, fontWeight: "700", marginBottom:5}}>Mukhotho Vhonani</Text>
                    <Text style={{color: "white", fontSize: 16}}>Edit profile</Text>
                </View>
            </TouchableOpacity>
        <View style={{flex:1, backgroundColor: "white"}}>
            <DrawerItemList {...props}/>
        </View>
        </DrawerContentScrollView>
        
            <TouchableOpacity style={{padding:10, backgroundColor: "#28B463", marginHorizontal: 20, borderRadius:5, flexDirection: "row", alignItems:"center", justifyContent:"space-between"}}>
                <View>
                    <Text style={{color: "white", fontWeight: "700", fontSize: 16}}>Register to drive</Text>
                    <Text style={{color: "white", fontWeight: "400", fontSize: 14}}>Earn by driving</Text>
                </View>
                <View>
                    <FontAwesome5 name="car" size={35} color="white" />
                </View>
            </TouchableOpacity>
        <View style={{padding:20, borderTopWidth:1, borderTopColor: "#ccc", marginTop: 10}}>
            <TouchableOpacity style={{flexDirection: "row", alignItems: "center", paddingVertical: 10}}>
                <Ionicons name="share-social-outline" size={24} color="green" />
                <Text style={{color:"green", fontSize: 16, marginLeft: 5}}>Invite a friend</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: "row", alignItems: "center", paddingVertical:10, marginBottom:25}}>
                <Ionicons name="log-out-outline" size={24} color="#CB4335" />
                <Text style={{color:"#CB4335", fontSize: 18, marginLeft: 5, fontWeight: "600"}}>Log out</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CustomDrawer