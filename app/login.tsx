import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    // Add your authentication logic here.
    const isAuthenticated = true; // Replace with actual authentication logic.

    if (isAuthenticated) {
      router.push('./(tabs)'); // Navigate to the tabs screen.
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.loginContainer}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder="Username" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <Button title="Login" onPress={handleLogin} />
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
});
