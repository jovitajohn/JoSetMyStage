import { View, Text, TextInput,Alert, Button, TouchableOpacity,StyleSheet,ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import React,{useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function LoginScreen() {
  const router = useRouter();
  const [userName, onChangeText] = useState('');
  const [password,onChangePassword] = useState('');
  const [loading,setLoading] = useState(false);

  const handleLoginTest =async () => {
    if(userName.trim().startsWith('C')){
   router.push('./(customerTabs)/customerIndex'); // Navigate to the customertabs screen.
   }else if(userName.trim().startsWith('V')){
     router.push('./(tabs)'); // Navigate to the tabs screen.
   }else{
     alert('Invalid login credentials');
   }
  }
  const handleLoginApi =async () => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userName || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }else if(!emailRegex.test(userName) || password.length < 3){
      Alert.alert('Error', 'Please enter valid details');
      return;
    }

    setLoading(true);
    try{

      const response = await fetch('https://setmystage.ddns.net/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': 'poiwuhjd-plsiej-bvhue-isvhnd', 
        },
        body: JSON.stringify({ email: userName,password: password }),
      });

      const data = await response.json();
      console.log(data);
      

      if (response.ok) {
        const { jwtToken, isVendor } = data;

        // Save token in AsyncStorage
        await AsyncStorage.setItem('jwtToken',jwtToken);

        // Navigate based on role
        if (isVendor == 0) {
          router.push('./(customerTabs)/customerIndex');
        } else {
          router.push('./(tabs)');
        } 
      } else {
        Alert.alert('Login Failed', data.message || 'Invalid credentials');
      }

    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
   
  };

  return (
    <View style={styles.container}>
      {loading && (
              <View style={[StyleSheet.absoluteFill, styles.loadingOverlay]}>
                <ActivityIndicator size="large" color="#00adf5" />
              </View>
            )}
        <View style={styles.loginContainer}>
            <Text style={styles.title}>Login</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Email" 
              multiline={false}
              scrollEnabled={true}
              numberOfLines={1} 
              maxLength={50} 
              keyboardType="email-address"
              onChangeText={onChangeText} 
            />
            <TextInput 
              style={styles.input} 
              placeholder="Password" 
              secureTextEntry 
              multiline={false}
              maxLength={50} 
              numberOfLines={1}
              onChangeText={onChangePassword} 
            />
            {/* <Button 
              title={loading ? 'Logging in...' : 'Login'} 
              onPress={handleLoginApi} 
              disabled={loading} 
            /> */}
            <TouchableOpacity style={styles.button} onPress={handleLoginApi}>
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>
        </View>
        
        <View style={styles.footerContainer}>
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don't have an account? </Text>
                <Link href="./signup" style={styles.signupLink}>
                Sign Up
                </Link>
            </View>

            <Link href="./(tabs)" style={styles.signupLink}>
                Forgot password?
                </Link>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
      },
  loginContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
  },
  signupText: {
    fontSize: 14,
    color: '#666',
    marginTop:10,
  },
  signupLink: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: 'bold',
    marginTop:10,
  },
  signupContainer:{
    flexDirection :'row',
  },
  button: {
    backgroundColor: '#1BE7FF',
    padding: 10,
    width:'80%',
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
