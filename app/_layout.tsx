import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack,Redirect, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect,useState } from 'react';
import 'react-native-reanimated';

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



  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack 
      initialRouteName='login'>
        <Stack.Screen name="login" options={{ headerShown: false }}/>
        <Stack.Screen name="signup" options={{ headerShown: false }}/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(customerTabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" 
        options={{
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
