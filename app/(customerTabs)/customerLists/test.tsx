import { StyleSheet,View, Image, Platform } from 'react-native';
import { Stack,useNavigation } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect } from 'react';
import { Link } from 'expo-router';

export default function test() {

      const navigation = useNavigation();
    
      useEffect(() => {
        navigation.setOptions({ headerShown: true });
      }, [navigation]);
    

  return (
      <View
        style = {styles.container}>
         <Stack.Screen
          options={{
            title: 'lists',
          }}
        />
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Venue settings page</ThemedText>
           <Link href="/lists/detaildata">
                                        view
                        </Link>
        </ThemedView>
       
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
