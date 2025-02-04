import { View,Text, StyleSheet, SafeAreaView, FlatList,TouchableOpacity,Alert,Image } from 'react-native';
import { Stack,useNavigation } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState,useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Calendar,DateData, CalendarList } from 'react-native-calendars';


export default function customerHome() {

   type RootStackParamList = {
          index: undefined; // Parameters for 'home' screen
          booking: undefined;

        };
  
        // const Stack = createStackNavigator<RootStackParamList>();
  
        type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'index'>;
  
  const navigation = useNavigation<HomeNavigationProp>();


  useEffect(() => {
    navigation.setOptions({ headerShown: true });
  }, [navigation]);

  const persons = [ {name: ' Name1',id: 1}, 
    {name: ' Name2',id: 2},
    {name: ' Name3',id: 3},
    {name: ' Name4',id: 4},
    {name: ' Name5',id: 5},
    {name: ' Name6',id: 6},
    {name: ' Name7',id: 7},
    {name: ' Name8',id: 8},
    {name: ' Name9',id: 9},
    {name: ' Name10',id: 10}];


    const today = new Date().toISOString().split('T')[0];
    const [selected, setSelected] = useState(today);
    
     const CardItem = ({ title, description, image, onPress,onButton1Press,onButton2Press }: any) => (
        <TouchableOpacity onPress={onPress} style={styles.card}>
          <Image source={{ uri: image }} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
            <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onButton1Press}>
            <Text style={styles.buttonText}>Approve</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={onButton2Press}>
            <Text style={styles.buttonText}>Reject</Text>
          </TouchableOpacity>
        </View>
          </View>
        </TouchableOpacity>
      );


  return (
    <View 
style = {styles.container}>
      <Stack.Screen
        options={{
          title: 'customer Event Host Home',
        }}
      />
      
     
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    padding:5,
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
    height:250,
    justifyContent: 'center',
    alignItems: 'center',
},
cardImage: {
  width: 360,
  height: 100,
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
buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
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
});
