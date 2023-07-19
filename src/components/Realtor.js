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
import Colors from "../utils/Colors";
import { Switch } from 'react-native-switch';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
const Realtor = () => {
    const screenWidth = Dimensions.get("window").width;
    const [isEnabled, setIsEnabled] = useState(false);
    const [toggle, setToggle] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
        setToggle(!isEnabled);
    };
    return (
        <SafeAreaView style={{ backgroundColor: Colors.cream, height: "100%", alignContent: "center", justifyContent: "center",width:"100%" }}>
            <View style={{alignItems:"center",justifyContent:"center"}}>
            <View style={[styles.callCenterContainer, { alignItems: "center", justifyContent: "center",borderRadius:8,paddingVertical:12}]}>
                <View style={{
                    padding: 16, borderRadius: 8,
                    width:"100%",
                    alignItems:"center",
                   // backgroundColor:"red",
                        justifyContent:"center",
                    shadowProp: {
                        shadowOffset: { width: -2, height: 4 },
                        shadowColor: '#171717',
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                        
                    },
                }}>

                    <View style={{ flexDirection: "row", justifyContent: "center", position: "relative" ,marginBottom:20}}>
                        <Text style={{ fontSize: 19, color: Colors.black }}>Realtor</Text>

                    </View>

                   
                    <View style={{alignItems:"flex-start",justifyContent:"center",width:"100%",paddingHorizontal:12}}>
                    <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "center",paddingVertical:10 ,marginVertical:5,borderBottomWidth:1,borderBottomColor:Colors.boderColor,width:"100%"}}>
                    <Image
                            style={{
                                height: 25,
                                width: 25,
                                resizeMode: "contain",
                                borderRadius: 100,
                                marginRight: 8
                            }}
                            source={require("../../assets/profilePic.png")}
                        ></Image>

<Text style={{ fontSize: 15 }}>John Smith</Text>
                        </View>

                        <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "flex-start",paddingVertical:10 ,marginVertical:5,borderBottomWidth:1,borderBottomColor:Colors.boderColor,width:"100%"}}>
                            <Image
                                style={styles.backimagenew}
                                source={require("../../assets/callblack.png")}
                            ></Image>

                            <Text style={{ fontSize: 14 }}>45567788996</Text>
                        </View>
                        <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "flex-start", paddingVertical:10 ,marginVertical:5,borderBottomWidth:1,borderBottomColor:Colors.boderColor,width:"100%"}}>
                            <Image
                                style={styles.backimagenew}
                                source={require("../../assets/paperwhite.png")}
                            ></Image>

                            <Text style={{ fontSize: 14 }}>jsmith@surflokar.com</Text>
                        </View>
                        <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "flex-start", paddingVertical:10 ,marginVertical:5,borderBottomWidth:1,borderBottomColor:Colors.boderColor,width:"100%" }}>
                            <Image
                                style={styles.backimagenew}
                                source={require("../../assets/instagram.png")}
                            ></Image>

                            <Text style={{ fontSize: 14 }}>@johnsmithrealtprs</Text>
                        </View>
                        <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "flex-start", paddingVertical:10 ,marginVertical:5,borderBottomWidth:1,borderBottomColor:Colors.boderColor,width:"100%" }}>
                            <Image
                                style={styles.backimagenew}
                                source={require("../../assets/videowhite.png")}
                            ></Image>

                            <Text style={{ fontSize: 14 }}>John.smith@icloud.com</Text>
                        </View>
                    </View>


                    <View style={{ alignItems: "center", justifyContent: "center", width: "100%" }}>
                        <Image
                            style={{
                                resizeMode: "contain",
                                height:50,
                                width: 50,
                            }}
                            source={require("../../assets/speed3/speed3.png")}
                        /></View>
                </View>



            </View>
            </View>

        </SafeAreaView>

    );
}
export default Realtor;
const styles = StyleSheet.create({
    backiconcover: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        backgroundColor: Colors.PrimaryColor,
        height: 45,
        width: 45,
        borderRadius: 100
    }, backimagenew: {
        height: 18,
        width: 18,
        resizeMode: "contain",
        tintColor: Colors.black,
        marginRight: 8
    },
    //   mainover:{alignItems:"center",justifyContent:"center",width:"100%"},
    callCenterContainer: {
   backgroundColor: Colors.white,
       // borderRadius: wp("2%"), // 2% border radius on different devices
width:400,
height:360,
    },
});