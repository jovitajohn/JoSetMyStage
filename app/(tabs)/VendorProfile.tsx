import { StyleSheet,View, Image, Text,TextInput,ScrollView,Modal, TouchableOpacity,Dimensions,FlatList,ListRenderItem } from 'react-native';
import { Stack,useNavigation } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';
import customerHome from '../(customerTabs)/customerIndex/customerHome';

export default function VendorProfile() {

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  const router = useRouter();
      const navigation = useNavigation();
    
      useEffect(() => {
        navigation.setOptions({ headerShown: true });
      }, [navigation]);

      const [isToggled, setIsToggled] = useState(false); // Toggle state

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState); // Toggle the state
    router.replace('../(customerTabs)/customerIndex')
  };

    
  return (
      <View
        style = {styles.container}>
           <SafeAreaProvider>
           <SafeAreaView style = {styles.container}>
              <Stack.Screen
                options={{
                  title: 'Profile',
                  headerRight: () => (
                              
                                 <Icon
                                   name="save-outline" // Icon name from Ionicons
                                   size={24}
                                   color="#00adf5"
                                   style={{ marginRight: 15 }}
                                   onPress={() => alert('Profile changes saved')}
                                 />
                  
                              ),
                }}
              />
              <ThemedView style={styles.container}>
                <View style={styles.cardDetail}>
                 <ScrollView >
          
                    <View style={styles.card}>

                          <View style={styles.toggleContainer}>
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
                        
                          <Image source={{ uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png' }} style={styles.cardImage} />
                          <Text style={styles.cardTitle}> User Name </Text>


                          <Text style={styles.label}>About me:</Text>
                          <TextInput
                            style={styles.aboutInput}
                            multiline={true}
                            textAlignVertical="top"
                            onChangeText={onChangeText}
                            placeholder=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                          />
                          <TextInput
                            style={styles.input}
                            multiline={true}
                            onChangeText={onChangeText}
                            placeholder="Mobile"
                          />

                          <TextInput
                            style={styles.input}
                            multiline={true}
                            onChangeText={onChangeText}
                            placeholder="Email"
                          />
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

                    </View>

                  </ScrollView>
                </View>
              </ThemedView>
            </SafeAreaView>
            </SafeAreaProvider>


      </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding:1,
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
    marginTop: 10,
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
    padding: 10,
  },
  aboutInput: {
    minWidth: '90%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    minHeight:150,
    alignItems:'flex-start',
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
  flex: 1,
  padding: 10,
  backgroundColor: '#28A745',
  borderRadius: 5,
  alignItems: 'center',
  marginHorizontal: 5,
},
buttonSecondary: {
  backgroundColor: 'red',
},
buttonText: {
  color: '#fff',
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
alignItems:'baseline'
},
toggleLabel: {
  fontSize: 10,
  color: '#00adf5',
  textDecorationLine: 'underline',
},
});
