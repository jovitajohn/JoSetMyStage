import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack,Redirect, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect,useState } from 'react';
import 'react-native-reanimated';
import { Alert, BackHandler } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false); // Track mount status
  const isAuthenticated = false; // Replace with real authentication check.




  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      setIsMounted(true);
    }
  }, [loaded]);

  useEffect(() => {
    if (isMounted) {
    if (!isAuthenticated) {
      router.replace('/login'); // Redirect to login if not authenticated.
    }
  }
  }, [isMounted,isAuthenticated]);


  if (!loaded) {
    return null;
  }

  //Exit confirmation
  useEffect(() => {
    const handleBackPress = () => {
      Alert.alert(
        'Exit App',
        'Do you want to exit?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Exit', onPress: () => BackHandler.exitApp() },
        ],
        { cancelable: true }
      );
      return true; // Prevent default back action
    };
  
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
  
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);



  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack 
      // screenOptions={{
      //     headerShown: true, // Show header globally
      //     headerTransparent: true, // Makes the header background transparent
      //     headerStyle: {
      //       backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
      //     },
      //     headerTintColor: '#fff', // White text/icons
      //     headerTitleStyle: {
      //       fontWeight: 'bold',
      //       fontSize: 20,
      //     },
      //   }}
      initialRouteName='login'>
        <Stack.Screen name="login" options={{ headerShown: false,headerTransparent: true, }}/>
        <Stack.Screen name="signup" options={{ headerShown: false,headerTransparent: true, }}/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false,headerTransparent: true, }} />
        <Stack.Screen name="(customerTabs)" options={{ headerShown: false,headerTransparent: true,}} />
        <Stack.Screen name="+not-found" 
        options={{
          headerTransparent: true,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />  
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
