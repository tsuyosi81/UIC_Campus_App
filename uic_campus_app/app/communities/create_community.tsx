import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native';
import { useAuth } from "../../contexts/AuthContext";
import { router } from "expo-router";
import { database } from "../firebaseConfig";
import { onValue, ref, push } from "firebase/database";
import React from 'react';

export default function Test(){
    const { user, loading } = useAuth();

    if (loading) {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Loading...</Text>
          </View>
        );
      }

    const [desc, setDesc] = React.useState("");
    const [name, setName] = React.useState("");

    const handleSubmit = (email, name, desc) => {
        if (!name || !desc) {
        Error('Please fill in both fields.');
        return;
        }

        // Create an object with the form data
        const newCommunity = {
        id: Math.floor(Math.random() * (10000 - 10)) + 10, //random number from 10-1000
        name: name,
        members_count: 1,
        created_at: new Date(),
        short_description: desc,
        members_list: [{email}],
        };

        const communitiesInDB = ref(database, "communities");
        push(communitiesInDB, newCommunity)

        console.log('Form Data Submitted:', newCommunity);

        router.push({
          pathname: '/communities/[id]',
          params: { id: `${newCommunity.id}` },
      });
    }

    return (
        <View style={styles.container}>
          {user ? (
            <>
              <Text style={styles.title}>Create a New Community</Text>
            <Text style={styles.email}>Email: {user.email}</Text>
              <Text style={styles.status}>User Status: ✅ Authenticated</Text>
              <View style={styles.buttonContainer}>
              </View>

              <TextInput
                    style={styles.input}
                    placeholder="title"
                    value={name}
                    onChangeText={setName}
                    returnKeyType="done"
                    placeholderTextColor= "grey" 
                    />

            <TextInput
                style={styles.input}
                placeholder="description"
                value={desc}
                onChangeText={setDesc}
                returnKeyType="done"
                placeholderTextColor= "grey" 
                    />
            <Button 
                      title={"Continue"} 
                      onPress={() => handleSubmit(user.email, name, desc)} 
                      disabled={loading}
                    />
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
    backgroundColor: '#ffffff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
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

// const community4: Community = {
//   id: 4,
//   name: "Gun Club",
//   members_count: 30,
//   created_at: new Date("2030-08-25T09:00:00Z"),
//   short_description: "We Love Guns",
// };

// push(communitiesInDB, community4);

// const community2: Community = {
//   id: 2,
//   name: "Psychology Club",
//   members_count: 150,
//   created_at: new Date("2022-09-10T11:30:00Z"),
//   short_description: "A club for psychology students and enthusiasts to discuss theories, conduct research, and host guest speakers.",
// };

// const community3: Community = {
//   id: 3,
//   name: "Environmental Science Society",
//   members_count: 80,
//   created_at: new Date("2023-01-15T14:00:00Z"),
//   short_description: "A group dedicated to promoting sustainability and environmental awareness through projects and community outreach.",
// };

// push(communitiesInDB, community2)

// const ForYouCommunities : Community[] = [
//   community1, community2, community3,
// ]