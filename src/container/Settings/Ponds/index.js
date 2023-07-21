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
const Ponds = () => {
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
                    Ponds
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
                <View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: Colors.black, fontSize: 22, fontWeight: 700 }}>6 Groups - </Text>
                        <Text style={{ color: Colors.black, fontSize: 20, fontWeight: 200 }}>New leads can be sent round robinor first to claim </Text>

                    </View>
                    <Text style={{ color: Colors.black, fontSize: 18, fontWeight: 700 }}>Lead Ponds</Text>

                </View>
                <TouchableOpacity onPress={() => { setModalVisible(!modalVisible)}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: Colors.PrimaryColor, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, borderRadius: 25, marginLeft: 10 }}>
                        <Image style={{ height: 15, width: 15, alignSelf: 'center' }} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/plus.png')}></Image>
                            <Text style={{ color: Colors.white, fontSize: 15, fontWeight: 300, marginLeft: 5, alignSelf: 'center' }}>Add Group</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, borderColor: Colors.boderColor, borderWidth: 1, width: '95%', padding: 16, alignContent: 'center', alignSelf: 'center' }}>
                <View style={{ width: '100%', alignContent: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: Colors.placeHolderTextColor, fontSize: 15, fontWeight: 700, marginLeft: 5, alignSelf: 'center', width: '20%' }}>Name</Text>
                        <Text style={{ color: Colors.placeHolderTextColor, fontSize: 15, fontWeight: 700, marginLeft: 5, alignSelf: 'center', width: '5%' }}>Pond {'\n'}Lead</Text>
                        <Text style={{ color: Colors.placeHolderTextColor, fontSize: 15, fontWeight: 700, marginLeft: 5, alignSelf: 'center', width: '70%' }}>Team Members</Text>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={() => {
                            return (
                                <View style={{ flexDirection: 'row', width: '100%', alignContent: 'center', marginTop: 25 }}>
                                    <Text style={{ color: Colors.PrimaryColor, fontSize: 15, fontWeight: 700, alignSelf: 'center', width: '20%' }}>Internal Pond</Text>
                                    <View style={{ width: '5%' }}>
                                        <View style={{ borderRadius: '50%', backgroundColor: Colors.gray, height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: Colors.placeHolderTextColor, fontSize: 12, fontWeight: 700, alignSelf: 'center', }}>MN</Text>
                                        </View>
                                    </View>
                                    <FlatList
                                        style={{ width: '70%', }}
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
                                            <Text style={{ color: Colors.placeHolderTextColor, fontSize: 15, fontWeight: 700, marginLeft: 5, alignSelf: 'center' }}>Edit Pond</Text>

                                        </View>
                                        <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }}>
                                            <Image style={{ height: 18, width: 18, tintColor: Colors.placeHolderTextColor }} source={require('../../../assets/images/close.png')}></Image>

                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ borderColor: Colors.boderColor, borderWidth: 1, flexDirection: 'row', marginTop: 12, borderRadius: 5, position: "relative", alignItems: 'center' }}>
                                        <TextInput
                                            placeholder="Internal Pond"
                                            placeholderTextColor={Colors.placeHolderTextColor}
                                            style={{ padding: 10, borderRadius: 5, width: '90%' }}>

                                        </TextInput>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Picker
                                            selectedValue={selectedValue}
                                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                                            style={[styles.dropdown, { width: '90%' }]}
                                            itemStyle={styles.dropdownItem}
                                            mode="dropdown"
                                        >
                                            <Picker.Item label="Agent" value="Agent" />
                                            <Picker.Item label="Any" value="Any" />
                                        </Picker>
                                        <Image style={{ height: 22, width: 22, }} source={require('../../../assets/images/question.png')}></Image>

                                    </View>
                                    <View style={{ borderWidth: 1, borderRadius: 5, borderColor: Colors.boderColor, marginTop: 16 }}>
                                        <View style={{ flexDirection: "row", padding: 16, justifyContent: "flex-start", marginTop: 5 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Checkbox
                                                    style={styles.checkbox}
                                                    value={isChecked}
                                                    onValueChange={setChecked}
                                                    color={isChecked ? '#4630EB' : undefined}
                                                />
                                            </View>
                                            <Text style={{ color: Colors.placeHolderTextColor, fontSize: 15, fontWeight: 700, marginLeft: 5, alignSelf: 'center' }}>NAME</Text>

                                        </View>
                                        <View style={{ height: 1, width: '100%', backgroundColor: Colors.boderColor }}></View>
                                        <View style={{ padding: 10, width: '100%', flexDirection: 'row', position: "relative", alignItems: 'center' }}>
                                            <Image style={{ height: 15, width: 15, }} source={require('../../../assets/images/search.png')}></Image>

                                            <TextInput
                                                placeholder="Search for users"
                                                placeholderTextColor={Colors.placeHolderTextColor}
                                                style={{ width: '90%', marginLeft: 16 }}>

                                            </TextInput>
                                        </View>

                                        <FlatList
                                            data={data}
                                            renderItem={() => {
                                                return (
                                                    <View>
                                                        <View style={{ height: 1, width: '100%', backgroundColor: Colors.boderColor }}></View>
                                                        <View style={{ flexDirection: "row", padding: 16, justifyContent: "flex-start", marginTop: 5 }}>
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <Checkbox
                                                                    style={styles.checkbox}
                                                                    value={isChecked}
                                                                    onValueChange={setChecked}
                                                                    color={isChecked ? '#4630EB' : undefined}
                                                                />
                                                            </View>
                                                            <Text style={{ color: Colors.black, fontSize: 15, fontWeight: 700, marginLeft: 5, alignSelf: 'center' }}>AGENT 1</Text>

                                                        </View>
                                                    </View>

                                                )
                                            }}>

                                        </FlatList>

                                    </View>
                                    <Text style={{ color: Colors.PrimaryColor, fontSize: 15, fontWeight: 700, marginTop: 5, alignSelf: 'flex-start' }}>Show selected user only</Text>
                                    <View style={{marginTop:40,bottom:0,width:'100%',justifyContent:'space-between',flexDirection:'row'}}>
                                    <View style={{ flexDirection: 'row' }}>
                                        
                                        <TouchableOpacity style={{ alignContent: 'center', justifyContent: 'center' }} onPress={() => { }}>
                                        <Image style={{ height: 14, width: 14,tintColor:'red' }} source={require('../../../assets/images/delete.png')}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ paddingLeft: 10, paddingRight: 20, paddingTop: 10, paddingBottom: 10, }}>
                                            <Text style={{ color: 'red',textAlign:'center' }}>Delete Pond</Text>
                                        </TouchableOpacity>
                                    </View>
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

export default Ponds

const styles = StyleSheet.create({
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
    threeiconmain: {
        flexDirection: "row",
        alignItems: "center",
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