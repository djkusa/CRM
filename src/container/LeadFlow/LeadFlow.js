import React, { useState, useEffect, useRef } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Modal

} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

import Colors from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";

import { Picker } from 'react-native';

const LeadFlow = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');
  return (




    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.cream }}>
      <View style={{ flex: 1, backgroundColor: Colors.cream }}>
        <View
          style={{
            paddingVertical: 22,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: Colors.PrimaryColor,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <Image
              style={{
                height: 15,
                width: 15,
                resizeMode: "contain",
                tintColor: Colors.white,
              }}
              source={require("../../../assets/back.png")}
            />
          </TouchableOpacity>
          <Text
            style={{ fontSize: 19, fontWeight: "bold", color: Colors.white }}
          >
            Lead Flow
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
            flexDirection: "row",
            width: "100%",
            justifyContent: "flex-end",
            marginVertical: 12,
            paddingHorizontal: 8,
          }}
        >
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}
            style={{
              backgroundColor: "#40a1da",
              padding: 12,
              borderRadius: 100,
              paddingHorizontal: 22
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
              <Image
                style={{
                  height: 12,
                  width: 12,
                  resizeMode: "contain",
                  tintColor: Colors.white,
                }}
                source={require("../../../assets/plus.png")}
              />{" "}
              Add Lead Flow
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 18 }}>
          <View
            style={{
              backgroundColor: Colors.white,
              borderRadius: 8,
              width: "100%",
              paddingHorizontal: 12,
              paddingVertical: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
              flexWrap: "wrap"
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{ fontSize: 14, Colors: Colors.black, marginBottom: 12 }}
              >
                Lead Source:
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  Colors: Colors.black,
                  fontWeight: "600",
                }}
              >
                surflokal.com
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{ fontSize: 14, Colors: Colors.black, marginBottom: 12 }}
              >
                Conditions:
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  Colors: Colors.black,
                  fontWeight: "600",
                }}
              >
                Tags
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{ fontSize: 14, Colors: Colors.black, marginBottom: 12 }}
              >
                Campaign:
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  Colors: Colors.black,
                  fontWeight: "600",
                }}
              >
                Google Referrer
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{ fontSize: 14, Colors: Colors.black, marginBottom: 12 }}
              >
                Last Lead .
                <Text style={{ color: "#43a2da" }}>Nina Naguyen</Text>. 2 Days
                ago . 340 leads
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    marginRight: 8,
                  }}
                >
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      resizeMode: "contain",
                      tintColor: "#9eb0bf",
                      marginRight: 6,
                    }}
                    source={require("../../../assets/setting-nn.png")}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 18,
                      Colors: Colors.black,
                      fontWeight: "600",
                      color: "#9eb0bf",
                    }}
                  >
                    Advanced Settings.(21){" "}
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      resizeMode: "contain",
                      tintColor: "#9eb0bf",
                      marginRight: 6,
                    }}
                    source={require("../../../assets/archives.png")}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 18,
                      Colors: Colors.black,
                      fontWeight: "600",
                      color: "#9eb0bf",
                    }}
                  >
                    Archives{" "}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: Colors.white,
              borderRadius: 8,
              width: "100%",
              paddingHorizontal: 12,
              paddingVertical: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap"
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{ fontSize: 14, Colors: Colors.black, marginBottom: 12 }}
              >
                <Text style={{ fontWeight: "800", paddingRight: 6 }}>REW .</Text>
                <Text style={{ fontWeight: "800", paddingRight: 6 }}>Webform .</Text>
                <Text style={{ fpaddingRight: 6 }}>Buyers .</Text>
                <Text style={{ fpaddingRight: 6 }}>Webmasters </Text>
              </Text>
              <Text
                style={{ fontSize: 14, Colors: Colors.black, marginBottom: 12 }}
              >
                Last Lead .{" "}
                <Text style={{ color: "#43a2da" }}>Nina Naguyen</Text>. 4 hours
                ago . 69,000 leads
              </Text>


              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    marginRight: 8,
                  }}
                >
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      resizeMode: "contain",
                      tintColor: "#9eb0bf",
                      marginRight: 6,
                    }}
                    source={require("../../../assets/setting-nn.png")}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 14,
                      Colors: Colors.black,
                      fontWeight: "600",
                      color: "#9eb0bf",
                    }}
                  >
                    Advanced Settings.(21){" "}
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      resizeMode: "contain",
                      tintColor: "#9eb0bf",
                      marginRight: 6,
                    }}
                    source={require("../../../assets/archives.png")}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 14,
                      Colors: Colors.black,
                      fontWeight: "600",
                      color: "#9eb0bf",
                    }}
                  >
                    Archives{" "}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={{ marginRight: 4, color: "#49555f", fontWeight: 600 }}>Distribution</Text>
              <View
                style={{
                  width: 250,
                  height: 50,
                  //  marginTop: 10,
                  justifyContent: "center",
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: Colors.gray,
                  borderRadius: 4,

                }}
              >
                <TextInput
                  placeholder="Salvatore Calafiore (def..."
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


            <View style={styles.inputContainer}>
              <Text style={{ marginRight: 4, color: "#49555f", fontWeight: 600 }}>Lender</Text>
              <View
                style={{
                  width: 250,
                  height: 50,
                  // marginTop: 10,
                  justifyContent: "center",
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: Colors.gray,
                  borderRadius: 4,

                }}
              >
                <TextInput
                  placeholder="No Assigned Lender"
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

            <View style={styles.inputContainer}>
              <Text style={{ marginRight: 4, color: "#49555f", fontWeight: 600 }}>Action Plan</Text>
              <View
                style={{
                  width: 250,
                  height: 50,
                  //  marginTop: 10,
                  justifyContent: "center",
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: Colors.gray,
                  borderRadius: 4,

                }}
              >
                <TextInput
                  placeholder="No Action Plan"
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




            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    marginRight: 8,
                  }}
                >
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      resizeMode: "contain",
                      tintColor: "#9eb0bf",
                      marginRight: 6,
                    }}
                    source={require("../../../assets/setting-nn.png")}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 14,
                      Colors: Colors.black,
                      fontWeight: "600",
                      color: "#9eb0bf",
                    }}
                  >
                    Advanced Settings.(21){" "}
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      resizeMode: "contain",
                      tintColor: "#9eb0bf",
                      marginRight: 6,
                    }}
                    source={require("../../../assets/archives.png")}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 14,
                      Colors: Colors.black,
                      fontWeight: "600",
                      color: "#9eb0bf",
                    }}
                  >
                    Archives{" "}
                  </Text>
                </View>
              </View>
            </View>

          </View>
        </View>
      </View>






      <View style={{ alignContent: "center", position: "relative", justifyContent: "center", overflow: "hidden" }}>
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
                width: '80%',
                height: '80%',
                backgroundColor: Colors.white,
                borderRadius: 20,
                padding: 30,
                overflow: "hidden"
              }}
            >
              <View style={{ flex: 1, backgroundColor: Colors.cream, paddingTop: 22, paddingHorizontal: 18, overflow: "hidden" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <View style={{ flexDirection: "row" }}>   <Text style={{ paddingRight: 12, color: "#40a1da", fontWeight: 600, }}>
                    <Image
                      style={{
                        height: 12,
                        width: 12,
                        resizeMode: "contain",
                        tintColor: "#40a1da",
                      }}
                      source={require("../../../assets/plus.png")}
                    /> Add Another Rules</Text>
                    <Text style={{ paddingRight: 12, color: "#40a1da", fontWeight: 600, }}>
                      <Image
                        style={{
                          height: 15,
                          width: 15,
                          resizeMode: "contain",
                          tintColor: "#40a1da",
                        }}
                        source={require("../../../assets/copy.png")}
                      /> Copy from other Lead Flows</Text>
                    <Text style={{ paddingRight: 12, color: "#40a1da", fontWeight: 600, }}>
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
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                      <Text style={{ color: "#40a1da" }}>Cancel</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#40a1da",
                        padding: 12,
                        borderRadius: 100,
                        paddingHorizontal: 22,
                        marginLeft: 12
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
                <View style={{
                  backgroundColor: Colors.white, padding: 22, width: "100%", height: "86%", marginTop: 12, paddingBottom: 22,
                  //  borderWidth:1,borderColor:Colors.boderColor,
                  shadowProp: {
                    shadowOffset: { width: -2, height: 4 },
                    shadowColor: '#171717',
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                  },
                }}>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginBottom: 30 }}>
                      <Image
                        style={{
                          height: 15,
                          width: 15,
                          resizeMode: "contain",
                          marginRight: 12,
                        }}
                        source={require("../../../assets/rules-1.png")}
                      />
                      <Text style={{ color: "#45535d", fontSize: 16, fontWeight: 500 }}>1. Rule</Text>
                    </View>
                    <TouchableOpacity>
                      <Image
                        style={{
                          height: 15,
                          width: 15,
                          resizeMode: "contain",
                          marginRight: 12,
                        }}
                        source={require("../../../assets/dustbin.png")}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={{ color: "#45535d", fontSize: 16, fontWeight: 500 }}>Leads who meets

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
                      of these conditions
                    </Text>


                  </View>
                  <View style={{ marginVertical: 15, flexDirection: "row", alignItems: "center" }}>

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
                    <View style={{ backgroundColor: "#edf1f3", borderRadius: 100, padding: 18 }}>
                      <Text style={{ color: "#525e67" }}>Hunters Run <Image
                        style={{
                          height: 9,
                          width: 9,
                          resizeMode: "contain",
                          marginRight: 12,
                          tintColor: "#92a4b1"
                        }}
                        source={require("../../../assets/close.png")}
                      /></Text>

                    </View>
                    <TouchableOpacity style={{ backgroundColor: "#40a1da", height: 35, width: 35, borderRadius: 100, alignItems: "center", justifyContent: "center" }}>
                      <Image
                        style={{
                          height: 15,
                          width: 15,
                          resizeMode: "contain",
                          // marginRight:12,
                          tintColor: Colors.white
                        }}
                        source={require("../../../assets/plus.png")}
                      />
                    </TouchableOpacity>

                  </View>
                  <Text style={{ paddingRight: 12, color: "#40a1da", fontWeight: 600, }}>
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
                      marginTop: 12
                    }}
                  >
                    <View style={[styles.inputContainer, { marginRight: 12 }]}>
                      <Text style={{ marginRight: 4, color: "#49555f", fontWeight: 600 }}>Distribution</Text>
                      <View
                        style={{
                          width: 250,
                          height: 50,
                          //  marginTop: 10,
                          justifyContent: "center",
                          borderWidth: 1,
                          borderRadius: 10,
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
                            backgroundColor: Colors.white,
                            fontSize: 14,
                            padding: 2,
                            fontWeight: 600
                          }}
                        />
                      </View>
                    </View>
                    <View style={[styles.inputContainer, { marginRight: 12 }]}>
                      <Text style={{ marginRight: 4, color: "#49555f", fontWeight: 600 }}>Action Plan</Text>
                      <View
                        style={{
                          width: 250,
                          height: 50,
                          //  marginTop: 10,
                          justifyContent: "center",
                          borderWidth: 1,
                          borderRadius: 10,
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
                            backgroundColor: Colors.white,
                            fontSize: 14,
                            padding: 2,
                            fontWeight: 600
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  threeiconmain: {
    flexDirection: "row",
    alignItems: "center",
  },
  covermain: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Colors.white,
    height: 55,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 3,
    marginBottom: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  overviewcover: {
    backgroundColor: Colors.white,
    textAlign: "center",
    paddingVertical: 20,
    marginBottom: 20,
  },
  overviewtext: { fontSize: 16, fontWeight: "bold" },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

  }, dropdown: {
    fontSize: 14,
    borderWidth: 1,
    borderColor: Colors.boderColor,
    backgroundColor: '#edf1f3',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: 12,
    width: 200
  },
  dropdownItem: {
    fontSize: 16,
  }, inputContainer: {
    flexDirection: "row",
    alignItems: "center",

  }, popupContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
});

export default LeadFlow;
