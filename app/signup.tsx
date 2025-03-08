import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert,ScrollView,ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter,useNavigation  } from 'expo-router';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { ThemedView } from '@/components/ThemedView';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Signup() {

    const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [dob, setDob] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [description, setDescription] = useState('');
  const [post, setPost] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [loading,setLoading] = useState(false);
  

        const navigation = useNavigation();
      
        useEffect(() => {
           navigation.setOptions({ 
                   headerShown: true,
                   headerStyle: {
                   shadowColor: 'transparent',  // Remove shadow on iOS
                   elevation: 0,  // Remove shadow on Android
                   //opacity: .4,
                   backgroundColor: 'white', // Optional: Keep header background transparent
                   height: 100,
                 }, 
                 headerTitleAlign: 'start',
                 headerTitleStyle: {
                   fontSize: 18,
                   fontWeight: 'bold',
                   lineHeight: 100, // Matches header height
                   flex: 1, 
                 },
                 headerTitle: () => (
                   <View style={{ flexDirection: 'row',  justifyContent: 'space-between', width: '100%' }}>
                     <Text style={{ fontSize: 18, fontWeight: 'bold',  flex: 1 }}>Sign Up</Text>
                     <Icon
                       //name="log-out-outline"
                       size={24}
                       color="#00adf5"
                       style={{ marginRight: 15 }}
                       onPress={handleSignup}
                     />
                   </View>
                 ),
               
                 headerTintColor: '#000000',});
               },  [navigation]);


  const handleSignup =async () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Basic validation example
    if (!name || !email || !confirmEmail || !password || !dob || !address1 || !address2 || !city || !country || !post || !mobileNumber) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }
    if (email !== confirmEmail || !emailRegex.test(email) || password.length < 3 || password !== confPassword) {
      Alert.alert('Error', 'Please enter valid details!');
      return;
    }

    // Alert.alert('Success', 'Account created successfully!', [
    //     {
    //       text: 'OK',
    //       onPress: () => router.replace('/login'), // Navigate to login page on OK press
    //     },
    //   ]);

    setLoading(true);
    try{
      console.log(dob);
      const response = await fetch('https://setmystage.ddns.net/api/v1/customers/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': 'poiwuhjd-plsiej-bvhue-isvhnd', 
        },
        body: JSON.stringify({ name: name,description:description,DOB:dob,addressLine1:address1,addressLine2:address2,city:city,postcode:post,country:country,email:email,mobile:mobileNumber,password: password ,isVendor:false,lat: "11.9",long: "2.4"}),
      });

      const data = await response.json();
      console.log(data);
      

      if (response.ok) {
         Alert.alert(
            'Set my Stage',
            'Account created successfully!',
            [
              { text: 'OK', onPress: () => router.replace('../login') },
            ],
            { cancelable: false }
          );
      } else {
        const errorMessage = data.details?.message || 'Something went wrong!';
      throw new Error(errorMessage);
        //Alert.alert('Sign up Failed', data.message || 'Something went wrong!!');
      }

    } catch (error: unknown) {
      console.log(error);
     if (error instanceof Error) {
     Alert.alert('Error', error.message, [{ text: 'OK' }]);
     }else{
      Alert.alert('Error', 'Something went wrong. Please try again.');
     }
    } finally {
      setLoading(false);
    }

  };

  const handleProfilePicUpload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePic(result.assets[0].uri);
    }
  };

  return (
       <SafeAreaProvider>
       <SafeAreaView style={{flex:1,backgroundColor:'white',marginTop:25}}>
       {loading && (
        <View style={[StyleSheet.absoluteFill, styles.loadingOverlay]}>
          <ActivityIndicator size="large" color="#00adf5" />
        </View>
      )}
       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ThemedView style={styles.container}>
    <View style={styles.container}>

   

      {/* Profile Picture */}
      <TouchableOpacity onPress={handleProfilePicUpload}>
        <Image
          source={profilePic ? { uri: profilePic } : require('../assets/images/profile-placeholder.png')}
          style={styles.profilePic}
        />
        <Text style={styles.uploadText}>Upload Profile Picture</Text>
      </TouchableOpacity>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="* Name"
        multiline={false}
        maxLength={50} 
        numberOfLines={1}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="* Email"
        value={email}
        multiline={false}
        scrollEnabled={true}
        numberOfLines={1} 
        maxLength={50} 
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="* Confirm Email"
        value={confirmEmail}
        maxLength={50} 
        onChangeText={setConfirmEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="* Password"
        value={password}
        multiline={false}
        maxLength={50} 
        numberOfLines={1}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="* Confirm Password"
        value={confPassword}
        multiline={false}
        maxLength={50} 
        numberOfLines={1}
        onChangeText={setConfPassword}
        secureTextEntry
      />
      <TextInputMask
        type={'datetime'}
        options={{ format: 'DD-MM-YYYY' }}
        maxLength={10}
        style={styles.input}
        placeholder="* Date of birth (dd-mm-yyyy)"
        keyboardType="numeric"
        value={dob}
        onChangeText={setDob}
      />
      <TextInput
        style={styles.input}
        multiline={false}
        maxLength={50} 
        scrollEnabled={true}
        numberOfLines={1} 
        placeholder="* Address line1"
        value={address1}
        onChangeText={setAddress1}
      />
      <TextInput
        style={styles.input}
        multiline={false}
        maxLength={50}
        scrollEnabled={true}
        numberOfLines={1} 
        value={address2}
        onChangeText={setAddress2}
        placeholder="* Address line 2"
      />
      <TextInput
        style={styles.input}
        multiline={false}
        maxLength={50} 
        scrollEnabled={true}
        numberOfLines={1} 
        value={city}
        onChangeText={setCity}
        placeholder="* City"
      />
      <TextInput
        style={styles.input}
        multiline={false}
        maxLength={50} 
        scrollEnabled={true}
        numberOfLines={1} 
        value={country}
        onChangeText={setCountry}
        placeholder="* Country"
      />
      <TextInput
        style={styles.input}
        multiline={false}
        maxLength={50} 
        scrollEnabled={true}
        numberOfLines={1} 
        value={post}
        onChangeText={setPost}
        placeholder="* Postcode"
      />
      <TextInput
        style={styles.input}
        placeholder="* Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="numeric"
        maxLength={11}
        multiline={false}
      />
      <TextInput
        style={[styles.input,{height:150,textAlignVertical:'top'}]}
        multiline={true}
        maxLength={300} 
        value={description}
        onChangeText={setDescription}
        placeholder="Description (Max 300 characters)"
      />

      {/* Signup Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </ThemedView>
    </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  uploadText: {
    textAlign: 'center',
    color: '#007bff',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#1BE7FF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999, // Ensure it appears above everything
  },
});
