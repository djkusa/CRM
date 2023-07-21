import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image, Picker, TextInput, FlatList, Modal, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Colors from '../../../utils/Colors';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const data = [
    {
        title: 'a'
    },
    {
        title: 'a'
    },
    {
        title: 'a'
    },
    {
        title: 'a'
    },
]
const Groups = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            {/* Header */}
            <View
                style={styles.header}
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={styles.back}
                        source={require("../../../assets/images/back.png")}
                    />
                </TouchableOpacity>
                <Text
                    style={{ fontSize: 19, fontWeight: "bold", color: Colors.white }}
                >
                    Groups
                </Text>
                <View style={styles.threeiconmain}>
                    <TouchableOpacity
                    >
                        <Image
                            style={styles.notification}
                            source={require('../../../assets/images/notificationwhite.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{

                        }}
                    >
                        <Image
                            style={styles.calender}
                            source={require("../../../assets/images/calendar.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ justifyContent: 'space-between', padding: 22, flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: Colors.black, fontSize: 22, fontWeight: 700 }}>6 Groups - </Text>
                    <Text style={{ color: Colors.black, fontSize: 20, fontWeight: 200 }}>New leads can be sent round robinor first to claim </Text>

                </View>
                <TouchableOpacity onPress={() => { }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: Colors.PrimaryColor, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, borderRadius: 25, marginLeft: 10 }}>
                        <Image style={{ height: 15, width: 15, alignSelf: 'center' }} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/plus.png')}></Image>
                        <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }}>
                            <Text style={{ color: Colors.white, fontSize: 15, fontWeight: 300, marginLeft: 5, alignSelf: 'center' }}>Add Group</Text>
                        </TouchableOpacity>

                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <View style={{ width: '95%', alignContent: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: Colors.placeHolderTextColor, fontSize: 15, fontWeight: 700, marginLeft: 5, alignSelf: 'center', width: '20%' }}>Name</Text>
                        <Text style={{ color: Colors.placeHolderTextColor, fontSize: 15, fontWeight: 700, marginLeft: 5, alignSelf: 'center', width: '20%' }}>Distribution {'\n'}Type</Text>
                        <Text style={{ color: Colors.placeHolderTextColor, fontSize: 15, fontWeight: 700, marginLeft: 5, alignSelf: 'center', width: '55%' }}>Distribution</Text>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={() => {
                            return (
                                <View style={{ flexDirection: 'row', width: '100%', alignContent: 'center', marginTop: 25 }}>
                                    <Text style={{ color: Colors.placeHolderTextColor, fontSize: 15, fontWeight: 700, alignSelf: 'center', width: '20%' }}>Broward</Text>
                                    <Text style={{ color: Colors.placeHolderTextColor, fontSize: 15, fontWeight: 700, marginLeft: 5, alignSelf: 'center', width: '20%' }}>Round {'\n'}Robin</Text>
                                    <FlatList
                                        style={{ width: '55%' }}
                                        horizontal
                                        data={data}
                                        renderItem={() => {
                                            return (
                                                <View>
                                                    <Image style={{ height: 50, width: 50, borderRadius: '50%', marginRight: 16 }} source={require('../../../assets/images/demoimage.jpeg')}></Image>
                                                </View>
                                            )
                                        }}>

                                    </FlatList>
                                </View>
                            )
                        }}
                    >
                    </FlatList>
                </View>
            </View>

            {/* Modal View */}
            <View style={{ alignContent: "center", position: "relative", justifyContent: "center", }}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.popupContainer}>

                        <View
                            style={{
                                width: '40%',
                                backgroundColor: Colors.white,
                                borderRadius: 20,
                                padding: 30,
                            }}
                        >
                            <ScrollView style={{ width: "100%", height: "100%" }}>
                                <View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={{ height: 22, width: 22, tintColor: Colors.placeHolderTextColor }} source={require('../../../assets/images/usergroup.png')}></Image>
                                            <Text style={{ color: Colors.placeHolderTextColor, fontSize: 15, fontWeight: 700, marginLeft: 5, alignSelf: 'center' }}>Add Group</Text>

                                        </View>
                                        <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }}>
                                            <Image style={{ height: 18, width: 18, tintColor: Colors.placeHolderTextColor }} source={require('../../../assets/images/close.png')}></Image>

                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: 'space-between' }}>
                                        <TextInput
                                            placeholder="Group Name"
                                            placeholderTextColor={Colors.placeHolderTextColor}
                                            style={{ padding: 10, borderRadius: 5, borderColor: Colors.boderColor, borderWidth: 1, width: '70%' }}>

                                        </TextInput>
                                        <Picker
                                            selectedValue={selectedValue}
                                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                                            style={[styles.dropdown, { marginLeft: 20, width: '30%' }]}
                                            itemStyle={styles.dropdownItem}
                                            mode="dropdown"
                                        >
                                            <Picker.Item label="Agent" value="Agent" />
                                            <Picker.Item label="Any" value="Any" />
                                        </Picker>
                                    </View>
                                    <View style={{ borderColor: Colors.boderColor, borderWidth: 1, flexDirection: 'row', marginTop: 12, position: "relative", alignItems: 'center' }}>
                                        <TextInput
                                            placeholder="Search for an agent"
                                            placeholderTextColor={Colors.placeHolderTextColor}
                                            style={{ padding: 10, borderRadius: 5, width: '90%' }}>

                                        </TextInput>
                                        <Image style={{ height: 15, width: 15, tintColor: Colors.placeHolderTextColor, position: "absolute", right: 10 }} source={require('../../../assets/images/search.png')}></Image>

                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "flex-start", borderWidth: 1, borderRadius: 5, borderColor: Colors.boderColor, marginTop: 12 }}>

                                        <FlatList
                                            data={data}
                                            renderItem={() => {
                                                return (
                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8, alignItems: 'center', width: '100%' }}>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Image style={{ height: 45, width: 45, borderRadius: '50%', marginRight: 16 }} source={require('../../../assets/images/demoimage.jpeg')}></Image>
                                                            <Text style={{ color: Colors.black, fontSize: 15, fontWeight: 400, marginLeft: 5, alignSelf: 'center' }}>Amy Cohen</Text>

                                                        </View>
                                                        <Checkbox
                                                            style={styles.checkbox}
                                                            value={isChecked}
                                                            onValueChange={setChecked}
                                                            color={isChecked ? '#4630EB' : undefined}
                                                        />
                                                    </View>
                                                )
                                            }}>

                                        </FlatList>
                                    </View>

                                    <View style={{ flexDirection: "row", justifyContent: "flex-start", borderWidth: 1, borderRadius: 5, borderColor: Colors.boderColor, marginTop: 12, padding: 8 }}>
                                        <View style={{ flexDirection: 'row', width: '45%' }} >
                                            <Image style={{ height: 22, width: 22 }} source={require('../../../assets/images/radio.png')}></Image>
                                            <View style={{ marginLeft: 10, justifyContent: 'flex-start' }}>
                                                <Text style={{ color: Colors.black, fontSize: 15, fontWeight: 400, alignSelf: 'start', }}>Round Robin</Text>
                                                <Text style={{ color: Colors.placeHolderTextColor, fontSize: 15, fontWeight: 400, alignSelf: 'start', width: '70%' }}>Every distributes leads to agents in sequential order</Text>

                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', width: '45%', justifyContent: 'flex-start' }} >
                                            <Image style={{ color: Colors.black, height: 22, width: 22, marginRight: 16, alignSelf: 'start' }} source={require('../../../assets/images/radiooff.png')}></Image>
                                            <View style={{ marginLeft: 10, justifyContent: 'flex-start' }}>
                                                <Text style={{ color: Colors.black, fontSize: 15, fontWeight: 400, alignSelf: 'start', }}>First to claim</Text>
                                                <Text style={{ color: Colors.placeHolderTextColor, fontSize: 15, fontWeight: 400, alignSelf: 'start', width: '70%' }}>Multiple agents contacted,first to claim lead wins</Text>
                                            </View>

                                        </View>
                                    </View>

                                    <View style={{marginTop:40,bottom:0,width:'100%',alignItems:'flex-end'}}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity style={{ alignContent: 'center', justifyContent: 'center' }} onPress={() => { setModalVisible(!modalVisible) }}>
                                            <Text style={{ color: Colors.black, fontSize: 15, fontWeight: 500, marginLeft: 5, marginRight: 30, alignSelf: 'center' }}>Cancel</Text>

                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, borderRadius: 20, paddingBottom: 10, backgroundColor: Colors.PrimaryColor }}>
                                            <Text style={{ color: Colors.white,textAlign:'center' }}>Save</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                </View>
                            </ScrollView>
                        </View>

                    </View>
                </Modal>
            </View>

        </View>
    )
}


export default Groups

const styles = StyleSheet.create({
    checkbox: {
        marginLeft: 8,
        marginTop: 0
    },
    dropdown: {
        fontSize: 14,
        borderWidth: 1,
        borderColor: Colors.boderColor,
        backgroundColor: '#edf1f3',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    dropdownItem: {
        fontSize: 16,
    },
    calender: {
        height: 22,
        width: 22,
        resizeMode: "contain",
        tintColor: Colors.white,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    notification: {
        height: 22,
        width: 22,
        resizeMode: "contain",
        tintColor: Colors.white,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    threeiconmain: {
        flexDirection: "row",
        alignItems: "center",
    },
    back: {
        height: 15,
        width: 15,
        marginLeft: 10,
        resizeMode: "contain",
        tintColor: Colors.white,
        flexDirection: "row",
        justifyContent: "center",
    },
    header: {
        paddingVertical: 22,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.PrimaryColor,
    },
    popupContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    }
})
