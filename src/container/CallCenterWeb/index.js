import React from "react";
import {
    Image,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from "react-native";
import Colors from "../../utils/Colors";
import ActivityLog from "../../components/ActivityLog";
import CallCenter from "../../components/CallCenter";
import Realtor from "../../components/Realtor";
import Scripts from "../../components/Scripts";
const CallCenterWeb = () => {
    return (

        <SafeAreaView style={{ backgroundColor: Colors.cream, height: "100%", width: "100%", }}>
            <View style={{ width: "100%", height: 100, backgroundColor: Colors.PrimaryColor, justifyContent: 'space-between' }}>

                <View style={{ flexDirection: 'row' }}>

                </View>
                <View style={{ flexDirection: 'row' }}>

                </View>
                <View style={{ flexDirection: 'row' }}>

                </View>
                <View style={{ flexDirection: 'row',width:'100%' }}>
                    <View style={styles.headericons}>
                        <TouchableOpacity >
                            <Image
                                style={{
                                    height: 22,
                                    width: 22,
                                    marginLeft: 20,
                                    resizeMode: "contain",
                                    position: "relative",
                                    left: 10,
                                }}
                                source={require("../../assets/images/notificationwhite.png")}
                            ></Image>
                        </TouchableOpacity>
                        <View style={styles.maincalcov}>
                            <TouchableOpacity onPress={() => { }}>
                                <Image
                                
                                    style={{
                                        height: 22,
                                        width: 22,
                                        marginLeft: 22,
                                        resizeMode: "contain",
                                        position: "relative",
                                        tintColor:'white'
                                    }}
                                    source={require("../../assets/images/calender.png")}
                                ></Image>

                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

            </View>

            <View style={{ backgroundColor: Colors.cream, height: "100%", alignContent: "center", justifyContent: "center", width: "100%", paddingTop: 0 }}>


                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: 12, marginBottom: 12 }}>
                    <View style={{ marginHorizontal: 4 }}> <CallCenter /></View>
                    <View style={{ marginHorizontal: 4 }}><Realtor /></View>

                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: 12, }}>
                    <View style={{ marginHorizontal: 4 }}> <ActivityLog /></View>
                    <View style={{ marginHorizontal: 4 }}><Scripts /></View>

                </View>
                <View style={{ width: "100%" }}>

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
  maincalcov: { position: "relative" },
    headericons: { flexDirection: "row", alignItems: "center", paddingRight: 12 },
    covermonth: { position: "absolute", backgroundColor: Colors.white, width: 100, top: 31, padding: 12 },
    maincalcov: { position: "relative" },
    maindate: { paddingBottom: 10, marginBottom: 10, borderBottomColor: Colors.gray, borderBottomWidth: 1 },
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
});