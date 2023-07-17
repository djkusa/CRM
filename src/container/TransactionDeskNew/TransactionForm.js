import React, { useState } from "react";
import { TextInput, View, Image, SectionList, Text, Modal, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import Colors from "../../utils/Colors";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Switch } from 'react-native-switch';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";

const DATA = [
    {
        title: 'Parites',
        data: ['Seller', 'Buyer'],
    },
    {
        title: '1. Properties Description',
        data: ['Property Address', 'County', 'Tax ID #', 'Legal Description', 'Included Personal Items', 'Excluded Personal Items'],
    },
    {
        title: '2 Purchase Price',
        data: ['Purchase Price', 'Escrow Deposit', 'Escrow Agent', 'Financing'],
    },
    {
        title: '3. Time for Acceptance',
        data: ['Offer Acceptance'],
    },
    {
        title: '4. Closing Date',
        data: ['Closing Date'],
    },
    {
        title: '6. Occupancy & Posession',
        data: ['Property subject to a lease'],
    },
    {
        title: '9. Closing Costs & Fees',
        data: ['Seller Closing Contribution', 'Title Evidence & Insurance', 'Designation of Title Co.', 'Home Warranty', 'Special Assessments'],
    },
    {
        title: '12. Property Inspection',
        data: ['Inspection Due Date', 'Walk-through Date'],
    },
    {
        title: '19. Addenda or Riders',
        data: ['Attach addenda'],
    },
    {
        title: '20. Additional terms',
        data: ['Additional terms'],
    },
    {
        title: '3. Transaction Parties',
        data: ['Sales Associate (Buyers Agent)', 'Sales Associate Broker', 'Listing Associate (Sellers Agent)', 'Listing Broker', 'Mortage Company', 'Title Company', 'Appraiser', 'Inspector', 'Buyers Attorney', 'Sellers Attoreny', 'Surf Lokal Coordinator'],
    },
];
const AddendaRiders = [
    {
        title: 'Conda Riders',
    },
    {
        title: 'HOA',
    },
    {
        title: 'Seller Financing',
    },
    {
        title: 'Mortgage Assumption',
    },
    {
        title: 'FHA /VA',
    },
    {
        title: 'Appraisal Contingency',
    },
    {
        title: 'Short Sale',
    },
    {
        title: 'Home/Flood Insurance',
    },
    {
        title: "Intrest Bearing Acct",
    },
    {
        title: 'Defective Drywall',
    },
    {
        title: 'Coastal Construction Control Line',
    },
    {
        title: 'Insulation Disclosur ',
    },
    {
        title: 'Lead Paint Disclosur',
    },
    {
        title: 'Older Persons Housing',
    },
    {
        title: 'Rezoning',
    },
    {
        title: 'Lease Purchase /Option',
    },
    {
        title: 'Pre-closing Occupancy',
    },
    {
        title: 'Post-closing Occupancy',
    },
    {
        title: "Sale of Buyer's Property",
    },
    {
        title: 'Back-up Contract',
    },
    {
        title: 'Kick-out Clause',
    },
    {
        title: "Saller's Attorney Approval",
    },
    {
        title: "Buyer's Attorney Approval",
    },
    {
        title: 'Licencess Property Intrest',
    },
    {
        title: 'Binding Arbitrarion',
    },
    {
        title: 'Miami -Dade Special Taxing District',
    },
    {
        title: 'Seasonal / Vacction Rentals',
    },
    {
        title: 'PACE Disclousers',
    },
    {
        title: 'Lead Paint Disclouser',
    },
    {
        title: 'Older Persons Housing',
    },
    {
        title: 'Rezoning',
    },
    {
        title: 'Lease Purchase /Option',
    },
]

var radio_props = [
    { label: 'Accompanies Offer', value: 0 },
    { label: 'Made within 3 days', value: 1 }
];
const TrasactionForm = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [sellerBuyer, setSellerBuyer] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const closePopup = () => {
        setShowPopup(false);
    };
    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const navigation = useNavigation();

    const [value, setValue] = useState(null);
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [isFocus1, setIsFocus1] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);
    const [isFocus3, setIsFocus3] = useState(false);
    const handleConfirm = (date) => {
        const dateObj = new Date(date);
        const formattedDate = dateObj.toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });

        setSelectedDate(formattedDate);
        hideDatePicker();
    };
    return (
        <View style={{ backgroundColor: Colors.white }}>
            <View
                style={{
                    height: 60,
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
                            tintColor: Colors.white, height: 15,
                            width: 15,
                            resizeMode: "contain",
                        }}
                        source={require("../../../assets/back.png")}
                    ></Image>
                </TouchableOpacity>
                <Text
                    style={{ fontSize: 19, fontWeight: "bold", color: Colors.white }}
                >
                    Transaction-Form
                </Text>

                <Text></Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 14, color: Colors.black, textAlign: 'center' }}>Import Fields from MLS  </Text>
                <Image style={{ width: 14, height: 14 }} source={require('../../assets/images/account.png')}></Image>
                

            </View>
            <SectionList
                style={{ padding: 16}}
                sections={DATA}
                ListFooterComponent={<View style={{height:120}}></View>}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => {
                        item === 'Seller' ? (setSellerBuyer('Seller'), setShowPopup(true)) :
                            item === 'Buyer' ? (setSellerBuyer('Buyer'), setShowPopup(true)) :
                                item === 'Escrow Deposit' ? (setSellerBuyer('Escrow Deposit'), setShowPopup(true)) :
                                    item === 'Escrow Agent' ? (setSellerBuyer('Escrow Agent'), setShowPopup(true)) :
                                        item === 'Financing' ? (setSellerBuyer('Financing'), setShowPopup(true)) :
                                            item === 'Offer Acceptance' ? setDatePickerVisibility(true) :
                                                item === 'Closing Date' ? setDatePickerVisibility(true) :
                                                    item === 'Property subject to a lease' ? setSellerBuyer('Property subject to a lease') :
                                                        item === 'Seller Closing Contribution' ? (setSellerBuyer('Seller Closing Contribution'), setShowPopup(true)) :
                                                            item === 'Title Evidence & Insurance' ? setDatePickerVisibility(true) :
                                                                item === 'Inspection Due Date' ? setDatePickerVisibility(true) :
                                                                    item === 'Walk-through Date' ? setDatePickerVisibility(true) :
                                                                        item === 'Additional terms' ? (setSellerBuyer('Additional terms'), setShowPopup(true)) :
                                                                            item === 'Attach addenda' ? (setSellerBuyer('Attach addenda'), setShowPopup(true)) :
                                                                                item === 'Sales Associate (Buyers Agent)' ? (setSellerBuyer('Sales Associate (Buyers Agent)'), setShowPopup(true)) :
                                                                                    item === 'Sales Associate Broker' ? (setSellerBuyer('Sales Associate Broker'), setShowPopup(true)) :
                                                                                        item === 'Listing Associate (Sellers Agent)' ? (setSellerBuyer('Sellers Agent'), setShowPopup(true)) :
                                                                                            item === 'Listing Broker' ? (setSellerBuyer('Sellers Agent Broker'), setShowPopup(true)) : null



                    }}>
                        <View style={{
                            borderRadius: 5,
                            borderColor: Colors.boderColor,
                            borderWidth: 0.8,
                            marginTop: 8,
                            padding: 5,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                        >
                            {
                                item === 'Property subject to a lease' ?
                                    <Dropdown
                                        placeholder="Property subject to a lease"
                                        placeHolderTextColor={Colors.placeHolderTextColor}
                                        placeholderStyle={{ color: Colors.placeHolderTextColor }}
                                        iconColor="#FFFFFF"
                                        style={{ width: '90%', height: 25 }}
                                        data={[
                                            { label: 'Yes', value: '1' },
                                            { label: 'No', value: '2' },
                                        ]}
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        value={value}
                                        onFocus={() => setIsFocus(true)}
                                        onBlur={() => setIsFocus(false)}
                                        onChange={item => {
                                            setValue(item.value);
                                            setIsFocus(false);
                                        }}

                                    /> : item === 'Designation of Title Co.' ?
                                        <Dropdown
                                            placeholder="Designation of Title Co."
                                            placeHolderTextColor={Colors.placeHolderTextColor}
                                            placeholderStyle={{ color: Colors.placeHolderTextColor }}
                                            iconColor="#FFFFFF"
                                            style={{ width: '90%', height: 25 }}
                                            data={[
                                                { label: 'Seller', value: '1' },
                                                { label: 'Buyer', value: '2' },
                                                { label: 'MIAMI', value: '2' },
                                            ]}
                                            maxHeight={300}
                                            labelField="label"
                                            valueField="value"
                                            value={value}
                                            onFocus={() => setIsFocus1(true)}
                                            onBlur={() => setIsFocus1(false)}
                                            onChange={item => {
                                                setValue1(item.value);
                                                setIsFocus1(false);
                                            }}

                                        /> : item === 'Home Warranty' ? <Dropdown
                                            placeholder="Home Warranty"
                                            placeHolderTextColor={Colors.placeHolderTextColor}
                                            placeholderStyle={{ color: Colors.placeHolderTextColor }}
                                            iconColor="#FFFFFF"
                                            style={{ width: '90%', height: 25 }}
                                            data={[
                                                { label: 'Seller', value: '1' },
                                                { label: 'Buyer', value: '2' },
                                                { label: 'N/A', value: '2' },
                                            ]}
                                            maxHeight={300}
                                            labelField="label"
                                            valueField="value"
                                            value={value}
                                            onFocus={() => setIsFocus2(true)}
                                            onBlur={() => setIsFocus2(false)}
                                            onChange={item => {
                                                setValue2(item.value);
                                                setIsFocus2(false);
                                            }}

                                        /> :
                                            item === 'Special Assessments' ? <Dropdown
                                                placeholder="Special Assessments"
                                                placeHolderTextColor={Colors.placeHolderTextColor}
                                                placeholderStyle={{ color: Colors.placeHolderTextColor }}
                                                iconColor="#FFFFFF"
                                                style={{ width: '90%', height: 25 }}
                                                data={[
                                                    { label: 'Seller & Buyer', value: '1' },
                                                    { label: 'Seller in full', value: '2' },
                                                ]}
                                                maxHeight={300}
                                                labelField="label"
                                                valueField="value"
                                                value={value}
                                                onFocus={() => setIsFocus3(true)}
                                                onBlur={() => setIsFocus3(false)}
                                                onChange={item => {
                                                    setValue3(item.value);
                                                    setIsFocus3(false);
                                                }}

                                            /> :
                                                <TextInput
                                                    style={{ width: '90%' }}
                                                    placeholder={item}
                                                    placeholderTextColor={Colors.placeHolderTextColor}
                                                    keyboardType={item === 'Purchase Price' ? 'number-pad' : 'default'}
                                                    underlineColorAndroid="transparent"
                                                    editable={item === 'Property Address' ? true :
                                                        item === 'County' ? true :
                                                            item === 'Tax ID #' ? true :
                                                                item === 'Legal Description' ? true :
                                                                    item === 'Purchase Price' ? true : false}></TextInput>
                            }


                            <Image style={{ width: 16, height: 16,padding:-3 }} source={(item ==='Seller' || 
                            item === 'Buyer'||
                             item==="Escrow Agent" ||
                             item === 'Included Personal Items' ||
                             item === 'Excluded Personal Items' ||
                             item === 'Property subject to a lease' ||
                             item === 'Designation of Title Co.' ||
                             item === 'Home Warranty' ||
                             item === 'Special Assessments' ||
                             item === 'Attach addenda' ||
                             item === 'Additional terms' ||
                             item === 'Sales Associate (Buyers Agent)' ||
                             item === 'Sales Associate Broker' || 
                             item === 'Listing Associate (Sellers Agent)' || 
                             item === 'Listing Broker' ||
                             item === 'Mortage Company' ||
                             item === 'Title Company' ||
                             item === 'Appraiser' ||
                             item === 'Inspector' ||
                             item ==='Buyers Attorney' ||
                             item === 'Sellers Attoreny' ||
                             item === 'Surf Lokal Coordinator'? require('../../assets/images/addDoc.png')  : 
                             item === 'Property Address' ? require('../../assets/images/pencil.png') :
                             item === 'County' ? require('../../assets/images/pencil.png') :
                             item === 'Tax ID #' ? require('../../assets/images/pencil.png') :
                             item === 'Legal Description' ? require('../../assets/images/pencil.png') :
                             item === 'Purchase Price' ? require('../../assets/images/docDoller.png') :
                             item === 'Financing' ? require('../../assets/images/docDoller.png') :
                             item === 'Seller Closing Contribution' ? require('../../assets/images/docDoller.png') :
                             item === 'Escrow Deposit' ? require('../../assets/images/calenderMoney.png') :
                             item === 'Offer Acceptance' ? require('../../assets/images/calenderTime.png') :
                             item === 'Closing Date' ? require('../../assets/images/calenderTime.png') :
                             item === 'Title Evidence & Insurance' ? require('../../assets/images/calenderTime.png') :
                             item === 'Inspection Due Date' ? require('../../assets/images/calenderTime.png') :
                             item === 'Walk-through Date' ? require('../../assets/images/calenderTime.png') :
                             require('../../assets/images/account.png'))}></Image>
                        </View>
                    </TouchableOpacity>

                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{ fontSize: 18, color: Colors.black, marginTop: 8 }}>{title}</Text>
                )}
            />

            <Modal
                style={{}}
                animationType="slide"
                transparent={true}
                visible={showPopup}
                onRequestClose={closePopup}
            >
                <View style={styles.popupContainer}>
                    <View style={styles.popupContent}>
                        <View
                            style={{
                                // alignSelf: "flex-end",
                                // position: "absolute",
                                // zIndex: 9999,
                                // right: 6,
                                // top: 6,
                                flexDirection: 'row',
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%"
                            }}
                        >
                            <Text style={{ fontSize: 26, color: Colors.black, textAlign: 'center', width: '100%', textAlign: 'center' }}>{sellerBuyer === 'Sales Associate (Buyers Agent)' ? 'Buyer Agent' : sellerBuyer === 'Sales Associate Broker' ? 'Buyer Agent Broker' : sellerBuyer}</Text>

                            <TouchableOpacity
                                style={styles.popupButton}
                                onPress={closePopup}
                            >
                                <Image
                                    style={{
                                        height: 15,
                                        width: 15,
                                        resizeMode: "contain",


                                    }}
                                    source={require("../../../assets/closeblack.png")}
                                ></Image>


                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            <View style={{ marginTop: 16 }}>
                                {
                                    sellerBuyer === 'Seller' ?
                                        <View>
                                            <TextInput
                                                placeholder="Full name of Seller or Sellers"
                                                placeholderTextColor={Colors.placeHolderTextColor}
                                                style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                underlineColorAndroid="transparent"
                                            >

                                            </TextInput>

                                            <TextInput
                                                placeholder="Mailing Address - Street"
                                                placeholderTextColor={Colors.placeHolderTextColor}
                                                style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                underlineColorAndroid="transparent"
                                            >

                                            </TextInput>

                                            <TextInput
                                                placeholder="Mailing Address - Apartment Or Suite #"
                                                placeholderTextColor={Colors.placeHolderTextColor}
                                                style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                underlineColorAndroid="transparent"
                                            >

                                            </TextInput>

                                            <TextInput
                                                placeholder="Mailing Address - City,State & Zip"
                                                placeholderTextColor={Colors.placeHolderTextColor}
                                                style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                underlineColorAndroid="transparent"
                                            >

                                            </TextInput>
                                        </View> : sellerBuyer === 'Buyer' ? <View>

                                            <TextInput
                                                placeholder="Full name of Buyer or Buyers"
                                                placeholderTextColor={Colors.placeHolderTextColor}
                                                style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                underlineColorAndroid="transparent"
                                            >

                                            </TextInput>

                                            <TextInput
                                                placeholder="Mailing Address - Street"
                                                placeholderTextColor={Colors.placeHolderTextColor}
                                                style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                underlineColorAndroid="transparent"
                                            >

                                            </TextInput>

                                            <TextInput
                                                placeholder="Mailing Address - Apartment Or Suite #"
                                                placeholderTextColor={Colors.placeHolderTextColor}
                                                style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                underlineColorAndroid="transparent"
                                            >

                                            </TextInput>

                                            <TextInput
                                                placeholder="Mailing Address - City,State & Zip"
                                                placeholderTextColor={Colors.placeHolderTextColor}
                                                style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                underlineColorAndroid="transparent"
                                            >

                                            </TextInput>
                                        </View> : sellerBuyer === 'Escrow Deposit' ?
                                            <View>
                                                <Text style={{ fontSize: 22, color: Colors.black }}>Initial Deposit</Text>
                                                <TextInput
                                                    placeholder="$"
                                                    placeholderTextColor={Colors.placeHolderTextColor}
                                                    keyboardType={'number-pad'}
                                                    style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                    underlineColorAndroid="transparent"
                                                ></TextInput>

                                                <RadioForm
                                                    radio_props={radio_props}
                                                    style={{ marginTop: 10 }}
                                                    buttonOuterColor={{ color: Colors.placeHolderTextColor }}
                                                    buttonWrapStyle={{ color: Colors.placeHolderTextColor }}
                                                    initial={0}
                                                    buttonSize={15}
                                                    buttonColor={Colors.placeHolderTextColor}
                                                    labelColor={Colors.placeHolderTextColor}
                                                    onPress={() => { }}
                                                />

                                                <Text style={{ fontSize: 22, color: Colors.black, marginTop: 10 }}>Additional Deposit</Text>
                                                <TextInput
                                                    placeholder="$"
                                                    placeholderTextColor={Colors.placeHolderTextColor}
                                                    keyboardType={'number-pad'}
                                                    style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                    underlineColorAndroid="transparent"
                                                ></TextInput>

                                                <TextInput
                                                    placeholder="Enter Date ie. 00/00/2020"
                                                    placeholderTextColor={Colors.placeHolderTextColor}
                                                    keyboardType={'numeric'}
                                                    style={{ borderColor: Colors.black, borderWidth: 1, borderRadius: 10, marginTop: 5, padding: 5 }}
                                                    underlineColorAndroid="transparent"
                                                ></TextInput>

                                            </View> : sellerBuyer === 'Escrow Agent' ?
                                                <View>
                                                    <TextInput
                                                        placeholder="Name"
                                                        placeholderTextColor={Colors.placeHolderTextColor}
                                                        keyboardType='name-phone-pad'
                                                        style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                        underlineColorAndroid="transparent"
                                                    ></TextInput>


                                                    <TextInput
                                                        placeholder="Address"
                                                        placeholderTextColor={Colors.placeHolderTextColor}
                                                        keyboardType='default'
                                                        style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                        underlineColorAndroid="transparent"
                                                    ></TextInput>

                                                    <TextInput
                                                        placeholder="Phone"
                                                        placeholderTextColor={Colors.placeHolderTextColor}
                                                        keyboardType={'number-pad'}
                                                        style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                        underlineColorAndroid="transparent"
                                                    ></TextInput>

                                                    <TextInput
                                                        placeholder="Email"
                                                        placeholderTextColor={Colors.placeHolderTextColor}
                                                        keyboardType='email-address'
                                                        style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                        underlineColorAndroid="transparent"
                                                    ></TextInput>

                                                    <TextInput
                                                        placeholder="Fax"
                                                        placeholderTextColor={Colors.placeHolderTextColor}
                                                        keyboardType='phone-pad'
                                                        style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                        underlineColorAndroid="transparent"
                                                    ></TextInput>

                                                </View> : sellerBuyer === 'Financing' ?
                                                    <View>
                                                        <View style={{
                                                            height: 30,
                                                            width: 70,
                                                            borderRadius: 20,
                                                            backgroundColor: isEnabled ? Colors.PrimaryColor : Colors.boderColor,
                                                            marginLeft: 16
                                                        }}>

                                                            <Switch
                                                                activeText='Loan'
                                                                inActiveText="Cash"
                                                                outerCircleStyle={{ width: 50 }}
                                                                switchRightPx={60}
                                                                backgroundActive={Colors.PrimaryColor}
                                                                backgroundInactive={Colors.boderColor}
                                                                thumbColor={"#f4f3f4"}
                                                                ios_backgroundColor="#3e3e3e"
                                                                onValueChange={toggleSwitch}
                                                                value={isEnabled}

                                                            />


                                                        </View>
                                                        <TextInput
                                                            placeholder="Loan Amount (Dollar or Percentage)"
                                                            placeholderTextColor={Colors.placeHolderTextColor}
                                                            keyboardType='numeric'
                                                            style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                            underlineColorAndroid="transparent"
                                                        ></TextInput>

                                                        <TextInput
                                                            placeholder="Other (Gift,etc)"
                                                            placeholderTextColor={Colors.placeHolderTextColor}
                                                            keyboardType='default'
                                                            style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                            underlineColorAndroid="transparent"
                                                        ></TextInput>

                                                        <TextInput
                                                            placeholder="Balance to Close*"
                                                            placeholderTextColor={Colors.placeHolderTextColor}
                                                            keyboardType='numeric'
                                                            style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                            underlineColorAndroid="transparent"
                                                        ></TextInput>

                                                        <TextInput
                                                            placeholder="Loan apporval date - ie. 00/00/2020"
                                                            placeholderTextColor={Colors.placeHolderTextColor}
                                                            keyboardType='numeric'
                                                            style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                            underlineColorAndroid="transparent"
                                                        ></TextInput>

                                                        <Text style={{ color: Colors.black, fontSize: 14, marginTop: 10 }}>
                                                            Loan Type (Choose Multiple)
                                                        </Text>


                                                        <View style={{
                                                            flexDirection: "row", flexWrap: "wrap",
                                                            alignItems: "center",

                                                        }}>
                                                            <Text style={{ margin: 5, paddingHorizontal: 8, paddingVertical: 5, color: Colors.placeHolderTextColor, alignSelf: "flex-start", borderColor: Colors.boderColor, borderRadius: 15, borderWidth: 1, }}>Conventional</Text>
                                                            <Text style={{ margin: 5, paddingHorizontal: 8, paddingVertical: 5, color: Colors.placeHolderTextColor, alignSelf: "flex-start", borderColor: Colors.boderColor, borderRadius: 15, borderWidth: 1, }}>FHA</Text>
                                                            <Text style={{ margin: 5, paddingHorizontal: 8, paddingVertical: 5, color: Colors.placeHolderTextColor, alignSelf: "flex-start", borderColor: Colors.boderColor, borderRadius: 15, borderWidth: 1, }}>VA</Text>
                                                            <Text style={{ margin: 5, paddingHorizontal: 8, paddingVertical: 5, color: Colors.placeHolderTextColor, alignSelf: "flex-start", borderColor: Colors.boderColor, borderRadius: 15, borderWidth: 1, }}>Other</Text>
                                                            <Text style={{ margin: 5, paddingHorizontal: 8, paddingVertical: 5, color: Colors.placeHolderTextColor, alignSelf: "flex-start", borderColor: Colors.boderColor, borderRadius: 15, borderWidth: 1, }}>tegjst</Text>
                                                            <Text style={{ margin: 5, paddingHorizontal: 8, paddingVertical: 5, color: Colors.placeHolderTextColor, alignSelf: "flex-start", borderColor: Colors.boderColor, borderRadius: 15, borderWidth: 1, }}>tegjst</Text>
                                                        </View>


                                                        <TextInput
                                                            placeholder="Percentage Rate"
                                                            placeholderTextColor={Colors.placeHolderTextColor}
                                                            keyboardType='numeric'
                                                            style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                            underlineColorAndroid="transparent"
                                                        ></TextInput>

                                                        <TextInput
                                                            placeholder="Loan application date - ie. 00/00/2020"
                                                            placeholderTextColor={Colors.placeHolderTextColor}
                                                            keyboardType='numeric'
                                                            style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                            underlineColorAndroid="transparent"
                                                        ></TextInput>

                                                        <Text style={{ color: Colors.placeHolderTextColor, fontSize: 12, marginTop: 10 }}>
                                                            *Deduct the escrow deposits and this will be the number entered here
                                                        </Text>


                                                    </View> : sellerBuyer === 'Seller Closing Contribution' ?
                                                        <View
                                                            style={{
                                                                borderColor: Colors.boderColor, borderWidth: 1, marginTop: 5,
                                                                padding: 5, height: 150, borderRadius: 10, textAlign: 'left', alignContent: 'flex-start'
                                                            }}>
                                                            <View>
                                                                <TextInput
                                                                    placeholder="Ex: $10,000 towards buyers closing costs"
                                                                    multiline
                                                                    maxLength={140}
                                                                    placeholderTextColor={Colors.placeHolderTextColor}
                                                                    underlineColorAndroid="transparent"
                                                                ></TextInput>
                                                            </View>

                                                        </View> :
                                                        sellerBuyer === 'Additional terms' ?
                                                            <View
                                                                style={{
                                                                    borderColor: Colors.boderColor, borderWidth: 1, marginTop: 5,
                                                                    padding: 5, height: 150, borderRadius: 10, textAlign: 'left', alignContent: 'flex-start'
                                                                }}>
                                                                <View>
                                                                    <TextInput
                                                                        placeholder="Fill in anything additional here..."
                                                                        multiline
                                                                        maxLength={140}
                                                                        placeholderTextColor={Colors.placeHolderTextColor}
                                                                        underlineColorAndroid="transparent"
                                                                    ></TextInput>
                                                                </View>

                                                            </View> : sellerBuyer === 'Attach addenda' ?
                                                                <View
                                                                >
                                                                    <FlatList
                                                                        style={{ height: 400 }}
                                                                        numColumns={3}
                                                                        data={AddendaRiders}
                                                                        renderItem={({ item }) => {
                                                                            return (
                                                                                <Text style={{ padding: 5, margin: 5, borderColor: Colors.boderColor, borderWidth: 1, borderRadius: 10, color: Colors.placeHolderTextColor }}>{item.title}</Text>
                                                                            )
                                                                        }
                                                                        }>

                                                                    </FlatList>

                                                                </View> : sellerBuyer === 'Sales Associate (Buyers Agent)' ||
                                                                    sellerBuyer === 'Sales Associate Broker' ||
                                                                    sellerBuyer === 'Sellers Agent' ||
                                                                    sellerBuyer === 'Sellers Associate Broker' ||
                                                                    sellerBuyer === 'Sellers Agent Broker' ?
                                                                    <View>
                                                                        <TextInput
                                                                            placeholder="Name"
                                                                            placeholderTextColor={Colors.placeHolderTextColor}
                                                                            style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                                            underlineColorAndroid="transparent"
                                                                        >

                                                                        </TextInput>

                                                                        <TextInput
                                                                            placeholder="Address"
                                                                            placeholderTextColor={Colors.placeHolderTextColor}
                                                                            style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                                            underlineColorAndroid="transparent"
                                                                        >

                                                                        </TextInput>

                                                                        <TextInput
                                                                            placeholder="Phone"
                                                                            placeholderTextColor={Colors.placeHolderTextColor}
                                                                            style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                                            underlineColorAndroid="transparent"
                                                                        >

                                                                        </TextInput>

                                                                        <TextInput
                                                                            placeholder="Email"
                                                                            placeholderTextColor={Colors.placeHolderTextColor}
                                                                            style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                                            underlineColorAndroid="transparent"
                                                                        >

                                                                        </TextInput>

                                                                        <TextInput
                                                                            placeholder="Fax"
                                                                            placeholderTextColor={Colors.placeHolderTextColor}
                                                                            style={{ borderBottomColor: Colors.boderColor, borderBottomWidth: 1, marginTop: 5, padding: 5 }}
                                                                            underlineColorAndroid="transparent"
                                                                        >

                                                                        </TextInput>
                                                                    </View>
                                                                    : null
                                }


                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}

            />
        </View>
    )
}

export default TrasactionForm;


const styles = StyleSheet.create(
    {
        popupContainer: {
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "flex-end",
            alignItems: "flex-end",
        },
        popupContent: {
            backgroundColor: Colors.cream,
            padding: 12,
            borderRadius: 10,
            width: "100%",
        },
        popupButton: {
            backgroundColor: Colors.white,
            alignSelf: "center",
            borderRadius: 100,
            height: 35,
            width: 35,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: 2,
            top: 0
        },
    }
)