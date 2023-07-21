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
import { useNavigation } from "@react-navigation/native";

const CallCenterWeb = () => {
  const navigation = useNavigation();

    return (
<SafeAreaView style={{ backgroundColor: Colors.cream, width: "100%",height:'100%' }}>
            <View
                style={{
                    paddingVertical: 4,
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: Colors.PrimaryColor,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 10,
                    }}
                >
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <Image style={{height:24,width:12,marginRight:16,tintColor:'white'}} source={require('../../assets/images/back.png')}></Image>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 19, color: Colors.white }}>In queue</Text>
                    <View style={{ backgroundColor: Colors.white, height: 60, width: 60, alignItems: "center", justifyContent: "center", borderRadius: 5, marginLeft: 5 }}>
                        <Image
                            style={{
                                height: 18,
                                width: 18,
                                resizeMode: "contain",
                                tintColor: Colors.black,
                                marginBottom: 3
                            }}
                            source={require("../../../assets/calling.png")}
                        />
                        <Text style={{ fontSize: 12, marginBottom: 3 }}>Phone</Text>
                        <Text style={{ fontSize: 12, }}>0</Text>
                    </View>
                    <View style={{ backgroundColor: Colors.white, height: 60, width: 60, alignItems: "center", justifyContent: "center", borderRadius: 5, marginLeft: 5 }}>
                        <Image
                            style={{
                                height: 18,
                                width: 18,
                                resizeMode: "contain",
                                tintColor: Colors.black,
                                marginBottom: 3
                            }}
                            source={require("../../../assets/blackchat.png")}
                        />
                        <Text style={{ fontSize: 12, marginBottom: 3 }}>Chat</Text>
                        <Text style={{ fontSize: 12, color: "#6cbd44" }}>4</Text>
                    </View>
                </View>
                <Text
                    style={{ fontSize: 19, fontWeight: "bold", color: Colors.white }}
                >
                    Call Center
                </Text>
                <View style={styles.threeiconmain}>
                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: 10,
                        }}
                    >
                        <Image
                            style={{
                                height: 22,
                                width: 22,
                                resizeMode: "contain",
                                tintColor: Colors.white,
                            }}
                            source={require("../../../assets/notificationwhite.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: 10,
                        }}
                    >
                        <Image
                            style={{
                                height: 22,
                                width: 22,
                                resizeMode: "contain",
                                tintColor: Colors.white,
                            }}
                            source={require("../../../assets/calendarwhite.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={{
                    paddingVertical: 12,
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: Colors.white,
                }}
            >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Jessica</Text>
                <Image
                    style={{
                        height: 18,
                        width: 18,
                        resizeMode: "contain",
                        tintColor: Colors.black,
                        position: "absolute",
                        right: 19
                    }}
                    source={require("../../../assets/transectionhg.png")}
                />
            </View>
            <View style={{ backgroundColor: Colors.cream, alignContent: "flex-start", justifyContent: "flex-start", width: "100%", paddingTop: 10 }}>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: 12, marginBottom: 12 }}>
                    <View style={{ marginHorizontal: 4 }}> <CallCenter /></View>
                    <View style={{ marginHorizontal: 4 }}><Realtor /></View>

                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: 12, }}>
                    <View style={{ marginHorizontal: 4 }}> <ActivityLog /></View>
                    <View style={{ marginHorizontal: 4 }}><Scripts /></View>

                </View>

            </View>
            <View style={{ position: "relative" }}>
                <View style={{ height: 500, width: 400, backgroundColor: Colors.white, position: "absolute", bottom: 70, right: 10, borderRadius: 4 }}>

                </View>
                <TouchableOpacity style={styles.backiconcover}>
                    <Image
                        style={styles.backimagenew}
                        source={require("../../../assets/blackchat.png")}
                    ></Image>

                </TouchableOpacity>
            </View>
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
        position: "absolute", bottom: 20, right: 10


    }, backimagenew: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        tintColor: Colors.white
    },
    threeiconmain: {
        flexDirection: "row",
        alignItems: "center",
    },
});