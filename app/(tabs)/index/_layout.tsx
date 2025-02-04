import { Stack } from "expo-router"
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import VendorHome from "./vendorHome";
import bookingDetail from "./bookingDetail";



export default function HomeLayout() {

   
    
    type RootStackParamList = {
        
        vendorHome: undefined; // Parameters for 'home' screen
        booking: undefined;
      };

      const Stack = createStackNavigator<RootStackParamList>();

      type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'vendorHome'>;

const navigation = useNavigation<HomeNavigationProp>();


    return (   
            <Stack.Navigator initialRouteName="vendorHome">
                <Stack.Screen name="vendorHome" component={VendorHome} />
                 <Stack.Screen name="booking" component={bookingDetail} />
             </Stack.Navigator>
        )
}