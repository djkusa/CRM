import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image, Picker, TextInput, FlatList, Modal, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Colors from '../../../utils/Colors';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const EmailTemplate = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={{ flex: 1, backgroundColor: Colors.white,width:"100%" }}>
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
                    Email Templates
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
                <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', }}>
                    <Text style={{ color: Colors.PrimaryColor, fontSize: 22, fontWeight: 700 }}>Email Templates</Text>
                    <Image style={{ height: 14, width: 14, marginLeft: 10, marginRight: 10 }} tintColor={Colors.black} source={require('../../../assets/images/leftArrow.png')}></Image>
                    <Text style={{ color: Colors.placeHolderTextColor, fontSize: 22, fontWeight: 700 }}>All Email Templates</Text>
                </View>

                <View style={{ justifyContent: 'space-between', padding: 22, flexDirection: 'row',}}>
                    <View
                        style={{ height: 45, width: 190, borderColor: Colors.boderColor, borderWidth: 1, borderRadius: 5, justifyContent: 'center', flexDirection: 'row' }}
                    >
                        <TextInput
                            style={{ margin: 5 }}
                            placeholder='Search Template'
                            placeholderTextColor={Colors.placeHolderTextColor}>

                        </TextInput>
                        <Image style={{ height: 15, width: 15, alignSelf: 'center' }} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/search.png')}></Image>
                    </View>
                    <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: Colors.PrimaryColor, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, borderRadius: 25, marginLeft: 10 }}>
                            <Image style={{ height: 15, width: 15, alignSelf: 'center' }} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/plus.png')}></Image>
                            <Text style={{ color: Colors.white, fontSize: 15, fontWeight: 300, marginLeft: 5, alignSelf: 'center' }}>Email Templates</Text>

                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.folderView}>
                <Text style={styles.font18}>79 Email Templates</Text>
                <View style={styles.folder}>
                    <Image style={styles.folderImage} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/folder.png')}></Image>
                </View>

            </View>



<View style={{paddingHorizontal:22}}>
<View style={{borderColor:Colors.boderColor,borderWidth:1,padding:20,borderRadius:9}}>
<View style={{flexDirection:"row",justifyContent:"space-between"}}>
<View style={{flexDirection:"column"}}>
  <View style={{marginBottom:20,flexDirection:"row"}}> <Text style={{color: Colors.placeHolderTextColor, fontSize: 18, fontWeight: 500}}><Checkbox
                                    style={styles.checkbox}
                                    value={isChecked}
                                    onValueChange={setChecked}
                                    color={isChecked ? '#4630EB' : undefined}
                                /> Template</Text>
                                 <Image style={{position:"absolute",right: 0, height: 15, width: 15,  tintColor: Colors.placeHolderTextColor }} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/uparrow.png')}></Image>
                          
  </View> 
  <View style={{marginBottom:20,flexDirection:"row"}}> 



<Checkbox
    style={styles.checkbox}
    value={isChecked}
    onValueChange={setChecked}
    color={isChecked ? '#4630EB' : undefined}
/>
<View>
    <View style={{
        flexDirection: 'row',
        flexWrap:"wrap",
        // width: '100%',
       
    }}>
        <Text style={{ color: Colors.PrimaryColor, fontSize: 16,  fontWeight: 500, marginLeft: 15,  width:200 }}>Ask for testimonials/referrals -(NEED TO EDIT)</Text>
        <Image style={{ height: 15, width: 15,  }} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/question.png')}></Image>

    </View>

    <Text style={{
        color: Colors.placeHolderTextColor, fontSize: 18, fontWeight: 500, marginLeft: 15,
    }}>Names</Text>

</View>
  </View> 

</View>



<View style={{flexDirection:"column"}}>
  <View style={{marginBottom:20,flexDirection:"row"}}> <Text style={{color: Colors.placeHolderTextColor, fontSize: 18, fontWeight: 500}}>Sent</Text>
  </View> 
  <View style={{marginBottom:20,flexDirection:"row"}}> <Text style={{fontSize:16,color:Colors.PrimaryColor}}>2</Text>
  </View> 

</View>





<View style={{flexDirection:"column"}}>
  <View style={{marginBottom:20,flexDirection:"row"}}> <Text style={{color: Colors.placeHolderTextColor, fontSize: 18, fontWeight: 500}}>Opens</Text>
  </View> 
  <View style={{marginBottom:20,flexDirection:"row"}}> <Text style={{fontSize:16,color:Colors.PrimaryColor}}>2.<Text style={{fontSize:16,color:Colors.placeHolderTextColor}}>100%</Text></Text>
  </View> 

</View>



<View style={{flexDirection:"column"}}>
  <View style={{marginBottom:20,flexDirection:"row"}}> <Text style={{color: Colors.placeHolderTextColor, fontSize: 18, fontWeight: 500}}>Clicks</Text>
  </View> 
  <View style={{marginBottom:20,flexDirection:"row"}}> <Text style={{fontSize:16,color:Colors.placeHolderTextColor}}>0.0%</Text>
  </View> 

</View>



<View style={{flexDirection:"column"}}>
  <View style={{marginBottom:20,flexDirection:"row"}}> <Text style={{color: Colors.placeHolderTextColor, fontSize: 18, fontWeight: 500}}>Replies</Text>
  </View> 
  <View style={{marginBottom:20,flexDirection:"row"}}> <Text style={{fontSize:16,color:Colors.placeHolderTextColor}}>0.0%</Text>
  </View> 

</View>


<View style={{flexDirection:"column"}}>
  <View style={{marginBottom:20,flexDirection:"row"}}> <Text style={{color: Colors.placeHolderTextColor, fontSize: 18, fontWeight: 500}}>Unsubscribed</Text>
  </View> 
  <View style={{marginBottom:20,flexDirection:"row"}}><Text style={{fontSize:16,color:Colors.placeHolderTextColor}}>0.0%</Text>
  </View> 

</View>


<View style={{flexDirection:"column"}}>
  <View style={{marginBottom:20,flexDirection:"row"}}> <Text style={{color: Colors.placeHolderTextColor, fontSize: 18, fontWeight: 500}}>Bounce <Image style={{ height: 15, width: 15,  marginLeft: 20 }} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/question.png')}></Image></Text>
  </View> 
  <View style={{marginBottom:20,flexDirection:"row"}}> <Text style={{fontSize:16,color:Colors.placeHolderTextColor}}>0.0%</Text>
  </View> 

</View>

<View style={{flexDirection:"column"}}>
  <View style={{marginBottom:20,flexDirection:"row"}}> <Text style={{color: Colors.placeHolderTextColor, fontSize: 18, fontWeight: 500}}>Actions</Text>
  </View> 
  <View style={{marginBottom:20,flexDirection:"row"}}>  <Image style={{ height: 15, width: 15,  }} tintColor={Colors.placeHolderTextColor} source={require('../../../assets/images/newpen.png')}></Image>
  </View> 

</View>
</View>
</View>
</View>

        </View>
    )
}

export default EmailTemplate

const styles = StyleSheet.create({
    checkbox: {
        marginLeft: 8,
        marginTop: 0
    },
    actionPlan: { color: Colors.black, fontSize: 22, fontWeight: 500, marginLeft: 50, alignSelf: 'center' },
    folderImage: { height: 15, width: 15, alignSelf: 'center', tintColor: Colors.placeHolderTextColor },
    folder: { borderRadius: 5, borderColor: Colors.boderColor, height: 40, width: 40, borderWidth: 1, justifyContent: 'center', marginLeft: 20, alignContent: 'center' },
    font18: { color: Colors.black, fontSize: 18, fontWeight: 500, marginLeft: 5, alignSelf: 'center' },
    folderView: { marginLeft: 15, marginTop: -25, flexDirection: 'row' ,width:"100%"},
    searchPart: { justifyContent: 'space-between', padding: 22, flexDirection: 'row', alignContent: 'center' },
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