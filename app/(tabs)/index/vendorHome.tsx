import { View,Text, StyleSheet, FlatList,ScrollView,TouchableOpacity,Alert,Image } from 'react-native';
import { Stack,useNavigation } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState,useEffect,useRef, useCallback} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Calendar,DateData, CalendarList } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardAvoidingView, Platform } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


export default function VendorHome() {

   type RootStackParamList = {
          index: undefined; // Parameters for 'home' screen
          booking: undefined;

        };
  
        // const Stack = createStackNavigator<RootStackParamList>();
  
        type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'index'>;
  
  const navigation = useNavigation<HomeNavigationProp>();


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
                           <Text style={{ fontSize: 18, fontWeight: 'bold',  flex: 1 }}>Set My Stage</Text>
                           <Icon
                            name="add-circle-outline" // Icon name from Ionicons
                            size={24}
                            color="#00adf5"
                            style={{ marginRight: 15 }}
                            onPress={() => Alert.alert('Button Pressed', `Block calender coming soon`)}   // Navigate to the new screen //alert('Coming soon - Add new listing!')}
                          />
                         </View>
                       ),
                     
                       headerTintColor: '#000000',});
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

  //bottom sheet
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
      <View style = {styles.container}>
        
        <ThemedView style={styles.titleContainer}>
          <Calendar
          onDayPress={(day: DateData) => {
            setSelected(day.dateString);
            console.log(day.dateString);
            
          }}
                  markedDates={{
                    [selected]: {
                      selected: true,
                      selectedColor: '#00adf5', // Custom background color for the selected date
                      selectedTextColor: '#ffffff', // Custom text color for the selected date
                    },
                      '2025-02-10': { marked: true },
                      '2025-02-26': {
                          marked: true, dotColor: 'red',
                          activeOpacity: 0
                      },
                  }}
                  theme={{
                      backgroundColor: '#ffffff',
                      calendarBackground: '#ffffff',
                      textSectionTitleColor: '#b6c1cd',
                      selectedDayBackgroundColor: '#00adf5',
                      selectedDayTextColor: '#ffffff',
                      todayTextColor: '#00adf5',
                      dayTextColor: '#2d4150',
                      textDisabledColor: '#d9e1e8',
                      dotColor: '#00adf5',
                      selectedDotColor: '#ffffff',
                      arrowColor: '#00adf5',
                      monthTextColor: '#00adf5',
                      indicatorColor: 'blue',
                      textDayFontFamily: 'monospace',
                      textMonthFontFamily: 'monospace',
                      textDayHeaderFontFamily: 'monospace',
                      textDayFontSize: 16,
                      textMonthFontSize: 16,
                      textDayHeaderFontSize: 16
                  }}
              />
              
                  <View style={styles.line}></View>
                        <FlatList
                            contentContainerStyle={{ flexGrow: 1 }} // 🔹 Ensures scrolling works
                            style={{ flex: 1 }} // 🔹 Takes full height inside BottomSheet
                            data={persons}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => 
                              <CardItem 
                                title={item.name}
                                description={'item.description'}
                                image={'https://archive.org/download/placeholder-image/placeholder-image.jpg'}
                                // onPress={() => Alert.alert('Card Pressed', `You pressed ${item.name}`)}
                                onPress={() => navigation.navigate('booking')}
                                onButton1Press={() => Alert.alert('Button 1 Pressed', `You pressed Button 1 on ${item.name}`)}
                                onButton2Press={() => Alert.alert('Button 2 Pressed', `You pressed Button 2 on ${item.name}`)}
                              />
                            }
                        />
                      
                
        </ThemedView>
      
      </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    padding:5,
    backgroundColor: 'white',
  },
  titleContainer: {
    flex:1,
    flexDirection: 'column',
    padding: 1,
    backgroundColor: 'white',
    gap: 8,
  },
  listContainer: {
    flex:1,
    flexDirection: 'column',
    padding: 1,
    marginTop:20,
    backgroundColor: 'white',
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
     backgroundColor: "#00adf5",
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
  backgroundColor: '#6DCE5E',
  borderRadius: 5,
  alignItems: 'center',
  marginHorizontal: 5,
},
buttonSecondary: {
  backgroundColor: '#E74A4C',
},
buttonText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',
},
});
