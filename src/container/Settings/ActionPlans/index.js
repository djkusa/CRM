import * as React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image, TextInput, FlatList, Modal, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Colors from '../../../utils/Colors';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { Picker } from 'react-native';
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
    {
        title: 'a'
    },
    {
        title: 'a'
    },
]
const ActionPlans = () => {
    const navigation = useNavigation();
    const [isChecked, setChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

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
                    Settings
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
            {/* Search Part */}
            <View style={styles.searchPart}>
                <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: Colors.PrimaryColor, fontSize: 22, fontWeight: 700 }}>Action Plans</Text>
                    <Image style={{ height: 14, width: 14, marginLeft: 10, marginRight: 10 }} tintColor={Colors.black} source={require('../../../assets/images/leftArrow.png')}></Image>
                    <Text style={{ color: Colors.placeHolderTextColor, fontSize: 22, fontWeight: 700 }}>All Action Plans</Text>
                </View>

                <View style={{ justifyContent: 'space-between', padding: 22, flexDirection: 'row' }}>
                    <View
                        style={{ height: 45, width: 190, borderColor: Colors.boderColor, borderWidth: 1, borderRadius: 5, justifyContent: 'center', flexDirection: 'row' }}
                    >
                        <TextInput
                            style={{ margin: 5 }}
                            placeholder='Search Action Plans'
                            placeholderTextColor={Colors.placeHolderTextColor}>

                        </TextInput>
                        <Image style={{ height: 15, width: 15, alignSelf: 'center' }} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/search.png')}></Image>
                    </View>
                    <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: Colors.PrimaryColor, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, borderRadius: 25, marginLeft: 10 }}>
                            <Image style={{ height: 15, width: 15, alignSelf: 'center' }} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/plus.png')}></Image>
                            <Text style={{ color: Colors.white, fontSize: 15, fontWeight: 300, marginLeft: 5, alignSelf: 'center' }}>Add Action</Text>

                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.folderView}>
                <Text style={styles.font18}>Action Plans</Text>
                <View style={styles.folder}>
                    <Image style={styles.folderImage} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/folder.png')}></Image>
                </View>
                <Text style={styles.actionPlan}>5 Action Plans</Text>

            </View>
            <View style={styles.headerView}>
                <View style={styles.borderView}>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', width: '25%', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', marginLeft: 20 }}>

                                <Checkbox
                                    style={styles.checkbox}
                                    value={isChecked}
                                    onValueChange={setChecked}
                                    color={isChecked ? '#4630EB' : undefined}
                                />
                                <Text style={{ color: Colors.placeHolderTextColor, fontSize: 18, fontWeight: 500, marginLeft: 15, alignSelf: 'center' }}>Names</Text>

                            </View>
                            <Image style={{ height: 15, width: 15, alignSelf: 'center', tintColor: Colors.placeHolderTextColor }} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/uparrow.png')}></Image>

                        </View>
                        <Text style={{ color: Colors.placeHolderTextColor, fontSize: 18, fontWeight: 500, marginLeft: 5, alignSelf: 'center', width: '11.25%', textAlign: 'center' }}>Active</Text>
                        <View style={{ flexDirection: 'row', width: '11.25%' }}>
                            <Text style={{ color: Colors.placeHolderTextColor, fontSize: 18, fontWeight: 500, marginLeft: 5, alignSelf: 'center' }}>Engaged</Text>
                            <Image style={{ height: 15, width: 15, alignSelf: 'center', marginLeft: 20 }} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/question.png')}></Image>

                        </View>
                        <Text style={{ color: Colors.placeHolderTextColor, fontSize: 18, fontWeight: 500, marginLeft: 5, alignSelf: 'center', width: '11.25%', textAlign: 'center' }}>Complete</Text>
                        <Text style={{ color: Colors.placeHolderTextColor, fontSize: 18, fontWeight: 500, marginLeft: 5, alignSelf: 'center', width: '25%' }}>Category</Text>
                        <Text style={{ color: Colors.placeHolderTextColor, fontSize: 18, fontWeight: 500, marginLeft: 5, alignSelf: 'center', width: '11.25%' }}>Actions</Text>

                    </View>
                    <FlatList
                        data={data}
                        renderItem={() => {
                            return (
                                <View style={{ width: '95%', flexDirection: 'row' }}>

                                    <View style={{ flexDirection: 'row', width: '25%', margin: 20 }}>
                                        <Checkbox
                                            style={styles.checkbox}
                                            value={isChecked}
                                            onValueChange={setChecked}
                                            color={isChecked ? '#4630EB' : undefined}
                                        />
                                        <View>
                                            <Text style={{ color: Colors.PrimaryColor, fontSize: 16, fontWeight: 500, marginLeft: 5 }}>Assign to a leader</Text>
                                            <Text style={{ color: Colors.placeHolderTextColor, fontSize: 14, fontWeight: 500, marginLeft: 5 }}>2 steps - by surf lokal automations</Text>

                                        </View>
                                    </View>
                                    <Text style={{ color: Colors.placeHolderTextColor, fontSize: 16, fontWeight: 500, marginLeft: 5, alignSelf: 'center', width: '11.25%', textAlign: 'center' }}>0</Text>
                                    <View style={{ flexDirection: 'row', width: '11.25%' }}>
                                        <Text style={{ color: Colors.placeHolderTextColor, fontSize: 18, fontWeight: 500, marginLeft: 5, alignSelf: 'center' }}>0 - 0%</Text>
                                    </View>
                                    <Text style={{ color: Colors.PrimaryColor, fontSize: 18, fontWeight: 500, marginLeft: 5, alignSelf: 'center', width: '11.25%', textAlign: 'center' }}>2</Text>
                                    <Text style={{ color: Colors.placeHolderTextColor, fontSize: 18, fontWeight: 500, marginLeft: 5, alignSelf: 'center', width: '25%' }}>Email,Push Notifications</Text>
                                    <View style={{ color: Colors.placeHolderTextColor, marginLeft: 5, alignSelf: 'center', width: '11.25%', flexDirection: 'row' }}>
                                        <Image style={{ height: 20, width: 20, alignSelf: 'center', marginLeft: 20 }} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/view.png')}></Image>
                                        <Image style={{ height: 15, width: 15, alignSelf: 'center', marginLeft: 10, tintColor: Colors.placeHolderTextColor }} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/edit.png')}></Image>
                                        <Image style={{ height: 20, width: 20, alignSelf: 'center', marginLeft: 10 }} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/file.png')}></Image>
                                        <Image style={{ height: 20, width: 20, alignSelf: 'center', marginLeft: 10 }} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/share1.png')}></Image>
                                        <Image style={{ height: 20, width: 20, alignSelf: 'center', marginLeft: 10 }} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/delete.png')}></Image>

                                    </View>

                                </View>
                            )
                        }}>

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
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.popupContainer}>

                        <View
                            style={{
                                width: '80%',
                                height: '80%',
                                backgroundColor: Colors.white,
                                borderRadius: 20,
                                padding: 30
                            }}
                        >
                            <ScrollView style={{ width: "100%", height: "100%" }}>
                                <View style={styles.spacebetween}>
                                    <Text style={{ color: Colors.black, fontSize: 15, fontWeight: 500, marginLeft: 5, alignSelf: 'center' }}>Add Action Plan</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity style={{ alignContent: 'center', justifyContent: 'center' }} onPress={() => { setModalVisible(!modalVisible) }}>
                                            <Text style={{ color: Colors.black, fontSize: 15, fontWeight: 500, marginLeft: 5, marginRight: 30, alignSelf: 'center' }}>Cancel</Text>

                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, borderRadius: 20, paddingBottom: 10, backgroundColor: Colors.PrimaryColor }}>
                                            <Text style={{ color: Colors.white }}>Save</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={[styles.borderView, { marginTop: 15, width: '100%', alignSelf: 'center', borderRadius: 5 }]}>
                                    <Text style={{ color: Colors.placeHolderTextColor, fontSize: 18, fontWeight: 500, marginBottom: 15 }}>Name</Text>
                                    <View style={{ flexDirection: 'row', width: '100%', alignItems: "center", marginBottom: 15, justifyContent: 'space-between' }}>

                                        <View style={{ flexDirection: 'row', alignContent: 'center', marginTop: 0 }}>

                                            <Checkbox
                                                style={[styles.checkbox, { marginLeft: -1 }]}
                                                value={isChecked}
                                                title='Hello'
                                                tintColor={Colors.PrimaryColor}
                                                onValueChange={setChecked}
                                                color={isChecked ? '#4630EB' : undefined}
                                            />
                                            <Text style={[styles.font18, { fontSize: 14, fontWeight: 400 }]}>Automatically pause the action plan when the lead responds</Text>
                                        </View>
                                        <Text style={[styles.font18, { fontSize: 14, fontWeight: 400, color: Colors.PrimaryColor }]}>Add initial text message</Text>

                                    </View>

                                    <View style={{ flexDirection: 'row', alignContent: 'center', marginBottom: 15 }}>
                                        <Checkbox
                                            style={[styles.checkbox, { marginLeft: -1, marginTop: 0 }]}
                                            value={isChecked}
                                            title='Hello'
                                            tintColor={Colors.PrimaryColor}
                                            onValueChange={setChecked}
                                            color={isChecked ? '#4630EB' : undefined}
                                        />
                                        <Text style={[styles.font18, { fontSize: 14, fontWeight: 400 }]}>Include all email addresses for email steps</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignContent: 'center', marginTop: 0 }}>
                                        <Checkbox
                                            style={[styles.checkbox, { marginLeft: -1, marginTop: 0 }]}
                                            value={isChecked}
                                            title='Hello'
                                            tintColor={Colors.PrimaryColor}
                                            onValueChange={setChecked}
                                            color={isChecked ? '#4630EB' : undefined}
                                        />
                                        <Text style={[styles.font18, { fontSize: 14, fontWeight: 400 }]}>Share with everyone</Text>
                                    </View>
                                </View>
                                <View style={{ borderLeftWidth: 1, borderLeftColor: Colors.boderColor, height: 70, marginLeft: 50 }}>

                                </View>

                                <View style={[styles.borderView1, { marginTop: 0, width: '100%', borderRadius: 5, justifyContent: "flex-start", position: "relative", marginBottom: 30 }]}>
                                    <View style={{ borderLeftWidth: 1, borderLeftColor: Colors.boderColor, height: "100%", marginLeft: 40, position: "absolute", top: 0 }}>
                                    </View>
                                    <View style={{ justifyContent: "flex-start", flexDirection: "row" }}><Image
                                        style={{ height: 30, width: 20, resizeMode: "contain" }}
                                        source={require('../../../assets/images/rules.png')}
                                    />

                                        <View style={{ marginLeft: 20, marginLeft: 8, flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", width: "100%", position: "relative" }}>
                                            <Text style={{ marginTop: -4, backgroundColor: Colors.PrimaryColor, height: 30, width: 30, borderRadius: 100, color: Colors.white, justifyContent: "center", alignItems: "center", textAlign: "center", lineHeight: 30 }}>1</Text>
                                            <Text style={{ marginLeft: 12, fontSize: 14 }}>Immediatly</Text>
                                            <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between", width: "70%", paddingLeft: 12 }}>
                                                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between", width: "100%", marginLeft: 20, borderBottomColor: Colors.boderColor, borderBottomWidth: 1, paddingBottom: 35 }}>
                                                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                                                        <Text>Run</Text>
                                                        <Text>0</Text>
                                                        <Text>days after the previous setup</Text>
                                                    </View>

                                                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center", marginTop: 35 }}>
                                                        <Text style={{ color: "#45535d", fontSize: 14, fontWeight: 500 }}>Action</Text>

                                                        <Picker
                                                            selectedValue={selectedValue}
                                                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                                                            style={[styles.dropdown, { marginLeft: 12 }]}
                                                            itemStyle={styles.dropdownItem}
                                                            mode="dropdown"
                                                        >
                                                            <Picker.Item label="All" value="All" />
                                                            <Picker.Item label="Any" value="Any" />
                                                        </Picker>




                                                    </View>
                                                    <View>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between", width: "100%", marginLeft: 20, }}>

                                                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center", marginTop: 35 }}>
                                                        <Text style={{ color: "#45535d", fontSize: 14, fontWeight: 500 }}>Task Name</Text>

                                                        <View
                                                            style={{
                                                                width: "80%",
                                                                height: 40,
                                                                //  marginTop: 10,
                                                                justifyContent: "center",
                                                                borderWidth: 1,
                                                                borderRadius: 10,
                                                                borderColor: Colors.boderColor,
                                                                borderRadius: 4,
                                                                marginHorizontal: 12

                                                            }}
                                                        >
                                                            <TextInput
                                                                placeholder="Task Name"
                                                                placeholderTextColor={"#6e8392"}
                                                                style={{
                                                                    width: "100%",
                                                                    borderRadius: 4,
                                                                    height: "100%",
                                                                    paddingHorizontal: 15,
                                                                    color: Colors.black,
                                                                    // borderColor:Colors.borderlightcolor,
                                                                    backgroundColor: Colors.white,
                                                                    fontSize: 14,
                                                                    padding: 2,
                                                                    fontWeight: 600
                                                                }}
                                                            />
                                                        </View>



                                                    </View>
                                                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center", marginTop: 35 }}>
                                                        <Text style={{ color: "#45535d", fontSize: 14, fontWeight: 500 }}>Task Type</Text>

                                                        <Picker
                                                            selectedValue={selectedValue}
                                                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                                                            style={[styles.dropdown, { marginLeft: 12 }]}
                                                            itemStyle={styles.dropdownItem}
                                                            mode="dropdown"
                                                        >
                                                            <Picker.Item label="All" value="All" />
                                                            <Picker.Item label="Any" value="Any" />
                                                        </Picker>




                                                    </View>
                                                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center", marginTop: 35 }}>
                                                        <Text style={{ color: "#45535d", fontSize: 14, fontWeight: 500 }}>Assigned To</Text>

                                                        <Picker
                                                            selectedValue={selectedValue}
                                                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                                                            style={[styles.dropdown, { marginLeft: 12 }]}
                                                            itemStyle={styles.dropdownItem}
                                                            mode="dropdown"
                                                        >
                                                            <Picker.Item label="All" value="All" />
                                                            <Picker.Item label="Any" value="Any" />
                                                        </Picker>




                                                    </View>
                                                    <View>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ justifyContent: "space-between", flexDirection: "row", position: "absolute", right: 25, borderWidth: 1, borderColor: Colors.boderColor, paddingHorizontal: 12, borderRadius: 5 }}>
                                                <Image
                                                    style={{ height: 30, width: 20, resizeMode: "contain", tintColor: "#93afb2", }}
                                                    source={require('../../../assets/images/editnew.png')}
                                                />
                                                <View style={{ marginHorizontal: 12, borderRightWidth: 1, borderRightColor: Colors.boderColor }}></View>
                                                <Image
                                                    style={{ height: 30, width: 20, resizeMode: "contain", tintColor: "#93afb2", }}
                                                    source={require('../../../assets/images/trash.png')}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ borderWidth: 1, borderColor: Colors.boderColor, padding: 30, borderRadius: 5 }}>
                                    <View style={[styles.borderView1, { marginTop: 0, width: '100%', borderRadius: 5, justifyContent: "flex-start", position: "relative", paddingVertical: 12 }]}>

                                        <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>


                                            <View style={{ marginLeft: 0, flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", width: "100%", position: "relative" }}>

                                                <View style={{ alignItems: "center", flexDirection: "row" }}>
                                                    <TouchableOpacity style={{ backgroundColor: Colors.PrimaryColor, height: 30, width: 30, borderRadius: 100, alignItems: "center", justifyContent: "center" }}> <Image
                                                        style={{ height: 18, width: 18, resizeMode: "contain", }}
                                                        source={require('../../../assets/images/plus.png')}
                                                    />
                                                    </TouchableOpacity>
                                                    <Text style={{ marginLeft: 12, fontSize: 14 }}>Add Step</Text>
                                                </View>
                                                <View style={{ justifyContent: "space-between", flexDirection: "row",alignItems:"center" }}>
                                                    <Image
                                                        style={{ height: 30, width: 20, resizeMode: "contain", tintColor: "#93afb2", }}
                                                        source={require('../../../assets/images/smile.png')}
                                                    />
                                                    <Picker
                                                        selectedValue={selectedValue}
                                                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                                                        style={[styles.dropdown, { marginLeft: 12 }]}
                                                        itemStyle={styles.dropdownItem}
                                                        mode="dropdown"
                                                    >
                                                        <Picker.Item label="Merge Fields" value="All" />
                                                        <Picker.Item label="Merge Fields" value="Any" />
                                                    </Picker>
                                                    <Image
                                                        style={{ height: 30, width: 20, resizeMode: "contain", tintColor: "#93afb2", }}
                                                        source={require('../../../assets/images/trash.png')}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ marginTop: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                        <TouchableOpacity style={{ backgroundColor: Colors.gray, paddingHorizontal: 10, borderRadius: 5, alignSelf: "flex-start", paddingVertical: 6, flexDirection: "row", alignItems: "center" }}>
                                            <Image
                                                style={{ height: 20, width: 20, resizeMode: "contain", tintColor: "#93afb2", }}
                                                source={require('../../../assets/images/copynew.png')}
                                            />
                                            <Text style={{ marginLeft: 6 }}>Templates</Text>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 16 }}>Delay message</Text>
                                        <Text style={{ fontSize: 16 }}>minutes</Text>
                                        <Text style={{ fontSize: 16 }}> <Image
                                            style={{ height: 20, width: 20, resizeMode: "contain", tintColor: "#93afb2", marginRight: 7, position: "relative", top: 7 }}
                                            source={require('../../../assets/images/info.png')}
                                        />Text message are sent from <Text style={{ fontWeight: "900" }}>(+232-87687-89879)</Text></Text>
                                        <Text style={{ fontSize: 16 }}> <Image
                                            style={{ height: 20, width: 20, resizeMode: "contain", tintColor: Colors.PrimaryColor, marginRight: 7, position: "relative", top: 4 }}
                                            source={require('../../../assets/images/editnew.png')}
                                        />and only set to the new lead <Image
                                                style={{ height: 20, width: 20, resizeMode: "contain", marginRight: 7, position: "relative", top: 4 }}
                                                source={require('../../../assets/images/question.png')}
                                            /></Text>
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

export default ActionPlans

const styles = StyleSheet.create({
    spacebetween: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    popupButton: {
        backgroundColor: Colors.white,
        alignSelf: "center",
        borderRadius: 100,
        height: 35,
        width: 35,
        justifyContent: "center",
        alignItems: "center",
    },
    popupContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    }, dropdown: {
        fontSize: 14,
        borderWidth: 1,
        borderColor: Colors.boderColor,
        backgroundColor: '#edf1f3',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginRight: 12,
        width: "80%"
    },
    dropdownItem: {
        fontSize: 16,
    }, inputContainer: {
        flexDirection: "row",
        alignItems: "center",

    },
    borderView: { marginHorizontal: 32, width: '95%', borderColor: Colors.boderColor, borderWidth: 1, padding: 10, marginTop: 12 },
    borderView1: { marginHorizontal: 0, width: '95%', borderColor: Colors.boderColor, borderWidth: 1, padding: 10, marginTop: 12 },
    headerView: { width: '100%', justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 5 },
    actionPlan: { color: Colors.black, fontSize: 22, fontWeight: 500, marginLeft: 50, alignSelf: 'center' },
    folderImage: { height: 15, width: 15, alignSelf: 'center', tintColor: Colors.placeHolderTextColor },
    folder: { borderRadius: 5, borderColor: Colors.boderColor, height: 40, width: 40, borderWidth: 1, justifyContent: 'center', marginLeft: 20, alignContent: 'center' },
    font18: { color: Colors.black, fontSize: 18, fontWeight: 500, marginLeft: 5, alignSelf: 'center' },
    folderView: { marginLeft: 15, marginTop: -25, flexDirection: 'row' },
    searchPart: { justifyContent: 'space-between', padding: 22, flexDirection: 'row', alignContent: 'center' },
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
    threeiconmain: {
        flexDirection: "row",
        alignItems: "center",
    },
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginVertical: 32,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        marginLeft: 8,
        marginTop: 0
    },
})
