import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your school email</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Text style={styles.tosPrompt}>
        By logging on, you agree to the
      </Text>
      <Text style={styles.tosPrompt}>
        <Text style={styles.link}> Terms of Service </Text> 
        and 
        <Text style={styles.link}> Privacy Policy</Text>
      </Text>

      <View style={styles.button}>
        <Button title="Continue" onPress={() => {}} />
          
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
});
