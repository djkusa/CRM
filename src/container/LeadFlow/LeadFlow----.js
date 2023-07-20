import React, { useState, useEffect, useRef } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,

} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Picker } from 'react-native';

import Colors from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { color } from "react-native-reanimated";

const LeadFlow = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');
  return (




    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.cream }}>
      <View style={{ flex: 1, backgroundColor: Colors.cream, paddingTop:22,paddingHorizontal:18 }}>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <View style={{flexDirection:"row"}}>   <Text style={{paddingRight:12,color:"#40a1da",fontWeight:600,}}> 
            <Image
                style={{
                  height: 12,
                  width: 12,
                  resizeMode: "contain",
                  tintColor: "#40a1da",
                }}
                source={require("../../../assets/plus.png")}
              /> Add Another Rules</Text>
              <Text style={{paddingRight:12,color:"#40a1da",fontWeight:600,}}> 
            <Image
                style={{
                  height: 15,
                  width: 15,
                  resizeMode: "contain",
                  tintColor: "#40a1da",
                }}
                source={require("../../../assets/copy.png")}
              /> Copy from other Lead Flows</Text>
             <Text style={{paddingRight:12,color:"#40a1da",fontWeight:600,}}> 
            <Image
                style={{
                  height: 12,
                  width: 12,
                  resizeMode: "contain",
                  tintColor: "#40a1da",
                }}
                source={require("../../../assets/clock.png")}
              /> Delay: 1m </Text>
              
          </View>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            <Text style={{color:"#40a1da"}}>Cancel</Text>
            <TouchableOpacity
            style={{
              backgroundColor: "#40a1da",
              padding: 12,
              borderRadius: 100,
              paddingHorizontal:22,
              marginLeft:12
            }}
          >
            <Text
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
           
              Save
            </Text>
          </TouchableOpacity>
          </View>
          </View>
          <View style={{backgroundColor:Colors.white,padding:22,width:"100%",height:"100%",marginTop:12,borderWidth:1,borderColor:Colors.boderColor,shadowProp: {  
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,  
  },  }}>

<View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",marginBottom:30}}>
<Image
                style={{
                  height: 15,
                  width: 15,
                  resizeMode: "contain",
                  marginRight:12,
                }}
                source={require("../../../assets/rules-1.png")}
              />
  <Text style={{color:"#45535d",fontSize:16,fontWeight:500}}>1. Rule</Text>
</View>
<View>
  <Text style={{color:"#45535d",fontSize:16,fontWeight:500}}>Leads who meets

<Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue) => setSelectedValue(itemValue)}
      style={[styles.dropdown,{marginLeft:12}]}
      itemStyle={styles.dropdownItem}
      mode="dropdown"
    >
      <Picker.Item label="All" value="All" />
      <Picker.Item label="Any" value="Any" />
    </Picker>
    of these conditions
</Text>


</View>
<View style={{marginVertical:15, flexDirection:"row",alignItems:"center"}}>
  
<Picker
      selectedValue1={selectedValue1}
      onValueChange={(itemValue1) => setSelectedValue1(itemValue1)}
      style={styles.dropdown}
      itemStyle={styles.dropdownItem}
      mode="dropdown"
    >
      <Picker.Item label="Tags" value="Tags" />
      <Picker.Item label="Price" value="Price" />
      <Picker.Item label="City" value="City" />
      <Picker.Item label="State" value="State" />
      <Picker.Item label="ZIP Code" value="ZIP Code" />
      <Picker.Item label="MLS Numbers" value="MLS Numbers" />
      <Picker.Item label="Phone Numbers" value="Phone Numbers" />
    </Picker>
    <Picker
      selectedValue1={selectedValue2}
      onValueChange={(itemValue2) => setSelectedValue2(itemValue2)}
      style={styles.dropdown}
      itemStyle={styles.dropdownItem}
      mode="dropdown"
    >
      <Picker.Item label="Include" value="Tags" />
      <Picker.Item label="Include any of" value="Price" />
      <Picker.Item label="Include all of" value="City" />
      <Picker.Item label="Do not include" value="State" />
      <Picker.Item label="Do not include any of" value="ZIP Code" />
      <Picker.Item label="are empty" value="MLS Numbers" />
      <Picker.Item label="are not include" value="Phone Numbers" />
    </Picker>
    <View style={{backgroundColor:"#edf1f3",borderRadius:100,padding:18}}>
      <Text style={{color:"#525e67"}}>Hunters Run <Image
                style={{
                  height: 9,
                  width: 9,
                  resizeMode: "contain",
                  marginRight:12,
                  tintColor:"#92a4b1"
                }}
                source={require("../../../assets/close.png")}
              /></Text>
             
    </View>
    <TouchableOpacity style={{backgroundColor:"#40a1da",height:35,width:35,borderRadius:100,alignItems:"center",justifyContent:"center"}}>
              <Image
                style={{
                  height: 15,
                  width: 15,
                  resizeMode: "contain",
                 // marginRight:12,
                  tintColor:Colors.white
                }}
                source={require("../../../assets/plus.png")}
              />
              </TouchableOpacity>

</View>
<Text style={{paddingRight:12,color:"#40a1da",fontWeight:600,}}> 
            <Image
                style={{
                  height: 12,
                  width: 12,
                  resizeMode: "contain",
                  tintColor: "#40a1da",
                }}
                source={require("../../../assets/plus.png")}
              /> Add Conditions</Text>


<View
                  style={{
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    marginTop:12
                  }}
                >
<View style={[styles.inputContainer, {marginRight:12}]}>
            <Text style={{marginRight:4,color:"#49555f",fontWeight:600}}>Distribution</Text>
            <View
              style={{
                width: 250,
                height: 50,
              //  marginTop: 10,
                justifyContent: "center",
                borderWidth:1,
                borderRadius:10,  
                borderColor: Colors.boderColor,
                 borderRadius: 4,
               
              }}
            >
              <TextInput
              placeholder="Hunters Run"
              placeholderTextColor={"#6e8392"}
                style={{
                  width: "100%",
                  borderRadius: 4,
                  height: "100%",
                  paddingHorizontal: 15,
                  color: Colors.black,
                 // borderColor:Colors.borderlightcolor,
                backgroundColor:Colors.white,
                  fontSize: 14,
                  padding: 2,
                  fontWeight:600
                }}
              />
            </View>
            </View>
            <View style={[styles.inputContainer, {marginRight:12}]}>
            <Text style={{marginRight:4,color:"#49555f",fontWeight:600}}>Action Plan</Text>
            <View
              style={{
                width: 250,
                height: 50,
              //  marginTop: 10,
                justifyContent: "center",
                borderWidth:1,
                borderRadius:10,  
                borderColor: Colors.boderColor,
                 borderRadius: 4,
               
              }}
            >
              <TextInput
              placeholder="Basic Introduction"
              placeholderTextColor={"#6e8392"}
                style={{
                  width: "100%",
                  borderRadius: 4,
                  height: "100%",
                  paddingHorizontal: 15,
                  color: Colors.black,
                 // borderColor:Colors.borderlightcolor,
                backgroundColor:Colors.white,
                  fontSize: 14,
                  padding: 2,
                  fontWeight:600
                }}
              />
            </View>
            </View>
</View>
          </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    fontSize: 14,
    borderWidth: 1,
    borderColor: Colors.boderColor,
    backgroundColor: '#edf1f3',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight:12,
    width:200
  },
  dropdownItem: {
    fontSize: 16,
  },  inputContainer: {
    flexDirection:"row",
    alignItems:"center",
   
  }, 
});

export default LeadFlow;
  