import { Stack } from "expo-router"
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import customerHome from "./customerHome";
import bookingDetail from "./customerBookingDetail";
import customerTimeSlot from "./customerTimeSlot";



export default function HomeLayout() {

   
    
    type RootStackParamList = {
        
        customerHome: undefined; // Parameters for 'home' screen
        booking: undefined;
        timeSlot: undefined;
      };

      const Stack = createStackNavigator<RootStackParamList>();

      type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'customerHome'>;

const navigation = useNavigation<HomeNavigationProp>();


    return (   
            <Stack.Navigator initialRouteName="customerHome">
                <Stack.Screen name="customerHome" component={customerHome} />
                 <Stack.Screen name="booking" component={bookingDetail} />
                 <Stack.Screen name="timeSlot" component={customerTimeSlot} />
             </Stack.Navigator>
        )
}