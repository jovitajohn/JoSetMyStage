import { StyleSheet,View, Image, Text,TextInput,ScrollView,Modal, TouchableOpacity,Dimensions,FlatList,ListRenderItem } from 'react-native';
import { Stack,useNavigation } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';

export default function bookingDetail() {

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

      const navigation = useNavigation();
    
      useEffect(() => {
        navigation.setOptions({ headerShown: true });
      }, [navigation]);
    
   


      //Popup
      const numColumns = 3; // Number of columns for the grid
      const screenWidth = Dimensions.get('window').width;
      const imageSize = screenWidth / numColumns - 10; // Adjust size with padding

      //features Pop up image grid
     
        const [featureIsVisible, setIsVisible] = useState(false);
      
      
        const FeaturehandleOpenPopup = () => {
          setIsVisible(true);
        };
      
        const FeaturehandleClosePopup = () => {
          setIsVisible(false);
        };


        
        type ImageItem = {
          id: string;
          uri: string;
        };
        const images: ImageItem[] = [
          { id: '1', uri: 'https://archive.org/download/placeholder-image/placeholder-image.jpg' },
          { id: '2', uri: 'https://archive.org/download/placeholder-image/placeholder-image.jpg' },
          { id: '3', uri: 'https://archive.org/download/placeholder-image/placeholder-image.jpg' },
          { id: '3', uri: 'https://archive.org/download/placeholder-image/placeholder-image.jpg' },
        ];
       

        const popupRenderItem : ListRenderItem<ImageItem> = ({ item }) => (
          <View style={[styles.gridItem, { width: imageSize, height: imageSize }]}>
            <Image source={{ uri: item.uri }} style={styles.image} />
            <Text>Name</Text>
          </View>
        );

        //Members popup image grid

        const [memberIsVisible, setMemberIsVisible] = useState(false);
      
      
        const MemberHandleOpenPopup = () => {
          setMemberIsVisible(true);
        };
      
        const MemberHandleClosePopup = () => {
          setMemberIsVisible(false);
        };


        type MemberItem = {
          id: string;
          name: string;
          uri: string;
        };
        const members: MemberItem[] = [
          { id: '1',name:'test name1', uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png' },
          { id: '2',name:'test name2', uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png' },
          { id: '3',name:'test name3', uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png' },
          { id: '4',name:'test name4', uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png' },
        ];
       

        const memberRenderItem : ListRenderItem<MemberItem> = ({ item }) => (
          <View style={[styles.gridItem, { width: imageSize, height: imageSize }]}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </View>
        );

           //Search
      const [searchText, setSearchText] = useState('');
      const [filteredMembers, setFilteredUsers] = useState(members);

      const handleSearch = (text: string) => {
        setSearchText(text);
        const filtered = members.filter((user) =>
          user.id.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredUsers(filtered);
      };



  return (
      <View
        style = {styles.container}>
           <SafeAreaProvider>
           <SafeAreaView style = {styles.container}>
              <Stack.Screen
                options={{
                  title: 'Booking Detail',
                }}
              />
              <ThemedView style={styles.container}>
                <View style={styles.cardDetail}>
                 <ScrollView >
          
                    <Image source={{ uri: 'https://archive.org/download/placeholder-image/placeholder-image.jpg' }} style={styles.titleImage} />
                    <Text style={styles.cardTitle}> Property Name </Text>

                    {/* Customer details card */}
                    <View style={styles.card}>
                      <View style={styles.cardContent}>
                        <View style={styles.cardImage}>

                        <Image source={{ uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png' }} style={styles.cardImage} />

                        </View>

                        <View style={styles.cardDetail}>

                          <Text style={styles.cardTitle}> Customer Name </Text>
                          <View style={styles.callMessageButtonContainer}>
                                <TouchableOpacity style={styles.callMessageButton} onPress={() => Alert.alert('Button 1 Pressed', `You pressed call `)}>
                                  <Icon name="call-outline" size={20} color="#fff" style={styles.buttonIcon} />
                                  <Text style={styles.callMessageButtonText}>Call</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.callMessageButton} onPress={() => Alert.alert('Button 2 Pressed', `You pressed message `)}>
                                  <Icon name="chatbubble-outline" size={20} color="#fff" style={styles.buttonIcon} />
                                  <Text style={styles.callMessageButtonText}>Message</Text>
                                </TouchableOpacity>
                          </View>
                                      
                        </View>

                      </View>

                      <Text style={styles.cardDescription}>Note:</Text>
                      <Text style={styles.cardDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>

                      
                    </View>

                    <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Button 1 Pressed', `You pressed Approve `)}>
                                  <Text style={styles.buttonText}>Approve</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={() => Alert.alert('Button 2 Pressed', `You pressed Reject `)}>
                                  <Text style={styles.buttonText}>Reject</Text>
                                </TouchableOpacity>
                    </View>

                    <Text style={styles.title}>{'Members :'}</Text>   

                    <View style= {styles.feature_container}>

                    <View style={styles.imageWrapper}>
                      <Image source={{ uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png' }} style={styles.round_image} />
                      <Icon style={styles.statusIcon} name="close-circle" size={20} color="red" />

                    </View>

                    <View style={styles.imageWrapper}>
                      <Image source={{ uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png' }} style={styles.round_image} />
                      <Icon style={styles.statusIcon} name="checkmark-circle" size={20} color="green" />

                    </View>

                    <View style={styles.imageWrapper}>
                      <Image source={{ uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png' }} style={styles.round_image} />
                      <Icon style={styles.statusIcon} name="close-circle" size={20} color="red" />

                    </View>

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
    width: 80,
    height: 80,
    borderRadius: 80/2,
    alignSelf:'center',
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "grey",
  },
  cardDetail: {
    margin:10,
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
});
