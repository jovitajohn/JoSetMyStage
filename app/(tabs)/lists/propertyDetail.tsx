import { StyleSheet,View, Image, Text,TextInput,ScrollView,Modal, TouchableOpacity,Dimensions,FlatList,ListRenderItem } from 'react-native';
import { Stack,useNavigation } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

export default function propertyDetail() {

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
                  title: 'Venue Detail',
                     headerRight: () => (
                              
                                 <Icon
                                   name="save-outline" // Icon name from Ionicons
                                   size={24}
                                   color="#00adf5"
                                   style={{ marginRight: 15 }}
                                   onPress={() => alert('Saving venue details!')}
                                 />
                  
                              ),
                }}
              />
              <ThemedView style={styles.container}>
              <Image source={{ uri: 'https://www.tagvenue.com/images/location-pages/small/162.jpg' }} style={styles.cardImage} />
              
                <View style={styles.cardContent}>
                 <ScrollView >
          
                   
                
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      placeholder=" Venue Name"
                    />
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      placeholder="Address line 1"
                    />
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      placeholder="Address line 2"
                    />
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      placeholder="City"
                    />
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      placeholder="Country"
                    />
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      placeholder="Pincode"
                    />
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      placeholder="Rent/h"
                    />
                      <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      placeholder="Opening hours"
                    />

                    <Text style={styles.cardTitle}>{'Features :'}</Text>

                    <View style= {styles.feature_container}>

                      <Image source={{ uri: 'https://archive.org/download/placeholder-image/placeholder-image.jpg' }} style={styles.round_image} />
                      <Image source={{ uri: 'https://archive.org/download/placeholder-image/placeholder-image.jpg' }} style={styles.round_image} />
                      <Image source={{ uri: 'https://archive.org/download/placeholder-image/placeholder-image.jpg' }} style={styles.round_image} />
                      <Icon
                          name="add-circle-outline" // Icon name from Ionicons
                          size={70}
                          color="grey"
                          style={{ marginRight: 15 }}
                          onPress={FeaturehandleOpenPopup} //alert('Add feature')}
                        />
                      <Modal visible={featureIsVisible} transparent={true} animationType="fade">
                      {/* onPress={FeaturehandleClosePopup} */}
                          <TouchableOpacity style={styles.modalBackground} activeOpacity={1} >
                            <View style={styles.popupContainer}>
                              <Text style={styles.popupTitle}>Select Features</Text>
                              {/* Add your desired content for the pop-up */}
                              <View style= {styles.feature_container}>

                              <FlatList
                                data={images}
                                renderItem={popupRenderItem}
                                keyExtractor={(item) => item.id}
                                numColumns={numColumns}
                                contentContainerStyle={styles.gridContainer}
                              />

                              </View>

                              <TouchableOpacity onPress={FeaturehandleClosePopup} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Done</Text>
                              </TouchableOpacity>
                            </View>
                          </TouchableOpacity>
                        </Modal>

                    </View>

                    <Text style={styles.cardTitle}>{'Members :'}</Text>   

                    <View style= {styles.feature_container}>

                      <Image source={{ uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png' }} style={styles.round_image} />
                      <Image source={{ uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png' }} style={styles.round_image} />
                      <Image source={{ uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png' }} style={styles.round_image} />
                       <Icon
                          name="add-circle-outline" // Icon name from Ionicons
                          size={70}
                          color="grey"
                          style={{ marginRight: 15 }}
                          onPress={MemberHandleOpenPopup}
                        />

                      <Modal visible={memberIsVisible} transparent={true} animationType="fade">
                        {/* onPress={FeaturehandleClosePopup} */}
                            <TouchableOpacity style={styles.modalBackground} activeOpacity={1} >
                              <View style={styles.membersContainer}>
                                <Text style={styles.popupTitle}>Find a member</Text>
                                {/* Add your desired content for the pop-up */}
                                <View style= {styles.membersContainer}>

                                  {/* Search Bar */}
                                <TextInput
                                  style={styles.searchBar}
                                  placeholder="Search by name..."
                                  value={searchText}
                                  onChangeText={handleSearch}
                                />

                                <FlatList
                                  data={filteredMembers}
                                  keyExtractor={(item) => item.id}
                                  renderItem={({ item }) => (
                                    <View style={styles.userItem}>
                                      <Image source={{ uri: item.uri }} style={styles.profilePic} />
                                      <Text style={styles.userName}>{item.name}</Text>
                                    </View>
                                  )}
                                  ListEmptyComponent={
                                    <Text style={styles.emptyText}>No users found</Text>
                                  }
                                />

                                </View>

                                <TouchableOpacity onPress={MemberHandleClosePopup} style={styles.closeButton}>
                                  <Text style={styles.closeButtonText}>Done</Text>
                                </TouchableOpacity>
                              </View>
                            </TouchableOpacity>
                      </Modal>
                 
                    </View>  

                   
                    {/* <TextInput
                      style={styles.input}
                      onChangeText={onChangeNumber}
                      value={number}
                      placeholder="useless placeholder"
                      keyboardType="numeric"
                    /> */}  
        
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
  cardImage: {
    width: '100%',
    height: 250,
    alignSelf:'center'
  },
  cardContent: {
    flex: 1,
    borderRadius:30,
    marginTop:-50,
    padding:20,
    backgroundColor:'white',
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
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
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
  popupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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
});
