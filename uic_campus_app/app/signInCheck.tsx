import { Text, View, Button, StyleSheet } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { router } from "expo-router";

export default function signIn() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/authentication');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.title}>Welcome! You are signed in.</Text>
          <Text style={styles.email}>Email: {user.email}</Text>
          <Text style={styles.status}>Status: ✅ Authenticated</Text>
          <View style={styles.buttonContainer}>
            <Button title="Logout" onPress={handleLogout} />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.title}>You are not signed in.</Text>
          <Text style={styles.status}>Status: ❌ Not Authenticated</Text>
          <View style={styles.buttonContainer}>
            <Button 
              title="Go to Login" 
              onPress={() => router.push('/authentication')} 
            />
          </View>
        </>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  email: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
    color: '#333',
  },
  status: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: 16,
  },
});