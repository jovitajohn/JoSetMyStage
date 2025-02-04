import { StyleSheet,View,Text, FlatList, SafeAreaView,TouchableOpacity,Alert,Image } from 'react-native';
import { Stack,useNavigation } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { useEffect } from 'react';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import detaildata from './customerPropertyDetail';
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
          navigation.setOptions({ headerShown: true });
        }, [navigation]);

        const listing = [ {name: ' Sheraton',id: 1}, 
          {name: ' Holiday Inn',id: 2},
          {name: ' IBS',id: 3},
          {name: ' Apex',id: 4},]

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

        <Stack.Screen
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
        />

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
                                  description={'item.description'}
                                  image={'https://archive.org/download/placeholder-image/placeholder-image.jpg'}
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