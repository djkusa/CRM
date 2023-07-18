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

const Scripts = () => {
    const screenWidth = Dimensions.get("window").width;


    return (
        <SafeAreaView style={{ backgroundColor: Colors.cream, height: "100%", alignContent: "center", justifyContent: "center", width: "100%" }}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View style={[styles.callCenterContainer, { alignItems: "center", justifyContent: "flex-start", borderRadius: 8, paddingVertical: 12 }]}>
                    <View style={{
                        width: "100%", padding: 16, borderRadius: 8, backgroundColor: Colors.white, shadowProp: {
                            shadowOffset: { width: -2, height: 4 },
                            shadowColor: '#171717',
                            shadowOpacity: 0.2,
                            shadowRadius: 3,
                        },
                    }}>

                        <View style={{ flexDirection: "row", justifyContent: "center", position: "relative", marginBottom: 30 }}>
                            <Text style={{ fontSize: 19, color: Colors.black }}>Scripts</Text>
                        
                        </View>
                        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginBottom: 20 }}>
                            <Text>Type</Text>
                            <Image
                                style={{
                                    height: 18,
                                    width: 18,
                                    resizeMode: "contain",
                                 
                                    tintColor: Colors.black
                                }}
                                source={require("../../assets/search.png")}
                            ></Image>
                        </View>
                        <View style={{position:"relative", alignItems: "center", justifyContent: "flex-start", flexDirection: "row", marginBottom: 5, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#0000001f" }}>
                        <Image
                                style={{
                                    height: 18,
                                    width: 18,
                                    resizeMode: "contain",
                                 
                                    tintColor: Colors.black
                                }}
                                source={require("../../assets/callblack.png")}
                            ></Image>
                            <Text style={{ paddingHorizontal: 8,}}>Call out to client </Text>
                           
                        </View>
                        <View style={{position:"relative", alignItems: "center", justifyContent: "flex-start", flexDirection: "row", marginBottom: 5, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#0000001f" }}>
                        <Image
                                style={{
                                    height: 18,
                                    width: 18,
                                    resizeMode: "contain",
                                 
                                    tintColor: Colors.black
                                }}
                                source={require("../../assets/callblack.png")}
                            ></Image>
                            <Text style={{ paddingHorizontal: 8 ,paddingRight:18}}>Call in property inquiry</Text>
                            
                        </View>
                        <View style={{position:"relative", alignItems: "center", justifyContent: "flex-start", flexDirection: "row", marginBottom: 5, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#0000001f" }}>
                        <Image
                                style={{
                                    height: 18,
                                    width: 18,
                                    resizeMode: "contain",
                                 
                                    tintColor: Colors.black
                                }}
                                source={require("../../assets/houseloam.png")}
                            ></Image>
                            <Text style={{ paddingHorizontal: 8 ,paddingRight:18}}>Appraisal was completed and Uploaded</Text>
                           
                        </View>
                        <View style={{position:"relative", alignItems: "center", justifyContent: "flex-start", flexDirection: "row", marginBottom: 5, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#0000001f" }}>
                        <Image
                                style={{
                                    height: 18,
                                    width: 18,
                                    resizeMode: "contain",
                                 
                                    tintColor: Colors.black
                                }}
                                source={require("../../assets/blackchat.png")}
                            ></Image>
                            <Text style={{ paddingHorizontal: 8 ,paddingRight:18}}>Appraisal was completed and Uploaded</Text>
                           
                        </View>
                    </View>



                </View>
            </View>

        </SafeAreaView>

    );
}
export default Scripts;
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
        height: 20,
        width: 20,
        resizeMode: "contain",
        tintColor: Colors.white
    },
    //   mainover:{alignItems:"center",justifyContent:"center",width:"100%"},
    callCenterContainer: {
        backgroundColor: Colors.white,
        // borderRadius: wp("2%"), // 2% border radius on different devices
        width:400,
        height:380,
    },
});