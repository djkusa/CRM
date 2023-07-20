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
const CallCenter = () => {
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
                  width:"100%",  padding: 16, borderRadius: 8, backgroundColor: Colors.white, shadowProp: {
                        shadowOffset: { width: -2, height: 4 },
                        shadowColor: '#171717',
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                    },
                }}>

                    <View style={{ flexDirection: "row", justifyContent: "center", position: "relative",marginBottom:30 }}>
                        <Text style={{ fontSize: 19, color: Colors.black }}>Client</Text>
                        <Image
                            style={{
                                height: 18,
                                width: 18,
                                resizeMode: "contain",
                                position: "absolute",
                                right: 8
                            }}
                            source={require("../../assets/arrownext.png")}
                        ></Image>
                    </View>

                    <View style={{ alignItems: "center", justifyContent: "space-between", marginTop: 16, position: "relative", flexDirection: "row" }}>
                        <Image
                            style={{
                                resizeMode: "contain",
                                height: 80,
                                width: 80,
                            }}
                            source={require("../../assets/speed3/speed3.png")}
                        />
                        <View style={{ position: "relative" }}>
                            <View style={{ height: 12, width: 12, borderRadius: 100, backgroundColor: "green", position: "absolute", left: 8, top: 8, zIndex: 99 }}></View>
                            <Image
                                style={{
                                    height: 95,
                                    width: 95,
                                    resizeMode: "contain",
                                    borderRadius: 100
                                }}
                                source={require("../../assets/profilePic.png")}
                            ></Image>
                        </View>

                        <View style={{ height: 30, width: 70, borderRadius: 20, backgroundColor: isEnabled ? Colors.PrimaryColor : Colors.boderColor, }}>

                            <Switch
                                activeText='Loan'
                                inActiveText="Cash"
                                outerCircleStyle={{ width: 50 }}
                                switchRightPx={55}
                                backgroundActive={Colors.PrimaryColor}
                                backgroundInactive={Colors.boderColor}
                                thumbColor={"#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}

                            />
                        </View>

                    </View>
                    <Text style={{ justifyContent: "center", textAlign: "center", marginTop: 15, fontSize: 19, marginBottom: 8 }}>Jessica Kent</Text>
                    <Text style={{ justifyContent: "center", textAlign: "center", fontSize: 15, marginBottom: 8 }}>354-456-8512</Text>
                    <Text style={{ justifyContent: "center", textAlign: "center", fontSize: 12 }}>Client ID: 878766</Text>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>

                        <View style={{ flexDirection: "row", marginTop: 16 }}>
                            <TouchableOpacity style={styles.backiconcover}>
                                <Image
                                    style={styles.backimagenew}
                                    source={require("../../assets/callblack.png")}
                                ></Image>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.backiconcover}>
                                <Image
                                    style={styles.backimagenew}
                                    source={require("../../assets/blackchat.png")}
                                ></Image>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.backiconcover}>
                                <Image
                                    style={styles.backimagenew}
                                    source={require("../../assets/blackmeasg.png")}
                                ></Image>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.backiconcover}>
                                <Image
                                    style={styles.backimagenew}
                                    source={require("../../assets/videowhite.png")}
                                ></Image>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.backiconcover}>
                                <Image
                                    style={styles.backimagenew}
                                    source={require("../../assets/pencilwhite.png")}
                                ></Image>

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>



            </View>
</View>

        </SafeAreaView>

    );
}
export default CallCenter;
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