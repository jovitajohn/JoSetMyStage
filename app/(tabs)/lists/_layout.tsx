import { Stack } from "expo-router"
import { createStackNavigator } from '@react-navigation/stack';
import propertyDetail from "./propertyDetail"
import ListingScreen from "./listingScreen";
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';



export default function ChatsLayout() {

   
    
    type RootStackParamList = {
        listing: undefined; // Parameters for 'listing' screen
        propertyDetail: undefined; // Parameters for 'detaildata' screen
      };

      const Stack = createStackNavigator<RootStackParamList>();

      type ListingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'listing'>;

const navigation = useNavigation<ListingScreenNavigationProp>();


    return (
            // <Stack>

            //     <Stack.Screen name="listingScreen" /> 
            //     <Stack.Screen name="detaildata" /> 
            // </Stack>    
            <Stack.Navigator initialRouteName="listing">
                 <Stack.Screen name="listing" component={ListingScreen} />
                 <Stack.Screen name="propertyDetail" component={propertyDetail} />
            </Stack.Navigator>
        )
}