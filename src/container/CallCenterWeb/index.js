import React, { useState, useEffect } from "react";
import { Dimensions } from 'react-native';

import {
    Image,
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from "react-native";
import Colors from "../../utils/Colors";
import { Switch } from 'react-native-switch';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import ActivityLog from "../../components/ActivityLog";
import CallCenter from "../../components/CallCenter";
import { ScrollView } from "react-native-gesture-handler";
import Realtor from "../../components/Realtor";
import Scripts from "../../components/Scripts";
const CallCenterWeb = () => {
    return(

        <SafeAreaView style={{ backgroundColor: Colors.cream, height: "100%", width:"100%",}}>
          <View style={{ backgroundColor: Colors.cream, height: "100%", alignContent: "center", justifyContent: "center",width:"100%",paddingTop:0}}>
     
       <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",paddingHorizontal:12,marginBottom:12}}>
      <View style={{marginHorizontal:4}}> <CallCenter/></View> 
      <View style={{marginHorizontal:4}}><Realtor/></View> 
      
       </View>
       <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",paddingHorizontal:12,}}>
      <View style={{marginHorizontal:4}}> <ActivityLog/></View> 
      <View style={{marginHorizontal:4}}><Scripts/></View> 
      
       </View>
       <View style={{width:"100%"}}> 
       
                            </View>
                            </View>
                            <TouchableOpacity style={styles.backiconcover}>
                                <Image
                                    style={styles.backimagenew}
                                    source={require("../../../assets/blackchat.png")}
                                ></Image>

                            </TouchableOpacity>
            </SafeAreaView>
            

    );
}
export default CallCenterWeb;
const styles = StyleSheet.create({
    backiconcover: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        backgroundColor: Colors.PrimaryColor,
        height: 45,
        width: 45,
        borderRadius: 100,
        position:"absolute",bottom:20,right:10
    }, backimagenew: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        tintColor: Colors.white
    },
});