import { StyleSheet,View,Text, FlatList, SafeAreaView,TouchableOpacity,Alert,Image } from 'react-native';
import { Stack,useNavigation } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { useEffect } from 'react';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import detaildata from './propertyDetail';
import type { StackNavigationProp } from '@react-navigation/stack';

export default function ListingScreen() {

  type RootStackParamList = {
    listing: undefined; // Parameters for 'listing' screen
    propertyDetail: undefined; // Parameters for 'detaildata' screen
  };

      type ListingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'listing'>;
    
    const navigation = useNavigation<ListingScreenNavigationProp>();

      // const navigation = useNavigation();

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
                                 headerLeft: () => null,
                                 headerTitle: () => (
                                   <View style={{ flexDirection: 'row',  justifyContent: 'space-between', width: '100%' }}>
                                     <Text style={{ fontSize: 18, fontWeight: 'bold',  flex: 1 }}>Your listing</Text>
                                     <Icon
                                      name="add-circle-outline" // Icon name from Ionicons
                                      size={24}
                                      color="#00adf5"
                                      style={{ marginRight: 15 }}
                                      onPress={() => navigation.navigate('propertyDetail')}   // Navigate to the new screen //alert('Coming soon - Add new listing!')}
                                    />
                                   </View>
                                 ),
                               
                                 headerTintColor: '#000000',});
                      },  [navigation]);

                      const listing = [ {name: ' Sheraton',id: 1,add:'1 Festival Sq, Edinburgh EH3 9SR ',price:'100/h',img:'https://uniquevenuesofedinburgh.co.uk/wp-content/uploads/2014/05/uve__0000s_0002_dovecot-9-340x340.jpg'}, 
                        {name: ' Holiday Inn',id: 2,add:'Picardy Pl, Edinburgh EH1 3JT',price:'50/h',img: 'https://www.tagvenue.com/images/location-pages/small/162.jpg'},
                        {name: ' IBS',id: 3,add:'77 South Bridge, Edinburgh EH1 1HN ',price:'20/h',img:'https://cdn0.hitched.co.uk/vendor/5919/3_2/640/jpg/dsc07353_4_325919-168450847059960.jpeg'},
                        {name: ' Apex',id: 4,add:'23-27 Waterloo Pl, Edinburgh EH1 3BG ',price:'150/h',img: 'https://cdn0.hitched.co.uk/vendor/0903/3_2/960/jpeg/erin-and-ryan-ceremony_4_190903-166072559082285.jpeg'},]
              

          // Reusable card component
  const CardItem = ({ title, description, image, onPress }: any) => (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );

         


  return (
       
       
      <View
        style = {styles.container}>
{/* 
        <Stack.Screen
          options={{
            title: 'Your listing',
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
                                  onPress={() => navigation.navigate('propertyDetail')}
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
    marginTop:10,
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
  borderRadius: 15,
  alignSelf:'center'
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
});