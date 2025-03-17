import { StyleSheet,View, Image, Text,TextInput,ScrollView,Modal, TouchableOpacity,Dimensions,FlatList,ListRenderItem } from 'react-native';
import { Stack,useNavigation } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Calendar } from 'react-native-big-calendar'

export default function customerTimeSlot() {
 
       const navigation = useNavigation();
     
       useEffect(() => {
         navigation.setOptions({ headerShown: true,
                                  headerStyle: {
                                  shadowColor: 'transparent',  // Remove shadow on iOS
                                  elevation: 0,  // Remove shadow on Android
                                  //opacity: .4,
                                  backgroundColor: 'white', // Optional: Keep header background transparent
                                  height: 100,
                                }, 
                                headerTitleStyle: {
                                  fontSize: 18,
                                  fontWeight: 'bold',
                                  lineHeight: 100, // Matches header height
                                  flex: 1, 
                                },
                                headerTitle: () => (
                                  <View style={{ flexDirection: 'row',  justifyContent: 'space-between', width: '100%' }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold',  flex: 1 }}>Book Now</Text>
                                    <Icon
                                     //name="add-circle-outline" // Icon name from Ionicons
                                     size={24}
                                     color="#00adf5"
                                     style={{ marginRight: 15 }}
                                     onPress={() => console.log("booking detail page")}//navigation.navigate('booking')}   // Navigate to the new screen //alert('Coming soon - Add new listing!')}
                                   />
                                  </View>
                                ),
                              
                                headerTintColor: '#000000',});
                     },  [navigation]);
     
                     const events = [
                        {
                          title: 'Meeting',
                          start: new Date(2025, 1, 11, 10, 0),
                          end: new Date(2025, 1, 11, 10, 30),
                        },
                        {
                          title: 'Coffee break',
                          start: new Date(2020, 1, 11, 15, 45),
                          end: new Date(2020, 1, 11, 16, 30),
                        },
                      ]
 
   return (
       <View
         style = {styles.container}>
            <SafeAreaProvider>
            <SafeAreaView style = {styles.container}>
               <Stack.Screen
                 options={{
                   title: 'Book now',
                 }}
               />
               <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
               <ThemedView style={styles.container}>
 
                  
                 <View style={styles.cardDetail}>
                  
                  
                    <View style={styles.simpleView}>
                    <Text style={styles.cardDescription}>Note :</Text>
                      


                  </View>
                  <GestureHandlerRootView style={{ flex: 1 }}>
                <Calendar events={events} height={600} />
                </GestureHandlerRootView>
 
                 
                    
                   
                 </View>
               </ThemedView>
               </ScrollView>
             </SafeAreaView>
             </SafeAreaProvider>
 
 
       </View>
     );
 }
 
 const styles = StyleSheet.create({
   container:{
     flex: 1,
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
     width: '100%',
     height: 250,
     alignSelf:'center'
   },
   cardImage: {
     width: 80,
     height: 80,
     borderRadius: 80/2,
     alignSelf:'center',
     overflow: "hidden",
     borderWidth: 3,
     borderColor: "grey",
   },
   cardDetail: {
     borderRadius:30,
     marginTop:-30,
     padding:10,
     backgroundColor:'white',
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
     width:'60%',
     flexWrap: 'wrap',
   },
   cardDescription: {
     fontSize: 14,
     color: '#666',
     marginTop: 5,
   },
   input: {
     height: 40,
     margin: 12,
     borderWidth: 1,
     padding: 10,
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
   feature_container:{
     flexDirection: 'row',
   },
   modalBackground: {
     flex: 1,
     backgroundColor: 'rgba(0, 0, 0, 0.5)',
     justifyContent: 'center',
     alignItems: 'center',
   },
   popupContainer: {
     backgroundColor: 'white',
     padding: 10,
     borderRadius: 5,
     alignItems: 'center',
   },
   title: {
     fontSize: 16,
     fontWeight: 'bold',
     marginTop: 20,
   },
   closeButton: {
     alignContent: 'center' ,
     justifyContent: 'center',
     width: 80,
     marginTop: 20,
     padding: 10,
     backgroundColor: 'blue',
     borderRadius: 5,
   },
   closeButtonText: {
     color: 'white',
     fontSize: 16,
     fontWeight: 'bold',
   },
   gridItem: {
     margin: 5,
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
   },
   image: {
     width: '100%',
     height: '80%',
     borderRadius: 10,
   },
   gridContainer: {
     padding: 5,
   },
   searchBar: {
     height: 40,
     borderWidth: 1,
     borderColor: '#ddd',
     borderRadius: 5,
     paddingHorizontal: 10,
     marginBottom: 10,
   },
   userItem: {
     flexDirection: 'row',
     alignItems: 'center',
     marginVertical: 5,
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
   emptyText: {
     fontSize: 16,
     color: '#888',
     textAlign: 'center',
     marginVertical: 20,
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
   backgroundColor: '#00adf5',
   borderRadius: 5,
   alignItems: 'center',
   marginHorizontal: 5,
   margin:20,
  
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
   flexDirection:'row',
   paddingLeft:'10%',
   width:'30%',
   height:'100%',
   paddingTop:10,
   paddingBottom:10,
   marginRight:-30,
   borderRadius: 5,
   backgroundColor: '#00adf5',
 },
 callMessageButtonContainer:{
   width: '100%',
   flexDirection: 'row',
   marginTop:10,
   justifyContent:'space-between',
 },
 callMessageButtonText: {
   color: '#00adf5',
   fontSize: 14,
   fontWeight: 'bold',
 },
 buttonIcon: {
   alignSelf:'center',
   color: '#ffffff',
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
 featuresRow: {
  flexDirection: 'row',
  justifyContent: 'space-evenly', 
  alignItems: 'center' ,
  marginTop:10,
},
cardImageSmall: {
  width: 30,
  height: 30,
  margin:10,
},
simpleView:{
  paddingLeft:16,
  paddingRight:16,
  margin:5,
}
 });
 