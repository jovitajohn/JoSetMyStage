import { StyleSheet,View,Text, FlatList, SafeAreaView,TouchableOpacity,Alert,Image,Dimensions} from 'react-native';
import { Stack,useNavigation } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { useEffect } from 'react';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import detaildata from './customerPropertyDetail';
import type { StackNavigationProp } from '@react-navigation/stack';

export default function ListingScreen() {

  const { width } = Dimensions.get("window");
  const CARD_WIDTH = width * 0.9; 

  type RootStackParamList = {
    listing: undefined; // Parameters for 'listing' screen
    propertyDetail: undefined; // Parameters for 'detaildata' screen
  };

      type ListingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'listing'>;
    
    const navigation = useNavigation<ListingScreenNavigationProp>();

      // const navigation = useNavigation();

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
                             headerTitleStyle: {
                               fontSize: 18,
                               fontWeight: 'bold',
                               lineHeight: 100, // Matches header height
                               flex: 1, 
                             },
                             headerLeft: () => null,
                             headerTitle: () => (
                               <View style={{ flexDirection: 'row',  justifyContent: 'space-between', width: '100%' }}>
                                 <Text style={{ fontSize: 18, fontWeight: 'bold',  flex: 1 }}>My Bookings</Text>
                                 <Icon
                                  //name="settings-outline" // Icon name from Ionicons
                                  size={24}
                                  color="#00adf5"
                                  style={{ marginRight: 15 }}
                                  //onPress={() => navigation.navigate('booking')}   // Navigate to the new screen //alert('Coming soon - Add new listing!')}
                                />
                               </View>
                             ),
                           
                             headerTintColor: '#000000',});
                  },  [navigation]);

                  const listing = [ {name: ' Sheraton',id: 1,status:'Waiting',add:'1 Festival Sq, Edinburgh EH3 9SR ',price:'100/h',img:'https://uniquevenuesofedinburgh.co.uk/wp-content/uploads/2014/05/uve__0000s_0002_dovecot-9-340x340.jpg'}, 
                    {name: ' Holiday Inn',id: 2,status:'Approved',add:'Picardy Pl, Edinburgh EH1 3JT',price:'50/h',img: 'https://www.tagvenue.com/images/location-pages/small/162.jpg'},
                    {name: ' IBS',id: 3,status:'Rejected',add:'77 South Bridge, Edinburgh EH1 1HN ',price:'20/h',img:'https://cdn0.hitched.co.uk/vendor/5919/3_2/640/jpg/dsc07353_4_325919-168450847059960.jpeg'},
                    {name: ' Apex',id: 4,status:'Approved',add:'23-27 Waterloo Pl, Edinburgh EH1 3BG ',price:'150/h',img: 'https://cdn0.hitched.co.uk/vendor/0903/3_2/960/jpeg/erin-and-ryan-ceremony_4_190903-166072559082285.jpeg'},]
          

          // Reusable card component
  const CardItem = ({ title, description, status, image, onPress }: any) => (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.cardContent}>
      <Image source={{ uri: image }} style={styles.cardImage} />
        <View
          style={{
            // width: 0,
            // height: 0,
            // borderBottomWidth: 40, // Adjust for triangle size
            // borderRightWidth: 100, // Adjust for triangle size
            // borderBottomColor: "transparent",
            // borderRightColor: "blue", // Triangle color
            // borderStyle: "solid",
            // position:'absolute',
            marginTop:'10%',
            paddingTop: 5,
            paddingBottom:5,
            alignSelf:'flex-end',
            paddingLeft:20,
            width:'40%',
            position:'absolute',
            borderRadius: 5,
            backgroundColor: '#00adf5',
          }}
        >
           <Text style={styles.statusText}>{status}</Text>
          </View>

        
      </View>
      <View style={styles.textContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
    </TouchableOpacity>
  );

         


  return (
       
       
      <View
        style = {styles.container}>

        {/* <Stack.Screen
          options={{
            title: 'customer listing',
            headerRight: () => (
            
               <Icon
                 name="add-circle-outline" // Icon name from Ionicons
                 size={24}
                 color="#00adf5"
                 style={{ marginRight: 15 }}
                 onPress={() => navigation.navigate('propertyDetail')} // Navigate to the new screen //alert('Coming soon - Add new listing!')}
               />

            ),
          }}
        /> */}

        {/* href sublink method 
        
        <ThemedView>
                   <Link href="/lists/detaildata">view</Link>
        </ThemedView> */}
             
        <ThemedView style={styles.titleContainer}>
                      <SafeAreaView style={styles.listContainer}>
                         <FlatList
                            data={listing}
                            renderItem={({ item }) =>
                               <CardItem 
                                  title={item.name}
                                  description={item.add}
                                  image={item.img}
                                  status={item.status}
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
  },
  titleContainer: {
    flex:1,
    flexDirection: 'column',
    padding: 1,
    gap: 8,
  },
  listContainer: {
    flex:1,
    flexDirection: 'column',
    padding: 1,
    marginTop:20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
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
    height:300,
    justifyContent: 'center',
  
},
cardImage: {
  width: 360,
  height: 200,
  borderRadius: 30,
  alignSelf:'center'
},
cardContent: {
},
textContent: {
  // position: "absolute",
  //   top: 0, // Adjust based on triangle size
  //   left: 10, // Adjust to center text inside triangle
  //   zIndex: 1, // Ensures text is on top of the triangle
  flex:1,
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
statusText: {
  fontSize: 16,
  color: 'white',
},
});