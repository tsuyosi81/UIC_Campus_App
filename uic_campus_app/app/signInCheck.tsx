import { Text, View, Button, StyleSheet } from "react-native";

export default function signIn() {
  return (
    
    <View  style={styles.container}>
      <Text style={styles.title}>
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#ffffffff',
  },
  title: {
    fontSize: 15,
    marginBottom: 32,
    fontWeight: '600',
    textAlign: 'center',
  }
});