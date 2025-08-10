import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen: React.FC = () => {
  // State to store the email input and any error messages
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Function to handle when user clicks "Continue"
  const handleContinue = () => {
    // Clear any previous errors
    setError("");
    
    // Check if email is empty
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    
    // Check if email format is valid (using regex to ensure proper email format)
    const emailRegex = /^[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    // email is valid, inspect browser console
    console.log("Email is valid:", email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your school email</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        onSubmitEditing={handleContinue}
        returnKeyType="done"
      />

      {/* Show error message if there is one */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}


      {/* Terms of service links, not active atm */}
      <Text style={styles.tosPrompt}>
        By logging on, you agree to the
      </Text>
      <Text style={styles.tosPrompt}>
        <Text style={styles.link}> Terms of Service </Text> 
        and 
        <Text style={styles.link}> Privacy Policy</Text>
      </Text>

      {/* Continue button and call to check email validation */}
      <View style={styles.button}>
        <Button title="Continue" onPress={handleContinue} />
          
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    marginBottom: 32,
    fontWeight: '600',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    marginTop: 8,
    marginBottom: 24,
  },
  tosPrompt: {
    textAlign: 'center',
    fontSize: 14,
    color: '#777',
  },
  link: {
    color: '#007bff',
    fontWeight: '500',
  },
  errorText: {
    color: '#ff0000',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
  validText: {
    color: '#00FF80',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  }
});
