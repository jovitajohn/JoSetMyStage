import { View,Text, StyleSheet, SafeAreaView, FlatList,TouchableOpacity,Alert,Image } from 'react-native';
import { Stack,useNavigation } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState,useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Calendar,DateData, CalendarList } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';


export default function customerHome() {

 type RootStackParamList = {
    listing: undefined; // Parameters for 'listing' screen
    booking: undefined; // Parameters for 'detaildata' screen
  };

      type ListingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'listing'>;
    
    const navigation = useNavigation<ListingScreenNavigationProp>();

      // const navigation = useNavigation();
      const router = useRouter();

        useEffect(() => {
          navigation.setOptions({ 
           headerShown: true,
                     headerStyle: {
                     shadowColor: 'transparent',  // Remove shadow on iOS
                     elevation: 0,  // Remove shadow on Android
                     //opacity: .4,
                     backgroundColor: 'rgba(255, 255, 255, 0.3)', // Optional: Keep header background transparent
                     height: 100,
                   }, 
                   headerTitleStyle: {
                     fontSize: 18,
                     fontWeight: 'bold',
                     lineHeight: 100, // Matches header height
                     flex: 1, 
                   },
                   headerLeft: () => null,
                   headerTitle: () => (
                     <View style={{ flexDirection: 'row',  justifyContent: 'space-between', width: '100%' }}>
                       <Text style={{ fontSize: 18, fontWeight: 'bold',  flex: 1 }}>Set My Stage(customer home)</Text>
                       <Icon
                        name="settings-outline" // Icon name from Ionicons
                        size={24}
                        color="#00adf5"
                        style={{ marginRight: 15 }}
                        onPress={() => navigation.navigate('booking')}   // Navigate to the new screen //alert('Coming soon - Add new listing!')}
                      />
                     </View>
                   ),
                 
                   headerTintColor: '#000000',});
        }, [navigation]);

        const listing = [ {name: ' Sheraton',id: 1,add:'1 Festival Sq, Edinburgh EH3 9SR ',price:'100/h',img:'https://uniquevenuesofedinburgh.co.uk/wp-content/uploads/2014/05/uve__0000s_0002_dovecot-9-340x340.jpg'}, 
          {name: ' Holiday Inn',id: 2,add:'Picardy Pl, Edinburgh EH1 3JT',price:'50/h',img: 'https://www.tagvenue.com/images/location-pages/small/162.jpg'},
          {name: ' IBS',id: 3,add:'77 South Bridge, Edinburgh EH1 1HN ',price:'20/h',img:'https://cdn0.hitched.co.uk/vendor/5919/3_2/640/jpg/dsc07353_4_325919-168450847059960.jpeg'},
          {name: ' Apex',id: 4,add:'23-27 Waterloo Pl, Edinburgh EH1 3BG ',price:'150/h',img: 'https://cdn0.hitched.co.uk/vendor/0903/3_2/960/jpeg/erin-and-ryan-ceremony_4_190903-166072559082285.jpeg'},]

          // Reusable card component
  const CardItem = ({ title, address, price,image, onPress }: any) => (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <View style={styles.titleRow}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{price}</Text>
        </View>
        <Text style={styles.cardDescription}
         numberOfLines={2} 
         ellipsizeMode="tail">{address}</Text>

         <View style={styles.featuresRow}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/15953/15953792.png' }} style={styles.cardImageSmall} />
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/15953/15953830.png' }} style={styles.cardImageSmall} />
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1076/1076877.png' }} style={styles.cardImageSmall} />
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2907/2907439.png' }} style={styles.cardImageSmall} />
         </View>

      </View>
    </TouchableOpacity>
  );

         


  return (
       
       
      <View
        style = {styles.container}>

        <Stack.Screen
          options={{
            title: 'Set My Stage(customer home)',
            // headerRight: () => (
            
            //    <Icon
            //      name="add-circle-outline" // Icon name from Ionicons
            //      size={24}
            //      color="#00adf5"
            //      style={{ marginRight: 15 }}
            //      onPress={() => navigation.navigate('propertyDetail')} // Navigate to the new screen //alert('Coming soon - Add new listing!')}
            //    />

            // ),
          }}
        />

        {/* href sublink method 
        
        <ThemedView>
                   <Link href="/lists/detaildata">view</Link>
        </ThemedView> */}
             
        <ThemedView style={styles.titleContainer}>
                      floating search bar
                      <View style={styles.floatingTextContainer}>
                        <Text style={styles.floatingText}>Your Floating Text</Text>
                        <TouchableOpacity onPress={() => Alert.alert('Card Pressed', `You clicked settings`)}
                         style={styles.floatingIcon}>
                          <Icon
                            name="settings-outline" // Icon name from Ionicons
                            size={24}
                            color="#00adf5"
                            onPress={() => navigation.navigate('booking')}   // Navigate to the new screen //alert('Coming soon - Add new listing!')}
                          />
                        </TouchableOpacity>
                        {/* <Text style={styles.floatingIcon}>Yt</Text> */}
                      </View>
                      <SafeAreaView style={styles.listContainer}>
                        <FlatList
                           data={listing}
                           renderItem={({ item }) =>
                              <CardItem 
                                 title={item.name}
                                 address={item.add}
                                 price={item.price}
                                 image={item.img}//{'https://archive.org/download/placeholder-image/placeholder-image.jpg'} //
                                 onPress={() => Alert.alert('Card Pressed', `You pressed ${item.name}`)}
                              />
                             }  //<Text style={styles.card}>{item.name}</Text>
                          />
                       </SafeAreaView>
        </ThemedView>

       </View>
    
    );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    padding:1,
    marginTop:-60,
    backgroundColor: 'white'
  },
  titleContainer: {
    flex:1,
    flexDirection: 'column',
    padding: 1,
    gap: 8,
    marginTop: 60,
  },
  listContainer: {
    flex:1,
    flexDirection: 'column',
    padding: 1,
    marginTop:60,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    alignItems: 'center' 
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  item: {
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },
  line : {
     height: 1, 
     backgroundColor: "grey",
     marginHorizontal:10
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
    height:330,
    justifyContent: 'center',
  
},
cardImage: {
  width: '100%',
  height: 200,
  borderRadius: 20,
  alignSelf:'center'
},
cardImageSmall: {
  width: 30,
  height: 30,
  margin:10,
},
cardContent: {
  flex: 1,
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
floatingTextContainer: {
  width: '100%',
  position: 'absolute',
  top: 10, // Adjust as needed to overlap header
  left: 0,
  right: 0,
  flexDirection:'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  zIndex: 10, // Ensures it stays on top
},

floatingText: {
  width: '70%',
  //backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
  backgroundColor:'white',
  color: 'black',
  padding: 10,
  borderRadius: 10,
  fontSize: 16,
  fontWeight: 'bold',
  //card look
  shadowColor: 'black',
  shadowOffset: {
      width: 0,
      height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 6,
  elevation: 14,
},
floatingIcon: {
  width: '12%',
  //backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
  backgroundColor:'white',
  color: 'black',
  padding: 10,
  borderRadius: 10,
  fontSize: 16,
  fontWeight: 'bold',
  justifyContent: 'center',
  alignItems: 'center',
  //card look
  shadowColor: 'black',
  shadowOffset: {
      width: 0,
      height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 6,
  elevation: 14,
},
});