import { StyleSheet,View, Image, Text,TextInput,ScrollView,Modal, TouchableOpacity,Dimensions,FlatList,ListRenderItem } from 'react-native';
import { Stack,useNavigation } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState,useRef, useCallback } from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';
import customerHome from '../(customerTabs)/customerIndex/customerHome';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardAvoidingView, Platform } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';

export default function CustomerProfile() {

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [userId, setUserId] = React.useState('1234');
  const [isToggled, setIsToggled] = useState(true); // Toggle state
  const [dob, setDob] = useState('');
  

  const router = useRouter();
      const navigation = useNavigation();
    
      useEffect(() => {
         navigation.setOptions({ 
                 headerShown: true,
                 headerStyle: {
                 shadowColor: 'transparent',  // Remove shadow on iOS
                 elevation: 0,  // Remove shadow on Android
                 //opacity: .4,
                 backgroundColor: 'white', // Optional: Keep header background transparent
                 height: 100,
               }, 
               headerTitleAlign: 'start',
               headerTitleStyle: {
                 fontSize: 18,
                 fontWeight: 'bold',
                 lineHeight: 100, // Matches header height
                 flex: 1, 
               },
               headerTitle: () => (
                 <View style={{ flexDirection: 'row',  justifyContent: 'space-between', width: '100%' }}>
                   <Text style={{ fontSize: 18, fontWeight: 'bold',  flex: 1 }}>Profile</Text>
                   <Icon
                     name="log-out-outline"
                     size={24}
                     color="#00adf5"
                     style={{ marginRight: 15 }}
                     onPress={handleLogout}
                   />
                 </View>
               ),
             
               headerTintColor: '#000000',});
             },  [navigation]);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState); // Toggle the state
   // router.replace('../(customerTabs)/customerIndex')
   console.log("after toggle ",isToggled);
  };

  //bottom sheet
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  // Function to open the BottomSheet
const openBottomSheet = () => {
  bottomSheetRef.current?.expand(); // Open bottom sheet
};

const switchRoleandNavigate = () => {
  console.log("is toggled",isToggled);
  if(!isToggled ){
    
      console.log("check before swutch ",isToggled);
    
      router.replace('../(customerTabs)/customerIndex')
  
    
  }

}
//Save profile
const handleLogout = () => {
  // Add your authentication logic here.
 Alert.alert(
         'Set my Stage',
         'Do you want to logout?',
         [
           { text: 'Cancel', style: 'cancel' },
           { text: 'Logout', onPress: () => router.replace('../login') },
         ],
         { cancelable: true }
       );
}

//Save profile
const handleSave = () => {
  // Add your authentication logic here.
 Alert.alert(
    "Set My Stage", // Title
    "Profile changes saved.", // Message
    [{ text: "OK", onPress: switchRoleandNavigate}] // Button
  );
}

const handleChangeText = (text:string) => {
  setDob(text);
};

 //delete profile
 const handleDeleteAccount = () => {
  // Add your authentication logic here.
  Alert.alert(
    'Set my Stage',
    'Are you sure to delete account?',
    [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', onPress: () => router.replace('../login') },
    ],
    { cancelable: true }
  );
}
    
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}
        style = {styles.container}>
           <SafeAreaProvider>
           <SafeAreaView style = {styles.container}>
           <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <ThemedView style={styles.container}>
                
               
                        {/* //https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png */}
                        
                          <Image source={{ uri: 'https://cdn.britannica.com/42/193142-050-F69B1A23/Sundar-Pichai-Google.jpg?w=385' }} style={styles.cardImageFull} />
                          <View style = {styles.cardDetail}>
                              <View style={styles.toggleContainer}>
                                <Text style={styles.cardTitle}> Sundar Pichai </Text>

                                  <TouchableOpacity
                                    style={[
                                      styles.toggleButton,
                                      { backgroundColor: isToggled ? '#4CAF50' : '#f44336' }, // Change color based on state
                                    ]}
                                    onPress={handleToggle}
                                  >
                                    <Text style={styles.toggleText}>
                                      {isToggled ? 'ON' : 'OFF'} {/* Show ON/OFF based on state */}
                                    </Text>
                                  </TouchableOpacity>
                                  <Text style={styles.toggleLabel}
                                  onPress={() => alert('Be a vendor to showcase your properties or skills and earn money on free time')}> Vendor?</Text>
                              </View>

                              <TextInput
                                style={styles.aboutInput}
                                multiline={true}
                                textAlignVertical="top"
                                onChangeText={onChangeText}
                                placeholder=" About me - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                              />
                              
                              <QRCode 
                                value={userId} // User ID as the QR code content
                                size={150} 
                                color="black"
                                backgroundColor="white"
                              />
                              

                              <TextInput
                                style={styles.input}
                                multiline={false}
                                onChangeText={onChangeText}
                                keyboardType="numeric"
                                maxLength={11}
                                placeholder="Mobile"
                              />

                              <View style={styles.verifyContainer}>

                                <TextInput
                                  style={styles.emailInput}
                                  multiline={false}
                                  scrollEnabled={true}
                                  numberOfLines={1} 
                                  onChangeText={onChangeText}
                                  placeholder="Email"
                                />

                                  <Text style={[styles.verifyText, { backgroundColor: isToggled ? '#4CAF50' : '#f44336' }]}>
                                    {isToggled ? 'Verified' : 'Verify'}
                                  </Text>
                              </View>

                              <TextInputMask
                                type={'datetime'}
                                options={{ format: 'DD/MM/YYYY' }}
                                maxLength={10}
                                style={styles.input}
                                placeholder="Date of birth (dd/mm/yyyy)"
                                keyboardType="numeric"
                                onChangeText={handleChangeText}
                              />

                              <TextInput
                                style={styles.input}
                                multiline={false}
                                maxLength={50} 
                                scrollEnabled={true}
                                  numberOfLines={1} 
                                onChangeText={onChangeText}
                                placeholder="Address line1"
                              />

                              <TextInput
                                style={styles.input}
                                multiline={false}
                                maxLength={50}
                                scrollEnabled={true}
                                  numberOfLines={1} 
                                onChangeText={onChangeText}
                                placeholder="Address line 2"
                              />

                              <TextInput
                                style={styles.input}
                                multiline={false}
                                maxLength={50} 
                                scrollEnabled={true}
                                  numberOfLines={1} 
                                onChangeText={onChangeText}
                                placeholder="City"
                              />

                              <TextInput
                                style={styles.input}
                                multiline={false}
                                maxLength={50} 
                                scrollEnabled={true}
                                  numberOfLines={1} 
                                onChangeText={onChangeText}
                                placeholder="Country"
                              />

                              <TouchableOpacity onPress={handleSave} style={styles.button}>
                                <Text style={styles.buttonText}>Save</Text>
                              </TouchableOpacity>

                              <TouchableOpacity onPress={handleDeleteAccount} >
                                <Text style={styles.buttonTextDelete}>Delete Account</Text>
                              </TouchableOpacity>

                          </View>
                          
               
                
      {/* <BottomSheet style={styles.card}
        snapPoints={["10%","20%","35%","40%", "50%","60%","70%","80%","90%"]} // Add snap points
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
      >
        <BottomSheetView >
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            
          >
            

                <View >
          
                    <View >
                          <TextInput
                            style={styles.input}
                            multiline={true}
                            onChangeText={onChangeText}
                            placeholder="Mobile"
                          />

                          <View style={styles.verifyContainer}>

                          <TextInput
                            style={styles.input}
                            multiline={true}
                            onChangeText={onChangeText}
                            placeholder="Email"
                          />

                            <Text style={[styles.verifyText, { backgroundColor: isToggled ? '#4CAF50' : '#f44336' }]}>
                              {isToggled ? 'Verified' : 'Verify'}
                            </Text>
                          </View>

                          
                          <TextInput
                            style={styles.input}
                            multiline={true}
                            onChangeText={onChangeText}
                            placeholder="Date of birth (dd/mm/yyyy)"
                          />

                          <TextInput
                            style={styles.input}
                            multiline={true}
                            onChangeText={onChangeText}
                            placeholder="Address line1"
                          />

                          <TextInput
                            style={styles.input}
                            multiline={true}
                            onChangeText={onChangeText}
                            placeholder="Address line 2"
                          />

                          <TextInput
                            style={styles.input}
                            multiline={true}
                            onChangeText={onChangeText}
                            placeholder="City"
                          />

                          <TextInput
                            style={styles.input}
                            multiline={true}
                            onChangeText={onChangeText}
                            placeholder="Country"
                          />

                          <TouchableOpacity onPress={handleSave} style={styles.button}>
                            <Text style={styles.buttonText}>Save</Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={handleSave} >
                            <Text style={styles.buttonTextDelete}>Delete Account</Text>
                          </TouchableOpacity>

                    </View>

                </View>
             
            </KeyboardAvoidingView>   
                </BottomSheetView>
      </BottomSheet> */}
    
              </ThemedView>
              </ScrollView>
            </SafeAreaView>
            </SafeAreaProvider>


      </ScrollView>
      </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'white',
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  titleImage: {
    width: 360,
    height: 150,
    borderRadius: 30,
    alignSelf:'center'
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    alignSelf:'center',
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "grey",
  },
  cardImageFull: {
    width: '100%',
    height: 300,
    alignSelf:'center',
  },
  cardDetail: {
    margin:10,
    alignItems: 'center',
    alignContent:'center',
    justifyContent: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems:'flex-start',
    padding:10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex : 1,
    alignSelf:'flex-start',
    color: '#333',
  },
  label: {
    minWidth:'80%',
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  input: {
    minWidth: '90%',
    margin: 12,
    borderWidth: 1,
    borderRadius:5,
    padding: 10,
    flex:1,
  },
  aboutInput: {
    minWidth: '90%',
    margin: 12,
    borderWidth: 0,
    padding: 10,
    minHeight:150,
    alignItems:'stretch',
  },
  round_image: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "grey",
    margin:5,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },

  image: {
    width: '100%',
    height: '80%',
    borderRadius: 10,
  },

  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    color: '#333',
  },

  membersContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    display:'flex',
    flexDirection:'column',
    minWidth:'95%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    margin:5,
    marginTop:20,
    marginBottom:30,
    justifyContent: 'center',
    alignItems: 'center',
},
buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  marginTop:20,
},
button: {
  width:'90%',
  padding: 10,
  backgroundColor: '#1BE7FF',
  borderRadius: 5,
  justifyContent:'center',
  alignItems: 'center',
  margin: 12,
},
buttonSecondary: {
  backgroundColor: 'red',
},
buttonText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',
},
buttonTextDelete: {
  color: 'red',
  fontSize: 14,
  fontWeight: 'bold',
},
callMessageButton:{
  flex: 1,
  flexDirection: 'row',
  padding: 10,
  borderRadius: 5,
  alignItems: 'center',
  marginHorizontal: 5,
},
callMessageButtonContainer:{
  width: '80%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop:10,
},
callMessageButtonText: {
  color: '#00adf5',
  fontSize: 14,
  fontWeight: 'bold',
},
buttonIcon: {
  marginRight: 4, // Space between icon and text
  color: '#00adf5',
},
imageWrapper: {
  position: 'relative', // To enable absolute positioning for the close icon
},
statusIcon: {
  position: 'absolute',
  bottom: 0, // Adjust as needed for placement
  right: 0, // Adjust as needed for placement
  backgroundColor: 'white', // Optional: Add a background for visibility
  borderRadius: 10, // Make the background circular
},
toggleButton: {
  width: 30, // Fixed width
  height: 15, // Fixed height
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5, // Rounded button
  elevation: 5, // Shadow effect
},
toggleText: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 11,
},
toggleContainer:{
  width:'100%',
  display:'flex',
flexDirection:'row',
justifyContent:'flex-end',
alignItems:'baseline',
},
toggleLabel: {
  fontSize: 10,
  color: '#00adf5',
  textDecorationLine: 'underline',
},
buttonDelete: {
  padding: 10,
  backgroundColor: '#E74A4C',
  borderRadius: 5,
  justifyContent:'center',
  alignItems: 'center',
  margin: 12,
},
verifyText:{
  fontSize:10,
  padding: 5,
  alignSelf:'center',
  color:'white',
  borderRadius: 5,
  right: 5,
},
emailInput: {
  minWidth: '75%',
  padding:10,
  paddingStart:15,
  flex:1,
},
verifyContainer:{
  minWidth: '90%',
  display:'flex',
  borderWidth: 1,
  margin: 12,
  flex:1,
  borderRadius:5,
flexDirection:'row',
justifyContent:'space-between',
},
});
